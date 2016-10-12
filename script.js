function promedioCallback (a,b,c,callback){
	var suma = a + b + c ;
	var promedio = suma / 3 ;

	return callback(promedio);
}

//function segundero

function segundero () {
	document.getElementById("titulo").innerHTML = setInterval(promedioCallback(5,8,6,alert), 1000);
	
}