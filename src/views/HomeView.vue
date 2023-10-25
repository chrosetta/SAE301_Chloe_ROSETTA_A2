<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import france from '../assets/icons/france.vue'
import planete from '../assets/icons/planete.vue'
import security from '../assets/icons/security.vue'
import chevrownRight from '../assets/icons/chevrownRight.vue'

import CardLunettes from '../components/CardLunettes.vue'
import CardAvis from '../components/CardAvis.vue'
import MapOSM from '../components/MapOSM.vue'

  // Onglet selectionné
  let selection = ref()
  selection.value = 1
  // Fonction de sélection de l'onglet
  const select = (val) => {
    selection.value = val
  }
</script>

<template>
  <main>
    <div class="bg-gray-200 mt-4 px-3 py-2 text-center text-text2 sm:text-h4 sm:px-5">
      COMMANDEZ MAINTENANT ET RECEVEZ 10% DE RÉDUCTION !
      <!--compte à rebours--> 
    </div>
    <div class="relative">
      
      <div class="sm:absolute bg-gradient-to-b from-blue-900 to-blue-700 opacity-20 top-0 left-0 right-0 bottom-0 ">
      </div>
      <img class="my-2 lg:my-8 max-h-fit" src="/public/assets/Hero.png" alt="hero" id="hero" />

      <div class="sm:absolute flex flex-col text-left text-white sm:gap-2 mx-2 sm:top-4 lg:gap-12 lg:top-8 2xl:gap-24 2xl:top-16 2xl:left-12  ">
        <h3 class="my-5 sm:my-none text-black font-light text-text3 sm:text-white sm:text-h5 lg:text-h4 2xl:text-h3">Découvrez l'art de la personnalisation</h3>
        <h1 class="mx-auto my-7 sm:my-none text-blue-900 text-button1 text-center sm:text-left sm:text-white sm:text-h3 lg:max-w-xl lg:text-h2 2xl:text-h1 2xl:max-w-6xl">Quelle <span class="text-blue-900 font-leckerliOne font-bold">histoire</span> vos lunettes raconteront-elles?</h1>
        <div>
          <RouterLink to="/custom">
            <button class="flex flex-row sm:py-1 sm:px-2 px-2 rounded-md mx-auto mb-12 text-white font-semibold lg:text-h4 2xl:text-h3 sm:font-semibold sm:gap-4 items-center sm:ml-12 bg-blue-900 bg-opacity-25 lg:px-6 2xl:px-12 xl:py-1 2xl:py-3 lg:rounded-2xl 2xl:rounded-3xl">
              PERSONNALISER 
              <chevrownRight class="h-3 sm:h-5" />
            </button>
          </RouterLink>
        </div>
      </div>
    </div>


    <div class="flex flex-col justify-between items-center gap-8 my-12 lg:flex-row lg:mx-24 lg:my-24">
      <div class="flex flex-row items-center gap-4">
        <france class="h-8 sm:h-12" />
        <p class="text-blue uppercase text-text3 font-semibold sm:text-h5">Fabriquées en France</p>
      </div>

      <div class="flex flex-row items-center gap-4">
        <security class="h-8 sm:h-12" />
        <p class="text-blue uppercase text-text3 font-semibold sm:text-h5">Site et paiement sécurisés</p>
      </div>

      <div class="flex flex-row items-center gap-4">
        <planete class="h-8 sm:h-12" />
        <p class="text-blue uppercase text-text3 font-semibold sm:text-h5">Produits éco-responsables</p>
      </div>
    </div>

    <div class="mx-8 mt-24 mb-8 lg:pt-44 lg:pb-16 lg:mx-24 uppercase">
      <h2 class="text-h4 lg:text-h2">Nos Meilleures Ventes</h2>
    </div>
    <div class="flex flex-col gap-6 items-center lg:flex-row lg:col-span-3 lg:gap-12 justify-center lg:mx-24">
        <CardLunettes class="col-1"  />
        <CardLunettes class="col-2" />
        <CardLunettes class="col-3" />
    </div>

    <div class="mx-8 mt-24 mb-8 lg:pt-44 lg:pb-16 lg:mx-24 uppercase">
      <h2 class="text-h4 lg:text-h2">Ce qu'on dit de nous !</h2>
    </div>
    
    <div class="flex flex-col gap-4 mx-8 my-4 lg:flex-row lg:col-span-3 lg:gap-12 justify-center lg:mx-24 lg:mb-48">
      <CardAvis class="col-1" />
      <CardAvis class="col-2"/>
      <CardAvis class="col-3"/>
    </div>


    <div class="mx-8 mt-24 mb-8 lg:pt-44 lg:pb-16 lg:mx-24 uppercase">
      <h2 class="text-h4 lg:text-h2">Trouver votre magasin !</h2>
    </div>

    <div class="card" v-if="selection == 1">
      <div class="card-body">
        <MapOSM /> 
      </div> 
    </div>
    
  </main>
</template>
