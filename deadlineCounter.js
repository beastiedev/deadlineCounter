/*
* Deadline Counter
* Simple countdown timer. It calculates how much time is left.
*/

/*
* Constructor
* @todo: has to take deadline time as input argument
*/
function DeadlineCounter() {
    this.deadLine = new Date(2017, 1, 11, 17);
}
/*
* Calculates miliseconds difference between now and deadLine time
*/
DeadlineCounter.prototype.getDiffTimestamp = function() {
    return this.deadLine * 1 - (new Date()) * 1;
}
/*
* Returns collection with calculated time values
*/
DeadlineCounter.prototype.calcDeadlineObject = function() {
    var diff = this.getDiffTimestamp();
    var sec = (diff/1000).toFixed();
    var min = (diff/1000/60).toFixed();
    var hour = (diff/1000/60/60).toFixed();
    var day = (diff/1000/60/60/24).toFixed();
    var year = (diff/1000/60/60/24/365).toFixed();
    return {
        totalSec: parseInt(sec),
        totalMin: parseInt(min),
        totalHour: parseInt(hour),
        totalDay: parseInt(day),
        totalYear: parseInt(year),
        formatSec: sec%60,
        formatMin: min%60,
        formatHour: hour%24,
        formatDay: day%365,
        formatYear: parseInt(year)
    }
}
/*
* Runs timer. Caluclates left time (creates collection) every 1 second
*/
DeadlineCounter.prototype.count = function() {
    var self = this;
    var interval = setInterval(function() {
        console.log(self.calcDeadlineObject());
    }, 1000);
}

/* new instance of DeadlineCounter */
var dl = new DeadlineCounter();
/* run, result in console */
dl.count();
