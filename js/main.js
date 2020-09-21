var IMG = Array.from(document.getElementsByClassName("IMG"));
var BoxContainer = document.getElementById("BoxContainer");
var close = document.getElementById("close");
var BoxItem = document.getElementById("BoxItem");
var Caption2 = document.getElementById("Caption2");
var imgSrc;
var CurrentSlideIndex = 0;
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slideImgs = document.getElementsByClassName("slideImgs");

for (var i = 0; i < IMG.length; i++) {
    IMG[i].addEventListener("click", function(e) {

        clickOnslideImgs(e);
    })
}

function clickOnslideImgs(e) {
    CurrentSlideIndex = IMG.indexOf(e.target);
    BoxContainer.style.display = "flex";
    imgSrc = e.target.src;
    BoxItem.style.backgroundImage = `url(${imgSrc})`;
}

close.addEventListener("click", closeBoxContainer);

function closeBoxContainer() {
    BoxContainer.style.display = "none";
}

next.addEventListener("click", function() {

    NextImg();

})

function NextImg() {
    CurrentSlideIndex++;
    if (CurrentSlideIndex == IMG.length) {
        CurrentSlideIndex = 0;
    }
    imgSrc = IMG[CurrentSlideIndex].src;
    BoxItem.style.backgroundImage = `url(${imgSrc})`;
}
prev.addEventListener("click", function() {
    prevImg();
})

function prevImg() {
    CurrentSlideIndex--;
    if (CurrentSlideIndex < 0) {
        CurrentSlideIndex = IMG.length - 1;
    }
    imgSrc = IMG[CurrentSlideIndex].src;
    BoxItem.style.backgroundImage = `url(${imgSrc})`;
}
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 39) {
        NextImg();
    } else if (e.keyCode == 37) {
        prevImg();
    } else if (e.keyCode == 27) {
        closeBoxContainer();
    }
})
BoxContainer.addEventListener("click", function(e) {
    if (e.target != BoxItem && e.target != prev && e.target != next && e.target != Caption2) {
        closeBoxContainer();
    }
})
document.addEventListener("click", function(e) {
    if (e.target != BoxItem && e.target != prev && e.target != next && e.target != close && e.target != BoxContainer) {
        changeColors(e);
    }

})

function changeColors(e) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}