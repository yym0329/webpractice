// 검색칸 토글 기능

const searchEl = document.querySelector('.search'); // document 전체에서 .search 클래스를 갖는 첫번째 요소를 찾음.
const searchInputEl = searchEl.querySelector('input');
// searchEl 요소 안에서 input 클래스를 갖는 요소를 찾는다.

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 헤더 뱃지 스크롤 fade-in, fade-out 구현

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간(sec), 옵션);
    
    // hide badge
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' // none같은 비연속적 속성은 자연스런 전환효과 x
    })

    // shows scroll-up button
    gsap.to('#to-top', .2, {
      x: 0
    })

  } else {

    // show badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block' // none같은 비연속적 속성은 자연스런 전환효과 x
    })

    // hide scroll-up button
    gsap.to(toTopEl, .2, {
      x: 100
    })

  }
}, 300));
// _.thorottle(함수, delay 시간)

// to-top button
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

// 메인 비쥬얼 탭 fade in 구현
const fadeEls = document.querySelectorAll('.visual .fade-in');
var i = 0;
const delay = .5;

fadeEls.forEach(function (fadeEl) {
  if (fadeEl.classList.contains('fade-in-last')) {
    gsap.to(fadeEl, 1, {
      delay: fadeEls.length * delay,
      opacity: 1
    }); // 버튼이 가장 마지막에 나타나게 한다.
  } else {
    gsap.to(fadeEl, 1, {
      delay: (i + 1) * delay, // 순차적 fade-in 구현 방법
      opacity: 1
    });
    i = i + 1;
  }
});

/* JS에는 프로그래머가 직접 memory를 deallocate할 수 있는 방법이 없다. 그냥
JS가 자체적으로 garbage collect하게 놔둬야 한다. */

// SWIPER API 이용


// NOTICE-LINE
new Swiper( // 선택자, 옵션 입력
  '.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
  }); // JS 생성자. SWIPER 객체 생성.

// PROMOTIONS
new Swiper('.notice .promotion .swiper', {
  slidesPerView: 3, // 한 번에 보여 줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데에  
  loop: true,
  autoplay: {
    delay: 5000 // ms 단위
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

// AWARDS
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});

/* 헤더 메인메뉴 영역 토글
const mainMenuEl = document.querySelector(".header .main-menu");
const promotionToggleBtn = document.querySelector(".header");

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // hide element
    promotionEl.classList.add('hide');
  } else {
    // show element
    promotionEl.classList.remove('hide');
  }
}); */

// 슬라이드 영역 토글
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // hide element
    promotionEl.classList.add('hide');
  } else {
    // show element
    promotionEl.classList.remove('hide');
  }
});

// FLOATING animation

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1은 무한 반복을 의미
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 1, 15);
floatingObject('.floating3', 1, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // 뷰포트의 0.8 지점에서 트리거되어 setClassToggle method를 실행하게 됨.
    })
    .setClassToggle(spyEl, 'show') // show class를 spyEl 요소에 토글, 언토글함.
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 연도 반환