$(".slider_panel").append($(".slider_image").first().clone());
$(".slider_panel").prepend($(".slider_image").eq(-2).clone());
var index = 1;
moveSlider(index);
// $(".control_button").click(function () {
//   index = $(this).index();
//   moveSlider(index + 1);
// });
$(".left_control").click(function () {
  if (index > 1) {
    index--;
    moveSlider(index);
  } else {
    $(".slider_panel").css("left", -6480);
    index = 5;
    moveSlider(index);
  }
});
$(".right_control").click(function () {
  if (index < 5) {
    index++;
    moveSlider(index);
  } else {
    $(".slider_panel").css("left", 0);
    index = 1;
    moveSlider(index);
  }

  function autoSlider() {
    auto = setInterval(function () {
      if (index < 4 && sw == false) {
        $(".right_control").trigger("click");
      } else {
        sw = true;
      }
      if (index > 0 && sw == true) {
        $(".left_control").trigger("click");
      } else {
        sw = false;
      }
    }, 3000);
  }
});
//이미지 슬라이드 구현
// function moveSlider(index) {
//   $(".slider_panel").animate(
//     {
//       left: -(index * 1080),
//     },
//     "slow"
//   );
//   $(".control_button").removeClass("active");
//   $(".control_button")
//     .eq(index - 1)
//     .addClass("active");
// }
