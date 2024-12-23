let counter=0;
document.getElementById('Decrease').onclick=function(){
	if(counter>0){
		counter--;
	}
	document.getElementById('myH1').textContent=counter;
}
document.getElementById('Reset').onclick=function(){
	counter=0;
	document.getElementById('myH1').textContent=counter;
}
document.getElementById('Increase').onclick=function(){
	counter++;
	document.getElementById('myH1').textContent=counter;
}