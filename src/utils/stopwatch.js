export default function Stopwatch({ deltaInMsParam = 1 } = {}) {
  const deltaInMs = deltaInMsParam;
  let timeInMs = 0;
  let offset;
  let stopwatchInterval = undefined;

  this.delta = function () {
    const now = Date.now();
    const timeDiff = now - offset;
    offset = now;

    return timeDiff;
  };

  this.start = function () {
    offset = Date.now();
    stopwatchInterval = setInterval(() => {
      timeInMs = timeInMs + this.delta();
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

  this.snapshot = function () {
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

    return { minutes, seconds, milliseconds };
  };
}

Stopwatch.prototype.toString = function () {
  const { minutes, seconds, milliseconds } = this.snapshot();
  return `${minutes} : ${seconds} : ${milliseconds}`;
};
