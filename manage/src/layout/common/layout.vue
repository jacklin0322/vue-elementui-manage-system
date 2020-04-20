<template>
  <el-container style="min-height: 500px; height: 100%; border: 1px solid #eee">
  <el-aside style="width: auto;max-width: 200px">
    <div class="aside-logo" :style="isCollapse?'font-size: 12px':''">EL-Admin</div>
    <el-menu class="el-menu-vertical-demo"
      :default-active="defaultActive"
      router unique-opened
      :collapse="isCollapse" 
      @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-submenu index="/">
          <template slot="title">员工管理</template>
          <el-menu-item index="/staff">员工列表</el-menu-item>
          <el-menu-item index="1-1-2">部门列表</el-menu-item>
          <el-menu-item index="1-1-3">组织列表</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">权限管理</template>
          <el-menu-item index="1-2-1">选项1</el-menu-item>
          <el-menu-item index="1-2-2">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span class="title">客户管理</span>
        </template>
        <el-submenu index="2-1">
          <template slot="title">客户管理</template>
          <el-menu-item index="2-1-1">客户列表</el-menu-item>
          <el-menu-item index="2-1-2">当日新增</el-menu-item>
        </el-submenu>
        <el-menu-item-group title="掉入公海">
          <el-menu-item index="2-1-3">公海客户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-headset"></i>
          <span slot="title">老师管理</span>
        </template>
        <el-menu-item-group title="老师管理">
          <el-menu-item index="3-1-1">老师列表</el-menu-item>
          <el-menu-item index="3-1-1">老师申请</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="优选老师">
          <el-menu-item index="3-1-1">优选老师</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span slot="title">课程管理</span>
        </template>
        <el-submenu index="5-2">
          <template slot="title">课程管理</template>
          <el-menu-item index="5-2-1">课程管理</el-menu-item>
          <el-menu-item index="5-2-2">添加课程</el-menu-item>
        </el-submenu>
        <el-menu-item-group>
          <template slot="title">课程管理</template>
          <el-menu-item index="5-1">课程管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">最新订单</template>
          <el-menu-item index="4-1">当日订单</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="全部订单">
          <el-menu-item index="4-2">订单列表</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-3">
          <template slot="title">历史订单</template>
          <el-menu-item index="4-3-1">当月订单</el-menu-item>
          <el-menu-item index="4-3-2">完成订单</el-menu-item>
          <el-menu-item index="4-3-3">取消订单</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">财务管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">账单管理</template>
          <el-menu-item index="6-1">账单列表</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="6-2">
          <template slot="title">对账管理</template>
          <el-menu-item index="6-2-1">对账列表</el-menu-item>
          <el-menu-item index="6-2-2">对账反馈</el-menu-item>
        </el-submenu>
      </el-submenu>

    </el-menu>
  </el-aside>
  <el-container>
    
    <el-header style="text-align: right; font-size: 14px">
      <span style="float: left" @click="changeCollapse"><i v-model="isCollapse" :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" style="font-size: 20px; color: #666"></i></span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 10px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改资料</el-dropdown-item>
          <el-dropdown-item @click.native="logOff">退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">{{this.$route.meta.title}}</a></el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ea-layoutCommon',
  data() {
    return {
      isCollapse: false
    }
  },
  watch: {
    $route () {
      this.setCurrentRoute()
    }
  },
  created () {
    this.setCurrentRoute()
  },
  methods: {
    ...mapActions('account', [
      'logout'
    ]),
    // 退出登录
    logOff() {
      this.logout({
        confirm: false
      })
    },
    setCurrentRoute() {
      this.defaultActive = this.$route.path //关键   通过他就可以监听到当前路由状态并激活当前菜单
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
// 默认样式
@import '~@/assets/style/theme/register.scss';
</style>
