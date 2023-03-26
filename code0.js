gdjs.GameCode = {};
gdjs.GameCode.GDbackgroundObjects2_1final = [];

gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];
gdjs.GameCode.GDbackgroundObjects3= [];
gdjs.GameCode.GDbackgroundObjects4= [];
gdjs.GameCode.GDtriggerObjects1= [];
gdjs.GameCode.GDtriggerObjects2= [];
gdjs.GameCode.GDtriggerObjects3= [];
gdjs.GameCode.GDtriggerObjects4= [];
gdjs.GameCode.GDbutton_95sxObjects1= [];
gdjs.GameCode.GDbutton_95sxObjects2= [];
gdjs.GameCode.GDbutton_95sxObjects3= [];
gdjs.GameCode.GDbutton_95sxObjects4= [];
gdjs.GameCode.GDbutton_95dxObjects1= [];
gdjs.GameCode.GDbutton_95dxObjects2= [];
gdjs.GameCode.GDbutton_95dxObjects3= [];
gdjs.GameCode.GDbutton_95dxObjects4= [];
gdjs.GameCode.GDfanObjects1= [];
gdjs.GameCode.GDfanObjects2= [];
gdjs.GameCode.GDfanObjects3= [];
gdjs.GameCode.GDfanObjects4= [];
gdjs.GameCode.GDStaticObjects1= [];
gdjs.GameCode.GDStaticObjects2= [];
gdjs.GameCode.GDStaticObjects3= [];
gdjs.GameCode.GDStaticObjects4= [];
gdjs.GameCode.GDDoor_95SXObjects1= [];
gdjs.GameCode.GDDoor_95SXObjects2= [];
gdjs.GameCode.GDDoor_95SXObjects3= [];
gdjs.GameCode.GDDoor_95SXObjects4= [];
gdjs.GameCode.GDDoor_95DXObjects1= [];
gdjs.GameCode.GDDoor_95DXObjects2= [];
gdjs.GameCode.GDDoor_95DXObjects3= [];
gdjs.GameCode.GDDoor_95DXObjects4= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewSpriteObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8998836);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects2);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);
gdjs.copyArray(runtimeScene.getObjects("fan"), gdjs.GameCode.GDfanObjects2);
{for(var i = 0, len = gdjs.GameCode.GDfanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfanObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects2[i].setAnimationName("jump_bonnie");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9000244);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects2);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);
gdjs.copyArray(runtimeScene.getObjects("fan"), gdjs.GameCode.GDfanObjects2);
{for(var i = 0, len = gdjs.GameCode.GDfanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfanObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects2[i].setAnimationName("jump_chica");
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9001692);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects2);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);
gdjs.copyArray(runtimeScene.getObjects("fan"), gdjs.GameCode.GDfanObjects2);
{for(var i = 0, len = gdjs.GameCode.GDfanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDfanObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects2[i].setAnimationName("jump_freddy");
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9003140);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects1);
gdjs.copyArray(runtimeScene.getObjects("fan"), gdjs.GameCode.GDfanObjects1);
{for(var i = 0, len = gdjs.GameCode.GDfanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDfanObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects1[i].setAnimationName("jump_roxy");
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects1Objects = Hashtable.newFrom({"trigger": gdjs.GameCode.GDtriggerObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
gdjs.copyArray(gdjs.GameCode.GDtriggerObjects1, gdjs.GameCode.GDtriggerObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtriggerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDtriggerObjects2[i].getVariableString(gdjs.GameCode.GDtriggerObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtriggerObjects2[k] = gdjs.GameCode.GDtriggerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDtriggerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) > (( gdjs.GameCode.GDbackgroundObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDbackgroundObjects2[0].getCenterXInScene()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("limit"));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("sens"))), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects1);
/* Reuse gdjs.GameCode.GDtriggerObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtriggerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDtriggerObjects1[i].getVariableString(gdjs.GameCode.GDtriggerObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtriggerObjects1[k] = gdjs.GameCode.GDtriggerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDtriggerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) < (( gdjs.GameCode.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDbackgroundObjects1[0].getCenterXInScene()) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("limit"));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("sens"))), "", 0);
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("trigger"), gdjs.GameCode.GDtriggerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects = Hashtable.newFrom({"trigger": gdjs.GameCode.GDtriggerObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects = Hashtable.newFrom({"trigger": gdjs.GameCode.GDtriggerObjects2});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("trigger"), gdjs.GameCode.GDtriggerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtriggerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDtriggerObjects2[i].getVariableString(gdjs.GameCode.GDtriggerObjects2[i].getVariables().getFromIndex(0)) == "lc_dx" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDtriggerObjects2[k] = gdjs.GameCode.GDtriggerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDtriggerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9007804);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].toggleVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].toggleVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects2[i].setAnimationName("off all");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("trigger"), gdjs.GameCode.GDtriggerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtriggerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDtriggerObjects2[i].getVariableString(gdjs.GameCode.GDtriggerObjects2[i].getVariables().getFromIndex(0)) == "lc_sx" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDtriggerObjects2[k] = gdjs.GameCode.GDtriggerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDtriggerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9012300);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].toggleVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].toggleVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects1);
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects1[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects1[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects1[k] = gdjs.GameCode.GDbutton_95sxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects1[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects1[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects1[k] = gdjs.GameCode.GDbutton_95dxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects1);
/* Reuse gdjs.GameCode.GDbutton_95sxObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects1[i].setAnimationName("off all");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects = Hashtable.newFrom({"trigger": gdjs.GameCode.GDtriggerObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects = Hashtable.newFrom({"trigger": gdjs.GameCode.GDtriggerObjects2});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("trigger"), gdjs.GameCode.GDtriggerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtriggerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDtriggerObjects2[i].getVariableString(gdjs.GameCode.GDtriggerObjects2[i].getVariables().getFromIndex(0)) == "d_dx" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDtriggerObjects2[k] = gdjs.GameCode.GDtriggerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDtriggerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9016372);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].toggleVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().get("door"));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().get("door"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].setAnimationName("Chiudi");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().get("door"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].setAnimationName("Chiudi");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().get("door"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].setAnimationName("Apri");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().get("door"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects2[k] = gdjs.GameCode.GDbutton_95dxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_DX"), gdjs.GameCode.GDDoor_95DXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95dxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95dxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95dxObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95DXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95DXObjects2[i].setAnimationName("Apri");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("trigger"), gdjs.GameCode.GDtriggerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDtriggerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtriggerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDtriggerObjects2[i].getVariableString(gdjs.GameCode.GDtriggerObjects2[i].getVariables().getFromIndex(0)) == "d_sx" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDtriggerObjects2[k] = gdjs.GameCode.GDtriggerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDtriggerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9022556);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].toggleVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().get("door"));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().get("door"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects2[i].setAnimationName("Apri");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().get("door"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects2[i].setAnimationName("Apri");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().get("door"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects2);
/* Reuse gdjs.GameCode.GDbutton_95sxObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects2[i].setAnimationName("Chiudi");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects1[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects1[i].getVariables().get("door"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects1[k] = gdjs.GameCode.GDbutton_95sxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects1[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects1[k] = gdjs.GameCode.GDbutton_95sxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Door_SX"), gdjs.GameCode.GDDoor_95SXObjects1);
/* Reuse gdjs.GameCode.GDbutton_95sxObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbutton_95sxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbutton_95sxObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoor_95SXObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDoor_95SXObjects1[i].setAnimationName("Chiudi");
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects3);
{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects3[i].setAnimationName("on sx");
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects2[i].setAnimationName("bonnie");
}
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects2[i].setAnimationName("on dx");
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects1[i].setAnimationName("chica");
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button_sx"), gdjs.GameCode.GDbutton_95sxObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95sxObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95sxObjects2[i].getVariableBoolean(gdjs.GameCode.GDbutton_95sxObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95sxObjects2[k] = gdjs.GameCode.GDbutton_95sxObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95sxObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button_dx"), gdjs.GameCode.GDbutton_95dxObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbutton_95dxObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbutton_95dxObjects1[i].getVariableBoolean(gdjs.GameCode.GDbutton_95dxObjects1[i].getVariables().getFromIndex(0), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbutton_95dxObjects1[k] = gdjs.GameCode.GDbutton_95dxObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbutton_95dxObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.GameCode.GDbackgroundObjects2.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDbackgroundObjects2_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
gdjs.GameCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects3);
for(var i = 0, k = 0, l = gdjs.GameCode.GDbackgroundObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDbackgroundObjects3[i].isCurrentAnimationName("jump_bonnie") ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDbackgroundObjects3[k] = gdjs.GameCode.GDbackgroundObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDbackgroundObjects3.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDbackgroundObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDbackgroundObjects2_1final.indexOf(gdjs.GameCode.GDbackgroundObjects3[j]) === -1 )
            gdjs.GameCode.GDbackgroundObjects2_1final.push(gdjs.GameCode.GDbackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects3);
for(var i = 0, k = 0, l = gdjs.GameCode.GDbackgroundObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDbackgroundObjects3[i].isCurrentAnimationName("jump_chica") ) {
        gdjs.GameCode.condition1IsTrue_1.val = true;
        gdjs.GameCode.GDbackgroundObjects3[k] = gdjs.GameCode.GDbackgroundObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDbackgroundObjects3.length = k;if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDbackgroundObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDbackgroundObjects2_1final.indexOf(gdjs.GameCode.GDbackgroundObjects3[j]) === -1 )
            gdjs.GameCode.GDbackgroundObjects2_1final.push(gdjs.GameCode.GDbackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects3);
for(var i = 0, k = 0, l = gdjs.GameCode.GDbackgroundObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDbackgroundObjects3[i].isCurrentAnimationName("jump_freddy") ) {
        gdjs.GameCode.condition2IsTrue_1.val = true;
        gdjs.GameCode.GDbackgroundObjects3[k] = gdjs.GameCode.GDbackgroundObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDbackgroundObjects3.length = k;if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDbackgroundObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDbackgroundObjects2_1final.indexOf(gdjs.GameCode.GDbackgroundObjects3[j]) === -1 )
            gdjs.GameCode.GDbackgroundObjects2_1final.push(gdjs.GameCode.GDbackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects3);
for(var i = 0, k = 0, l = gdjs.GameCode.GDbackgroundObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDbackgroundObjects3[i].isCurrentAnimationName("jump_roxy") ) {
        gdjs.GameCode.condition3IsTrue_1.val = true;
        gdjs.GameCode.GDbackgroundObjects3[k] = gdjs.GameCode.GDbackgroundObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDbackgroundObjects3.length = k;if( gdjs.GameCode.condition3IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDbackgroundObjects3.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDbackgroundObjects2_1final.indexOf(gdjs.GameCode.GDbackgroundObjects3[j]) === -1 )
            gdjs.GameCode.GDbackgroundObjects2_1final.push(gdjs.GameCode.GDbackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDbackgroundObjects2_1final, gdjs.GameCode.GDbackgroundObjects2);
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbackgroundObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbackgroundObjects2[i].hasAnimationEnded2() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbackgroundObjects2[k] = gdjs.GameCode.GDbackgroundObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbackgroundObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Static"), gdjs.GameCode.GDStaticObjects2);
{for(var i = 0, len = gdjs.GameCode.GDStaticObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStaticObjects2[i].setAnimationName("static");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{for(var i = 0, len = gdjs.GameCode.GDStaticObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStaticObjects2[i].setLayer("");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDStaticObjects2.length !== 0 ? gdjs.GameCode.GDStaticObjects2[0] : null), false, "", 0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.GameCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("trigger"), gdjs.GameCode.GDtriggerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{runtimeScene.getScene().getVariables().get("sens").setNumber(4);
}{runtimeScene.getScene().getVariables().get("limit").setNumber(((( gdjs.GameCode.GDbackgroundObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDbackgroundObjects1[0].getWidth()) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0)) / 2);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "trigger");
}{for(var i = 0, len = gdjs.GameCode.GDtriggerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtriggerObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Static");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Static"), gdjs.GameCode.GDStaticObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDStaticObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDStaticObjects1[i].hasAnimationEnded2() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDStaticObjects1[k] = gdjs.GameCode.GDStaticObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDStaticObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Static");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects3.length = 0;
gdjs.GameCode.GDbackgroundObjects4.length = 0;
gdjs.GameCode.GDtriggerObjects1.length = 0;
gdjs.GameCode.GDtriggerObjects2.length = 0;
gdjs.GameCode.GDtriggerObjects3.length = 0;
gdjs.GameCode.GDtriggerObjects4.length = 0;
gdjs.GameCode.GDbutton_95sxObjects1.length = 0;
gdjs.GameCode.GDbutton_95sxObjects2.length = 0;
gdjs.GameCode.GDbutton_95sxObjects3.length = 0;
gdjs.GameCode.GDbutton_95sxObjects4.length = 0;
gdjs.GameCode.GDbutton_95dxObjects1.length = 0;
gdjs.GameCode.GDbutton_95dxObjects2.length = 0;
gdjs.GameCode.GDbutton_95dxObjects3.length = 0;
gdjs.GameCode.GDbutton_95dxObjects4.length = 0;
gdjs.GameCode.GDfanObjects1.length = 0;
gdjs.GameCode.GDfanObjects2.length = 0;
gdjs.GameCode.GDfanObjects3.length = 0;
gdjs.GameCode.GDfanObjects4.length = 0;
gdjs.GameCode.GDStaticObjects1.length = 0;
gdjs.GameCode.GDStaticObjects2.length = 0;
gdjs.GameCode.GDStaticObjects3.length = 0;
gdjs.GameCode.GDStaticObjects4.length = 0;
gdjs.GameCode.GDDoor_95SXObjects1.length = 0;
gdjs.GameCode.GDDoor_95SXObjects2.length = 0;
gdjs.GameCode.GDDoor_95SXObjects3.length = 0;
gdjs.GameCode.GDDoor_95SXObjects4.length = 0;
gdjs.GameCode.GDDoor_95DXObjects1.length = 0;
gdjs.GameCode.GDDoor_95DXObjects2.length = 0;
gdjs.GameCode.GDDoor_95DXObjects3.length = 0;
gdjs.GameCode.GDDoor_95DXObjects4.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects4.length = 0;

gdjs.GameCode.eventsList9(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
