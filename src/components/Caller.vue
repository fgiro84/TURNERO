<template>
  <v-main style="background-color: white;">
    <v-container   style="background-color: white;">
      <v-row style="margin-top: 0px;" > <!-- Añadimos la clase gap-4 para separación uniforme entre las columnas -->
        <!-- COL IZQUIERDA -->
        <v-col cols="12" md="4" justify="center" align="start" dense class="px-5 " >
          <!-- FILA 1 -->
          <v-row class="mb-4">
            <v-card class="flex-grow-1 d-flex justify-center align-center" color="#1b488e" dark
              style="min-height: 95px;">
              <v-card-title class="text-h5 text-center text-white">FILA MÁXIMO<br>15 UNIDADES</v-card-title>
            </v-card>
          </v-row>

          <!-- CAJA 1 -->
          <v-row class="mb-2">
            <v-card :class="{ 'custom-red': caja1 === 0 }"
              class="flex-grow-1 d-flex flex-column justify-center align-center" color="#8bc63e" dark
              style="min-height: 245px;">
              <v-card-title class="text-h5 text-center text-white">{{ caja1 === 0 ? '' : 'CAJA' }}</v-card-title>
              <div v-if="caja1 === 0" class="text-center text-white" style="font-size: 30px; font-weight: bold;">
                LAS CAJAS<br />SE ENCUENTRAN<br />OCUPADAS
              </div>
              <div v-else class="text-center text-white" style="font-size: 90px; font-weight: bold;">
                {{ caja1 }}
              </div>
              <v-card-title class="text-h5 text-center text-white">{{ caja1 === 0 ? '' : 'DISPONIBLE' }}</v-card-title>
            </v-card>
          </v-row>
        </v-col>

        <!-- COL CENTRO -->
        <v-col cols="12" md="4" justify="center" align="start" dense class="px-5">
          <!-- FILA 1 -->
          <v-row class="mb-4">
            <v-card class="flex-grow-1 d-flex justify-center align-center" color="#52c8e1" dark
              style="min-height: 95px;">
              <v-card-title class="text-h5 text-center text-white">FILA SIN LÍMITE<br>DE UNIDADES</v-card-title>
            </v-card>
          </v-row>

          <!-- CAJA 2 -->
          <v-row class="mb-2">
            <v-card :class="{ 'custom-red': caja2 === 0 }"
              class="flex-grow-1 d-flex flex-column justify-center align-center" color="#8bc63e" dark
              style="min-height: 245px;">
              <v-card-title class="text-h5 text-center text-white">{{ caja2 === 0 ? '' : 'CAJA' }}</v-card-title>
              <div v-if="caja2 === 0" class="text-center text-white" style="font-size: 30px; font-weight: bold;">
                LAS CAJAS<br />SE ENCUENTRAN<br />OCUPADAS
              </div>
              <div v-else class="text-center text-white" style="font-size: 90px; font-weight: bold;">
                {{ caja2 }}
              </div>
              <v-card-title class="text-h5 text-center text-white">{{ caja2 === 0 ? '' : 'DISPONIBLE' }}</v-card-title>
            </v-card>
          </v-row>
        </v-col>

        <!-- COL DERECHA -->
        <v-col cols="12" md="4" justify="center" align="start" dense class="px-5">
          <!-- FILA 1 -->
          <v-row class="mb-4">
            <v-card class="flex-grow-1 d-flex justify-center align-center" color="#ee7a20" dark
              style="min-height: 95px;">
              <v-card-title class="text-h5 text-center text-white">FILA PRIORIDAD</v-card-title>
            </v-card>
          </v-row>

          <!-- CAJA 3 -->
          <v-row class="mb-2">
            <v-card :class="{ 'custom-red': caja3 === 0 }"
              class="flex-grow-1 d-flex flex-column justify-center align-center" color="#8bc63e" dark
              style="min-height: 245px;">
              <v-card-title class="text-h5 text-center text-white">{{ caja3 === 0 ? '' : 'CAJA' }}</v-card-title>
              <div v-if="caja3 === 0" class="text-center text-white" style="font-size: 30px; font-weight: bold;">
                LAS CAJAS<br />SE ENCUENTRAN<br />OCUPADAS
              </div>
              <div v-else class="text-center text-white" style="font-size: 90px; font-weight: bold;">
                {{ caja3 }}
              </div>
              <v-card-title class="text-h5 text-center text-white">{{ caja3 === 0 ? '' : 'DISPONIBLE' }}</v-card-title>
            </v-card>
          </v-row>
        </v-col>
      </v-row>

      <!-- Mensaje e imagen -->
      <v-row class="px-2"> <!-- Añadimos gap-4 para separar uniformemente este bloque -->
        <v-card class="flex-grow-1 d-flex align-center" color="#b1e2f9" dark style="min-height: 100px;">
          <v-row class="d-flex align-center justify-center flex-wrap">
            <!-- Texto oculto en pantallas pequeñas y visible en pantallas medianas y grandes -->
            <v-card-title class="text-h5 text-center d-none d-md-flex"
              style="color: #025aaa; font-size: 2rem; font-weight: bold; margin-left: 70px;">
              Dos clientes por caja optimiza tu tiempo. Por eso, cuando veas un<br>espacio libre en la caja, podés pasar
              a descargar los productos.
            </v-card-title>

            <!-- Imagen centrada en pantallas pequeñas y alineada a la derecha en pantallas grandes -->
            <img src="/demofoot.png" alt="Imagen de caja"
              style="width: 180px; height: auto; margin-left: 0px; margin-right: 50px;"
              class="d-block mx-auto">
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-main>

</template>


<script>
export default {
  name: "CheckoutCards",
  data() {
    return {
      // Tres variables independientes para cada número de caja
      caja1: 2,  // Número de la primera caja
      caja2: 0,  // Número de la segunda caja
      caja3: 10,  // Número de la tercera caja
    };
  },
  mounted() {
    // Cambiar valor de caja1 a 2 cada 3 segundos
    setInterval(() => {
      this.caja2 = 3; // Establece caja1 en 2
    }, 3000);

    // Cambiar valor de caja1 a 0 cada 10 segundos
    setInterval(() => {
      this.caja2 = 0; // Establece caja1 en 0
    }, 10000);
  },

};
</script>

<style scoped>
.equal-height-card {
  min-height: 80px;
  /* Ajusta el valor según tus necesidades */
}

.custom-red {
  background-color: #ee1d23 !important;
  /* Fondo personalizado a #ee1d23 */
}
</style>
