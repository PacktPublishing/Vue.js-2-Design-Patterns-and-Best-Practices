# NativeScript Vue.js Template

This repo serves as the starting point for NativeScript + Vue.js projects, using [nativescript-vue](https://github.com/rigor789/nativescript-vue).

## Usage

1. Install NativeScript tools (see http://docs.nativescript.org/start/quick-setup)

2. Create app from this template
```bash
tns create hello-ns-vue --template nativescript-vue-template

cd hello-ns-vue
```

> While the `nativescript-vue` project is not up-to-date on npm, you may have to run
> `npm link nativescript-vue` in the project folder (like [described here](https://github.com/rigor789/nativescript-vue/blob/master/CONTRIBUTING.md)).

3. Run in Android or iOS
```bash
tns run android
tns run ios
```

## Templates

This template contains a number of app samples that you can use as the starting point of your app. To experiment, try copying and pasting the code from `app-with-list-view.js`, `app-with-router.js`, `app-with-tab-view.js`, or `app-with-vmodel.js` into your app’s `app.js` file.
