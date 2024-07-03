<template>
  <div class="border-t-1 border-amber from-white via-stone-100 bg-gradient-to-r pb-5 md:border-t-3">
    <Container>
      <div class="grid grid-cols-1 mt-4 justify-between gap-10 font-bold md:flex">
        <div class="flex gap-8">
          <h2>
            © Engenheiro Rodrigo Marques.<br> Todos os Direitos reservados.
          </h2>
          <div class="mt-2 flex justify-center gap-5 md:flex md:gap-6">
            <NuxtLink target="_blank" to="https://api.whatsapp.com/send?phone=5562993942206&text=Ol%C3%A1%20Eng%C2%BA%20Rodrigo%20Marques,%20estou%20precisando%20dos%20seus%20servi%C3%A7os%20t%C3%A9cnicos.%20Pode%20me%20Ajudar%3F">
              <NuxtImg class="w-5 md:w-8" src="wats.svg" />
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.instagram.com/engrodrigomr/">
              <NuxtImg class="w-5 md:w-8" src="insta.svg" />
            </NuxtLink>
          </div>
        </div>
        <NuxtLink target="_blank" class="items-center text-sm md:flex" to="https://www.linkedin.com/in/hygorgoncalvesmarques/">
          <h2>Desenvolvido por Hygor Gonçalves</h2>
        </NuxtLink>
      </div>
    </Container>
  </div>
</template>
