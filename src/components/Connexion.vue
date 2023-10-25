  <script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue';

    import PocketBase from 'pocketbase';
    const pb = new PocketBase('http://127.0.0.1:8090');

  </script>
  
  <template>
    <div>
      <h2 class="uppercase w-full">Connexion</h2>
      <form class="flex flex-col w-4/5" @submit.prevent="connect">
        <div class="flex flex-col gap-8 py-12">
          <input class="border-b border-gray-500 mr-8 w-full" placeholder="Email" v-model="user">
          <input class="border-b border-gray-500 w-full" placeholder="Mot de Passe" type="password" v-model="psw">
        </div>
        <div>
          <button class="w-full border rounded-lg bg-blue-900 text-white button1 uppercase mt-12 py-2 px-48" type="submit">
            Se connecter
          </button>
        </div>
      </form>
      <p class="p2 w-4/5">Vous n'avez pas de compte ? <RouterLink to="/inscription"><button class="text-blue-900 underline">Inscrivez-vous</button></RouterLink></p>
    </div>
  </template>
  

  