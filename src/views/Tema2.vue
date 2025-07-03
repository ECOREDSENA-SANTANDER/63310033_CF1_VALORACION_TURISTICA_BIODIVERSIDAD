<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Colombia y el contexto mundial de la biodiversidad

    .row.align-items-center.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-5(data-aos="fade-left")
        .row.bgverde.borde-redondo
          p.p-5.mt-2.mb-3 La siguiente figura presenta los países denominados megadiversos, los cuales concentran, en conjunto, aproximadamente el 70 % de la biodiversidad global; estos territorios se caracterizan por albergar una gran variedad de especies y ecosistemas.
      .col-6.col-md-6.col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/t2/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-4(data-aos="fade-down")
        .row.align-items-center
          .col-3
            img.mt-3(src='@/assets/curso/t2/ico1.png', alt='').d-none.d-lg-block
        .row.mt-3
          p Posteriormente, se presentan algunas cifras representativas sobre la biodiversidad de Colombia, proporcionadas por el #[b Sistema de Información sobre Biodiversidad de Colombia (SIBCOLOMBIA)], las cuales evidencian la riqueza natural del país y su relevancia a nivel mundial en términos de diversidad biológica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4. 
          |  Biodiversidad en el mundo
        figure
          img(src='@/assets/curso/t2/fig4.png', alt='Presenta un mapa del mundo en el que se identifican los países considerados megadiversos. Estos territorios se distribuyen principalmente en América del Sur, Asia y Oceanía, y se destacan por albergar un alto número de especies y ecosistemas. Colombia se encuentra en la segunda posición dentro del grupo de los diez países con mayor biodiversidad.')
        figcaption #[b Fuente:] Sibcolombia.net (2017)

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.col-md-10.col-12
        img(src='@/assets/curso/t2/img2.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p.mt-4 Colombia es reconocida como el segundo país más biodiverso del mundo, después de Brasil, a pesar de que su territorio es significativamente menor en extensión. Esta riqueza biológica se refleja en su destacada posición en diversas categorías:
        ul.lista-ul--color.lista-ul--separador.fa-al
          li 
            i.fas.fa-check-circle
            | Primer lugar en número de especies de aves y orquídeas.
          li 
            i.fas.fa-check-circle
            | Segundo lugar en diversidad de plantas, anfibios, mariposas y peces de agua dulce.
          li 
            i.fas.fa-check-circle
            | Tercer lugar en cantidad de especies de palmas y reptiles.
          li 
            i.fas.fa-check-circle
            | Cuarto lugar en número de mamíferos.
          li

    p.mb-4 Estos datos evidencian la extraordinaria diversidad biológica de Colombia y su importancia a nivel global en términos de biodiversidad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5. 
          |  Escalafón sobre biodiversidad en Colombia
        figure
          img(src='@/assets/curso/t2/fig5.png', alt='El contenido presenta la posición de Colombia a nivel mundial en diversidad biológica. El país ocupa el primer lugar en aves y orquídeas, el segundo en plantas, anfibios, mariposas y peces dulceacuícolas, el tercero en palmas y reptiles, y el cuarto en mamíferos.')
        figcaption #[b Fuente:] Sibcolombia.net (2017)

    p.mb-4 Aunque no se cuenta con un dato exacto sobre el número total de especies presentes en Colombia, existen estimaciones por grupo biológico que permiten dimensionar la magnitud de su biodiversidad. Las cifras disponibles corresponden al año 2016 y, según expertos, continúan en aumento debido a los descubrimientos realizados en expediciones científicas, especialmente en zonas que han sido accesibles tras los procesos de posconflicto.

    .row.justify-content-center.align-items-center.fondo2(data-aos="fade-down")
      .col-lg-8.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6. 
          |  Clasificación de la biodiversidad
        figure
          img.mb-2(src='@/assets/curso/t2/fig6.png', alt='Presenta la biodiversidad en seis grandes grupos: vertebrados, invertebrados, plantas, algas, hongos y líquenes. Cada grupo contiene varias categorías con su respectiva cantidad de especies registradas, lo que permite dimensionar la diversidad biológica presente según el tipo de organismo.')
        figcaption #[b Fuente:] Sibcolombia.net (2017)


</template>

<script>
export default {
  name: 'Tema2',
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
