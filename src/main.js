import { createApp } from 'vue'
import './main.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hid')
hiddenElements.forEach((el) => observer.observe(el))