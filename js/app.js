$(function() {

   const worksSlider = $('[data-slider="slick"]');

   // Fixed Header
   // ===================



   // Scroll
   // ===================


   // Filter
   // ===================
   let filter = $("[data-filter]");

   filter.on("click", function(event) {
      event.preventDefault();
        
      let cat = $(this).data('filter');

      if(cat == 'all') {
         $("[data-cat]").removeClass('hide');
      } else {
         $("[data-cat]").each(function() {

            let workCat = $(this).data('cat');
    
            if(workCat != cat) {
               $(this).addClass('hide');
            } else {
               $(this).removeClass('hide');
            }
         });
      }
   });


   // Modal
   // ===================
   const modalCall = $("[data-modal]");
   const modalClose = $("[data-close]");

   modalCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');

      $(modalId).addClass('show');
      $("body").addClass('no-scroll');

      setTimeout(function() {
         $(modalId).find(".modal__dialog").css({
            opacity: "1"
         });
      }, 300);

      worksSlider.slick('setPosition');
        
   });


   modalClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

      modalParent.find(".modal__dialog").css({
         opacity: "0"
      });

      setTimeout(function() {
         modalParent.removeClass('show');
         $("body").removeClass('no-scroll');
      }, 400);
    
   });


   $(".modal").on("click", function() {
      let $this = $(this);

      $this.find(".modal__dialog").css({
         opacity: "0"
      });

      setTimeout(function() {
         $this.removeClass('show');
         $("body").removeClass('no-scroll');
      }, 400);

   });

   $(".modal__dialog").on("click", function(event) {
      event.stopPropagation();
   });


   // Slider: https://kenwheeler.github.io/slick/
   // ===================
   worksSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true
   });

   $('.slick-prev').on("click", function(event) {
      event.preventDefault();

      let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

      currentSlider.slick("slickPrev")
   });

   $('.slick-next').on("click", function(event) {
      event.preventDefault();

      let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

      currentSlider.slick("slickNext")
   });


   // Mobile Nav (Burger)
   // ===================
   
   const navToggle = $("#navToggle");
   const nav = $("#nav");

   navToggle.on("click", function(event) {
      event.preventDefault();

      nav.toggleClass("show");

   });

});



