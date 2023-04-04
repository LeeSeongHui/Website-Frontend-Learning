
var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 모든 이미지를 화면에서 보이지 않게
    }
    slides[n].style.display = "block"; // n번째 이미지만 화면에 표시
}

function prevSlide() {
    if (current > 0) current -= 1; // current값이 0보다 크면 이전 위치로
    else current = slides.length - 1; // current값이 0보다 크지 않으면 첫 번째 이미지이므로 마지막 위치로
    showSlides(current);
  }
  
function nextSlide() {
    if (current < slides.length - 1) current += 1;
    else current = 0;
    showSlides(current);  
}



/*****************************************/
/* 이미지 쇼를 자동으로 바꾸는 방법 p.38 */ 
/*****************************************/
/*
var current = 0;
showSlides(); // 기본 첫 번째 이미지를 보여 줌

function showSlides() {
    var slides = document.querySelectorAll("#slides > img");
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 모든 이미지 감춤
    }
    current++; // 다음 이미지로 이동
    if(current > slides.length) // 마지막 이미지라면
        current = 1; // 1번째로 이동
    slides[current - 1 ].style.display = "block"; // 현재 위치 이미지 표시
    setTimeout(showSlides, 2000); // 2초마다 showSlides()함수를 반복 실행
}
*/
