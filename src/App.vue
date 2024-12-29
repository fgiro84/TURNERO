<template>
  <v-app>
    <v-app-bar app>
      <!-- Título centrado con ícono -->
      <v-toolbar-title style="color: #E0E0E0; font-size: 32px; font-weight: bold;">
        <v-icon left color="#E0E0E0" style="font-size: 28px; margin-right: 10px;">mdi-bulletin-board</v-icon> KPI
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Hora a la derecha -->
      <span style="color: #E0E0E0; margin-right: 10px; font-size: 20px;">
        <v-icon left color="#E0E0E0" style="font-size: 20px;">mdi-clock</v-icon> {{ currentTime }}
      </span>
      <!-- Fecha a la derecha -->
      <span style="color: #E0E0E0; margin-right: 10px; font-size: 20px;">
        <v-icon left color="#E0E0E0" style="font-size: 20px;">mdi-calendar</v-icon> {{ currentDate }}
      </span>

    </v-app-bar>

    <v-main>

      <v-toolbar density="compact" color="dark" app fixed>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-earth" variant="text" v-bind="props"></v-btn>
            {{ general ? "Tiendas de " + selectedCountry : "Tienda: " + selectedOption }}
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" class="d-flex justify-right" link>
              <template v-slot:append>
                <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
              </template>
              <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                <template v-slot:activator="{ props }">
                  <v-btn text v-bind="props" @click="selectCountryHandler(item.title)">
                    <!-- Se asigna el país al hacer clic -->
                    <div class="d-flex align-center">
                      <img :src="`/src/flags/${item.flag}`" alt="Flag"
                        style="width: 24px; height: 24px; margin-right: 8px;" />
                      <span>{{ item.title }}</span>
                    </div>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(option, j) in item.options" :key="j"
                    @click="handleOptionClick(item.title, option)">
                    <v-list-item-title>{{ option }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>

        <v-card color="surface-light" style="width: 800px;">
          <v-card-text>
            <v-text-field append-inner-icon="mdi-magnify" density="compact" hide-details placeholder="Tiendas..."
              variant="outlined" single-line style="max-width: 300px;" @click:append-inner="onClick"
              rounded></v-text-field>
          </v-card-text>
        </v-card>

        <v-btn icon @click="setLanguage('es')" color="white">
          <img src="/src/flags/spain.png" alt="Español" style="width: 24px; height: 24px;" />
        </v-btn>
        <v-btn icon @click="setLanguage('pt')" color="white">
          <img src="/src/flags/brasil.png" alt="Português" style="width: 24px; height: 24px;" />
        </v-btn>
        <v-btn icon @click="setLanguage('en')" color="white">
          <img src="/src/flags/francia.png" alt="English" style="width: 24px; height: 24px;" />
        </v-btn>
      </v-toolbar>

       <v-container>
        <router-view>
          <Index :sharedselectedOption="selectedOption" :sharedselectedCountry="selectedCountry" :sharedgeneral="general"/>
        </router-view>
      </v-container>

    </v-main>

    <!-- Pie de página -->
    <v-footer app fixed>
      <span class="white--text" style="color: #E0E0E0;">&copy;
        {{ new Date().getFullYear() }}
        <span style="color: #E0E0E0">Go2Future Global LLC.</span>
        <span style="color: #E0E0E0">Todos los derechos reservados.</span>
      </span>
    </v-footer>
  </v-app>

</template>

<script>
import Index from '/src/pages/index.vue';
export default {
  name: "QueueManager",
  components: { Index },
  data() {
    return {
      general: false,
      currentTime: "",
      currentDate: "",
      selectedCountry: "País seleccionado: Argentina", // País predeterminado
      selectedOption: "Tienda: Vicente López", // Tienda predeterminada
      isFocused: false,
      items: [
        {
          title: "Argentina",
          flag: "argentina.png", // Nombre del archivo de la bandera
          options: ["Vicente López", "Córdoba", "Mendoza"],
        },
        {
          title: "Brasil",
          flag: "brasil.png",
          options: ["Pinheiros", "Brasília Sul", "Vila Velha"],
        },
        {
          title: "España",
          flag: "spain.png",
          options: ["Alcobendas", "La Maquinista", "Sevilla Este"],
        },
        {
          title: "Francia",
          flag: "francia.png",
          options: ["Montesson", "Villiers-en-Bière", "Lille"],
        },
      ],
    };
  },
  created() {
    this.updateTime();
    this.updateDate();
    setInterval(this.updateTime, 1000); // Actualiza la hora cada segundo

    // Selección inicial predeterminada
    this.handleOptionClick("Argentina", "Vicente López");
  },
  methods: {
    handleOptionClick(country, option) {
      this.selectedCountry = `${country}`;
      this.selectedOption = `${option}`;
      this.general = false;
    },
    selectCountryHandler(country) {
      // Asigna el nombre del país seleccionado a la variable selectCountry
      this.selectedCountry = `${country}`;
      this.general = true;
    },
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString(); // Solo la hora
    },
    updateDate() {
      const now = new Date();
      this.currentDate = now.toLocaleDateString(); // Solo la fecha
    },
    setLanguage(lang) {
      console.log(`Idioma seleccionado: ${lang}`);
      // Aquí puedes implementar el cambio de idioma en tu aplicación
    },
  },
};
</script>

<style scoped>
/* Ajustes para el pie de página */
.v-footer {
  color: #E0E0E0;
  text-align: center;
  padding: 10px;
}

.white--text {
  color: #E0E0E0 !important;
}

.custom-toolbar {
  background-color: #E0E0E0;
  /* Fondo gris claro */
  color: #000000;
  /* Texto negro */
}
</style>
