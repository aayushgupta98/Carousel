let picId = 0;
let totalPics = document.getElementsByClassName('carousel-image');
let totalPicsLength = totalPics.length;

document.getElementById('previous').addEventListener("click", function() {
    previousPic();
  });
document.getElementById('next').addEventListener("click", function() {
    nextPic();
  });

let prevBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
if(picId == 0){
    prevBtn.setAttribute("disabled","disabled");
}

function nextPic(){
    let currentPic = totalPics[picId];
    currentPic.classList.remove("visible");
    currentPic.classList.add("hidden");
    picId++;
    if(picId == totalPics.length - 1){
        nextBtn.setAttribute("disabled","disabled");
    }
    if(picId != 0){
        prevBtn.removeAttribute("disabled");
    }
    let nextPic = totalPics[picId];
    nextPic.classList.remove("hidden");
    nextPic.classList.add("visible");
}
function previousPic(){
    let currentPic = totalPics[picId];
    currentPic.classList.remove("visible");
    currentPic.classList.add("hidden");
    picId--;
    if(picId == 0){
        prevBtn.setAttribute("disabled","disabled");
    }
    if(picId != totalPics.length - 1){
        nextBtn.removeAttribute("disabled","disabled");
    }
    let prevPic = totalPics[picId];
    prevPic.classList.remove("hidden");
    prevPic.classList.add("visible");
}
