import { createApp } from 'vue'


// import $ from 'jquery'
import app from './pages/one/app.vue'
// import store from './store'


function create(){
    const el = document.querySelector('body');
    if (el) {
        el.insertAdjacentHTML('afterend','<div id="myapp"></div>')
        createApp(app).mount('#myapp')
      }
}



// createApp(Pop).use(store).mount('#app')



let url = window.location.href
if(url.indexOf('google.com/')>1){
	create()
}


