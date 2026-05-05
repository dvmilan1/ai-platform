const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const logActie = async (req, res, next) => {
  const origineel = res.json.bind(res);

  res.json = async (data) => {
    try {
      await supabase.from('action_log').insert({
        gebruiker_id: req.user?.id || null,
        bedrijf_id: req.user?.bedrijf_id || null,
        actie: `${req.method} ${req.path}`,
        ip_adres: req.ip,
        tijdstip: new Date().toISOString(),
        status: res.statusCode
      });
    } catch (err) {
      // Log nooit blokkeren — stil falen
    }
    return origineel(data);
  };

  next();
};

module.exports = { logActie };
