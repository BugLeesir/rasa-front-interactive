# 项目名称

Rasa中文对话机器人

## 功能特性

使用vue-material组件库构建一个简洁的前端页面

## 技术栈

Vue-Material

Axios

## 项目结构

```tree
src
 ┣ api
 ┃ ┗ rasa.js
 ┣ assets
 ┃ ┣ img
 ┃ ┃ ┣ faces
 ┃ ┃ ┃ ┗ marc.jpg
 ┃ ┃ ┣ apple-icon.png
 ┃ ┃ ┣ favicon.png
 ┃ ┃ ┣ mask.png
 ┃ ┃ ┣ new_logo.png
 ┃ ┃ ┣ sidebar-1.jpg
 ┃ ┃ ┣ sidebar-2.jpg
 ┃ ┃ ┣ sidebar-3.jpg
 ┃ ┃ ┣ sidebar-4.jpg
 ┃ ┃ ┣ th.png
 ┃ ┃ ┣ tim_80x80.png
 ┃ ┃ ┗ vue-logo.png
 ┃ ┗ scss
 ┃ ┃ ┣ md
 ┃ ┃ ┃ ┣ mixins
 ┃ ┃ ┃ ┃ ┣ _chartist.scss
 ┃ ┃ ┃ ┃ ┣ _transparency.scss
 ┃ ┃ ┃ ┃ ┗ _vendor-prefixes.scss
 ┃ ┃ ┃ ┣ plugins
 ┃ ┃ ┃ ┃ ┗ _perfect-scrollbar.scss
 ┃ ┃ ┃ ┣ _alerts.scss
 ┃ ┃ ┃ ┣ _buttons.scss
 ┃ ┃ ┃ ┣ _cards.scss
 ┃ ┃ ┃ ┣ _chartist.scss
 ┃ ┃ ┃ ┣ _checkboxes.scss
 ┃ ┃ ┃ ┣ _colors.scss
 ┃ ┃ ┃ ┣ _dialogs.scss
 ┃ ┃ ┃ ┣ _dropdown.scss
 ┃ ┃ ┃ ┣ _fixed-plugin.scss
 ┃ ┃ ┃ ┣ _footers.scss
 ┃ ┃ ┃ ┣ _forms.scss
 ┃ ┃ ┃ ┣ _inputs-size.scss
 ┃ ┃ ┃ ┣ _inputs.scss
 ┃ ┃ ┃ ┣ _layout.scss
 ┃ ┃ ┃ ┣ _misc.scss
 ┃ ┃ ┃ ┣ _mixins.scss
 ┃ ┃ ┃ ┣ _navbars.scss
 ┃ ┃ ┃ ┣ _pagination.scss
 ┃ ┃ ┃ ┣ _pills.scss
 ┃ ┃ ┃ ┣ _popups.scss
 ┃ ┃ ┃ ┣ _responsive.scss
 ┃ ┃ ┃ ┣ _ripples.scss
 ┃ ┃ ┃ ┣ _shadows.scss
 ┃ ┃ ┃ ┣ _sidebar-and-main-panel.scss
 ┃ ┃ ┃ ┣ _tables.scss
 ┃ ┃ ┃ ┣ _tabs.scss
 ┃ ┃ ┃ ┣ _togglebutton.scss
 ┃ ┃ ┃ ┣ _typography.scss
 ┃ ┃ ┃ ┗ _variables.scss
 ┃ ┃ ┗ material-dashboard.scss
 ┣ components
 ┃ ┣ Cards
 ┃ ┃ ┣ ChartCard.vue
 ┃ ┃ ┣ NavTabsCard.vue
 ┃ ┃ ┗ StatsCard.vue
 ┃ ┣ NotificationPlugin
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ Notification.vue
 ┃ ┃ ┗ Notifications.vue
 ┃ ┣ SidebarPlugin
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ SideBar.vue
 ┃ ┃ ┗ SidebarLink.vue
 ┃ ┣ Tables
 ┃ ┃ ┣ NavTabsTable.vue
 ┃ ┃ ┣ OrderedTable.vue
 ┃ ┃ ┗ SimpleTable.vue
 ┃ ┣ Dropdown.vue
 ┃ ┗ index.js
 ┣ pages
 ┃ ┣ Layout
 ┃ ┃ ┣ Extra
 ┃ ┃ ┃ ┗ FixedPlugin.vue
 ┃ ┃ ┣ Content.vue
 ┃ ┃ ┣ ContentFooter.vue
 ┃ ┃ ┣ DashboardLayout.vue
 ┃ ┃ ┣ MobileMenu.vue
 ┃ ┃ ┗ TopNavbar.vue
 ┃ ┣ UserProfile
 ┃ ┃ ┣ EditProfileForm.vue
 ┃ ┃ ┗ UserCard.vue
 ┃ ┣ API_KEY.js
 ┃ ┣ Dashboard.vue
 ┃ ┣ Icons.vue
 ┃ ┣ index.js
 ┃ ┣ Maps.vue
 ┃ ┣ Notifications.vue
 ┃ ┣ TableList.vue
 ┃ ┣ Typography.vue
 ┃ ┣ UpgradeToPRO.vue
 ┃ ┗ UserProfile.vue
 ┣ routes
 ┃ ┗ routes.js
 ┣ utils
 ┃ ┗ request.js
 ┣ App.vue
 ┣ globalComponents.js
 ┣ globalDirectives.js
 ┣ main.js
 ┗ material-dashboard.js
```

## 安装和运行

1. 克隆项目到本地
2. 进入项目目录
3. 安装依赖：`npm install`
4. 启动项目：`npm run dev`

## 贡献

想提交的请确认代码无bug再提交
