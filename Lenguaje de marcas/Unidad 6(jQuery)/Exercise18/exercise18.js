$(document).ready(function(){
    $("#btn-add").click(function(){
        $("#percentage").animate({
        'width':'100%', 
        'border-top-right-radius':'15px',
        'border-bottom-right-radius':'15px'},5000,console.log('Finalizado 100%'));
        
    });
    $("#btn-rem").click(function(){
        $("#percentage").animate({
        'width':'1%', 
        'border-top-right-radius':'0px',
        'border-bottom-right-radius':'0px'},5000,console.log('Finalizado 1%'));
    });
    $("#btn-stop").click(function(){
        $("#percentage").stop(),console.log('Stop')
    });
});