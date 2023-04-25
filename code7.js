gdjs.gameoverCode = {};
gdjs.gameoverCode.GDgameoverObjects1= [];
gdjs.gameoverCode.GDgameoverObjects2= [];
gdjs.gameoverCode.GDgameoverObjects3= [];
gdjs.gameoverCode.GDgameoverObjects4= [];
gdjs.gameoverCode.GDgameoverObjects5= [];
gdjs.gameoverCode.GDgameoverObjects6= [];
gdjs.gameoverCode.GDgmtxtObjects1= [];
gdjs.gameoverCode.GDgmtxtObjects2= [];
gdjs.gameoverCode.GDgmtxtObjects3= [];
gdjs.gameoverCode.GDgmtxtObjects4= [];
gdjs.gameoverCode.GDgmtxtObjects5= [];
gdjs.gameoverCode.GDgmtxtObjects6= [];
gdjs.gameoverCode.GDquitObjects1= [];
gdjs.gameoverCode.GDquitObjects2= [];
gdjs.gameoverCode.GDquitObjects3= [];
gdjs.gameoverCode.GDquitObjects4= [];
gdjs.gameoverCode.GDquitObjects5= [];
gdjs.gameoverCode.GDquitObjects6= [];
gdjs.gameoverCode.GDretryObjects1= [];
gdjs.gameoverCode.GDretryObjects2= [];
gdjs.gameoverCode.GDretryObjects3= [];
gdjs.gameoverCode.GDretryObjects4= [];
gdjs.gameoverCode.GDretryObjects5= [];
gdjs.gameoverCode.GDretryObjects6= [];
gdjs.gameoverCode.GDhomeObjects1= [];
gdjs.gameoverCode.GDhomeObjects2= [];
gdjs.gameoverCode.GDhomeObjects3= [];
gdjs.gameoverCode.GDhomeObjects4= [];
gdjs.gameoverCode.GDhomeObjects5= [];
gdjs.gameoverCode.GDhomeObjects6= [];
gdjs.gameoverCode.GDmarkerObjects1= [];
gdjs.gameoverCode.GDmarkerObjects2= [];
gdjs.gameoverCode.GDmarkerObjects3= [];
gdjs.gameoverCode.GDmarkerObjects4= [];
gdjs.gameoverCode.GDmarkerObjects5= [];
gdjs.gameoverCode.GDmarkerObjects6= [];
gdjs.gameoverCode.GDfaderObjects1= [];
gdjs.gameoverCode.GDfaderObjects2= [];
gdjs.gameoverCode.GDfaderObjects3= [];
gdjs.gameoverCode.GDfaderObjects4= [];
gdjs.gameoverCode.GDfaderObjects5= [];
gdjs.gameoverCode.GDfaderObjects6= [];
gdjs.gameoverCode.GDstaticObjects1= [];
gdjs.gameoverCode.GDstaticObjects2= [];
gdjs.gameoverCode.GDstaticObjects3= [];
gdjs.gameoverCode.GDstaticObjects4= [];
gdjs.gameoverCode.GDstaticObjects5= [];
gdjs.gameoverCode.GDstaticObjects6= [];


gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDquitObjects2Objects = Hashtable.newFrom({"quit": gdjs.gameoverCode.GDquitObjects2});
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects2Objects = Hashtable.newFrom({"retry": gdjs.gameoverCode.GDretryObjects2});
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDhomeObjects2Objects = Hashtable.newFrom({"home": gdjs.gameoverCode.GDhomeObjects2});
gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDquitObjects2Objects = Hashtable.newFrom({"quit": gdjs.gameoverCode.GDquitObjects2});
gdjs.gameoverCode.asyncCallback17010036 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17010036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
}
{ //Subevents
gdjs.gameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDhomeObjects2Objects = Hashtable.newFrom({"home": gdjs.gameoverCode.GDhomeObjects2});
gdjs.gameoverCode.asyncCallback17012876 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.gameoverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17012876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
}
{ //Subevents
gdjs.gameoverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects2Objects = Hashtable.newFrom({"retry": gdjs.gameoverCode.GDretryObjects2});
gdjs.gameoverCode.asyncCallback17014548 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prenotte", true);
}}
gdjs.gameoverCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17014548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
}
{ //Subevents
gdjs.gameoverCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects1Objects = Hashtable.newFrom({"retry": gdjs.gameoverCode.GDretryObjects1});
gdjs.gameoverCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("temp")) != 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "custom night", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("temp")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fredjump", true);
}}

}


};gdjs.gameoverCode.asyncCallback17016900 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
}
{ //Subevents
gdjs.gameoverCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameoverCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17016900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17016652);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("temp").setNumber(gdjs.randomInRange(1, 20));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
}
{ //Subevents
gdjs.gameoverCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.gameoverCode.GDquitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDquitObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17007652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.gameoverCode.GDretryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17008308);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.gameoverCode.GDhomeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDhomeObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17009484);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.gameoverCode.GDquitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDquitObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.gameoverCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.gameoverCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDmarkerObjects2[i].setPosition(2463,1400);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.gameoverCode.GDhomeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDhomeObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.gameoverCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.gameoverCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDmarkerObjects2[i].setPosition(2411,1120);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.gameoverCode.GDretryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != 7;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.gameoverCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.gameoverCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.gameoverCode.GDmarkerObjects2[i].setPosition(2365,863);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.gameoverCode.GDretryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_46gameoverCode_46GDretryObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 7;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.gameoverCode.GDmarkerObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDmarkerObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDmarkerObjects1[i].setPosition(2365,863);
}
}
{ //Subevents
gdjs.gameoverCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.gameoverCode.asyncCallback17020692 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeintro"), true);
}}
gdjs.gameoverCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17020692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.asyncCallback17020396 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.gameoverCode.GDhomeObjects5);
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.gameoverCode.GDmarkerObjects5);
gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.gameoverCode.GDquitObjects5);
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.gameoverCode.GDretryObjects5);
{for(var i = 0, len = gdjs.gameoverCode.GDretryObjects5.length ;i < len;++i) {
    gdjs.gameoverCode.GDretryObjects5[i].setOpacity(gdjs.gameoverCode.GDretryObjects5[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 450));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhomeObjects5.length ;i < len;++i) {
    gdjs.gameoverCode.GDhomeObjects5[i].setOpacity(gdjs.gameoverCode.GDhomeObjects5[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 450));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDquitObjects5.length ;i < len;++i) {
    gdjs.gameoverCode.GDquitObjects5[i].setOpacity(gdjs.gameoverCode.GDquitObjects5[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 450));
}
}{for(var i = 0, len = gdjs.gameoverCode.GDmarkerObjects5.length ;i < len;++i) {
    gdjs.gameoverCode.GDmarkerObjects5[i].setOpacity(gdjs.gameoverCode.GDmarkerObjects5[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 450));
}
}
{ //Subevents
gdjs.gameoverCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameoverCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17020396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.asyncCallback17020084 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("gmtxt"), gdjs.gameoverCode.GDgmtxtObjects4);
{for(var i = 0, len = gdjs.gameoverCode.GDgmtxtObjects4.length ;i < len;++i) {
    gdjs.gameoverCode.GDgmtxtObjects4[i].setOpacity(gdjs.gameoverCode.GDgmtxtObjects4[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 500));
}
}
{ //Subevents
gdjs.gameoverCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameoverCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17020084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.asyncCallback17019748 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("fader"), gdjs.gameoverCode.GDfaderObjects3);
{for(var i = 0, len = gdjs.gameoverCode.GDfaderObjects3.length ;i < len;++i) {
    gdjs.gameoverCode.GDfaderObjects3[i].setOpacity(gdjs.gameoverCode.GDfaderObjects3[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 600));
}
}
{ //Subevents
gdjs.gameoverCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameoverCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.gameoverCode.asyncCallback17019748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameoverCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fadeintro"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameoverCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fader"), gdjs.gameoverCode.GDfaderObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDfaderObjects1[i].setOpacity(gdjs.gameoverCode.GDfaderObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 600));
}
}}

}


};gdjs.gameoverCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17022868);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.gameoverCode.GDretryObjects1);
{for(var i = 0, len = gdjs.gameoverCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDretryObjects1[i].setString("Riconfigura notte");
}
}{for(var i = 0, len = gdjs.gameoverCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDretryObjects1[i].setX(gdjs.gameoverCode.GDretryObjects1[i].getX() - (15));
}
}}

}


};gdjs.gameoverCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmtxt"), gdjs.gameoverCode.GDgmtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("home"), gdjs.gameoverCode.GDhomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.gameoverCode.GDmarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.gameoverCode.GDquitObjects1);
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.gameoverCode.GDretryObjects1);
gdjs.copyArray(runtimeScene.getObjects("static"), gdjs.gameoverCode.GDstaticObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "fade");
}{for(var i = 0, len = gdjs.gameoverCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDretryObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDhomeObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDhomeObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDmarkerObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDmarkerObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDquitObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDquitObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDgmtxtObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDgmtxtObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.gameoverCode.GDstaticObjects1.length ;i < len;++i) {
    gdjs.gameoverCode.GDstaticObjects1[i].setOpacity(40);
}
}}

}


{


gdjs.gameoverCode.eventsList9(runtimeScene);
}


{


gdjs.gameoverCode.eventsList14(runtimeScene);
}


{


gdjs.gameoverCode.eventsList15(runtimeScene);
}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDgameoverObjects1.length = 0;
gdjs.gameoverCode.GDgameoverObjects2.length = 0;
gdjs.gameoverCode.GDgameoverObjects3.length = 0;
gdjs.gameoverCode.GDgameoverObjects4.length = 0;
gdjs.gameoverCode.GDgameoverObjects5.length = 0;
gdjs.gameoverCode.GDgameoverObjects6.length = 0;
gdjs.gameoverCode.GDgmtxtObjects1.length = 0;
gdjs.gameoverCode.GDgmtxtObjects2.length = 0;
gdjs.gameoverCode.GDgmtxtObjects3.length = 0;
gdjs.gameoverCode.GDgmtxtObjects4.length = 0;
gdjs.gameoverCode.GDgmtxtObjects5.length = 0;
gdjs.gameoverCode.GDgmtxtObjects6.length = 0;
gdjs.gameoverCode.GDquitObjects1.length = 0;
gdjs.gameoverCode.GDquitObjects2.length = 0;
gdjs.gameoverCode.GDquitObjects3.length = 0;
gdjs.gameoverCode.GDquitObjects4.length = 0;
gdjs.gameoverCode.GDquitObjects5.length = 0;
gdjs.gameoverCode.GDquitObjects6.length = 0;
gdjs.gameoverCode.GDretryObjects1.length = 0;
gdjs.gameoverCode.GDretryObjects2.length = 0;
gdjs.gameoverCode.GDretryObjects3.length = 0;
gdjs.gameoverCode.GDretryObjects4.length = 0;
gdjs.gameoverCode.GDretryObjects5.length = 0;
gdjs.gameoverCode.GDretryObjects6.length = 0;
gdjs.gameoverCode.GDhomeObjects1.length = 0;
gdjs.gameoverCode.GDhomeObjects2.length = 0;
gdjs.gameoverCode.GDhomeObjects3.length = 0;
gdjs.gameoverCode.GDhomeObjects4.length = 0;
gdjs.gameoverCode.GDhomeObjects5.length = 0;
gdjs.gameoverCode.GDhomeObjects6.length = 0;
gdjs.gameoverCode.GDmarkerObjects1.length = 0;
gdjs.gameoverCode.GDmarkerObjects2.length = 0;
gdjs.gameoverCode.GDmarkerObjects3.length = 0;
gdjs.gameoverCode.GDmarkerObjects4.length = 0;
gdjs.gameoverCode.GDmarkerObjects5.length = 0;
gdjs.gameoverCode.GDmarkerObjects6.length = 0;
gdjs.gameoverCode.GDfaderObjects1.length = 0;
gdjs.gameoverCode.GDfaderObjects2.length = 0;
gdjs.gameoverCode.GDfaderObjects3.length = 0;
gdjs.gameoverCode.GDfaderObjects4.length = 0;
gdjs.gameoverCode.GDfaderObjects5.length = 0;
gdjs.gameoverCode.GDfaderObjects6.length = 0;
gdjs.gameoverCode.GDstaticObjects1.length = 0;
gdjs.gameoverCode.GDstaticObjects2.length = 0;
gdjs.gameoverCode.GDstaticObjects3.length = 0;
gdjs.gameoverCode.GDstaticObjects4.length = 0;
gdjs.gameoverCode.GDstaticObjects5.length = 0;
gdjs.gameoverCode.GDstaticObjects6.length = 0;

gdjs.gameoverCode.eventsList16(runtimeScene);

return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
