$('.hbspt-form input[type=submit]').addClass('btn btn-primary').removeClass('hs-button');

$('.hbspt-form form').children().wrapAll( "<div class='col-md-6' id='form-col-1' />");
$('#form-col-1').after('<div class="col-md-6" id="form-col-2"></div>');

$('.hbspt-form .hs_multiline_message').appendTo('#form-col-2');
$('.hbspt-form .hs_submit').appendTo('#form-col-2');


// <div class="col-md-6" id="form-col-1"></div><div class="col-md-6" id="form-col-2"></div>
  

