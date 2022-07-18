import express from 'express';
import productCtr from '../controllers/productCtrl';

const router = express.Router();

router.get('/products', productCtr.getProducts);
router.get('/products/:id', productCtr.getProduct);
router.post('/products', productCtr.addProduct);
router.put('/products/:id', productCtr.updateProduct);
router.delete('/products/:id', productCtr.deleteProduct);

export default router;
