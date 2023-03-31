# 贡献(Contributing)

感谢您有兴趣为这个项目做出贡献！

Thanks for being interested in contributing to this project!

> **警告**: **⚠️ 放缓新函数**

> **Warning**: **⚠️ Slowing down new functions**

>

> 由于VueUse用户不断增长，我们收到了大量的feature requests和PR。维护这个项目变得越来越难，最近有点超出了我们的能力。将来，**我们可能会放慢采纳新特性的速度，优先考虑现有功能的稳定性和质量。向 VueUse 提出的新函数可能不被接受**。如果你有了一些新的想法，我们建议你先把它们放在你的代码库中，而不是直接提交给VueUse。你可以迭代几次，看看怎样满足你的需求，以及如何将它们泛化。如果你 **真的** 认为它们对社区有用，你可以提PR并附带你的使用场景，我们仍然非常愿意倾听和讨论。谢谢您的理解。

> Due to the growing audience of VueUse, we received a huge amount of feature requests and pull requests. It's become harder and harder and recently a bit beyond our capacity to maintain the project. In the near future, **we could like slowing down on accepting new features and prioritize the stability and quality of existing functions. New functions to VueUse may not be accepted**. If you come up some new ideas, we advice you to have them in your codebase first instead of proposing to VueUse. You may iterate them a few time and see how them suite your needs and how them can be generalized. If you **really** believe they are useful to the community, you can create PR with your usercases, we are still happy to hear and discuss. Thank you for your understanding.

## 开发(Development)

### Setup

将此仓库复制到本地，并安装依赖。

Clone this repo to your local machine and install the dependencies.

```bash
pnpm install
```

我们使用 VitePress 进行快速开发和文档编制。您可以通过以下方式在本地启动它

We use VitePress for rapid development and documenting. You can start it locally by

```bash
pnpm dev
```

## 贡献(Contributing)

### 现有的函数(Existing functions)

可以随意增强现有的函数。但请尽量不要引入破坏性的变化。

Feel free to enhance the existing functions. Please try not to introduce breaking changes.

### 新函数(New functions)

添加新函数的注意事项

There are some notes for adding new functions

- 在开始工作之前，最好先开个issue进行讨论。
- Before you start working, it's better to open an issue to discuss first.
- 实现应该放在“packages/core”文件夹下，并在“index.ts”中暴露。
- The implementation should be placed under `packages/core` as a folder and exposing in `index.ts`
- 在 `core` 包中，尽量不要引入第三方依赖项，因为这个包应该尽可能轻量。
- In the `core` package, try not to introduce 3rd-party dependencies as this package is aimed to be as lightweight as possible.
- 如果您想引入第三方依赖，请向 @vueuse/integrations 提交代码，或创建一个新的 add-on。
- If you'd like to introduce 3rd-party dependencies, please contribute to @vueuse/integrations or create a new add-on.
- 你可以在 `packages/core/_template/` 下找到函数的模板，详细信息见 [Function Folder](#function-folder) 
- You can find the function template under `packages/core/_template/`, details explained in the [Function Folder](#function-folder) section.
- 在为函数编写文档时，`<!--FOOTER_STARTS-->` 和 `<!--FOOTER_ENDS-->` 将在构建时自动更新，所以不需要更新它们。
- When writing documentation for your function, the `<!--FOOTER_STARTS-->` and `<!--FOOTER_ENDS-->` will be automatically updated at build time, so don't feel the need to update them.

> 请注意，不需要更新 `index.ts`。它是自动生成的。
> Please note you don't need to update packages' `index.ts`. They are auto-generated.

### 新的插件(New add-ons)

新的插件是非常受欢迎的
New add-ons are greatly welcome!
- 在 `packages/` 目录下创建一个新文件夹，并将其命名为你的插件名称。
- Create a new folder under `packages/`, name it as your add-on name. 
- 在 `scripts/packages.ts` 中添加插件详情
- Add add-on details in `scripts/packages.ts`
- 在这个文件夹下创建 `README.md` 
- Create `README.md` under that folder.
- 像在core package中那样添加函数
- Add functions as you would do to the core package.
- commit和作为pr提交
- Commit and submit as a PR.

## 项目结构(Project Structure)

### Monorepo

我们对多个包使用 monorepo

We use monorepo for multiple packages

```
packages
  shared/         - 跨包共享工具函数
  core/           - 核心包
  firebase/       - the Firebase add-on
  [...addons]/    - add-ons 的名字
```

### 函数文件夹(Function Folder)

函数文件夹通常包含以下4个文件:

A function folder typically contains these 4 files:

> 在 `packages/core/_template/` 可以找到模板
> You can find the template under `packages/core/_template/`

```bash
index.ts            # function source code itself
demo.vue            # documentation demo
index.test.ts       # vitest unit testing
index.md            # documentation
```
在 `index.ts` 中导出带有名字的函数

for `index.ts` you should export the function with names.

```ts
// 正确
// DO
export { useMyFunction }

// 不正确
// DON'T
export default useMyFunction
```
 `index.md` 中的的第一句话将在函数列表中以函数简介的形式展示，所以尽量保持简短和清晰。

for `index.md` the first sentence will be displayed as the short intro in the function list, so try to keep it brief and clear.

```md
# useMyFunction
这是介绍。详细的描述……
This will be the intro. The detail descriptions...
```

阅读更多关于 [使用说明](https://vueuse.org/guidelines).

Read more about the [guidelines](https://vueuse.org/guidelines).

## 代码风格(Code Style)

只要安装了开发依赖，就不必担心代码风格。Git hooks会在提交时为你格式化和修复代码风格。

Don't worry about the code style as long as you install the dev dependencies. Git hooks will format and fix them for you on committing.

## 致谢(Thanks)

再次感谢您对这个项目感兴趣!你太棒了!

Thank you again for being interested in this project! You are awesome!
