<script setup lang="ts">
const servicos = ref(getServices())
</script>

<template>
  <div>
    <container class="bg-stone-50 md:drop-shadow-xl">
      <div class="flex justify-center pt-5 text-2xl text-amber-500 font-bold">
        <NuxtLink to="#URL">
          SERVIÇOS
        </NuxtLink>
      </div>
      <div class="py-12">
        <div class="grid grid-cols-2 flex-wrap gap-0 md:flex md:gap-6">
          <div v-for="(servico, i) in servicos" :key="i" class="grid mx-auto py-6 text-center md:min-w-sm">
            <div class="grid mb-6">
              <div class="grid mx-auto h-32 w-32 items-center justify-center overflow-hidden rounded-full md:h-48 md:w-48">
                <NuxtImg :src="servico.image" class="h-auto min-h-full min-w-full w-auto" />
              </div>
            </div>
            <div class="text-xl font-semibold">
              {{ servico.title }}
            </div>
            <div class="hidden md:block">
              {{ servico.description }}
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>
