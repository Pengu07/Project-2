
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 6000);
}

function validateForm() {
if (document.contact_form.name.value == "" ){
	alert( "Please type your name." );
	document.contactform.name.focus() ;
	document.getElementbyID("submit").disabled = true;
}
if (document.contact_form.email.value == "" ){
	alert( "Please type your E-Mail." );
	document.contactform.email.focus() ;
	document.getElementbyID("submit").disabled = true;
}
if (document.contact_form.subject.value == "" ){
	alert( "Please type your subject." );
	document.contactform.subject.focus() ;
	document.getElementbyID("submit").disabled = true;
}
if (document.contact_form.mes.value == "" ){
	alert( "Please type your message." );
	document.contactform.mes.focus() ;
document.getElementbyID("submit").disabled = true;
}

else{
document.getElementbyID("submit").disabled = false;}
}
