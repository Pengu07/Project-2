function validateForm() {
  var a = document.forms.contact_form.name.value;
  var b = document.forms.contact_form.email.value;
  var c = document.forms.contact_form.subject.value;
  var d = document.forms.contact_form.mes.value;
  var button = document.getElementById('submit');

  if ((a == "") || (a == null) || (b == "") || (b == null) || (c == "") || (c == null) || (d == "") || (d == null)){
		button.disabled = true;
  }
  else{
		button.disabled = false;
  }
}
