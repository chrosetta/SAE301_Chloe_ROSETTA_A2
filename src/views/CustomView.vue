<script setup>
import { RouterLink } from 'vue-router';

import chevrownLeft from '../assets/icons/chevrownLeft.vue';
import LunettePerso from '../assets/img/lunettePerso.vue'
import share from '../assets/icons/share.vue'
</script>

<template>
  <main>
    <RouterLink to="/">
      <div class="flex flex-row gap-4 items-center ml-4 mt-8 sm:ml-12">
          <chevrownLeft />
          <h5>Accueil</h5>
      </div>
    </RouterLink>

    <h2 class="ml-4 sm:ml-12 uppercase">Lunettes ZS</h2>

    <div class="flex flex-col sm:flex-row sm:col-span-2 justify-between">
      <div class="flex items-center justify-evenly sm:col-1 sm:w-3/5 flex-col">
        <LunettePerso class="w-2/3 justify-center items-center" />

        <div class="flex flex-col gap-8 mx-2 lg:flex-row">
          <div class="flex flex-col justify-center">
            <p class="uppercase text-left">Prix</p>
            <div class="flex flex-row justify-center items-end gap-4">
              <h3 class="font-montserrat font-bold">186,00€</h3>
              <p class="line-through text-red-700 font-montserrat font-semibold">205,00€</p>
            </div>
          </div>
          <div class="flex flex-row lg:gap-4 items-center">
            <RouterLink to="/panier"><button class="text-h5 uppercase font-bold text-white bg-blue-900 rounded-xl lg:text-h5 lg:py-2 lg:px-24">Acheter</button></RouterLink>
            <button class="border border-x-blue-900 rounded-xl py-2 px-3" ><share /></button>
          </div>
      </div>
    </div>
    
      <div class="flex flex-col sm:w-1/2 mr-12">
        <h2 class="uppercase mt-12 mb-8">Personnalise ta paire !</h2>

        <div class="ml-8">
            <h4 class="uppercase font-semibold mb-8 mt-12">Matière</h4>
              <div class="flex flex-row gap-8">
                <button class=".btn uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-10 w-1/2" 
                        onclick="this.style.backgroundColor = (this.style.backgroundColor === 'white' ? '#ECECEC' : 'white')">                    
                    Métal
                </button>

                <button class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-10 w-1/2" 
                        onclick="this.style.backgroundColor = (this.style.backgroundColor === 'white' ? '#ECECEC' : 'white')">
                    Titane
                </button>
              </div>

            <h4 class="uppercase font-semibold mb-8 mt-12">Cadre</h4>
            <div>
              <div class="flex flex-row justify-between">
                <button class="w-16 h-16 bg-[#FFFEFC] border rounded-full flex border-gray-300" onclick="cadre.style.fill = '#FFFEFC'" ></button>
                <button class="w-16 h-16 bg-[#CDD4E9] border rounded-full flex border-gray-300" onclick="cadre.style.fill = '#CDD4E9'" ></button>
                <button class="w-16 h-16 bg-[#E9CDCD] border rounded-full flex border-gray-300" onclick="cadre.style.fill = '#E9CDCD'" ></button>
                <button class="w-16 h-16 bg-[#E9E3CD] border rounded-full flex border-gray-300" onclick="cadre.style.fill = '#E9E3CD'" ></button>
                <button class="w-16 h-16 bg-[#D6E9CD] border rounded-full flex border-gray-300" onclick="cadre.style.fill = '#D6E9CD'" ></button>
                <button class="w-16 h-16 bg-[#D6CDE9] border rounded-full flex border-gray-300" onclick="cadre.style.fill = '#D6CDE9'" ></button>
              </div>
            </div>

            <h4 class="uppercase font-semibold mb-8 mt-12">Branches</h4>
              <div class="flex flex-row justify-between">
                <button class="w-16 h-16 bg-[#FFFEFC] border rounded-full flex border-gray-300" onclick="branche1.style.fill = '#FFFEFC'; branche2.style.fill = '#FFFEFC'"></button>
                <button class="w-16 h-16 bg-[#CDD4E9] border rounded-full flex border-gray-300" onclick="branche1.style.fill = '#CDD4E9'; branche2.style.fill = '#CDD4E9'"></button>
                <button class="w-16 h-16 bg-[#E9CDCD] border rounded-full flex border-gray-300" onclick="branche1.style.fill = '#E9CDCD'; branche2.style.fill = '#E9CDCD'"></button>
                <button class="w-16 h-16 bg-[#E9E3CD] border rounded-full flex border-gray-300" onclick="branche1.style.fill = '#E9E3CD'; branche2.style.fill = '#E9E3CD'"></button>
                <button class="w-16 h-16 bg-[#D6E9CD] border rounded-full flex border-gray-300" onclick="branche1.style.fill = '#D6E9CD'; branche2.style.fill = '#D6E9CD'"></button>
                <button class="w-16 h-16 bg-[#D6CDE9] border rounded-full flex border-gray-300" onclick="branche1.style.fill = '#D6CDE9'; branche2.style.fill = '#D6CDE9'"></button>
              </div>
            <h4 class="uppercase font-semibold mb-8 mt-12">Verres</h4>
            <div class="flex flex-row justify-between gap-2 mb-24">
                <button class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-4 w-1/3 bg-[#E9E3CD]" onclick="verre1.style.fill = '#E9E3CD'; verre2.style.fill = '#E9E3CD'">Classique</button>
                <button class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-4 w-1/3 bg-[#1059AF] " onclick="verre1.style.fill = '#1059AF'; verre2.style.fill = '#1059AF'">Anti-lumières bleues</button>
                <button class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-4 w-1/3 bg-[#565654]" onclick="verre1.style.fill = '#565654'; verre2.style.fill = '#565654'">Photocromatique</button>
              </div>
          </div>
      </div>
    </div>
  </main>
</template>
