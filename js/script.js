jQuery(document).ready(function(){
    setheight();
})
jQuery(window).resize(function(){
    setheight();
});
function setheight(){
    var width = jQuery(window).width();
    var heightdiv = jQuery('.height-div').height();
    if(width > 991){
        jQuery('.filter').css('height',heightdiv);
    }
}
jQuery(window).scroll(function(){
    if(jQuery(this).scrollTop() > 500){
        jQuery('.back-to-top').fadeIn(1000);
    }
    else{
        jQuery('p').fadeOut(1000);
    }
});
jQuery('.back-to-top').click(function(){
    jQuery('html,body').animate({
        scrollTop: 0
    }, 1000,'easeInOutExpo');
});
