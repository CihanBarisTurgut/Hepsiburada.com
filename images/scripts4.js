// JavaScript Document
$(document).ready(function() {
    $('#autoWidth5').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth5').removeClass('cS-hidden');
        } 
    });  
  });