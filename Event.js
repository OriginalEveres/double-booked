//
//
//  I hope you like this education example.
//  Visit https://solcode.net
//  More cool information on our social sites
//  Facebook: https://www.facebook.com/solcodeOfficial/
//  Instagram: https://www.instagram.com/solcode_solutions/
//
//

// Class that represents Event object
// requires name, start && end time, start && end date for constructing
class Event {
    // constructor
    constructor(name, startTime, endTime, startDate, endDate) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.startDate = startDate;
    }
    // getters for properties
        // gets name
    getName() {
        return this.name;
    }
        // gets start time
    getStartTime () {
        return this.startTime + ":00";
    }
        // gets end time
    getEndTime() {
        return this.endTime + ":00"; 
    }
        // gets time range
    getTimeRange() {
        return this.startTime + " - " + this.endTime;
    }
        // gets start date
    getStartDate() {
        return this.startDate;
    }
        // gets end date
    getEndDate() {
        return this.endDate;
    }
        // gets date range
    getDateRange() {
        return this.startDate + " - " + this.endDate;
    }
}