const swiper = new Swiper('.service-swiper',{
   
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 12,
  scrollbar: {
    el: ".swiper-scrollbar",
   //  hide: true,
    draggable:true,
  },
  
 
  breakpoints:{

   640:{
     slidesPerView: 2,
     centeredSlides:false,
     spaceBetween:20

   },


   768:{
     slidesPerView: 3,
     centeredSlides:false,
     spaceBetween:20

   },

   
    1024:{
     slidesPerView: 3,
     centeredSlides:false,
     spaceBetween:20
   },

    1280:{
     slidesPerView: 4,
     centeredSlides:false,
     spaceBetween:20
   },

}

});

const coachswiper = new Swiper('.coach-swiper',{
   
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 12,
  scrollbar: {
    el: ".swiper-scrollbar",
   //  hide: true,
    draggable:true,
  },
  
 
  breakpoints:{

   640:{
     slidesPerView: 2,
     centeredSlides:false,
     spaceBetween:20

   },


   768:{
     slidesPerView: 3,
     centeredSlides:false,
     spaceBetween:20

   },

   
    1024:{
     slidesPerView: 3,
     centeredSlides:false,
     spaceBetween:20
   },

    1280:{
     slidesPerView: 4,
     centeredSlides:false,
     spaceBetween:20
   },

}

});

const testimoniswiper = new Swiper('.testimoni-swiper', {
  grabCursor: true,
  slidesPerView: 2, // Default dua slide untuk semua layar
  spaceBetween: 10, // Jarak antar-slide untuk layar kecil
  scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom", 
    prevEl: ".swiper-button-prev-custom", 
  },
  breakpoints: {
      // Sesuaikan pengaturan untuk layar yang lebih besar
      768: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 20,
      }
  }
});





// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});


// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add('hidden');
}

});