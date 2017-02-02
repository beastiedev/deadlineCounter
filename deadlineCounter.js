/*
* Deadline Counter
* Simple countdown timer. It calculates how much time is left.
*/

var DeadlineCounter = (function() {
    /**
     * DeadlineCounter - constructor
     *
     * @param  {string} deadlineTime Time in ISO fromat, e.g. '11 Feb 2017 17:00:00 GMT'
     * @param  {string} selector     CSS selector of counter container, expects ID
     * @return {object}              instance of DeadlineCounter
     */
    function DeadlineCounter(deadlineTime, selector) {
        this.deadLine = Date.parse(deadlineTime);
        this.selector = selector;
    }

    /**
     * DeadlineCounter.prototype.getDiffTimestamp.
     * Calculates miliseconds difference between now and deadLine time.
     *
     * @return {integer}  time difference in milliseconds
     */
    DeadlineCounter.prototype.getDiffTimestamp = function() {
        return this.deadLine * 1 - (new Date()) * 1;
    }

    /**
     * DeadlineCounter.prototype.calcDeadlineObject.
     * Calculates time values.
     *
     * @return {bject}  collection with calculated time values
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

    /**
     * DeadlineCounter.prototype.deadlineObjectToString
     * Formats datetime string
     *
     * @param  {type} obj collection with calculated time values
     * @return {string}     Formated string
     */
    DeadlineCounter.prototype.deadlineObjectToString = function(obj) {
        return obj.formatDay + " days "
            + obj.formatHour + " hours "
            + obj.formatMin + " minutes "
            + obj.formatSec + " seconds";
    }

    /**
     * DeadlineCounter.prototype.count.
     * Runs timer. Caluclates left time (creates collection) every 1 second.
     */
    DeadlineCounter.prototype.count = function() {
        var self = this;
        console.log(self)
        var interval = setInterval(function() {
            self.dlLayout(self.deadlineObjectToString(self.calcDeadlineObject()));
        }, 1000);
    }

    /**
     * Applies time to layout
     */
    DeadlineCounter.prototype.dlLayout = function(contains) {
        if (!this.selector) retrun;
        var el = document.getElementById(this.selector);
        el.innerHTML = contains;
    }

    return DeadlineCounter;

})();

/* create new instance of DeadlineCounter and run */
var dl1 = new DeadlineCounter('11 Feb 2017 17:00:00', 'dl1');
dl1.count();
