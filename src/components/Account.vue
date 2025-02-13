<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card title="Cuentas de Usuarios" flat>
            <template v-slot:text>
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
              ></v-text-field>
            </template>

            <v-data-table
              :headers="headers"
              :items="users"
              :search="search"
              :items-per-page="10"
              no-data-text=""
            >
              <template v-slot:no-data>
                <!-- Mensaje opcional en caso de no haber datos -->
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'email',
          sortable: false,
          title: 'Correo Electrónico',
        },
        { key: 'password', title: 'Contraseña' },
        { key: 'isAdmin', title: 'Administrador' },
      ],
      users: [], // Se llenará con los datos transformados.
    };
  },

  async mounted() {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      alert("No se encontró el token de acceso. Por favor, inicia sesión nuevamente.");
      return;
    }

    try {
      const response = await axios.get("https://jsonserver.homeserveramorcito.uk/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Transformamos cada usuario para agregar la propiedad 'isAdmin'
      this.users = response.data.map(user => ({
        email: user.email,
        password: user.password,
        // isAdmin será true si role es 'admin'
        isAdmin: user.role === 'admin' ? 'Sí' : 'No',
      }));
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  },
};
</script>
