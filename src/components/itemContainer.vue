<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_container_style item_back">
        <div class="item_list_container" v-if="itemDetail.length > 0" >
          <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
            <li class="item_list" v-for="(item,index) in itemDetail[itemNum-1].topic_answer" :key="item.topic_answer_id"
              @click="choosed(index, item.topic_answer_id)">
              <span class="option_style" :class="{'has_choosed':choosedNum == index}">{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
      <span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'ItemContainer',
  props:['fatherComponent'],
  data() {
    return {
      choosedNum: null, //选择答案的索引
      choosedId: null //选择答案的id
    };
  },
  computed: mapState([
    'itemNum',   //第几题
    'itemDetail', //题目详细数据
    'level'       //第几周
  ]),
  methods: {
    ...mapActions([
      'addNum'
    ]),
  	//索引0-3对应答案A-D
    chooseType: type => {
      switch(type){
        case 0: return 'A'
        case 1: return 'B'
        case 2: return 'C'
        case 3: return 'D'
      }
    },
    //选中答案的信息
    choosed(index,id){
      this.choosedNum = index
      this.choosedId = id
    },
    //下一题
    nextItem(){
      if (this.choosedNum !== null) {
        this.choosedNum = null
        this.addNum(this.choosedId)
      }else{
        alert('你还没选择答案噢')
      }
    },
    //提交答案
    submitAnswer(){
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        this.$router.push('score')
      }else{
        alert('您还没选择答案噢')
      }
    }
  },
};
</script>

<style lang="less">
  .top_tips {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url("../images/WechatIMG2.png") no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    .num_tip{
      position: absolute;
      left: 0.48rem;
      bottom: 1.1rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.6rem;
      font-family: '黑体';
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }
  .home_logo{
    background-image: url('../images/1-2.png');
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .item_container_style{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem
  }
  .start{
    background-image: url('../images/1-4.png');
    }
    .next_item{
      background-image: url('../images/2-2.png');
    }
    .submit_item{
      background-image: url('../images/3-1.png');
    }
  .button_style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4em;
    background-repeat: no-repeat;
  }
  .item_back{
    background-image: url('../images/2-1.png');
    background-size: 100% 100%;
  }
  .item_list_container{
    position: absolute;
    height: 7.0rem;
    width: 8.0rem;
    top: 2.4rem;
    left: 3rem;
    -webkit-font-smoothing: antialiased;
  }
  .item_title{
    font-size: 0.65rem;
    color: #ffff;
    line-height: 0.7rem;
  }
  .item_list{
    font-size: 0;   //消除li标签中的默认边距，只适合标签内无文本内容元素
    margin-top: 0.4rem;
    width: 10rem;
    span{
      display: inline-block;
      font-size: 0.6rem;
      color: #ffff;
      vertical-align: middle;
    }
  }
  .option_style{
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-family: 'Arial';
  }
  .has_choosed{
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail{
    width: 7.5rem;
    padding-top: 0.11rem;
  }
</style>