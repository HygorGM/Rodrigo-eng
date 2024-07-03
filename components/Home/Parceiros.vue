<script setup lang="ts">

</script>

<template>
  <Container>
    <div class="bg-stone-50 p-24 p-7 md:drop-shadow-xl">
      <div class="mb-8">
        <NuxtLink class="text-amber-500 font-bold" to="#URL">
          PARCEIROS
        </NuxtLink>
      </div>
      <div class="flex items-center gap-3 md:gap-10">
        <NuxtImg class="w-40 rounded-3xl md:w-56" src="mjc.jpeg" />
        <div>
          <h1 class="mb-2 font-bold md:text-lg">
            MJC Pré-moldados | Telhas | Concreteira
          </h1>
          <div>
            <NuxtLink target="_blank" class="flex items-center font-bold" to="https://www.instagram.com/mjc_premoldados">
              <NuxtImg class="w-8" src="insta.svg" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
