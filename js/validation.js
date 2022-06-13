$( document ).ready(function() {
  if (window.history.replaceState) { // verificamos disponibilidad
      window.history.replaceState(null, null, window.location.href);
  }
});
function validate(button){
  $(button).prop('disabled', true);
  var validated = true; 
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  $('.required').each(function(){
      if($(this).val() == "" || $(this).val() == null){
          $(this).addClass('is-invalid');

          //Label bellow of input with -> style="display: none"
          $(this).closest('div').find('label').addClass('text-danger');
          validated = false;
      } else {
          $(this).closest('div').find('label').removeClass('text-danger');
          $(this).closest('div').find('label').addClass('text-success');

          $(this).removeClass('is-invalid');
          $(this).addClass('is-valid');
      }
  });

  // Validar formato email
  $('.required_email').each(function(){
      if(!regex.test($(this).val())){
          $(this).addClass('is-invalid');

          $(this).closest('div').find('label').addClass('text-danger');
          validated = false;
      } else {
          $(this).closest('div').find('label').removeClass('text-danger');
          $(this).closest('div').find('label').addClass('text-success');

          $(this).removeClass('is-invalid');
          $(this).addClass('is-valid');
      }
  });
   if(validated){
      $('#contactForm').submit();

      $(button).prop('disabled', false);

  } else {
      $(button).prop('disabled', false);
  } 
}