<template>
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
        <router-link :to="topic.id_topic === 2 ? '/manipulacion-aritmetica' : '/leccion/' + topic.id_topic" style="text-decoration:none; color: #000">
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
export default {
  name: 'LeccionesPage',
  data() {
    return {
      topics: json.topics,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
