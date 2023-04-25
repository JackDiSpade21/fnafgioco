gdjs.fredjumpCode = {};
gdjs.fredjumpCode.GDjumpObjects1= [];
gdjs.fredjumpCode.GDjumpObjects2= [];
gdjs.fredjumpCode.GDjumpObjects3= [];
gdjs.fredjumpCode.GDjumpObjects4= [];
gdjs.fredjumpCode.GDvengeful_95spiritObjects1= [];
gdjs.fredjumpCode.GDvengeful_95spiritObjects2= [];
gdjs.fredjumpCode.GDvengeful_95spiritObjects3= [];
gdjs.fredjumpCode.GDvengeful_95spiritObjects4= [];
gdjs.fredjumpCode.GDblackObjects1= [];
gdjs.fredjumpCode.GDblackObjects2= [];
gdjs.fredjumpCode.GDblackObjects3= [];
gdjs.fredjumpCode.GDblackObjects4= [];


gdjs.fredjumpCode.asyncCallback16998412 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}
gdjs.fredjumpCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.fredjumpCode.asyncCallback16998412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fredjumpCode.asyncCallback16998148 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("vengeful_spirit"), gdjs.fredjumpCode.GDvengeful_95spiritObjects3);

{for(var i = 0, len = gdjs.fredjumpCode.GDvengeful_95spiritObjects3.length ;i < len;++i) {
    gdjs.fredjumpCode.GDvengeful_95spiritObjects3[i].hide(false);
}
}
{ //Subevents
gdjs.fredjumpCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.fredjumpCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save vengeful_spirit as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.4), (runtimeScene) => (gdjs.fredjumpCode.asyncCallback16998148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fredjumpCode.asyncCallback16997588 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.fredjumpCode.GDblackObjects2);
gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.fredjumpCode.GDjumpObjects2);
{for(var i = 0, len = gdjs.fredjumpCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.fredjumpCode.GDjumpObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.fredjumpCode.GDblackObjects2.length ;i < len;++i) {
    gdjs.fredjumpCode.GDblackObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.fredjumpCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.fredjumpCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.fredjumpCode.GDvengeful_95spiritObjects1) asyncObjectsList.addObject("vengeful_spirit", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.fredjumpCode.asyncCallback16997588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.fredjumpCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vengeful_spirit"), gdjs.fredjumpCode.GDvengeful_95spiritObjects1);
{for(var i = 0, len = gdjs.fredjumpCode.GDvengeful_95spiritObjects1.length ;i < len;++i) {
    gdjs.fredjumpCode.GDvengeful_95spiritObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.fredjumpCode.GDvengeful_95spiritObjects1.length ;i < len;++i) {
    gdjs.fredjumpCode.GDvengeful_95spiritObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Images\\eastergg\\FJumpb.wav", false, 30, 1);
}
{ //Subevents
gdjs.fredjumpCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.fredjumpCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fredjumpCode.GDjumpObjects1.length = 0;
gdjs.fredjumpCode.GDjumpObjects2.length = 0;
gdjs.fredjumpCode.GDjumpObjects3.length = 0;
gdjs.fredjumpCode.GDjumpObjects4.length = 0;
gdjs.fredjumpCode.GDvengeful_95spiritObjects1.length = 0;
gdjs.fredjumpCode.GDvengeful_95spiritObjects2.length = 0;
gdjs.fredjumpCode.GDvengeful_95spiritObjects3.length = 0;
gdjs.fredjumpCode.GDvengeful_95spiritObjects4.length = 0;
gdjs.fredjumpCode.GDblackObjects1.length = 0;
gdjs.fredjumpCode.GDblackObjects2.length = 0;
gdjs.fredjumpCode.GDblackObjects3.length = 0;
gdjs.fredjumpCode.GDblackObjects4.length = 0;

gdjs.fredjumpCode.eventsList3(runtimeScene);

return;

}

gdjs['fredjumpCode'] = gdjs.fredjumpCode;
