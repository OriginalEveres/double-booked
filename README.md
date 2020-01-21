# Double-booked
 Educational code for learning how to get overlaping event pairs like calendar does.
 
 Index.html - simple UI showing out how it works
 Event.js - js class that represents event object
 EventManager.js - js class that represents manager for sorting & getting overlapping events
 MainEntry.js - file with help functions for index.html
 
 # Initializing event
 new Event(name, start, end, startDate, endDate)
 
 # Getting overlapping events
 let EventArr = new Array(); // this array we need for storing events
 let event_manager = new EventManager(EventArr);
 let events = event_manager.getOverlapingEvents();
