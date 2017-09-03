import Vue from 'vue';
import Component from 'vue-class-component';

// import './input.scss';

@Component({
    template: require('./input.html'),
    props: {
        disabled: Boolean,
        placeHolder: {
            type: String,
            default:  "Input Something"
        }
    }
})

export default class InputComponent extends Vue {
    name: 'Input'
    currentValue = ""

    handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);
        this.currentValue = value;
        this.$emit('on-change', event);
    }

	handleEnter(event) {
        console.log(this.currentValue)
		this.$emit('on-enter', event);
	}   

}