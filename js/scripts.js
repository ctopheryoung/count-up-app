var countUp = function(countTo, countBy) {
  var output = [];
  for (var n=countBy; n <= countTo ; n+= countBy) {
    output.push(n);
  };
  return output;
};

function write_letters(endResult){
    var items = document.getElementById("itemList");
    for (var i = 0; i < endResult.length; i++ ) {
        var item = document.createElement("li");
        item.innerHTML = endResult[i];
        items.appendChild(item);
    };
    return;
};




$(document).ready(function() {
  $("form#numbers").submit(function() {
    //debugger;
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var endResult = countUp (countTo,countBy);
    write_letters(endResult);

    // write_letters(endResult) {
    //   return items;
    // }

    //$("#itemList").text(endResult);

    event.preventDefault();
  });
});



// var countUp = function(countTo, countBy) {
//   var output = [];
//   for (var n=countBy; n <= countTo ; n+= countBy) {
//     output.push(n);
//   };
//   return output;
// };
