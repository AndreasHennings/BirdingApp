var BirdingApp = BirdingApp || {};
BirdingApp.Model = function()
{
  var that = {},
      counterList = [],
      fullList = [];

  function init(json_array)
  {
    fullList = json_array;
    for (var i=0; i<fullList.length; i++)
    {
      fullList[i].count=0;
    }
    return that;
  };

/******************************************************************************/

  function getShortList(inputText)
  {
    if (inputText =="")
    {
      return fullList;
    }

    var result=[];

    for (var i =0; i<fullList.length; i++ )
    {
      var name = fullList[i].name;
      if (name.includes(inputText))
      {
        result.push(fullList[i]);
      }
    }
    return result;
  };
  /****************************************************************************/
  function addCounterItem(itemName)
  {
    for (var i=0; i<counterList.length; i++)
    {
      if (counterList[i].name==itemName)
      {
        return that;
      }
    }

    for (var i =0; i<fullList.length; i++ )
    {
      var name = fullList[i].name;
      if (name==itemName)
      {
        var item = fullList[i];
        item.count=0;
        counterList.push(item);
      }
    }
    return that;
  };

/******************************************************************************/

  function getCounterList()
  {
    return counterList;
  };

/******************************************************************************/

  function increaseBirdCount(newname)
  {
    for (var i=0; i<counterList.length; i++)
    {


      if (counterList[i].name==newname)
      {
        counterList[i].count++;
      }

    }
    return counterList;
  };

  function decreaseBirdCount(name)
  {
    for (var i=0; i<counterList.length; i++)
    {
      if (counterList[i].name==name)
      {
        if (counterList[i].count>0)
        {
          counterList[i].count--;
        }
      }

    }
    return that;
  };
  that.decreaseBirdCount=decreaseBirdCount;
  that.increaseBirdCount=increaseBirdCount;
  that.getCounterList=getCounterList;
  that.addCounterItem=addCounterItem;
  that.getShortList=getShortList;
  that.init = init;
  return that;
};
