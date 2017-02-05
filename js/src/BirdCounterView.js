var BirdingApp = BirdingApp || {};
BirdingApp.CounterView = function()
{
  var that = {},
      template_string,
      createView,
      bird_count
      ;

  function init()
  {
    template_string = document.querySelector("#bird-counter-entry").innerHTML;
    createView = _.template(template_string);
    bird_count = document.querySelector(".bird-counter .bird-list");
    return that;
  };

  function addToCounterView(json_array)
  {
    while (bird_count.firstChild)
    {
      bird_count.removeChild(bird_count.firstChild);
    }


    for (var index=0; index<json_array.length; index++)
    {
      var listEntryString = createView(json_array[index]);
      var tmpElement = document.createElement("div");
      tmpElement.innerHTML = listEntryString;
      bird_count.appendChild(tmpElement);
    }

    return that;
  };

  that.addToCounterView=addToCounterView;
  that.init=init;
  return that;
};
