var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

var UIController = (function() {
  // Some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. Get the field input data

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget
    console.log('It works');
  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    };
  });
})(budgetController, UIController);