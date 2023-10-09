var imageArray = ["afangsoup.jpg", "amalaewedu.jpg", "barbecuechickenjollof.jpg", "egusi soup.jpg", "jollof rice.jpg", "ogbonosoup.jpg", "ohasoup.jpg", "okrosoup.jpg", "vegetable soup.jpg"];

let b = 0;
let kng = document.getElementById('img');
function slider(){
  if (b < imageArray.length - 1){
    b++;
  } else {
    b = 0;
  }
   kng.src = imageArray[b];
  setTimeout("slider()", 2000);
}
window.onload = slider;
