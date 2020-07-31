import $ from 'jquery'

$(function(){
	$('li:odd').css('backgroundColor','pink')
	$('li:even').css('backgroundColor','black')
})



import Vue from 'vue'
import mf from '../单文件组件/myFrist.vue' 
const vm = new Vue({
	el:'#app',
	render: h=>h(mf)
})