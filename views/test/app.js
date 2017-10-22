
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

var UIController = (function () {
  var DOMstring = {
    searchButton : '.btn',
    searchData : '.form-control'


  };

  return {
    getInput : function () {
      return {
         inputData : document.querySelector(DOMstring.searchData).value,
      };
    },
    getDOMstrings : function () {
        return DOMstring;
    }

  };

})();

var DataController = (function () {
  var DataModel = function (id,inputData) {
    this.id = id;
    this.inputData = inputData;
  };
  var data = {

  }

    return {


    };
})();

var controller = (function (DataCtrl,UICtrl) {

  var setupEventListeners =function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.searchButton).addEventListener('click',ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });


  };

  var ctrlAddItem = function () {
    //1. get input data
    var input;
    input = UICtrl.getInput();
    
    if (input.inputData !== "") {
      console.log(input);
    }
    //2. search for the input data
    //3. add output data in UI
    //4. clear Fields
    //5. add best fit product
    //6. calculate percentage
  };

















    return {
      init: function() {
          console.log('Application has started.');
          setupEventListeners();
      }
    };




})(DataController,UIController);
controller.init();
