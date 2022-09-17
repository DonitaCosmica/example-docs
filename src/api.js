import express from 'express';
const app = express;

/**
 * @module API
 */

/**
 * Index Route
 * 
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.send('Welcome'));

/**
 * Index Route
 * 
 * @name users
 * @path {GET} /
 */
app.post('/user', (req, res) => res.send('Welcome'));

/**
 * Index Route
 * 
 * @name products
 * @path {DELETE} /products
 */
app.delete('/product', (req, res) => res.send('Welcome'));

/**
 * Index Route
 * 
 * @name signin
 * @path {POST} /signin
 */
app.post('/signin', (req, res) => res.send('Welcome'));