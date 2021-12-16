<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción  
    
    .cajon-b.color-primario.p-3.mb-4
      p.mb-0 En el presente componente tendrá la posibilidad de abordar los aspectos generales de la venta y transacciones comerciales, así como los conocimientos necesarios para una buena comunicación que lleve a los vendedores a fortalecer el proceso y su utilidad. A continuación, se invita a visualizar el video de introducción:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uxUsQS5gvQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
