var BirdingApp = (function()
{
    var that = {},
        controller,
        model,
        listView,
        counterView,
        json_array;

        function init()
        {
            var json_string = document.querySelector("#bird-list").innerHTML;
            json_array = JSON.parse(json_string);

            initModel();
            initController();
            initListView();
            initCounterView();
        };

        function initModel()
        {
          model = BirdingApp.Model().init(json_array);
        };

        function initController()
        {
          controller = BirdingApp.Controller().init(
            {
              input: document.querySelector(".bird-search"),
              galleryItem: document.querySelector(".bird-gallery .bird-list"),
              counterItem: document.querySelector(".bird-counter .bird-list")
            }
          );
          controller.setTextInputCallback(textInput);
          controller.setAddToCounterCallback(addToCounter);
          controller.setIncreaseBirdCountCallback(increaseBirdCount);
          controller.setDecreaseBirdCountCallback(decreaseBirdCount);
        };

        function initListView()
        {
          listView = BirdingApp.ListView().init(json_array);
        };

        function initCounterView()
        {
          counterView = BirdingApp.CounterView().init();
        };

        /**********************************************************************/

        function textInput(inputText)
        {
          var shortList = model.getShortList(inputText);
          listView.init(shortList);
        };

        function addToCounter(name)
        {
          model.addCounterItem(name);
          var counterList = model.getCounterList();
          counterView.addToCounterView(counterList);
        };
        function increaseBirdCount(name)
        {
          var counterList = model.increaseBirdCount(name);

          counterView.addToCounterView(counterList);

        };
        function decreaseBirdCount(name)
        {
          model.decreaseBirdCount(name);
          var counterList = model.getCounterList();
          counterView.addToCounterView(counterList);
        };

        /**********************************************************************/

    that.init = init;
    return that;
}());
