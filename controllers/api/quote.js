const router = require('express').Router();
const {Quote} = require('../../models')

router.get('/', (req, res) => {
    Quote.findAll()
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.delete('/:id', (req, res) => {
  Quote.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(dbQuoteData => {
    if (!dbQuoteData) {
        res.status(404).json({ message: "No quote found with this id" });
        return;
      }
      res.json(dbQuoteData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router