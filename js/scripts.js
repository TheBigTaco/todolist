// Business Logic here
function List(item) {
  this.itemInput = item
};

List.prototype.task = function () {
  return this.itemInput
};

// UI Logic here
$(document).ready(function() {
  $("#toDo").submit(function(event) {
    event.preventDefault();
    var userInput = $("#item").val();

    var addTask = new List(userInput);

    $("#output").append("<li>" + addTask.task() + "</li>")

    $("#output").children("li").click(function() {
      $(this).remove();
    });

    $("#item").val("");



  });
});
