function nameCheck(){

	var n = document.getElementById('nameSurname').value;

	if(n == 'Jan Kowalski')
	{
		document.getElementById('nameSurname').className = 'inputWrong';
		document.getElementById('alert').style.visibility = 'visible';
		document.getElementById('alert').innerHTML = "Te dane znajdują się już w naszej bazie";
	}
	if (n !== 'Jan Kowalski' && n !== '')
	{
		document.getElementById('nameSurname').className = 'input';
		document.getElementById('alert').style.visibility = 'hidden';
	}
}

function emailCheck(){

	var e = document.getElementById('nameSurname').value;

	if(e == 'Jan Kowalski')
	{
		
		document.getElementById('email').className = 'inputWrong';
		document.getElementById('alert').style.visibility = 'visible';
		document.getElementById('alert').innerHTML = "Te dane znajdują się już w naszej bazie";

	}
	if (e !== 'Jan Kowalski' && e !== '')
	{
		document.getElementById('email').className = 'input';
		document.getElementById('alert').style.visibility = 'hidden';
		++checksum;
	}

}


function animation(el, ele, op, opa){

	var basic = document.getElementById(el);

	basic.style.transition = " opacity 1.0s linear 0s";
	basic.style.opacity = op;

	var cover = document.getElementById(ele);

	cover.style.transition  = " opacity 1.0s linear 0s";
	cover.style.opacity = opa;
	window.scrollTo(0, 0);

	setTimeout(display, 1200);
	function display(){
		basic.style.display= "none";
	}
}



