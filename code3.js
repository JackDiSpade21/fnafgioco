gdjs.opzioniCode = {};
gdjs.opzioniCode.GDImpostazioniObjects1= [];
gdjs.opzioniCode.GDImpostazioniObjects2= [];
gdjs.opzioniCode.GDImpostazioniObjects3= [];
gdjs.opzioniCode.GDImpostazioniObjects4= [];
gdjs.opzioniCode.GDsensibObjects1= [];
gdjs.opzioniCode.GDsensibObjects2= [];
gdjs.opzioniCode.GDsensibObjects3= [];
gdjs.opzioniCode.GDsensibObjects4= [];
gdjs.opzioniCode.GDvol_95generaleObjects1= [];
gdjs.opzioniCode.GDvol_95generaleObjects2= [];
gdjs.opzioniCode.GDvol_95generaleObjects3= [];
gdjs.opzioniCode.GDvol_95generaleObjects4= [];
gdjs.opzioniCode.GDvol_95vociObjects1= [];
gdjs.opzioniCode.GDvol_95vociObjects2= [];
gdjs.opzioniCode.GDvol_95vociObjects3= [];
gdjs.opzioniCode.GDvol_95vociObjects4= [];
gdjs.opzioniCode.GDfpsObjects1= [];
gdjs.opzioniCode.GDfpsObjects2= [];
gdjs.opzioniCode.GDfpsObjects3= [];
gdjs.opzioniCode.GDfpsObjects4= [];
gdjs.opzioniCode.GDradarObjects1= [];
gdjs.opzioniCode.GDradarObjects2= [];
gdjs.opzioniCode.GDradarObjects3= [];
gdjs.opzioniCode.GDradarObjects4= [];
gdjs.opzioniCode.GDcorrenteObjects1= [];
gdjs.opzioniCode.GDcorrenteObjects2= [];
gdjs.opzioniCode.GDcorrenteObjects3= [];
gdjs.opzioniCode.GDcorrenteObjects4= [];
gdjs.opzioniCode.GDfullscreenObjects1= [];
gdjs.opzioniCode.GDfullscreenObjects2= [];
gdjs.opzioniCode.GDfullscreenObjects3= [];
gdjs.opzioniCode.GDfullscreenObjects4= [];
gdjs.opzioniCode.GDdebugObjects1= [];
gdjs.opzioniCode.GDdebugObjects2= [];
gdjs.opzioniCode.GDdebugObjects3= [];
gdjs.opzioniCode.GDdebugObjects4= [];
gdjs.opzioniCode.GDsfondoObjects1= [];
gdjs.opzioniCode.GDsfondoObjects2= [];
gdjs.opzioniCode.GDsfondoObjects3= [];
gdjs.opzioniCode.GDsfondoObjects4= [];
gdjs.opzioniCode.GDscurimentoObjects1= [];
gdjs.opzioniCode.GDscurimentoObjects2= [];
gdjs.opzioniCode.GDscurimentoObjects3= [];
gdjs.opzioniCode.GDscurimentoObjects4= [];
gdjs.opzioniCode.GDsens_95sliderObjects1= [];
gdjs.opzioniCode.GDsens_95sliderObjects2= [];
gdjs.opzioniCode.GDsens_95sliderObjects3= [];
gdjs.opzioniCode.GDsens_95sliderObjects4= [];
gdjs.opzioniCode.GDsens_95generaleObjects1= [];
gdjs.opzioniCode.GDsens_95generaleObjects2= [];
gdjs.opzioniCode.GDsens_95generaleObjects3= [];
gdjs.opzioniCode.GDsens_95generaleObjects4= [];
gdjs.opzioniCode.GDsens_95vociObjects1= [];
gdjs.opzioniCode.GDsens_95vociObjects2= [];
gdjs.opzioniCode.GDsens_95vociObjects3= [];
gdjs.opzioniCode.GDsens_95vociObjects4= [];
gdjs.opzioniCode.GDfull_95toggleObjects1= [];
gdjs.opzioniCode.GDfull_95toggleObjects2= [];
gdjs.opzioniCode.GDfull_95toggleObjects3= [];
gdjs.opzioniCode.GDfull_95toggleObjects4= [];
gdjs.opzioniCode.GDradar_95toggleObjects1= [];
gdjs.opzioniCode.GDradar_95toggleObjects2= [];
gdjs.opzioniCode.GDradar_95toggleObjects3= [];
gdjs.opzioniCode.GDradar_95toggleObjects4= [];
gdjs.opzioniCode.GDfps_95toggleObjects1= [];
gdjs.opzioniCode.GDfps_95toggleObjects2= [];
gdjs.opzioniCode.GDfps_95toggleObjects3= [];
gdjs.opzioniCode.GDfps_95toggleObjects4= [];
gdjs.opzioniCode.GDpower_95toggleObjects1= [];
gdjs.opzioniCode.GDpower_95toggleObjects2= [];
gdjs.opzioniCode.GDpower_95toggleObjects3= [];
gdjs.opzioniCode.GDpower_95toggleObjects4= [];
gdjs.opzioniCode.GDdebug_95toggleObjects1= [];
gdjs.opzioniCode.GDdebug_95toggleObjects2= [];
gdjs.opzioniCode.GDdebug_95toggleObjects3= [];
gdjs.opzioniCode.GDdebug_95toggleObjects4= [];
gdjs.opzioniCode.GDHOMEObjects1= [];
gdjs.opzioniCode.GDHOMEObjects2= [];
gdjs.opzioniCode.GDHOMEObjects3= [];
gdjs.opzioniCode.GDHOMEObjects4= [];
gdjs.opzioniCode.GDeliminaObjects1= [];
gdjs.opzioniCode.GDeliminaObjects2= [];
gdjs.opzioniCode.GDeliminaObjects3= [];
gdjs.opzioniCode.GDeliminaObjects4= [];


gdjs.opzioniCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_radar"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("radar_toggle"), gdjs.opzioniCode.GDradar_95toggleObjects3);
{for(var i = 0, len = gdjs.opzioniCode.GDradar_95toggleObjects3.length ;i < len;++i) {
    gdjs.opzioniCode.GDradar_95toggleObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_radar"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("radar_toggle"), gdjs.opzioniCode.GDradar_95toggleObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDradar_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDradar_95toggleObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.opzioniCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_power"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("power_toggle"), gdjs.opzioniCode.GDpower_95toggleObjects3);
{for(var i = 0, len = gdjs.opzioniCode.GDpower_95toggleObjects3.length ;i < len;++i) {
    gdjs.opzioniCode.GDpower_95toggleObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_power"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("power_toggle"), gdjs.opzioniCode.GDpower_95toggleObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDpower_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDpower_95toggleObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.opzioniCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_fullscreen"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("full_toggle"), gdjs.opzioniCode.GDfull_95toggleObjects3);
{for(var i = 0, len = gdjs.opzioniCode.GDfull_95toggleObjects3.length ;i < len;++i) {
    gdjs.opzioniCode.GDfull_95toggleObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_fullscreen"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("full_toggle"), gdjs.opzioniCode.GDfull_95toggleObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDfull_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDfull_95toggleObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.opzioniCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_fps"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fps_toggle"), gdjs.opzioniCode.GDfps_95toggleObjects3);
{for(var i = 0, len = gdjs.opzioniCode.GDfps_95toggleObjects3.length ;i < len;++i) {
    gdjs.opzioniCode.GDfps_95toggleObjects3[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_fps"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fps_toggle"), gdjs.opzioniCode.GDfps_95toggleObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDfps_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDfps_95toggleObjects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.opzioniCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_debug"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("debug_toggle"), gdjs.opzioniCode.GDdebug_95toggleObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDdebug_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDdebug_95toggleObjects2[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("local_debug"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("debug_toggle"), gdjs.opzioniCode.GDdebug_95toggleObjects1);
{for(var i = 0, len = gdjs.opzioniCode.GDdebug_95toggleObjects1.length ;i < len;++i) {
    gdjs.opzioniCode.GDdebug_95toggleObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.opzioniCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isNativeMobileApp();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("full_toggle"), gdjs.opzioniCode.GDfull_95toggleObjects2);
gdjs.copyArray(runtimeScene.getObjects("fullscreen"), gdjs.opzioniCode.GDfullscreenObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDfullscreenObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDfullscreenObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.opzioniCode.GDfull_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDfull_95toggleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isPreview(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("debug"), gdjs.opzioniCode.GDdebugObjects2);
gdjs.copyArray(runtimeScene.getObjects("debug_toggle"), gdjs.opzioniCode.GDdebug_95toggleObjects2);
{for(var i = 0, len = gdjs.opzioniCode.GDdebugObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDdebugObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.opzioniCode.GDdebug_95toggleObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDdebug_95toggleObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("sens_slider"), gdjs.opzioniCode.GDsens_95sliderObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "sens", runtimeScene, runtimeScene.getScene().getVariables().get("local_sens"));
}{for(var i = 0, len = gdjs.opzioniCode.GDsens_95sliderObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDsens_95sliderObjects2[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("local_sens")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "radar");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "radar", runtimeScene, runtimeScene.getScene().getVariables().get("local_radar"));
}
{ //Subevents
gdjs.opzioniCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "power");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "power", runtimeScene, runtimeScene.getScene().getVariables().get("local_power"));
}
{ //Subevents
gdjs.opzioniCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "fullscreen");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "fullscreen", runtimeScene, runtimeScene.getScene().getVariables().get("local_fullscreen"));
}
{ //Subevents
gdjs.opzioniCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "fps");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "fps", runtimeScene, runtimeScene.getScene().getVariables().get("local_fps"));
}
{ //Subevents
gdjs.opzioniCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("fnaf1", "debug");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("fnaf1", "debug", runtimeScene, runtimeScene.getScene().getVariables().get("local_debug"));
}
{ //Subevents
gdjs.opzioniCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.opzioniCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scurimento"), gdjs.opzioniCode.GDscurimentoObjects1);
gdjs.copyArray(runtimeScene.getObjects("sens_generale"), gdjs.opzioniCode.GDsens_95generaleObjects1);
gdjs.copyArray(runtimeScene.getObjects("sens_voci"), gdjs.opzioniCode.GDsens_95vociObjects1);
gdjs.copyArray(runtimeScene.getObjects("sfondo"), gdjs.opzioniCode.GDsfondoObjects1);
{for(var i = 0, len = gdjs.opzioniCode.GDsfondoObjects1.length ;i < len;++i) {
    gdjs.opzioniCode.GDsfondoObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.opzioniCode.GDscurimentoObjects1.length ;i < len;++i) {
    gdjs.opzioniCode.GDscurimentoObjects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.opzioniCode.GDsens_95generaleObjects1.length ;i < len;++i) {
    gdjs.opzioniCode.GDsens_95generaleObjects1[i].SetValue(gdjs.evtTools.sound.getGlobalVolume(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.opzioniCode.GDsens_95vociObjects1.length ;i < len;++i) {
    gdjs.opzioniCode.GDsens_95vociObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.opzioniCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.opzioniCode.asyncCallback16898132 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("elimina"), gdjs.opzioniCode.GDeliminaObjects3);

{for(var i = 0, len = gdjs.opzioniCode.GDeliminaObjects3.length ;i < len;++i) {
    gdjs.opzioniCode.GDeliminaObjects3[i].setVariableBoolean(gdjs.opzioniCode.GDeliminaObjects3[i].getVariables().getFromIndex(0), true);
}
}}
gdjs.opzioniCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.opzioniCode.GDeliminaObjects2) asyncObjectsList.addObject("elimina", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.opzioniCode.asyncCallback16898132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.opzioniCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("sens_voci"), gdjs.opzioniCode.GDsens_95vociObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDsens_95vociObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDsens_95vociObjects2[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDsens_95vociObjects2[k] = gdjs.opzioniCode.GDsens_95vociObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDsens_95vociObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.opzioniCode.GDsens_95vociObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.opzioniCode.GDsens_95vociObjects2.length === 0 ) ? 0 :gdjs.opzioniCode.GDsens_95vociObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "voci", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("sens_generale"), gdjs.opzioniCode.GDsens_95generaleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDsens_95generaleObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDsens_95generaleObjects2[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDsens_95generaleObjects2[k] = gdjs.opzioniCode.GDsens_95generaleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDsens_95generaleObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.opzioniCode.GDsens_95generaleObjects2 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.opzioniCode.GDsens_95generaleObjects2.length === 0 ) ? 0 :gdjs.opzioniCode.GDsens_95generaleObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "volume", (( gdjs.opzioniCode.GDsens_95generaleObjects2.length === 0 ) ? 0 :gdjs.opzioniCode.GDsens_95generaleObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("sens_slider"), gdjs.opzioniCode.GDsens_95sliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDsens_95sliderObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDsens_95sliderObjects2[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDsens_95sliderObjects2[k] = gdjs.opzioniCode.GDsens_95sliderObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDsens_95sliderObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.opzioniCode.GDsens_95sliderObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber((( gdjs.opzioniCode.GDsens_95sliderObjects2.length === 0 ) ? 0 :gdjs.opzioniCode.GDsens_95sliderObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "sens", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("radar_toggle"), gdjs.opzioniCode.GDradar_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDradar_95toggleObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDradar_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDradar_95toggleObjects2[k] = gdjs.opzioniCode.GDradar_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDradar_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "radar", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("radar_toggle"), gdjs.opzioniCode.GDradar_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDradar_95toggleObjects2.length;i<l;++i) {
    if ( !(gdjs.opzioniCode.GDradar_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDradar_95toggleObjects2[k] = gdjs.opzioniCode.GDradar_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDradar_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "radar", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("power_toggle"), gdjs.opzioniCode.GDpower_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDpower_95toggleObjects2.length;i<l;++i) {
    if ( !(gdjs.opzioniCode.GDpower_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDpower_95toggleObjects2[k] = gdjs.opzioniCode.GDpower_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDpower_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "power", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("power_toggle"), gdjs.opzioniCode.GDpower_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDpower_95toggleObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDpower_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDpower_95toggleObjects2[k] = gdjs.opzioniCode.GDpower_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDpower_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(9), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "power", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("full_toggle"), gdjs.opzioniCode.GDfull_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDfull_95toggleObjects2.length;i<l;++i) {
    if ( !(gdjs.opzioniCode.GDfull_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDfull_95toggleObjects2[k] = gdjs.opzioniCode.GDfull_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDfull_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "fullscreen", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("full_toggle"), gdjs.opzioniCode.GDfull_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDfull_95toggleObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDfull_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDfull_95toggleObjects2[k] = gdjs.opzioniCode.GDfull_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDfull_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "fullscreen", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("fps_toggle"), gdjs.opzioniCode.GDfps_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDfps_95toggleObjects2.length;i<l;++i) {
    if ( !(gdjs.opzioniCode.GDfps_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDfps_95toggleObjects2[k] = gdjs.opzioniCode.GDfps_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDfps_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "fps", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fps_toggle"), gdjs.opzioniCode.GDfps_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDfps_95toggleObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDfps_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDfps_95toggleObjects2[k] = gdjs.opzioniCode.GDfps_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDfps_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "fps", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("debug_toggle"), gdjs.opzioniCode.GDdebug_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDdebug_95toggleObjects2.length;i<l;++i) {
    if ( !(gdjs.opzioniCode.GDdebug_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDdebug_95toggleObjects2[k] = gdjs.opzioniCode.GDdebug_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDdebug_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "debug", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("debug_toggle"), gdjs.opzioniCode.GDdebug_95toggleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDdebug_95toggleObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDdebug_95toggleObjects2[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDdebug_95toggleObjects2[k] = gdjs.opzioniCode.GDdebug_95toggleObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDdebug_95toggleObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("fnaf1", "debug", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HOME"), gdjs.opzioniCode.GDHOMEObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDHOMEObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDHOMEObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDHOMEObjects2[k] = gdjs.opzioniCode.GDHOMEObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDHOMEObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("elimina"), gdjs.opzioniCode.GDeliminaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDeliminaObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDeliminaObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDeliminaObjects2[k] = gdjs.opzioniCode.GDeliminaObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDeliminaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDeliminaObjects2.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDeliminaObjects2[i].getVariableBoolean(gdjs.opzioniCode.GDeliminaObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDeliminaObjects2[k] = gdjs.opzioniCode.GDeliminaObjects2[i];
        ++k;
    }
}
gdjs.opzioniCode.GDeliminaObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.opzioniCode.GDeliminaObjects2 */
{for(var i = 0, len = gdjs.opzioniCode.GDeliminaObjects2.length ;i < len;++i) {
    gdjs.opzioniCode.GDeliminaObjects2[i].SetLabelText("SICURO?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.opzioniCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("elimina"), gdjs.opzioniCode.GDeliminaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDeliminaObjects1.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDeliminaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDeliminaObjects1[k] = gdjs.opzioniCode.GDeliminaObjects1[i];
        ++k;
    }
}
gdjs.opzioniCode.GDeliminaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.opzioniCode.GDeliminaObjects1.length;i<l;++i) {
    if ( gdjs.opzioniCode.GDeliminaObjects1[i].getVariableBoolean(gdjs.opzioniCode.GDeliminaObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.opzioniCode.GDeliminaObjects1[k] = gdjs.opzioniCode.GDeliminaObjects1[i];
        ++k;
    }
}
gdjs.opzioniCode.GDeliminaObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("fnaf1");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", true);
}}

}


};gdjs.opzioniCode.eventsList9 = function(runtimeScene) {

{


gdjs.opzioniCode.eventsList6(runtimeScene);
}


{


gdjs.opzioniCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.opzioniCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.opzioniCode.GDImpostazioniObjects1.length = 0;
gdjs.opzioniCode.GDImpostazioniObjects2.length = 0;
gdjs.opzioniCode.GDImpostazioniObjects3.length = 0;
gdjs.opzioniCode.GDImpostazioniObjects4.length = 0;
gdjs.opzioniCode.GDsensibObjects1.length = 0;
gdjs.opzioniCode.GDsensibObjects2.length = 0;
gdjs.opzioniCode.GDsensibObjects3.length = 0;
gdjs.opzioniCode.GDsensibObjects4.length = 0;
gdjs.opzioniCode.GDvol_95generaleObjects1.length = 0;
gdjs.opzioniCode.GDvol_95generaleObjects2.length = 0;
gdjs.opzioniCode.GDvol_95generaleObjects3.length = 0;
gdjs.opzioniCode.GDvol_95generaleObjects4.length = 0;
gdjs.opzioniCode.GDvol_95vociObjects1.length = 0;
gdjs.opzioniCode.GDvol_95vociObjects2.length = 0;
gdjs.opzioniCode.GDvol_95vociObjects3.length = 0;
gdjs.opzioniCode.GDvol_95vociObjects4.length = 0;
gdjs.opzioniCode.GDfpsObjects1.length = 0;
gdjs.opzioniCode.GDfpsObjects2.length = 0;
gdjs.opzioniCode.GDfpsObjects3.length = 0;
gdjs.opzioniCode.GDfpsObjects4.length = 0;
gdjs.opzioniCode.GDradarObjects1.length = 0;
gdjs.opzioniCode.GDradarObjects2.length = 0;
gdjs.opzioniCode.GDradarObjects3.length = 0;
gdjs.opzioniCode.GDradarObjects4.length = 0;
gdjs.opzioniCode.GDcorrenteObjects1.length = 0;
gdjs.opzioniCode.GDcorrenteObjects2.length = 0;
gdjs.opzioniCode.GDcorrenteObjects3.length = 0;
gdjs.opzioniCode.GDcorrenteObjects4.length = 0;
gdjs.opzioniCode.GDfullscreenObjects1.length = 0;
gdjs.opzioniCode.GDfullscreenObjects2.length = 0;
gdjs.opzioniCode.GDfullscreenObjects3.length = 0;
gdjs.opzioniCode.GDfullscreenObjects4.length = 0;
gdjs.opzioniCode.GDdebugObjects1.length = 0;
gdjs.opzioniCode.GDdebugObjects2.length = 0;
gdjs.opzioniCode.GDdebugObjects3.length = 0;
gdjs.opzioniCode.GDdebugObjects4.length = 0;
gdjs.opzioniCode.GDsfondoObjects1.length = 0;
gdjs.opzioniCode.GDsfondoObjects2.length = 0;
gdjs.opzioniCode.GDsfondoObjects3.length = 0;
gdjs.opzioniCode.GDsfondoObjects4.length = 0;
gdjs.opzioniCode.GDscurimentoObjects1.length = 0;
gdjs.opzioniCode.GDscurimentoObjects2.length = 0;
gdjs.opzioniCode.GDscurimentoObjects3.length = 0;
gdjs.opzioniCode.GDscurimentoObjects4.length = 0;
gdjs.opzioniCode.GDsens_95sliderObjects1.length = 0;
gdjs.opzioniCode.GDsens_95sliderObjects2.length = 0;
gdjs.opzioniCode.GDsens_95sliderObjects3.length = 0;
gdjs.opzioniCode.GDsens_95sliderObjects4.length = 0;
gdjs.opzioniCode.GDsens_95generaleObjects1.length = 0;
gdjs.opzioniCode.GDsens_95generaleObjects2.length = 0;
gdjs.opzioniCode.GDsens_95generaleObjects3.length = 0;
gdjs.opzioniCode.GDsens_95generaleObjects4.length = 0;
gdjs.opzioniCode.GDsens_95vociObjects1.length = 0;
gdjs.opzioniCode.GDsens_95vociObjects2.length = 0;
gdjs.opzioniCode.GDsens_95vociObjects3.length = 0;
gdjs.opzioniCode.GDsens_95vociObjects4.length = 0;
gdjs.opzioniCode.GDfull_95toggleObjects1.length = 0;
gdjs.opzioniCode.GDfull_95toggleObjects2.length = 0;
gdjs.opzioniCode.GDfull_95toggleObjects3.length = 0;
gdjs.opzioniCode.GDfull_95toggleObjects4.length = 0;
gdjs.opzioniCode.GDradar_95toggleObjects1.length = 0;
gdjs.opzioniCode.GDradar_95toggleObjects2.length = 0;
gdjs.opzioniCode.GDradar_95toggleObjects3.length = 0;
gdjs.opzioniCode.GDradar_95toggleObjects4.length = 0;
gdjs.opzioniCode.GDfps_95toggleObjects1.length = 0;
gdjs.opzioniCode.GDfps_95toggleObjects2.length = 0;
gdjs.opzioniCode.GDfps_95toggleObjects3.length = 0;
gdjs.opzioniCode.GDfps_95toggleObjects4.length = 0;
gdjs.opzioniCode.GDpower_95toggleObjects1.length = 0;
gdjs.opzioniCode.GDpower_95toggleObjects2.length = 0;
gdjs.opzioniCode.GDpower_95toggleObjects3.length = 0;
gdjs.opzioniCode.GDpower_95toggleObjects4.length = 0;
gdjs.opzioniCode.GDdebug_95toggleObjects1.length = 0;
gdjs.opzioniCode.GDdebug_95toggleObjects2.length = 0;
gdjs.opzioniCode.GDdebug_95toggleObjects3.length = 0;
gdjs.opzioniCode.GDdebug_95toggleObjects4.length = 0;
gdjs.opzioniCode.GDHOMEObjects1.length = 0;
gdjs.opzioniCode.GDHOMEObjects2.length = 0;
gdjs.opzioniCode.GDHOMEObjects3.length = 0;
gdjs.opzioniCode.GDHOMEObjects4.length = 0;
gdjs.opzioniCode.GDeliminaObjects1.length = 0;
gdjs.opzioniCode.GDeliminaObjects2.length = 0;
gdjs.opzioniCode.GDeliminaObjects3.length = 0;
gdjs.opzioniCode.GDeliminaObjects4.length = 0;

gdjs.opzioniCode.eventsList9(runtimeScene);

return;

}

gdjs['opzioniCode'] = gdjs.opzioniCode;
