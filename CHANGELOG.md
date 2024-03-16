# [2.8.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.7.1...v2.8.0) (2024-03-16)


### Features

* implement filtering todos by status with nav tabs ([#53](https://github.com/spencerjstewart/practical-javascript/issues/53)) ([a733107](https://github.com/spencerjstewart/practical-javascript/commit/a7331077e053a9e44353603fd0a4ba780c7c1784))

## [2.7.1](https://github.com/spencerjstewart/practical-javascript/compare/v2.7.0...v2.7.1) (2024-03-14)


### Bug Fixes

* make toggleAll work if there are no completed todos ([#48](https://github.com/spencerjstewart/practical-javascript/issues/48)) ([655d2f7](https://github.com/spencerjstewart/practical-javascript/commit/655d2f735a24b340c01e2ef9ca62ba4e909e15f9))

# [2.7.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.6.1...v2.7.0) (2024-03-14)


### Features

* add button to toggle all todos ([#46](https://github.com/spencerjstewart/practical-javascript/issues/46)) ([9ea5f83](https://github.com/spencerjstewart/practical-javascript/commit/9ea5f831a6310b10fb7d53ee04ba449dfb2e64ea))

## [2.6.1](https://github.com/spencerjstewart/practical-javascript/compare/v2.6.0...v2.6.1) (2024-03-13)


### Bug Fixes

* use correct class in toggle listener and add checked attribute if todo is completed ([#45](https://github.com/spencerjstewart/practical-javascript/issues/45)) ([f083ffe](https://github.com/spencerjstewart/practical-javascript/commit/f083ffe547c94b0aa36d173caea32515fa220384))

# [2.6.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.5.0...v2.6.0) (2024-03-13)


### Features

* don't allow todo text to be an empty string when editing a todo ([#43](https://github.com/spencerjstewart/practical-javascript/issues/43)) ([422ea18](https://github.com/spencerjstewart/practical-javascript/commit/422ea18e13b3030691b38fa87809e74729e70e27))

# [2.5.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.4.0...v2.5.0) (2024-03-13)


### Features

* add event listener for toggling individual todos ([#42](https://github.com/spencerjstewart/practical-javascript/issues/42)) ([763341e](https://github.com/spencerjstewart/practical-javascript/commit/763341ecb5123b5be0c0078687c759f2bf9b5f96))

# [2.4.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.3.0...v2.4.0) (2024-03-13)


### Features

* add ability to remove a todo ([#40](https://github.com/spencerjstewart/practical-javascript/issues/40)) ([84905fa](https://github.com/spencerjstewart/practical-javascript/commit/84905fadca4e2bbb936f9189744947455fb9fd68))

# [2.3.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.2.2...v2.3.0) (2024-03-13)


### Features

* move cursor to the end of the text content of a todo when editing ([#38](https://github.com/spencerjstewart/practical-javascript/issues/38)) ([a85885f](https://github.com/spencerjstewart/practical-javascript/commit/a85885f058a7885204ce11ead2152d34b1565ee3))

## [2.2.2](https://github.com/spencerjstewart/practical-javascript/compare/v2.2.1...v2.2.2) (2024-03-13)


### Bug Fixes

* add blur event listener on the todo text span element ([#37](https://github.com/spencerjstewart/practical-javascript/issues/37)) ([615f624](https://github.com/spencerjstewart/practical-javascript/commit/615f624d02cceac1749268bf2bbd6ee9d7669c37))

## [2.2.1](https://github.com/spencerjstewart/practical-javascript/compare/v2.2.0...v2.2.1) (2024-03-13)


### Bug Fixes

* set the index attribute for each todo item so editing will work ([#34](https://github.com/spencerjstewart/practical-javascript/issues/34)) ([c55df85](https://github.com/spencerjstewart/practical-javascript/commit/c55df85befa1623bd3a8e5067e4e125e670feb00))

# [2.2.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.1.0...v2.2.0) (2024-03-12)


### Bug Fixes

* properly import css and font-awesome ([#31](https://github.com/spencerjstewart/practical-javascript/issues/31)) ([3cf2c48](https://github.com/spencerjstewart/practical-javascript/commit/3cf2c48594607925d63f759da20ee805aeaf948d))
* update test HTML to be compatible with latest changes ([#32](https://github.com/spencerjstewart/practical-javascript/issues/32)) ([9b71618](https://github.com/spencerjstewart/practical-javascript/commit/9b7161882efdc5720b4cfbb1de82bd060b86f920))


### Features

* create input field for adding todos ([#27](https://github.com/spencerjstewart/practical-javascript/issues/27)) ([982bbcf](https://github.com/spencerjstewart/practical-javascript/commit/982bbcf428c1c26f09a48f25d3c980b967093c8e))

# [2.1.0](https://github.com/spencerjstewart/practical-javascript/compare/v2.0.0...v2.1.0) (2024-03-10)


### Features

* configured webpack-dev-server and added styling to indicate completion ([#26](https://github.com/spencerjstewart/practical-javascript/issues/26)) ([6943fd8](https://github.com/spencerjstewart/practical-javascript/commit/6943fd8f37feaaa0a8e156b7da2971a859587e21))

# [2.0.0](https://github.com/spencerjstewart/practical-javascript/compare/v1.5.0...v2.0.0) (2024-03-09)


### Features

* deprecate displayTodos that used the console and move to the browser and various linting updates ([#24](https://github.com/spencerjstewart/practical-javascript/issues/24)) ([cbea554](https://github.com/spencerjstewart/practical-javascript/commit/cbea55477e06a8d9f3d54eb9c0503b5b1ff5c771))


### BREAKING CHANGES

* we have moved away from the console and will be using the web page

* chore: configure prettier to add a linebreak at the end of javascript files

* chore: configure .gitattributes to normalize line endings to LF for all text files

* chore: run prettier on entire project

# [1.5.0](https://github.com/spencerjstewart/practical-javascript/compare/v1.4.0...v1.5.0) (2024-03-08)


### Features

* implement toggleAll function ([#21](https://github.com/spencerjstewart/practical-javascript/issues/21)) ([f71007c](https://github.com/spencerjstewart/practical-javascript/commit/f71007c9ad39a9e6b4f33039993580555d0527c8))

# [1.4.0](https://github.com/spencerjstewart/practical-javascript/compare/v1.3.0...v1.4.0) (2024-03-08)


### Features

* change displayTodos to output todos in a user-friendly way ([#19](https://github.com/spencerjstewart/practical-javascript/issues/19)) ([5755d97](https://github.com/spencerjstewart/practical-javascript/commit/5755d9714ee6efe6a49963eacf842ac4f7079605))

# [1.3.0](https://github.com/spencerjstewart/practical-javascript/compare/v1.2.1...v1.3.0) (2024-03-07)


### Features

* rewrite functions to support manipulating todo objects ([#14](https://github.com/spencerjstewart/practical-javascript/issues/14)) ([b8e2240](https://github.com/spencerjstewart/practical-javascript/commit/b8e2240be5c4d1662227d7a9156cf832f3e948cd))

## [1.2.1](https://github.com/spencerjstewart/practical-javascript/compare/v1.2.0...v1.2.1) (2024-03-07)


### Bug Fixes

* properly remove 1 item when using the remove function ([#13](https://github.com/spencerjstewart/practical-javascript/issues/13)) ([1d0bf6a](https://github.com/spencerjstewart/practical-javascript/commit/1d0bf6a09b315c46e06384573aa413cf3fc83082))

# [1.2.0](https://github.com/spencerjstewart/practical-javascript/compare/v1.1.0...v1.2.0) (2024-03-07)


### Features

* display todos after updating todos ([#12](https://github.com/spencerjstewart/practical-javascript/issues/12)) ([e46ef16](https://github.com/spencerjstewart/practical-javascript/commit/e46ef16f93ccc17a1a6a23d80526c141eabb2d14))

# [1.1.0](https://github.com/spencerjstewart/practical-javascript/compare/v1.0.0...v1.1.0) (2024-03-07)


### Features

* create functions for CRUD operations ([#11](https://github.com/spencerjstewart/practical-javascript/issues/11)) ([c504c3c](https://github.com/spencerjstewart/practical-javascript/commit/c504c3cfb2750905faa4a6fc22afea2d738b86a5))

# 1.0.0 (2024-03-06)


### Bug Fixes

* fix typo ([#10](https://github.com/spencerjstewart/practical-javascript/issues/10)) ([a9222d5](https://github.com/spencerjstewart/practical-javascript/commit/a9222d5dc5e8327283469dff4fc2cd81b1b56cce))


### Features

* add a place to store todos ([b1adb31](https://github.com/spencerjstewart/practical-javascript/commit/b1adb31a11e29c75b7c0310a80262563e2317ed1))
* add a way to add a todo ([7fc420e](https://github.com/spencerjstewart/practical-javascript/commit/7fc420ee6e283a5dfec0d3cca44c98d4759ba891))
* add a way to display todos ([5429d0d](https://github.com/spencerjstewart/practical-javascript/commit/5429d0d427da99b757ee9e177aeefffa11464e28))
* add a way to edit todos ([58c0a0d](https://github.com/spencerjstewart/practical-javascript/commit/58c0a0ddcf4dda00cbf499ffe12a0fd2113433b5))
* add a way to remove todos ([98872ee](https://github.com/spencerjstewart/practical-javascript/commit/98872ee8c1894f2c4b9bd6e951f18c47f66d9ff1))


### Performance Improvements

* defer script loading ([f6303a2](https://github.com/spencerjstewart/practical-javascript/commit/f6303a26897825484b79eed2ce4260d0662efdb7))
