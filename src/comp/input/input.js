var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import Component from 'vue-class-component';
// import './input.scss';
var InputComponent = (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentValue = "";
        return _this;
    }
    InputComponent.prototype.handleInput = function (event) {
        var value = event.target.value;
        this.$emit('input', value);
        this.currentValue = value;
        this.$emit('on-change', event);
    };
    InputComponent.prototype.handleEnter = function (event) {
        console.log(this.currentValue);
        this.$emit('on-enter', event);
    };
    return InputComponent;
}(Vue));
InputComponent = __decorate([
    Component({
        template: require('./input.html'),
        props: {
            disabled: Boolean,
            placeHolder: {
                type: String,
                default: "Input Something"
            }
        }
    })
], InputComponent);
export default InputComponent;
