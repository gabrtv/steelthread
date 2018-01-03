<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Bangers|Permanent+Marker');

  body {
    background-color: rgb(56, 61, 72);
  }

  .container-fluid {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: left;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  .app {
    width: 85%;
    color: #2c3e50;
    margin-top: 5%;
    text-align: left;
  }

  h1,
  h2 {
    font-weight: normal;
    margin: 16px 0;
  }

  h3,
  h4 {
    text-align: left;
  }

  .at-row {
    margin: 10px;
  }

  .at-card {
    border-radius: 4px;
    width: 228px;
    box-shadow: 2px 4px 6px #000 !important;
  }

  .at-card__head {
    height: 60px;
    padding: 6px 26px;
    background-color: #2d2d2d;
    border-radius: 4px 4px 0 0;
  }

  .at-card__body {
    height: 220px;
    background-color: #444;
    padding: 20px 0px 0px 0px;
  }

  .at-rate {
    padding-top: 12px;
  }

  .at-rate__icon {
    position: relative;
    text-shadow: 2px 2px 9px #666;
  }

  .at-rate__left {
    text-shadow: none;
  }

  .super-justice {
    height: 240px;
  }

  .super-header {
    color: #fff;
    font-size: 36px;
    font-family: 'Permanent Marker', cursive;
  }

  .super-image {
    margin: 22px 0px 0px 22px;
    -webkit-filter: drop-shadow(3px 3px 3px #000);
    filter: drop-shadow(3px 3px 3px #000);
    width: 180px;
  }

  .super-name {
    font-size: 28px;
    color: #fff;
    font-family: 'Bangers', cursive;
    font-weight: 100;
    text-shadow: 4px 4px 6px #000;
  }

  .super-rate-foot {
    border-top: 1px solid #AAA;
    margin-top: 24px;
    text-align: center;
    width: 228px;
    height: 44px;
    background-color: #615b44;
    border-radius: 0 0 4px 4px;
  }

  .super-vote {
    padding: 80px;
  }

  .super-vote button {
    background-color: #2d2d2d;
    font-family: 'Bangers', cursive;
    color: #fff;
  }

  .super-vote button:hover {
    background-color: #fff;
    color: rgb(29, 179, 79);
  }

  .at-btn--large .at-btn__text {
    font-size: 36px;
  }

</style>