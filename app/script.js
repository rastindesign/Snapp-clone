var i = 0; // start point
var images = [];
var time = 4000;

//image list
images[0] = '../assets/Market.jpg';
images[1] = '../assets/Food.jpg';
images[2] = '../assets/Driver.jpg';
images[3] = '../assets/Club.jpg'

// change Image
function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else{
    i=0;
  }

  setTimeout("changeImg()",time);
}

window.onload = changeImg;