<script setup>
import lunettePerso from '../assets/img/lunettePerso.vue';
</script>

<template>
    <div class="flex flex-col mx-12">
        <div class="col-1 pt-12 p-4 lg:pt-36 lg:p-8 items-center justify-center bg-gray-100 border rounded-t-xl rounded-b-none">
            <lunettePerso class="w-full" />
            <div>
            <p class="font-semibold">Lunettes ZS</p>
                <div class="flex flex-row justify-between">
                    <p class="p2"> 6 Couleurs</p>
                    <p class="font-semibold">186,00€</p>
                </div>
            </div>

            

        </div>
        <div class="flex flex-col gap-2">
            <div>
                <RouterLink to="/panier">
                    <button class="w-full bg-blue-900 text-white buttton1 uppercase py-2" type="submit">
                        Acheter
                    </button>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/custom">
                    <button class="w-full bg-gray-100 text-black buttton1 uppercase py-2 " type="submit">
                    Personnaliser !
                    </button>
                </RouterLink>
            </div>
            
        </div>
    </div>

</template>