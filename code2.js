gdjs.prenotteCode = {};
gdjs.prenotteCode.GDloadingObjects1= [];
gdjs.prenotteCode.GDloadingObjects2= [];
gdjs.prenotteCode.GDloadingObjects3= [];
gdjs.prenotteCode.GDloadingObjects4= [];
gdjs.prenotteCode.GDloadingObjects5= [];
gdjs.prenotteCode.GDloadingObjects6= [];
gdjs.prenotteCode.GDloadingObjects7= [];
gdjs.prenotteCode.GDbackgroundObjects1= [];
gdjs.prenotteCode.GDbackgroundObjects2= [];
gdjs.prenotteCode.GDbackgroundObjects3= [];
gdjs.prenotteCode.GDbackgroundObjects4= [];
gdjs.prenotteCode.GDbackgroundObjects5= [];
gdjs.prenotteCode.GDbackgroundObjects6= [];
gdjs.prenotteCode.GDbackgroundObjects7= [];
gdjs.prenotteCode.GDnotteObjects1= [];
gdjs.prenotteCode.GDnotteObjects2= [];
gdjs.prenotteCode.GDnotteObjects3= [];
gdjs.prenotteCode.GDnotteObjects4= [];
gdjs.prenotteCode.GDnotteObjects5= [];
gdjs.prenotteCode.GDnotteObjects6= [];
gdjs.prenotteCode.GDnotteObjects7= [];
gdjs.prenotteCode.GDfaderObjects1= [];
gdjs.prenotteCode.GDfaderObjects2= [];
gdjs.prenotteCode.GDfaderObjects3= [];
gdjs.prenotteCode.GDfaderObjects4= [];
gdjs.prenotteCode.GDfaderObjects5= [];
gdjs.prenotteCode.GDfaderObjects6= [];
gdjs.prenotteCode.GDfaderObjects7= [];
gdjs.prenotteCode.GDpre_95laggerObjects1= [];
gdjs.prenotteCode.GDpre_95laggerObjects2= [];
gdjs.prenotteCode.GDpre_95laggerObjects3= [];
gdjs.prenotteCode.GDpre_95laggerObjects4= [];
gdjs.prenotteCode.GDpre_95laggerObjects5= [];
gdjs.prenotteCode.GDpre_95laggerObjects6= [];
gdjs.prenotteCode.GDpre_95laggerObjects7= [];


gdjs.prenotteCode.asyncCallback16821756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.prenotteCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16821756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16821076 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16821076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16820228 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects5);

gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects5);
{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects5.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects5[i].setAnimationName("background");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects5.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects5[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects5.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects5[i].setAnimationName("static");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects5.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects5[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects5.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects5[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "1^ Notte");
}
}
{ //Subevents
gdjs.prenotteCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save background as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16820228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16819492 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.prenotteCode.GDbackgroundObjects3) asyncObjectsList.addObject("background", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16819492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16819340 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects3);

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobjin"), true);
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects3[i].setAnimationName("1");
}
}
{ //Subevents
gdjs.prenotteCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.prenotteCode.GDbackgroundObjects2) asyncObjectsList.addObject("background", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16819340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16823652 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.prenotteCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16823652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16822828 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16822828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16825484 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.prenotteCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16825484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16824948 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16824948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16827116 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.prenotteCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16827116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16826972 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16826972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16828852 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.prenotteCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16828852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16828708 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16828708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16830748 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}
gdjs.prenotteCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16830748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16830492 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16830492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16832756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.prenotteCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16832756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16832060 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night6", 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16832060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16834644 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.prenotteCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16834644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16833964 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night6bt", 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16833964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16835308 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.prenotteCode.eventsList19 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16835308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16836116 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16836116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16838868 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "night7bt", 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.prenotteCode.eventsList21 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16838868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16838308 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList21(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16838308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16841180 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.prenotteCode.eventsList23 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16841180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16840620 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), true);
}
{ //Subevents
gdjs.prenotteCode.eventsList23(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.prenotteCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16840620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setOpacity(0);
}
}
{ //Subevents
gdjs.prenotteCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "2^ Notte");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("static");
}
}
{ //Subevents
gdjs.prenotteCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "3^ Notte");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("static");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "4^ Notte");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("static");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "5^ Notte");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("static");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) == 6;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "6^ Notte");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("static");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("nigh5");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\End Of Night\\Children Cheer.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("night6");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\End Of Night\\Children Cheer.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) == 7;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].setString("12:00 A.M." + gdjs.evtTools.string.newLine() + "7^ Notte");
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("static");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\Camera Noises\\Camera Change.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 23;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 22;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 22;
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects2);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects2[i].setAnimationName("night7");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\End Of Night\\Children Cheer.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 23;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 22;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 22;
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects1);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects1[i].setAnimationName("night7");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FNAF 1 Organized - Copy\\Audio\\End Of Night\\Children Cheer.wav", false, 50, 1);
}
{ //Subevents
gdjs.prenotteCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.prenotteCode.asyncCallback16841820 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}}
gdjs.prenotteCode.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16841820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16842780 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), false);
}}
gdjs.prenotteCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16842780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.asyncCallback16843676 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobjin"), false);
}}
gdjs.prenotteCode.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.prenotteCode.asyncCallback16843676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.prenotteCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects1);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pre_lagger"), gdjs.prenotteCode.GDpre_95laggerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.prenotteCode.GDpre_95laggerObjects1.length;i<l;++i) {
    if ( gdjs.prenotteCode.GDpre_95laggerObjects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.prenotteCode.GDpre_95laggerObjects1[k] = gdjs.prenotteCode.GDpre_95laggerObjects1[i];
        ++k;
    }
}
gdjs.prenotteCode.GDpre_95laggerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10985324);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.prenotteCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.prenotteCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDloadingObjects1[i].hide();
}
}
{ //Subevents
gdjs.prenotteCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("notte"), gdjs.prenotteCode.GDnotteObjects1);
{for(var i = 0, len = gdjs.prenotteCode.GDnotteObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDnotteObjects1[i].setOpacity(gdjs.prenotteCode.GDnotteObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 400));
}
}
{ //Subevents
gdjs.prenotteCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobj"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects1[i].setOpacity(gdjs.prenotteCode.GDbackgroundObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 400));
}
}
{ //Subevents
gdjs.prenotteCode.eventsList27(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fadeobjin"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.prenotteCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.prenotteCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.prenotteCode.GDbackgroundObjects1[i].setOpacity(gdjs.prenotteCode.GDbackgroundObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 400));
}
}
{ //Subevents
gdjs.prenotteCode.eventsList28(runtimeScene);} //End of subevents
}

}


};

gdjs.prenotteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.prenotteCode.GDloadingObjects1.length = 0;
gdjs.prenotteCode.GDloadingObjects2.length = 0;
gdjs.prenotteCode.GDloadingObjects3.length = 0;
gdjs.prenotteCode.GDloadingObjects4.length = 0;
gdjs.prenotteCode.GDloadingObjects5.length = 0;
gdjs.prenotteCode.GDloadingObjects6.length = 0;
gdjs.prenotteCode.GDloadingObjects7.length = 0;
gdjs.prenotteCode.GDbackgroundObjects1.length = 0;
gdjs.prenotteCode.GDbackgroundObjects2.length = 0;
gdjs.prenotteCode.GDbackgroundObjects3.length = 0;
gdjs.prenotteCode.GDbackgroundObjects4.length = 0;
gdjs.prenotteCode.GDbackgroundObjects5.length = 0;
gdjs.prenotteCode.GDbackgroundObjects6.length = 0;
gdjs.prenotteCode.GDbackgroundObjects7.length = 0;
gdjs.prenotteCode.GDnotteObjects1.length = 0;
gdjs.prenotteCode.GDnotteObjects2.length = 0;
gdjs.prenotteCode.GDnotteObjects3.length = 0;
gdjs.prenotteCode.GDnotteObjects4.length = 0;
gdjs.prenotteCode.GDnotteObjects5.length = 0;
gdjs.prenotteCode.GDnotteObjects6.length = 0;
gdjs.prenotteCode.GDnotteObjects7.length = 0;
gdjs.prenotteCode.GDfaderObjects1.length = 0;
gdjs.prenotteCode.GDfaderObjects2.length = 0;
gdjs.prenotteCode.GDfaderObjects3.length = 0;
gdjs.prenotteCode.GDfaderObjects4.length = 0;
gdjs.prenotteCode.GDfaderObjects5.length = 0;
gdjs.prenotteCode.GDfaderObjects6.length = 0;
gdjs.prenotteCode.GDfaderObjects7.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects1.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects2.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects3.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects4.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects5.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects6.length = 0;
gdjs.prenotteCode.GDpre_95laggerObjects7.length = 0;

gdjs.prenotteCode.eventsList29(runtimeScene);

return;

}

gdjs['prenotteCode'] = gdjs.prenotteCode;
