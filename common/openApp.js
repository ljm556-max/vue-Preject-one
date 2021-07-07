import CONFIG from "../app-config.js";

const COMFIG_OPEN = CONFIG?.openApp;
git remote add origin git@github.com:ljm556-max/vue-Prejects-one.git
export default function(){
	//#ifdef H5
	if(!COMFIG_OPEN) return;
	
	let openApp = document.createElement('div');//创建一个节点
	let openLogo = COMFIG_OPEN.logo?`<img src="${COMFIG_OPEN.logo}" style="width: 2rem;height: 2rem;border-radius: 3px;">` : '';
	openApp.id='openApp';
	openApp.style = `display: flex;align-items:center; position:fixed;top:0px;left:0px;bottom:0px;right:0px;padding-left:15px;background:#fff;width:100%;height:44px;box-shadow: #eeeeee 1px 1px 9px;z-index: 999;`
	openApp.innerHTML = `<div>${openLogo}</div>
						<div>${COMFIG_OPEN.appname}</div>`
	document.body.insertBefore(openApp, document.body.firstChild);
	//#endif
}