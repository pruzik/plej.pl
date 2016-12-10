JS funkcja wpisz imię 


	if(n == '' )
	{
		document.getElementById('nameSurname').className = 'inputWrong';
		document.getElementById('alert').style.visibility = 'visible';
		
		document.getElementById('alert').innerHTML = "Wpisz swoję imię i nazwisko";
	}	





	var e = document.getElementById('emial').value;
	var c = document.getElementById('coutry').value;
	var b = document.getElementById('chebox1').cheked;



JS pętla final check
	if( document.getElementById('alert').style.visibility == 'hidden';){
		return true;
	}else
	{
		return false;
	}


	if(e !== ''){
		return true;
	}else
	{
		return false;
	}
	if(c !== '')
	{
		return true;
	}else
	{
		return false;
	}
	if(b == true){
		return true;
	}else
	{
		return false;
	}




	transition display none:


		setTimeout(display, 600);
	function display(){
		basic.style.display= "none";
	}