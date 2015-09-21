$(function() {
  $('#sign-up button, #services .flex-box').on("click", function(){
    $(".modal-state").prop("checked", true).change();
  });

  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });


  if(window.location.hash == '#thanks'){
    $('#thank-you').removeClass('hidden');
    console.log($('#thank-you'));
  }
});