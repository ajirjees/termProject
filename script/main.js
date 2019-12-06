$(document).ready(function () { 
  $(".animation").addClass("animated shake");
});
//function valid inputs, in success call function AJAX to post data
function postStuff (){
	//prevent form submission
	event.preventDefault();
	let name = document.contact.name.value;
	let email = document.contact.email.value;
	let phone = document.contact.phone.value;
	let message = document.contact.message.value;
	const regex=/^(?![ .]+$)[a-zA-Z .]*$/;
	const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const phRegex = /^[0-9]*$/;
	//validate name
	if ((name.match(regex))&&(name !== '')) {
	//clear validation message if the input error fixed
	document.getElementById('name_error').innerHTML = "";
	document.getElementById('name').style.borderColor = "";
	}//if name not match regex, Styling errors written to the DOM
	else{
		document.contact.name.select();
		document.contact.name.focus();
		document.getElementById('name_error').innerHTML = '*Only alpha characters and spaces are allowed (A-Z and a-z)';
		document.getElementById('name_error').style.color = "red";
		document.getElementById('note').innerHTML = '*Check the error';
		document.getElementById('name').style.borderColor = "red";
		//clear input field when it's error
		document.getElementById('name').value = "";
		return false;
	}
	//valid email
	if ((email.match(emailRegex))&&(email !== '')) {
	//clear validation message if the input error fixed
	document.getElementById('email_error').innerHTML = "";
	document.getElementById('email').style.borderColor = "";
	}//if email not match regex, Styling errors written to the DOM
	else{
		document.contact.email.select();
		document.contact.email.focus();
		document.getElementById('email_error').innerHTML = '*Only valid email accept';
		document.getElementById('email_error').style.color = "red";
		document.getElementById('note').innerHTML = '*Check the error';
		document.getElementById('email').style.borderColor = "red";
		//clear input field when it's error
		document.getElementById('email').value = "";
		return false;
	}
	//valid phone number
	if ((phone.match(phRegex))&&(phone !== '')) {
	//clear validation message if the input error fixed
	document.getElementById('phone_error').innerHTML = "";
	document.getElementById('phone').style.borderColor = "";
	}//if phone not match regex, Styling errors written to the DOM
	else{
		document.contact.phone.select();
		document.contact.phone.focus();
		document.getElementById('phone_error').innerHTML = '*only numbers (0-9) and NO characters';
		document.getElementById('phone_error').style.color = "red";
		document.getElementById('note').innerHTML = '*Check the error';
		document.getElementById('phone').style.borderColor = "red";
		//clear input field when it's error
		document.getElementById('phone').value = "";
		return false;
	}
	//message not empty
	if (message != '') {
	//clear validation message if the input error fixed
	document.getElementById('message_error').innerHTML = "";
	document.getElementById('message').style.borderColor = "";
	//call function postData if all pass check 
	postData();
	document.getElementById('note').innerHTML = "";
	}//if message empty, Styling errors written to the DOM
	else{
		document.contact.message.select();
		document.contact.message.focus();
		document.getElementById('message_error').innerHTML = 'Not allowed empty message';
		document.getElementById('message_error').style.color = "red";
		document.getElementById('note').innerHTML = '*Check the error';
		document.getElementById('message').style.borderColor = "red";
		//clear input field when it's error
		document.getElementById('message').value = "";
		return false;
	}
	//function call AJAX 
	function postData (){
		//creates a text string in standard URL-encoded notation
		var dataString = $('#myform').serialize();
		$.ajax({
			url: $('#myform').attr('action'),
			type: "post",
			data: dataString,
			success: function(data) {
				document.getElementById('note').innerHTML = 'Thanks for contact!';
				//clear form after success submit
				$('#myform input[type="text"]').val('');
				$('#myform textarea').val('');
			},
			error: function(){
				document.getElementById('note').innerHTML = 'There is an error please try later!';
		}
	})
	}
}