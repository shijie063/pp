<template>
  <div class="hello">
 {{msg}}
   <!-- <div class="swip">
          <div class="homeswiper" style='height:3rem'>
              <mt-swipe :auto="2000">
                <mt-swipe-item style="background:blue">1</mt-swipe-item>
                <mt-swipe-item style="background:red">2</mt-swipe-item>
                <mt-swipe-item style="background:yellow">3</mt-swipe-item>
              </mt-swipe>
            </div>
          
    </div> -->
       
          <!-- <ul>
            <li v-for="item of lists" :key="item.id">
                  {{item.images}}
                  <img :src="item.images.small" alt="">
            </li>
          </ul> -->
        <div id="main" :style="{width: '600px', height: '400px'}"></div>
        
   
</div>
</template>


<script>
var echarts = require("echarts");

import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",

      // lists: "",
      options: {
        title: {
          text: "世界人口总量",
          subtext: "数据来自网络"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2011年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: [
            "巴西",
            "印尼",
            "美国",
            "印度",
            "中国",
            "日本",
            "墨西哥",
            "世界人口(万)"
          ]
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [
              182030,
              234089,
              29034,
              104970,
              131744,
              330230,
              630230,
              503230
            ],
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 7, 7, 0],
                color: function(params) {
                  // build a color map as your need.
                  //柱子的颜色要各种颜色，而不是同一种颜色；
                  var colorList = [
                    "skyblue",
                    "yellow",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                    "#F3A43B",
                    "#60C0DD",
                    "#D7504B",
                    "#C6E579",
                    "#F4E001",
                    "#F0805A",
                    "#26C0C0"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.options);
  }

  // mounted(){
  //     axios.get('/douban/v2/movie/in_theaters')
  //     .then(res=> {
  //     console.log(res)
  //     console.log(this)
  //       // handle success
  //       this.lists = res.data.subjects
  //       console.log(this.lists)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log("error");
  //     });
  // }
};
</script>
<style>
</style>
