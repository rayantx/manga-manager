import express from "express";
import { Manga } from "../models/mangaModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.genre ||
        !req.body.publishYear || 
        !req.body.description
      ) {
        return res.status(400).send({
          message: 'Missing required fields',
        });
      }
  
      const newManga = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publishYear: req.body.publishYear,
        description: req.body.description
      };
  
      const manga = await Manga.create(newManga);
      return res.status(201).send(manga);
  
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
});
  
router.get('/', async (req, res) => {
    try {
      const manga = await Manga.find();
      return res.status(200).json({
        count: manga.length,
        data: manga,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
});
  
router.get('/:id', async (req, res) => {
    try {
  
      const { id } = req.params;
      const manga = await Manga.findById(id);
  
      return res.status(200).send(manga);
  
    }
    catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
});
  
router.put('/:id', async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.genre ||
        !req.body.publishYear || 
        !req.body.description
      ) {
        return res.status(400).send({
          message: 'Missing required fields',
        });
      }
  
      const { id } = req.params;
  
      const result = await Manga.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: 'Manga not found' });
      }
  
      return res.status(200).send({ message: 'Manga updated successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
});
  
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Manga.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: 'Manga not found' });
      }
  
      return res.status(200).send({ message: 'Manga deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
});

export default router;