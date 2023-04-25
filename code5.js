gdjs._54amCode = {};
gdjs._54amCode.GDblackObjects1= [];
gdjs._54amCode.GDblackObjects2= [];
gdjs._54amCode.GDblackObjects3= [];
gdjs._54amCode.GDblackObjects4= [];
gdjs._54amCode.GDblackObjects5= [];
gdjs._54amCode.GDsixObjects1= [];
gdjs._54amCode.GDsixObjects2= [];
gdjs._54amCode.GDsixObjects3= [];
gdjs._54amCode.GDsixObjects4= [];
gdjs._54amCode.GDsixObjects5= [];
gdjs._54amCode.GDamObjects1= [];
gdjs._54amCode.GDamObjects2= [];
gdjs._54amCode.GDamObjects3= [];
gdjs._54amCode.GDamObjects4= [];
gdjs._54amCode.GDamObjects5= [];
gdjs._54amCode.GDcoriandoliObjects1= [];
gdjs._54amCode.GDcoriandoliObjects2= [];
gdjs._54amCode.GDcoriandoliObjects3= [];
gdjs._54amCode.GDcoriandoliObjects4= [];
gdjs._54amCode.GDcoriandoliObjects5= [];


gdjs._54amCode.asyncCallback16991620 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prenotte", true);
}}
gdjs._54amCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._54amCode.asyncCallback16991620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._54amCode.asyncCallback16991204 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("six"), gdjs._54amCode.GDsixObjects4);

{for(var i = 0, len = gdjs._54amCode.GDsixObjects4.length ;i < len;++i) {
    gdjs._54amCode.GDsixObjects4[i].clearForces();
}
}
{ //Subevents
gdjs._54amCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs._54amCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs._54amCode.GDsixObjects3) asyncObjectsList.addObject("six", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.2), (runtimeScene) => (gdjs._54amCode.asyncCallback16991204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._54amCode.asyncCallback16990820 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("six"), gdjs._54amCode.GDsixObjects3);
{for(var i = 0, len = gdjs._54amCode.GDsixObjects3.length ;i < len;++i) {
    gdjs._54amCode.GDsixObjects3[i].addForce(0, -(60), 1);
}
}
{ //Subevents
gdjs._54amCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs._54amCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs._54amCode.asyncCallback16990820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._54amCode.asyncCallback16990588 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "6am.mp3", 6, false, 40, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "6 am");
}
{ //Subevents
gdjs._54amCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs._54amCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._54amCode.asyncCallback16990588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._54amCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs._54amCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs._54amCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs._54amCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs._54amCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._54amCode.GDblackObjects1.length = 0;
gdjs._54amCode.GDblackObjects2.length = 0;
gdjs._54amCode.GDblackObjects3.length = 0;
gdjs._54amCode.GDblackObjects4.length = 0;
gdjs._54amCode.GDblackObjects5.length = 0;
gdjs._54amCode.GDsixObjects1.length = 0;
gdjs._54amCode.GDsixObjects2.length = 0;
gdjs._54amCode.GDsixObjects3.length = 0;
gdjs._54amCode.GDsixObjects4.length = 0;
gdjs._54amCode.GDsixObjects5.length = 0;
gdjs._54amCode.GDamObjects1.length = 0;
gdjs._54amCode.GDamObjects2.length = 0;
gdjs._54amCode.GDamObjects3.length = 0;
gdjs._54amCode.GDamObjects4.length = 0;
gdjs._54amCode.GDamObjects5.length = 0;
gdjs._54amCode.GDcoriandoliObjects1.length = 0;
gdjs._54amCode.GDcoriandoliObjects2.length = 0;
gdjs._54amCode.GDcoriandoliObjects3.length = 0;
gdjs._54amCode.GDcoriandoliObjects4.length = 0;
gdjs._54amCode.GDcoriandoliObjects5.length = 0;

gdjs._54amCode.eventsList5(runtimeScene);

return;

}

gdjs['_54amCode'] = gdjs._54amCode;
