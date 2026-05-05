const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Rollen hiërarchie
const ROLLEN = {
  eigenaar: 4,
  manager: 3,
  medewerker: 2,
  gast: 1
};

// Controleer of gebruiker is ingelogd
const requireAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Niet ingelogd' });
    }

    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Sessie verlopen — log opnieuw in' });
    }

    // Haal rol op uit database
    const { data: profiel } = await supabase
      .from('users')
      .select('rol, bedrijf_id')
      .eq('id', user.id)
      .single();

    req.user = {
      id: user.id,
      email: user.email,
      rol: profiel?.rol || 'gast',
      bedrijf_id: profiel?.bedrijf_id
    };

    next();
  } catch (error) {
    res.status(500).json({ error: 'Authenticatie fout' });
  }
};

// Controleer minimale rol
const requireRol = (minimaleRol) => {
  return (req, res, next) => {
    const gebruikerRol = ROLLEN[req.user?.rol] || 0;
    const vereistRol = ROLLEN[minimaleRol] || 0;

    if (gebruikerRol < vereistRol) {
      return res.status(403).json({ 
        error: 'Geen toegang — onvoldoende rechten' 
      });
    }

    next();
  };
};

module.exports = { requireAuth, requireRol, ROLLEN };
