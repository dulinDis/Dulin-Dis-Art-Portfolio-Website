export const getCategoryArtworks = (artworks, category) => {
  if (artworks && category) {
    return artworks[category];
  } else {
    return [];
  }
};

export const getCategoryPreview = (artworks, category) => {
  if (artworks && category) {
    return artworks[category].slice(0, 1)[0];
  } else {
    return [];
  }
};

export const getGalleryCategoriesPreview = (artworks) => {
  if (artworks) {
    const galleryCategoriesPreview = [];
    Object.keys(artworks).map((category, index) => {
      galleryCategoriesPreview.push(getCategoryPreview(artworks, category));
    });
    return galleryCategoriesPreview;
  } else {
    return [];
  }
};

export const getArtworkById = (artworks, category, id) => {
  if (artworks && id) {
    const artwork = artworks[category].find((artwork) => artwork.id == id);
    return artwork;
  } else {
    return {};
  }
};

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
