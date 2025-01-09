<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card>
              <v-card-title>Configurar Tienda</v-card-title>
              <v-container>
                <v-container>
                  <v-text-field v-model="store" density="compact" placeholder="Nombre de la Tienda"
                    prepend-inner-icon="mdi-storefront-outline" variant="outlined"></v-text-field>

                  <v-text-field v-model="country" density="compact" placeholder="País"
                    prepend-inner-icon="mdi-web" variant="outlined"></v-text-field>

                    <v-text-field v-model="urlink" density="compact" placeholder="URL Link"
                    prepend-inner-icon="mdi-application-outline" variant="outlined"></v-text-field>

                  </v-container>
                <v-btn type="submit" prepend-icon="mdi-content-save" color="#00ffcc" class="mb-8" variant="tonal"
                  @click="postData1">Guardar</v-btn>
              </v-container>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>


export default {
  data() {
    return {
      email: '',
      password: '',
      visible: false,
      password2: '',
      visible2: false,

    };
  },

  mounted() {

  },
  methods: {


    postData1() {
      // Datos a enviar en la solicitud POST
    },


  }
};
</script>
