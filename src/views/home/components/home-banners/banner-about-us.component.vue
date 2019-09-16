<template>
  <div>
    <div class="banner mobile about us">
      <img alt="TrianonCo Image" src="../../../../shared/assets/images/banners/about-us-header.png">
      <div class="banner-title">
        <h2>UNA TRADICIÓN DESDE 1935</h2>
        <h3>En TRIANON hemos construido experiencia y tradición por más de 80 años, dedicándonos a la fabricación de marroquineriá y accesorios en cuero, como, billeteras, bolsos, cinturones y llaveros, entre otros. Nuestra escencia está en el talento humano, fabricando productos con insumos 100% colombianos. Creamos artesanalmente cada artículo con la más alta calidad y detalle, logrando que cada producto sea una pieza única.</h3>
      </div>
    </div>
    <div class="banner desktop about us">
      <img
        alt="TrianonCo Image"
        src="../../../../shared/assets/images/banners/about-us-desktop_Mesa de trabajo 1.jpg"
      >
      <div class="banner-title">
        <h2>UNA TRADICIÓN DESDE 1935</h2>
        <h3>En TRIANON hemos construido experiencia y tradición por más de 80 años, dedicándonos a la fabricación de marroquineriá y accesorios en cuero, como, billeteras, bolsos, cinturones y llaveros, entre otros. Nuestra escencia está en el talento humano, fabricando productos con insumos 100% colombianos. Creamos artesanalmente cada artículo con la más alta calidad y detalle, logrando que cada producto sea una pieza única.</h3>
      </div>
    </div>

    <div class="banner desktop instafeed">
      <div id="instafeed"></div>
    </div>
  </div>
</template>

<script>
import Instafeed from "instafeed.js";
export default {
  name: "HomeBannerAboutUsComponent",
  props: {},

  data() {
    return {
      userFeed: new Instafeed({
        get: "user",

/*
        userId: "8987997106",
        clientId: "924f677fa3854436947ab4372ffa688d",
        accessToken: "8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9",
*/
        userId: "1964635671",
        clientId: "c43aab4601d74dabb1b8f2b4d6e141bd",
        accessToken: "1964635671.1677ed0.4e98775fde734659a3e8b216c5c09db3",
        

        resolution: "standard_resolution",
        template: `<a href="{{link}}" target="_blank">
          <div class="wrapper-image">
            <img src="{{image}}"/>
          </div>
          <div class="wrapper-info">
           
           <div class="wrapper-info-icons">
            <img class="likes-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAACXBIWXMAACxKAAAsSgF3enRNAAAEsUlEQVR4nO1c25WjOBC94wSGDFoZjCeCZiMYNgM2gu0QejNwZ6DNwCHgCJbOgMmAjqD2Q2jMlEo8BOLR+J5TxxYIlXQpFZJK8IWIMBEJgBTAufm1eAZwa6VLABWAovk/FVafav4nAL6xPDcAdaOvaCQMRBQqORFdKQx1c21ORMlAfUmTXzfXh+rVRKQG6vwloQRVgRX1QRNR6tGXNufnhqbhN2kUUYqIiggVbqMkcyNi3RCOmogyGtD+LzTMR2UANICvnvM/cfc91v9UMP4DMP7D+pTnAA/hw62lt279otGtWnp/dJTzBuClU9MANvOOO9LVZbokozBfY33MICtgYn2cz0p11/WhJJUURpBPR1+XLujeJadKQkSXsWR1FZh6CrvMVGFJHydME9E5kr6MZIsWb4ivEDWmkAiEXSjgER4gZ6GdtaTbVwC/s0uRtIZkQluLIUTlwoV6Aw2KKa9Cm9N2Hj48SGAe6+1hwHvziP3sKPH7FOiG1pTsxDK/wB0r5TFqtUHwcdQz2nPXlnkl5Dq2z97luBSs/Vd7rm1RGVxreo1x6zaMC0v/gHFHvxHFTe9fGH91JFwBfLBjGXAnSsFdy+HsHgWapVPgTlTGTv7EPItre0TB0ilwJyplJ69x67Jp8LY/AVAPomS8s7Q6wfgn/rQrlqjNhsHdTmqJauOGByp+4AS32zmZDoiKpc98CiNlOiIqlk5OcCe8NR5wcEIzRG/hqOOnTkhd7wEBD6JkKH7gBNcnHWGRrg+KpYsTXJ/EfdYRofgBqes9LMrloDjBna4cnShp+1Apdb0nCKZ3IEhLTrV15ny2zDMfCTlLX4G7jyp6Mh8FKdzdNhq4E6XZyW9wJ8tHwCtLv6NxTZaoEu7yCr/osyODa033uEErppUKYeV8A7G2JUSKaRbtPH0BwJpG7HPcsUibdtMuos7CBXoDDYkp0m4WZw+YdKG0Gy1kK+AeRJHb5SoSepG02TWBce5PrWMfMCP2anYXuh4SmGERH4X/ASG4Is31arjjqK/4fCGsC1yS3uCLQHWYpdQF9Qa6yxzyIrSt7Lqmr8BSKDDfQEOnSC60qffp3rchX8H4Kx4g/RP77IpnAP8Jx7+jJ1bQtxRcQZ4ga+xvOeYM2f/8hSEBlYnmGmsP+NwibZMmMptcB5UxRpnk3PdAlo8kPaacsUr1zshSc5AUQtSeyPJZUhFSXkgFEpKHDVsiy0dSSYGT/NCKbJms2UmaQtRWyYpC0lSi+shaesXB91rZZJLmIMqKFipItNx0J/fo13PpmLOyPrJivQhp5TU2SXMT1UWWpjhLyl36ZtUV4w7nnsrP4isaScj/HnIeoU1RiLJkSY51jifimeQHSDSSYhJlG+R7XT+0QamnzOhDkphEgfzDB6LxfkRalaSm/OjjtthEWbJ0RyPVhOsLWijuuARRfRbRNThVNJ9F7oYokN/HELnjLd9Im2iFdfulieqzEtsVfZ8EWW0eOfRrPzFwAfD3iPzvMFuRVnmzYs195i8w0Rz+Dq+EN5jgwGqvn6xpURYKJqojfVfqAyZqvXpobAtvLlQwXeofdtx+wWN1koBtWFQblpgr+r4QtjC2RtRm8T/GLdFnaZwbnwAAAABJRU5ErkJggg==">
            <label style="padding-right:1em">{{model.likes.count}}</label>
            
            <img class="comments-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABBCAYAAAB2FzKyAAAACXBIWXMAACxKAAAsSgF3enRNAAAEr0lEQVR4nO1c7ZGbMBB958l/08Gpg6ODKBXEqSB0EKcDXwdOBSEVxNcB14FdQXAHuILND8FYXiQhQHwY35vZ8cgs0vJYLfp+IiJMhAhAbLlWADiOaEsjPo1UTgxAliIAvHjed4Ei7AggK6UIbJsXngb0qI0m64D5ngCkAA4A8oD5OhGaKAFgCyBBWHJseIciLR26oFBECQA7AN9b3neCuSrFaEf0uSw/bVm+N/oSFUEZ+KNB7wIVX47ar0+siTXZAHhu0D9DeXPmkXc7EFFX2RBRQXYURJSWen3K0UUQ0ZaIcke5REQHIooCltuJqKgkwIaciJLQhhpEloS47IinIiomoqPFsKIkaEhybDZlDsKC2NTWIFtV29PwHtQkG7JXyXQsomwkFaSqwJQE6RKRvTr2IqsPSUea3otssg1NVleSer2dkURabN+FJioic+C+B5KaXnTrJovroqmu3xNJOlkcBak2WW+iNobMjzN46K6SGJ4n60tURHV3LWi+gdtX9gaytn2ISg0Zyhk8aAjhMdfbAVas6ydQHwH4NUgncxokLL2GGhZqRoM3LaHKceFV0OsZdY8SqHvTHhMNvQ6IHdSwTwUvr9KJSti1CxRRS0OB+nMlTTe5iFqiN1VIWfoZamDQioqoGPXRQ57ZkpADeGP/eREl2f8njDjDMREOLC1dyhVRnM00kDFzBifqGeqDZoRe9XRk4eyZLQqo6S4d0qa8gmKRTw3Najp7QPDnFDbFleEiZ3nJ4ERJm6KJqKU2CUzIfRVNRD1KtQPqRNlW19Q6xY+GnKWt0/iPTpQ3PojyxAdRnlihXk/l+GZMBsHSF5MSYCYqCmzMnCFY2vrFNxHlu77yoVARxV1Ojm7JNODtJmtjuwrmGftfBjRmzuBhxln1gDpRzkGsBUGydG5TrIjiYzMvcPSkFwRe9XKb4kpTOLFrfvNd9wuBepclsynrDc6UXUuw7KaCZGnuKDdwEeU/i3qfkCyduZR1ogoAf9j1LZbrVfyDlbmU+YJ8AeAf03kzZHrv2AD4q6UvaHAI3inOAbyy/75ieUQlLM2/+jWYtnhEUA0vfUL0AvUpzbvbNhsI1GvNNzSQZRpmKVAP4usyoyXEqx1Ln+HhUbbxqAPUuigdL1jGxKjsdFfLFWpE97ngVRfT+tTGJYpN29AiqLjEW7DvUAH+Xqe2MgCftfQFKnY1jh7YUEC5Kh+G+VwWJlqZNx8kLL1GPXbdwtNdXXthQu7Hm3KJIpFj21qbjGOy7146UMsF7jMQ0zLxLARRVeau/Xo7mm5xrCT1wnakvNznxSWG5zDWkK5GmdyWEzaWhyVk39hYlNdc5PEXn5PhZffZfC2h2lWuDdFvUG2yA8J9IaOy7K5nKlSHTmTlbwTgN9N5BQvuIbbz76Ba8k0GnzTjcvgtVotxJUaU6TFmiWpdtlDnHkRQq4i7vOEzbvuQbc880PFe5hWC0JtRk9AnaUS4nqTRdEZBKFygqnYK82ySfnZCW/K+VHkOeTZLDEWYz8EObXGGeoAq/rWBhD95p1JnUKJ0CNwaKOBHXhV4c1zjmu8pHG2g28bJ+wlgPxZRLlQBu0KOeYx7SVxf6vY/kT5A43r1GXMAAAAASUVORK5CYII=">
            <label>{{model.comments.count}}</label>

           </div>
  
          </div>
         </a>
         `,
        sortBy: "most-recent",
        limit: 4,
        links: false
      })
    };
  },
  mounted() {
    this.userFeed.run();
  }
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner.about.us {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  background-image: url("../../../../shared/assets/images/banners/about-us-bg.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
  color: black;
  img {
    display: block;
    width: 100%;
  }
  .banner-title {
    text-align: center;
    h2 {
      font-family: "TrajanPro";
      font-weight: 300;
      transform: scaleY(0.9);
      letter-spacing: 1px;
      font-size: 12px;
      padding-top: 12px;
      padding-bottom: 8px;
    }
    h3 {
      font-family: "Open Sans";
      color: @color-black;
      font-weight: 900;
      letter-spacing: 1px;
      max-width: 285px;
      width: 100%;
      margin: 0 auto;

      font-family: "Open Sans";
      transform: scaleY(1);

      font-size: 11px;
      font-weight: 300;
      letter-spacing: 0px;
      padding-bottom: 10px;
      padding-top: 10px;
      line-height: 16px;

      padding-left: 4em;
    padding-right: 7em;
    
    }
  }
  .banner-button {
    &.gold {
      #button-gold-dark();
    }
  }
}

.banner.mobile.about.us {
  display: block;
}
.banner.desktop.about.us {
  display: none;
}

#instafeed {
  width: 100%;
  margin: auto;

  padding-bottom: 1em;

  display: flex;
  flex-wrap: wrap;

  .wrapper-image {
    display: block;
    width: 100%;
    height: 100%;
  }
  .wrapper-info {
    display: block;
    width: 100%;
    height: 100%;

    &-icons {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      img {
        width: 1.5em;
        padding-right: 0.5em;
        height: auto;
        display: block;
      }

      label {
        font-family: "Open Sans";
        font-size: 18px;
        color: white;
      }
    }

    background-color: rgba(0, 0, 0, 0.5);
    position: relative;

    top: 2em;
    opacity: 0;
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -ms-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    font-family: "Open Sans";
    font-size: 12px;
    color: white;
  }

  a:hover {
    .wrapper-info {
      top: -100%;
      opacity: 1;
      -webkit-transition: all 200ms ease-in-out;
      -moz-transition: all 200ms ease-in-out;
      -ms-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }
  }

  a {
    display: block;
    align-items: center;
    position: relative;
    width: 25%;
    height: 24vw;
    overflow: hidden;
    background: white;
    padding: 1em;
    padding-bottom: 0px;
    padding-left: 0px;
    box-sizing: border-box;

    &:first-child {
      padding-left: 0px;
    }

    &:last-child {
      padding-right: 0px;
    }

    img {
      display: block;
      width: 100%;
      height: 22.5vw;
      object-fit: cover;
      object-position: center;
    }
  }
}
#instafeed {
  display: none;
}
@media (min-width: 600px) {
  .banner.mobile.about.us {
    display: none;
  }
  .banner.desktop.about.us {
    display: block;
    padding: 0px !important;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    background-image: url("./../../../../shared/assets/images/profile-gold-bg.png");
    background-size: 10px 100%;

    .banner-title {
      width: 100%;
    }
    h2 {
      display: block;
      padding: 1em;
      padding-left: 3em;
      text-align: left;
      font-size: 14px;
    }
    h3 {
      display: block;
      padding: 1em;
      padding-left: 3em;
      padding-right: 3em;
      text-align: left;
      max-width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      margin: 0 auto;
      letter-spacing: 1px;
      line-height: 1.5em;
    }
    img {
      display: block;
      //height: 20vw;
      //min-width: 100px;
      //min-height: 200px;
      width: 32vw;
      height: 23vw;
      max-height: 250px;
      object-fit: cover;
      object-position: center;
    }
  }
  .banner.desktop.instagram {
    padding: 2.25em 0em;
  }

  #instafeed {
    display: flex;
  }
}
</style>
