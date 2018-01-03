
<template>
  <div class="container-fluid" id="app">
    <div class="app">
      <div class="row at-row flex-center flex-middle">
        <div class="col-lg-24">
          <img class="super-justice" src="/static/img/justice.png">
          <h1 class="super-header">Rate the Superhero</h1>
        </div>
      </div>
      <div class="row at-row">
        <div class="col-lg-6" v-for="(item) in heroes">
          <div class="at-box-row">
            <at-card :bordered="false">
              <h4 slot="title" class="super-name">
                {{item.name}}
              </h4>
              <div>
                <img class="super-image" :src="item.img">
                <div class="super-rate-foot">
                  <at-rate :allow-half="true" @on-change="rateHero(item.uid, item.name, $event)"></at-rate>
                </div>
              </div>
            </at-card>
          </div>
        </div>
      </div>
      <div class="row at-row flex-center flex-middle">
        <div class="col-lg-24 super-vote">
          <at-button @click="submitRatings" size="large">&nbsp;&nbsp;SUBMIT MY RATINGS&nbsp;&nbsp;</at-button>
        </div>
      </div>
    </div>
  </div>
</template>

// <script>
  import axios from 'axios'

export default {
  data () {
    return {
      project: [],
      heroes: [],
      errors: []
    }
  },
    created() {
      axios.get(process.env.HEROES) 
        .then(response => {
          this.heroes = response.data
          this.$Notify({ title: 'Heroes loaded', message: 'Retrieved list of Heroes', type: 'success' })
        })
        .catch(e => {
          this.errors.push(e)
        })

    },
    methods: {
      rateHero: function (id, name, event) {
        localStorage.setItem(id, event);
        console.log(id + ` Rating recorded for ` + name + ` at ` + event + ` stars`)
        if (id === 4 && event > 3.5) {
          this.$Notify({ title: `Seriously?`, message: `He's just a rich guy. Zero super powers. Altrustic? Yes. Not a Superhero. Are you a PM?`, type: 'warning', duration: 10000 })
        }
        // this.$Notify({ title: 'Rating', message: 'We all know Superman is the only Superhero.', type: 'success' })
        // this.$Notify({ title: 'Vote accepted', message: 'You rated ' + id + ' at ' + val, type: 'success' })
      },
      submitRatings() {
        var items = []
        items.push({ id: 1, rating: localStorage.getItem(1) })
        items.push({ id: 2, rating: localStorage.getItem(2) })
        items.push({ id: 3, rating: localStorage.getItem(3) })
        items.push({ id: 4, rating: localStorage.getItem(4) })
        this.$Notify({ title: 'Ratings accepted', message: 'Well done.', type: 'success' })
        console.log(items)
      }
    }
  };
</script>