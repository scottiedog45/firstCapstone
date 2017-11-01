HTML:
<!-- "everything" generally speaking...invisible --> HEAD
<!-- everything visible --> BODY
normally async in the header, while rest of page is loading. if in footer, don't need async. browser is doing things automatically, optimizes
 
CSS:
general to specific is CSS, cascade idea, gradually over ride
ids at end b/c most specific
mimic order that things/classes are visible on page

JS:
Defining all functions, and to kick off bring in the $'function' at the end
host page on github to display, publish through gh pages

OTHER NOTES/Shortcomings
Image requests exceed quota
Returned parks are...not all parks? 

Feedback from SLACK:
-Higher resolution weather pics
  http://erikflowers.github.io/weather-icons/ implement these with IF statements
-Only include objects that have a rating key
  <p>piqnic user rating: ${data.result.rating}/5</p>
  Object.hasOwnProperty...
-Fix CORS issue
  
  
Client side app, CORS enforced by browsers
option: setup node app that acts as proxys
Move map shadow from div to actual image