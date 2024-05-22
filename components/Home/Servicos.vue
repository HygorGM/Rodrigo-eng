<script setup lang="ts">
const servicos = ref(getServices())
</script>

<template>
  <div>
    <container>
      <div class="py-12">
        <div class="flex flex-wrap gap-6">
          <div v-for="(servico, i) in servicos" :key="i" class="grid mx-auto min-w-sm py-6 text-center">
            <div class="grid mb-6">
              <div class="grid mx-auto h-48 w-48 items-center justify-center overflow-hidden rounded-full">
                <NuxtImg :src="servico.image" class="h-auto min-h-full min-w-full w-auto" />
              </div>
            </div>
            <div class="text-xl font-semibold">
              {{ servico.title }}
            </div>
            <div>
              {{ servico.description }}
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>
