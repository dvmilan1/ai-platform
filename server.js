const express = require('express');
const path = require('path');
require('dotenv').config();

const { requireAuth, requireRol } = require('./middleware/auth');
const { logActie } = require('./middleware/actielog');
const { checkInactiviteit } = require('./middleware/inactiviteit');

const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const talentpoolRoutes = require('./routes/talentpool');
app.use('/api/talentpool', talentpoolRoutes);

// Statische bestanden
app.use(express.static(path.join(__dirname)));

// Admin panel route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Config endpoint — publiek
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_ANON_KEY
  });
});

// Claude endpoint — beveiligd
app.post('/api/claude', requireAuth, checkInactiviteit, logActie, async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: req.body.max_tokens || 1000,
        messages: req.body.messages
      })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Er ging iets mis' });
  }
});

// Test endpoint RBAC — alleen eigenaar
app.get('/api/admin', requireAuth, checkInactiviteit, requireRol('eigenaar'), logActie, (req, res) => {
  res.json({ 
    bericht: `Welkom ${req.user.email} — je hebt eigenaar toegang`,
    gebruiker: req.user
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Meridavo draait op poort ${PORT}`);
});
