<template>
  <b-jumbotron :header="content.title" :lead="content.subtitle" >
    <p>{{content.info}}</p>
    <p>Check out the source on <a :href="content.github" target="_blank">github</a>
    </p>
    <b-btn variant="success" :to="'Rating'">{{content.rating}}</b-btn>
    <b-btn variant="primary" :to="'Leaderboard'">{{content.leaderboard}}</b-btn>
  </b-jumbotron>
</template>

<script>
const site = process.env.SITE_DATA
import axios from 'axios'

export default {
  data () {
    return {
      content: [],
      errors: []
    }
  },
  created () {
    axios.get(site.home)
    .then(response => {
      this.content = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>