picniq!

Now you can easily search your vicinity for local parks in which to have a picnic, and have the current weather forecast for today and tomorrow, all with one app!

Summary: Searches zipcodes for parks in vicinity, and gives weather based on the zipcode submitted. 

Technology used: HTML/CSS/JavaScript/jQuery

Notes about commented out code:
  Upon requesting feedback from the SLACK community and other colleagues, suggestions were made to include certain features that would give more information from an additional API request. This would be the Place Details API from Google Maps. Additional informaotin requested would be user ratings of the park, pictures of the park, and a link to the park website. 
  
  HTML, CSS, and JS were written to accomodate this API request. Unfortunately it was realized that this API did not support a Cross-Origin-Resource-Header. I found a workaround with a Chrome plugin, but the nature of the program is unsafe and "hacky".
  
  I'm keeping the code as a starting point for an upgrade process after I familiarize myself with the Node.js techniques to use a server to address this issue. 



