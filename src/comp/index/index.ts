import Vue from 'vue';
import Component from 'vue-class-component';
// import { Watch } from 'vue-property-decorator'

import ButtonComponent from '../button/button';
// import InputComponent from "../input/input";

// import './index.scss';
import * as Style from './index.scss';

import Showdown from 'showdown';

import Clipboard from 'clipboard';

Showdown.extension('prettify',function(){
	return [{
		type:   'output',
		filter: function (source) {
		  return source.replace(/(<pre[^>]*>)?[\n\s]?<code([^>]*)>/gi, function (match, pre, codeClass) {
			if (pre) {
			  return '<pre class="prettyprint linenums" style="font-size: 14px;line-height: 16px"><code' + codeClass + ' style="font-size: 14px;line-height: 16px">';
			} else {
			  return ' <code class="prettyprint code-in-text"  style="font-size: 16px;line-height: 18px">';
			}
		  });
		}
	  }];
})

let prettify = require('../../js/google-code-prettify/prettify');

@Component({
	template: require('./index.html'),
	components: {
		"button-comp":ButtonComponent,
		// "Input": InputComponent
	},
    props: {} 
})

export default class IndexComponent extends Vue {
	Sytles = Style

	// inital data
	url:string = "//md.imbeta.cn/text.md"
	editorText = ""

	converter = new Showdown.Converter({"extensions":["prettify"] ,"tables":true, "tasklists":true})

	// lifecycle hook
	mounted () {
		new Clipboard("#copy-btn");
		this.loadInitMD()
	}
	updated(){
		prettify.prettyPrint();
	}

	// computed 
	get textHtml () {
		return this.converter.makeHtml(this.editorText)
	}

	async loadInitMD(){
		try {
			let response = await fetch(this.url, { mode: 'cors'});
			let data = await response.text();
			// console.log(data);
			this.editorText = data;
		  } catch(e) {
			console.log("Load init md error", e);
		  }
	}

}