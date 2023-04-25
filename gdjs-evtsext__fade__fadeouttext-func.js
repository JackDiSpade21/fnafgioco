
if (typeof gdjs.evtsExt__fade__FadeOutTEXT !== "undefined") {
  gdjs.evtsExt__fade__FadeOutTEXT.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__fade__FadeOutTEXT = {};
gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects1= [];
gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects2= [];


gdjs.evtsExt__fade__FadeOutTEXT.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 400));
}
}}

}


};

gdjs.evtsExt__fade__FadeOutTEXT.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects1.length = 0;
gdjs.evtsExt__fade__FadeOutTEXT.GDObjectObjects2.length = 0;

gdjs.evtsExt__fade__FadeOutTEXT.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__fade__FadeOutTEXT.registeredGdjsCallbacks = [];