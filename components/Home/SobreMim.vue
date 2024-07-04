<script setup lang="ts">

</script>

<template>
  <Container>
    <div class="grid mx-auto mb-10 max-w-3xl gap-13 bg-stone-50 drop-shadow-2xl md:grid-cols-2">
      <div class="grid mx-auto max-w-3xl gap-13 bg-stone-50 md:grid-cols-2 md:drop-shadow-xl">
        <div>
          <NuxtImg class="w-full rounded-lg" src="EngCivil460.jpg" />
        </div>
        <div>
          <div class="mb-2 text-2xl text-amber-500 font-bold">
            <NuxtLink to="#URL">
              SOBRE MIM
            </NuxtLink>
          </div>
          <div class="text-start">
            <p class="mb-2">
              Olá, meu nome é Rodrigo Marques, sou Engenheiro civil, atuo em Goiânia com
              atendimento em todo territorio Nacional. Meu foco é na
              resolução de problemas, garantindo segurança, conforto e bem estar dos meus clientes. Faço a
              gestão da sua obra desde o financiamento até a entrega das chaves.<br> Estes são alguns das
              minhas especialidades:
            </p>
          </div>
          <ul class="mb-3 list-disc pl-6 text-left">
            <li>Gerenciamento de obras</li>
            <li>Projetos arquitetônicos</li>
            <li>Projetos complementares (Hidraulico, eletrico, estrutural e incêndio)</li>
            <li>Regularizações de imóveis</li>
            <li>Desmembramento de lotes</li>
            <li>Perícias e avaliações técnicas</li>
            <li>Financiamento de lote e construção ART (Anotação de responsabilidade técnica)</li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>
