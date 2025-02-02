<template>
  <div>
    <LoginForm v-if="!isLoggedIn" @login-success="isLoggedIn = true" />
    <v-app v-else>
      <!-- Tu código existente para la interfaz principal -->
      <v-app-bar app fixed>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" app></v-app-bar-nav-icon>
        <v-toolbar-title>KPI</v-toolbar-title>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-earth" variant="text" v-bind="props"></v-btn>
            {{ general ? $t('$vuetify.dataIterator.Stores') + ' ' + selectedCountry :
              $t('$vuetify.dataIterator.Store') + ': ' + selectedOption }}
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

                      <img :src="`/flags/${item.flag}`" alt="Flag"
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

        <v-card style="width: 800px;">
          <v-card-text style="display: flex; align-items: center;">
            <!-- Campo de texto con búsqueda -->
            <v-text-field v-model="searchQuery" append-inner-icon="mdi-magnify" density="compact" hide-details
              :placeholder="$t('$vuetify.dataIterator.search')" variant="outlined" single-line style="max-width: 300px;"
              rounded></v-text-field>

            <!-- Sugerencias como v-chip a la derecha -->
            <div v-if="searchQuery && filteredItems.length" style="margin-left: 16px; display: flex; flex-wrap: wrap;">
              <v-chip v-for="(item, index) in limitedItems" :key="index" class="ma-1" color="white" outlined
                @click="selectStore(item)">
                {{ item.city }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>


        <v-btn icon @click="setLanguage('es')" color="white">
          <img src="/flags/spain.png" alt="Español" style="width: 24px; height: 24px;" />
        </v-btn>
        <v-btn icon @click="setLanguage('pt')" color="white">
          <img src="/flags/brasil.png" alt="Português" style="width: 24px; height: 24px;" />
        </v-btn>
        <v-btn icon @click="setLanguage('fr')" color="white">
          <img src="/flags/francia.png" alt="English" style="width: 24px; height: 24px;" />
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" app>
        <template v-slot:prepend>
          <v-list-item lines="two" prepend-avatar="/max.png" subtitle="Logged in" title="MAX T CARR"></v-list-item>
        </template>

        <v-divider></v-divider>
        <v-list nav>
          <v-list-item @click="navigateToIndex" prepend-icon="mdi-view-dashboard" title="Panel" value="dashboard"
            color="#00ffcc"></v-list-item>
          <v-list-item @click="navigateToCaller" prepend-icon="mdi-phone-outline" title="Llamador" value="caller"
            color="#00ffcc"></v-list-item>
          <v-list-item @click="navigateToAccount" prepend-icon="mdi-account-cog" title="Cuentas" value="error"
            color="#00ffcc"></v-list-item>
          <v-list-item @click="navigateToSetting" prepend-icon="mdi-cogs" title="Configurar" value="config"
            color="#00ffcc"></v-list-item>
          <v-list-item @click="openDialog('logout')" prepend-icon="mdi-exit-to-app" title="Salir"
            color="#00ffcc"></v-list-item>
        </v-list>
        <v-dialog v-model="dialogVisible" persistent max-width="500px">
          <v-card>
            <v-card-title>{{ dialogTitle }}</v-card-title>
            <v-card-text>{{ dialogMessage }}</v-card-text>
            <v-card-actions>
              <v-btn prepend-icon="mdi-cancel" class="mb-8" variant="tonal" color="#f0143c"
                @click="closeDialog">Cancelar</v-btn>
              <v-btn prepend-icon="mdi-check-outline" class="mb-8" variant="tonal" color="#00ffcc"
                @click="confirmDialogAction">Aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-navigation-drawer>
      <router-view :sharedselectedOption="selectedOption" :sharedselectedCountry="selectedCountry"
        :sharedgeneral="general" />
      <v-footer app fixed>
        <span class="white--text" style="color: #E0E0E0;">&copy;
          {{ new Date().getFullYear() }}
          <span style="color: #E0E0E0">Go2Future Global LLC.</span>
          <span style="color: #E0E0E0">Todos los derechos reservados.</span>
        </span>
        <v-spacer></v-spacer>
        <!-- Hora a la derecha -->
        <span style="color: #E0E0E0; margin-right: 10px;">
          <v-icon left color="#E0E0E0">mdi-clock</v-icon> {{ currentTime }}
        </span>
        <!-- Fecha a la derecha -->
        <span style="color: #E0E0E0; margin-right: 10px;">
          <v-icon left color="#E0E0E0">mdi-calendar</v-icon> {{ currentDate }}
        </span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import LoginForm from '/src/components/LoginForm.vue';
import Index from '/src/pages/index.vue';


export default {
  data: () => ({
    searchQuery: "",
    colors: ["primary", "secondary", "success", "error", "info", "warning", "pink", "indigo"], // Colores predefinidos
    currentLocale: '',
    currentMessages: '',
    isLoggedIn: false,
    dialogVisible: false,
    dialogTitle: '',
    dialogMessage: '',
    general: false,
    currentTime: "",
    currentDate: "",
    selectedCountry: "País seleccionado: Argentina", // País predeterminado
    selectedOption: "Tienda: Vicente López", // Tienda predeterminada
    isFocused: false,
    drawer: false,
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
  }),
  components: {
    LoginForm,
    Index,
  },
  created() {
    // Asigna el idioma y las traducciones a las variables para mostrar en la interfaz
    this.currentLocale = this.$i18n.locale;
    this.updateTime();
    this.updateDate();

    setInterval(this.updateTime, 1000); // Actualiza la hora cada segundo

    // Selección inicial predeterminada
    this.handleOptionClick("Argentina", "Vicente López");

  },
  methods: {
    openDialog(action) {
      if (action === 'logout') {
        this.dialogTitle = 'Cerrar Sesión';
        this.dialogMessage = '¿Está seguro que desea cerrar sesión?';
      }
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    confirmDialogAction() {
      if (this.dialogTitle === 'Cerrar Sesión') {
        this.logout();
      }
      this.dialogVisible = false;
    },
    logout() {
      this.navigateToIndex();
      this.isLoggedIn = false; // Cambiar a estado no logueado
    },

    selectStore(store) {
      console.log(`Tienda seleccionada: ${store.city}`);
      this.searchQuery = "", // Actualiza el campo con la tienda seleccionada
        this.selectedOption = `${store.city}`;

      this.general = false;
    },
    handleOptionClick(country, option) {
      this.selectedCountry = `${country}`;
      this.selectedOption = `${option}`;
      console.log(`Tienda seleccionada: ${option}`);
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
      this.$i18n.locale = lang;  // Cambia el idioma
      console.log(this.$i18n.locale);  // Verifica que el idioma se haya cambiado correctamente
      console.log(this.$t('$vuetify.dataIterator.Store'));

    },
    navigateToIndex() {
      this.$router.push({ path: '/' });
    },
    navigateToCaller() {
      this.$router.push({ path: '/caller' });
    },
    navigateToAccount() {
      this.$router.push({ path: '/account' });
    },
    navigateToSetting() {
      this.$router.push({ path: '/setting' });
    },
  },
  computed: {
    filteredItems() {
      return this.items
        .map(item =>
          item.options
            .filter(option =>
              option.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
            .map(city => ({ city }))
        )
        .flat();
    },
    limitedItems() {
      // Limitamos las sugerencias a 3
      return this.filteredItems.slice(0, 3);
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
