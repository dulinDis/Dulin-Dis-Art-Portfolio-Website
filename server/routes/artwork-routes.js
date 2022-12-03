const express = require('express');
const {
    addArtwork,
    getAllArtworks,
    getArtwork,
    updateArtwork,
    deleteArtwork
} = require('../controllers/artwork-controller');


const router = express.Router();

router.post('/artwork', addArtwork);
router.get('/artwork', getAllArtworks);
router.get('/artwork/:id', getArtwork);
router.put('/artwork/:id',updateArtwork);
router.delete('/artwork/:id', deleteArtwork);
router.get('/apitest',function(req,res){
    console.log('called api');
    res.send({result:"Hi there"})
});
router.get('/quit',function(req,res){
    console.log('called quit');
    res.send({result:"Goodbye"})
})
// router.post('/send', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
//   });


module.exports = {
    routes: router
}