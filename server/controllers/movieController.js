const { Router } = require('express');
const router = Router();

const getAll = require('../services/movie/get/getAll');
const getOne = require('../services/movie/get/getOne');
const addOne = require('../services/movie/add/addOne');
const editOne = require('../services/movie/edit/editOne');
const deleteOne = require('../services/movie/delete/deleteOne');

// Get All
router.get('/', (req, res) => {
    getAll()
        .then(movies => res.json({ responseData: movies }))
        .catch(error => res.json({ error }));
});

// Get One
router.get('/:movieId', (req, res) => {
    getOne(req.params.movieId)
        .then(movie => res.json({ responseData: movie }))
        .catch(error => res.json({ error }));
});

// Add One
router.post('/add', (req, res) => {
    addOne(req.body)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

// Edit One
router.put('/:movieId/edit', (req, res) => {
    editOne(req.body, req.params.movieId)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

// Delete One
router.delete('/:movieId/delete', (req, res) => {
    deleteOne(req.params.movieId, req.query.userId)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

module.exports = router;