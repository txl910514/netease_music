<template>
    <div id="index">
        <div class="footer">
            {{name}}
        </div>
        <div class="tmn">
            哈哈哈\n哈哈哈
        </div>
        <div>{{count}}</div>
        <div class="img_box">
            <img src="../assets/image/map.jpg" alt="哈哈">
        </div>
    </div>
</template>

<script>
  import store from '../stores/index'
  export default {
    name: 'Index',
    data () {
      return {
        name: '我的天',
        count: store.count
      }
    },
    created () {
    },
    mounted () {
      this.conPC()
    },
    methods: {
      conPC () {
        console.log('热热')
        console.log(window.$('.tmn'))
        console.log(process.env)
      }
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "./../assets/css/main";
    #index {
        color: red;
        font-size: 28px;
        // background: #000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: url("../assets/image/map.jpg") no-repeat;
        .footer {
            color: aqua;
            border: solid 1px #999;
            /*transform:rotate(7deg);*/
        }
    }
</style>