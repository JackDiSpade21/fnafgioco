gdjs.endultiCode = {};
gdjs.endultiCode.GDundertaleObjects1= [];
gdjs.endultiCode.GDundertaleObjects2= [];
gdjs.endultiCode.GDundertaleObjects3= [];
gdjs.endultiCode.GDsansObjects1= [];
gdjs.endultiCode.GDsansObjects2= [];
gdjs.endultiCode.GDsansObjects3= [];
gdjs.endultiCode.GDNewTextObjects1= [];
gdjs.endultiCode.GDNewTextObjects2= [];
gdjs.endultiCode.GDNewTextObjects3= [];
gdjs.endultiCode.GDcongratsObjects1= [];
gdjs.endultiCode.GDcongratsObjects2= [];
gdjs.endultiCode.GDcongratsObjects3= [];
gdjs.endultiCode.GDginoObjects1= [];
gdjs.endultiCode.GDginoObjects2= [];
gdjs.endultiCode.GDginoObjects3= [];
gdjs.endultiCode.GDfightObjects1= [];
gdjs.endultiCode.GDfightObjects2= [];
gdjs.endultiCode.GDfightObjects3= [];
gdjs.endultiCode.GDblackboxObjects1= [];
gdjs.endultiCode.GDblackboxObjects2= [];
gdjs.endultiCode.GDblackboxObjects3= [];
gdjs.endultiCode.GDnerdObjects1= [];
gdjs.endultiCode.GDnerdObjects2= [];
gdjs.endultiCode.GDnerdObjects3= [];
gdjs.endultiCode.GDsans2Objects1= [];
gdjs.endultiCode.GDsans2Objects2= [];
gdjs.endultiCode.GDsans2Objects3= [];
gdjs.endultiCode.GDsans3Objects1= [];
gdjs.endultiCode.GDsans3Objects2= [];
gdjs.endultiCode.GDsans3Objects3= [];

gdjs.endultiCode.conditionTrue_0 = {val:false};
gdjs.endultiCode.condition0IsTrue_0 = {val:false};
gdjs.endultiCode.condition1IsTrue_0 = {val:false};
gdjs.endultiCode.condition2IsTrue_0 = {val:false};
gdjs.endultiCode.condition3IsTrue_0 = {val:false};
gdjs.endultiCode.conditionTrue_1 = {val:false};
gdjs.endultiCode.condition0IsTrue_1 = {val:false};
gdjs.endultiCode.condition1IsTrue_1 = {val:false};
gdjs.endultiCode.condition2IsTrue_1 = {val:false};
gdjs.endultiCode.condition3IsTrue_1 = {val:false};


gdjs.endultiCode.asyncCallback11882220 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("gino"), gdjs.endultiCode.GDginoObjects2);
{for(var i = 0, len = gdjs.endultiCode.GDginoObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDginoObjects2[i].addForce(-(100), 0, 1);
}
}}
gdjs.endultiCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.endultiCode.asyncCallback11882220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11851852 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("nerd"), gdjs.endultiCode.GDnerdObjects2);
gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects2);
{for(var i = 0, len = gdjs.endultiCode.GDundertaleObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDundertaleObjects2[i].setAnimationName("1");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "1.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.endultiCode.GDnerdObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDnerdObjects2[i].setOpacity(255);
}
}}
gdjs.endultiCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.endultiCode.asyncCallback11851852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11874732 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects2);

{for(var i = 0, len = gdjs.endultiCode.GDundertaleObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDundertaleObjects2[i].setAnimationName("2");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2.wav", false, 100, 1);
}}
gdjs.endultiCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.endultiCode.GDundertaleObjects1) asyncObjectsList.addObject("undertale", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.endultiCode.asyncCallback11874732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11081812 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("toggle"), true);
}}
gdjs.endultiCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.endultiCode.asyncCallback11081812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11853308 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects2);

{for(var i = 0, len = gdjs.endultiCode.GDundertaleObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDundertaleObjects2[i].setAnimationName("3");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "3.wav", false, 100, 1);
}
{ //Subevents
gdjs.endultiCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.endultiCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.endultiCode.GDundertaleObjects1) asyncObjectsList.addObject("undertale", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.endultiCode.asyncCallback11853308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11859340 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.endultiCode.GDsansObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects2);

{for(var i = 0, len = gdjs.endultiCode.GDsansObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDsansObjects2[i].setAnimationName("occhio");
}
}{for(var i = 0, len = gdjs.endultiCode.GDundertaleObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDundertaleObjects2[i].setAnimationName("4");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "4.wav", false, 100, 1);
}}
gdjs.endultiCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.endultiCode.GDundertaleObjects1) asyncObjectsList.addObject("undertale", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.endultiCode.asyncCallback11859340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11849772 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("sans3"), gdjs.endultiCode.GDsans3Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects2);

{gdjs.evtTools.camera.hideLayer(runtimeScene, "fight");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.endultiCode.GDundertaleObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDundertaleObjects2[i].setAnimationName("5");
}
}{for(var i = 0, len = gdjs.endultiCode.GDsans3Objects2.length ;i < len;++i) {
    gdjs.endultiCode.GDsans3Objects2[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "5.wav", false, 100, 1);
}}
gdjs.endultiCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.endultiCode.GDundertaleObjects1) asyncObjectsList.addObject("undertale", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(9), (runtimeScene) => (gdjs.endultiCode.asyncCallback11849772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11561324 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("sans2"), gdjs.endultiCode.GDsans2Objects2);
gdjs.copyArray(runtimeScene.getObjects("sans3"), gdjs.endultiCode.GDsans3Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects2);

{for(var i = 0, len = gdjs.endultiCode.GDsans3Objects2.length ;i < len;++i) {
    gdjs.endultiCode.GDsans3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.endultiCode.GDsans2Objects2.length ;i < len;++i) {
    gdjs.endultiCode.GDsans2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.endultiCode.GDundertaleObjects2.length ;i < len;++i) {
    gdjs.endultiCode.GDundertaleObjects2[i].setAnimationName("6");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "6.wav", false, 100, 1);
}}
gdjs.endultiCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.endultiCode.GDundertaleObjects1) asyncObjectsList.addObject("undertale", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.endultiCode.asyncCallback11561324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.asyncCallback11875772 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}
gdjs.endultiCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.endultiCode.asyncCallback11875772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endultiCode.eventsList9 = function(runtimeScene) {

{


gdjs.endultiCode.condition0IsTrue_0.val = false;
{
gdjs.endultiCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.endultiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nerd"), gdjs.endultiCode.GDnerdObjects1);
gdjs.copyArray(runtimeScene.getObjects("sans2"), gdjs.endultiCode.GDsans2Objects1);
gdjs.copyArray(runtimeScene.getObjects("sans3"), gdjs.endultiCode.GDsans3Objects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("toggle"), false);
}{for(var i = 0, len = gdjs.endultiCode.GDnerdObjects1.length ;i < len;++i) {
    gdjs.endultiCode.GDnerdObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.endultiCode.GDsans2Objects1.length ;i < len;++i) {
    gdjs.endultiCode.GDsans2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.endultiCode.GDsans3Objects1.length ;i < len;++i) {
    gdjs.endultiCode.GDsans3Objects1[i].hide();
}
}
{ //Subevents
gdjs.endultiCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("gino"), gdjs.endultiCode.GDginoObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDginoObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDginoObjects1[i].getX() <= 38 ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDginoObjects1[k] = gdjs.endultiCode.GDginoObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDginoObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition1IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11877436);
}
}}
if (gdjs.endultiCode.condition1IsTrue_0.val) {
/* Reuse gdjs.endultiCode.GDginoObjects1 */
{for(var i = 0, len = gdjs.endultiCode.GDginoObjects1.length ;i < len;++i) {
    gdjs.endultiCode.GDginoObjects1[i].clearForces();
}
}
{ //Subevents
gdjs.endultiCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
gdjs.endultiCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].isCurrentAnimationName("1") ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].hasAnimationEnded2() ) {
        gdjs.endultiCode.condition1IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition1IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition2IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11176180);
}
}}
}
if (gdjs.endultiCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.endultiCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
gdjs.endultiCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].isCurrentAnimationName("2") ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].hasAnimationEnded2() ) {
        gdjs.endultiCode.condition1IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition1IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition2IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11460132);
}
}}
}
if (gdjs.endultiCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.endultiCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
gdjs.endultiCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].isCurrentAnimationName("3") ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].hasAnimationEnded2() ) {
        gdjs.endultiCode.condition1IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition1IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition2IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11173356);
}
}}
}
if (gdjs.endultiCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.endultiCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
gdjs.endultiCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].isCurrentAnimationName("4") ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].hasAnimationEnded2() ) {
        gdjs.endultiCode.condition1IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition1IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition2IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11454780);
}
}}
}
if (gdjs.endultiCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fight"), gdjs.endultiCode.GDfightObjects1);
gdjs.copyArray(runtimeScene.getObjects("sans"), gdjs.endultiCode.GDsansObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "pic");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "fight");
}{for(var i = 0, len = gdjs.endultiCode.GDfightObjects1.length ;i < len;++i) {
    gdjs.endultiCode.GDfightObjects1[i].setAnimationName("fight");
}
}{for(var i = 0, len = gdjs.endultiCode.GDfightObjects1.length ;i < len;++i) {
    gdjs.endultiCode.GDfightObjects1[i].setSize(939, 703);
}
}{for(var i = 0, len = gdjs.endultiCode.GDsansObjects1.length ;i < len;++i) {
    gdjs.endultiCode.GDsansObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ost.wav", 2, false, 100, 1);
}
{ //Subevents
gdjs.endultiCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
gdjs.endultiCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].isCurrentAnimationName("5") ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].hasAnimationEnded2() ) {
        gdjs.endultiCode.condition1IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition1IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition2IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11480940);
}
}}
}
if (gdjs.endultiCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.endultiCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("undertale"), gdjs.endultiCode.GDundertaleObjects1);

gdjs.endultiCode.condition0IsTrue_0.val = false;
gdjs.endultiCode.condition1IsTrue_0.val = false;
gdjs.endultiCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].isCurrentAnimationName("6") ) {
        gdjs.endultiCode.condition0IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.endultiCode.GDundertaleObjects1.length;i<l;++i) {
    if ( gdjs.endultiCode.GDundertaleObjects1[i].hasAnimationEnded2() ) {
        gdjs.endultiCode.condition1IsTrue_0.val = true;
        gdjs.endultiCode.GDundertaleObjects1[k] = gdjs.endultiCode.GDundertaleObjects1[i];
        ++k;
    }
}
gdjs.endultiCode.GDundertaleObjects1.length = k;}if ( gdjs.endultiCode.condition1IsTrue_0.val ) {
{
{gdjs.endultiCode.conditionTrue_1 = gdjs.endultiCode.condition2IsTrue_0;
gdjs.endultiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11557988);
}
}}
}
if (gdjs.endultiCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.endultiCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.endultiCode.condition0IsTrue_0.val = false;
{
gdjs.endultiCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("toggle"), true);
}if (gdjs.endultiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gino"), gdjs.endultiCode.GDginoObjects1);
{for(var i = 0, len = gdjs.endultiCode.GDginoObjects1.length ;i < len;++i) {
    gdjs.endultiCode.GDginoObjects1[i].setOpacity(gdjs.endultiCode.GDginoObjects1[i].getOpacity() - (1));
}
}}

}


};

gdjs.endultiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endultiCode.GDundertaleObjects1.length = 0;
gdjs.endultiCode.GDundertaleObjects2.length = 0;
gdjs.endultiCode.GDundertaleObjects3.length = 0;
gdjs.endultiCode.GDsansObjects1.length = 0;
gdjs.endultiCode.GDsansObjects2.length = 0;
gdjs.endultiCode.GDsansObjects3.length = 0;
gdjs.endultiCode.GDNewTextObjects1.length = 0;
gdjs.endultiCode.GDNewTextObjects2.length = 0;
gdjs.endultiCode.GDNewTextObjects3.length = 0;
gdjs.endultiCode.GDcongratsObjects1.length = 0;
gdjs.endultiCode.GDcongratsObjects2.length = 0;
gdjs.endultiCode.GDcongratsObjects3.length = 0;
gdjs.endultiCode.GDginoObjects1.length = 0;
gdjs.endultiCode.GDginoObjects2.length = 0;
gdjs.endultiCode.GDginoObjects3.length = 0;
gdjs.endultiCode.GDfightObjects1.length = 0;
gdjs.endultiCode.GDfightObjects2.length = 0;
gdjs.endultiCode.GDfightObjects3.length = 0;
gdjs.endultiCode.GDblackboxObjects1.length = 0;
gdjs.endultiCode.GDblackboxObjects2.length = 0;
gdjs.endultiCode.GDblackboxObjects3.length = 0;
gdjs.endultiCode.GDnerdObjects1.length = 0;
gdjs.endultiCode.GDnerdObjects2.length = 0;
gdjs.endultiCode.GDnerdObjects3.length = 0;
gdjs.endultiCode.GDsans2Objects1.length = 0;
gdjs.endultiCode.GDsans2Objects2.length = 0;
gdjs.endultiCode.GDsans2Objects3.length = 0;
gdjs.endultiCode.GDsans3Objects1.length = 0;
gdjs.endultiCode.GDsans3Objects2.length = 0;
gdjs.endultiCode.GDsans3Objects3.length = 0;

gdjs.endultiCode.eventsList9(runtimeScene);

return;

}

gdjs['endultiCode'] = gdjs.endultiCode;
