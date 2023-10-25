<script setup>

import PocketBase from 'pocketbase';
    const pb = new PocketBase('http://127.0.0.1:8090');

import star from '../assets/icons/star.vue'

</script>

<template>
    <div class="flex flex-col py-4 px-4 lg:w-1/3 gap-8 items-center justify-center lg:py-14 lg:px-16 bg-white shadow-xl rounded-lg">
        <div class="flex flex-row gap-2">
            <star />
            <star />
            <star />
            <star />
            <star />
        </div>
        <h5 class="text-text2 lg:text-h5">Maxime</h5>
        <p class="text-text3 text-center text-gray-500 lg:text-text1">“Je suis ravi de mes nouvelles lunettes TaVue. La qualité de la monture et des verres est exceptionnelle. Elles ajoutent une touche d'élégance à chaque tenue.”</p>
    </div>
</template>