var countUp = function(countTo, countBy) {
  var output = [];
  for (var n=countBy; n <= countTo ; n+= countBy) {
    output.push(n);
  };
  return output;
};


$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var endResult = countUp (countTo,countBy);

    $("#results").text(endResult);



    event.preventDefault();

  });
});
