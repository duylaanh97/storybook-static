"use strict";(self.webpackChunkbuildcorp_uikits=self.webpackChunkbuildcorp_uikits||[]).push([[985],{"./node_modules/@fluentui/react-hooks/lib/useConst.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useConst});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useConst(initialValue){var ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return void 0===ref.current&&(ref.current={value:"function"==typeof initialValue?initialValue():initialValue}),ref.current.value}},"./node_modules/@fluentui/react-hooks/lib/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fluentui/utilities/lib/getId.js");function useId(prefix,providedId){var ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(providedId);return ref.current||(ref.current=(0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.O)(prefix)),ref.current}},"./node_modules/@fluentui/utilities/lib/getId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>getId});var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fluentui/utilities/lib/dom/getWindow.js"),_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fluentui/merge-styles/lib/Stylesheet.js"),CURRENT_ID_PROPERTY="__currentId__",DEFAULT_ID_STRING="id__",_global=(0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.z)()||{};void 0===_global[CURRENT_ID_PROPERTY]&&(_global[CURRENT_ID_PROPERTY]=0);var _initializedStylesheetResets=!1;function getId(prefix){if(!_initializedStylesheetResets){var stylesheet=_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.nr.getInstance();stylesheet&&stylesheet.onReset&&stylesheet.onReset(resetIds),_initializedStylesheetResets=!0}var index=_global[CURRENT_ID_PROPERTY]++;return(void 0===prefix?DEFAULT_ID_STRING:prefix)+index}function resetIds(counter){void 0===counter&&(counter=0),_global[CURRENT_ID_PROPERTY]=counter}},"./node_modules/@fluentui/utilities/lib/useFocusRects.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MO:()=>FocusRects,dM:()=>FocusRectsContext,vk:()=>useFocusRects});var _a,react=__webpack_require__("./node_modules/react/index.js"),getWindow=__webpack_require__("./node_modules/@fluentui/utilities/lib/dom/getWindow.js"),KeyCodes=__webpack_require__("./node_modules/@fluentui/utilities/lib/KeyCodes.js"),DirectionalKeyCodes=((_a={})[KeyCodes.c.up]=1,_a[KeyCodes.c.down]=1,_a[KeyCodes.c.left]=1,_a[KeyCodes.c.right]=1,_a[KeyCodes.c.home]=1,_a[KeyCodes.c.end]=1,_a[KeyCodes.c.tab]=1,_a[KeyCodes.c.pageUp]=1,_a[KeyCodes.c.pageDown]=1,_a);function isDirectionalKeyCode(which){return!!DirectionalKeyCodes[which]}var setFocusVisibility=__webpack_require__("./node_modules/@fluentui/utilities/lib/setFocusVisibility.js"),mountCounters=new WeakMap,callbackMap=new WeakMap;function setMountCounters(key,delta){var newValue,currValue=mountCounters.get(key);return newValue=currValue?currValue+delta:1,mountCounters.set(key,newValue),newValue}function setCallbackMap(context){var callbacks=callbackMap.get(context);if(callbacks)return callbacks;return callbacks={onMouseDown:function(ev){return _onMouseDown(ev,context.registeredProviders)},onPointerDown:function(ev){return _onPointerDown(ev,context.registeredProviders)},onKeyDown:function(ev){return _onKeyDown(ev,context.registeredProviders)},onKeyUp:function(ev){return _onKeyUp(ev,context.registeredProviders)}},callbackMap.set(context,callbacks),callbacks}var FocusRectsContext=react.createContext(void 0);function useFocusRects(rootRef){var context=react.useContext(FocusRectsContext);react.useEffect((function(){var _a,_b,_c,_d,win=(0,getWindow.z)(null==rootRef?void 0:rootRef.current);if(win&&!0!==(null===(_a=win.FabricConfig)||void 0===_a?void 0:_a.disableFocusRects)){var onMouseDown,onPointerDown,onKeyDown,onKeyUp,el=win;if((null===(_b=null==context?void 0:context.providerRef)||void 0===_b?void 0:_b.current)&&(null===(_d=null===(_c=null==context?void 0:context.providerRef)||void 0===_c?void 0:_c.current)||void 0===_d?void 0:_d.addEventListener)){el=context.providerRef.current;var callbacks=setCallbackMap(context);onMouseDown=callbacks.onMouseDown,onPointerDown=callbacks.onPointerDown,onKeyDown=callbacks.onKeyDown,onKeyUp=callbacks.onKeyUp}else onMouseDown=_onMouseDown,onPointerDown=_onPointerDown,onKeyDown=_onKeyDown,onKeyUp=_onKeyUp;var count=setMountCounters(el,1);return count<=1&&(el.addEventListener("mousedown",onMouseDown,!0),el.addEventListener("pointerdown",onPointerDown,!0),el.addEventListener("keydown",onKeyDown,!0),el.addEventListener("keyup",onKeyUp,!0)),function(){var _a;win&&!0!==(null===(_a=win.FabricConfig)||void 0===_a?void 0:_a.disableFocusRects)&&0===(count=setMountCounters(el,-1))&&(el.removeEventListener("mousedown",onMouseDown,!0),el.removeEventListener("pointerdown",onPointerDown,!0),el.removeEventListener("keydown",onKeyDown,!0),el.removeEventListener("keyup",onKeyUp,!0))}}}),[context,rootRef])}var FocusRects=function(props){return useFocusRects(props.rootRef),null};function _onMouseDown(ev,registeredProviders){(0,setFocusVisibility.Fy)(!1,ev.target,registeredProviders)}function _onPointerDown(ev,registeredProviders){"mouse"!==ev.pointerType&&(0,setFocusVisibility.Fy)(!1,ev.target,registeredProviders)}function _onKeyDown(ev,registeredProviders){isDirectionalKeyCode(ev.which)&&(0,setFocusVisibility.Fy)(!0,ev.target,registeredProviders)}function _onKeyUp(ev,registeredProviders){isDirectionalKeyCode(ev.which)&&(0,setFocusVisibility.Fy)(!0,ev.target,registeredProviders)}},"./src/stories/BCCheckBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CustomStyle:()=>CustomStyle,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BCCheckBox_stories});var react=__webpack_require__("./node_modules/react/index.js"),Checkbox=__webpack_require__("./node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BCCheckBox=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/CheckBox/BCCheckBox.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BCCheckBox.A,options);BCCheckBox.A&&BCCheckBox.A.locals&&BCCheckBox.A.locals;const BCCheckBox_BCCheckBox=props=>react.createElement(Checkbox.S,props),components_CheckBox_BCCheckBox=BCCheckBox_BCCheckBox;BCCheckBox_BCCheckBox.__docgenInfo={description:"",methods:[],displayName:"BCCheckBox"};const BCCheckBox_stories={title:"Components/BCCheckBox",component:components_CheckBox_BCCheckBox,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},Template=args=>react.createElement(components_CheckBox_BCCheckBox,args),Default=Template.bind({});Default.args={label:"Default Checkbox",checked:!1,disabled:!1};const Checked=Template.bind({});Checked.args={label:"Checked Checkbox",checked:!0,disabled:!1};const Disabled=Template.bind({});Disabled.args={label:"Disabled Checkbox",checked:!1,disabled:!0};const CustomStyle=Template.bind({});CustomStyle.args={label:"Custom Styled Checkbox",checked:!0,disabled:!1,className:"bc-checkbox"};const __namedExportsOrder=["Default","Checked","Disabled","CustomStyle"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ICheckboxProps) => <BCCheckBox {...args} />",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"(args: ICheckboxProps) => <BCCheckBox {...args} />",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"(args: ICheckboxProps) => <BCCheckBox {...args} />",...Disabled.parameters?.docs?.source}}},CustomStyle.parameters={...CustomStyle.parameters,docs:{...CustomStyle.parameters?.docs,source:{originalSource:"(args: ICheckboxProps) => <BCCheckBox {...args} />",...CustomStyle.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/CheckBox/BCCheckBox.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".bc-checkbox.is-checked .ms-Checkbox-checkbox {\n    background-color: #3c8a2e;\n    border: 1px solid #3c8a2e;\n}","",{version:3,sources:["webpack://./src/components/CheckBox/BCCheckBox.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B",sourcesContent:[".bc-checkbox.is-checked .ms-Checkbox-checkbox {\r\n    background-color: #3c8a2e;\r\n    border: 1px solid #3c8a2e;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);