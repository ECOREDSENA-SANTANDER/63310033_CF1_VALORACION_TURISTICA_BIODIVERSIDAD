<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Efectos del cambio climático sobre la biodiversidad y los servicios ecosistémicos

    p El cambio climático tiene impactos directos sobre los seres vivos, afectando su desarrollo, comportamiento y supervivencia; estos efectos pueden manifestarse en alteraciones en los ciclos reproductivos, cambios en los patrones de migración, modificaciones en la distribución geográfica de las especies, entre otros. Como resultado, la biodiversidad se ve amenazada, ya que muchas especies no logran adaptarse con suficiente rapidez a las nuevas condiciones ambientales.

    .row.align-items-center.justify-content-center.mb-5
      .col-sm-12.col-md-12.col-lg-5(data-aos="fade-left")
        .row.bgverde.borde-redondo
          p.px-4.py-2.mt-2 Según el informe #[b “El cambio climático y sus efectos en la biodiversidad en América Latina” (CEPAL, 2015)], las variaciones en la precipitación y el aumento de la temperatura están modificando la distribución, tamaño, estructura y abundancia de diversas especies. Estos cambios, junto con las alteraciones del ciclo hidrológico, afectan las interacciones entre especies, los ciclos de nutrientes y el funcionamiento de los ecosistemas, comprometiendo así la calidad y el flujo de los servicios ambientales que estos ofrecen.
      .col-6.col-md-6.col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/t4/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-4(data-aos="fade-down")
        .row.align-items-center
          .col-3
            img.mt-3(src='@/assets/curso/t4/ico.png', alt='').d-none.d-lg-block
        .row.mt-4
          p El informe respalda estas afirmaciones con el estudio de Böhning-Gaese, Jetz y Schaefer (2008), el cual analiza cómo el cambio climático ha provocado desplazamientos en los rangos de distribución de aves migratorias, afectando la composición y riqueza de sus comunidades.

    .subt2.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Servicios ecosistémicos: la conexión vital entre biodiversidad y bienestar humano

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t4/img2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los servicios ecosistémicos son los beneficios directos e indirectos que los seres humanos obtienen de la biodiversidad y de los ecosistemas, resultado de las complejas interacciones entre sus componentes, estructuras y funciones ecológicas (Ministerio de Ambiente y Desarrollo Sostenible, 2010). 
            br
            br
            | Estos servicios reflejan la estrecha interdependencia entre la naturaleza y las sociedades humanas, ya que de ellos dependen directa o indirectamente todas las actividades productivas, sociales y culturales. 
            br
            br
            | Una de las actividades que se beneficia de manera significativa de estos servicios es el turismo, especialmente el ecoturismo y el turismo de naturaleza, los cuales dependen de la conservación de la biodiversidad y de la integridad de los ecosistemas. Por esta razón, el turismo se enmarca dentro de la categoría de servicios ecosistémicos culturales. 


    p.mb-4 Los servicios ecosistémicos se agrupan generalmente en tres categorías principales:

</template>

<script>
export default {
  name: 'Tema4',
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
