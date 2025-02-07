<template>
  <div>
    <v-img class="mx-auto my-6" max-width="120" src="/src/assets/favicon.png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" v-if="isLoginFormVisible" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">{{ this.$t('$vuetify.dataIterator.account') }}</div>

      <v-text-field v-model="email" density="compact" :placeholder="$t('$vuetify.dataIterator.mail')"
        prepend-inner-icon="mdi-email-outline" variant="outlined" autocomplete="email"
        :rules="[rules.required, rules.email]"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        {{ this.$t('$vuetify.dataIterator.password') }}

        <a class="text-caption text-decoration-none" href="#" rel="noopener noreferrer" target="_blank"
          style="color: #28d6cc;">
          Olvidaste tú contraseña?
        </a>
      </div>

      <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'" density="compact" :placeholder="$t('$vuetify.dataIterator.pass')"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" autocomplete="current-password"
        @click:append-inner="visible = !visible" :rules="[rules.required, rules.min]"></v-text-field>

      <v-btn class="mb-8" color="#28d6cc" size="large" variant="tonal" block @click="handleLogin">

        {{ this.$t('$vuetify.dataIterator.log') }}
      </v-btn>
      <v-alert v-if="errorMessage" type="error" variant="tonal" class="mb-4">
        {{ errorMessage }}
      </v-alert>
      <v-card-text class="text-center">
        <a style="color: #28d6cc;" class="text-decoration-none" href="#" rel="noopener noreferrer" target="_blank"
          @click.prevent="isLoginFormVisible = false">
          {{ this.$t('$vuetify.dataIterator.sign') }} <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>

    </v-card>

    <v-card v-if="!isLoginFormVisible" class="mx-auto" style="max-width: 500px">
      <v-toolbar style="color: #28d6cc;" cards dark flat>
        <v-btn icon @click="isLoginFormVisible = true">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-toolbar>
      <v-form ref="form" v-model="isValid" class="pa-4 pt-6">

        <div class="text-subtitle-1 text-medium-emphasis">{{ this.$t('$vuetify.dataIterator.account') }}</div>

        <v-text-field v-model="email" :rules="[rules.email]" color="#28d6cc" prepend-inner-icon="mdi-email-outline"
          :label="$t('$vuetify.dataIterator.mail')" type="email" variant="filled"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          {{ this.$t('$vuetify.dataIterator.password') }}

        </div>
        <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'" density="compact" prepend-inner-icon="mdi-lock-outline"
          :rules="[rules.password]" color="#28d6cc" counter="6" :label="$t('$vuetify.dataIterator.pass')"
          style="min-height: 96px" variant="filled" autocomplete="current-password"
          @click:append-inner="visible = !visible"></v-text-field>


        <v-checkbox v-model="agreement" :rules="[rules.required]" style="color: #28d6cc;">
          <template v-slot:label>
            I agree to the&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
            &nbsp;and&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
          </template>
        </v-checkbox>
      </v-form>
      <!-- Mensaje de error -->
      <v-alert v-if="errorMessage" type="error" class="mt-4">
        {{ errorMessage }}
      </v-alert>

      <!-- Mensaje de éxito -->
      <v-alert v-if="successMessage" type="success" class="mt-4">
        {{ successMessage }}
      </v-alert>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn variant="text" @click="clearForm"> BORRAR </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!isValid" :loading="isLoading" style="color: #28d6cc;" @click="handleRegister">
          ENVIAR
        </v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog" max-width="400" persistent>
        <v-card>
          <v-card-title class="text-h5 bg-grey-lighten-3"> Legal </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn variant="text" @click="agreement = false, dialog = false">
              No
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple" variant="tonal" @click="agreement = true, dialog = false">
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: () => ({

    isLoginFormVisible: true,  // Estado para controlar el formulario visible
    email: '',
    password: '',
    visible: false,
    errorMessage: '',
    agreement: false,
    dialog: false,
    isValid: false,
    isLoading: false,
    errorMessage: "",
    successMessage: "",
    rules: {
      required: value => !!value || 'Este campo es obligatorio',
      min: value => value.length >= 6 || 'Mínimo 6 caracteres',
      email: v => !!(v || '').match(/@/) || 'Por favor entre correo válido',
      length: len => v =>
        (v || '').length >= len ||
        `Invalid character length, required ${len}`,
      password: v => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        return regex.test(v) ||
          'La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial';
      },

    },
  }),
  computed: {

  },
  methods: {
    clearForm() {
      this.email = '';
      this.password = '';
      this.errorMessage = '';
    },
    async handleLogin() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }

      try {
        const response = await axios.post('http://192.168.0.128:4000/login', {
          email: this.email,
          password: this.password,
        }, {
          headers: { 'Content-Type': 'application/json' },
        });

        const { accessToken, user } = response.data;

        if (accessToken) {
          // Guardar token en localStorage
          localStorage.setItem('accessToken', accessToken);

          // Emitir evento con los datos del usuario
          this.$emit('login-success', user);


        }
      } catch (error) {
        this.errorMessage = error.response?.data || 'Error al conectar con el servidor.';
      }
    },
    async handleRegister() {
      if (!this.isValid) return;

      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const response = await axios.post("http://192.168.0.128:4000/register", {
          email: this.email,
          password: this.password,
        }, {
          headers: { "Content-Type": "application/json" },
        });

        const { accessToken, user } = response.data;

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
          this.$emit("register-success", user);

          // Mostrar mensaje de éxito
          this.successMessage = "Registro exitoso. Ahora puedes iniciar sesión.";

          // Limpiar campos después de 3 segundos
          setTimeout(() => {
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
            this.successMessage = "";
            this.isLoginFormVisible= true;  // Estado para controlar el formulario visible
          }, 3000);
        }
      } catch (error) {
        this.errorMessage = error.response?.data || "Error al conectar con el servidor.";
      } finally {
        this.isLoading = false;
      }
    },

  },
};
</script>
