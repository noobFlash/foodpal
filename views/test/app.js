
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

var UIController = (function () {
  var DOMstring = {
    searchButton : '.btn',



  };

  return {

    getDOMstrings : function () {
        return DOMstring;
    }

  };

})();

var DataController = (function () {


    return {


    };
})();

var controller = (function (DataCtrl,UICtrl) {

  var setupEventListeners =function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.searchButton).addEventListener('click',function () {
      console.log("search");
    });

  };


















    return {
      init: function() {
          console.log('Application has started.');
          setupEventListeners();
      }
    };




})(DataController,UIController);
controller.init();
