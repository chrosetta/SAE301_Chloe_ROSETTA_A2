import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import CustomView from '../views/CustomView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import PanierView from '../views/PanierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',                            name: 'HomeView',                             component: HomeView},
    {path: '/catalogue',                   name: 'CatalogueView',                        component: CatalogueView},
    {path: '/connexion',                   name: 'ConnexionView',                        component: ConnexionView},
    {path: '/custom',                      name: 'CustomView',                           component: CustomView},
    {path: '/inscription',                 name: 'InscriptionView',                      component: InscriptionView},
    {path: '/panier',                      name: 'PanierView',                           component: PanierView},
  ]
})

export default router
