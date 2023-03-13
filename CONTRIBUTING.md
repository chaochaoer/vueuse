# 贡献(Contributing)

感谢您对这个项目感兴趣！

Thanks for being interested in contributing to this project!

> **警告**: **⚠️ 放缓新函数更新**

> **Warning**: **⚠️ Slowing down new functions**

>

> 由于VueUse用户不断增长，我们收到了大量的feature requests和PR。维护这个项目变得越来越难，最近有点超出了我们的能力。将来，**我们可能会放慢采纳新特性的速度，优先考虑现有功能的稳定性和质量。VueUse的新函数可能不被接受**。如果你有了一些新的想法，我们建议你先把它们放在你的代码库中，而不是直接提交给VueUse。你可以迭代几次，看看怎样满足你的需求，以及如何将它们泛化。如果你 **真的** 认为它们对社区有用，你可以提PR并附带你的使用场景，我们仍然非常愿意倾听和讨论。谢谢您的理解。

> Due to the growing audience of VueUse, we received a huge amount of feature requests and pull requests. It's become harder and harder and recently a bit beyond our capacity to maintain the project. In the near future, **we could like slowing down on accepting new features and prioritize the stability and quality of existing functions. New functions to VueUse may not be accepted**. If you come up some new ideas, we advice you to have them in your codebase first instead of proposing to VueUse. You may iterate them a few time and see how them suite your needs and how them can be generalized. If you **really** believe they are useful to the community, you can create PR with your usercases, we are still happy to hear and discuss. Thank you for your understanding.

## Development 

### Setup

Clone this repo to your local machine and install the dependencies.

```bash
pnpm install
```

We use VitePress for rapid development and documenting. You can start it locally by

```bash
pnpm dev
```

## Contributing

### Existing functions

Feel free to enhance the existing functions. Please try not to introduce breaking changes.

### New functions

There are some notes for adding new functions

- Before you start working, it's better to open an issue to discuss first.
- The implementation should be placed under `packages/core` as a folder and exposing in `index.ts`
- In the `core` package, try not to introduce 3rd-party dependencies as this package is aimed to be as lightweight as possible.
- If you'd like to introduce 3rd-party dependencies, please contribute to @vueuse/integrations or create a new add-on.
- You can find the function template under `packages/core/_template/`, details explained in the [Function Folder](#function-folder) section.
- When writing documentation for your function, the `<!--FOOTER_STARTS-->` and `<!--FOOTER_ENDS-->` will be automatically updated at build time, so don't feel the need to update them.

> Please note you don't need to update packages' `index.ts`. They are auto-generated.

### New add-ons

New add-ons are greatly welcome!

- Create a new folder under `packages/`, name it as your add-on name. 
- Add add-on details in `scripts/packages.ts`
- Create `README.md` under that folder.
- Add functions as you would do to the core package.
- Commit and submit as a PR.

## Project Structure

### Monorepo

We use monorepo for multiple packages

```
packages
  shared/         - shared utils across packages
  core/           - the core package
  firebase/       - the Firebase add-on
  [...addons]/    - add-ons named
```

### Function Folder

A function folder typically contains these 4 files:

> You can find the template under `packages/core/_template/`

```bash
index.ts            # function source code itself
demo.vue            # documentation demo
index.test.ts       # vitest unit testing
index.md            # documentation
```

for `index.ts` you should export the function with names.

```ts
// DO
export { useMyFunction }

// DON'T
export default useMyFunction
```

for `index.md` the first sentence will be displayed as the short intro in the function list, so try to keep it brief and clear.

```md
# useMyFunction

This will be the intro. The detail descriptions...
```

Read more about the [guidelines](https://vueuse.org/guidelines).

## Code Style

Don't worry about the code style as long as you install the dev dependencies. Git hooks will format and fix them for you on committing.

## Thanks

Thank you again for being interested in this project! You are awesome!
