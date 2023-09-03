<template>
  <div class="viewport">
    <div class="container">
      <div class="paly-btn">
        <i class="el-icon-caret-left" @click="previous"></i>
        <i class="el-icon-video-play" @click="audioplay" v-show="buttonState"></i>
        <i class="el-icon-video-pause" @click="audioplay" v-show="!buttonState"></i>
        <i class="el-icon-caret-right" @click="next"></i>
      </div>
      <!-- 播放音乐真正的标签
      看接口文档: 音乐地址需要带id去获取(但是有的歌曲可能404)
      https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e9%9f%b3%e4%b9%90-url
     -->
      <div class="process">
        <span>{{ currentTime }}</span>
        <div class="slider">
          <el-slider v-model="value" @change="progress" input-size="mini" :show-tooltip="false"></el-slider>
        </div>
        <span>{{ totalTime }}</span>
      </div>
      <audio :src="`https://music.163.com/song/media/outer/url?id=${songId}.mp3`" ref="audio" autoplay
        @timeupdate="updateTime"></audio>
    </div>

    <div class="sound">
      <span><i class="el-icon-service"></i></span>
      <div class="slider">
        <el-slider v-model="soundValue" @change="sound" :max=1 :step=0.1 :show-tooltip="false"></el-slider>
      </div>
    </div>
  </div>
</template>
  
<script>


export default {
  name: 'center_childs',
  props: {
    data: {
      default() {
        return []
      }
    }
  },
  data() {
    return {
      playState: false,
      soundValue: 0.2,
      value: 0,
      songId: '',
      changetime: 0,
      secondsTime: 0,
      dt: '',
      buttonState: true
    }
  },

  methods: {
    //音频播放暂停
    audioplay() {
      // this.$refs.audio.pause() 
      if (!this.playState) {
        this.buttonState = false
        this.$refs.audio.play()
      } else {
        this.buttonState = true
        this.$refs.audio.pause()
      }

      this.playState = !this.playState
    },
    //上一首触发事件
    previous() {
      this.buttonState = true
      this.$emit('previous')
    },
    //下一首触发事件
    next() {
      this.buttonState = true
      this.$emit('next')
    },
    //进度条
    progress(val) {
      console.log('hahahaha', val)
      const percent = (val / 100).toFixed(2)
      let seconds = Math.floor(this.dt / 1000)//秒数
      this.secondsTime = Math.floor(seconds * percent)
      this.$refs.audio.currentTime = this.secondsTime
      //  console.log('占比秒数为：',this.secondsTime)
    },
    //当前播放时间
    updateTime() {
      this.secondsTime = Math.floor(this.$refs.audio.currentTime)
      let seconds = Math.floor(this.dt / 1000)//秒数
      const percentime = this.secondsTime
      this.value = parseFloat((percentime / seconds).toFixed(2)) * 100
      // console.log('当前时间变了',this.secondsTime)
      // console.log('当前时间变了',this.value)
    },
    //声音大小
    sound() {
      this.$refs.audio.volume = this.soundValue
    }

  },
  computed: {
    totalTime() {
      if (this.dt !== null) {
        let seconds = Math.floor(this.dt / 1000)//秒数
        //  console.log('秒数为',seconds)
        const minutes = Math.floor(seconds / 60)//分钟
        seconds = seconds - minutes * 60
        return '0' + minutes + ":" + (seconds < 10 ? '0' + seconds : seconds)
      }
      else return '00:00'
    },
    currentTime() {
      if (this.secondsTime !== null) {
        let seconds = this.secondsTime;
        const minutes = Math.floor(seconds / 60);//分钟
        seconds = seconds - minutes * 60;
        return '0' + minutes + ":" + (seconds < 10 ? '0' + seconds : seconds)
      }
      else return '00:00'
    }
  },
  watch: {
    data() {
      if (this.data[0] !== undefined) {
        // console.log('data数据为5555555',this.data[0].id)
        this.songId = this.data[0].id;
        this.dt = this.data[0].dt;
        //  console.log('shijianchui',this.dt)
        this.buttonState = false;
        this.$refs.audio.volume = this.soundValue
      }
    },
  },
}
</script>
  
<style scoped lang="scss">
.viewport {
  display: flex;
  flex: 1;
  background-color: rgb(230, 236, 230);
  justify-content: center;
}

.container {
  width: 800px;
  flex-direction: column;
  display: flex;
  .paly-btn {
    display: flex;
    padding-top: 15px;
    justify-content: center;
    align-content: center;

    .el-icon-caret-left {
      border-radius: 50%;

      &:active {
        background: black;
      }
    }

    .el-icon-caret-right {
      border-radius: 50%;

      &:active {
        background: black;
      }
    }

    i {
      font-size: 80px;
      margin: 0 15px;
    }
  }

  .process {
    display: flex;
    width: 800px;
    justify-content: center;

    span {
      padding: 0 7px;
    }

    .slider {
      width: 600px;
      margin: 0 auto;
    }
  }
}


.sound {
  width: 300px;
  // background: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 20px;
    margin-right: 10px;
  }

  .slider {
    width: 100px;
  }
}</style>