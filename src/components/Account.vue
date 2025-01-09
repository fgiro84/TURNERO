<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card>
              <v-card-title>Configurar Cuenta</v-card-title>
              <v-container>
                <v-container>
                  <v-text-field v-model="email" density="compact" :placeholder="$t('$vuetify.dataIterator.mail')"
                    prepend-inner-icon="mdi-email-outline" variant="outlined" autocomplete="email"></v-text-field>

                  <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'" density="compact"
                    :placeholder="$t('$vuetify.dataIterator.pass')" prepend-inner-icon="mdi-lock-outline"
                    variant="outlined" autocomplete="current-password"
                    @click:append-inner="visible = !visible"></v-text-field>

                  <v-text-field v-model="password2" :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible2 ? 'text' : 'password'" density="compact"
                    :placeholder="$t('$vuetify.dataIterator.pass2')" prepend-inner-icon="mdi-lock-check-outline"
                    variant="outlined" autocomplete="current-password"
                    @click:append-inner="visible2 = !visible2"></v-text-field>

                    <v-checkbox label="Administrador"></v-checkbox>

                </v-container>
                <v-btn type="submit" prepend-icon="mdi-content-save" color="#00ffcc" class="mb-8" variant="tonal"
                  @click="postData1">Guardar</v-btn>
              </v-container>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card title="Cuentas" flat>
            <template v-slot:text>
              <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                hide-details single-line></v-text-field>
            </template>

            <v-data-table :headers="headers" :items="desserts" :search="search" :items-per-page="3"></v-data-table>
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
      search: '',
        headers: [
          {
            align: 'start',
            key: 'mail',
            sortable: false,
            title: 'Correo Electrónico',
          },
          { key: 'password', title: 'Contraseña' },
          { key: 'admin', title: 'Administrador' },
        ],
        desserts: [
          { mail: 'davidking@outlook.com', password: 771780, admin: false },
          { mail: 'migueluo@gmail.com', password: 329738, admin: false },
          { mail: 'annataylor@yahoo.com', password: 812567, admin: true },
          { mail: 'chriswhite@gmail.com', password: 253279, admin: true },
          { mail: 'annataylor@yahoo.com', password: 390565, admin: false },
          { mail: 'janedoe@gmail.com', password: 630442, admin: true },
          { mail: 'alexbrown@outlook.com', password: 420691, admin: true },
          { mail: 'migueluo@yahoo.com', password: 456345, admin: false },
          { mail: 'davidking@yahoo.com', password: 388601, admin: false },
          { mail: 'sarahlee@outlook.com', password: 894501, admin: false },
        ],
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
