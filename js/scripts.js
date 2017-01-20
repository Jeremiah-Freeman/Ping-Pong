function pingAndPong(input){
  var output = [];
  for (var i=1; i <= input; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
}



$(document).ready(function() {
  $("#forminput").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var output = pingAndPong(input);
    output.forEach(function(heyNow) {
      $("#place").append("<li>" + heyNow + "</li>");
    });
  });
});
