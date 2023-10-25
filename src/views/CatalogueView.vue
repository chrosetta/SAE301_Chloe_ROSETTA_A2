<script setup>
import { RouterLink } from 'vue-router'
import chevrownLeft from '../assets/icons/chevrownLeft.vue'

import cardLunettes from '../components/CardLunettes.vue'
</script>

<template>
  <main>
    <RouterLink to="/">
      <div class="flex flex-row gap-4 items-center pl-8">
          <chevrownLeft />
          <h5>Accueil</h5>
      </div>
    </RouterLink>

    <h2 class="pl-8 uppercase">Lunettes</h2>

    <p class="p2 px-8 my-4">Explorez le monde des lunettes TaVue, où la personnalisation et l'élégance se rencontrent pour créer un look qui est tout à fait le vôtre. Chaque paire est une œuvre d'art unique, conçue pour refléter votre style personnel.<br>
      Chez TaVue, nous croyons en la liberté de personnalisation sans limites. Choisissez parmi une multitude de formes, de couleurs et de détails pour créer des lunettes qui correspondent parfaitement à votre style. De la sobriété aux détails audacieux, l'expression de votre style est notre priorité.
    </p>

    <div class="flex flex-row col-span-3 gap-8">
      <div class="col-1 w-3/4 px-8">
        <img src="/public/assets/Catalogue.jpg">
      </div>

      <div class="flex flex-row col-2 gap-8">
        <div class="flex flex-col gap-8">
          <cardLunettes />
          <cardLunettes />
        </div>
        <div class="flex flex-col gap-8">
          <cardLunettes />
          <cardLunettes />
        </div>
      </div>
    </div>

    
  </main>
</template>