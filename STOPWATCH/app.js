var min = 0;
var sec = 0;
var msec = 0;
var hrs = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hrsHeading = document.getElementById("hrs");

var interval;

function timer (){
	msec++;
	msecHeading.innerHTML = msec;
	if(msec >=100)
	{
		sec++
		secHeading.innerHTML = sec;
		msec= 0;
	}
	else if (sec >=60) {
		min++;
		sec=0;
		minHeading.innerHTML=min;
	}
	else if (min >=60) {
		hrs++;
		min=0;
		hrsHeading.innerHTML=hrs;
	}
}
function start()
{

interval = setInterval(timer,10)
}
function stop()
{
	clearInterval(interval)
}
function reset()
{
	min= 0
	msec=0
	sec= 0
	hrs=0
	minHeading.innerHTML = min;
	secHeading.innerHTML=sec;
	msecHeading.innerHTML=msec;
	hrsHeading.innerHTML=hrs;
	clearInterval(interval)
}
