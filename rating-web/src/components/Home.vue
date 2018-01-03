<template>
  <div class="container-fluid">
    <div class="app">
      <div class="row at-row flex-center flex-middle">
        <div class="col-lg-24">
          <img class="super-justice" src="/static/img/justice.png">
          <h1 class="super-header">Rate the Superhero</h1>
        </div>
      </div>
      <div class="row at-row">
        <div class="col-lg-6">
          <div class="at-box-row">
            stuff
          </div>
        </div>
                <div class="col-lg-6">
          <div class="at-box-row">
            stuff
          </div>
        </div>
                <div class="col-lg-6">
          <div class="at-box-row">
            stuff
          </div>
        </div>
                <div class="col-lg-6">
          <div class="at-box-row">
            stuff
          </div>
        </div>
      </div>
      <div class="row at-row flex-center flex-middle">
        <div class="col-lg-12">
          <at-button @click="link('Rating')" icon="icon-star" type="primary" hollow>Rate Heros</at-button>
        </div>
        <div class="col-lg-12">
          <at-button @click="link('Leaderboard')" icon="icon-bar-chart-2" type="success" hollow>Leaderboard</at-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    console.log(process.env.MONGODB_URI)
    return {
      site: []
    }
  },
  created () {
    document.title = `a new title`
  },
  methods: {
    link (rel) {
      this.$router.push({name: rel})
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bangers|Permanent+Marker");
</style>