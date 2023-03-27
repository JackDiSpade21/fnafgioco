gdjs.HomeCode = {};
gdjs.HomeCode.GDGiocaObjects1= [];
gdjs.HomeCode.GDGiocaObjects2= [];

gdjs.HomeCode.conditionTrue_0 = {val:false};
gdjs.HomeCode.condition0IsTrue_0 = {val:false};
gdjs.HomeCode.condition1IsTrue_0 = {val:false};


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Gioca"), gdjs.HomeCode.GDGiocaObjects1);

gdjs.HomeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HomeCode.GDGiocaObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDGiocaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.HomeCode.condition0IsTrue_0.val = true;
        gdjs.HomeCode.GDGiocaObjects1[k] = gdjs.HomeCode.GDGiocaObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDGiocaObjects1.length = k;}if (gdjs.HomeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDGiocaObjects1.length = 0;
gdjs.HomeCode.GDGiocaObjects2.length = 0;

gdjs.HomeCode.eventsList0(runtimeScene);

return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
