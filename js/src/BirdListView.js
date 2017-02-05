var BirdingApp = BirdingApp || {};
BirdingApp.ListView = function()
{
  var that = {},
      template_string,
      createView,
      bird_list,
      list;

  function init(json_array)
  {
    list=document.querySelector("#bird-list").innerHTML;
    template_string = document.querySelector("#bird-list-entry").innerHTML;
    createView = _.template(template_string);
    bird_list = document.querySelector(".bird-gallery .bird-list");

    while (bird_list.firstChild)
    {
      bird_list.removeChild(bird_list.firstChild);
    }

    for (var index=0; index<json_array.length; index++)
    {
      var listEntryString = createView(json_array[index]);
      var tmpElement = document.createElement("div");
      tmpElement.innerHTML = listEntryString;
      bird_list.appendChild(tmpElement);
    }
    return that;
  };


  that.init=init;
  return that;
};
