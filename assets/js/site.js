
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 6000);
}

function validateForm() {
var a = document.forms["contact_form"]["name"].value;
var b = document.forms["contact_form"]["email"].value;
var c = document.forms["contact_form"]["subject"].value;
var d = document.forms["contact_form"]["mes"].value;
var button = document.getElementById('submit');

  if ((a == "") || (a == null) || (b == "") || (b == null) || (c == "") || (c == null) || (d == "") || (d == null)){
		button.disabled = true;
  }
  else{
		button.disabled = false;
  }
}
