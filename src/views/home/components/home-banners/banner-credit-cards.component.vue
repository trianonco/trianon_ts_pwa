<template>
  <div>
    <div class="banner mobile credit cards">
      <h2>MÉTODOS DE PAGO</h2>
      <div class="credit-cards">
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/banners/credit-card-mc.png"
        >
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/banners/credit-card-visa.png"
        >
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/banners/credit-card-amex.png"
        >
      </div>
      <p>Realiza tus pagos a través de trajeta de credito, debito automatico (PSE) ó efectivo por medio de Efecty</p>
    </div>
    <div class="banner desktop credit cards">
      <img
        src="./../../../../shared/assets/images/banners/desktop-credits_Mesa de trabajo 1_Mesa de trabajo 1.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerCreditCardsComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner.credit.cards {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  &.mobile {
    display: block;
  }
  &.desktop {
    display: none;
  }
  #Font-OpenSans();
  h2 {
    text-align: center;
    font-size: 12px;
    color: gray;
  }
  div.credit-cards {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    img {
      width: 5em;
    }
  }
  p {
    text-align: center;
    color: gray;
    line-height: 20px;
    font-size: 11px;
  }
}

@media (min-width: 600px) {
  .banner.credit.cards {
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
      img {
        width: 100%;
      }
    }
  }
}
</style>
