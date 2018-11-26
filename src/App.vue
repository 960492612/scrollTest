<template>
  <div id="app">
    <div class="slide-wrapper">
      <div class="slide-content">
        <Slider ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
          <div v-for="item in data" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </Slider>
      </div>
    </div>
    <navigator :navList="navList" :currentTabIndex="4"></navigator>
  </div>
</template>

<script>
  import Slider from './components/slide'
  import navigator from './components/navigator'
  const items = [
    [{
        linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
        id: 11351
      },
      {
        linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
        id: 11372
      }
    ],
    [{
        linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
        id: 11378
      },
      {
        linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
        id: 11375
      },
      {
        linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
        id: 11287
      }
    ]
  ]
  export default {
    data() {
      return {
        index: 0,
        turnToPrev: false,
        turnToNext: false,
        isAutoPlay: true,
        isLoop: true,
        isShowDot: true,
        speed: 400,
        threshold: 0.3,
        interval: 4000,
        navList:[{
          id: 1,
            name: 'default'
        },{
          id: 2,
            name: 'haha'
        },{
          id: 3,
            name: 'haha'
        },{
          id: 4,
            name: 'haha'
        },{
          id: 5,
            name: 'haha'
        },{
          id: 6,
            name: 'haha'
        }
        ]
      }
    },
    computed: {
      data() {
        return items[this.index]
      }
    },
    components: {
      Slider,
      navigator
    }
  }
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .slide-wrapper{
    position: relative;
      width: 100%;
      padding-top: 40%;
      margin-bottom: 10px;
      overflow: hidden;
      .slide-content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
        
  }
      
</style>
