<script setup>
import { RouterLink } from 'vue-router'

import { ref } from 'vue'

import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

let user = ref('');
let psw = ref('');

</script>
  
  <template>
  <main>
    <div class="flex mt-24 sm:mt-8 sm:col-span-2 sm:gap-8">
      <div class="hidden sm:block sm:col-1 sm:w-1/2">
         <img src="/public/assets/LunettesCI.png">
      </div>
      <div class="mx-auto px-2 sm:col-2 sm:w-3/5 flex flex-col gap-10 items-center justify-center">
        <h2 class="uppercase text-h3 sm:w-4/5 sm:text-h2">Connexion</h2>
        <form class="flex flex-col sm:w-4/5" @submit.prevent="connect">
          <div class="flex flex-col gap-8 py-12">
            <input class="border-b border-gray-500 mr-8 w-full" placeholder="Email" v-model="user">
            <input class="border-b border-gray-500 w-full" placeholder="Mot de Passe" type="psw" v-model="psw">
          </div>
          <div>
            <button class=" px-24 w-full border rounded-lg bg-blue-900 text-white buttton1 uppercase mt-12 py-2 sm:px-48" type="submit">
                   Se connecter
            </button> 
          </div>
        </form>
        <p class="p2 sm:w-4/5">Vous n'avez pas de compte ? <RouterLink to="/inscription"><button class="text-blue-900 underline">Inscrivez-vous</button></RouterLink></p>
      </div>
    </div>
  </main>
</template>