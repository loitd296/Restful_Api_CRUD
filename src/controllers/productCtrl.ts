import express from 'express';
import Products from '../models/productModel';

const productCtr = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();

      res.status(200).json({ products });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ msg: 'Product not exist' });
      }
      res.status(200).json({ product });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;

      const newProduct = new Products({
        title,
        price,
        description,
        category,
        image,
      });
      await newProduct.save();

      return res.status(200).json(newProduct);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    res.json({ msg: `Update product by id ${req.params.id}` });
  },
  deleteProduct: async (req, res) => {
    res.json({ msg: `delete a product by id ${req.params.id}` });
  },
};

export default productCtr;
