<template>
    <container>
        <div class="py-12">
            <div class="flex flex-wrap gap-6">
                <div v-for="(servico, i) in servicos" :key="i" class="grid mx-auto text-center py-6 min-w-sm" >
                    <div class="grid mb-6">
                        <div class="mx-auto w-48 h-48 overflow-hidden grid justify-center items-center rounded-full">
                            <NuxtImg :src="servico.image" class="w-auto h-auto min-h-full min-w-full"/>
                        </div>
                    </div>
                    <div class="text-xl font-semibold">
                        {{ servico.title }}
                    </div>
                    <div >
                        {{ servico.description }}
                    </div>
                </div>
            </div>
        </div>
    </container>
</template>

<script setup lang="ts">
    const servicos = ref(getServices());
</script>