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
        var date = new Date();
        return this.deadLine * 1 - date * 1;
    }

    /**
     * DeadlineCounter.prototype.calcDeadlineObject.
     * Calculates time values.
     *
     * @return {bject}  collection with calculated time values
     */
    DeadlineCounter.prototype.calcDeadlineObject = function() {
        var diff = Math.floor(this.getDiffTimestamp()/1000);
        if (diff < 0) diff = 0;
        return {
            totalSec: (diff).toFixed(),
            totalMin: (diff/60).toFixed(),
            totalHour: (diff/60/60).toFixed(),
            totalDay: (diff/60/60/24).toFixed(),
            totalYear: (diff/60/60/24/365).toFixed(),
            formatSec: diff%60,
            formatMin: (diff - diff%60)/60%60,
            formatHour: Math.floor((diff - diff%60)/3600%24),
            formatDay: Math.floor((diff - diff%60)/3600/24%365),
            formatYear: Math.floor((diff - diff%60)/3600/24/365)
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
        console.log(obj)
        return obj.formatYear + " year(s) "
            + obj.formatDay + " day(s) "
            + obj.formatHour + " hour(s) "
            + obj.formatMin + " minute(s) "
            + obj.formatSec + " second(s)";
    }

    /**
     * DeadlineCounter.prototype.count.
     * Runs timer. Caluclates left time (creates collection) every 1 second.
     */
    DeadlineCounter.prototype.count = function() {
        var self = this;
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
