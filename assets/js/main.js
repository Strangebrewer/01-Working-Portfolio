$(window).ready(function () {

  // shrinking header
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 450) {
      $("header").addClass("scroll");
      $(".menu").css("background-color",  "#124a6b");
      $("header").fadeIn(400);
    }
    else {
      $("header").removeClass("scroll");
      $(".menu").css("background-color",  "#000");
      $("header").css("display", "none");
    }
  });

  // hamburger menu toggle
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

  // grid example buttons
  moreDivsFlag = false;

  $(".grid-btn").on("click", function () {
    if (moreDivsFlag === false) {
      if ($(this).attr("narf") === "g4" || ($(this).attr("narf") === "g5" || $(this).attr("narf") === "g6")) {
        $(".change").append($("<div class='box thirteen odd'>13</div>"));
        $(".change").append($("<div class='box fourteen even'>14</div>"));
        $(".change").append($("<div class='box fifteen odd'>15</div>"));
        $(".change").attr("id", ($(this).attr("narf")));
        moreDivsFlag = true;
      }
      else {
        $(".change").attr("id", ($(this).attr("narf")));
      }
    }
    else if (moreDivsFlag) {
      var narfIs = $(this).attr("narf");
      if (narfIs === "g1" || narfIs === "g2" || narfIs === "g3" || narfIs === "g7" || narfIs === "g8" || narfIs === "g9" || narfIs === "g10") {
        $(".thirteen").remove();
        $(".fourteen").remove();
        $(".fifteen").remove();
        $(".change").attr("id", ($(this).attr("narf")));
        moreDivsFlag = false;
      }
      else {
        $(".change").attr("id", ($(this).attr("narf")));
      }
    }
  });

});