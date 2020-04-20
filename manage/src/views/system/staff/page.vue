<template>
  <el-main v-loading="loading">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination v-if="tableData.length>0"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="5"
        layout="total, sizes, prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </el-main>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        tableData: [],
        loading: true
      }
    },
    mounted() {
      setTimeout(()=>{
        this.loading = false
        this.fetchData()
      }, 400)
    },
    methods: {
      fetchData() {
        const item = [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '第五',
            province: '北京',
            city: '朝阳区',
            address: '北京市朝阳区望京soho A座 1701',
            zip: 100010
          }, {
            date: '2016-05-01',
            name: '张兴元',
            province: '北京',
            city: '海淀区',
            address: '中关村鼎好大厦 1519',
            zip: 100010
          }, {
            date: '2016-05-03',
            name: '王雷蕾',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }, {
            date: '2017-03-22',
            name: '毛磊',
            province: '北京',
            city: '海淀区',
            address: '中关村鼎好大厦 1519',
            zip: 100000
          }]
        this.tableData = item
      },
      handleClick(row) {
        console.log(row)
      }
    },
  }
</script>

<style lang="scss" scoped>
.el-main{
  padding: 0;
}
</style>
