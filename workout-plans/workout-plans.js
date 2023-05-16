// Drop down menu option
$(document).ready(function () {
  $("#updatesDropdown").change(function () {
    var selectedOption = $(this).val();
    console.log("Selected option:", selectedOption);
  });
});

// Animation effects
$(document).ready(function () {
  // Fade in the table elements when the page loads
  $("table").hide().fadeIn(5000);

  // Slide down the section containing the tables
  $(".section1").hide().slideDown(5000);
});
