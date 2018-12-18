$("button").click(function(){
    $(".box").toggle();
     $(".one").text("doubleclick on the box");
});
$(".box").dblclick(function(){
    $(".ticket").fadeIn();
    $(".two").text("hover over the ticket");
    
});
$(".ticket").mouseenter(function(){
    $(".train").fadeIn();
     $(".three").text("hover over stadium");
});
$(".train").mouseenter(function(){
    $(".stadium").show();
     $("four").text("double click on the stadium");
});
$(".stadium").dblclick(function(){
    $(".jimin").fadeIn();
     $("#hunt").hide();
});
