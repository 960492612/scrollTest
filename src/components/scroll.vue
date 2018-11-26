<template>
	<div
	 ref="wrapper"
	 class="list-wrapper"
	>
		<div class="scroll-content">
			<div ref="listWrapper">
				<slot>
					<ul class="list-content">
						<li
						 @click="clickItem($event,item)"
						 class="list-item"
						 v-for="(item,index) in data"
						 :key="index"
						>{{item}}</li>
					</ul>
				</slot>
			</div>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
//   import Loading from '../loading/loading.vue'
//   import Bubble from '../bubble/bubble.vue'
  import { getRect } from '@/common/js/dom'

  const COMPONENT_NAME = 'scroll'
  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      },
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      listenScrollEnd: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      scrollbar: {
        type: null,
        default: false
      },
      startY: {
        type: Number,
        default: 0
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      freeScroll: {
        type: Boolean,
        default: false
      },
      mouseWheel: {
        type: Boolean,
        default: false
      },
      bounce: {
        default: true
      },
      zoom: {
        default: false
      }
    },
    data() {
      return {
        
      }
    },
   
    created() {
      
    },
    mounted() {
      setTimeout(() => {
        this.initScroll()
      }, 20)
    },
    destroyed() {
      this.$refs.scroll && this.$refs.scroll.destroy()
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
      
        let options = {
          probeType: this.probeType,
          click: this.click,
          scrollY: this.freeScroll || this.direction === DIRECTION_V,
          scrollX: this.freeScroll || this.direction === DIRECTION_H,
          scrollbar: this.scrollbar,
          startY: this.startY,
          freeScroll: this.freeScroll,
          mouseWheel: this.mouseWheel,
          bounce: this.bounce,
          zoom: this.zoom
        }

        this.scroll = new BScroll(this.$refs.wrapper, options)

        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        if (this.listenScrollEnd) {
          this.scroll.on('scrollEnd', (pos) => {
            this.$emit('scroll-end', pos)
          })
        }

        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScrollStart')
          })

          this.scroll.on('scrollStart', () => {
            this.$emit('scroll-start')
          })
        }

      
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(e, item) {
        console.log(e)
        this.$emit('click', item)
      },
      destroy() {
        this.scroll.destroy()
      },
      forceUpdate(dirty) {
        this.refresh()
      },
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      }
    },
  }
</script>

<style lang="less" >
  .list-wrapper{
      position: relative;
    height: 100%;
    /*position: absolute*/
    /*left: 0*/
    /*top: 0*/
    /*right: 0*/
    /*bottom: 0*/
    overflow: hidden;
    background: #fff;
    .scroll-content{
        position: relative;
      z-index: 1;
    }
      
    .list-content{
        position: relative;
      z-index: 10;
      background: #fff;
      .list-item{
          height: 60px;
        line-height: 60px;
        font-size: 18px;
        padding-left: 20px;
        border-bottom: 1px solid #e5e5e5;
      }
        
    }
      
  }
    

//   .pulldown-wrapper
//     position: absolute
//     width: 100%
//     left: 0
//     display: flex
//     justify-content center
//     align-items center
//     transition: all
//     .after-trigger
//       margin-top: 10px

//   .pullup-wrapper
//     width: 100%
//     display: flex
//     justify-content center
//     align-items center
//     padding: 16px 0
</style>
