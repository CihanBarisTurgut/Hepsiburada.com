// JavaScript Document
$(document).ready(function() {
    $('#autoWidth4').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth4').removeClass('cS-hidden');
        } 
    });  
  });