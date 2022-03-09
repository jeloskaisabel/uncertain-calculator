<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #000">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span><i class="bi bi-list" style="color: white"></i></span>
        </button>
        <div class="collapse navbar-collapse d-md-flex justify-content-between py-2" id="navbarNav">
          <template v-for="(navOption, index) in navOptions" :key="index">
            <div>
              <a>
                <router-link
                  class="nav-link"
                  :class="this.$route.path === navOption.route ? 'active' : ''"
                  :to="navOption.route"
                >
                  {{ navOption.text }}
                </router-link>
              </a>
            </div>
          </template>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './assets/scss/stylesheet.scss';

export default {
  name: 'App',
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    navOptions() {
      let navOptions = [
        {
          route: '/',
          text: 'Inicio',
        },
        {
          route: '/lecciones',
          text: 'Lecciones',
        },
        {
          route: '/desafios',
          text: 'Desafíos',
        },
      ];
      return navOptions;
    },
  },
  watch: {},
  mounted() {},
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
