setTimeout("Interval()",1000);

function actualise()
{
	var date    = new Date();
	// date.setHours(0);
	// date.setMinutes(0);
	var heure   = date.getHours();
	var minutes = date.getMinutes();
	var seconde = date.getSeconds();
	var reste   = 0;		
	var arrondi = Math.floor(minutes/5);
	
	reset_horloge(); //réinisialise l'horloge
	document.getElementById("heure").innerHTML = 'Heure : ' + heure + ' : ' + minutes + ' : ' + seconde;	

	//heure
	if (heure>12)
		heure = heure-12;
	if (heure == 0)
		heure = 12;	
	setOpacity("heure_"+heure,100);		

	//Minutes
	if (arrondi>0)
	{
		setOpacity("minutes_"+arrondi,100);
		reste = minutes - arrondi*5;
	}
	else
	{
		reste = minutes;
	}					

	if (reste>0)
	{
		for (var i =  1; i <= reste; i++)
		{
			setOpacity("minute_"+i,100);
		}
	}

	//seconde
	affiche_seconde(seconde);

}
function setOpacity(id,value) 
{
	var element = document.getElementById(id);
	element.style.opacity = value/100;
	element.style.filter = 'alpha(opacity=' + value + ')';
}
function affiche_seconde(sec)
{
	for (var i = 1; i <= sec; i++)
		setOpacity("seconde_"+i,100);	
}
function reset_horloge()
{
	for (var i = 1; i <= 12; i++)
		setOpacity("heure_"+i,20);	
	for (var i = 1; i <= 11; i++)
		setOpacity("minutes_"+i,20);	
	for (var i = 1; i <= 4; i++)
		setOpacity("minute_"+i,20);
	for (var i = 1; i <= 60; i++)
		setOpacity("seconde_"+i,20);				
}
function Interval()
{
	actualise();
	setInterval("actualise()",1000);
}	
function cmd(vairable)
{
	console.log(vairable);
}	