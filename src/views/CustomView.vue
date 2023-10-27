<script setup>
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

import { RouterLink } from "vue-router";
import { ref } from 'vue';



import chevrownLeft from "../assets/icons/chevrownLeft.vue";
import LunettePerso from "../assets/img/lunettePerso.vue";
import share from "../assets/icons/share.vue";


const colorValues = ref({
  couleur_cadre: 'es1k3s6fs66q23j', 
  couleur_branches: '6xjozobwoq5qsqd', 
  materiel_verres: 'k33a6yljwdr1375',
  materiel_cadre: 'g470xxzx3rrkgy2',
});

const setColorValue = (element, colorId) => {
    colorValues[element] = colorId;
};

const voirMonPanier = () => {
  console.log('Valeurs de couleur sélectionnées :', colorValues.couleur_cadre, colorValues.couleur_branches, colorValues.materiel_verres, colorValues.materiel_cadre);
  pb.collection('Lunettes').create({
    couleur_cadre: colorValues.value.couleur_cadre,
    couleur_branches: colorValues.value.couleur_branches,
    materiel_cadre: colorValues.value.materiel_cadre,
    materiel_verres: colorValues.value.materiel_verres,
  });

};
</script>

<template>
  <main>
    <RouterLink to="/">
      <div class="flex flex-row gap-4 items-center ml-4 mt-8 lg:ml-12">
        <chevrownLeft />
        <h5>Accueil</h5>
      </div>
    </RouterLink>

    <h2 class="ml-4 lg:ml-12 uppercase">Lunettes ZS</h2>

    <div class="flex flex-col lg:flex-row sm:col-span-2 justify-between">
      <div class="flex items-center justify-evenly lg:col-1 lg:w-3/5 flex-col">
        <LunettePerso class="w-2/3 justify-center items-center" />

        <div class="flex flex-col gap-8 mx-2 lg:flex-row">
          <div class="flex flex-col justify-center">
            <p class="uppercase text-left">Prix</p>
            <div class="flex flex-row justify-center items-end gap-4">
              <h3 class="font-montserrat font-bold">186,00€</h3>
              <p
                class="line-through text-red-700 font-montserrat font-semibold"
              >
                205,00€
              </p>
            </div>
          </div>
          <div class="flex flex-row lg:gap-4 items-center">
            
            <RouterLink to="/panier">
              <button
                class="text-h5 uppercase font-bold text-white bg-blue-900 px-20 py-1 rounded-xl lg:text-h5 lg:py-2 lg:px-24"
                @click="voirMonPanier">
                    Acheter
              </button>
            </RouterLink>

            <button class="border border-x-blue-900 rounded-xl py-2 px-3">
              <share class="h-6" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:w-1/2 mr-12">
        <h2 class="uppercase mt-16 mb-4 lg:mt-12 lg:mb-8 ml-4 text-h4 lg:text-h2">Personnalise ta paire !</h2>

        <div class="ml-8">
          <h4 class="uppercase text-h5 font-semibold mb-6 lg:mt-12 sm:text-h4">Matière</h4>
          <div class="flex flex-row gap-8">
            <button
              class=".btn uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-10 w-1/2"
              onclick="this.style.backgroundColor = (this.style.backgroundColor === 'white' ? '#ECECEC' : 'white')"
              @click="setColorValue('materiel_cadre', '7c0r5z51fztmixa')"
            >
              Métal
            </button>

            <button
              class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-10 w-1/2"
              onclick="this.style.backgroundColor = (this.style.backgroundColor === 'white' ? '#ECECEC' : 'white')"
              @click="setColorValue('materiel_cadre', 'bccyjpvu008lr2k')"
            >
              Titane
            </button>
          </div>

          <h4 class="uppercase text-h5 font-semibold mb-8 mt-12 sm:text-h4">Cadre</h4>
          <div>
            <div class="flex flex-row justify-between">
              <button
                class="w-10 h-10 lg:w-16 lg:h-16 bg-[#FFFEFC] border rounded-full flex border-gray-300"
                onclick="cadre.style.fill = '#FFFEFC'"
                @click="setColorValue('couleur_cadre', '8s2ldjlc9fp078c')"
              ></button>
              <button
                class="w-10 h-10 lg:w-16 lg:h-16 bg-[#CDD4E9] border rounded-full flex border-gray-300"
                onclick="cadre.style.fill = '#CDD4E9'"
                @click="setColorValue('couleur_cadre', 'f8tqareynwqxxse')"
              ></button>
              <button
                class="w-10 h-10 lg:w-16 lg:h-16 bg-[#E9CDCD] border rounded-full flex border-gray-300"
                onclick="cadre.style.fill = '#E9CDCD'"
                @click="setColorValue('couleur_cadre', '5q6yiqbzzmw5dbn')"
              ></button>
              <button
                class="w-10 h-10 lg:w-16 lg:h-16 bg-[#E9E3CD] border rounded-full flex border-gray-300"
                onclick="cadre.style.fill = '#E9E3CD'"
                @click="setColorValue('couleur_cadre', 'egzclj12c25zcqn')"
              ></button>
              <button
                class="w-10 h-10 lg:w-16 lg:h-16 bg-[#D6E9CD] border rounded-full flex border-gray-300"
                onclick="cadre.style.fill = '#D6E9CD'"
                @click="setColorValue('couleur_cadre', '3rfc09zvxf763jw')"
              ></button>
              <button
                class="w-10 h-10 lg:w-16 lg:h-16 bg-[#D6CDE9] border rounded-full flex border-gray-300"
                onclick="cadre.style.fill = '#D6CDE9'"
                @click="setColorValue('couleur_cadre', '5u8f9pgxuj9t36o')"
              ></button>
            </div>
          </div>

          <h4 class="uppercase text-h5 font-semibold mb-8 mt-12 sm:text-h4">Branches</h4>
          <div class="flex flex-row justify-between">
            <button
              class="w-10 h-10 lg:w-16 lg:h-16 bg-[#FFFEFC] border rounded-full flex border-gray-300"
              onclick="branche1.style.fill = '#FFFEFC'; branche2.style.fill = '#FFFEFC'"
              @click="setColorValue('couleur_branches', '8s2ldjlc9fp078c')"
            ></button>
            <button
              class="w-10 h-10 lg:w-16 lg:h-16 bg-[#CDD4E9] border rounded-full flex border-gray-300"
              onclick="branche1.style.fill = '#CDD4E9'; branche2.style.fill = '#CDD4E9'"
              @click="setColorValue('couleur_branches', 'f8tqareynwqxxse')"
            ></button>
            <button
              class="w-10 h-10 lg:w-16 lg:h-16 bg-[#E9CDCD] border rounded-full flex border-gray-300"
              onclick="branche1.style.fill = '#E9CDCD'; branche2.style.fill = '#E9CDCD'"
              @click="setColorValue('couleur_branches', '5q6yiqbzzmw5dbn')"
            ></button>
            <button
              class="w-10 h-10 lg:w-16 lg:h-16 bg-[#E9E3CD] border rounded-full flex border-gray-300"
              onclick="branche1.style.fill = '#E9E3CD'; branche2.style.fill = '#E9E3CD'"
              @click="setColorValue('couleur_branches', 'egzclj12c25zcqn')"
            ></button>
            <button
              class="w-10 h-10 lg:w-16 lg:h-16 bg-[#D6E9CD] border rounded-full flex border-gray-300"
              onclick="branche1.style.fill = '#D6E9CD'; branche2.style.fill = '#D6E9CD'"
              @click="setColorValue('couleur_branches', '3rfc09zvxf763jw')"
            ></button>
            <button
              class="w-10 h-10 lg:w-16 lg:h-16 bg-[#D6CDE9] border rounded-full flex border-gray-300"
              onclick="branche1.style.fill = '#D6CDE9'; branche2.style.fill = '#D6CDE9'"
              @click="setColorValue('couleur_branches', '5u8f9pgxuj9t36o')"
            ></button>
          </div>
          <h4 class="uppercase text-h5 font-semibold mb-8 mt-12 sm:text-h4">Verres</h4>
          <div class="flex flex-col lg:flex-row justify-between gap-2 mb-24">
            <button
              class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-4 lg:w-1/3 bg-[#E9E3CD]"
              onclick="verre1.style.fill = '#E9E3CD'; verre2.style.fill = '#E9E3CD'"
              @click="setColorValue('materiel_verres', '5rmmanua61rdh0c')"
            >
              Classique
            </button>
            <button
              class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-4 lg:w-1/3 bg-[#1059AF]"
              onclick="verre1.style.fill = '#1059AF'; verre2.style.fill = '#1059AF'"
              @click="setColorValue('materiel_verres', '5bnrotcs2i4tjyk')"
            >
              Anti-lumières bleues
            </button>
            <button
              class="uppercase border border-gray-300 rounded-lg bg-opacity-0 py-3 px-4 lg:w-1/3 bg-[#565654]"
              onclick="verre1.style.fill = '#565654'; verre2.style.fill = '#565654'"
              @click="setColorValue('materiel_verres', 'kltkn5hksh0z1t1')"
            >
              Photocromatique
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
