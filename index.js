const express = require('express');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limite chaque IP à 100 requêtes par fenêtre
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.json());

app.get('/', (req, res) => res.send('Hello Secure World!'));

app.post('/echo',
  body('message').isString().isLength({ min: 1, max: 100 }).withMessage('Le message doit être une chaîne de 1 à 100 caractères.'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: req.body.message });
  }
);

app.listen(3000, () => console.log('App listening on port 3000'));