var plotSource = "https://site2.pml.ac.uk/images/plots/";
var numPlots = 73;
var imgNumber = 0;
var thisVar = 'salinity_current'

function getPath(i) {
  path = plotSource + regionName + '_tripcolor_' + thisVar + "_" + i + ".png";
  return path;
};
var path = getPath(imgNumber);
var numberOfImg = numPlots;
var timer = null;

function firstImage(variable) {
  thisVar = variable
  imgNumber = 0;
  var allImages = new Array();

  document.getElementById("imgSlideshow").src = getPath(0);
  changeCounter(imgNumber + 1, numberOfImg);
  for (i = 0; i < numPlots; i++) {
    allImages[i] = new Image();
    allImages[i].src = getPath(i);
  }
  
}

function slide() {
  imgNumber = (imgNumber + 1) % numPlots;
  console.log(imgNumber);
  document.getElementById("imgSlideshow").src = getPath(imgNumber);
  changeCounter(imgNumber + 1, numberOfImg);
}

function setTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(slide, 200);
  }
  return false;
}

$(function() {
    $("#startCycle").click(function() {
        $("#playPause").toggleClass("fa-play fa-pause");
    });
});

function previousImage() {
  --imgNumber;
  if (imgNumber < 0) {
    imgNumber = numberOfImg - 1;
  }
  document.getElementById("imgSlideshow").src = getPath(imgNumber);
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function nextImage() {
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  document.getElementById("imgSlideshow").src = getPath(imgNumber);
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function changeCounter(cur, total) {
  document.getElementById("counter").innerHTML = cur + "/" + total;
}