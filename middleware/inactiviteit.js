const TIMEOUT_MINUTEN = 30;

const checkInactiviteit = (req, res, next) => {
  const laatsteActiviteit = req.headers['x-laatste-activiteit'];
  
  if (laatsteActiviteit) {
    const minuten = (Date.now() - parseInt(laatsteActiviteit)) / 60000;
    
    if (minuten > TIMEOUT_MINUTEN) {
      return res.status(401).json({ 
        error: 'Sessie verlopen wegens inactiviteit',
        uitloggen: true
      });
    }
  }

  next();
};

module.exports = { checkInactiviteit };
