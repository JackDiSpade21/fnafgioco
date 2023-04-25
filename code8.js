gdjs.finalesamCode = {};
gdjs.finalesamCode.GDcutsceneObjects1= [];
gdjs.finalesamCode.GDcutsceneObjects2= [];


gdjs.finalesamCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cutscene"), gdjs.finalesamCode.GDcutsceneObjects1);
{for(var i = 0, len = gdjs.finalesamCode.GDcutsceneObjects1.length ;i < len;++i) {
    gdjs.finalesamCode.GDcutsceneObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cutscene"), gdjs.finalesamCode.GDcutsceneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finalesamCode.GDcutsceneObjects1.length;i<l;++i) {
    if ( gdjs.finalesamCode.GDcutsceneObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.finalesamCode.GDcutsceneObjects1[k] = gdjs.finalesamCode.GDcutsceneObjects1[i];
        ++k;
    }
}
gdjs.finalesamCode.GDcutsceneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}

}


};

gdjs.finalesamCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalesamCode.GDcutsceneObjects1.length = 0;
gdjs.finalesamCode.GDcutsceneObjects2.length = 0;

gdjs.finalesamCode.eventsList0(runtimeScene);

return;

}

gdjs['finalesamCode'] = gdjs.finalesamCode;
