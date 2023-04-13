export const getCategoryArtworks = (artworks, category) => {
  return artworks[category];
};

export const getCategoryPreview = (categoryArtworks, category) => {
  return categoryArtworks[category].slice(0, 1)[0];
};

export const getGalleryCategoriesPreview = (artworks) => {
  const galleryCategoriesPreview = [];
  Object.keys(artworks).map((category, index) => {
    galleryCategoriesPreview.push(getCategoryPreview(artworks, category));
  });
  return galleryCategoriesPreview;
};

export const getArtworkById = (artworks, id) => {
  const artwork = artworks.find((artwork) => artwork.id == id);
  console.log("artwork", artwork);
  return artwork;
};

// export const getCategoryArtworks = (artworks, category) => {
//   const categoryArworks = artworks[category];
// };
export const convertGallery = (artworks) => {
  const newGallery = {};
  const categories = [...new Set(artworks.map((artwork) => artwork.category))];
  categories.forEach((category) => (newGallery[category] = {}));
  for (let category in newGallery) {
    const categoryArtworks = artworks.filter(function (artwork) {
      return artwork.category === category;
    });
    newGallery[category] = categoryArtworks;
  }
  return newGallery;
};
