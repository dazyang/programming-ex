
// from replaceImages.js
function getImageHeight(image){
  return image.height;
}

function getImageWidth(image){
  return image.width;
}

function replaceImages(images, location){
  var baseImageUrl, height, width, image;
  switch(location){
    case 'Wellington':
      baseImageUrl = 'http://fpoimg.com/';
      break;
      default:
      baseImageUrl = 'http://placekitten.it';
      break;
  }
  for (var i = 0, len = images.length; i < len ; i++){
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }

}