<template>
  <div>
    <h1>Registro</h1>
    <Form @submit="onSubmit" class="needs-validation" :validation-schema="schema">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <Field name="name" type="text" class="form-control" />
        <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Apellido</label>
        <Field name="lastname" type="name" class="form-control" />
        <ErrorMessage name="lastname" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <Field name="email" type="email" class="form-control" />
        <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="mb-3">
        <label for="repeat_password" class="form-label">Repite tu contraseña</label>
        <Field name="repeat_password" type="password" class="form-control" />
        <ErrorMessage name="repeat_password" class="error-feedback" />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          <span>Registrarme</span>
        </button>
      </div>
      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
    <div class="mb-3"></div>
    <div class="mb-3"></div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import { z } from 'zod';
import { api } from '@/config/site.config.js';

export default {
  name: 'RegisterComponent',
  data() {
    const schema = toFormValidator(
      z
        .object({
          name: z.string({ required_error: 'Requerido' }).nonempty(),
          lastname: z.string({ required_error: 'Requerido' }).nonempty(),
          email: z.string({ required_error: 'Requerido' }).nonempty(),
          password: z.string({ required_error: 'Requerido' }).nonempty(),
          repeat_password: z.string({ required_error: 'Requerido' }).nonempty(),
        })
        .refine((data) => data.password === data.repeat_password, {
          message: 'Las contraseñas no coinciden.',
          path: ['repeat_password'],
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
      api
        .post('auth/register', user)
        .then((response) => {
          if (response.data.success) {
            this.message = 'Registro exitoso';
          } else {
            this.message = 'Hubo un problema con su registro';
          }
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {},
  watch: {},
  created() {},
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
