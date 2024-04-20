<template>
  <div class="border-b-3 border-amber">
    <Container class="grid grid-flow-col mx-13 items-center justify-between">
      <div class="w-8rem">
        <NuxtImg size="126px" src="/logo.svg" />
      </div>
      <div class="grid grid-flow-col items-center gap-12 py-10">
        <div class="text-right">
          <h1>Atendimento em todo o território nacional</h1>
          <p>Segunda a sexta-feira: 08 às 18hs | Sábado: 08 às 12hs</p>
        </div>
        <div class="flex gap-3">
          <NuxtLink to="#URL">
            Duvida Frequentes
          </NuxtLink>
          <div>|</div>
          <NuxtLink to="#URL">
            Orçamento Rapido
          </NuxtLink>
        </div>
      </div>
    </Container>
    <slot />
  </div>
</template>
