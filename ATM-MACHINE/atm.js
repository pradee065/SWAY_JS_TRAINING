function myAtm(){
   var money = parseInt(document.getElementById('amount').value);
   var tk = Math.floor(money/2000);
   document.getElementById('tk').innerHTML = tk;
   var money = money - tk * 2000;

   var fh = Math.floor(money/500);
   document.getElementById('fh').innerHTML = fh;
   var money = money - fh * 500;

   var th = Math.floor(money/200);
   document.getElementById('th').innerHTML = th;
   var money = money - th * 200;

   var hndrd = Math.floor(money/100);
   document.getElementById('hndrd').innerHTML = hndrd;
   var money = money - hndrd * 100;

   var fifty = Math.floor(money/50);
   document.getElementById('fifty').innerHTML = fifty;
   var money = money - fifty * 50;

   var twenty = Math.floor(money/20);
   document.getElementById('twenty').innerHTML = twenty;
   var money = money - twenty * 20;

   var ten = Math.floor(money/10);
   document.getElementById('ten').innerHTML = ten;
   var money = money - ten * 10;

   var five = Math.floor(money/5);
   document.getElementById('five').innerHTML = five;
   var money = money - five * 5;

   var two = Math.floor(money/2);
   document.getElementById('two').innerHTML = two;
   var money = money - two * 2;

   var one = Math.floor(money/1);
   document.getElementById('one').innerHTML = one;
 
   document.getElementById('total-denom').innerHTML = tk + fh + th + hndrd + fifty + twenty + ten + five + two + one;



}