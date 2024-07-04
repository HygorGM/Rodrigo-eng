<script setup lang="ts">

</script>

<template>
  <Container>
    <div class="mb-10 mt-4 bg-stone-50 p-10 drop-shadow-2xl md:mb-15">
      <div class="mb-8">
        <NuxtLink class="text-amber-500 font-bold" to="#URL">
          PARCEIROS
        </NuxtLink>
      </div>
      <div class="flex items-center gap-2 md:gap-10">
        <NuxtImg class="w-26 rounded-xl md:w-56" src="mjc.jpeg" />
        <div>
          <h1 class="mb-2 text-sm font-bold md:text-lg">
            MJC Pré-moldados
          </h1>
          <div class="flex justify-center">
            <NuxtLink target="_blank" class="flex items-center font-bold" to="https://www.instagram.com/mjc_premoldados">
              <NuxtImg class="w-5" src="insta.svg" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
