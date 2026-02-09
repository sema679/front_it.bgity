// Инициализация основного вертикального слайдера
const mainSwiper = new Swiper(".slider", {
  mousewheel: true,
  direction: "vertical",
  speed: 1700,
  parallax: true,
});

// Инициализация вложенного слайдера для FSP
let fspSwiper = null;
let studentsAchievementSwiper = null;

// Инициализируем внутренний слайдер после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  const fspSliderElement = document.querySelector(".fsp-swiper");
  if (fspSliderElement) {
    fspSwiper = new Swiper(".fsp-swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }
  const studentsAchievementElement = document.querySelector(
    ".students-achievements-swiper",
  );
  if (studentsAchievementElement) {
    studentsAchievementSwiper = new Swiper(".students-achievements-swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      nested: true, // Добавьте это!
    });
  }
    const itPractureElement = document.querySelector(
    ".it-practice-swiper",
  );
itPracticeSwiper = new Swiper(".it-practice-swiper", {
    // Основные настройки
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    grabCursor: true,
    
    /* Эффект Coverflow
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,           // Без поворота
        stretch: 0,          // Без растяжения
        depth: 100,          // Глубина эффекта
        modifier: 1,         // Модификатор
        slideShadows: false, // Без теней
    },
    
    Навигация
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    // Пагинация
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    }, */
    
    // Автопрокрутка
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
    },
    
    /* Брейкпоинты
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            coverflowEffect: {
                depth: 50,
            }
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 30,
            coverflowEffect: {
                depth: 80,
            }
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 40,
            coverflowEffect: {
                depth: 100,
            }
        }
    },
    
    // События
    on: {
        init: function () {
            console.log("Карусель студентов инициализирована");
        },
        slideChange: function () {
            console.log("Слайд изменен");
        }
    } */
});
});

// Ваш существующий код для анимации букв
document.querySelectorAll(".header-content h1").forEach((e) => {
  e.innerHTML = e.textContent
    .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
    .replace(/(\S*)/g, (m) => {
      return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
    });
  e.querySelectorAll(".letter").forEach(function (l, i) {
    l.setAttribute(
      "style",
      `z-index: -${i}; transition-duration: ${i / 5 + 1}s`,
    );
  });
});

document.querySelectorAll(".header-content h2").forEach((e) => {
  e.innerHTML = e.textContent
    .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
    .replace(/(\S*)/g, (m) => {
      return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
    });
  e.querySelectorAll(".letter").forEach(function (l, i) {
    l.style.zIndex = `-${i}`;
    l.style.transitionDuration = `${i / 70 + 1}s`;
    l.style.marginLeft = "calc(var(--index) * -0.1)";
    l.style.right = "calc(var(--index) * -0.1)";
  });
});

document.querySelectorAll(".achievement h2").forEach((e) => {
  e.innerHTML = e.textContent
    .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
    .replace(/(\S*)/g, (m) => {
      return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
    });
  e.querySelectorAll(".letter").forEach(function (l, i) {
    l.style.zIndex = `-${i}`;
    l.style.transitionDuration = `${i / 70 + 1}s`;
    l.style.marginLeft = "calc(var(--index) * -0.1)";
    l.style.right = "calc(var(--index) * -0.1)";
    l.style.textAlign = "center";
  });
  console.log('dfdf')
});


document.querySelectorAll(".header-content__slide .fsp-slide").forEach((f) => {
  f.style.display = "flex";
  f.style.flexWrap = "nowrap";
  f.style.justifyContent = "space-around";
  f.style.gap = "100px";
});

document.querySelectorAll(".fsp-slide .header-content__info ").forEach((h) => {
  h.style.padding = "80px 0 0 0";
});
document.querySelectorAll(".students-achievement-info").forEach((h) => {
  h.style.padding = "20px 0 0 0";
});
document.querySelectorAll(".it-practice-info").forEach((h) => {
  h.style.padding = "20px 0 0 0";
});



// Обновляем обработчик slideChange
mainSwiper.on("slideChange", function () {
  document.querySelectorAll(".header-content__slide").forEach(function (e, i) {
    return mainSwiper.activeIndex === i
      ? e.classList.add("active")
      : e.classList.remove("active");
  });

  // Управляем внутренним слайдером в зависимости от активного слайда
  if (fspSwiper) {
    if (mainSwiper.activeIndex === 1) {
      // Включаем внутренний слайдер на втором слайде
      fspSwiper.autoplay.start();
    } else {
      // Останавливаем на других слайдах
      fspSwiper.autoplay.stop();
    }
  }
  // Управляем слайдером студентов (третий слайд)
  if (studentsAchievementSwiper) {
    if (mainSwiper.activeIndex === 2) {
      studentsAchievementSwiper.autoplay.start();
    } else {
      studentsAchievementSwiper.autoplay.stop();
    }
  }
  if (itPracticeSwiper) {
    if (mainSwiper.activeIndex === 3) {
      itPracticeSwiper.autoplay.start();
    } else {
      itPracticeSwiper.autoplay.stop();
    }
  }
});

/* Добавляем обработчики для кнопок "Узнать подробнее"
document.getElementById("one_button")?.addEventListener("click", function () {
  mainSwiper.slideTo(1, 800); // Переход ко второму слайду
});

document.getElementById("free_button")?.addEventListener("click", function () {
  mainSwiper.slideTo(2, 800); // Переход к третьему слайду
}); */

// Функция для паузы внутреннего слайдера при покидании страницы
document.addEventListener("visibilitychange", function () {
  if (fspSwiper) {
    if (document.hidden) {
      fspSwiper.autoplay.stop();
    } else if (mainSwiper.activeIndex === 1) {
      fspSwiper.autoplay.start();
    }
  }
  if (studentsAchievementSwiper) {
    if (document.hidden) {
      studentsAchievementSwiper.autoplay.stop();
    } else if (mainSwiper.activeIndex === 2) {
      // Исправлено: индекс 2 для третьего слайда
      studentsAchievementSwiper.autoplay.start();
    }
  }
  if (itPracticeSwiper) {
    if (document.hidden) {
      itPracticeSwiper.autoplay.stop();
    } else if (mainSwiper.activeIndex === 2) {
      // Исправлено: индекс 2 для третьего слайда
      itPracticeSwiper.autoplay.start();
    }
  }
});

// Альтернативный вариант если класс .swiper используется для основного слайдера
const swiper = mainSwiper; // Сохраняем ссылку для совместимости
