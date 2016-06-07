$(function(){
  $("form#count-by").submit(function(event){
    event.preventDefault();

    var countBy = parseInt($("input#count-by-input").val());
    var countTo = parseInt($("input#count-to-input").val());
    var answers = [];
    for(index = countBy; index <= countTo; index+=countBy){
      answers.push(index);
    }
    alert(answers);
  });

});
