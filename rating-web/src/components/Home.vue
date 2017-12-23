<template>
  <div>
    <b-jumbotron>
      <p>
        <img :src="content.headerImage" width="250px" />
      </p>
      <p>
        <h6>{{content.subtitle}}</h6>
      </p>
      <p>
        <b-btn variant="success" :to="'Rating'">&nbsp;{{content.rating}}&nbsp;<i class="fa fa-md fa-heart"></i></b-btn>
        <b-btn variant="primary" :to="'Leaderboard'">{{content.leaderboard}}&nbsp;<i class="fa fa-md fa-dashboard"></i></b-btn>
      </p>
    </b-jumbotron>
    <h6>{{content.createInfo}}</h6>
    <p>
      <img :src="content.logoImage" />
      <span class="largeWhite">+&nbsp;</span>
      <img :src="content.azureLogo" />
    </p>
    <h6>source available on</h6>
    <p>
      <a :href="content.githubRepo" target="_blank">
        <i class="fa fa-github fa-2x fa-inverse"></i>
      </a>
    </p>
  </div>
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
      axios
        .get(site.home)
        .then(response => {
          this.content = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
<style>
  body {
    background-color: #444;
    color: #fff;
  }
  h6{
    color: #fff;
  }
  .largeWhite{
    color: #fff;
  }
  .jumbotron {
    background-color: #777;
    color: #fff;
  }
</style>