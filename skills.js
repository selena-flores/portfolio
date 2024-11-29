$(document).ready(function () {
  function set_relations(json) {
    skills = {
      cloud_computing: [
        json.lead_backend_engineer_intern,
        json.back_end_dev,
        json.full_stack_dev,
        json.classwork,
      ],
      operating_systems: [
        json.ta_dm_art_lab,
        json.full_stack_dev,
        json.classwork,
        json.ta_intro_cs,
      ],
      computer_graphics: [
        json.vgl_intern,
        json.full_stack_dev,
        json.rendering_engine_dev,
        json.math_sim,
        json.classwork,
      ],
      unity_: [
        json.lead_backend_engineer_intern,
        json.vgl_intern,
        json.claasswork,
      ],
      troubleshooting: [
        json.lead_backend_engineer_intern,
        json.back_end_dev,
        json.ta_dm_art_lab,
        json.vgl_intern,
        json.full_stack_dev,
        json.math_sim,
        json.classwork,
        json.ta_intro_cs,
      ],
      software_development: [
        json.lead_backend_engineer_intern,
        json.back_end_dev,
        json.full_stack_dev,
        json.classwork,
      ],
      leadership: [
        json.ta_dm_art_lab,
        json.eijc_chair,
        json.ta_intro_cs,
        json.uf_lead,
        json.platteau_manager,
      ],
      networking: [
        json.lead_backend_engineer_intern,
        json.back_end_dev,
        json.full_stack_dev,
        json.classwork,
      ],
      problem_solving: [
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
      teamwork: [
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
      time_management: [json.eijc_chair, json.classwork],
      math: [json.rendering_engine_dev, json.math_sim, json.claasswork],
      coding_languages: [
        json.lead_backend_engineer_intern,
        json.full_stack_dev,
        json.ta_dm_art_lab,
        json.rendering_engine_dev,
      ],
      testing_and_debugging: [
        json.lead_backend_engineer_intern,
        json.full_stack_dev,
        json.math_sim,
        json.claasswork,
      ],
    };
    console.log(skills);
    html = "";
    for (i in skills) {
      html +=
        "<button id = '" + i + "' class = 'skill_button'>" + i + "</button>";
    }
    $("#skills").html(html);
  }
  async function getData() {
    const url = "./jobs.json";
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
});
