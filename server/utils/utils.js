// import axios from 'axios';
const fetch = require('node-fetch');
const { resolve } = require("path");

function getArtworksByCategory (artworks,category){
    const categoryArtworks = artworks.filter(function(artwork){
        return artwork.category === category
    })
    return categoryArtworks
}

function getCategories  (artworks) {
    const categories = [...new Set(artworks.map(artwork => artwork.category))];
    return categories; 
}

const getFakeUrl = () =>{
    return fetch("https://dog.ceo/api/breeds/image/random", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>res.json()).then(res=> {
        if (res.status=="success") {
            return res.message
        } else {
           return new Error('something went wrong')
        }
    })
}

async function convertArtworkUrlToBase64(url){
    let response = await fetch(url);
    let contentType = response.headers.get("Content-Type");
    let buffer = await response.buffer();
    return "data:" + contentType + ';base64,' + buffer.toString('base64');
}

function convertData (categories,artworks){
    const newData = {};
    for (const category of categories) {
        newData[category]=getArtworksByCategory(artworks,category)
    }
    return newData
}

module.exports = {
    convertData:convertData,
    getCategories:getCategories,
    getFakeUrl:getFakeUrl,
    convertArtworkUrlToBase64:convertArtworkUrlToBase64,
}