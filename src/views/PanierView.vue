<script setup>
import { RouterLink } from "vue-router";
import chevrownLeft from "../assets/icons/chevrownLeft.vue";
import LunettePerso from "../assets/img/lunettePerso.vue";
import moins from "../assets/icons/moins.vue";
import plus from "../assets/icons/plus.vue";
import trash from "../assets/icons/trash.vue";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
</script>

<template>
  <main>
    <RouterLink to="/">
      <div class="flex flex-row gap-4 items-center mx-4 mt-8 sm:mx-8">
        <chevrownLeft />
        <h5>Accueil</h5>
      </div>
    </RouterLink>

    <h2 class="mx-4 sm:ml-8 uppercase">Panier</h2>

    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div class="flex justify-center"><LunettePerso class="sm:mx-none w-2/3 sm:w-3/5" /></div>
        <div class="flex flex-col mx-4">
          <h4 class="text-left">Monture ZS</h4>
          <p>Blanc</p>
        </div>
        <div class="flex flex-row items-center justify-end gap-5 mr-4 mt-6 sm:mt-0">
          <moins class="w-4" />
          <p>1</p>
          <plus class="w-4" />
        </div>
        <p class="text-right font-semibold font-montserrat mr-4 my-2">186,00€</p>

        <div class="flex justify-end mr-4"><trash class="w-6" /></div>
      
    </div>
    
    <div class="flex border w-5/6 mx-auto my-4"></div>
    <RouterLink to="/catalogue">
      <div class="flex flex-row items-end gap-4 mx-12 my-24">
        <plus />
        <p class="underline text-text2 sm:text-h5">Ajouter d'autres produits</p>
      </div>
    </RouterLink>
  </main>
</template>
