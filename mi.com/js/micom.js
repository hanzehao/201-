
var i = document.getElementsByTagName("img");


function show(n){
	for(var j = 0;j < i.length;j++)
	{
		if(parseInt(i[j].className) == n)
			{	
			i[j].style.visibility = 'visible';
			}	
	}
}

function hid(n){

	for(var j = 0;j < i.length;j++)
	{
		if(parseInt(i[j].className) == n)
			{	
			i[j].style.visibility = 'hidden';
			}	
	}
}
