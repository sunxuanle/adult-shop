# 微信H5商城部署指南

## 📋 文件清单

当前项目包含以下文件：

| 文件 | 说明 |
|------|------|
| index.html | 商城首页（商品列表） |
| detail.html | 商品详情页 |
| cart.html | 购物车页面 |
| checkout.html | 结算支付页面 |
| success.html | 订单成功页面 |
| profile.html | 用户中心 |
| data.js | 商品数据与购物车逻辑 |

## 🚀 部署步骤

### 方法一：使用云存储托管（推荐）

**腾讯云 COS / 阿里云 OSS / 七牛云**

1. **创建存储桶**
   - 设置存储桶权限为"公有读"
   - 配置静态网站托管功能

2. **上传文件**
   - 将所有文件上传到存储桶根目录

3. **配置HTTPS**
   - 绑定自定义域名
   - 配置SSL证书（免费证书即可）

4. **测试访问**
   - 在微信中打开 `https://yourdomain.com/index.html`

### 方法二：GitHub Pages 部署（免费）

#### 第一步：创建GitHub仓库

1. 打开 [github.com](https://github.com)
2. 登录你的账号
3. 点击右上角 **"+"** → **"New repository"**
4. 填写仓库信息：
   - Repository name: `adult-shop`（或你喜欢的名字）
   - Description: `微信H5商城`
   - 选择 **Public**（公开仓库）
   - 不要勾选 "Initialize this repository with a README"

#### 第二步：上传文件

**方法A：网页上传（最简单）**

1. 进入刚创建的仓库页面
2. 点击 **"uploading an existing file"**
3. 将项目所有文件拖拽到上传区域
4. 滑到页面底部，点击 **"Commit changes"**

**方法B：使用Git命令**

```bash
# 1. 在项目文件夹打开终端，初始化Git
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit"

# 4. 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/adult-shop.git

# 5. 推送
git branch -M main
git push -u origin main
```

#### 第三步：开启GitHub Pages

1. 进入仓库设置（Settings）
2. 左侧菜单找到 **"Pages"**
3. 在 "Source" 部分：
   - Branch 选择 **main**
   - Folder 选择 **/ (root)**
   - 点击 **Save**
4. 等待1-2分钟，页面会显示你的网站地址：
   ```
   https://你的用户名.github.io/adult-shop/
   ```

#### 第四步：在微信中打开

复制你的GitHub Pages地址，在微信中粘贴打开即可！

---

### 方法三：Netlify 部署（最简单，无需Git）

#### 第一步：注册Netlify

1. 打开 [app.netlify.com](https://app.netlify.com)
2. 点击 **"Sign up"**
3. 使用GitHub账号登录

#### 第二步：部署网站

1. 进入Netlify Dashboard
2. 点击 **"Add new site"** → **"Deploy manually"**
3. 将项目文件夹拖拽到上传区域
4. 等待部署完成（几秒钟）

#### 第三步：获取链接

1. Netlify会自动生成一个随机子域名
2. 你可以点击 **"Site settings"** → **"Change site name"** 自定义名称
3. 最终链接格式：`https://自定义名称.netlify.app`

#### 第四步：在微信中打开

复制你的Netlify地址，在微信中粘贴打开即可！

---

### 方法四：Vercel 部署（推荐国内用户）

#### 第一步：注册Vercel

1. 打开 [vercel.com](https://vercel.com)
2. 点击 **"Sign Up"**
3. 使用GitHub账号登录

#### 第二步：部署网站

1. 进入Vercel Dashboard
2. 点击 **"Add New"** → **"Project"**
3. 选择 **"Import Third-Party Git Repository"** 或直接拖拽文件夹
4. 如果是拖拽方式：
   - 选择 **"Deploy from Server"**
   - 将项目文件夹拖拽进去
5. 等待部署完成

#### 第三步：获取链接

1. Vercel会自动生成链接
2. 点击项目 → **"Domains** 可以自定义域名
3. 默认链接格式：`https://你的项目名.vercel.app`

#### 第四步：在微信中打开

复制你的Vercel地址，在微信中粘贴打开即可！

---

## ⚠️ 微信访问注意事项

### 1. HTTPS 必须
微信浏览器强制要求HTTPS协议，不支持HTTP

### 2. 域名白名单（如需微信支付）

在微信公众平台配置：
- 业务域名
- JS接口安全域名
- 网页授权域名

### 3. 支付功能配置

如需实现在线支付，需要：
1. 注册微信商户号
2. 配置API密钥
3. 集成微信支付SDK

### 4. 常见问题

**Q: 页面无法打开？**
- 检查HTTPS是否正常
- 确认域名已备案（国内服务器）

**Q: 图片不显示？**
- 检查图片URL是否使用HTTPS
- 确认图片域名在白名单中

**Q: 支付按钮无效？**
- 当前版本为模拟支付，需对接真实支付接口

## 📱 页面预览链接格式

```
首页：https://yourdomain.com/index.html
商品详情：https://yourdomain.com/detail.html?id=1
购物车：https://yourdomain.com/cart.html
结算：https://yourdomain.com/checkout.html
订单成功：https://yourdomain.com/success.html
用户中心：https://yourdomain.com/profile.html
```

## 📦 项目结构

```
├── index.html          # 首页入口
├── detail.html         # 商品详情
├── cart.html           # 购物车
├── checkout.html       # 结算支付
├── success.html        # 订单成功
├── profile.html        # 用户中心
└── data.js             # 数据与逻辑
```

## 🎯 使用说明

1. 将所有文件部署到HTTPS服务器
2. 用户在微信中打开首页链接即可浏览商城
3. 支持添加商品到购物车、结算、模拟支付等功能

## 🔧 推荐方案对比

| 方案 | 优点 | 缺点 | 推荐指数 |
|------|------|------|----------|
| Netlify | 无需Git，上传即用 | 无自定义域名 | ⭐⭐⭐⭐⭐ |
| GitHub Pages | 完全免费 | 需Git知识，配置稍复杂 | ⭐⭐⭐⭐ |
| Vercel | 速度快 | 需Git或手动上传 | ⭐⭐⭐⭐ |
| 腾讯云COS | 国内访问快 | 需备案 | ⭐⭐⭐ |
