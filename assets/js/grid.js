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
    if (narfIs === "g1" || narfIs === "g2" || narfIs === "g3" || narfIs === "g8" || narfIs === "g9" || narfIs === "g10") {
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