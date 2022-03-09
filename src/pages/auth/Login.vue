<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema" class="needs-validation">
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <div class="input-group has-validation">
          <Field name="email" type="email" class="form-control" />
          <div class="invalid-feedback">
            <ErrorMessage as="div" name="email" class="error-feedback" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="password">Contraseña</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Iniciar Sesión</span>
        </button>
      </div>
      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import { z } from 'zod';

export default {
  name: 'LoginPage',
  data() {
    const schema = toFormValidator(
      z.object({
        email: z
          .string({ required_error: 'El correo electrónico es un campo requerido.' })
          .min(1, 'El correo electrónico es un campo requerido.'),
        password: z
          .string({ required_error: 'La contraseña es un campo requerido.' })
          .min(1, 'La contraseña es un campo requerido.'),
      }),
    );
    return {
      loading: false,
      message: '',
      schema,
    };
  },
  methods: {
    onSubmit(user) {
      this.loading = true;
      this.$store.dispatch('auth/login', user).then(
        () => this.$router.push('/'),
        (error) => {
          this.loading = false;
          this.message = error;
        },
      );
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  watch: {},
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  mounted() {},
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
