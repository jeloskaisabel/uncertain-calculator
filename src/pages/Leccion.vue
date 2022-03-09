<template>
  <div class="row py-4" style="background-color: #212121">
    <div class="col-12">
      <div class="container">
        <div class="row p-4 d-flex justify-content-center">
          <div class="col-sm-12 col-md-8" align="center">
            <div class="row">
              <div class="col-12 topic-development">
                <h1 id="topic" style="color: white">{{ topic.topic_name }}</h1>
                <p style="color: white">
                  {{ topic.topic_description }}
                </p>
                <div v-if = "topic.id_topic = 1">
                   <div class="embed-responsive embed-responsive-21by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed//mYMZtYhQtPo"  width="560" height="315" ></iframe>
                </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from '../topics.json';
export default {
  name: 'LeccionPage',
  props: ['id'],
  data() {
    return {
      topic: json.topics[this.id - 1],
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
