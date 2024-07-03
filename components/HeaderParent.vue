<template>
  <div class="mb-5 border-b-1 border-amber from-white via-stone-100 bg-gradient-to-r md:border-b-3">
    <Container class="grid grid-flow-col mx-13 items-center justify-between">
      <div class="w-8rem">
        <NuxtImg size="126px" src="/logo.svg" />
      </div>
      <div class="grid-flow-col hidden items-center gap-12 py-10 md:grid">
        <div class="text-right">
          <h1>Atendimento em todo o território nacional</h1>
          <p>Segunda a sexta-feira: 08 às 18hs | Sábado: 08 às 12hs</p>
        </div>
        <div class="flex gap-3">
          <NuxtLink class="text-lg font-medium" target="_blank" to="https://api.whatsapp.com/send?phone=5562993942206&text=Ol%C3%A1%20Eng%C2%BA%20Rodrigo%20Marques,%20estou%20precisando%20dos%20seus%20servi%C3%A7os%20t%C3%A9cnicos.%20Pode%20me%20Ajudar%3F">
            Duvida Frequentes
          </NuxtLink>
          <div>|</div>
          <NuxtLink class="text-lg font-medium" target="_blank" to="https://api.whatsapp.com/send?phone=5562993942206&text=Ol%C3%A1%20Eng%C2%BA%20Rodrigo%20Marques,%20estou%20precisando%20dos%20seus%20servi%C3%A7os%20t%C3%A9cnicos.%20Pode%20me%20Ajudar%3F">
            Orçamento Rapido
          </NuxtLink>
        </div>
      </div>
    </Container>
    <slot />
  </div>
</template>
