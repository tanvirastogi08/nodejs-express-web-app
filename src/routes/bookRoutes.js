const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      author: 'Chinua Achebe',
      country: 'Nigeria',
      imageLink: 'images/things-fall-apart.jpg',
      language: 'English',
      link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
      pages: 209,
      title: 'Things Fall Apart',
      year: 1958
    },
    {
      author: 'Hans Christian Andersen',
      country: 'Denmark',
      imageLink: 'images/fairy-tales.jpg',
      language: 'Danish',
      link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
      pages: 784,
      title: 'Fairy tales',
      year: 1836
    },
    {
      author: 'Dante Alighieri',
      country: 'Italy',
      imageLink: 'images/the-divine-comedy.jpg',
      language: 'Italian',
      link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
      pages: 928,
      title: 'The Divine Comedy',
      year: 1315
    },
    {
      author: 'Unknown',
      country: 'Iceland',
      imageLink: 'images/njals-saga.jpg',
      language: 'Old Norse',
      link: 'https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n',
      pages: 384,
      title: "Nj\u00e1l's Saga",
      year: 1350
    },
    {
      author: 'Jane Austen',
      country: 'United Kingdom',
      imageLink: 'images/pride-and-prejudice.jpg',
      language: 'English',
      link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice\n',
      pages: 226,
      title: 'Pride and Prejudice',
      year: 1813
    },
    {
      author: 'Honor\u00e9 de Balzac',
      country: 'France',
      imageLink: 'images/le-pere-goriot.jpg',
      language: 'French',
      link: 'https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n',
      pages: 443,
      title: 'Le P\u00e8re Goriot',
      year: 1835
    },
    {
      author: 'Samuel Beckett',
      country: 'Republic of Ireland',
      imageLink: 'images/molloy-malone-dies-the-unnamable.jpg',
      language: 'French, English',
      link: 'https://en.wikipedia.org/wiki/Molloy_(novel)\n',
      pages: 256,
      title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
      year: 1952
    },
    {
      author: 'Giovanni Boccaccio',
      country: 'Italy',
      imageLink: 'images/the-decameron.jpg',
      language: 'Italian',
      link: 'https://en.wikipedia.org/wiki/The_Decameron\n',
      pages: 1024,
      title: 'The Decameron',
      year: 1351
    },
    {
      author: 'Jorge Luis Borges',
      country: 'Argentina',
      imageLink: 'images/ficciones.jpg',
      language: 'Spanish',
      link: 'https://en.wikipedia.org/wiki/Ficciones\n',
      pages: 224,
      title: 'Ficciones',
      year: 1965
    },
    {
      author: 'Emily Bront\u00eb',
      country: 'United Kingdom',
      imageLink: 'images/wuthering-heights.jpg',
      language: 'English',
      link: 'https://en.wikipedia.org/wiki/Wuthering_Heights\n',
      pages: 342,
      title: 'Wuthering Heights',
      year: 1847
    },
    {
      author: 'Albert Camus',
      country: 'Algeria, French Empire',
      imageLink: 'images/l-etranger.jpg',
      language: 'French',
      link: 'https://en.wikipedia.org/wiki/The_Stranger_(novel)\n',
      pages: 185,
      title: 'The Stranger',
      year: 1942
    },
    {
      author: 'Paul Celan',
      country: 'Romania, France',
      imageLink: 'images/poems-paul-celan.jpg',
      language: 'German',
      link: '\n',
      pages: 320,
      title: 'Poems',
      year: 1952
    }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Welcome To The Library World!',
          headingTitle: 'Library',
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      // console
      res.render(
        'bookView',
        {
          nav,
          title: 'Welcome To The Library World!',
          headingTitle: 'Library',
          book: books[id]
        }
      );
    });
  return bookRouter;
}

module.exports = router;
