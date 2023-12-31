'use strict'

const { init } = require('./queries');

let Queries = null;

const start = app => {
  Queries = init();
  
  /* auth */
  app.post('/auth', async (req, res) => {
    const body = req.body;
    const user = { id: null, login: body.login, pass: body.pass }
    const users = await Queries.UserQueries.getAll();
    let result = false;
    for (const entry of users) {
      if (entry.login == user.login && entry.pass == user.pass) {
        result = true;
        break;
      }
    }
    return res.send(result);
  });

  /* users */
  app.post('/users', async (req, res) => {
    const body = req.body;
    const user = { id: null, login: body.login, pass: body.pass }
    const result = await Queries.UserQueries.add(user);
    return res.send(result);
  });

  app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.UserQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/users', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.UserQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/users', async (req, res) => {
    const body = req.body;
    const user = { id: null, login: body.login, pass: body.pass }
    const result = await Queries.UserQueries.update(body.id, user);
    return res.send(result);
  });

  app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.UserQueries.delete(id);
    return res.send(result);
  });

  /* products */
  app.post('/products', async (req, res) => {
    const body = req.body;
    const product = { id: null, name: body.name, img: body.img, price: body.price, category: body.category};
    const result = await Queries.GameQueries.add(product);
    return res.send(result);
  });

  app.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.GameQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/products', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.GameQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/products/', async (req, res) => {
    const body = req.body;
    const product = { id: null, name: body.name, img: body.img, price: body.price, category: body.category};
    const result = await Queries.GameQueries.update(body.id, product);
    return res.send(result);
  });

  app.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.GameQueries.delete(id);
    return res.send(result);
  });

  /* categories */
  app.post('/categories', async (req, res) => {
    const body = req.body;
    const category = { id: null, name: body.name }
    const result = await Queries.CategoryQueries.add(category);
    return res.send(result);
  });

  app.get('/categories/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CategoryQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/categories', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CategoryQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/categories', async (req, res) => {
    const body = req.body;
    const category = { id: null, name: body.name }
    const result = await Queries.CategoryQueries.update(body.id, category);
    return res.send(result);
  });

  app.delete('/categories/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.CategoryQueries.delete(id);
    return res.send(result);
  });

  /* wishlist */
  app.post('/wishlist', async (req, res) => {
    const body = req.body;
    console.log(body);
    const wishlist = { id: null, user: body.user, product: body.product }
    const result = await Queries.WishlistQueries.add(wishlist);
    return res.send(result);
  });

  app.get('/wishlist/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.WishlistQueries.getOne(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/wishlist', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.WishlistQueries.getAll(id);
    return res.send(JSON.stringify(result));
  });

  app.get('/wishlist/user/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.WishlistQueries.getAllByUser(id);
    return res.send(JSON.stringify(result));
  });

  app.put('/wishlist', async (req, res) => {
    const body = req.body;
    const wishlist = { id: null, user: body.user, product: body.product }
    const result = await Queries.WishlistQueries.update(body.id, wishlist);
    return res.send(result);
  });

  app.delete('/wishlist/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Queries.WishlistQueries.delete(id);
    return res.send(result);
  });

};

module.exports = {
  start,
};
