<template>
  <div>
    <v-img class="mx-auto my-6" max-width="120" src="/src/assets/favicon.png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field v-model="email" density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
        variant="outlined" autocomplete="email"></v-text-field>

      <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" autocomplete="current-password"
        @click:append-inner="visible = !visible"></v-text-field>

      <v-btn class="mb-8" color=#28d6cc size="large" variant="tonal" block @click="handleLogin">
        Log In
      </v-btn>
      <v-card-text class="text-center">
        <a style="color: #28d6cc;" class="text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>

    </v-card>

  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    visible: false,
  }),
  methods: {
    handleLogin() {
      const defaultEmail = 'fidel@go2future.com';
      const defaultPassword = '1234';

      if (this.email === defaultEmail && this.password === defaultPassword) {
        this.$emit('login-success'); // Notifica al componente padre
      } else {
        alert('Credenciales incorrectas. Intenta de nuevo.');
      }
    },
  },
};
</script>
