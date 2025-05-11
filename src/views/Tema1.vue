<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 ¿Qué es la biodiversidad? 

      .row.justify-content-center.mb-5
        .col-lg-9.col-md-12.col-sm-12
          .tarjeta--container.borde-recto.row
            .col-lg-5.tarjeta.bgterciario.px-3.py-2(data-aos="fade-right")
              img(src='@/assets/curso/t1/img1.png', alt='')
            .col-lg-7.tarjeta.bgverde.p-4(data-aos="fade-left")
              .row.bgverdemate.mx-1.mt-4
                h3.mt-1.mb-1 #[b ¿Qué es la biodiversidad?]
              p.mb-0.mt-4 La biodiversidad se refiere a la variedad de formas de vida que habitan un área determinada, incluyendo especies animales, vegetales y microorganismos, este concepto abarca también la diversidad de ecosistemas, la riqueza de hábitats y comunidades biológicas, así como la variedad de procesos ecológicos que los sustentan. Además, incluye la variabilidad genética, entendida como el conjunto de la información contenida en los genes de todos los individuos de una especie (Calle, 1994).
          p.mt-2 Según la Política Nacional de Biodiversidad del Ministerio del Medio Ambiente (1996), es importante considerar los siguientes aspectos relacionados con la biodiversidad:
        .col-lg-3.col-md-6.col-12
          img.mt-0(src='@/assets/curso/t1/img2.png', alt='')
        

  </template>

<script>
export default {
  name: 'Tema1',
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
