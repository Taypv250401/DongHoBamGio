let min = sec = ms = 0,
  startTimer;

const btnStart = document.querySelector(".start"),
  btnStop = document.querySelector(".stop"),
  btnReset = document.querySelector(".reset");

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);

function start() {
  btnStart.classList.add("active");
  btnStop.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      // if (sec < 10) {
      //   sec = "0" + sec;
      // }
      ms = "0" + 0;
    } else if (sec == 60) {
      min++;
      // if (min < 10) {
      //   min = "0" + min;
      // }
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    putValue();
  }, 10);
}

function stop() {
  btnStart.classList.remove("active");
  btnStop.classList.add("stopActive");
  clearInterval(startTimer);
}

function reset() {
  btnStart.classList.remove("active");
  btnStop.classList.remove("stopActive");
  clearInterval(startTimer);
  min = sec = ms = "0" + 0;
  putValue();

}

function putValue() {
  document.querySelector(".miligiay").innerText = ms;
  document.querySelector(".giay").innerText = sec;
  document.querySelector(".phut").innerText = min;

}

