!function(){function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireae22,a=t("6Ti1v"),n=t("3zkYw"),r=e(n()),i=t("79Fpz"),l=t("1GGle"),o=t("5voyr"),c=t("1LkH9"),s=t("12ama"),u=t("3VZq1"),d=t("7LIUJ"),m=t("2OCCg"),p=t("74wOy"),f=t("6cQB3"),g=t("3bDMa"),h=t("5aajE"),E=t("r2rEh"),b=t("6yb99"),v=t("4srRo"),y=t("5hVKb"),C=t("2Ils1"),w=t("6mF1O"),x=t("3CkBd"),T=t("38VVJ"),S=t("2CXKv"),G=(e(S()),t("5hdLc")),H=t("6dxZ9"),I=t("7koHP"),k=t("5L227"),L=t("3fzRJ"),M=t("63lN9"),A={};var F=function(e){var t=A[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t};(function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)A[t[a]]=e[t[a]]})(JSON.parse('{"6eB9C":"Subpages/subPageDeveloper.cf93b201.js","5t2ni":"SuperTom.662228a1.webp","27jf6":"SuperKevin.d98b4e01.webp","4U819":"Subpages/subPageDeveloper.fcfce0aa.js"}')),a(),a(),n(),i(),l(),o(),c(),s(),u(),d(),m(),p(),f(),g(),h(),E(),b(),a(),i(),l(),u(),v(),y(),C(),w(),x(),T(),a(),S(),G(),H(),I(),k(),L();var N,R,_;function j(e){return H().generateUtilityClass("MuiListItemAvatar",e)}H(),N={},R="getListItemAvatarUtilityClass",_=function(){return j},Object.defineProperty(N,R,{get:_,enumerable:!0});H().generateUtilityClasses("MuiListItemAvatar",["root","alignItemsFlexStart"]);M();const B=["className"],D=k().default("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:a}=e;return T().default({},t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart)}})((({styleProps:e})=>T().default({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),P=a().forwardRef((function(e,t){const n=L().default({props:e,name:"MuiListItemAvatar"}),{className:r}=n,i=x().default(n,B),l=a().useContext(I().default),o=T().default({},n,{alignItems:l.alignItems}),c=(e=>{const{alignItems:t,classes:a}=e,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return H().unstable_composeClasses(n,j,a)})(o);return M().jsx(D,T().default({className:G().default(c.root,r),styleProps:o,ref:t},i))}));var Q=null;var J,Z=function(){return Q||(Q=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return(""+e[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}()),Q},W=F;function O(e){if(""===e)return".";var t="/"===e[e.length-1]?e.slice(0,e.length-1):e,a=t.lastIndexOf("/");return-1===a?".":t.slice(0,a)}function Y(e,t){if(e===t)return"";var a=e.split("/");"."===a[0]&&a.shift();var n,r,i=t.split("/");for("."===i[0]&&i.shift(),n=0;(n<i.length||n<a.length)&&null==r;n++)a[n]!==i[n]&&(r=n);var l=[];for(n=0;n<a.length-r;n++)l.push("..");return i.length>r&&l.push.apply(l,i.slice(r)),l.join("/")}(J=function(e,t){return Y(O(W(e)),W(t))})._dirname=O,J._relative=Y;var z=e(Z()+J("6eB9C","5t2ni")),U=e(Z()+J("6eB9C","27jf6"));const X=[{name:"TanChuPing",position:["XiangMuCeHua","XiangMuFuZeRen","QianDuanSheJi","ZuJianGongNeng","QianHouDuanJiaoHu","ZiLiao","FanYi"],email:"tanchuping@i.pkuschool.edu.cn",githubpage:"https://github.com/DaltonWritingCenter"}],K=[{name:"ZhaiYuQing",position:["JiChuKuangJia","QianDuanSheJi","HouQiWeiHu","FanYi","ZiLiao"],head:U},{name:"JingGe",position:["XuanChuan","ZiLiao"]},{name:"HeTianYang",position:["XuanChuan","ZiLiao"]}],V={TanChuPing:z,ZhaiYuQing:U},q=l().makeStyles((e=>({card:{padding:e.spacing(1,2,1.5)},CardMedia:{margi:"auto"},avatar:{height:e.spacing(8),width:e.spacing(8)},chip:{userSelect:"none",boxShadow:"none !important"},gridContainer:{width:"100%",margin:e.spacing(0)},gridItem:{flexGrow:1}})));function $(){const e=q(),t=i().useTheme(),{t:n}=u().useTranslation("developer");let{between:r,down:l,up:o,values:c}=t.breakpoints,{desktop:s,laptop:d}=c,m=i().useMediaQuery(o(s));i().useMediaQuery(r(d,s)),i().useMediaQuery(l(d));return a().createElement(a().Fragment,null,a().createElement(i().Box,{padding:"20px"},a().createElement(i().Typography,{variant:"h4",textAlign:"center",paddingTop:"15px"},n("Team"))),a().createElement(i().Box,{width:1,padding:t.spacing(3)},a().createElement(i().Grid,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:4},X.map((({name:r,position:l,email:o,githubpage:c})=>a().createElement(i().Grid,{direction:"row",justifyContent:"space-evenly",item:!0,container:!0,className:e.gridItem,key:r},a().createElement(i().Grid,{item:!0},a().createElement(i().Card,{sx:{maxWidth:m?580:350},variant:"outlined",className:e.card},a().createElement(i().CardHeader,{avatar:a().createElement(i().Avatar,{className:e.avatar,src:V[r]}),title:a().createElement(i().Box,{paddingBottom:t.spacing(.5)},a().createElement(i().Grid,{container:!0,spacing:1,wrap:"nowrap"},a().createElement(i().Grid,{item:!0},a().createElement(i().Box,{fontWeight:"bold",component:"span",whiteSpace:"nowrap"},a().createElement(i().Typography,{variant:"h4"},n(r)))))),subheader:a().createElement(i().Grid,{container:!0,spacing:.5},l.map(((t,r)=>a().createElement(i().Grid,{item:!0,key:t},a().createElement(i().Chip,{label:n(t),className:e.chip,clickable:!0,size:"small",variant:"outlined",color:"primary"}))))),titleTypographyProps:{variant:"h4"}}),a().createElement(i().CardContent,null,a().createElement(i().Grid,{container:!0,spacing:2},a().createElement(i().Grid,{item:!0},a().createElement(i().Typography,null,n("LianXi")+": "," ",a().createElement(i().Box,{component:"span",fontWeight:"bold"},o))))),a().createElement(i().CardActions,null,a().createElement(i().Grid,{container:!0,justifyContent:"flex-end"},a().createElement(i().Button,{color:"primary",disableElevation:!0,variant:"contained",href:c},n("FangWenGithub")))))),a().createElement(i().Grid,{item:!0},K.map((({name:t,position:r,head:l})=>a().createElement(i().Paper,{variant:"outlined",sx:{maxWidth:m?550:350}},a().createElement(y().default,{sx:{width:"100%",maxWidth:m?530:350,bgcolor:"background.paper"}},a().createElement(C().default,{alignItems:"flex-start"},a().createElement(P,null,a().createElement(i().Avatar,{alt:"Remy Sharp",src:l})),a().createElement(w().default,{primary:n(t),secondary:a().createElement(a().Fragment,null,a().createElement(i().Grid,{container:!0,spacing:.5},r.map(((t,r)=>a().createElement(i().Grid,{item:!0,key:t},a().createElement(i().Chip,{label:n(t),className:e.chip,clickable:!0,size:"small",variant:"outlined",color:"primary"}))))))})))))))))))),a().createElement(v().default,{variant:"middle"}))}const ee=l().makeStyles((e=>({})));function te(){const[e,t]=a().useState(d().default.LIGHT),[n,r]=a().useState(m().default.zh_CN),l=i().useMediaQuery("(prefers-color-scheme: dark)"),{t:s,i18n:g}=(ee(),u().useTranslation("index"));return a().useEffect((()=>{console.log("THEME MEDIA QUERY CHANGE DETECTED"),t(l?d().default.DARK:d().default.LIGHT)}),[l]),a().useEffect((()=>{console.log("THEME CHANGE DETECTED"),f().default(e)}),[e]),a().useEffect((()=>{g.changeLanguage(n,(()=>{document.title=s("websiteTitle")}))}),[n]),console.log("modeType: "+e),a().createElement(c().default,{injectFirst:!0},a().createElement(o().ThemeProvider,{theme:a().useMemo((()=>p().default(e,n)),[e,n])},a().createElement(i().CssBaseline,null),a().createElement(h().default,{onChangeLanguageType:function(e){r(e)},onChangeModeType:function(e){t(e)}}),a().createElement(b().default,null,a().createElement(E().default,null),a().createElement($,null))))}window.onload=function(){const e=document.querySelector("#container");r.render(a().createElement(a().Suspense,{fallback:" "},a().createElement(te,null)),e)}}();
//# sourceMappingURL=subPageDeveloper.cf93b201.js.map
