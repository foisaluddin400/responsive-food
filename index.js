$("document").ready(function(){

    $(".nav-menu").hide();
    $(".hide").hide();

    $(".show").click(function(){
        $(".nav-menu").slideDown();
        $(".hide").show();
        $(".show").hide();

    });
    $(".hide").click(function(){
        $(".nav-menu").slideUp();
        $(".hide").hide();
        $(".show").show();

    });
    $(".nn").click(function(){
        $(".nav-menu").slideUp();
        $(".hide").hide();
        $(".show").show();
    });
    




});