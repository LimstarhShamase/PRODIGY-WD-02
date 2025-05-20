  let timer;
    let seconds = 0;

    function start() {
      if (!timer) {
        timer = setInterval(updateStopwatch, 1000);
      }
    }

    function pause() {
      clearInterval(timer);
      timer = null;
    }

    function updateStopwatch() {
      seconds++;
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      document.getElementById("stopwatch").innerText = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function reset() {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      document.getElementById("stopwatch").innerText = '0:00:00';
    }