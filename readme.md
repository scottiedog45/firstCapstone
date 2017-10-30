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

OTHER NOTES:
netlify.... need guidance with implementation?
downladed Homebrew, getting error messoges from Let's Encrypt that the certificate didn't pass

Feedback from SLACK:
1)Make it responsive... it is? 
2)Remove shadow border on button and style it to make it more interesting for the user 
  -What's going on with the font during the transition?
  -Becuase it's resizing proportionally with the scale, and THEN adjusting the font thickness
3)add more to landing page, besides the one line
  -Done
-Grayed out text in search bar, indicating that a zip code is expected
  -Done
-Higher resolution weather pics
  http://erikflowers.github.io/weather-icons/ implement these with IF statements
-List of locations/ratings along with the map
  -Solution, cycle place ids from place details requests
  -Scrollable pics of park, open in lightbox? 
    IF object has key, append that data to a div to the right (replace weather dif on left side)
-link to parks website
  either click map icon to get info or display automatically? 
  Name of result is clickable link
  Then overall rating
  Then pictures
  Then first review with corresponding rating 
  
