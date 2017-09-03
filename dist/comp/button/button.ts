import Vue from 'vue';
import Component from 'vue-class-component';

import './button.scss';

@Component({
    template: require('./button.html'),
    props: {
		disabled: Boolean,
    }
})

export default class ButtonComponent extends Vue {
    name = 'Button'

	handleClick (event) {
		console.log("emit click");
		this.$emit('click', event);
	}

}