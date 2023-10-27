<script setup>
import { RouterLink, RouterView } from "vue-router";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

import logoBlue from "./assets/icons/logoBlue.vue";
import panier from "./assets/icons/panier.vue";
import id from "./assets/icons/id.vue";

import facebook from "./assets/icons/facebook.vue";
import instagram from "./assets/icons/instagram.vue";
import twitter from "./assets/icons/twitter.vue";
import youtube from "./assets/icons/youtube.vue";

var pocketbase_ip = "http://127.0.0.1:8090";
//alert('pocketbase_ip')
</script>

<template>
  <nav>
    <div
      class="flex flex-col gap-1 justify-end overflow-hidden mx-2 my-2 lg:mx-12 lg:my-12"
    >
      <div
        class="flex flex-row justify-end items-right overflow-hidden px-1 py-1"
      >
        <div>
          <div class="ml-4 inline-flex flex-end items-center gap-2 lg:gap-8">
            <a>
              <RouterLink to="/panier"
                ><panier class="h-6 lg:h-10"
              /></RouterLink>
            </a>
            <a
              class="bg-stone-50 self-center flex max-w-full items-center justify-between gap-5 m-auto px-5 py-2.5 rounded-3xl"
            >
              <RouterLink
                to="/connexion"
                class="inline-flex flex-end items-center gap-3"
                ><id class="h-6 lg:h-10" />
                <p class="hidden lg:block">Se connecter</p></RouterLink
              >
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 items-center overflow-hidden mx-auto">
        <div class="flex flex-row items-center overflow-hidden">
          <RouterLink to="/" class="mb-1 sm:mb-6"
            ><logoBlue class="w-2/3 sm:w-fit mx-auto"
          /></RouterLink>
        </div>
      </div>
      <div class="flex flex-row justify-around items-center">
        <RouterLink
          to="/custom"
          class="uppercase text-text2 sm:text-button1 text-black"
          >Personnaliser</RouterLink
        >
        <RouterLink
          to="/catalogue"
          class="uppercase text-text2 sm:text-button1 text-black"
          >Catalogue</RouterLink
        >
      </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>

  <div class="w-full py-4 relative rounded-t-xl bg-[#031b49] mt-12">
    <div
      class="lg:col-span-3 flex flex-col gap-4 lg:flex-row px-4 py-2 lg:px-24 lg:py-8 lg:items-center justify-between"
    >
      <ul class="lg:col-1">
        <li>
          <h5 class="text-white text-text3 my-1 lg:text-h5 lg:my-4">
            Nos Promos
          </h5>
        </li>
        <li>
          <h5 class="text-white text-text3 my-1 lg:text-h5 lg:my-4">
            Nos Produits
          </h5>
        </li>
        <li>
          <h5 class="text-white text-text3 my-1 lg:text-h5 lg:my-4">
            Nos Magasins
          </h5>
        </li>
      </ul>

      <ul class="lg:col-2">
        <li>
          <h5 class="text-white text-text3 my-1 lg:my-4 lg:text-h5">Contact</h5>
        </li>
        <li>
          <p class="text-white text-text3 my-1 lg:text-text1 lg:my-4">
            Qui sommes-nous ?
          </p>
        </li>
        <li>
          <p class="text-white text-text3 my-1 lg:text-text1 lg:my-4">
            Nous écrire
          </p>
        </li>
      </ul>
      <div class="flex flex-row lg:col-3 justify-start">
        <facebook class="h-6 lg:h-16 lg:mx-3" />
        <instagram class="h-6 lg:h-16 lg:mx-3" />
        <twitter class="h-6 lg:h-16 lg:mx-3" />
        <youtube class="h-6 lg:h-16 lg:mx-3" />
      </div>
    </div>
  </div>
</template>
