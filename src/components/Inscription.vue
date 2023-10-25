<script setup>
import { RouterLink } from 'vue-router';

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

const createUser = async () => {
  try {
    const usersCollection = pocketbase.collection('users');
    await usersCollection.add({
      Nom: nomInput,
      Prenom: prenomInput,
      email: emailInput,
      mdp: motDePasseInput,
    });
    // Vous pouvez ajouter une redirection ou afficher un message de réussite ici
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur', error);
  }
};
</script>

</script>

<template>
  <main>
    <div class="flex col-span-2 gap-8">
      <form class="flex flex-col w-4/5" @submit.prevent="createUser">
        <div class="flex flex-col gap-8 py-12">
          <div class="flex flex-row gap-8">
            <input class="border-b border-gray-500 mr-8 w-full" v-model="nomInput" placeholder="Nom">
            <input class="border-b border-gray-500 w-full" v-model="prenomInput" placeholder="Prénom">
          </div>
          <input class="border-b border-gray-500 mr-8 w-full" v-model="emailInput" placeholder="Email">
          <input class="border-b border-gray-500 w-full" v-model="motDePasseInput" placeholder="Mot de Passe">
        </div>
        <div>
          <button class="w-full border rounded-lg bg-blue-900 text-white buttton1 uppercase mt-12 py-2 px-48" type="submit">
            S'inscrire
          </button>
        </div>
      </form>
    
    </div>
  </main>
</template>
