<script setup>
import { RouterLink } from 'vue-router';
import chevrownLeft from '../assets/icons/chevrownLeft.vue';
import LunettePerso from '../assets/img/lunettePerso.vue';
import moins from '../assets/icons/moins.vue';
import plus from '../assets/icons/plus.vue';
import trash from '../assets/icons/trash.vue';
</script>

<template>
  <main>
    <RouterLink to="/">
      <div class="flex flex-row gap-4 items-center ml-12">
          <chevrownLeft />
          <h5>Accueil</h5>
      </div>
    </RouterLink>

    <h2 class="ml-12 uppercase">Panier</h2>

    <div class="flex flex-row items-center justify-between mx-12">
      <LunettePerso class="w-1/5" />
      <div class="flex flex-col">
        <h4>Monture ZS</h4>
        <p>Blanc</p>
      </div>
      <div class="flex flex-row items-center gap-4">
        <moins />
        <p>1</p>
        <plus />
      </div>
      <p>186,00€</p>
      <trash />
    </div>
    <div class="flex border w-5/6 mx-auto"></div>
    <RouterLink to="/catalogue">
      <div class="flex flex-row items-end gap-4 mx-12 my-24">
        <plus />
        <p class="underline">Ajouter d'autres produits</p>
      </div>
    </RouterLink>
  </main>
</template>
