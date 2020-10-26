export default function Stopwatch(deltaInMsParam = 1) {
  const deltaInMs = deltaInMsParam;
  let timeInMs = 0;
  let stopwatchInterval = undefined;

  this.start = function () {
    console.log('Stopwatch started');
    stopwatchInterval = setInterval(() => {
      timeInMs = timeInMs + deltaInMs;
    }, deltaInMs);
  };

  this.pause = function () {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  };

  this.stop = function () {
    this.pause();
    this.reset();
  };

  this.reset = function () {
    timeInMs = 0;
  };

  this.getStopwatchMS = function () {
    return timeInMs % 1000;
  };

  this.getStopwatchSeconds = function () {
    return Math.floor((timeInMs / 1000) % 60);
  };

  this.getStopwatchMinutes = function () {
    return Math.floor(timeInMs / 1000 / 60);
  };

  this.displayTime = function () {
    const isSingleDigitNumber = (num) => String(num).length === 1;

    let minutes = this.getStopwatchMinutes();
    minutes = isSingleDigitNumber(minutes) ? `0${minutes}` : minutes;

    let seconds = this.getStopwatchSeconds();
    seconds = isSingleDigitNumber(seconds) ? `0${seconds}` : seconds;

    let milliseconds = this.getStopwatchMS();
    milliseconds =
      String(milliseconds).length > 2
        ? Math.floor(milliseconds / 10)
        : milliseconds;

    milliseconds = isSingleDigitNumber(milliseconds)
      ? `0${milliseconds}`
      : milliseconds;

    return `${minutes} : ${seconds} : ${milliseconds}`;
  };
}
