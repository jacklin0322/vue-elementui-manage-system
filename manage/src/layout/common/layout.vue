<template>
  <el-container style="min-height: 500px; height: 100%; border: 1px solid #eee">

  <el-aside width="200px">
    <div class="aside-logo">EA-Admin</div>
    <el-menu :default-openeds="[]">
    <!-- <el-menu :default-openeds="['1', '3']"> -->
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
        <el-submenu index="1-1">
          <template slot="title">员工管理</template>
          <el-menu-item index="1-1-1">员工列表</el-menu-item>
          <el-menu-item index="1-1-2">部门列表</el-menu-item>
          <el-menu-item index="1-1-3">组织列表</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">员工管理</template>
          <el-menu-item index="1-2-1">选项1</el-menu-item>
          <el-menu-item index="1-2-2">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item-group title="部门管理">
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-3">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>客户管理</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-s-order"></i>订单管理</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    
    <el-header style="text-align: right; font-size: 12px">
      <span style="float: left">展开/收起</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改资料</el-dropdown-item>
          <el-dropdown-item>退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>

      <el-table v-loading="loading" :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="50" style="text-align: right">
    </el-pagination>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'ea-layoutCommon',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(10).fill(item),
      loading: true
    }
  },
  mounted() {
    setTimeout(()=>{
      this.loading = false
    },800)
  },  
}
</script>

<style lang="scss" scoped>
// 默认样式
@import '~@/assets/style/theme/register.scss';
</style>
