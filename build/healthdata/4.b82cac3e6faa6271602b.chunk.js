webpackJsonp([4],{"./app/components/H1/index.js":function(e,t,n){"use strict";var a=n("./node_modules/styled-components/dist/styled-components.es.js"),i=a.a.h1.withConfig({displayName:"H1__H1"})(["font-size: 2.2em;margin-bottom: 20px;"]);t.a=i},"./app/containers/FeaturePage/List.js":function(e,t,n){"use strict";var a=n("./node_modules/styled-components/dist/styled-components.es.js");a.a.ul.withConfig({displayName:"List__List"})(["font-family: Georgia, Times, 'Times New Roman', serif;padding-left: 1.75em;"])},"./app/containers/FeaturePage/ListItem.js":function(e,t,n){"use strict";var a=n("./node_modules/styled-components/dist/styled-components.es.js");a.a.li.withConfig({displayName:"ListItem__ListItem"})(["margin: 1em 0;"])},"./app/containers/FeaturePage/ListItemTitle.js":function(e,t,n){"use strict";var a=n("./node_modules/styled-components/dist/styled-components.es.js");a.a.p.withConfig({displayName:"ListItemTitle__ListItemTitle"})(["font-weight: bold;"])},"./app/containers/FeaturePage/index.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/react.js"),s=n.n(r),l=n("./node_modules/react-helmet/lib/Helmet.js"),p=(n.n(l),n("./node_modules/react-intl/lib/index.es.js")),c=n("./app/components/H1/index.js"),u=n("./app/containers/FeaturePage/messages.js"),d=(n("./app/containers/FeaturePage/List.js"),n("./app/containers/FeaturePage/ListItem.js"),n("./app/containers/FeaturePage/ListItemTitle.js"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,a,i){var o=t&&t.defaultProps,r=arguments.length-3;if(n||0===r||(n={}),n&&o)for(var s in o)void 0===n[s]&&(n[s]=o[s]);else n||(n=o||{});if(1===r)n.children=i;else if(r>1){for(var l=Array(r),p=0;p<r;p++)l[p]=arguments[p+3];n.children=l}return{$$typeof:e,type:t,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}()),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=d(l.Helmet,{},void 0,d("title",{},void 0,"About"),d("meta",{name:"description",content:"About Interra Data"})),y=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return d("div",{style:{padding:"20px 50px",lineHeight:"2.5em",maxWidth:"700px"}},void 0,m,d(c.a,{},void 0,s.a.createElement(p.c,u.a.header)),s.a.createElement(p.c,u.a.esplain))}}]),t}(s.a.Component);t.default=y},"./app/containers/FeaturePage/messages.js":function(e,t,n){"use strict";var a=n("./node_modules/react-intl/lib/index.es.js");t.a=n.i(a.d)({header:{id:"boilerplate.containers.FeaturePage.header",defaultMessage:"Features"},esplain:{id:"boilerplate.containers.FeaturePage.esplain",defaultMessage:"This is an early dev version of Interra Data. Interra Data dramatically reduces the barrier to publishing Open Data. Organizations with limited budgets can use Interra Data to publish open data for free. Larger organizations with more complex use cases can use Interra Data as part of a services-oriented approach to sharing metadata and creating rich interative experiences with data repositories."}})}});