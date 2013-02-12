(function() {

//change bg on clicking target
$("#target").click(function() {
$.anystretch("/assets/tub_web_1280.png");
});

$("#target-2").click(function() {
$.anystretch("/assets/tub_web_1280-bw.png", {speed: 2000});
  $(".well").css("background-color", "rgba( 255, 255, 255, 0.9 )");
    $(".hero-unit").css("background-color", "none").css("color", "white");
      $(".page-header").css("color", "white");
});

$("#target-3").click(function() {
$.anystretch("/assets/tub_web_1280-cutout.png", {speed: 1500});
});

$("#target-4").click(function() {
$.anystretch("/assets/tub_web_1280-tango.png", {speed: 1700});
  $(".well").css("background-color", "rgba( 255, 255, 255, 1.0 )");
    $(".hero-unit").css("background-color", "none").css("color", "#222");
      $(".page-header").css("color", "#222");
});

})
