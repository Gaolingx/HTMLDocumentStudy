<!-- isaac at Oct 30 2004 14:20 -->
currentDate=new Date();
with (currentDate){
	year=getYear();
	day=getDay();
	month=getMonth()+1;
	if(year >= 2000)
		document.write(getYear()+'��'+month+'��'+getDate()+'��');
	if(year <= 99)
		document.write('19'+getYear()+'��'+month+'��'+getDate()+'��');
	if(year >= 100 && year < 2000){
		year=year-100+2000;
		document.write(year+'��'+month+'��'+getDate()+'��');}
}

//document.write('<br><br>')
-->
