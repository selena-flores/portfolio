$(document).ready(function () {
  var skills = {};
  function set_relations(json) {
    skills = {
      cloud_computing: {
        title: "cloud computing",
        roles: [
          json.lead_backend_engineer_intern,
          json.back_end_dev,
          json.full_stack_dev,
          json.classwork,
        ],
      },
      operating_systems: {
        title: "operating systems",
        roles: [
          json.ta_dm_art_lab,
          json.full_stack_dev,
          json.classwork,
          json.ta_intro_cs,
        ],
      },
      computer_graphics: {
        title: "computer graphics",
        roles: [
          json.vgl_intern,
          json.full_stack_dev,
          json.rendering_engine_dev,
          json.math_sim,
          json.classwork,
        ],
      },
      unity: {
        title: "unity",
        roles: [
          json.lead_backend_engineer_intern,
          json.vgl_intern,
          json.classwork,
        ],
      },
      troubleshooting: {
        title: "troubleshooting",
        roles: [
          json.lead_backend_engineer_intern,
          json.back_end_dev,
          json.ta_dm_art_lab,
          json.vgl_intern,
          json.full_stack_dev,
          json.math_sim,
          json.classwork,
          json.ta_intro_cs,
        ],
      },
      software_development: {
        title: "software development",
        roles: [
          json.lead_backend_engineer_intern,
          json.back_end_dev,
          json.full_stack_dev,
          json.classwork,
        ],
      },
      leadership: {
        title: "leadership",
        roles: [
          json.ta_dm_art_lab,
          json.eijc_chair,
          json.ta_intro_cs,
          json.uf_lead,
          json.platteau_manager,
        ],
      },
      networking: {
        title: "networking",
        roles: [
          json.lead_backend_engineer_intern,
          json.back_end_dev,
          json.full_stack_dev,
          json.classwork,
        ],
      },
      problem_solving: {
        title: "problem solving",
        roles: [
          json.lead_backend_engineer_intern,
          json.back_end_dev,
          json.ta_dm_art_lab,
          json.full_stack_dev,
          json.math_sim,
          json.classwork,
          json.bartender,
          json.sound_engineer,
          json.ta_intro_cs,
        ],
      },
      teamwork: {
        title: "teamwork",
        roles: [
          json.lead_backend_engineer_intern,
          json.back_end_dev,
          json.classwork,
          json.bartender,
          json.tle_sales,
          json.buyer,
          json.eijc_chair,
          json.sound_engineer,
          json.uf_lead,
          json.eijc_vice,
          json.platteau_manager,
        ],
      },
      time_management: {
        title: "time management",
        roles: [json.eijc_chair, json.classwork],
      },
      math: {
        title: "math",
        roles: [json.rendering_engine_dev, json.math_sim, json.classwork],
      },
      coding_languages: {
        title: "coding languages",
        roles: [
          json.lead_backend_engineer_intern,
          json.full_stack_dev,
          json.ta_dm_art_lab,
          json.rendering_engine_dev,
        ],
      },
      testing_and_debugging: {
        title: "testing and debugging",
        roles: [
          json.lead_backend_engineer_intern,
          json.full_stack_dev,
          json.math_sim,
          json.classwork,
        ],
      },
    };
    html = "<div class = 'text_container'>";
    for (key in skills) {
      html +=
        "<button id = '" +
        key +
        "' class = 'skill_button'>" +
        skills[key].title +
        "</button>";
    }
    html += "</div>";
    $("#skills").html(html);
  }
  async function getData() {
    const url = "./roles.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      set_relations(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  getData();
  function display_relations(id) {
    html = "<div class = 'text_container'>";
    num_roles = skills[id].roles.length;
    num_cols = 5;
    num_rows = 5;
    selected_index = [];
    edge_set = [];
    for (i = 0; i < num_cols; i++) {
      edge_set.push(i);
      edge_set.push(num_cols * num_rows - i - 1);
    }
    for (i = 1; i < num_rows - 1; i++) {
      edge_set.push(i * num_cols);
      edge_set.push(i * num_cols + num_rows - 1);
    }
    for (i = 0; i < num_roles; i++) {
      index = Math.floor((i / num_roles) * edge_set.length);
      value = edge_set[index];
      selected_index.push(value);
    }
    k = 0;
    for (i = 0; i < num_rows; i++) {
      html += '<div class="row">';
      for (j = 0; j < num_cols; j++) {
        if (i == Math.floor(num_rows / 2) && j == Math.floor(num_cols / 2)) {
          html += '<div class="col"><h2>';
          html += skills[id].title;
          html += "<button class='exit_button' id='exit'> back </button></h2>";
        } else if (selected_index.includes(Math.floor(i * num_rows + j))) {
          html +=
            '<div style = "background-color: rgb(' +
            (k / num_roles) * 255 +
            ', 100, 100);" class="col">';
          html += skills[id].roles[k][0];
          k++;
        } else {
          html += '<div class="col">';
          html += "";
        }
        html += "</div>";
      }
      html += "</div>";
    }
    html += "</div>";
    html += "</div>";
    $("#roles").html(html);
    $("#skills").fadeOut();
    $("#roles").fadeIn();
  }
  $(document).on("click", "button", function () {
    if ($("#skills").is(":visible")) {
      display_relations(this.id);
    } else if (this.id == "exit") {
      $("#skills").fadeIn();
      $("#roles").fadeOut();
    }
  });
});
