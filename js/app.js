
$(function (){
//   NAVBAR STARTS
     let myNav = $(".myNav")
     

    let togglerBtn = $(".togglerBtn");
    togglerBtn.click(function (){
        let menu = $(" nav #navBar ul");
        menu.toggleClass("menuActive")
        
        // logo
        let logo = $('nav .myLogo')
        logo.toggleClass("activeLogo");
    })
        
//   nav scroll starts
       


        $(window).scroll(function (){
            let scrTop = $(window).scrollTop ();
     
            if(scrTop > 500){
                myNav.addClass(`menuFixed`)
            }
            else{
                myNav.removeClass(`menuFixed`)
            }
     
     
         });


    
   
//    NAVBAR ENDS
// BANNER STARTS

$(document).ready(function(){
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        pauseOnHover:true,
        arrows:true,
        
        prevArrow:" .banner_arrows .b_leftArrow ",
        nextArrow:" .banner_arrows .b_rightArrow",
    });

    AOS.init();

  });
  
    

// BANNER ENDS
// SERVICE STARTS 
$('.service_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed:2000,
    pauseOnHover:true,
    arrows:false,

    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
           
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
        
        
        
      ]
    
});
// SERVICE ENDS
// PORTFOLIO STARTS
$('.portfolioSlider').slick({
  slidesToShow:4,
  arrows:false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
       
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
    
    
    
  ]
})
// PORTFOLIO ENDS

// COUNTER STARTS
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelectorAll(".counter");

  let arr = Array.from(el);

  arr.forEach((el) => {
    IO.observe(el);
  });
// COUNTER ENDS
// BLOG STARTS
$(".blogSlider").slick({
  
  slidesToShow:3,
  centerMode: true,
  centerPadding: '0px',
  prevArrow:" .blog_arrows .blog_leftArrow ",
  nextArrow:" .blog_arrows .blog_rightArrow",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
       
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
    
    
    
  ]
})
// BLOG ENDS
// TESTIMONIAL STARTS
$(".testimonialCnt").slick({
  autoplay:true,
  arrow:true,
  asNavFor:".testimonialImgSlider",
  fade:true,
  prevArrow:" .testimonial_arrows .testimonial_leftArrow ",
  nextArrow:" .testimonial_arrows .testimonial_rightArrow",

})

$(".testimonialImgSlider").slick({
  autoplay:true,
  arrows:false,
  slidesToShow:3,
  centerMode: true,
  centerPadding: '0px',
  asNavFor:".testimonialCnt",
})
// TESTIMONIAL ENDS
// BRAND LOGO STARTS
$(".brandLogo").slick({
  // autoplay:true,
  arrows:true,
  slidesToShow:5,
  centerMode:true,
  centerPadding: '0px',
  prevArrow:" .brand_arrows .brand_leftArrow ",
  nextArrow:" .brand_arrows .brand_rightArrow",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
       
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },
    
    
    
  ]
})
// BRAND LOGO ENDS
    
    
});

 
