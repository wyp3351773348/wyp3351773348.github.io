function timeshow() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds(); // 在小于10的数字前加一个‘0’
  m = checkTime(m);
  s = checkTime(s);
  x = document.getElementById("timeshow");
  x.innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    timeshow();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function myclick() {
  const btns = document.querySelectorAll("div");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let span = document.createElement("span");
      span.style.left = e.offsetX + "px";
      span.style.top = e.offsetY + "px";
      btn.appendChild(span);
      setTimeout(() => {
        span.remove();
      }, 1000);
    });
  });
}
function mytime() {
  x = document.getElementById("Mytime");
  x.style.width = "100%";

  // document.getElementById("Mytime").style.width = "300px";
}
