// we are initializing our objects
let EventArr = new Array(); // this array we need for storing events
let event_manager = new EventManager(EventArr); // this is a event manager that handles the operation with events

// function that adds event to the manager, front end layer
function addEvent() {
    // getting values from input
    let name = document.getElementById("name").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    // adding event to the array by initialization object
    EventArr.push(new Event(name, start, end, "21.5.2020", "25.6.2020"));
    // writing event do DOM
    document.getElementById("actual-events").innerHTML += name + " | From: " + start + " To: " + end + "</br>";
    // reseting inputs
    document.getElementById("name").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
}

// function that executes event overlap calculation
function showOverlaptedEvents() {
    let events = event_manager.getOverlapingEvents();
    let result = "";
    events.forEach(element => {
        result += element[0].getName() + " From: " + element[0].getStartTime() + " To: " + element[0].getEndTime() + " is overlapping with: " + element[1].getName() + " From: " + element[1].getStartTime() + " To: " + element[1].getEndTime() + "\n\n";
    });
    alert(result);
}


//
//
//  I hope you like this education example.
//  Visit https://solcode.net
//  More cool information on our social sites
//  Facebook: https://www.facebook.com/solcodeOfficial/
//  Instagram: https://www.instagram.com/solcode_solutions/
//
//