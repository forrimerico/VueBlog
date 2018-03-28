/* eslint-disable */
<template>
  <div>
    <myHeader></myHeader>
    <div class="container">
      <section class="col-md-12 content" id="home" v-for="(data, index) in datas" v-bind:key="index">
            <div class="col-lg-6 col-md-6 content-item">
                <img src="../../static/images/1.jpg" alt="Image" class="tm-image">
            </div>
            <div class="col-lg-6 col-md-6 content-item content-item-1 background">
                <h2 class="main-title text-center dark-blue-text">{{data.title}}</h2>
                <p>{{data.content}}</p>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
import VueResource from 'vue-resource'
import Vue from 'vue'
import myHeader from './myheader.vue'

Vue.use(VueResource)
export default {
  name: 'home',
  components: { myHeader },
  data () {
    return {
      datas: []
    }
  },
  methods: {
    articles () {
      console.log('test')
      let url = global.BASEURL + '/api/articles'
      console.log(url)
      this.$http.get(url).then(function (response) {
        console.log(response.data)
        this.datas = response.data.data
        console.log(this.datas)
      })
    }
  },
  created () {
    this.articles()
  }
}
</script>

<style scoped>
</style>
