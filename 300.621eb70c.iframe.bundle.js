"use strict";(self.webpackChunkbuildcorp_uikits=self.webpackChunkbuildcorp_uikits||[]).push([[300],{"./node_modules/@fluentui/react-hooks/lib/useControllableValue.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useControllableValue});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useConst__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fluentui/react-hooks/lib/useConst.js");function useControllableValue(controlledValue,defaultUncontrolledValue,onChange){var _a=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultUncontrolledValue),value=_a[0],setValue=_a[1],isControlled=(0,_useConst__WEBPACK_IMPORTED_MODULE_1__.d)(void 0!==controlledValue),currentValue=isControlled?controlledValue:value,valueRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(currentValue),onChangeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(onChange);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){valueRef.current=currentValue,onChangeRef.current=onChange}));var setValueOrCallOnChange=(0,_useConst__WEBPACK_IMPORTED_MODULE_1__.d)((function(){return function(update,ev){var newValue="function"==typeof update?update(valueRef.current):update;onChangeRef.current&&onChangeRef.current(ev,newValue),isControlled||setValue(newValue)}}));return[currentValue,setValueOrCallOnChange]}},"./node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var styled=__webpack_require__("./node_modules/@fluentui/utilities/lib/styled.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),useId=__webpack_require__("./node_modules/@fluentui/react-hooks/lib/useId.js"),useMergedRefs=__webpack_require__("./node_modules/@fluentui/react-hooks/lib/useMergedRefs.js"),useControllableValue=__webpack_require__("./node_modules/@fluentui/react-hooks/lib/useControllableValue.js"),classNamesFunction=__webpack_require__("./node_modules/@fluentui/utilities/lib/classNamesFunction.js"),useFocusRects=__webpack_require__("./node_modules/@fluentui/utilities/lib/useFocusRects.js"),Icon=__webpack_require__("./node_modules/@fluentui/react/lib/components/Icon/Icon.js"),getClassNames=(0,classNamesFunction.Z)(),CheckboxBase=react.forwardRef((function(props,forwardedRef){var disabled=props.disabled,required=props.required,inputProps=props.inputProps,name=props.name,ariaLabel=props.ariaLabel,ariaLabelledBy=props.ariaLabelledBy,ariaDescribedBy=props.ariaDescribedBy,ariaPositionInSet=props.ariaPositionInSet,ariaSetSize=props.ariaSetSize,title=props.title,checkmarkIconProps=props.checkmarkIconProps,styles=props.styles,theme=props.theme,className=props.className,_a=props.boxSide,boxSide=void 0===_a?"start":_a,id=(0,useId.B)("checkbox-",props.id),rootRef=react.useRef(null),mergedRootRefs=(0,useMergedRefs.a)(rootRef,forwardedRef),inputRef=react.useRef(null),_b=(0,useControllableValue.k)(props.checked,props.defaultChecked,props.onChange),isChecked=_b[0],setIsChecked=_b[1],_c=(0,useControllableValue.k)(props.indeterminate,props.defaultIndeterminate),isIndeterminate=_c[0],setIsIndeterminate=_c[1];(0,useFocusRects.vk)(rootRef),function useDebugWarning(props){0}();var classNames=getClassNames(styles,{theme,className,disabled,indeterminate:isIndeterminate,checked:isChecked,reversed:"start"!==boxSide,isUsingCustomLabelRender:!!props.onRenderLabel}),onChange=react.useCallback((function(event){isIndeterminate?(setIsChecked(!!isChecked,event),setIsIndeterminate(!1)):setIsChecked(!isChecked,event)}),[setIsChecked,setIsIndeterminate,isIndeterminate,isChecked]),defaultLabelRenderer=react.useCallback((function(checkboxProps){return checkboxProps&&checkboxProps.label?react.createElement("span",{className:classNames.text,title:checkboxProps.title},checkboxProps.label):null}),[classNames.text]),setNativeIndeterminate=react.useCallback((function(indeterminate){if(inputRef.current){var value=!!indeterminate;inputRef.current.indeterminate=value,setIsIndeterminate(value)}}),[setIsIndeterminate]);!function useComponentRef(props,isChecked,isIndeterminate,setIndeterminate,checkBoxRef){react.useImperativeHandle(props.componentRef,(function(){return{get checked(){return!!isChecked},get indeterminate(){return!!isIndeterminate},set indeterminate(indeterminate){setIndeterminate(indeterminate)},focus:function(){checkBoxRef.current&&checkBoxRef.current.focus()}}}),[checkBoxRef,isChecked,isIndeterminate,setIndeterminate])}(props,isChecked,isIndeterminate,setNativeIndeterminate,inputRef),react.useEffect((function(){return setNativeIndeterminate(isIndeterminate)}),[setNativeIndeterminate,isIndeterminate]);var onRenderLabel=props.onRenderLabel||defaultLabelRenderer,ariaChecked=isIndeterminate?"mixed":void 0,mergedInputProps=(0,tslib_es6.Cl)((0,tslib_es6.Cl)({className:classNames.input,type:"checkbox"},inputProps),{checked:!!isChecked,disabled,required,name,id,title,onChange,"aria-disabled":disabled,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-describedby":ariaDescribedBy,"aria-posinset":ariaPositionInSet,"aria-setsize":ariaSetSize,"aria-checked":ariaChecked});return react.createElement("div",{className:classNames.root,title,ref:mergedRootRefs},react.createElement("input",(0,tslib_es6.Cl)({},mergedInputProps,{ref:inputRef,title,"data-ktp-execute-target":!0})),react.createElement("label",{className:classNames.label,htmlFor:id},react.createElement("div",{className:classNames.checkbox,"data-ktp-target":!0},react.createElement(Icon.I,(0,tslib_es6.Cl)({iconName:"CheckMark"},checkmarkIconProps,{className:classNames.checkmark}))),onRenderLabel(props,defaultLabelRenderer)))}));CheckboxBase.displayName="CheckboxBase";var lib=__webpack_require__("./node_modules/@fluentui/style-utilities/lib/index.js"),setFocusVisibility=__webpack_require__("./node_modules/@fluentui/utilities/lib/setFocusVisibility.js"),GlobalClassNames={root:"ms-Checkbox",label:"ms-Checkbox-label",checkbox:"ms-Checkbox-checkbox",checkmark:"ms-Checkbox-checkmark",text:"ms-Checkbox-text"},Checkbox=(0,styled.I)(CheckboxBase,(function(props){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,className=props.className,theme=props.theme,reversed=props.reversed,checked=props.checked,disabled=props.disabled,isUsingCustomLabelRender=props.isUsingCustomLabelRender,indeterminate=props.indeterminate,semanticColors=theme.semanticColors,effects=theme.effects,palette=theme.palette,fonts=theme.fonts,classNames=(0,lib.Km)(GlobalClassNames,theme),checkmarkFontColor=semanticColors.inputForegroundChecked,checkmarkFontColorHovered=palette.neutralSecondary,checkboxBorderColor=palette.neutralPrimary,checkboxBorderIndeterminateColor=semanticColors.inputBackgroundChecked,checkboxBorderColorChecked=semanticColors.inputBackgroundChecked,checkboxBorderColorDisabled=semanticColors.disabledBodySubtext,checkboxBorderHoveredColor=semanticColors.inputBorderHovered,checkboxBorderIndeterminateHoveredColor=semanticColors.inputBackgroundCheckedHovered,checkboxBackgroundChecked=semanticColors.inputBackgroundChecked,checkboxBackgroundCheckedHovered=semanticColors.inputBackgroundCheckedHovered,checkboxBorderColorCheckedHovered=semanticColors.inputBackgroundCheckedHovered,checkboxHoveredTextColor=semanticColors.inputTextHovered,checkboxBackgroundDisabledChecked=semanticColors.disabledBodySubtext,checkboxTextColor=semanticColors.bodyText,checkboxTextColorDisabled=semanticColors.disabledText,indeterminateDotStyles=[(_a={content:'""',borderRadius:effects.roundedCorner2,position:"absolute",width:10,height:10,top:4,left:4,boxSizing:"border-box",borderWidth:5,borderStyle:"solid",borderColor:disabled?checkboxBorderColorDisabled:checkboxBorderIndeterminateColor,transitionProperty:"border-width, border, border-color",transitionDuration:"200ms",transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)"},_a[lib.up]={borderColor:"WindowText"},_a)];return{root:[classNames.root,{position:"relative",display:"flex"},reversed&&"reversed",checked&&"is-checked",!disabled&&"is-enabled",disabled&&"is-disabled",!disabled&&[!checked&&(_b={},_b[":hover .".concat(classNames.checkbox)]=(_c={borderColor:checkboxBorderHoveredColor},_c[lib.up]={borderColor:"Highlight"},_c),_b[":focus .".concat(classNames.checkbox)]={borderColor:checkboxBorderHoveredColor},_b[":hover .".concat(classNames.checkmark)]=(_d={color:checkmarkFontColorHovered,opacity:"1"},_d[lib.up]={color:"Highlight"},_d),_b),checked&&!indeterminate&&(_e={},_e[":hover .".concat(classNames.checkbox)]={background:checkboxBackgroundCheckedHovered,borderColor:checkboxBorderColorCheckedHovered},_e[":focus .".concat(classNames.checkbox)]={background:checkboxBackgroundCheckedHovered,borderColor:checkboxBorderColorCheckedHovered},_e[lib.up]=(_f={},_f[":hover .".concat(classNames.checkbox)]={background:"Highlight",borderColor:"Highlight"},_f[":focus .".concat(classNames.checkbox)]={background:"Highlight"},_f[":focus:hover .".concat(classNames.checkbox)]={background:"Highlight"},_f[":focus:hover .".concat(classNames.checkmark)]={color:"Window"},_f[":hover .".concat(classNames.checkmark)]={color:"Window"},_f),_e),indeterminate&&(_g={},_g[":hover .".concat(classNames.checkbox,", :hover .").concat(classNames.checkbox,":after")]=(_h={borderColor:checkboxBorderIndeterminateHoveredColor},_h[lib.up]={borderColor:"WindowText"},_h),_g[":focus .".concat(classNames.checkbox)]={borderColor:checkboxBorderIndeterminateHoveredColor},_g[":hover .".concat(classNames.checkmark)]={opacity:"0"},_g),(_j={},_j[":hover .".concat(classNames.text,", :focus .").concat(classNames.text)]=(_k={color:checkboxHoveredTextColor},_k[lib.up]={color:disabled?"GrayText":"WindowText"},_k),_j)],className],input:(_l={position:"absolute",background:"none",opacity:0},_l[".".concat(setFocusVisibility.Y2," &:focus + label::before, :host(.").concat(setFocusVisibility.Y2,") &:focus + label::before")]=(_m={outline:"1px solid "+theme.palette.neutralSecondary,outlineOffset:"2px"},_m[lib.up]={outline:"1px solid WindowText"},_m),_l),label:[classNames.label,theme.fonts.medium,{display:"flex",alignItems:isUsingCustomLabelRender?"center":"flex-start",cursor:disabled?"default":"pointer",position:"relative",userSelect:"none"},reversed&&{flexDirection:"row-reverse",justifyContent:"flex-end"},{"&::before":{position:"absolute",left:0,right:0,top:0,bottom:0,content:'""',pointerEvents:"none"}}],checkbox:[classNames.checkbox,(_o={position:"relative",display:"flex",flexShrink:0,alignItems:"center",justifyContent:"center",height:"20px",width:"20px",border:"1px solid ".concat(checkboxBorderColor),borderRadius:effects.roundedCorner2,boxSizing:"border-box",transitionProperty:"background, border, border-color",transitionDuration:"200ms",transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",overflow:"hidden",":after":indeterminate?indeterminateDotStyles:null},_o[lib.up]=(0,tslib_es6.Cl)({borderColor:"WindowText"},(0,lib.Qg)()),_o),indeterminate&&{borderColor:checkboxBorderIndeterminateColor},reversed?{marginLeft:4}:{marginRight:4},!disabled&&!indeterminate&&checked&&(_p={background:checkboxBackgroundChecked,borderColor:checkboxBorderColorChecked},_p[lib.up]={background:"Highlight",borderColor:"Highlight"},_p),disabled&&(_q={borderColor:checkboxBorderColorDisabled},_q[lib.up]={borderColor:"GrayText"},_q),checked&&disabled&&(_r={background:checkboxBackgroundDisabledChecked,borderColor:checkboxBorderColorDisabled},_r[lib.up]={background:"Window"},_r)],checkmark:[classNames.checkmark,(_s={opacity:checked&&!indeterminate?"1":"0",color:checkmarkFontColor},_s[lib.up]=(0,tslib_es6.Cl)({color:disabled?"GrayText":"Window"},(0,lib.Qg)()),_s)],text:[classNames.text,(_t={color:disabled?checkboxTextColorDisabled:checkboxTextColor,fontSize:fonts.medium.fontSize,lineHeight:"20px"},_t[lib.up]=(0,tslib_es6.Cl)({color:disabled?"GrayText":"WindowText"},(0,lib.Qg)()),_t),reversed?{marginRight:4}:{marginLeft:4}]}}),void 0,{scope:"Checkbox"})},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);