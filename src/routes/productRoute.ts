import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
  res.json({ msg: 'Get all products.' });
});
router.get('/products/:id', (req, res) => {
  res.json({ msg: `Get one product by id ${req.params.id}` });
});
router.post('products', (req, res) => {
  res.json({ msg: 'Add new product' });
});
router.put('/products/:id', (req, res) => {
  res.json({ msg: `Update product by id ${req.params.id}` });
});
router.delete('/products/:id', (req, res) => {
  res.json({ msg: `delete a product by id ${req.params.id}` });
});

export default router;
