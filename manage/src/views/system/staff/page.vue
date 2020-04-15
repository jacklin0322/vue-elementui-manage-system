<template>
  <el-container>
    <el-main>
      <el-table v-loading="loading" :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange" -->
      <el-pagination v-if="tableData.length>0"
        :current-page="currentPage"
        :page-sizes="[10]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="100">
      </el-pagination>
      
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      loading: true,
      tableData: []
    }
  },
  mounted() {
    setTimeout(()=>{
      this.loading = false
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      this.tableData = Array(10).fill(item)
    },800)
  },
}
</script>

<style lang="scss" scoped>
.el-main{
  padding: 0;
}
</style>
