<template>
  <div class="changeModel">
    <div class="model" @click="changeModel('number')">模式一</div>
    <div class="model" @click="changeModel('img')">模式二</div>
  </div>
  <div class="diffec">
    <h2>
      {{ gamedata.difficulty }}

      <p class="tip">数字越大难度越大哦</p>
    </h2>
    <div class="difftodo">
      <div class="to" @click="changeDiff('add')">难度+</div>
      <div class="to" @click="changeDiff('del')">难度－</div>
    </div>
  </div>
  <div class="main">
    <!-- 游戏 -->
    <num-game
      :gamedata="gamedata"
      ref="game"
      @endCallback="endCallback"
    ></num-game>
  </div>
  
  <div class="todos">
    <div class="start" @click="start">开始游戏</div>
    <div class="chengjiu" @click="chen_jiu" v-if=is_show>成就</div>
  </div>
  <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" > <source src="https://wenchao20-1311961370.cos.ap-nanjing.myqcloud.com/%E6%B5%AA%E5%AE%A2%E5%89%91%E5%BF%83%20%E6%9C%80%E7%BB%88%E7%AB%A0%20%E8%BF%BD%E5%BF%86%E7%AF%87.1080p.BD%E4%B8%AD%E5%AD%97%5B66%E5%BD%B1%E8%A7%86www.66Ys.Co%5D.mp4" type="video/mp4" /> </video>

  
</template>

<script>
import { reactive, ref, toRefs,onMounted } from "vue";
import NumGame from "./components/NumGame.vue";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.png";
import img6 from "./assets/images/6.png";
import img7 from "./assets/images/7.png";
import img8 from "./assets/images/8.png";
import tcp from "tcplayer.js"
console.log(tcp)
const playerElement = ref(null); // 播放器容器的引用
export default {
  components: {
    NumGame,
  },
  setup(props, { emit }) {
    const cout=ref(0)
    const chengjiu=ref();
    const is_show=ref();
    const game = ref();
    const state = reactive({
      gamedata: {
        level: 3,
        mode: "img", // 如果是 number 后期会自动生成, 如果是 img 需要传对应的图片
        imgs: [img1, img2, img3, img4, img5, img6, img7, img8],
        style: {
          sliderBg: "#ffc107",
          sliderColor: "#000",
          sliderFontSize: "18px",
          gameBoxBg: "#5a009b",
        },
        difficulty: 4, // 难度分为 1 到正无穷 推荐设置[10-100]
      },
    });
    const start = () => {
      // 开始游戏/重置游戏
      game.value.gameStart();
    };
    const changeModel = (val) => {
      state.gamedata.mode = val;
    };
    const changeDiff = (model) => {
      if (model === "add") {
        state.gamedata.difficulty += 4;
      } else {
        if (state.gamedata.difficulty <= 4) return false;
        state.gamedata.difficulty -= 4;
      }
    };
    const chen_jiu=()=>{
      window.location.href = 'https://blog.csdn.net/qq_52736131/article/details/122400103';
   
    }
    const endCallback = () => {
      alert("恭喜你，我的小朱丽叶");
      document.cookie=cout.value+1
      window.location.href = 'https://blog.csdn.net/qq_52736131/article/details/122400103';
    };
    // 组件挂载时读取 cookie
    onMounted(() => {
      is_show.value=document.cookie
      console.log(is_show)
    });
    return {
      changeModel,
      changeDiff,
      ...toRefs(state),
      endCallback,
      start,
      game,
      is_show,
      cout,
      chen_jiu
    };
  },
};
</script>

<style lang="scss">
.changeModel {
  display: flex;
  padding-top: 5vh;
  justify-content: space-around;
  padding: 0 50px;
  box-sizing: border-box;
  .model {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #5a009b;
    cursor: pointer;
    user-select: none;
  }
}
.diffec {
  text-align: center;
  color: #fff;
  .tip {
    font-size: 12px;
    padding-top: 0;
    margin-top: 2px;
    color: #e6e6e6;
  }
  .difftodo {
    display: flex;
    justify-content: center;
    .to {
      padding: 10px 15px;
      margin: 10px;
      background: #5a009b;
      border-radius: 10px;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    }
  }
}
.main {
  width: 350px;
  height: 350px;
  margin: auto;
  padding-top: 5vh;
}
.todos {
  display: flex;
  padding-top: 50px;
  justify-content: center;
  .start {
    width: 120px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #5a009b;
    cursor: pointer;
    user-select: none;
  }
  .chengjiu {
    width: 120px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #5a009b;
    cursor: pointer;
    user-select: none;
  }
}
// .todos2 {
//   display: flex;
//   padding-top: 50px;
//   justify-content: center;
//   .chengjiu {
//     width: 120px;
//     height: 40px;
//     border-radius: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     background: #5a009b;
//     cursor: pointer;
//     user-select: none;
//   }
// }
</style>
