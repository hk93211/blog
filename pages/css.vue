<template>
  <div class="bounce">
    <span
      class="letter"
      v-for="letter in letters">
      {{letter}}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letters: '欢迎小小',
    };
  },
}
</script>

<style lang="scss">
// CONFIGURABLE
$bounce-time: 1.5s;
$bounce-letter-delay-factor: 1/3;
$bounce-timing-function: cubic-bezier(0.05, 0, 0.2, 1);
$bounce-height: 1em;
$shadow-opacity: 0.4;
$shadow-scattering-initial: 0.05em;
$shadow-scattering-peak: 0.35em;
$font-family: "Product Sans"; // preferably sans-serif
$font-size: 6rem;
$font-weight: bold;
$font-style: normal;
$letter-colors: #4285f4, #ea4335, #fbbc05, #4285f4, #34a853, #ea4335, #ab1535; // each letter must be assigned a color individually

html, body, #_saber {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #fff;
  overflow-y: hidden;
}

.bounce {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: $font-style $font-weight $font-size $font-family, sans-serif;
  white-space: nowrap;
}

.letter {
  animation: bounce $bounce-time / 2 $bounce-timing-function infinite alternate;
  display: inline-block;
  transform: translate3d(0, 0, 0);
  margin-top: 0.5em;
  text-shadow: rgba(#000, $shadow-opacity) 0 0 $shadow-scattering-initial;
  font: $font-style $font-weight $font-size $font-family, sans-serif;
  @for $i from 1 through length($letter-colors) {
    &:nth-child(#{$i}) {
      animation-delay: ($i - 1) * ($bounce-time / length($letter-colors)) * $bounce-letter-delay-factor;
      color: nth($letter-colors, $i);
    }
  }
}

@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(#000, $shadow-opacity) 0 0 $shadow-scattering-initial;
  } 100% {
    transform: translate3d(0, -$bounce-height, 0);
    text-shadow: rgba(#000, $shadow-opacity) 0 $bounce-height $shadow-scattering-peak;
  }
}
</style>