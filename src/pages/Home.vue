<template>
  <div class="row" style="background-color: #212121">
    <div class="col-12">
      <div class="container">
        <div class="row p-4 d-flex justify-content-center align-items-center">
          <div class="col-sm-12 col-md-6 highlights">
            <h3>Análisis Numérico</h3>
            <p>
              Encuentra diversos tópicos, ejemplos ilustrativos y recursos orientados al aprendizaje
              del análisis numérico.
            </p>
          </div>
          <div class="col-sm-12 col-md-6">
            <h4 style="color: white">Desafíos</h4>
            <swiper :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <router-link to="/leccion/1">
                  <img
                    src="https://i.ibb.co/8zssRjB/ejemplo-Paracaidista.png"
                    alt="ejemplo-Paracaidista"
                  />
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/manipulacion-aritmetica">
                  <img src="https://i.ibb.co/rsWzR11/topic2.png" alt="Manipulación aritmética" />
                </router-link> </swiper-slide
              ><swiper-slide>
                <router-link to="/calculadora">
                  <img
                    src="https://i.ibb.co/VD5Z2wq/ejemplo-Condensador.png"
                    alt="ejemplo-Condensador"
                  />
                </router-link>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 py-md-2 mb-4">
        <h1 class="text-center" id="topic">Lecciones</h1>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(topic, index) in topics"
        :key="index"
        class="col-sm-12 col-md-4 lesson-card d-flex align-items-center"
      >
        <router-link
          :to="topic.id_topic === 2 ? '/manipulacion-aritmetica' : '/leccion/' + topic.id_topic"
          style="text-decoration: none; color: #000"
        >
          <div class="p-4 py-3">
            <img :src="topic.topic_image" class="img-fluid" align="center" />
            <h5 class="text-center mt-3">{{ topic.topic_name }}</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import json from '../topics.json';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
export default {
  name: 'HomePage',
  data() {
    return {
      topics: json.topics,
    };
  },
  methods: {},
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
