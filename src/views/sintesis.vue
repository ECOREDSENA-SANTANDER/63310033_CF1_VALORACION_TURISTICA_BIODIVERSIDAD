<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El turismo y la biodiversidad sostenible están estrechamente relacionados, ya que la conservación de los recursos naturales es esencial para garantizar experiencias turísticas responsables y duraderas. Comprender los componentes de la biodiversidad y su interacción con factores como el cambio climático permite analizar el papel de Colombia en el contexto global y la importancia de proteger especies, ecosistemas y servicios ecosistémicos. Esta síntesis organiza los conceptos clave que permiten una aproximación integral al vínculo entre turismo, biodiversidad y sostenibilidad. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="La síntesis aborda la relación entre biodiversidad y turismo sostenible, destacando componentes biológicos y su impacto en Colombia. Incluye la concentración de especies en regiones prioritarias, los efectos del cambio climático y la clasificación de los servicios ecosistémicos, así como categorías clave como ecosistemas, hábitats y especies en riesgo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
