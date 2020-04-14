// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '账单管理',
    icon: 'folder-o',
    children: [
      // { path: '/zhangdan/zdfk', title: '账单反馈' }
      { path: '/page2', title: '页面 2' },
      // { path: '/page3', title: '页面 3' }
    ]
  }
]
