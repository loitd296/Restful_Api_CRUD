import express from 'express';

const productCtr = {
  getProducts: async (req, res) => {
    res.json({ msg: 'Get all products.' });
  },
  getProduct: async (req, res) => {
    res.json({ msg: `Get one product by id ${req.params.id}` });
  },
  addProduct: async (req, res) => {
    res.json({ msg: 'Add new product' });
  },
  updateProduct: async (req, res) => {
    res.json({ msg: `Update product by id ${req.params.id}` });
  },
  deleteProduct: async (req, res) => {
    res.json({ msg: `delete a product by id ${req.params.id}` });
  },
};

export default productCtr;
