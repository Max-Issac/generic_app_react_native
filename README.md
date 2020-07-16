# livinghood-frontend

### 安装依赖 基本的本地环境

#### node版本需要v12及以上
#### brew install node
#### brew install watchman

#### Yarn是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。
#### npm install -g yarn

### 准备构建工具

#### xcode 需要v10及以上版本，可以通过 App Store 或是到Apple 开发者官网上下载

#### 从 0.60 版本开始 react native 的 iOS 版本需要使用 CocoaPods 来管理依赖
#### sudo gem install cocoapods

### 拉取代码并运行

#### git clone https://github.com/Max-Issac/livinghood-frontend.git
#### cd ./livinghood-frontend
#### npm install
#### npx pod-install ios

### 打开xcode
#### 打开当前文件的ios目录等待编译完成点击运行即可。
#### commend+R 刷新重新加载
