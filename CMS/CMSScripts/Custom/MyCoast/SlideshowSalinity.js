
var plotSource = "https://site2.pml.ac.uk/images/plots/";
var numPlots = 73;
var imgNumber = 0;
var path = new Array();
var allImages = new Array();

for (i = 0; i < numPlots; i++) {
  path[i] = plotSource + regionName + '_tripcolor_' + varName + "_" + i + ".png";
}
var numberOfImg = path.length;
var timer = null;

function firstImage() {
  document.getElementById("imgSlideshowSalinity").src = path[0];
  changeCounter(imgNumber + 1, numberOfImg);
  for (i = 0; i < numPlots; i++) {
    allImages[i] = new Image();
    allImages[i].src = path[i];
  }
}

function slide() {
  imgNumber = (imgNumber + 1) % path.length;
  console.log(imgNumber);
  document.getElementById("imgSlideshowSalinity").src = path[imgNumber];
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
  document.getElementById("imgSlideshowSalinity").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function nextImage() {
  ++imgNumber;
  if (imgNumber > (numberOfImg - 1)) {
    imgNumber = 0;
  }
  document.getElementById("imgSlideshowSalinity").src = path[imgNumber];
  changeCounter(imgNumber + 1, numberOfImg);
  return false;
}

function changeCounter(cur, total) {
  document.getElementById("counter").innerHTML = cur + "/" + total;
}
document.getElementById("counter").innerHTML = 1 + "/" + path.length;

