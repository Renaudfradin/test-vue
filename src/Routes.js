import Accueil from './components/Accueil.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Post from './components/Post.vue'
export default [
    {path: '/', component: Accueil},
    {path: '/page1', component: Page1},
    {path: '/page2', component: Page2},
    {path: '/blogpost/:id', component: Post},
]