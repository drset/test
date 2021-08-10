# Test regular endpoints

https://www.site.com/find_this_endpoint?param1=true

# Test html endpoint

<a href="https://www.site.com/find_this_href_endpoint?param2=true">test</a>

# Test ajax endpoints

$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});

# Test secret keys

## All the keys here are false, for testing tools that detect the leak, don't bother.

SHODAN_API_KEY = "gCpIwXNTQP2s4qualIaDcIhNeEePo2pu" 
