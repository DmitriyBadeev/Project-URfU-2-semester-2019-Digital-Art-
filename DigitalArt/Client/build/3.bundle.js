(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{42:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var Main=function(_React$Component){function Main(){return _classCallCheck(this,Main),_possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).apply(this,arguments))}return _inherits(Main,_React$Component),_createClass(Main,[{key:"componentDidMount",value:function(){this.props.getArtworks()}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("h1",null,"Главная страница"),this.props.isLoading?_react2.default.createElement("p",null,"Loading"):this.props.artworks.map(function(e,t){return _react2.default.createElement("ul",{key:t},_react2.default.createElement("li",null,_react2.default.createElement("img",{src:"data:image/JPEG;base64,"+e.art,alt:"art"})),_react2.default.createElement("li",null,e.name),_react2.default.createElement("li",null,e.description),_react2.default.createElement("li",null,e.author),_react2.default.createElement("li",null,e.date),_react2.default.createElement("li",null,e.countLikes),_react2.default.createElement("li",null,e.countComents))}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Main}(_react2.default.Component),_default=Main,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(Main,"Main","C:/Users/Admin/Desktop/Digital Art/DigitalArt/DigitalArt/Client/src/components/Main/Main.js"),reactHotLoader.register(_default,"default","C:/Users/Admin/Desktop/Digital Art/DigitalArt/DigitalArt/Client/src/components/Main/Main.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},56:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_Main=__webpack_require__(42),_Main2=_interopRequireDefault(_Main),_actions=__webpack_require__(27),_reactRouterDom=__webpack_require__(9),_reactRedux=__webpack_require__(10),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var MainContainer=function(_React$Component){function MainContainer(){return _classCallCheck(this,MainContainer),_possibleConstructorReturn(this,(MainContainer.__proto__||Object.getPrototypeOf(MainContainer)).apply(this,arguments))}return _inherits(MainContainer,_React$Component),_createClass(MainContainer,[{key:"render",value:function(){return _react2.default.createElement(_Main2.default,{artworks:this.props.artworks,getArtworks:this.props.getArtworks,isLoading:this.props.isLoading})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),MainContainer}(_react2.default.Component),mapStateToProps=function(e){return{artworks:e.main.artworks,isLoading:e.main.isLoading}},mapDispatchToProps=function(e){return{getArtworks:function(t){return e((0,_actions.getArtworks)(t))}}},_default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(MainContainer)),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(MainContainer,"MainContainer","C:/Users/Admin/Desktop/Digital Art/DigitalArt/DigitalArt/Client/src/components/Main/MainContainer.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:/Users/Admin/Desktop/Digital Art/DigitalArt/DigitalArt/Client/src/components/Main/MainContainer.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","C:/Users/Admin/Desktop/Digital Art/DigitalArt/DigitalArt/Client/src/components/Main/MainContainer.js"),reactHotLoader.register(_default,"default","C:/Users/Admin/Desktop/Digital Art/DigitalArt/DigitalArt/Client/src/components/Main/MainContainer.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))}}]);