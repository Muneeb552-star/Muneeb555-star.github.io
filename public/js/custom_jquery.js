$(document).ready(function(){

    // show/hide the menu when examples is clicked
$("#menu-icon").on("click", function () {
    $(".bx-x").toggle();
  });
  
  // hide the menu when an exmple is clicked
  $(".nav-tag").on("click", function(){
      $(".navList").hide(); 
  });

});