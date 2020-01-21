# Double-booked
 Educational code for learning how to get overlaping event pairs like calendar does.
 
 Index.html - simple UI showing out how it works &nbsp;
 Event.js - js class that represents event object &nbsp;
 EventManager.js - js class that represents manager for sorting & getting overlapping events &nbsp;
 MainEntry.js - file with help functions for index.html &nbsp;
 
 ## Initializing event
 new Event(name, start, end, startDate, endDate) &nbsp;
 
 ## Getting overlapping events
 let EventArr = new Array(); // this array we need for storing events &nbsp;
 let event_manager = new EventManager(EventArr); &nbsp;
 let events = event_manager.getOverlapingEvents();
