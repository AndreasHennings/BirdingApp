var BirdingApp = BirdingApp || {};
BirdingApp.Controller = function()
{
  var that = {},
      input,
      galleryItem,
      counterItem,
      textInputCallback,
      addToCounterCallback,
      increaseBirdCountCallback,
      decreaseBirdCountCallback;

  /****************************************************************************/

  function init(options)
  {
    input = options.input;
    galleryItem = options.galleryItem;
    counterItem = options.counterItem;
    initListeners();
    return that;
  };

  function initListeners()
  {
    input.addEventListener("keyup", onTextInput);
    galleryItem.addEventListener("click", onListClick);
    counterItem.addEventListener("click", onCounterClick);
  }

  /****************************************************************************/

  function onTextInput()
  {
      textInputCallback(this.value);
  }

  function onListClick(event)
  {
    console.log(event);
    addToCounterCallback(event.path[2].querySelector(".bird-name").innerHTML);
  }

  function onCounterClick()
  {
    if (event.path[1].className === "bird-counter-increase button")
    {
      increaseBirdCountCallback(event.path[5].querySelector(".bird-name").innerHTML);
    }

    if (event.path[1].className === "bird-counter-decrease button")
    {
      decreaseBirdCountCallback(event.path[5].querySelector(".bird-name").innerHTML);
    }
  };

  /****************************************************************************/

  function setTextInputCallback(callback)
  {
    textInputCallback=callback;
  };
  function setAddToCounterCallback(callback)
  {
    addToCounterCallback=callback;
  };
  function setIncreaseBirdCountCallback(callback)
  {
    increaseBirdCountCallback=callback;
  };
  function setDecreaseBirdCountCallback(callback)
  {
    decreaseBirdCountCallback=callback;
  };

  /****************************************************************************/

  that.setTextInputCallback=setTextInputCallback;
  that.setAddToCounterCallback=setAddToCounterCallback;
  that.setIncreaseBirdCountCallback=setIncreaseBirdCountCallback;
  that.setDecreaseBirdCountCallback=setDecreaseBirdCountCallback;
  that.init=init;
  return that;
};
