<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.col-12
        img(src='@/assets/curso/portada/img-intro.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        .row.justify-content-center.bgverde.borde-redondo.mb-3.mt-2
          p.p-4.pb-2 Colombia, uno de los países con mayor biodiversidad del planeta, alberga aproximadamente el 10 % de la biodiversidad global. Este privilegio se refleja en la vasta presencia de ecosistemas naturales que cubren cerca del 68,7 % de su territorio. El país ocupa el primer lugar en el mundo en número de especies de aves y anfibios, y se posiciona entre los más diversos también en mariposas, plantas y mamíferos. Esta riqueza natural hace parte del grupo de países megadiversos, los cuales concentran cerca del 70 % de la biodiversidad del planeta.
        p Dado que el desarrollo turístico de una región está estrechamente vinculado a su riqueza natural y cultural, la biodiversidad se consolida como un componente estratégico en la oferta turística. Por esta razón, los destinos que preservan y promueven su patrimonio natural no solo fomentan el turismo sostenible, sino que también generan oportunidades de desarrollo local, conservación ambiental y fortalecimiento de la identidad cultural.

    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-10.col-md-12.col-sm-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/1uEG1eVWCdc?si=dwNzmgnyRaWAJiy1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Turismo y biodiversidad sostenible. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
