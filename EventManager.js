//
//
//  I hope you like this education example.
//  Visit https://solcode.net
//  More cool information on our social sites
//  Facebook: https://www.facebook.com/solcodeOfficial/
//  Instagram: https://www.instagram.com/solcode_solutions/
//
//

// Class that represents EventManger
// Requires arrays of event objects
class EventManager {
    // constructor
    constructor(events) {
        this.events = events;
    }

    // this functions gets the overlapping events
    getOverlapingEvents() {
        // sort the array
        this.sortEvents();
        // array that holds overlaping pairs
        let overlaping_pairs = new Array();

        // we can compare sorted array by comparing end and start time
        for (let i = 0; i < this.events.length - 1; i++) {
            // check others
            if (this.events[i].getEndTime() > this.events[i + 1].getStartTime()) {
                // events are overlaping each self. 
                let pair = new Array();
                pair.push(this.events[i]);
                pair.push(this.events[i + 1]);
                overlaping_pairs.push(pair);
            }

        }
        return overlaping_pairs;
    }

    // function for sorting the collection
    // sorting from the lowest value(morning) to highest(evening) => native for callendars
    sortEvents() { 
        this.events.sort(this.sortNatively);

        this.events.forEach(element => {
            console.log(element.getStartTime());
        });
    }

    // this sorts the array by the startTime property
    sortNatively(a, b) {
        const startTimeA = a.startTime;
        const startTimeB = b.startTime;

        if (startTimeA > startTimeB) {
            return 1;
        }else if (startTimeB > startTimeA) {
            return -1;
        }
    }
}