<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Event/>
  </div>
</template>

<script>
import Event from './views/Event.vue'

export default {
  name: 'App',
  components: {
    Event,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import "~bulma/sass/utilities/_all";

@charset "utf-8";

$family-sans-serif: "Vazir";
$family-primary: $family-sans-serif;
$is-family-sans-serif: $family-sans-serif;
$is-family-monospace: $family-sans-serif;
$is-family-secondary: $family-sans-serif;
$is-family-code: $family-sans-serif;

$gamia-darkest-red: #630802;
$gamia-dark-red: #7c0a02;
$gamia-red: #b22222;
$gamia-orange: #e25822;
$gamia-yellow: #f1bc31;

$neutral-text: #43464F;
$neutral-placeholder: #9095A7;
$neutral-stroke: #C8CFD7;
$neutral-background: #F1F2F4;
$neutral-white: #FFFFFF;
$reserve-background: #DDDFE4;

$neutral-tab: #E2E8EF;
$neutral-tab2: #F3F3F4;
$neutral-tab3: #F3F3F3;

$neutral-divider: #6A6A6A;

$primary: $gamia-dark-red;
$primary-invert: findColorInvert($primary);

$info: $gamia-yellow;
$info-invert: findColorInvert($info);

$warning: $gamia-orange;
$warning-invert: findColorInvert($warning);

$danger: $gamia-red;
$danger-invert: findColorInvert($danger);

$link: $gamia-orange;
$link-invert: findColorInvert($link);
$link-light: $gamia-yellow;
$link-dark: $gamia-red;
$link-hover: $gamia-yellow;
$link-visited: $gamia-red;

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert, $gamia-red, $gamia-darkest-red),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "link": ($link, $link-invert, $link-light, $link-dark),
);

$body-background-color: $neutral-background;
$background: $reserve-background;
$loading-background: $neutral-background;
$table-background-color: $neutral-background;

$navbar-dropdown-background-color: $primary;

$widescreen-enabled: false;
$fullhd-enabled: false;

$control-border-width: 2px;
$input-border-color: transparent;
$input-shadow: none;
$rtl: true;

@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: $primary !important;
  }
  .navbar-item {
    color: $neutral-background !important;
    &:hover {
      background-color: $gamia-darkest-red !important;
    }
  }
}

@import "~bulma";
@import "~buefy/src/scss/buefy";
@import "~vuelayers/lib/style.css"
</style>
