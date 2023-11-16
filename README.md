# About
>
> this  is h5 ssr (implement from nextjs) project

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

1. use nodejs

2. use docker

# Tech

## how do use lib style?

  you need like than

```tsx

import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css' // 引入css 这个是必要的

import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css' // 引入css 这个是必要的

......
```

# ToDo

1. 要把原来不合理的布局 给删除掉，（deital, categoryHisory....）

2. 移除依赖 rmc-dialog(这个组件有问题无法自定modal 挂挂载点) 、

3. Next 存在一些缓存问题，这一点我们 需要再仔细研究一下，然后就是他的Style 样式会有冲突 ，如果有CSS-in-js 会存在一些覆盖等...问题。目前暂时使用import去覆盖，具体解决方案 需要再仔细瞧瞧
