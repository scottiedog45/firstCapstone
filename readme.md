HTML:
<!-- "everything" generally speaking...invisible --> HEAD
<!-- everything visible --> BODY
normally async in the header, while rest of page is loading. if in footer, don't need async. browser is doing things automatically, optimizes
 
CSS:
general to specific is CSS, cascade idea, gradually override
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
  http://erikflowers.github.io/weather-icons/ 
  implement these with IF statements
-Only include objects that have a rating key
  <p>piqnic user rating: ${data.result.rating}/5</p>
  Object.hasOwnProperty...
-Fix CORS issue
  possible solutions:
    enable cors plugin (only works for me)
    set up a php server?
      -Instead of sending request to google api, send to own server
        Issue is missing header, dev tools> network>headers
    Why does google have certian api/cors combinations and not others? 
      PHP
      SQUIDMAN
      node proxy server, BROWSER is throwing error
    ....rewrite code...?
    Might not be a way around
      ex. If google doesn't offer jsonp
      stage for animations? 
    
-Supplementary Reading
    SQL Injection (XSS)
    Cross site request forgery (CSRF)
    
  
Personal Goals
-Add some sort of ::hover responsiveness between links and markers and vice verca
-Feels like local server is slow to upload changes
-outer edge spacing on divs isn't working
-more graceful 
-make header a link to refresh the page
-Move map shadow from div to actual image