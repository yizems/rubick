## 系统分层

主程序分为三层

- electron 主进程
- render 渲染进程: 其实就是一个vue 的网页, 用于显示界面, electron 主进程直接用BrowserWindow加载的这个页面
- feature: 插件相关的功能: 本质上也是一个插件

## 初始页面

- render: 输入检索词
- render: getOptionsFromSearchValue : 获取选项
- electron主进程执行: getOptionsFromSearchValue: 获取选项
- render: 获取所有的plugin后,遍历结果, 显示对应的选项
- render: showOptions: 显示选项

## 打开plugin

- render: 打开plugin: [pluginClickEvent.ts](src/renderer/plugins-manager/pluginClickEvent.ts)pluginClickEvent
  - 初步做一个简单的信息组装
  - 然后跳转到 [index.ts](src/renderer/plugins-manager/index.ts)openPlugin 去打开plugin
  - 调用 windows.rubick.openPlugin 打开plugin
  - 其实是 publick 下面的 preload.ts 里面的一个函数, 用于打开plugin
  - 然后用 IpcMain 和 electron 主进程通信, 打开plugin
- electron 主进程: [api.ts](src/main/common/api.ts) 里面的 openPlugin
  - 初始化资源路径等信息
  - [api.ts](src/main/common/api.ts) init
  - new BrowserWindow to load plugin
  - once launched, execute viewReadyFn -> executeHooks('PluginEnter', ext); -> executeHooks('PluginReady', ext);
  - ext is the params which you enter and matched plugin declared
