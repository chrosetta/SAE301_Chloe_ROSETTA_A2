<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div class="flex mt-24 sm:mt-8 sm:col-span-2 sm:gap-8">
      <div class="hidden sm:block sm:col-1 sm:w-1/2">
        <img src="/public/assets/LunettesCI.png" />
      </div>
      <div
        class="mx-auto px-2 sm:col-2 sm:w-3/5 flex flex-col gap-10 items-center justify-center"
      >
        <h2 class="uppercase text-h3 sm:w-4/5 sm:text-h2">Créer un compte</h2>
        <form class="flex flex-col mx-4 sm:w-4/5">
          <div class="flex flex-col gap-8 py-12">
            <div class="flex flex-row gap-8">
              <input
                class="border-b border-gray-500 mr-8 w-full"
                placeholder="Nom"
              />
              <input
                class="border-b border-gray-500 w-full"
                placeholder="Prénom"
              />
            </div>
            <input
              class="border-b border-gray-500 mr-8 w-full"
              placeholder="Email"
            />
            <input
              class="border-b border-gray-500 w-full"
              placeholder="Mot de Passe"
            />
          </div>
          <div>
            <button
              class="px-24 w-full border rounded-lg bg-blue-900 text-white buttton1 uppercase mt-12 py-2 sm:px-48"
              type="submit"
            >
              S'inscrire
            </button>
          </div>
        </form>
        <p class="p2 sm:w-4/5">
          Vous avez déjà un compte ?
          <RouterLink to="/connexion"
            ><button class="text-blue-900 underline">
              Connectez-vous
            </button></RouterLink
          >
        </p>
      </div>
    </div>
  </main>
</template>
