var gdjs;(function(n){const i=GlobalPIXIModule.PIXI;n.PixiFiltersTools.registerFilterCreator("Displacement",{makePIXIFilter:function(a,e){const t=a.getRuntimeScene().getGame().getImageManager().getPIXITexture(e.stringParameters.displacementMapTexture);t.baseTexture.wrapMode=i.WRAP_MODES.REPEAT;const r=new i.Sprite(t);return new i.filters.DisplacementFilter(r)},updatePreRender:function(a,e){},updateDoubleParameter:function(a,e,t){const r=a;e==="scaleX"&&(r.scale.x=t),e==="scaleY"&&(r.scale.y=t)},updateStringParameter:function(a,e,t){},updateBooleanParameter:function(a,e,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=displacement-pixi-filter.js.map