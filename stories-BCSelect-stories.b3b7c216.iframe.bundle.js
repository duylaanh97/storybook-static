"use strict";(self.webpackChunkbuildcorp_uikits=self.webpackChunkbuildcorp_uikits||[]).push([[246],{"./src/stories/BCSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BCSelect_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@fluentui/font-icons-mdl2/lib/index.js"),ComboBox=__webpack_require__("./node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BCSelect=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Select/BCSelect.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BCSelect.A,options);BCSelect.A&&BCSelect.A.locals&&BCSelect.A.locals;(0,lib.v)();const BCSelect_BCSelect=props=>{const{placeholder,label,options,errorMessage,styles,isMulti,isDisabled,className,isRequired,handleChange,value,...rest}=props,[filteredOptions,setFilteredOptions]=(0,react.useState)(options),comboBoxRef=(0,react.useRef)(null);return react.createElement("div",null,react.createElement(ComboBox.a,{componentRef:comboBoxRef,className:`${className} custom-comboBox`,label:label||"",options:filteredOptions,required:isRequired,autoComplete:"on",allowFreeform:!0,placeholder:placeholder||"",multiSelect:isMulti,errorMessage:errorMessage||"",disabled:isDisabled,onInput:(event,value)=>(event=>{const searchString=event.target.value,searchTerm=searchString?searchString.toLowerCase():"",resultOptions=options.filter((opt=>opt.text.toLowerCase().includes(searchTerm)));setFilteredOptions(resultOptions)})(event),onClick:()=>{comboBoxRef&&comboBoxRef.current?.focus(!0)},styles:{container:{maxWidth:"100%",ComboBox:{"::after":{border:"2px solid #69be28 !important"}}},...styles},onChange:(event,option,index,value)=>{option&&(option=>{option&&handleChange(option)})(option)},defaultSelectedKey:value?value.key:"",...rest}))},components_Select_BCSelect=BCSelect_BCSelect;BCSelect_BCSelect.__docgenInfo={description:"",methods:[],displayName:"BCSelect",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"IComboBoxOption"}],raw:"IComboBoxOption[]"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"any"},description:""},isMulti:{required:!1,tsType:{name:"boolean"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!0,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: IComboBoxOption) => void | undefined",signature:{arguments:[{type:{name:"IComboBoxOption"},name:"option"}],return:{name:"union",raw:"void | undefined",elements:[{name:"void"},{name:"undefined"}]}}},description:""},value:{required:!1,tsType:{name:"IComboBoxOption"},description:""}},composes:["IComboBoxProps"]};const BCSelect_stories={title:"Example/BCSelect",component:components_Select_BCSelect},Default=(args=>react.createElement("div",{style:{width:"300px"}},react.createElement(components_Select_BCSelect,args))).bind({});Default.args={options:[{key:"apple",text:"Apple"},{key:"banana",text:"Banana"},{key:"orange",text:"Orange"},{key:"grape",text:"Grape"},{key:"broccoli",text:"Broccoli"},{key:"carrot",text:"Carrot"},{key:"lettuce",text:"Lettuce"}],placeholder:"...Select an option",label:"Select box",isDisabled:!1,value:{key:"apple",text:"Apple"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: BCSelectProps) => <div style={{\n  width: '300px'\n}}>\r\n        <BCSelect {...args} />\r\n    </div>",...Default.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Select/BCSelect.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".custom-comboBox .ms-ComboBox.is-open::after {\n    border: 2px solid #69be28 !important;\n}\n\n.custom-comboBox .ms-ComboBox::after {\n    border: 2px solid #605e5c !important;\n}","",{version:3,sources:["webpack://./src/components/Select/BCSelect.css"],names:[],mappings:"AAAA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC",sourcesContent:[".custom-comboBox .ms-ComboBox.is-open::after {\r\n    border: 2px solid #69be28 !important;\r\n}\r\n\r\n.custom-comboBox .ms-ComboBox::after {\r\n    border: 2px solid #605e5c !important;\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);