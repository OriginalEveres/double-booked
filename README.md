# Double-booked
 Educational code for learning how to get overlaping event pairs like calendar does.
 
 Index.html - simple UI showing out how it works \n
 Event.js - js class that represents event object \n
 EventManager.js - js class that represents manager for sorting & getting overlapping events \n
 MainEntry.js - file with help functions for index.html \n
 
 # Initializing event
 new Event(name, start, end, startDate, endDate) \n
 
 # Getting overlapping events
 let EventArr = new Array(); // this array we need for storing events \n
 let event_manager = new EventManager(EventArr); \n
 let events = event_manager.getOverlapingEvents();
