function pingAndPong(input)


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var output = pingAndPong(input);
    output.forEach(function(heyNow) {
      $("#place").append("<ul>" + heyNow + "</ul>")
    }




      return output;
  });
});
