<template>
  <el-card>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="always" style="background-color: #5f9eff">
          <span class="el-card-sp-title">今日新增订单</span>
          <span>67</span>
          <i class="el-icon-s-order"></i>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" style="background-color: #ff9f52">
          <span class="el-card-sp-title">今日新增注册用户</span>
          <span>530</span>
          <i class="el-icon-s-custom"></i>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" style="background-color: #13c2c2">
          <span class="el-card-sp-title">今日新增注册老师</span>
          <span>321</span>
          <i class="el-icon-headset"></i>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" style="background-color: #ff7f75">
          <span class="el-card-sp-title">今日累计成交额</span>
          <span>12968.35</span> <em>元</em>
          <i class="el-icon-coin"></i>
        </el-card>
      </el-col>
    </el-row>
    <div class="el-card-box">
      <el-row>
        <el-col :span="12">
          <label>站点访问来源 <font>本月 / 2020-4</font></label>
          <div id="echartsBar" style="width: 600px;height:400px;"></div>

        </el-col>
        <el-col :span="12">
          <label>成交统计 <font>本月 2020-4</font></label>
          <div id="echartsLine" style="width: 600px;height:400px;"></div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#108ee9','#13c2c2', '#8b4ae5', '#ff9f52', '#ff7f75'],
      loading: true
    }
  },
  mounted() {
    this.drawBar()
    this.drawLine()
  },
  methods: {
    drawLine () {
      let echartsLine = this.$echarts.init(document.getElementById('echartsLine'))
      const option = {
        title: {
          text: '',
          subtext: '日交易量'
        },
        xAxis: {
          type: 'category',
          data: ['9日', '10日', '11日', '12日', '13日', '14日', '15日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: this.colors[2]
          }
        },{
          data: [620, 732, 701, 634, 1090, 930, 920],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: this.colors[1]
          }
        },{
          data: [360, 372, 471, 364, 290, 393, 390],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: this.colors[3]
          }
        }]
      };
      echartsLine.setOption(option)
    },
    drawBar () {
      let echartsBar = this.$echarts.init(document.getElementById('echartsBar'))
      const option = {
        title: {
          text: '',
          subtext: '机构数据',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          // left: 'left',
          data: []
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            color: this.colors,
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              }
            }
          }
        ],
            
      };
      echartsBar.setOption(option)
    }
  },
}
</script>

<style lang="scss" scoped>
// 默认样式
@import '~@/assets/style/theme/register.scss';
</style>
