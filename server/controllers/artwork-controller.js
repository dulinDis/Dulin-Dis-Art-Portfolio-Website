"use strict";
const firebase = require("../db");
const Artwork = require("../models/artwork");
const {
  convertData,
  getCategories,
  getFakeUrl,
  convertArtworkUrlToBase64,
} = require("../utils/utils");
const firestore = firebase.firestore();

const addArtwork = async (req, res, next) => {
  try {
    const data = req.body;
    // const base64Img =  await convertArtworkUrlToBase64(data.url);
    await firestore.collection("artworks").doc().set(data);
    res.send(`record saved successfully:${data}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//getallartworks in proper format - real urls
const getAllArtworks = async (req, res, next) => {
  try {
    const artworks = await firestore.collection("artworks");
    const data = await artworks.get();
    const artworksArray = [];
    if (data.empty) {
      res.status(404).send("no artworks found");
    } else {
      data.forEach((doc) => {
        const artwork = new Artwork(
          doc.id,
          doc.data().title,
          doc.data().description,
          doc.data().size,
          doc.data().technique,
          doc.data().category,
          doc.data().available,
          doc.data().url
        );
        artworksArray.push(artwork);
      });

      const categories = await getCategories(artworksArray);
      const convertedData = await convertData(categories, artworksArray);
      const finalData = await Promise.all(
        artworksArray,
        categories,
        convertData
      ).then((finalArtworks) => {
        res.send(finalArtworks);
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCategoryArtworks = async (req, res, next) => {
  try {
    const artworks = await firestore
      .collection("artworks")
      .where("category", "==", req.params.category);
    const data = await artworks.get();
    const artworksArray = [];
    if (data.empty) {
      res.status(404).send("no artworks found");
    } else {
      data.forEach((doc) => {
        const artwork = new Artwork(
          doc.id,
          doc.data().title,
          doc.data().description,
          doc.data().size,
          doc.data().technique,
          doc.data().category,
          doc.data().available,
          doc.data().url
        );
        artworksArray.push(artwork);
      });

      const categories = await getCategories(artworksArray);
      const convertedData = await convertData(categories, artworksArray);
      const finalData = await Promise.all(
        artworksArray,
        categories,
        convertedData
      ).then((finalArtworks) => {
        res.send(finalArtworks);
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getArtwork = async (req, res, next) => {
  try {
    const id = req.params.id;
    const artwork = await firestore.collection("artworks").doc(id);
    const data = await artwork.get();
    if (!data.exists) {
      res.status(404).send("Artwork with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateArtwork = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const artwork = await firestore.collection("artworks").doc(id);
    await artwork.update(data);
    //also needs to update the string

    res.send("Artwork record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteArtwork = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("artworks").doc(id).delete();
    res.send("Artwork deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addArtwork,
  getCategoryArtworks,
  getAllArtworks,
  getArtwork,
  updateArtwork,
  deleteArtwork,
};
