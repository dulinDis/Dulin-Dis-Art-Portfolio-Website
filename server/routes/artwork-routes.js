const express = require("express");
const {
  addArtwork,
  getAllArtworks,
  getCategoryArtworks,
  getArtwork,
  updateArtwork,
  deleteArtwork,
} = require("../controllers/artwork-controller");

const router = express.Router();

router.post("/artwork", addArtwork);
router.get("/artwork", getAllArtworks);
router.get("/artwork/:category", getCategoryArtworks);
router.get("/artwork/:category/:id", getArtwork);



// router.get("/artwork/:id", getArtwork);
// router.put("/artwork/:id", updateArtwork);
// router.delete("/artwork/:id", deleteArtwork);


router.get("/quit", function (req, res) {
  console.log("called quit");
  res.send({ result: "Goodbye" });
});

module.exports = {
  routes: router,
};
