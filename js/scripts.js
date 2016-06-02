$(function() {
  $('form#choices').submit(function(event) {
    event.preventDefault();
    $(".conservative").hide();
    $(".liberal").hide();
    $(".centrist").hide();
    var vote = parseInt($('#vote').val());
    var bern = parseInt($('#bern').val());
    var rural = parseInt($('#rural').val());
    var total = vote + bern + rural;
    alert(total)
    if ( total > 0 ) {
      $(".conservative").show();
    } else if ( total < 0 ) {
      $(".liberal").show();
    } else {
      alert("centrist")
      $(".centrist").show();
    }
  });
});
