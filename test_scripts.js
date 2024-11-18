$(document).ready(function () {
  gallery = [
    ["heat equation simulation", "heat_equation_animation.gif"],
    ["spherical harmonics", "spherical_harmonics.gif"],
    ["hybrid rendering engine", "hybrid.gif"],
    ["ray marcher", "ray_march.gif"],
    ["3D recursive tree", "tree.gif"],
    ["wave equation","wave.gif"]
  ];
  div = "";
  for (i = 0; i < gallery.length; i += 2) {
    div += '<div class="row">';
    for (j = 0; j < 2; j++) {
      div += '<div class="col">' + gallery[i + j][0] + '</div>';
    }
    div += '</div>';

    div += '<div class="row">';
    for (j = 0; j < 2; j++) {
      div += '<div class="col"><img loading="lazy" width="90%" src="assets/' + gallery[i + j][1] + '"></div>';
    }
    div += '</div>';
  }
  $("#gallery").html(div);
});
