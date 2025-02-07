<template>
  <v-main>

    <v-container v-if="!sharedgeneral">
      <v-row justify="center">
        <v-col cols="12" md="4" class="d-flex flex-column">
          <v-card class="pa-4">
            <v-card-title class="text-center multiline-title">{{ this.$t('$vuetify.dataIterator.BoxState')
              }}</v-card-title>
            <v-card-text class="d-flex justify-center align-center" style="flex-grow: 1;">
              <v-progress-circular :model-value="(abiertas / total) * 100" :size="130" :width="20" color="green">
                <template v-slot:default>
                  <span class="text-gray">{{ ((abiertas / total) * 100).toFixed(0) }}%</span>
                </template>
              </v-progress-circular>
            </v-card-text>
            <span class="text-gray">
              {{ this.$t('$vuetify.dataIterator.BoxState2') }} {{ abiertas }} {{ this.$t('$vuetify.dataIterator.of') }}
              {{
                total }}
            </span>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-row justify="center">
            <!-- Primera Card -->
            <v-col cols="12">
              <v-card class="pa-6" outlined>
                <v-card-title class="text-center text-h6 multiline-title">{{ this.$t('$vuetify.dataIterator.atention')
                  }}</v-card-title>
                <v-card-text class="text-center">
                  <v-chip color="green" text-color="white" class="mx-auto d-flex align-center text-h6" pill>
                    <v-icon class="mr-2" size="20">mdi-account-group</v-icon>
                    <span>{{ totalClientes }}</span>
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Tercera Card -->
            <v-col cols="6">
              <v-card class="pa-4">
                <v-card-title class="text-center multiline-title" style="font-size: 22px;">{{
                  this.$t('$vuetify.dataIterator.yesterday')
                }}</v-card-title>
                <v-card-text class="text-center">
                  <v-chip color="red" text-color="white" class="mx-auto d-flex align-center text-h8" pill>
                    <v-icon class="mr-2" size="20">mdi-account-supervisor</v-icon>
                    <span>{{ totalayer }}</span>
                  </v-chip>
                </v-card-text>

              </v-card>
            </v-col>

            <!-- Cuarta Card Vacía -->
            <v-col cols="6">
              <v-card class="pa-4">
                <v-card-title class="text-center multiline-title " style="font-size: 22px;">{{
                  this.$t('$vuetify.dataIterator.yesterday30') }}</v-card-title>
                <v-card-text class="">
                  <v-chip color="blue" text-color="white" class="mx-auto d-flex align-center text-h8" pill>
                    <v-icon class="mr-2" size="20">mdi-account-clock</v-icon>
                    <span>{{ total30dias }}</span>
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-6" outlined>
            <v-card-title class="text-center"></v-card-title>
            <v-card-title class="text-center multiline-title">{{ this.$t('$vuetify.dataIterator.timep')
              }}</v-card-title>
            <v-card-title class="text-center"></v-card-title>
            <v-card-text>
              <v-progress-linear :model-value="averageTimePercentage"
                :color="averageTimePercentage > 50 ? 'red' : 'green'" height="30" class="mb-2">
              </v-progress-linear>
            </v-card-text>
            <span class="text-gray">{{ formatTime(totalAverageTime) }}</span>
            <v-card-title class="text-center"></v-card-title>
            <v-card-title class="text-center"></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="sharedgeneral">
      <v-row justify="center">
        <v-col cols="12" md="6" class="d-flex flex-column">
          <v-card class="pa-6" outlined style="flex-grow: 1;">
            <v-card-title class="text-center multiline-title">{{ this.$t('$vuetify.dataIterator.BoxState')
              }}</v-card-title>
            <v-card-text class="d-flex justify-center align-center" style="flex-grow: 1;">
              <v-progress-circular :model-value="(totalCajasAbiertas / totalcajasPorPais) * 100" :size="130" :width="20"
                color="green">
                <template v-slot:default>
                  <span class="text-gray">{{ ((totalCajasAbiertas / totalcajasPorPais) * 100).toFixed(0) }}%</span>
                </template>
              </v-progress-circular>
            </v-card-text>
            <span class="text-gray">
              {{ this.$t('$vuetify.dataIterator.BoxState2') }} {{ totalCajasAbiertas }} {{
                this.$t('$vuetify.dataIterator.of') }} {{ totalcajasPorPais }}
            </span>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-row dense>
            <v-col cols="12">
              <v-card class="pa-4" outlined>
                <v-card-title class="text-center text-h6 multiline-title">{{ this.$t('$vuetify.dataIterator.atention')
                  }}</v-card-title>
                <v-card-text class="text-center">
                  <v-chip color="green" text-color="white" class="mx-auto d-flex align-center text-h6" pill>
                    <v-icon class="mr-2" size="20">mdi-account-group</v-icon>
                    <span>{{ totalClientesAtendidos }}</span>
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Tercera Card -->
            <v-col cols="6">
              <v-card class="pa-4" outlined>
                <v-card-title class="text-center text-body-4 multiline-title">{{
                  this.$t('$vuetify.dataIterator.yesterday')
                }}</v-card-title>
                <v-card-text class="text-center">
                  <v-chip color="red" text-color="white" class="mx-auto d-flex align-center text-h6" pill>
                    <v-icon class="mr-2" size="20">mdi-account-supervisor</v-icon>
                    <span>{{ totalClientesAtendidosAyer }}</span>
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Cuarta Card Vacía -->
            <v-col cols="6">
              <v-card class="pa-4" outlined>
                <v-card-title class="text-center text-body-4 multiline-title">{{
                  this.$t('$vuetify.dataIterator.yesterday30')
                }}</v-card-title>
                <v-card-text class="text-center">
                  <v-chip color="blue" text-color="white" class="mx-auto d-flex align-center text-h6" pill>
                    <v-icon class="mr-2" size="20">mdi-account-clock</v-icon>
                    <span>{{ totalClientesAtendidos30Dias }}</span>
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" outlined>
            <v-card-title class="text-center multiline-title">{{ this.$t('$vuetify.dataIterator.timep')
              }}</v-card-title>
            <v-card-text>
              <v-progress-linear :model-value=averageTimePercentagePais
                :color="averageTimePercentagePais > 50 ? 'red' : 'green'" height="22" class="mb-2">
              </v-progress-linear>
            </v-card-text>
            <span class="text-gray">{{ formatTime(totalAverageTimePais) }}</span>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    sharedselectedOption: String,
    sharedselectedCountry: String,
    sharedgeneral: Boolean,
  },
  data() {
    return {
      totalayer: 0,
      total30dias: 0,
      total: 0,
      activas: 0,
      abiertas: 0,
      resource: "vicentelopez",
      cajas: [],
      dialogVisible: false,
      selectedCaja: null,
      totalAverageTime: 0,
      averageTimePercentage: 0,
      maxExpectedTime: 360, // Puedes ajustar el valor máximo esperado
      openBoxes: null,
      totalcajasPorPais: null,
      totalCajasAbiertas: null,
      totalTpromedio: null,
      totalAverageTimePais: 0,
      averageTimePercentagePais: 0,
      totalClientesAtendidos: 0,
      totalClientesAtendidosAyer: 0,
      totalClientesAtendidos30Dias: 0,
      loading: false,
      error: null,
      intervalId: null, // ID del intervalo para detenerlo si es necesario
    }

  },
  computed: {
    totalClientes() {
      // Sum up the `clientes` from each item in the `cajas` array
      return this.cajas.reduce((sum, caja) => sum + caja.clientes, 0);
    },
  },
  watch: {
    sharedselectedCountry(newCountry) {
      console.log('El país seleccionado cambió a: ', newCountry);
      this.getTotalCajasPorPais();  // Llama a la función recursiva al cambiar el país
    },
    resource(newResource) {
      console.log('resource cambió a: ', newResource);
      this.getTotal();  // Llamamos a getTotal para recargar los datos
      this.getTotalCajasPorPais();  // Llama a la función recursiva al cambiar el país
    },
    sharedselectedOption(newOption) {
      // Actualizamos el valor de resource cuando sharedselectedOption cambia
      this.updateResource();
    }
  },
  methods: {
    toggleEstado(caja) {
      // Cambia el estado de la caja
      caja.abierta = !caja.abierta;
    },
    updateResource() {
      switch (this.sharedselectedOption) {
        case 'Vicente López':
          this.resource = 'vicentelopez';
          break;
        case 'Córdoba':
          this.resource = 'cordoba';
          break;
        case 'Mendoza':
          this.resource = 'mendoza';
          break;
        case 'Pinheiros':
          this.resource = 'pinheiros';
          break;
        case 'Brasília Sul':
          this.resource = 'brasiliasul';
          break;
        case 'Vila Velha':
          this.resource = 'vilavelha';
          break;
        case 'Alcobendas':
          this.resource = 'alcobendas';
          break;
        case 'La Maquinista':
          this.resource = 'lamaquinista';
          break;
        case 'Sevilla Este':
          this.resource = 'sevillaeste';
          break;
        case 'Montesson':
          this.resource = 'montesson';
          break;
        case 'Villiers-en-Bière':
          this.resource = 'villiersenbiere';
          break;
        case 'Lille':
          this.resource = 'lille';
          break;
        default:
          this.resource = 'vicentelopez'; // Valor por defecto si no coincide ninguna opción
      }
    },
    getTpromedioColor(Tpromedio) {
      if (!Tpromedio) return 'grey'; // Default color si no hay datos
      if (Tpromedio <= 180) return 'green'; // Menor a 120s
      return 'red'; // Mayor a 230s
    },
    calculateAverageTime() {
      if (!this.cajas.length) {
        this.totalAverageTime = 0;
        this.averageTimePercentage = 0;
        return;
      }
      const totalTime = this.cajas.reduce((sum, caja) => sum + caja.Tpromedio, 0);
      this.totalAverageTime = Math.round(totalTime / this.cajas.length);
      this.averageTimePercentage = (this.totalAverageTime / this.maxExpectedTime) * 100;
    },
    calculateAverageTimePais() {
      this.totalAverageTimePais = Math.round(this.totalTpromedio / this.totalcajasPorPais);
      this.averageTimePercentagePais = (this.totalAverageTimePais / this.maxExpectedTime) * 100;
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}m ${remainingSeconds}s`;
    },
    async getTotalCajasPorPais() {
      this.totalcajasPorPais = 0; // Inicializar el total de cajas
      this.totalCajasAbiertas = 0; // Inicializar el total de cajas abiertas
      this.totalTpromedio = 0; // Inicializar el total acumulado de Tpromedio
      this.totalClientesAtendidos = 0; // Inicializar el total acumulado de clientes atendidos
      this.totalClientesAtendidosAyer = 0; // Inicializar el total de clientes atendidos ayer
      this.totalClientesAtendidos30Dias = 0; // Inicializar el total de clientes atendidos hace 30 días

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        alert("No se encontró el token de acceso. Por favor, inicia sesión nuevamente.");
        return;
      }


      try {
        // Lista de recursos (tiendas)
        const tiendas = [
          { name: 'Vicente López', resource: 'vicentelopez' },
          { name: 'Córdoba', resource: 'cordoba' },
          { name: 'Mendoza', resource: 'mendoza' },
          { name: 'Pinheiros', resource: 'pinheiros' },
          { name: 'Brasília Sul', resource: 'brasiliasul' },
          { name: 'Vila Velha', resource: 'vilavelha' },
          { name: 'Alcobendas', resource: 'alcobendas' },
          { name: 'La Maquinista', resource: 'lamaquinista' },
          { name: 'Sevilla Este', resource: 'sevillaeste' },
          { name: 'Montesson', resource: 'montesson' },
          { name: 'Villiers-en-Bière', resource: 'villiersenbiere' },
          { name: 'Lille', resource: 'lille' }
        ];



        const baseUrl = 'http://192.168.0.128:4000/';

        // Iterar sobre todas las tiendas
        for (let i = 0; i < tiendas.length; i++) {
          const tienda = tiendas[i];

          const response = await axios.get(`${baseUrl}${tienda.resource}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });


          // Accede a la data de la tienda
          const data = response.data || {};
          const pais = data.pais; // El país de la tienda
          const cajas = data.cajas || []; // Las cajas de la tienda

          // Sumar las cajas solo si el país coincide con el seleccionado
          if (pais === this.sharedselectedCountry) {
            this.totalcajasPorPais += cajas.length; // Total de cajas en el país seleccionado

            // Filtrar las cajas abiertas y acumular Tpromedio
            const cajasAbiertas = cajas.filter(caja => caja.abierta === true);
            this.totalCajasAbiertas += cajasAbiertas.length; // Total de cajas abiertas

            // Acumular el valor de Tpromedio de todas las cajas
            this.totalTpromedio += cajas.reduce((suma, caja) => suma + (caja.Tpromedio || 0), 0);

            // Acumular el total de clientes atendidos
            this.totalClientesAtendidos += cajas.reduce((suma, caja) => suma + (caja.clientes || 0), 0);

            // Total del día anterior y últimos 30 días
            this.totalClientesAtendidosAyer += data.totalayer;
            this.totalClientesAtendidos30Dias += data.total30dias;

          }
        }

        // Calcula tiempos promedio (opcional)
        this.calculateAverageTimePais();

        // Retornar los resultados
        return {
          totalcajasPorPais: this.totalcajasPorPais,
          totalCajasAbiertas: this.totalCajasAbiertas,
          totalTpromedio: this.totalTpromedio,
          totalClientesAtendidos: this.totalClientesAtendidos,
          totalClientesAtendidosAyer: this.totalClientesAtendidosAyer,
          totalClientesAtendidos30Dias: this.totalClientesAtendidos30Dias
        };

      } catch (error) {
        console.error("Error al obtener los datos:", error);

        // Retornar métricas en 0 en caso de error
        return {
          totalcajasPorPais: 0,
          totalCajasAbiertas: 0,
          totalTpromedio: 0,
          totalClientesAtendidos: 0,
          totalClientesAtendidosAyer: 0,
          totalClientesAtendidos30Dias: 0
        };
      }
    },
    async getTotal() {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        alert("No se encontró el token de acceso. Por favor, inicia sesión nuevamente.");
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        // Construye la URL dinámicamente usando el parámetro `resource`
        const baseUrl = 'http://192.168.0.128:4000/';

        const response = await axios.get(`${baseUrl}${this.resource}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Accede directamente al objeto `response.data`
        const data = response.data || {};

        // Procesa los datos de las cajas
        this.cajas = data.cajas || [];

        // Total de cajas
        this.total = this.cajas.length;

        // Cantidad de cajas activas
        this.activas = this.cajas.filter(caja => caja.activa).length;

        // Cantidad de cajas abiertas
        this.abiertas = this.cajas.filter(caja => caja.abierta).length;

        // Calcula tiempos promedio (opcional)
        this.calculateAverageTime();

        // Total del día anterior y últimos 30 días
        this.totalayer = data.totalayer;
        this.total30dias = data.total30dias;

      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
    showLogs(caja) {
      try {
        // Asigna la caja seleccionada
        this.selectedCaja = caja;

        // Busca los datos de la caja seleccionada
        const cajaData = this.cajas.find((item) => item.id === caja.id);
        if (!cajaData) {
          throw new Error(`Caja con ID ${caja.id} no encontrada.`);
        }

        // Extrae los tiempos de la caja seleccionada
        const tiempos = [
          cajaData.tiempo_cliente_en_atencion,
          cajaData.tiempo_cliente_en_espera,
          cajaData.tiempo_cliente_siguiente_en_espera,
        ];

        // Asigna colores según los tiempos
        const colores = tiempos.map((tiempo) =>
          tiempo < 180 ? "green" : "red"
        );

        // Configura los datos del gráfico
        this.chartData = {
          labels: [this.$t('$vuetify.dataIterator.atention1'), this.$t('$vuetify.dataIterator.wait'), this.$t('$vuetify.dataIterator.next')],
          datasets: [
            {
              label: this.$t('$vuetify.dataIterator.time1'),
              data: tiempos,
              backgroundColor: colores,
            },
          ],
        };

        // Configura las opciones del gráfico
        this.chartOptions = {
          responsive: true,
          indexAxis: "y",
          scales: {
            x: {
              title: {
                display: true,
                text: this.$t('$vuetify.dataIterator.time2'),
                color: "white",
              },
              ticks: {
                color: "white",
                font: { size: 12 },
              },
            },
            y: {
              title: {
                display: true,
                text: this.$t('$vuetify.dataIterator.atention2'),
                color: "white",
              },
              ticks: {
                color: "white",
                autoSkip: true,
                maxTicksLimit: 5,
                font: { size: 12 },
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "white",
                usePointStyle: true,
                font: {
                  size: 14,
                },
              },
              display: false,
            },
          },
        };

        // Muestra el diálogo con la gráfica
        this.dialogVisible = true;
      } catch (error) {
        console.error("Error al mostrar los logs:", error.message);
      }
    },
    startPolling() {
      // Llama a fetchData y configura el intervalo para repetir
      this.getTotal();
      this.intervalId = setInterval(() => {
        this.getTotal();
      }, 10000); // Repite cada 1 segundos (300,000 ms)
    },
    stopPolling() {
      if (this.intervalId) {
        clearInterval(this.intervalId); // Detiene el intervalo si existe
        this.intervalId = null;
      }
    },
  },
  mounted() {
    this.getTotal();  // Obtiene los datos al montar el componente
    this.getTotalCajasPorPais();
    this.calculateAverageTime();
    this.calculateAverageTimePais();
    this.startPolling(); // Inicia al montar el componente
  },
  beforeDestroy() {
    this.stopPolling(); // Detiene al desmontar el componente
  },

};
</script>

<style scoped>
.text-gray {
  color: #E0E0E0 !important;
  font-size: 22px;
  /* Ajusta el tamaño según lo que necesites */
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
}

.progress-container {
  margin: 0 auto;
  width: 75%;
  /* Reduce el ancho al 75% */
  margin-top: 8px;
  /* Espacio mínimo entre la gráfica y las barras */
  margin-bottom: 16px;
  /* Aumenta la separación entre las barras */
}

.v-chip {
  max-width: fit-content;
  /* Ajusta el ancho al contenido */
  padding: 2px 8px;
  /* Ajusta el relleno alrededor del contenido */
}

.multiline-title {
  white-space: normal;
  /* Permite varias líneas */
  word-break: break-word;
  /* Permite dividir palabras largas */
  line-height: 1.2;
  /* Ajusta el espacio entre líneas */
}

.responsive-text {
  font-size: 1rem;
  /* Tamaño por defecto */
}

@media (max-width: 600px) {
  .responsive-text {
    font-size: 0.8rem;
    /* Ajuste para pantallas pequeñas */
  }
}

@media (max-width: 400px) {
  .responsive-text {
    font-size: 0.4rem;
    /* Ajuste para pantallas muy pequeñas */
  }
}
</style>
