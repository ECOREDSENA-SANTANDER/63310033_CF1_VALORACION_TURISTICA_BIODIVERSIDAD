<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 ¿Qué son los “#[em hotspots]” de biodiversidad?

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-5.col-md-10.col-12
        img(src='@/assets/curso/t3/img1.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p Los #[em hotspots] de biodiversidad son regiones geográficas que albergan una extraordinaria riqueza de especies, especialmente de plantas vasculares (con más de 1.500 especies endémicas), y una elevada concentración de especies de vertebrados que no se encuentran en ninguna otra parte del planeta. Para ser considerado un #[em hotspot], además de esta alta biodiversidad, el área debe haber sufrido una significativa pérdida de su hábitat natural debido a actividades humanas, como la deforestación, la expansión urbana o la agricultura intensiva.
        p Estos lugares son prioritarios para la conservación, ya que representan zonas críticas donde la biodiversidad se encuentra altamente amenazada. A pesar de cubrir apenas una pequeña fracción de la superficie terrestre mundial, los #[em hotspots] concentran una parte considerable de la vida del planeta, lo que los convierte en esenciales para la protección de la diversidad biológica global.

    p.mb-4 Se han identificado 35 #[em hotspots] de biodiversidad en el mundo, distribuidos de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-12
        img(src='@/assets/curso/t3/img2.png', alt='')
      .col-lg-9.col-md-12.col-sm-12      
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="África")
            .row.justify-content-center.align-items-center
              .col-lg-6
                ul.lista-ul--color.fa-al
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Región floral de Cape Town
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Bosques costeros del este de África
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Región montañosa del este de África
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Bosques guineanos del oeste de África
              .col-lg-6
                ul.lista-ul--color.fa-al
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Cuerno de África
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Madagascar
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Maputaland - Pondoland - Albany
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Karoo
          .row.col-xl-11.m-auto(titulo="Asia y el Pacífico")
            .row.justify-content-center.align-items-center
              .col-lg-6
                ul.lista-ul--color.fa-al
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Islas de Melanesia del este
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Himalayas
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Indochina - Birmania
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Montañas del suroeste de China
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Nueva Caledonia
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Nueva Zelanda
              .col-lg-6
                ul.lista-ul--color.fa-al
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Filipinas
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Polinesia - Micronesia
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Suroeste de Australia
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Sundaland
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Wallacea
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Ghat occidentales y Sri Lanka
          .row.col-xl-11.m-auto(titulo="Europa y Asia Central")
            .row.justify-content-center.align-items-center
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cáucaso
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Irán - Anatolia
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cuenca del Mediterráneo
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Montañas de Asia Central
          .row.col-xl-11.m-auto(titulo="Norte y Centroamérica")
            .row.justify-content-center.align-items-center
                ul.lista-ul--color.fa-al
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Provincia forestística californiana
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Islas del Caribe
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Mesoamérica
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Bosques de pinos y robles madrones
          .row.col-xl-11.m-auto(titulo="Sudamérica")
            .row.justify-content-center.align-items-center
                ul.lista-ul--color.fa-al
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Bosque Atlántico
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Cerrado
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Bosque valdiviano
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Andes tropicales
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-0 Chocó biogeográfico

    .row.justify-content-center.align-items-center.mb-5.mt-4(data-aos="fade-down")
      .col-lg-8.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7. 
          |  #[em Hotspots] de biodiversidad en el mundo
        figure
          img.mb-2(src='@/assets/curso/t3/fig7.png', alt='El contenido representa las regiones del planeta con mayor concentración de biodiversidad y alto grado de amenaza. Estas zonas se distribuyen en distintos continentes, especialmente en áreas tropicales y subtropicales, donde se concentran especies endémicas y ecosistemas vulnerables.')
        figcaption #[b Fuente:] SENA

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t3/img3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Colombia alberga dos #[em hotspots] de biodiversidad reconocidos a nivel mundial:
            br
            br
            | #[b “Tumbes - Chocó - Magdalena” y los “Andes Tropicales”.]
            br
            br
            | La bioregión “Tumbes - Chocó - Magdalena” se caracteriza por una gran diversidad de hábitats, que incluyen manglares, playas, desiertos costeros y algunos de los bosques lluviosos más húmedos y biodiversos del planeta.  

    .row.justify-content-center.align-items-center.fondo3.mb-5(data-aos="fade-right")
    
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8. 
          |  Región Tumbes - Choco - Magdalena 
        figure
          img.mb-2(src='@/assets/curso/t3/fig8.png', alt='El contenido identifica una zona geográfica que se extiende desde el sureste de Panamá, recorre la costa pacífica de Colombia y Ecuador, y llega hasta el noroeste de Perú. Esta región es reconocida como un área de alta biodiversidad terrestre y marina, con ecosistemas estratégicos y especies endémicas. ')
        figcaption #[b Fuente:] Infoecologia (2017)
      .col-lg-5.col-md-12.col-sm-12
        p.mb-3 Por su parte, los “Andes Tropicales” conforman una región de gran complejidad geográfica, con múltiples microclimas originados por su relieve montañoso. Este territorio abarca imponentes nevados, profundos cañones y amplios valles interandinos, lo que favorece la existencia de una extraordinaria variedad de ecosistemas y especies.
        .row.justify-content-center.align-items-center
          .col-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 9. 
              |  Los Andes Tropicales
            figure
              img.mb-2(src='@/assets/curso/t3/fig9.png', alt='El contenido representa una región que abarca zonas montañosas de Venezuela, Colombia, Ecuador, Perú, Bolivia y el norte de Argentina. Esta área se destaca por su riqueza biológica y variedad de ecosistemas asociados a la cordillera andina en su zona tropical.')
            figcaption #[b Fuente:] Infoecologia (2017)

    p.mb-4 Esta biodiversidad se distribuye a lo largo de diversos ecosistemas terrestres y marino costeros, los cuales en Colombia se agrupan en cinco ecorregiones terrestres y dos ecorregiones marinas, de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10. 
          |  Ecosistemas colombianos
        figure
          img.mb-2(src='@/assets/curso/t3/fig10.png', alt='Clasifica los ecosistemas colombianos en dos grandes grupos: terrestres y marino costeros. Dentro de los ecosistemas terrestres se incluyen el Chocó biogeográfico, las Llanuras del Caribe, la Amazonía, la Orinoquía y la región Andina. En cuanto a los marino-costeros, se identifican las zonas del Pacífico y del Caribe.')
        figcaption #[b Fuente:] Ministerio de Ambiente y Desarrollo Sostenible (2015)
      .col-lg-8.col-md-12.col-sm-12
          img(src='@/assets/curso/t3/img4.png', alt='')




</template>

<script>
export default {
  name: 'Tema3',
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
