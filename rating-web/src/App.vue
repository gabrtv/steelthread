<template>
  <div class="container-fluid">
    <div class="app">
      <router-view name="main"></router-view>
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Bangers|Permanent+Marker|Graduate:400,700');

  body {
    background-color: #999;
    --azure-blue:#0071C5;
    --msft-green:#4E7200;
    --msft-orange:#C72B00;
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

  .credits{
    font-family: 'Graduate', sans-serif;
    font-size: 12px;
  }
  .footspace{
    margin-top: 90px;
    border-color: #ccc;
  }

  .app {
    width: 85%;
    color: #fff;
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


// .at-related
  .at-row {
    margin: 10px;
  }

  .at-card__head {
    background-color: #2d2d2d;
  }

  .at-card__body {
    background-color: #444;
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

  .at-btn--primary:hover{
    color:var(--azure-blue);
    border: 2px solid var(--azure-blue);
  }
  .at-btn--success:hover{
    color:var(--msft-green);
    border: 2px solid var(--msft-green);
  }
  .at-btn--info:hover{
    color:var(--msft-orange);
    border: 2px solid var(--msft-orange);
  }
  
  .at-btn{
    color:#FFF;
    border: 2px solid #FFF;
    border-radius: 0px;
  }

  .at-btn__text{
    font-family: 'Bangers', cursive;
    font-size: 22px;
    font-weight: 100;
    padding-left: 2px;
  }

  .at-btn__icon{
    font-size: 20px;
  }
// end .at-related


// rate-related
  .rate-submit{
    margin-top:40px;
  }
  .rate-submit .at-btn__text{
    font-size: 36px;
  }
  .rate-submit .at-btn__icon{
    font-size: 36px;
  }
  .rate-submit.at-btn--default:hover{
    color:var(--msft-green);
    border-color: var(--msft-green);
  }
  .mid-btn{
    width: 240px;
  }
// end rate-related

// super-related
  .super-justice {
    height: 240px;
  }

  .super-header {
    color: #fff;
    font-size: 36px;
    font-family: 'Permanent Marker', cursive;
  }

  .super-image {
    margin: 0px 0px 0px 18px;
    -webkit-filter: drop-shadow(3px 3px 3px #111);
    filter: drop-shadow(3px 3px 3px #111);
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
    text-align: center;
  }

  .super-vote {
    padding: 80px;
  }
// end super-related
  
</style>