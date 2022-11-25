// .lang 하위의 버튼
const $lang = document.querySelector(".lang button");
const $langList = document.querySelector(".lang ul");
$lang.addEventListener("click", function () {
  $langList.classList.toggle("on");
});

// sec1 메인배너 슬라이드
var mainBannerSl = new Swiper(".main_banner", {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main_banner_pg",
    clickable: true,
  },
});

// sec2 tab menu 버튼
const $tabBtn = document.querySelectorAll(".sec2 .tab_btns > button");
const $cardCon = document.querySelectorAll(".sec2 .card_con > div");

$tabBtn.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    btnOn(idx);
    cardOn(idx);
  });
});

function btnOn(num) {
  $tabBtn.forEach(function (Tbtn, i) {
    Tbtn.classList.remove("on");
  });
  $tabBtn[num].classList.add("on");
}

function cardOn(num1) {
  $cardCon.forEach(function (Tcard, i) {
    Tcard.classList.remove("on");
  });
  $cardCon[num1].classList.add("on");
}

// sec2 새소식 슬라이드
var newsSl = new Swiper(".news_list", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".news_next",
    prevEl: ".news_prev",
  },
});

// sec2 공지사항 슬라이드
var noticeSl = new Swiper(".notice_list", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".notice_next",
    prevEl: ".notice_prev",
  },
});

// sec2 보도자료 슬라이드
var mediaSl = new Swiper(".media_list", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".media_next",
    prevEl: ".media_prev",
  },
});

//sec4 디지털 미술관 동영상 슬라이드
var youtubeSl = new Swiper(".digital_museum_slide", {
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    // 나중에 반응형 하면서 포인트 값 수정할 것
    400: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 300,
    depth: 100,
    modifier: 1.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".digital_museum_next",
    prevEl: ".digital_museum_prev",
  },
});

//sec4 디지털 미술관 동영상 클릭시 play
const $vidList = document.querySelectorAll(".digital_museum_slide li"),
  $btnNext = document.querySelector(".digital_museum_next"),
  $btnPrev = document.querySelector(".digital_museum_prev"),
  $stop = document.querySelectorAll(".digital_museum_slide li video");
let vidToggle = 0;
console.log($vidList);
console.log($stop);

$vidList.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    let vidPlay = this.childNodes[3];
    if (vidToggle == 0) {
      vidPlay.play();
      vidToggle = 1;
      // console.log(vidPlay);
      // console.log(vidToggle);
    } else {
      if (vidToggle == 1) {
        vidPlay.pause();
        vidToggle = 0;
        // console.log(vidPlay);
        // console.log(vidToggle);
      }
    }
  });
});

$btnNext.addEventListener("click", function () {
  $stop.forEach(function (item, idx) {
    item.pause();
    vidToggle = 0;
  });
});

$btnPrev.addEventListener("click", function () {
  $stop.forEach(function (item, idx) {
    item.pause();
    vidToggle = 0;
  });
});
