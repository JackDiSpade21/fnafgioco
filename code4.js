gdjs.custom_32nightCode = {};
gdjs.custom_32nightCode.GDpersonObjects1= [];
gdjs.custom_32nightCode.GDpersonObjects2= [];
gdjs.custom_32nightCode.GDpersonObjects3= [];
gdjs.custom_32nightCode.GDpersonObjects4= [];
gdjs.custom_32nightCode.GDIstruzObjects1= [];
gdjs.custom_32nightCode.GDIstruzObjects2= [];
gdjs.custom_32nightCode.GDIstruzObjects3= [];
gdjs.custom_32nightCode.GDIstruzObjects4= [];
gdjs.custom_32nightCode.GDfreddyObjects1= [];
gdjs.custom_32nightCode.GDfreddyObjects2= [];
gdjs.custom_32nightCode.GDfreddyObjects3= [];
gdjs.custom_32nightCode.GDfreddyObjects4= [];
gdjs.custom_32nightCode.GDbonnieObjects1= [];
gdjs.custom_32nightCode.GDbonnieObjects2= [];
gdjs.custom_32nightCode.GDbonnieObjects3= [];
gdjs.custom_32nightCode.GDbonnieObjects4= [];
gdjs.custom_32nightCode.GDchicaObjects1= [];
gdjs.custom_32nightCode.GDchicaObjects2= [];
gdjs.custom_32nightCode.GDchicaObjects3= [];
gdjs.custom_32nightCode.GDchicaObjects4= [];
gdjs.custom_32nightCode.GDfoxyObjects1= [];
gdjs.custom_32nightCode.GDfoxyObjects2= [];
gdjs.custom_32nightCode.GDfoxyObjects3= [];
gdjs.custom_32nightCode.GDfoxyObjects4= [];
gdjs.custom_32nightCode.GDiaObjects1= [];
gdjs.custom_32nightCode.GDiaObjects2= [];
gdjs.custom_32nightCode.GDiaObjects3= [];
gdjs.custom_32nightCode.GDiaObjects4= [];
gdjs.custom_32nightCode.GDia_95fredObjects1= [];
gdjs.custom_32nightCode.GDia_95fredObjects2= [];
gdjs.custom_32nightCode.GDia_95fredObjects3= [];
gdjs.custom_32nightCode.GDia_95fredObjects4= [];
gdjs.custom_32nightCode.GDia_95bonObjects1= [];
gdjs.custom_32nightCode.GDia_95bonObjects2= [];
gdjs.custom_32nightCode.GDia_95bonObjects3= [];
gdjs.custom_32nightCode.GDia_95bonObjects4= [];
gdjs.custom_32nightCode.GDia_95chiObjects1= [];
gdjs.custom_32nightCode.GDia_95chiObjects2= [];
gdjs.custom_32nightCode.GDia_95chiObjects3= [];
gdjs.custom_32nightCode.GDia_95chiObjects4= [];
gdjs.custom_32nightCode.GDia_95foxObjects1= [];
gdjs.custom_32nightCode.GDia_95foxObjects2= [];
gdjs.custom_32nightCode.GDia_95foxObjects3= [];
gdjs.custom_32nightCode.GDia_95foxObjects4= [];
gdjs.custom_32nightCode.GDbonObjects1= [];
gdjs.custom_32nightCode.GDbonObjects2= [];
gdjs.custom_32nightCode.GDbonObjects3= [];
gdjs.custom_32nightCode.GDbonObjects4= [];
gdjs.custom_32nightCode.GDfredObjects1= [];
gdjs.custom_32nightCode.GDfredObjects2= [];
gdjs.custom_32nightCode.GDfredObjects3= [];
gdjs.custom_32nightCode.GDfredObjects4= [];
gdjs.custom_32nightCode.GDchiObjects1= [];
gdjs.custom_32nightCode.GDchiObjects2= [];
gdjs.custom_32nightCode.GDchiObjects3= [];
gdjs.custom_32nightCode.GDchiObjects4= [];
gdjs.custom_32nightCode.GDfoxObjects1= [];
gdjs.custom_32nightCode.GDfoxObjects2= [];
gdjs.custom_32nightCode.GDfoxObjects3= [];
gdjs.custom_32nightCode.GDfoxObjects4= [];
gdjs.custom_32nightCode.GDreadyObjects1= [];
gdjs.custom_32nightCode.GDreadyObjects2= [];
gdjs.custom_32nightCode.GDreadyObjects3= [];
gdjs.custom_32nightCode.GDreadyObjects4= [];
gdjs.custom_32nightCode.GDUPObjects1= [];
gdjs.custom_32nightCode.GDUPObjects2= [];
gdjs.custom_32nightCode.GDUPObjects3= [];
gdjs.custom_32nightCode.GDUPObjects4= [];
gdjs.custom_32nightCode.GDDOWNObjects1= [];
gdjs.custom_32nightCode.GDDOWNObjects2= [];
gdjs.custom_32nightCode.GDDOWNObjects3= [];
gdjs.custom_32nightCode.GDDOWNObjects4= [];
gdjs.custom_32nightCode.GDfaderObjects1= [];
gdjs.custom_32nightCode.GDfaderObjects2= [];
gdjs.custom_32nightCode.GDfaderObjects3= [];
gdjs.custom_32nightCode.GDfaderObjects4= [];


gdjs.custom_32nightCode.asyncCallback16934756 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadein"), false);
}}
gdjs.custom_32nightCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.custom_32nightCode.asyncCallback16934756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.custom_32nightCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "bonnie" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 20;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "freddy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 20;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "chica" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 20;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "foxy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 20;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "bonnie" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "freddy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "chica" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "foxy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "bonnie" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 20;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "bonnie" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "bonnie" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "bonnie" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "chica" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 20;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "chica" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "chica" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "chica" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "freddy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 20;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "freddy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "freddy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "freddy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "foxy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 20;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
gdjs.copyArray(runtimeScene.getObjects("UP"), gdjs.custom_32nightCode.GDUPObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDUPObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDUPObjects2[i].getVariableString(gdjs.custom_32nightCode.GDUPObjects2[i].getVariables().getFromIndex(0)) == "foxy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDUPObjects2[k] = gdjs.custom_32nightCode.GDUPObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDUPObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects2.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects2[i].getVariables().getFromIndex(0)) == "foxy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects2[k] = gdjs.custom_32nightCode.GDDOWNObjects2[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 20;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects2 */
/* Reuse gdjs.custom_32nightCode.GDUPObjects2 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDUPObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDUPObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDDOWNObjects1.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDDOWNObjects1[i].getVariableString(gdjs.custom_32nightCode.GDDOWNObjects1[i].getVariables().getFromIndex(0)) == "foxy" ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDDOWNObjects1[k] = gdjs.custom_32nightCode.GDDOWNObjects1[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDDOWNObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.custom_32nightCode.GDDOWNObjects1 */
{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects1[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.custom_32nightCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 7;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "fredjump", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != 9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 7;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prenotte", true);
}}

}


};gdjs.custom_32nightCode.asyncCallback16957340 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), false);
}
{ //Subevents
gdjs.custom_32nightCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.custom_32nightCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.custom_32nightCode.asyncCallback16957340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.custom_32nightCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ready"), gdjs.custom_32nightCode.GDreadyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.custom_32nightCode.GDreadyObjects1.length;i<l;++i) {
    if ( gdjs.custom_32nightCode.GDreadyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.custom_32nightCode.GDreadyObjects1[k] = gdjs.custom_32nightCode.GDreadyObjects1[i];
        ++k;
    }
}
gdjs.custom_32nightCode.GDreadyObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(7);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
}
{ //Subevents
gdjs.custom_32nightCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595fredObjects2Objects = Hashtable.newFrom({"ia_fred": gdjs.custom_32nightCode.GDia_95fredObjects2});
gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595bonObjects2Objects = Hashtable.newFrom({"ia_bon": gdjs.custom_32nightCode.GDia_95bonObjects2});
gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595chiObjects2Objects = Hashtable.newFrom({"ia_chi": gdjs.custom_32nightCode.GDia_95chiObjects2});
gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595foxObjects1Objects = Hashtable.newFrom({"ia_fox": gdjs.custom_32nightCode.GDia_95foxObjects1});
gdjs.custom_32nightCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ia_fred"), gdjs.custom_32nightCode.GDia_95fredObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595fredObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16961812);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(20);
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ia_bon"), gdjs.custom_32nightCode.GDia_95bonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595bonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16962620);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(20);
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ia_chi"), gdjs.custom_32nightCode.GDia_95chiObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595chiObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16964156);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(20);
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects2.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ia_fox"), gdjs.custom_32nightCode.GDia_95foxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.custom_32nightCode.mapOfGDgdjs_46custom_9532nightCode_46GDia_9595foxObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16964964);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DOWN"), gdjs.custom_32nightCode.GDDOWNObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(20);
}{for(var i = 0, len = gdjs.custom_32nightCode.GDDOWNObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDDOWNObjects1[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.custom_32nightCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ia_bon"), gdjs.custom_32nightCode.GDia_95bonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ia_chi"), gdjs.custom_32nightCode.GDia_95chiObjects1);
gdjs.copyArray(runtimeScene.getObjects("ia_fox"), gdjs.custom_32nightCode.GDia_95foxObjects1);
gdjs.copyArray(runtimeScene.getObjects("ia_fred"), gdjs.custom_32nightCode.GDia_95fredObjects1);
{for(var i = 0, len = gdjs.custom_32nightCode.GDia_95fredObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDia_95fredObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDia_95bonObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDia_95bonObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDia_95chiObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDia_95chiObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.custom_32nightCode.GDia_95foxObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDia_95foxObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "fade");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("fadein"), true);
}
{ //Subevents
gdjs.custom_32nightCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.custom_32nightCode.eventsList1(runtimeScene);
}


{


gdjs.custom_32nightCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fade"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fader"), gdjs.custom_32nightCode.GDfaderObjects1);
{for(var i = 0, len = gdjs.custom_32nightCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDfaderObjects1[i].setOpacity(gdjs.custom_32nightCode.GDfaderObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 400));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("fadein"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fader"), gdjs.custom_32nightCode.GDfaderObjects1);
{for(var i = 0, len = gdjs.custom_32nightCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.custom_32nightCode.GDfaderObjects1[i].setOpacity(gdjs.custom_32nightCode.GDfaderObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 400));
}
}}

}


{


gdjs.custom_32nightCode.eventsList5(runtimeScene);
}


};

gdjs.custom_32nightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.custom_32nightCode.GDpersonObjects1.length = 0;
gdjs.custom_32nightCode.GDpersonObjects2.length = 0;
gdjs.custom_32nightCode.GDpersonObjects3.length = 0;
gdjs.custom_32nightCode.GDpersonObjects4.length = 0;
gdjs.custom_32nightCode.GDIstruzObjects1.length = 0;
gdjs.custom_32nightCode.GDIstruzObjects2.length = 0;
gdjs.custom_32nightCode.GDIstruzObjects3.length = 0;
gdjs.custom_32nightCode.GDIstruzObjects4.length = 0;
gdjs.custom_32nightCode.GDfreddyObjects1.length = 0;
gdjs.custom_32nightCode.GDfreddyObjects2.length = 0;
gdjs.custom_32nightCode.GDfreddyObjects3.length = 0;
gdjs.custom_32nightCode.GDfreddyObjects4.length = 0;
gdjs.custom_32nightCode.GDbonnieObjects1.length = 0;
gdjs.custom_32nightCode.GDbonnieObjects2.length = 0;
gdjs.custom_32nightCode.GDbonnieObjects3.length = 0;
gdjs.custom_32nightCode.GDbonnieObjects4.length = 0;
gdjs.custom_32nightCode.GDchicaObjects1.length = 0;
gdjs.custom_32nightCode.GDchicaObjects2.length = 0;
gdjs.custom_32nightCode.GDchicaObjects3.length = 0;
gdjs.custom_32nightCode.GDchicaObjects4.length = 0;
gdjs.custom_32nightCode.GDfoxyObjects1.length = 0;
gdjs.custom_32nightCode.GDfoxyObjects2.length = 0;
gdjs.custom_32nightCode.GDfoxyObjects3.length = 0;
gdjs.custom_32nightCode.GDfoxyObjects4.length = 0;
gdjs.custom_32nightCode.GDiaObjects1.length = 0;
gdjs.custom_32nightCode.GDiaObjects2.length = 0;
gdjs.custom_32nightCode.GDiaObjects3.length = 0;
gdjs.custom_32nightCode.GDiaObjects4.length = 0;
gdjs.custom_32nightCode.GDia_95fredObjects1.length = 0;
gdjs.custom_32nightCode.GDia_95fredObjects2.length = 0;
gdjs.custom_32nightCode.GDia_95fredObjects3.length = 0;
gdjs.custom_32nightCode.GDia_95fredObjects4.length = 0;
gdjs.custom_32nightCode.GDia_95bonObjects1.length = 0;
gdjs.custom_32nightCode.GDia_95bonObjects2.length = 0;
gdjs.custom_32nightCode.GDia_95bonObjects3.length = 0;
gdjs.custom_32nightCode.GDia_95bonObjects4.length = 0;
gdjs.custom_32nightCode.GDia_95chiObjects1.length = 0;
gdjs.custom_32nightCode.GDia_95chiObjects2.length = 0;
gdjs.custom_32nightCode.GDia_95chiObjects3.length = 0;
gdjs.custom_32nightCode.GDia_95chiObjects4.length = 0;
gdjs.custom_32nightCode.GDia_95foxObjects1.length = 0;
gdjs.custom_32nightCode.GDia_95foxObjects2.length = 0;
gdjs.custom_32nightCode.GDia_95foxObjects3.length = 0;
gdjs.custom_32nightCode.GDia_95foxObjects4.length = 0;
gdjs.custom_32nightCode.GDbonObjects1.length = 0;
gdjs.custom_32nightCode.GDbonObjects2.length = 0;
gdjs.custom_32nightCode.GDbonObjects3.length = 0;
gdjs.custom_32nightCode.GDbonObjects4.length = 0;
gdjs.custom_32nightCode.GDfredObjects1.length = 0;
gdjs.custom_32nightCode.GDfredObjects2.length = 0;
gdjs.custom_32nightCode.GDfredObjects3.length = 0;
gdjs.custom_32nightCode.GDfredObjects4.length = 0;
gdjs.custom_32nightCode.GDchiObjects1.length = 0;
gdjs.custom_32nightCode.GDchiObjects2.length = 0;
gdjs.custom_32nightCode.GDchiObjects3.length = 0;
gdjs.custom_32nightCode.GDchiObjects4.length = 0;
gdjs.custom_32nightCode.GDfoxObjects1.length = 0;
gdjs.custom_32nightCode.GDfoxObjects2.length = 0;
gdjs.custom_32nightCode.GDfoxObjects3.length = 0;
gdjs.custom_32nightCode.GDfoxObjects4.length = 0;
gdjs.custom_32nightCode.GDreadyObjects1.length = 0;
gdjs.custom_32nightCode.GDreadyObjects2.length = 0;
gdjs.custom_32nightCode.GDreadyObjects3.length = 0;
gdjs.custom_32nightCode.GDreadyObjects4.length = 0;
gdjs.custom_32nightCode.GDUPObjects1.length = 0;
gdjs.custom_32nightCode.GDUPObjects2.length = 0;
gdjs.custom_32nightCode.GDUPObjects3.length = 0;
gdjs.custom_32nightCode.GDUPObjects4.length = 0;
gdjs.custom_32nightCode.GDDOWNObjects1.length = 0;
gdjs.custom_32nightCode.GDDOWNObjects2.length = 0;
gdjs.custom_32nightCode.GDDOWNObjects3.length = 0;
gdjs.custom_32nightCode.GDDOWNObjects4.length = 0;
gdjs.custom_32nightCode.GDfaderObjects1.length = 0;
gdjs.custom_32nightCode.GDfaderObjects2.length = 0;
gdjs.custom_32nightCode.GDfaderObjects3.length = 0;
gdjs.custom_32nightCode.GDfaderObjects4.length = 0;

gdjs.custom_32nightCode.eventsList6(runtimeScene);

return;

}

gdjs['custom_32nightCode'] = gdjs.custom_32nightCode;
