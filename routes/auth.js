const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const router = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Wachtwoord vergeten — stuur reset link
router.post('/wachtwoord-vergeten', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'E-mailadres is verplicht' });
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://meridavo.com/reset-wachtwoord'
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Altijd succesbericht — nooit verklappen of e-mail bestaat
    res.json({ 
      bericht: 'Als dit e-mailadres bekend is, ontvang je een resetlink' 
    });

  } catch (error) {
    res.status(500).json({ error: 'Er ging iets mis' });
  }
});

// Wachtwoord resetten met token
router.post('/reset-wachtwoord', async (req, res) => {
  const { nieuw_wachtwoord } = req.body;
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!nieuw_wachtwoord || nieuw_wachtwoord.length < 8) {
    return res.status(400).json({ 
      error: 'Wachtwoord moet minimaal 8 tekens zijn' 
    });
  }

  try {
    const { error } = await supabase.auth.updateUser({
      password: nieuw_wachtwoord
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ bericht: 'Wachtwoord succesvol gewijzigd' });

  } catch (error) {
    res.status(500).json({ error: 'Er ging iets mis' });
  }
});

module.exports = router;
