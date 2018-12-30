const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
  const url = 'mongodb://localhost:27017';
  const dbName = 'libraryApp';

  bookRouter.route('/')
    .get((req, res) => {
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected to the server');

          const db = client.db(dbName);

          const collection = await db.collection('books');
          const books = await collection.find().toArray();

          res.render(
            'bookListView',
            {
              nav,
              title: 'Welcome To The Library World!',
              headingTitle: 'Library',
              books
            }
          );
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Conected to server');

          const db = client.db(dbName);
          const collection = await db.collection('books');
          const book = await collection.findOne({ _id: new ObjectID(id) });
          debug('book');

          res.render(
            'bookView',
            {
              nav,
              title: 'Welcome To The Library World!',
              headingTitle: 'Library',
              book
            }
          );
        } catch (err) {
          debug(err.stack);
        }
      }());
    });
  return bookRouter;
}

module.exports = router;
