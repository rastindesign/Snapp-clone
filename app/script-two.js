var i = 0; // start point
var images = [];
var time = 4000;

//image list
images[0] = '../assets/120.jpg';
images[1] = '../assets/130.jpg';
images[2] = '../assets/140.jpg';
images[3] = '../assets/200.jpg'
images[4] = '../assets/210.jpg'
images[5] = '../assets/250.jpg'
images[6] = '../assets/260.jpg'

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