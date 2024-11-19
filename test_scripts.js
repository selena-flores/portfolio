$(document).ready(function () {
  // var dataText = ['I find myself enjoying work with the optimists, do you? Email me at netusersel@gmail.com to grab a cup of coffee anywhere in Portland or virtually. Let’s build something.'];
  var dataText = [
    "i’m selena",
    "a specialist in people and technology",
    "let’s build something together.",
  ];
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      $("#intro").html(
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
      );
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      $("#hello").animate(
        {
          top: "0%",
        },
        1000,
        function () {
          $("#begin").css({ marginTop: $("#hello")[0].offsetHeight });
          $("#begin").fadeIn(1200);
        }
      );
    }
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);

  gallery = [
    ["heat equation simulation", "heat_equation_animation.gif"],
    ["spherical harmonics", "spherical_harmonics.gif"],
    ["hybrid rendering engine", "hybrid.gif"],
    ["ray marcher", "ray_march.gif"],
    ["3D recursive tree", "tree.gif"],
    ["wave equation", "wave.gif"],
  ];
  div = "";
  for (i = 0; i < gallery.length; i += 2) {
    div += '<div class="row">';
    for (j = 0; j < 2; j++) {
      div += '<div class="col">' + gallery[i + j][0] + "</div>";
    }
    div += "</div>";

    div += '<div class="row">';
    for (j = 0; j < 2; j++) {
      div +=
        '<div class="col"><img loading="lazy" width="90%" src="assets/' +
        gallery[i + j][1] +
        '"></div>';
    }
    div += "</div>";
  }
  $("#gallery").html(div);
});
