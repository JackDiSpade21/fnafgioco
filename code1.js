gdjs.HomeCode = {};
gdjs.HomeCode.GDlogoObjects1= [];
gdjs.HomeCode.GDlogoObjects2= [];
gdjs.HomeCode.GDlogoObjects3= [];
gdjs.HomeCode.GDlogoObjects4= [];
gdjs.HomeCode.GDstaticObjects1= [];
gdjs.HomeCode.GDstaticObjects2= [];
gdjs.HomeCode.GDstaticObjects3= [];
gdjs.HomeCode.GDstaticObjects4= [];
gdjs.HomeCode.GDscanlinesObjects1= [];
gdjs.HomeCode.GDscanlinesObjects2= [];
gdjs.HomeCode.GDscanlinesObjects3= [];
gdjs.HomeCode.GDscanlinesObjects4= [];
gdjs.HomeCode.GDsingolaObjects1= [];
gdjs.HomeCode.GDsingolaObjects2= [];
gdjs.HomeCode.GDsingolaObjects3= [];
gdjs.HomeCode.GDsingolaObjects4= [];
gdjs.HomeCode.GDwarn2Objects1= [];
gdjs.HomeCode.GDwarn2Objects2= [];
gdjs.HomeCode.GDwarn2Objects3= [];
gdjs.HomeCode.GDwarn2Objects4= [];
gdjs.HomeCode.GDwarningObjects1= [];
gdjs.HomeCode.GDwarningObjects2= [];
gdjs.HomeCode.GDwarningObjects3= [];
gdjs.HomeCode.GDwarningObjects4= [];
gdjs.HomeCode.GDdisclaimerObjects1= [];
gdjs.HomeCode.GDdisclaimerObjects2= [];
gdjs.HomeCode.GDdisclaimerObjects3= [];
gdjs.HomeCode.GDdisclaimerObjects4= [];
gdjs.HomeCode.GDtitleObjects1= [];
gdjs.HomeCode.GDtitleObjects2= [];
gdjs.HomeCode.GDtitleObjects3= [];
gdjs.HomeCode.GDtitleObjects4= [];
gdjs.HomeCode.GDversionObjects1= [];
gdjs.HomeCode.GDversionObjects2= [];
gdjs.HomeCode.GDversionObjects3= [];
gdjs.HomeCode.GDversionObjects4= [];
gdjs.HomeCode.GDoptionsObjects1= [];
gdjs.HomeCode.GDoptionsObjects2= [];
gdjs.HomeCode.GDoptionsObjects3= [];
gdjs.HomeCode.GDoptionsObjects4= [];
gdjs.HomeCode.GDnewObjects1= [];
gdjs.HomeCode.GDnewObjects2= [];
gdjs.HomeCode.GDnewObjects3= [];
gdjs.HomeCode.GDnewObjects4= [];
gdjs.HomeCode.GDcontObjects1= [];
gdjs.HomeCode.GDcontObjects2= [];
gdjs.HomeCode.GDcontObjects3= [];
gdjs.HomeCode.GDcontObjects4= [];
gdjs.HomeCode.GDnight6Objects1= [];
gdjs.HomeCode.GDnight6Objects2= [];
gdjs.HomeCode.GDnight6Objects3= [];
gdjs.HomeCode.GDnight6Objects4= [];
gdjs.HomeCode.GDcustomObjects1= [];
gdjs.HomeCode.GDcustomObjects2= [];
gdjs.HomeCode.GDcustomObjects3= [];
gdjs.HomeCode.GDcustomObjects4= [];
gdjs.HomeCode.GDmarkerObjects1= [];
gdjs.HomeCode.GDmarkerObjects2= [];
gdjs.HomeCode.GDmarkerObjects3= [];
gdjs.HomeCode.GDmarkerObjects4= [];
gdjs.HomeCode.GDnightnmbObjects1= [];
gdjs.HomeCode.GDnightnmbObjects2= [];
gdjs.HomeCode.GDnightnmbObjects3= [];
gdjs.HomeCode.GDnightnmbObjects4= [];
gdjs.HomeCode.GDdeleteallObjects1= [];
gdjs.HomeCode.GDdeleteallObjects2= [];
gdjs.HomeCode.GDdeleteallObjects3= [];
gdjs.HomeCode.GDdeleteallObjects4= [];
gdjs.HomeCode.GDstar1Objects1= [];
gdjs.HomeCode.GDstar1Objects2= [];
gdjs.HomeCode.GDstar1Objects3= [];
gdjs.HomeCode.GDstar1Objects4= [];
gdjs.HomeCode.GDstar2Objects1= [];
gdjs.HomeCode.GDstar2Objects2= [];
gdjs.HomeCode.GDstar2Objects3= [];
gdjs.HomeCode.GDstar2Objects4= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(5);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night", 5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}}

}


};gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night", 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "night", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.HomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night6"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16753996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("night6"), gdjs.HomeCode.GDnight6Objects2);
gdjs.copyArray(runtimeScene.getObjects("star1"), gdjs.HomeCode.GDstar1Objects2);
{for(var i = 0, len = gdjs.HomeCode.GDnight6Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDnight6Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.HomeCode.GDstar1Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDstar1Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night6");
if (isConditionTrue_0) {
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night6bt"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16755508);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("custom"), gdjs.HomeCode.GDcustomObjects2);
gdjs.copyArray(runtimeScene.getObjects("star2"), gdjs.HomeCode.GDstar2Objects2);
{for(var i = 0, len = gdjs.HomeCode.GDcustomObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDcustomObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.HomeCode.GDstar2Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDstar2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night6bt");
if (isConditionTrue_0) {
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night7"));
if (isConditionTrue_0) {
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night7bt"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("deleteall"), gdjs.HomeCode.GDdeleteallObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDdeleteallObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDdeleteallObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "night7bt");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16758228);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("deleteall"), gdjs.HomeCode.GDdeleteallObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDdeleteallObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDdeleteallObjects2[i].setAnimationName("special");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "sens");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "sens", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7));
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "voci");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "voci", runtimeScene, runtimeScene.getScene().getVariables().get("local_voice"));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("local_voice")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "volume");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "volume", runtimeScene, runtimeScene.getScene().getVariables().get("local_vol"));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("local_vol")));
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("local_vol")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "radar");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "radar", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "power");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "power", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "fullscreen");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "fullscreen", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "fps");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "fps", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "debug");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "debug", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
}}

}


};gdjs.HomeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}
{ //Subevents
gdjs.HomeCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.HomeCode.asyncCallback16774876 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Title Music.wav", 1, true, 45, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\GameOverStatic (2).wav", 1, false, 25, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}
{ //Subevents
gdjs.HomeCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.HomeCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.HomeCode.asyncCallback16774876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDwarningObjects2Objects = Hashtable.newFrom({"warning": gdjs.HomeCode.GDwarningObjects2});
gdjs.HomeCode.asyncCallback16778036 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("warn2"), gdjs.HomeCode.GDwarn2Objects3);
{for(var i = 0, len = gdjs.HomeCode.GDwarn2Objects3.length ;i < len;++i) {
    gdjs.HomeCode.GDwarn2Objects3[i].setOpacity(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeintro"), true);
}}
gdjs.HomeCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16778036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.asyncCallback16777436 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("warning"), gdjs.HomeCode.GDwarningObjects2);
{gdjs.evtsExt__fade__FadeOutTEXT.func(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDwarningObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.HomeCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.HomeCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16777436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.HomeCode.GDlogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("scanlines"), gdjs.HomeCode.GDscanlinesObjects2);
gdjs.copyArray(runtimeScene.getObjects("singola"), gdjs.HomeCode.GDsingolaObjects2);
gdjs.copyArray(runtimeScene.getObjects("static"), gdjs.HomeCode.GDstaticObjects2);
gdjs.copyArray(runtimeScene.getObjects("version"), gdjs.HomeCode.GDversionObjects2);
gdjs.copyArray(runtimeScene.getObjects("warning"), gdjs.HomeCode.GDwarningObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDstaticObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDstaticObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.HomeCode.GDsingolaObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDsingolaObjects2[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.HomeCode.GDscanlinesObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDscanlinesObjects2[i].setOpacity(80);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scanlines");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "freddy");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scurimento");
}{for(var i = 0, len = gdjs.HomeCode.GDsingolaObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDsingolaObjects2[i].addForce(0, 60, 1);
}
}{for(var i = 0, len = gdjs.HomeCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDlogoObjects2[i].setEffectBooleanParameter("Effect", "gamma", false);
}
}{for(var i = 0, len = gdjs.HomeCode.GDwarningObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDwarningObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.HomeCode.GDversionObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDversionObjects2[i].setString("V. " + gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.HomeCode.GDwarningObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDwarningObjects2[i].setOpacity(gdjs.HomeCode.GDwarningObjects2[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}
}
{ //Subevents
gdjs.HomeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("nightnmb"), gdjs.HomeCode.GDnightnmbObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDnightnmbObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDnightnmbObjects2[i].setString("Notte " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fadeintro"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scanlines") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scanlines"), gdjs.HomeCode.GDscanlinesObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scanlines");
}{for(var i = 0, len = gdjs.HomeCode.GDscanlinesObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDscanlinesObjects2[i].setAnimationFrame(gdjs.randomInRange(0, 4));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(2, 4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "freddy") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.HomeCode.GDlogoObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "freddy");
}{for(var i = 0, len = gdjs.HomeCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDlogoObjects2[i].setAnimationFrame(gdjs.randomInRange(0, 3));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scurimento") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.HomeCode.GDlogoObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDlogoObjects2[i].setEffectDoubleParameter("Effect", "gamma", 0.5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scurimento") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.HomeCode.GDlogoObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDlogoObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scurimento");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("singola"), gdjs.HomeCode.GDsingolaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDsingolaObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDsingolaObjects1[i].getY() >= 720 ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDsingolaObjects1[k] = gdjs.HomeCode.GDsingolaObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDsingolaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HomeCode.GDsingolaObjects1 */
{for(var i = 0, len = gdjs.HomeCode.GDsingolaObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDsingolaObjects1[i].setY(-(40));
}
}}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnewObjects2Objects = Hashtable.newFrom({"new": gdjs.HomeCode.GDnewObjects2});
gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcontObjects2Objects = Hashtable.newFrom({"cont": gdjs.HomeCode.GDcontObjects2});
gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcustomObjects2Objects = Hashtable.newFrom({"custom": gdjs.HomeCode.GDcustomObjects2});
gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnight6Objects2Objects = Hashtable.newFrom({"night6": gdjs.HomeCode.GDnight6Objects2});
gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnewObjects2Objects = Hashtable.newFrom({"new": gdjs.HomeCode.GDnewObjects2});
gdjs.HomeCode.asyncCallback16788508 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prenotte", true);
}}
gdjs.HomeCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16788508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night", 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}
{ //Subevents
gdjs.HomeCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcontObjects2Objects = Hashtable.newFrom({"cont": gdjs.HomeCode.GDcontObjects2});
gdjs.HomeCode.asyncCallback16789956 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prenotte", true);
}}
gdjs.HomeCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16789956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}
{ //Subevents
gdjs.HomeCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnight6Objects2Objects = Hashtable.newFrom({"night6": gdjs.HomeCode.GDnight6Objects2});
gdjs.HomeCode.asyncCallback16791732 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prenotte", true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(6);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(6);
}}
gdjs.HomeCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16791732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}
{ //Subevents
gdjs.HomeCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcustomObjects2Objects = Hashtable.newFrom({"custom": gdjs.HomeCode.GDcustomObjects2});
gdjs.HomeCode.asyncCallback16793964 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "custom night", true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(7);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(7);
}}
gdjs.HomeCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16793964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}
{ //Subevents
gdjs.HomeCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDoptionsObjects1Objects = Hashtable.newFrom({"options": gdjs.HomeCode.GDoptionsObjects1});
gdjs.HomeCode.asyncCallback16795764 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "opzioni", true);
}}
gdjs.HomeCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.HomeCode.asyncCallback16795764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("new"), gdjs.HomeCode.GDnewObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnewObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16783556);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cont"), gdjs.HomeCode.GDcontObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcontObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16784212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("custom"), gdjs.HomeCode.GDcustomObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcustomObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16785388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("night6"), gdjs.HomeCode.GDnight6Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnight6Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16786468);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("new"), gdjs.HomeCode.GDnewObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnewObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.HomeCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDmarkerObjects2[i].setY(1139);
}
}
{ //Subevents
gdjs.HomeCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cont"), gdjs.HomeCode.GDcontObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcontObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.HomeCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDmarkerObjects2[i].setY(1312);
}
}
{ //Subevents
gdjs.HomeCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("night6"), gdjs.HomeCode.GDnight6Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDnight6Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.HomeCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDmarkerObjects2[i].setY(1551);
}
}
{ //Subevents
gdjs.HomeCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("custom"), gdjs.HomeCode.GDcustomObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDcustomObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("marker"), gdjs.HomeCode.GDmarkerObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDmarkerObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDmarkerObjects2[i].setY(1721);
}
}
{ //Subevents
gdjs.HomeCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("options"), gdjs.HomeCode.GDoptionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.HomeCode.mapOfGDgdjs_46HomeCode_46GDoptionsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16795540);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}
{ //Subevents
gdjs.HomeCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.eventsList19 = function(runtimeScene) {

{


gdjs.HomeCode.eventsList2(runtimeScene);
}


{


gdjs.HomeCode.eventsList7(runtimeScene);
}


{


gdjs.HomeCode.eventsList8(runtimeScene);
}


{


gdjs.HomeCode.eventsList18(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("warn2"), gdjs.HomeCode.GDwarn2Objects1);
{for(var i = 0, len = gdjs.HomeCode.GDwarn2Objects1.length ;i < len;++i) {
    gdjs.HomeCode.GDwarn2Objects1[i].setOpacity(gdjs.HomeCode.GDwarn2Objects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 500));
}
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDlogoObjects1.length = 0;
gdjs.HomeCode.GDlogoObjects2.length = 0;
gdjs.HomeCode.GDlogoObjects3.length = 0;
gdjs.HomeCode.GDlogoObjects4.length = 0;
gdjs.HomeCode.GDstaticObjects1.length = 0;
gdjs.HomeCode.GDstaticObjects2.length = 0;
gdjs.HomeCode.GDstaticObjects3.length = 0;
gdjs.HomeCode.GDstaticObjects4.length = 0;
gdjs.HomeCode.GDscanlinesObjects1.length = 0;
gdjs.HomeCode.GDscanlinesObjects2.length = 0;
gdjs.HomeCode.GDscanlinesObjects3.length = 0;
gdjs.HomeCode.GDscanlinesObjects4.length = 0;
gdjs.HomeCode.GDsingolaObjects1.length = 0;
gdjs.HomeCode.GDsingolaObjects2.length = 0;
gdjs.HomeCode.GDsingolaObjects3.length = 0;
gdjs.HomeCode.GDsingolaObjects4.length = 0;
gdjs.HomeCode.GDwarn2Objects1.length = 0;
gdjs.HomeCode.GDwarn2Objects2.length = 0;
gdjs.HomeCode.GDwarn2Objects3.length = 0;
gdjs.HomeCode.GDwarn2Objects4.length = 0;
gdjs.HomeCode.GDwarningObjects1.length = 0;
gdjs.HomeCode.GDwarningObjects2.length = 0;
gdjs.HomeCode.GDwarningObjects3.length = 0;
gdjs.HomeCode.GDwarningObjects4.length = 0;
gdjs.HomeCode.GDdisclaimerObjects1.length = 0;
gdjs.HomeCode.GDdisclaimerObjects2.length = 0;
gdjs.HomeCode.GDdisclaimerObjects3.length = 0;
gdjs.HomeCode.GDdisclaimerObjects4.length = 0;
gdjs.HomeCode.GDtitleObjects1.length = 0;
gdjs.HomeCode.GDtitleObjects2.length = 0;
gdjs.HomeCode.GDtitleObjects3.length = 0;
gdjs.HomeCode.GDtitleObjects4.length = 0;
gdjs.HomeCode.GDversionObjects1.length = 0;
gdjs.HomeCode.GDversionObjects2.length = 0;
gdjs.HomeCode.GDversionObjects3.length = 0;
gdjs.HomeCode.GDversionObjects4.length = 0;
gdjs.HomeCode.GDoptionsObjects1.length = 0;
gdjs.HomeCode.GDoptionsObjects2.length = 0;
gdjs.HomeCode.GDoptionsObjects3.length = 0;
gdjs.HomeCode.GDoptionsObjects4.length = 0;
gdjs.HomeCode.GDnewObjects1.length = 0;
gdjs.HomeCode.GDnewObjects2.length = 0;
gdjs.HomeCode.GDnewObjects3.length = 0;
gdjs.HomeCode.GDnewObjects4.length = 0;
gdjs.HomeCode.GDcontObjects1.length = 0;
gdjs.HomeCode.GDcontObjects2.length = 0;
gdjs.HomeCode.GDcontObjects3.length = 0;
gdjs.HomeCode.GDcontObjects4.length = 0;
gdjs.HomeCode.GDnight6Objects1.length = 0;
gdjs.HomeCode.GDnight6Objects2.length = 0;
gdjs.HomeCode.GDnight6Objects3.length = 0;
gdjs.HomeCode.GDnight6Objects4.length = 0;
gdjs.HomeCode.GDcustomObjects1.length = 0;
gdjs.HomeCode.GDcustomObjects2.length = 0;
gdjs.HomeCode.GDcustomObjects3.length = 0;
gdjs.HomeCode.GDcustomObjects4.length = 0;
gdjs.HomeCode.GDmarkerObjects1.length = 0;
gdjs.HomeCode.GDmarkerObjects2.length = 0;
gdjs.HomeCode.GDmarkerObjects3.length = 0;
gdjs.HomeCode.GDmarkerObjects4.length = 0;
gdjs.HomeCode.GDnightnmbObjects1.length = 0;
gdjs.HomeCode.GDnightnmbObjects2.length = 0;
gdjs.HomeCode.GDnightnmbObjects3.length = 0;
gdjs.HomeCode.GDnightnmbObjects4.length = 0;
gdjs.HomeCode.GDdeleteallObjects1.length = 0;
gdjs.HomeCode.GDdeleteallObjects2.length = 0;
gdjs.HomeCode.GDdeleteallObjects3.length = 0;
gdjs.HomeCode.GDdeleteallObjects4.length = 0;
gdjs.HomeCode.GDstar1Objects1.length = 0;
gdjs.HomeCode.GDstar1Objects2.length = 0;
gdjs.HomeCode.GDstar1Objects3.length = 0;
gdjs.HomeCode.GDstar1Objects4.length = 0;
gdjs.HomeCode.GDstar2Objects1.length = 0;
gdjs.HomeCode.GDstar2Objects2.length = 0;
gdjs.HomeCode.GDstar2Objects3.length = 0;
gdjs.HomeCode.GDstar2Objects4.length = 0;

gdjs.HomeCode.eventsList19(runtimeScene);

return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
