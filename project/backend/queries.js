'use strict';

const { promisify } = require('util');
let database;

const UserQueries = {};
const GameQueries = {};
const CategoryQueries = {};
const WishlistQueries = {};

const init = () => {
  database = require('./database').getConnection();
  return {
    UserQueries,
    GameQueries,
    CategoryQueries,
    WishlistQueries,
  };
};

UserQueries.add = async (user) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

UserQueries.getOne = async (id) => {
  console.log(database);
  return await promisify(database.get.bind(database))
    (`SELECT * FROM users WHERE id=${id}`);
};

UserQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM users');
};

UserQueries.update = async (id, user) => {
  return await promisify(database.run.bind(database))
    (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

UserQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM users WHERE id=${id}`);
};

GameQueries.add = async (product) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO products(name, img_src, price, category_id) Values('${product.name}', '${product.img}', '${product.price}', ${product.category})`);
};

GameQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT products.id, products.name, products.img_src, products.price, category.name AS category FROM products INNER JOIN category ON products.category_id=category.id WHERE products.id=${id}`);
};

GameQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT products.id, products.name, products.img_src, products.price, category.name AS category FROM products INNER JOIN category ON products.category_id=category.id');
};

GameQueries.update = async (id, product) => {
  return await promisify(database.run.bind(database))
    (`UPDATE products SET name='${product.name}', img_src='${product.img}', price='${product.price}', category_id=${product.category} WHERE id=${id}`);
};

GameQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM products WHERE id=${id}`);
};

CategoryQueries.add = async (category) => {
  return await promisify(database.run.bind(database))
   (`INSERT INTO category(name) Values('${category.name}')`);
};

CategoryQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
   (`SELECT * FROM category WHERE id=${id}`);
};

CategoryQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
   ('SELECT * FROM category');
};

CategoryQueries.update = async (id, category) => {
  return await promisify(database.run.bind(database))
    (`UPDATE category SET name='${category.name}' WHERE id=${id}`);
};

CategoryQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM category WHERE id=${id}`);
};

WishlistQueries.add = async (wishlist) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO wishlist(user_id, product_id) Values(${wishlist.user}, ${wishlist.product})`);
};

WishlistQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT * FROM wishlist WHERE id=${id}`);
};

WishlistQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM wishlist');
};

WishlistQueries.getAllByUser = async (id) => {
  return await promisify(database.all.bind(database)) 
    (`SELECT wishlist.id, products.name, products.img_src, products.price, category.name AS category FROM wishlist INNER JOIN products ON products.id=wishlist.product_id INNER JOIN category ON products.category_id=category.id WHERE wishlist.user_id=${id}`);
};

WishlistQueries.update = async (id, wishlist) => {
  return await promisify(database.run.bind(database))
    (`UPDATE wishlist SET user_id=${wishlist.user}, product_id=${wishlist.product} WHERE id=${id}`);
};

WishlistQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM wishlist WHERE id=${id}`);
};

module.exports = {
  init,
};
