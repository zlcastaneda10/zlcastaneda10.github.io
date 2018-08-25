$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#nav ul li a[href^='#']").on('click', function(event) {
    if (this.hash !== "") {
      var target = this.hash;

  event.preventDefault();

  var navOffset = $('#nav').height();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset +1
  }, 1000, function() {
    return window.history.pushState(null, null, target);
  });
    } // End if
  });
});