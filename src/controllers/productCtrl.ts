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
    try {
      const { title, price, description, category, image } = req.body;

      const product = await Products.findByIdAndUpdate(
        req.params.id,
        {
          title,
          price,
          description,
          category,
          image,
        },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ msg: 'This product does not exist' });
      }

      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;

      const product = await Products.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ msg: 'This product does not exist' });
      }

      return res.status(200).json({ msg: 'Deleted Successfully' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default productCtr;
