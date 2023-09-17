const watch = document.querySelector('.watch');
const clr1 = document.getElementById('color1');
const clr2 = document.getElementById('color2');
const clr3 = document.getElementById('color3');
const clr4 = document.getElementById('color4');
const clr5 = document.getElementById('color5');
const time_btn = document.getElementById('time');
const heart_btn = document.getElementById('heartrate');
const container = document.querySelector('.watch-content');
console.log(container);
clr1.onclick = function () {
   watch.src = `\\assets\\images\\Mplj1YR.png`;
}
clr2.onclick = function () {
   watch.src = `\\assets\\images\\xSIK4M8.png`;
}
clr3.onclick = function () {
   watch.src = `\\assets\\images\\iOeUBV7.png`;
}
clr4.onclick = function () {
   watch.src = `\\assets\\images\\PTgQlim.png`;
}
clr5.onclick = function () {
   watch.src = `\\assets\\images\\Zygu7I3.png`;
}
function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds(); 
   var session = "AM";

   if (h == 0) {
      h = 12;
   }

   if (h > 12) {
      h = h - 12;
      session = "PM";
   }

   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;

   var time = h + ":" + m + ":" + s + " " + session;
   document.getElementById("MyClockDisplay").innerText = time;
   document.getElementById("MyClockDisplay").textContent = time;

   setTimeout(showTime, 1000);

}
time_btn.onclick = function()
{
   container.innerHTML = `<p id="MyClockDisplay" class="clock" onload="showTime()"></p>`;
   showTime();
}
heart_btn.onclick = function()
{
   container.innerHTML = `<p>Heart Beat</p>`
   console.log(container);
}
showTime();