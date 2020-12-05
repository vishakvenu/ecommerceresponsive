$(function(){
var galleryimages=$(".ladybg").find("img").first()
    var images=[
        "image_slider/img-1.jpg",
        "image_slider/img-2.jpg",
        "image_slider/img-3.jpg",
        "image_slider/img-4.jpg",
        "image_slider/img-5.jpg"
        
    ]
    $(".ladybg").find("img").each(function(){
        $(this).css({"height":"170px",
                     "width":"100%"})
    })
    var i=0;
    setInterval(function(){
        i=(i+1) % images.length;
        galleryimages.fadeOut(function(){
            $(this).attr("src",images[i])
             $(this).fadeIn()
            
        })
        
    },1500)
        
        
        
        })