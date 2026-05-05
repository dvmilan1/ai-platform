const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const { requireAuth } = require('../middleware/auth');
const { logActie } = require('../middleware/actielog');

const router = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Kandidaat geeft toestemming voor talentpool
router.post('/toestemming', async (req, res) => {
  const { kandidaat_id, email } = req.body;

  if (!kandidaat_id || !email) {
    return res.status(400).json({ error: 'Kandidaat ID en email zijn verplicht' });
  }

  try {
    const vervaldatum = new Date();
    vervaldatum.setFullYear(vervaldatum.getFullYear() + 1);

    const { error } = await supabase
      .from('candidates')
      .update({
        talentpool_toestemming: true,
        talentpool_datum: new Date().toISOString(),
        talentpool_vervaldatum: vervaldatum.toISOString()
      })
      .eq('id', kandidaat_id);

    if (error) throw error;

    res.json({ 
      bericht: 'Toestemming geregistreerd — kandidaat bewaard tot ' + 
        vervaldatum.toLocaleDateString('nl-NL')
    });

  } catch (error) {
    res.status(500).json({ error: 'Er ging iets mis' });
  }
});

// Toestemming intrekken
router.post('/intrekken', async (req, res) => {
  const { kandidaat_id } = req.body;

  if (!kandidaat_id) {
    return res.status(400).json({ error: 'Kandidaat ID is verplicht' });
  }

  try {
    const { error } = await supabase
      .from('candidates')
      .update({
        talentpool_toestemming: false,
        talentpool_datum: null,
        talentpool_vervaldatum: null
      })
      .eq('id', kandidaat_id);

    if (error) throw error;

    res.json({ bericht: 'Toestemming ingetrokken — kandidaat verwijderd uit talentpool' });

  } catch (error) {
    res.status(500).json({ error: 'Er ging iets mis' });
  }
});

// Automatisch verlopen toestemmingen verwijderen
router.delete('/verlopen', requireAuth, logActie, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('candidates')
      .update({
        talentpool_toestemming: false,
        talentpool_datum: null,
        talentpool_vervaldatum: null
      })
      .lt('talentpool_vervaldatum', new Date().toISOString())
      .eq('talentpool_toestemming', true);

    if (error) throw error;

    res.json({ bericht: 'Verlopen toestemmingen verwijderd' });

  } catch (error) {
    res.status(500).json({ error: 'Er ging iets mis' });
  }
});

module.exports = router;
