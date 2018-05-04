function resta(){
	var numero1 = document.getElementById('cajatexto1').value;
	var numero2 = document.getElementById('cajatexto2').value;
	var resultado =0;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado = parseInt(resultado);
	resultado = numero1 - numero2;

	resultado = document.getElementById('cajatexto3').value=
	resultado;
	return false;
}

function suma(){
	var numero1 = document.getElementById('cajatexto1').value;
	var numero2 = document.getElementById('cajatexto2').value;
	var resultado =0;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado = parseInt(resultado);
	resultado = numero1 + numero2;

	resultado = document.getElementById('cajatexto3').value=
	resultado;
	return false;
}

function multiplicacion(){
	var numero1 = document.getElementById('cajatexto1').value;
	var numero2 = document.getElementById('cajatexto2').value;
	var resultado =0;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado = parseInt(resultado);
	resultado = numero1 * numero2;

	resultado = document.getElementById('cajatexto3').value=
	resultado;
	return false;
}

function division(){
	var numero1 = document.getElementById('cajatexto1').value;
	var numero2 = document.getElementById('cajatexto2').value;
	var resultado =0;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	resultado = parseInt(resultado);
	resultado = numero1 / numero2;

	resultado = document.getElementById('cajatexto3').value=
	resultado;
	return false;
}