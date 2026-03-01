import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addPlugin,
  addImportsDir,
} from "@nuxt/kit";
import { installNuxtSiteConfig } from "nuxt-site-config-kit";
import { defu } from "defu";
import {
  isPlainObject,
  isString,
  forOwn,
  get,
  castArray,
} from "es-toolkit/compat";
import {
  selectComponents,
  getComponent,
} from "../dist/runtime/modules/useComponents.js";
import presetWind3 from "@unocss/preset-wind3";
import { handler } from "@unocss/preset-mini/utils";
import {
  justifies,
  orders,
  alignments,
  placements,
} from "@unocss/preset-mini/rules";

console.log("[usebootstrap] module loaded");

const selectPlugins = (category) => {
  return plugins.filter((item) => {
    return item.category == category;
  });
};
const plugins = [
  {
    path: "runtime/plugins/static",
    category: "static",
  },
  {
    path: "runtime/plugins/vueuse",
    category: "vueuse",
  },
  {
    path: "runtime/plugins/shiki",
    category: "shiki",
  },
  {
    path: "runtime/plugins/bootstrap",
    category: "bootstrap",
  },
  // {
  //  path: 'runtime/plugins/seometa',
  //  category: 'bootstrap',
  // },
  {
    path: "runtime/plugins/localization",
    category: "bootstrap",
  },
  {
    path: "runtime/plugins/breakpoint",
    category: "bootstrap",
  },
  // {y
  //  path: 'runtime/plugins/linked-data',
  //  category: 'bootstrap',
  // },
];

function camelCase(str) {
  return str.replace(/-([a-z])/g, (_, v) => v.toUpperCase());
}
const sizeRules = [
  [
    /^(min-|max-)?size-(.+)$/,
    ([, minmax, prop], { theme }) => {
      const widthProperty = `${minmax || ""}width`;
      const heightProperty = `${minmax || ""}height`;
      const width = theme[camelCase(widthProperty)]?.[prop];
      const height = theme[camelCase(heightProperty)]?.[prop];
      if (width != null && height != null) {
        return {
          [widthProperty]: width,
          [heightProperty]: height,
        };
      }
      const value = handler.bracket.cssvar.auto.fraction.rem(prop);
      return {
        [widthProperty]: value,
        [heightProperty]: value,
      };
    },
    {
      autocomplete: [
        "size-$width|height|maxWidth|maxHeight|minWidth|minHeight",
        "(max|min)-size-$width|height|maxWidth|maxHeight|minWidth|minHeight",
      ],
    },
  ],
];

const umbraOpacity = 0.2;
const penumbraOpacity = 0.14;
const ambientOpacity = 0.12;
const umbra = [
  "0px 0px 0px 0px",
  "0px 2px 1px -1px",
  "0px 3px 1px -2px",
  "0px 3px 3px -2px",
  "0px 2px 4px -1px",
  "0px 3px 5px -1px",
  "0px 3px 5px -1px",
  "0px 4px 5px -2px",
  "0px 5px 5px -3px",
  "0px 5px 6px -3px",
  "0px 6px 6px -3px",
  "0px 6px 7px -4px",
  "0px 7px 8px -4px",
  "0px 7px 8px -4px",
  "0px 7px 9px -4px",
  "0px 8px 9px -5px",
  "0px 8px 10px -5px",
  "0px 8px 11px -5px",
  "0px 9px 11px -5px",
  "0px 9px 12px -6px",
  "0px 10px 13px -6px",
  "0px 10px 13px -6px",
  "0px 10px 14px -6px",
  "0px 11px 14px -7px",
  "0px 11px 15px -7px",
];
const penumbra = [
  "0px 0px 0px 0px",
  "0px 1px 1px 0px",
  "0px 2px 2px 0px",
  "0px 3px 4px 0px",
  "0px 4px 5px 0px",
  "0px 5px 8px 0px",
  "0px 6px 10px 0px",
  "0px 7px 10px 1px",
  "0px 8px 10px 1px",
  "0px 9px 12px 1px",
  "0px 10px 14px 1px",
  "0px 11px 15px 1px",
  "0px 12px 17px 2px",
  "0px 13px 19px 2px",
  "0px 14px 21px 2px",
  "0px 15px 22px 2px",
  "0px 16px 24px 2px",
  "0px 17px 26px 2px",
  "0px 18px 28px 2px",
  "0px 19px 29px 2px",
  "0px 20px 31px 3px",
  "0px 21px 33px 3px",
  "0px 22px 35px 3px",
  "0px 23px 36px 3px",
  "0px 24px 38px 3px",
];
const ambient = [
  "0px 0px 0px 0px",
  "0px 1px 3px 0px",
  "0px 1px 5px 0px",
  "0px 1px 8px 0px",
  "0px 1px 10px 0px",
  "0px 1px 14px 0px",
  "0px 1px 18px 0px",
  "0px 2px 16px 1px",
  "0px 3px 14px 2px",
  "0px 3px 16px 2px",
  "0px 4px 18px 3px",
  "0px 4px 20px 3px",
  "0px 5px 22px 4px",
  "0px 5px 24px 4px",
  "0px 5px 26px 4px",
  "0px 6px 28px 5px",
  "0px 6px 30px 5px",
  "0px 6px 32px 5px",
  "0px 7px 34px 6px",
  "0px 7px 36px 6px",
  "0px 8px 38px 7px",
  "0px 8px 40px 7px",
  "0px 8px 42px 7px",
  "0px 9px 44px 8px",
  "0px 9px 46px 8px",
];
const elevationLevel = Array.from({ length: 25 })
  .map((_, i) => i)
  .join("|");
const elevationRules = [
  [
    /(shadow-)?el(?:evation)?-(\d+)$/,
    ([, , prop]) => {
      const index = Number(prop);
      if (umbra[index]) {
        return {
          "box-shadow": `${umbra[index]} rgba(0, 0, 0, calc(${umbraOpacity} * var(--une-el-opacity, var(--un-shadow-opacity, 1)))), ${penumbra[index]} rgba(0, 0, 0, calc(${penumbraOpacity} * var(--une-el-opacity, var(--un-shadow-opacity, 1)))), ${ambient[index]} rgba(0, 0, 0, calc(${ambientOpacity} * var(--une-el-opacity, var(--un-shadow-opacity, 1))))`,
        };
      }
    },
    {
      autocomplete: ["el", "elevation", "shadow-elevation"]
        .map((name) =>
          elevationLevel.split("|").map((level) => `${name}-${level}`),
        )
        .flat(),
    },
  ],
  [
    /(shadow-)?el(?:evation)?-op(?:acity)?-(\d+)$/,
    ([, , o]) => {
      return {
        "--une-el-opacity": handler.bracket.percent(o),
      };
    },
    {
      autocomplete: ["el", "elevation", "shadow-elevation"]
        .map((name) =>
          ["op", "opacity"].map((op) =>
            Array.from({ length: 101 }).map((_, i) => `${name}-${op}-${i}`),
          ),
        )
        .flat(2),
    },
  ],
];

const bounce = {
  animationName: "uneBounce",
  css: {
    "animation-name": "uneBounce",
    "transform-origin": "center bottom",
  },
  keyframes:
    "0%,20%,53%,to { animation-timing-function: cubic-bezier(.215,.61,.355,1); transform: translateZ(0) } 40%,43% { transform: translate3d(0,-30px,0) scaleY(1.1) } 40%,43%,70% { animation-timing-function: cubic-bezier(.755,.05,.855,.06) } 70% { transform: translate3d(0,-15px,0) scaleY(1.05) } 80% { transform: translateZ(0) scaleY(.95); transition-timing-function: cubic-bezier(.215,.61,.355,1) } 90% { transform: translate3d(0,-4px,0) scaleY(1.02) }",
};
const flash = {
  animationName: "uneFlash",
  css: {
    "animation-name": "uneFlash",
  },
  keyframes: "0%,50%,to { opacity: 1 } 25%,75% { opacity: 0 }",
};
const jello = {
  animationName: "uneJello",
  css: {
    "animation-name": "uneJello",
    "transform-origin": "center",
  },
  keyframes:
    "0%,11.1%,to { transform: translateZ(0) } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg) } 33.3% { transform: skewX(6.25deg) skewY(6.25deg) } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg) } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg) } 66.6% { transform: skewX(-.78125deg) skewY(-.78125deg) } 77.7% { transform: skewX(.390625deg) skewY(.390625deg) } 88.8% { transform: skewX(-.1953125deg) skewY(-.1953125deg) }",
};
const pulse = {
  animationName: "unePulse",
  css: {
    "animation-name": "unePulse",
    "animation-timing-function": "ease-in-out",
  },
  keyframes:
    "0% { transform: scaleX(1) } 50% { transform: scale3d(1.05,1.05,1.05) } to { transform: scaleX(1) }",
};
const shake = {
  animationName: "uneShake",
  css: {
    "animation-name": "uneShake",
  },
  keyframes:
    "0%,to { transform: translateZ(0) } 10%,30%,50%,70%,90% { transform: translate3d(-10px,0,0) } 20%,40%,60%,80% { transform: translate3d(10px,0,0) }",
};
const swing = {
  animationName: "uneSwing",
  css: {
    "transform-origin": "top center",
    "animation-name": "uneSwing",
  },
  keyframes:
    "20% { transform: rotate(15deg) } 40% { transform: rotate(-10deg) } 60% { transform: rotate(5deg) } 80% { transform: rotate(-5deg) } to { transform: rotate(0deg) }",
};
const tada = {
  animationName: "uneTada",
  css: {
    "animation-name": "uneTada",
  },
  keyframes:
    "0% { transform: scaleX(1) } 10%,20% { transform: scale3d(.9,.9,.9) rotate(-3deg) } 30%,50%,70%,90% { transform: scale3d(1.1,1.1,1.1) rotate(3deg) } 40%,60%,80% { transform: scale3d(1.1,1.1,1.1) rotate(-3deg) } to { transform: scaleX(1) }",
};
const wobble = {
  animationName: "uneWobble",
  css: {
    "animation-name": "uneWobble",
  },
  keyframes:
    "0% { transform: translateZ(0) } 15% { transform: translate3d(-25%,0,0) rotate(-5deg) } 30% { transform: translate3d(20%,0,0) rotate(3deg) } 45% { transform: translate3d(-15%,0,0) rotate(-3deg) } 60% { transform: translate3d(10%,0,0) rotate(2deg) } 75% { transform: translate3d(-5%,0,0) rotate(-1deg) } to { transform: translateZ(0) }",
};
const flip = {
  animationName: "uneFlip",
  css: {
    "backface-visibility": "visible",
    "animation-name": "uneFlip",
  },
  keyframes:
    "0% { transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn) } 0%,40% { animation-timing-function: ease-out } 40% { transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg) } 50% { transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg) } 50%,80% { animation-timing-function: ease-in } 80% { transform: perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg) } to { animation-timing-function: ease-in; transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg) }",
};
const hinge = {
  animationName: "uneHinge",
  css: {
    "animation-duration": "calc(var(--une-animated-duration) * 2)",
    "animation-name": "uneHinge",
    "transform-origin": "top left",
  },
  keyframes:
    "0%,20%,60% { animation-timing-function: ease-in-out } 20%,60% { transform: rotate(80deg) } 40%,80% { animation-timing-function: ease-in-out; opacity: 1; transform: rotate(60deg) } to { opacity: 0; transform: translate3d(0,700px,0) }",
};
const animatedJSON = {
  bounce: bounce,
  flash: flash,
  "head-shake": {
    animationName: "uneHeadShake",
    css: {
      "animation-timing-function": "ease-in-out",
      "animation-name": "uneHeadShake",
    },
    keyframes:
      "0% { transform: translateX(0) } 6.5% { transform: translateX(-6px) rotateY(-9deg) } 18.5% { transform: translateX(5px) rotateY(7deg) } 31.5% { transform: translateX(-3px) rotateY(-5deg) } 43.5% { transform: translateX(2px) rotateY(3deg) } 50% { transform: translateX(0) }",
  },
  "heart-beat": {
    animationName: "uneHeartBeat",
    css: {
      "animation-name": "uneHeartBeat",
      "animation-duration": "calc(var(--une-animated-duration) * 1.3)",
      "animation-timing-function": "ease-in-out",
    },
    keyframes:
      "0% { transform: scale(1) } 14% { transform: scale(1.3) } 28% { transform: scale(1) } 42% { transform: scale(1.3) } 70% { transform: scale(1) }",
  },
  jello: jello,
  pulse: pulse,
  "rubber-band": {
    animationName: "uneRubberBand",
    css: {
      "animation-name": "uneRubberBand",
    },
    keyframes:
      "0% { transform: scaleX(1) } 30% { transform: scale3d(1.25,.75,1) } 40% { transform: scale3d(.75,1.25,1) } 50% { transform: scale3d(1.15,.85,1) } 65% { transform: scale3d(.95,1.05,1) } 75% { transform: scale3d(1.05,.95,1) } to { transform: scaleX(1) }",
  },
  shake: shake,
  "shake-x": {
    animationName: "uneShakeX",
    css: {
      "animation-name": "uneShakeX",
    },
    keyframes:
      "0%,to { transform: translateZ(0) } 10%,30%,50%,70%,90% { transform: translate3d(-10px,0,0) } 20%,40%,60%,80% { transform: translate3d(10px,0,0) }",
  },
  "shake-y": {
    animationName: "uneShakeY",
    css: {
      "animation-name": "uneShakeY",
    },
    keyframes:
      "0%,to { transform: translateZ(0) } 10%,30%,50%,70%,90% { transform: translate3d(0,-10px,0) } 20%,40%,60%,80% { transform: translate3d(0,10px,0) }",
  },
  swing: swing,
  tada: tada,
  wobble: wobble,
  "back-in-down": {
    animationName: "uneBackInDown",
    css: {
      "animation-name": "uneBackInDown",
    },
    keyframes:
      "0% { transform: translateY(-1200px) scale(.7) } 0%,80% { opacity: 0.7 } 80% { transform: translateY(0) scale(.7) } to { opacity: 1; transform: scale(1) }",
  },
  "back-in-left": {
    animationName: "uneBackInLeft",
    css: {
      "animation-name": "uneBackInLeft",
    },
    keyframes:
      "0% { transform: translateX(-2000px) scale(.7) } 0%,80% { opacity: 0.7 } 80% { transform: translateX(0) scale(.7) } to { opacity: 1; transform: scale(1) }",
  },
  "back-in-right": {
    animationName: "uneBackInRight",
    css: {
      "animation-name": "uneBackInRight",
    },
    keyframes:
      "0% { transform: translateX(2000px) scale(.7) } 0%,80% { opacity: 0.7 } 80% { transform: translateX(0) scale(.7) } to { opacity: 1; transform: scale(1) }",
  },
  "back-in-up": {
    animationName: "uneBackInUp",
    css: {
      "animation-name": "uneBackInUp",
    },
    keyframes:
      "0% { transform: translateY(1200px) scale(.7) } 0%,80% { opacity: 0.7 } 80% { transform: translateY(0) scale(.7) } to { opacity: 1; transform: scale(1) }",
  },
  "back-out-down": {
    animationName: "uneBackOutDown",
    css: {
      "animation-name": "uneBackOutDown",
    },
    keyframes:
      "0% { opacity: 1; transform: scale(1) } 20% { transform: translateY(0) scale(.7) } 20%,to { opacity: 0.7 } to { transform: translateY(700px) scale(.7) }",
  },
  "back-out-left": {
    animationName: "uneBackOutLeft",
    css: {
      "animation-name": "uneBackOutLeft",
    },
    keyframes:
      "0% { opacity: 1; transform: scale(1) } 20% { transform: translateX(0) scale(.7) } 20%,to { opacity: 0.7 } to { transform: translateX(-2000px) scale(.7) }",
  },
  "back-out-right": {
    animationName: "uneBackOutRight",
    css: {
      "animation-name": "uneBackOutRight",
    },
    keyframes:
      "0% { opacity: 1; transform: scale(1) } 20% { transform: translateX(0) scale(.7) } 20%,to { opacity: 0.7 } to { transform: translateX(2000px) scale(.7) }",
  },
  "back-out-up": {
    animationName: "uneBackOutUp",
    css: {
      "animation-name": "uneBackOutUp",
    },
    keyframes:
      "0% { opacity: 1; transform: scale(1) } 20% { transform: translateY(0) scale(.7) } 20%,to { opacity: 0.7 } to { transform: translateY(-700px) scale(.7) }",
  },
  "bounce-in": {
    animationName: "uneBounceIn",
    css: {
      "animation-duration": "calc(var(--une-animated-duration) * 0.75)",
      "animation-name": "uneBounceIn",
    },
    keyframes:
      "0%,20%,40%,60%,80%,to { animation-timing-function: cubic-bezier(.215,.61,.355,1) } 0% { opacity: 0; transform: scale3d(.3,.3,.3) } 20% { transform: scale3d(1.1,1.1,1.1) } 40% { transform: scale3d(.9,.9,.9) } 60% { opacity: 1; transform: scale3d(1.03,1.03,1.03) } 80% { transform: scale3d(.97,.97,.97) } to { opacity: 1; transform: scaleX(1) }",
  },
  "bounce-in-down": {
    animationName: "uneBounceInDown",
    css: {
      "animation-name": "uneBounceInDown",
    },
    keyframes:
      "0%,60%,75%,90%,to { animation-timing-function: cubic-bezier(.215,.61,.355,1) } 0% { opacity: 0; transform: translate3d(0,-3000px,0) scaleY(3) } 60% { opacity: 1; transform: translate3d(0,25px,0) scaleY(.9) } 75% { transform: translate3d(0,-10px,0) scaleY(.95) } 90% { transform: translate3d(0,5px,0) scaleY(.985) } to { transform: translateZ(0) }",
  },
  "bounce-in-left": {
    animationName: "uneBounceInLeft",
    css: {
      "animation-name": "uneBounceInLeft",
    },
    keyframes:
      "0%,60%,75%,90%,to { animation-timing-function: cubic-bezier(.215,.61,.355,1) } 0% { opacity: 0; transform: translate3d(-3000px,0,0) scaleX(3) } 60% { opacity: 1; transform: translate3d(25px,0,0) scaleX(1) } 75% { transform: translate3d(-10px,0,0) scaleX(.98) } 90% { transform: translate3d(5px,0,0) scaleX(.995) } to { transform: translateZ(0) }",
  },
  "bounce-in-right": {
    animationName: "uneBounceInRight",
    css: {
      "animation-name": "uneBounceInRight",
    },
    keyframes:
      "0%,60%,75%,90%,to { animation-timing-function: cubic-bezier(.215,.61,.355,1) } 0% { opacity: 0; transform: translate3d(3000px,0,0) scaleX(3) } 60% { opacity: 1; transform: translate3d(-25px,0,0) scaleX(1) } 75% { transform: translate3d(10px,0,0) scaleX(.98) } 90% { transform: translate3d(-5px,0,0) scaleX(.995) } to { transform: translateZ(0) }",
  },
  "bounce-in-up": {
    animationName: "uneBounceInUp",
    css: {
      "animation-name": "uneBounceInUp",
    },
    keyframes:
      "0%,60%,75%,90%,to { animation-timing-function: cubic-bezier(.215,.61,.355,1) } 0% { opacity: 0; transform: translate3d(0,3000px,0) scaleY(5) } 60% { opacity: 1; transform: translate3d(0,-20px,0) scaleY(.9) } 75% { transform: translate3d(0,10px,0) scaleY(.95) } 90% { transform: translate3d(0,-5px,0) scaleY(.985) } to { transform: translateZ(0) }",
  },
  "bounce-out": {
    animationName: "uneBounceOut",
    css: {
      "animation-duration": "calc(var(--une-animated-duration) * 0.75)",
      "animation-name": "uneBounceOut",
    },
    keyframes:
      "20% { transform: scale3d(.9,.9,.9) } 50%,55% { opacity: 1; transform: scale3d(1.1,1.1,1.1) } to { opacity: 0; transform: scale3d(.3,.3,.3) }",
  },
  "bounce-out-down": {
    animationName: "uneBounceOutDown",
    css: {
      "animation-name": "uneBounceOutDown",
    },
    keyframes:
      "20% { transform: translate3d(0,10px,0) scaleY(.985) } 40%,45% { opacity: 1; transform: translate3d(0,-20px,0) scaleY(.9) } to { opacity: 0; transform: translate3d(0,2000px,0) scaleY(3) }",
  },
  "bounce-out-left": {
    animationName: "uneBounceOutLeft",
    css: {
      "animation-name": "uneBounceOutLeft",
    },
    keyframes:
      "20% { opacity: 1; transform: translate3d(20px,0,0) scaleX(.9) } to { opacity: 0; transform: translate3d(-2000px,0,0) scaleX(2) }",
  },
  "bounce-out-right": {
    animationName: "uneBounceOutRight",
    css: {
      "animation-name": "uneBounceOutRight",
    },
    keyframes:
      "20% { opacity: 1; transform: translate3d(-20px,0,0) scaleX(.9) } to { opacity: 0; transform: translate3d(2000px,0,0) scaleX(2) }",
  },
  "bounce-out-up": {
    animationName: "uneBounceOutUp",
    css: {
      "animation-name": "uneBounceOutUp",
    },
    keyframes:
      "20% { transform: translate3d(0,-10px,0) scaleY(.985) } 40%,45% { opacity: 1; transform: translate3d(0,20px,0) scaleY(.9) } to { opacity: 0; transform: translate3d(0,-2000px,0) scaleY(3) }",
  },
  "fade-in": {
    animationName: "uneFadeIn",
    css: {
      "animation-name": "uneFadeIn",
    },
    keyframes: "0% { opacity: 0 } to { opacity: 1 }",
  },
  "fade-in-bottom-left": {
    animationName: "uneFadeInBottomLeft",
    css: {
      "animation-name": "uneFadeInBottomLeft",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(-100%,100%,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-bottom-right": {
    animationName: "uneFadeInBottomRight",
    css: {
      "animation-name": "uneFadeInBottomRight",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(100%,100%,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-down": {
    animationName: "uneFadeInDown",
    css: {
      "animation-name": "uneFadeInDown",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(0,-100%,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-down-big": {
    animationName: "uneFadeInDownBig",
    css: {
      "animation-name": "uneFadeInDownBig",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(0,-2000px,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-left": {
    animationName: "uneFadeInLeft",
    css: {
      "animation-name": "uneFadeInLeft",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(-100%,0,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-left-big": {
    animationName: "uneFadeInLeftBig",
    css: {
      "animation-name": "uneFadeInLeftBig",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(-2000px,0,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-right": {
    animationName: "uneFadeInRight",
    css: {
      "animation-name": "uneFadeInRight",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(100%,0,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-right-big": {
    animationName: "uneFadeInRightBig",
    css: {
      "animation-name": "uneFadeInRightBig",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(2000px,0,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-top-left": {
    animationName: "uneFadeInTopLeft",
    css: {
      "animation-name": "uneFadeInTopLeft",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(-100%,-100%,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-top-right": {
    animationName: "uneFadeInTopRight",
    css: {
      "animation-name": "uneFadeInTopRight",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(100%,-100%,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-up": {
    animationName: "uneFadeInUp",
    css: {
      "animation-name": "uneFadeInUp",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(0,100%,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-in-up-big": {
    animationName: "uneFadeInUpBig",
    css: {
      "animation-name": "uneFadeInUpBig",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(0,2000px,0) } to { opacity: 1; transform: translateZ(0) }",
  },
  "fade-out": {
    animationName: "uneFadeOut",
    css: {
      "animation-name": "uneFadeOut",
    },
    keyframes: "0% { opacity: 1 } to { opacity: 0 }",
  },
  "fade-out-bottom-left": {
    animationName: "uneFadeOutBottomLeft",
    css: {
      "animation-name": "uneFadeOutBottomLeft",
    },
    keyframes:
      "0% { opacity: 1; transform: translateZ(0) } to { opacity: 0; transform: translate3d(-100%,100%,0) }",
  },
  "fade-out-bottom-right": {
    animationName: "uneFadeOutBottomRight",
    css: {
      "animation-name": "uneFadeOutBottomRight",
    },
    keyframes:
      "0% { opacity: 1; transform: translateZ(0) } to { opacity: 0; transform: translate3d(100%,100%,0) }",
  },
  "fade-out-down": {
    animationName: "uneFadeOutDown",
    css: {
      "animation-name": "uneFadeOutDown",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(0,100%,0) }",
  },
  "fade-out-down-big": {
    animationName: "uneFadeOutDownBig",
    css: {
      "animation-name": "uneFadeOutDownBig",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(0,2000px,0) }",
  },
  "fade-out-left": {
    animationName: "uneFadeOutLeft",
    css: {
      "animation-name": "uneFadeOutLeft",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(-100%,0,0) }",
  },
  "fade-out-left-big": {
    animationName: "uneFadeOutLeftBig",
    css: {
      "animation-name": "uneFadeOutLeftBig",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(-2000px,0,0) }",
  },
  "fade-out-right": {
    animationName: "uneFadeOutRight",
    css: {
      "animation-name": "uneFadeOutRight",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(100%,0,0) }",
  },
  "fade-out-right-big": {
    animationName: "uneFadeOutRightBig",
    css: {
      "animation-name": "uneFadeOutRightBig",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(2000px,0,0) }",
  },
  "fade-out-top-left": {
    animationName: "uneFadeOutTopLeft",
    css: {
      "animation-name": "uneFadeOutTopLeft",
    },
    keyframes:
      "0% { opacity: 1; transform: translateZ(0) } to { opacity: 0; transform: translate3d(-100%,-100%,0) }",
  },
  "fade-out-top-right": {
    animationName: "uneFadeOutTopRight",
    css: {
      "animation-name": "uneFadeOutTopRight",
    },
    keyframes:
      "0% { opacity: 1; transform: translateZ(0) } to { opacity: 0; transform: translate3d(100%,-100%,0) }",
  },
  "fade-out-up": {
    animationName: "uneFadeOutUp",
    css: {
      "animation-name": "uneFadeOutUp",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(0,-100%,0) }",
  },
  "fade-out-up-big": {
    animationName: "uneFadeOutUpBig",
    css: {
      "animation-name": "uneFadeOutUpBig",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(0,-2000px,0) }",
  },
  flip: flip,
  "flip-in-x": {
    animationName: "uneFlipInX",
    css: {
      "backface-visibility": "visible !important",
      "animation-name": "uneFlipInX",
    },
    keyframes:
      "0% { opacity: 0; transform: perspective(400px) rotateX(90deg) } 0%,40% { animation-timing-function: ease-in } 40% { transform: perspective(400px) rotateX(-20deg) } 60% { opacity: 1; transform: perspective(400px) rotateX(10deg) } 80% { transform: perspective(400px) rotateX(-5deg) } to { transform: perspective(400px) }",
  },
  "flip-in-y": {
    animationName: "uneFlipInY",
    css: {
      "backface-visibility": "visible !important",
      "animation-name": "uneFlipInY",
    },
    keyframes:
      "0% { opacity: 0; transform: perspective(400px) rotateY(90deg) } 0%,40% { animation-timing-function: ease-in } 40% { transform: perspective(400px) rotateY(-20deg) } 60% { opacity: 1; transform: perspective(400px) rotateY(10deg) } 80% { transform: perspective(400px) rotateY(-5deg) } to { transform: perspective(400px) }",
  },
  "flip-out-x": {
    animationName: "uneFlipOutX",
    css: {
      "animation-duration": "calc(var(--une-animated-duration) * 0.75)",
      "animation-name": "uneFlipOutX",
      "backface-visibility": "visible !important",
    },
    keyframes:
      "0% { transform: perspective(400px) } 30% { opacity: 1; transform: perspective(400px) rotateX(-20deg) } to { opacity: 0; transform: perspective(400px) rotateX(90deg) }",
  },
  "flip-out-y": {
    animationName: "uneFlipOutY",
    css: {
      "animation-duration": "calc(var(--une-animated-duration) * 0.75)",
      "backface-visibility": "visible !important",
      "animation-name": "uneFlipOutY",
    },
    keyframes:
      "0% { transform: perspective(400px) } 30% { opacity: 1; transform: perspective(400px) rotateY(-15deg) } to { opacity: 0; transform: perspective(400px) rotateY(90deg) }",
  },
  "light-speed-in-left": {
    animationName: "uneLightSpeedInLeft",
    css: {
      "animation-name": "uneLightSpeedInLeft",
      "animation-timing-function": "ease-out",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(-100%,0,0) skewX(30deg) } 60% { opacity: 1; transform: skewX(-20deg) } 80% { transform: skewX(5deg) } to { transform: translateZ(0) }",
  },
  "light-speed-in-right": {
    animationName: "uneLightSpeedInRight",
    css: {
      "animation-name": "uneLightSpeedInRight",
      "animation-timing-function": "ease-out",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(100%,0,0) skewX(-30deg) } 60% { opacity: 1; transform: skewX(20deg) } 80% { transform: skewX(-5deg) } to { transform: translateZ(0) }",
  },
  "light-speed-out-left": {
    animationName: "uneLightSpeedOutLeft",
    css: {
      "animation-name": "uneLightSpeedOutLeft",
      "animation-timing-function": "ease-in",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(-100%,0,0) skewX(-30deg) }",
  },
  "light-speed-out-right": {
    animationName: "uneLightSpeedOutRight",
    css: {
      "animation-name": "uneLightSpeedOutRight",
      "animation-timing-function": "ease-in",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(100%,0,0) skewX(30deg) }",
  },
  "rotate-in": {
    animationName: "uneRotateIn",
    css: {
      "animation-name": "uneRotateIn",
      "transform-origin": "center",
    },
    keyframes:
      "0% { opacity: 0; transform: rotate(-200deg) } to { opacity: 1; transform: translateZ(0) }",
  },
  "rotate-in-down-left": {
    animationName: "uneRotateInDownLeft",
    css: {
      "animation-name": "uneRotateInDownLeft",
      "transform-origin": "left bottom",
    },
    keyframes:
      "0% { opacity: 0; transform: rotate(-45deg) } to { opacity: 1; transform: translateZ(0) }",
  },
  "rotate-in-down-right": {
    animationName: "uneRotateInDownRight",
    css: {
      "animation-name": "uneRotateInDownRight",
      "transform-origin": "right bottom",
    },
    keyframes:
      "0% { opacity: 0; transform: rotate(45deg) } to { opacity: 1; transform: translateZ(0) }",
  },
  "rotate-in-up-left": {
    animationName: "uneRotateInUpLeft",
    css: {
      "animation-name": "uneRotateInUpLeft",
      "transform-origin": "left bottom",
    },
    keyframes:
      "0% { opacity: 0; transform: rotate(45deg) } to { opacity: 1; transform: translateZ(0) }",
  },
  "rotate-in-up-right": {
    animationName: "uneRotateInUpRight",
    css: {
      "animation-name": "uneRotateInUpRight",
      "transform-origin": "right bottom",
    },
    keyframes:
      "0% { opacity: 0; transform: rotate(-90deg) } to { opacity: 1; transform: translateZ(0) }",
  },
  "rotate-out": {
    animationName: "uneRotateOut",
    css: {
      "animation-name": "uneRotateOut",
      "transform-origin": "center",
    },
    keyframes: "0% { opacity: 1 } to { opacity: 0; transform: rotate(200deg) }",
  },
  "rotate-out-down-left": {
    animationName: "uneRotateOutDownLeft",
    css: {
      "animation-name": "uneRotateOutDownLeft",
      "transform-origin": "left bottom",
    },
    keyframes: "0% { opacity: 1 } to { opacity: 0; transform: rotate(45deg) }",
  },
  "rotate-out-down-right": {
    animationName: "uneRotateOutDownRight",
    css: {
      "animation-name": "uneRotateOutDownRight",
      "transform-origin": "right bottom",
    },
    keyframes: "0% { opacity: 1 } to { opacity: 0; transform: rotate(-45deg) }",
  },
  "rotate-out-up-left": {
    animationName: "uneRotateOutUpLeft",
    css: {
      "animation-name": "uneRotateOutUpLeft",
      "transform-origin": "left bottom",
    },
    keyframes: "0% { opacity: 1 } to { opacity: 0; transform: rotate(-45deg) }",
  },
  "rotate-out-up-right": {
    animationName: "uneRotateOutUpRight",
    css: {
      "animation-name": "uneRotateOutUpRight",
      "transform-origin": "right bottom",
    },
    keyframes: "0% { opacity: 1 } to { opacity: 0; transform: rotate(90deg) }",
  },
  "slide-in-down": {
    animationName: "uneSlideInDown",
    css: {
      "animation-name": "uneSlideInDown",
    },
    keyframes:
      "0% { transform: translate3d(0,-100%,0); visibility: visible } to { transform: translateZ(0) }",
  },
  "slide-in-left": {
    animationName: "uneSlideInLeft",
    css: {
      "animation-name": "uneSlideInLeft",
    },
    keyframes:
      "0% { transform: translate3d(-100%,0,0); visibility: visible } to { transform: translateZ(0) }",
  },
  "slide-in-right": {
    animationName: "uneSlideInRight",
    css: {
      "animation-name": "uneSlideInRight",
    },
    keyframes:
      "0% { transform: translate3d(100%,0,0); visibility: visible } to { transform: translateZ(0) }",
  },
  "slide-in-up": {
    animationName: "uneSlideInUp",
    css: {
      "animation-name": "uneSlideInUp",
    },
    keyframes:
      "0% { transform: translate3d(0,100%,0); visibility: visible } to { transform: translateZ(0) }",
  },
  "slide-out-down": {
    animationName: "uneSlideOutDown",
    css: {
      "animation-name": "uneSlideOutDown",
    },
    keyframes:
      "0% { transform: translateZ(0) } to { transform: translate3d(0,100%,0); visibility: hidden }",
  },
  "slide-out-left": {
    animationName: "uneSlideOutLeft",
    css: {
      "animation-name": "uneSlideOutLeft",
    },
    keyframes:
      "0% { transform: translateZ(0) } to { transform: translate3d(-100%,0,0); visibility: hidden }",
  },
  "slide-out-right": {
    animationName: "uneSlideOutRight",
    css: {
      "animation-name": "uneSlideOutRight",
    },
    keyframes:
      "0% { transform: translateZ(0) } to { transform: translate3d(100%,0,0); visibility: hidden }",
  },
  "slide-out-up": {
    animationName: "uneSlideOutUp",
    css: {
      "animation-name": "uneSlideOutUp",
    },
    keyframes:
      "0% { transform: translateZ(0) } to { transform: translate3d(0,-100%,0); visibility: hidden }",
  },
  hinge: hinge,
  "jack-in-the-box": {
    animationName: "uneJackInTheBox",
    css: {
      "animation-name": "uneJackInTheBox",
    },
    keyframes:
      "0% { opacity: 0; transform: scale(.1) rotate(30deg); transform-origin: center bottom } 50% { transform: rotate(-10deg) } 70% { transform: rotate(3deg) } to { opacity: 1; transform: scale(1) }",
  },
  "roll-in": {
    animationName: "uneRollIn",
    css: {
      "animation-name": "uneRollIn",
    },
    keyframes:
      "0% { opacity: 0; transform: translate3d(-100%,0,0) rotate(-120deg) } to { opacity: 1; transform: translateZ(0) }",
  },
  "roll-out": {
    animationName: "uneRollOut",
    css: {
      "animation-name": "uneRollOut",
    },
    keyframes:
      "0% { opacity: 1 } to { opacity: 0; transform: translate3d(100%,0,0) rotate(120deg) }",
  },
  "zoom-in": {
    animationName: "uneZoomIn",
    css: {
      "animation-name": "uneZoomIn",
    },
    keyframes:
      "0% { opacity: 0; transform: scale3d(.3,.3,.3) } 50% { opacity: 1 }",
  },
  "zoom-in-down": {
    animationName: "uneZoomInDown",
    css: {
      "animation-name": "uneZoomInDown",
    },
    keyframes:
      "0% { animation-timing-function: cubic-bezier(.55,.055,.675,.19); opacity: 0; transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0) } 60% { animation-timing-function: cubic-bezier(.175,.885,.32,1); opacity: 1; transform: scale3d(.475,.475,.475) translate3d(0,60px,0) }",
  },
  "zoom-in-left": {
    animationName: "uneZoomInLeft",
    css: {
      "animation-name": "uneZoomInLeft",
    },
    keyframes:
      "0% { animation-timing-function: cubic-bezier(.55,.055,.675,.19); opacity: 0; transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0) } 60% { animation-timing-function: cubic-bezier(.175,.885,.32,1); opacity: 1; transform: scale3d(.475,.475,.475) translate3d(10px,0,0) }",
  },
  "zoom-in-right": {
    animationName: "uneZoomInRight",
    css: {
      "animation-name": "uneZoomInRight",
    },
    keyframes:
      "0% { animation-timing-function: cubic-bezier(.55,.055,.675,.19); opacity: 0; transform: scale3d(.1,.1,.1) translate3d(1000px,0,0) } 60% { animation-timing-function: cubic-bezier(.175,.885,.32,1); opacity: 1; transform: scale3d(.475,.475,.475) translate3d(-10px,0,0) }",
  },
  "zoom-in-up": {
    animationName: "uneZoomInUp",
    css: {
      "animation-name": "uneZoomInUp",
    },
    keyframes:
      "0% { animation-timing-function: cubic-bezier(.55,.055,.675,.19); opacity: 0; transform: scale3d(.1,.1,.1) translate3d(0,1000px,0) } 60% { animation-timing-function: cubic-bezier(.175,.885,.32,1); opacity: 1; transform: scale3d(.475,.475,.475) translate3d(0,-60px,0) }",
  },
  "zoom-out": {
    animationName: "uneZoomOut",
    css: {
      "animation-name": "uneZoomOut",
    },
    keyframes:
      "0% { opacity: 1 } 50% { transform: scale3d(.3,.3,.3) } 50%,to { opacity: 0 }",
  },
  "zoom-out-down": {
    animationName: "uneZoomOutDown",
    css: {
      "animation-name": "uneZoomOutDown",
      "transform-origin": "center bottom",
    },
    keyframes:
      "40% { animation-timing-function: cubic-bezier(.55,.055,.675,.19); opacity: 1; transform: scale3d(.475,.475,.475) translate3d(0,-60px,0) } to { animation-timing-function: cubic-bezier(.175,.885,.32,1); opacity: 0; transform: scale3d(.1,.1,.1) translate3d(0,2000px,0) }",
  },
  "zoom-out-left": {
    animationName: "uneZoomOutLeft",
    css: {
      "animation-name": "uneZoomOutLeft",
      "transform-origin": "left center",
    },
    keyframes:
      "40% { opacity: 1; transform: scale3d(.475,.475,.475) translate3d(42px,0,0) } to { opacity: 0; transform: scale(.1) translate3d(-2000px,0,0) }",
  },
  "zoom-out-right": {
    animationName: "uneZoomOutRight",
    css: {
      "animation-name": "uneZoomOutRight",
      "transform-origin": "right center",
    },
    keyframes:
      "40% { opacity: 1; transform: scale3d(.475,.475,.475) translate3d(-42px,0,0) } to { opacity: 0; transform: scale(.1) translate3d(2000px,0,0) }",
  },
  "zoom-out-up": {
    animationName: "uneZoomOutUp",
    css: {
      "animation-name": "uneZoomOutUp",
      "transform-origin": "center bottom",
    },
    keyframes:
      "40% { animation-timing-function: cubic-bezier(.55,.055,.675,.19); opacity: 1; transform: scale3d(.475,.475,.475) translate3d(0,60px,0) } to { animation-timing-function: cubic-bezier(.175,.885,.32,1); opacity: 0; transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0) }",
  },
};

function getAnimated() {
  return animatedJSON;
}
const durationShortcuts = {
  faster: 0.5,
  fast: 0.8,
  slow: 2,
  slower: 3,
};
const animatedRules = [
  [
    "animated",
    {
      "--une-animated-duration": "1s",
      "animation-duration": "var(--une-animated-duration)",
      "animation-fill-mode": "both",
    },
  ],
  [
    new RegExp(`^animated-(${Object.keys(animatedJSON).join("|")})$`),
    ([, name]) => {
      const { animationName, css, keyframes } = getAnimated()[name];
      return [`@keyframes ${animationName} { ${keyframes} }`, css];
    },
    {
      autocomplete: [`animated-(${Object.keys(animatedJSON).join("|")})`],
    },
  ],
  [
    /^animated-(infinite|(repeat-(infinite|(\d+(\.\d+)?))))$/,
    ([, , , repeat]) => {
      const isInfinite = !repeat || repeat === "infinite";
      return {
        "animation-iteration-count": isInfinite ? "infinite" : repeat,
      };
    },
    {
      autocomplete: [
        "animated-infinite",
        "animated-repeat-infinite",
        "animated-repeat-<num>",
      ],
    },
  ],
  [
    /^animated-delay-(none|(\d+(\.\d+)?(m?s)?))$/,
    ([, d]) => ({
      "animation-delay": d === "none" ? "0ms" : handler.bracket.cssvar.time(d),
    }),
    {
      autocomplete: ["animated-delay-none", "animated-delay-$duration"],
    },
  ],
  [
    /^animated-(((fast|slow)(?:er)?)|duration-(none|(\d+(\.\d+)?(m?s)?)))/,
    ([_, , shortcut, , v]) => {
      if (shortcut) {
        return {
          "animation-duration": `calc(var(--une-animated-duration) * ${durationShortcuts[shortcut]});`,
        };
      }
      return {
        "animation-duration":
          v === "none" ? "0ms" : handler.bracket.cssvar.time(v),
      };
    },
    {
      autocomplete: [
        `animated-(${Object.keys(durationShortcuts).join("|")})`,
        "animated-duration-none",
        "animated-duration-$duration",
      ],
    },
  ],
];

const extraGroupRules = [
  // (inline-)?(flex|grid)-justify-*
  ...justifies.map(([key, style]) => {
    return [
      insertBefore(key, "(?:inline-)?(?:flex|grid)-"),
      isPlainObject(style) ? () => style : style,
      {
        autocomplete: [
          ...justifies
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `flex-${key2}`),
          ...justifies
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `grid-${key2}`),
          ...justifies
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-flex-${key2}`),
          ...justifies
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-grid-${key2}`),
        ],
      },
    ];
  }),
  // (inline-)?(flex|grid)-order-*
  ...orders.map(([key, style]) => {
    return [
      insertBefore(key, "(?:inline-)?(?:flex|grid)-"),
      isPlainObject(style) ? () => style : style,
      {
        autocomplete: [
          "(flex|grid)-order-<num>",
          "inline-(flex|grid)-order-<num>",
          ...orders
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `flex-${key2}`),
          ...orders
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `grid-${key2}`),
          ...orders
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-flex-${key2}`),
          ...orders
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-grid-${key2}`),
        ],
      },
    ];
  }),
  // (inline-)?(flex|grid)-content-*
  // (inline-)?(flex|grid)-items-*
  // (inline-)?(flex|grid)-self-*
  ...alignments.map(([key, style]) => {
    return [
      insertBefore(key, "(?:inline-)?(?:flex|grid)-"),
      isPlainObject(style) ? () => style : style,
      {
        autocomplete: [
          ...alignments
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `flex-${key2}`),
          ...alignments
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `grid-${key2}`),
          ...alignments
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-flex-${key2}`),
          ...alignments
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-grid-${key2}`),
        ],
      },
    ];
  }),
  // (inline-)?(flex|grid)-place-content-*
  // (inline-)?(flex|grid)-place-items-*
  // (inline-)?(flex|grid)-place-self-*
  ...placements.map(([key, style]) => {
    return [
      insertBefore(key, "(?:inline-)?(?:flex|grid)-"),
      isPlainObject(style) ? () => style : style,
      {
        autocomplete: [
          ...placements
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `flex-${key2}`),
          ...placements
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `grid-${key2}`),
          ...placements
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-flex-${key2}`),
          ...placements
            .filter(([key2]) => isString(key2))
            .map(([key2]) => `inline-grid-${key2}`),
        ],
      },
    ];
  }),
];
function insertBefore(str, insert) {
  if (typeof str === "string") return new RegExp(`^${insert}${str}$`);
  return new RegExp(
    `^${insert}${str.source.slice(
      str.source.startsWith("^") ? 1 : 0,
      str.source.endsWith("$") ? -1 : void 0,
    )}$`,
  );
}

function presetExtra() {
  return {
    name: "unocss-preset-extra",
    rules: [
      // 同时定义宽高
      ...sizeRules,
      // 海拔
      ...elevationRules,
      // animate.css
      ...animatedRules,
      // 额外的分组规则
      ...extraGroupRules,
    ],
  };
}

const unocssConfig = {
  presets: [presetWind3({ prefix: `un-` }), presetExtra()],
  components: false,
  // attributify: {
  //   prefix: `un-`,
  //   prefixedOnly: true,
  // },
  uno: {
    prefix: `un-`,
    // Container などを除外するためPrefixが必要
  },
  extra: true,
  // https://getbootstrap.jp/docs/5.3/customize/css-variables/
  // https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_theme
  theme: {
    breakpoints: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    colors: {
      // Colors
      blue: "var(--bs-blue)",
      "blue-100": "var(--bs-blue-100)",
      "blue-200": "var(--bs-blue-200)",
      "blue-300": "var(--bs-blue-300)",
      "blue-400": "var(--bs-blue-400)",
      "blue-500": "var(--bs-blue-500)",
      "blue-600": "var(--bs-blue-600)",
      "blue-700": "var(--bs-blue-700)",
      "blue-800": "var(--bs-blue-800)",
      "blue-900": "var(--bs-blue-900)",
      "contrast-blue": "var(--bs-contrast-blue)",
      "contrast-blue-100": "var(--bs-contrast-blue-100)",
      "contrast-blue-200": "var(--bs-contrast-blue-200)",
      "contrast-blue-300": "var(--bs-contrast-blue-300)",
      "contrast-blue-400": "var(--bs-contrast-blue-400)",
      "contrast-blue-500": "var(--bs-contrast-blue-500)",
      "contrast-blue-600": "var(--bs-contrast-blue-600)",
      "contrast-blue-700": "var(--bs-contrast-blue-700)",
      "contrast-blue-800": "var(--bs-contrast-blue-800)",
      "contrast-blue-900": "var(--bs-contrast-blue-900)",
      indigo: "var(--bs-indigo)",
      "indigo-100": "var(--bs-indigo-100)",
      "indigo-200": "var(--bs-indigo-200)",
      "indigo-300": "var(--bs-indigo-300)",
      "indigo-400": "var(--bs-indigo-400)",
      "indigo-500": "var(--bs-indigo-500)",
      "indigo-600": "var(--bs-indigo-600)",
      "indigo-700": "var(--bs-indigo-700)",
      "indigo-800": "var(--bs-indigo-800)",
      "indigo-900": "var(--bs-indigo-900)",
      "contrast-indigo": "var(--bs-contrast-indigo)",
      "contrast-indigo-100": "var(--bs-contrast-indigo-100)",
      "contrast-indigo-200": "var(--bs-contrast-indigo-200)",
      "contrast-indigo-300": "var(--bs-contrast-indigo-300)",
      "contrast-indigo-400": "var(--bs-contrast-indigo-400)",
      "contrast-indigo-500": "var(--bs-contrast-indigo-500)",
      "contrast-indigo-600": "var(--bs-contrast-indigo-600)",
      "contrast-indigo-700": "var(--bs-contrast-indigo-700)",
      "contrast-indigo-800": "var(--bs-contrast-indigo-800)",
      "contrast-indigo-900": "var(--bs-contrast-indigo-900)",
      purple: "var(--bs-purple)",
      "purple-100": "var(--bs-purple-100)",
      "purple-200": "var(--bs-purple-200)",
      "purple-300": "var(--bs-purple-300)",
      "purple-400": "var(--bs-purple-400)",
      "purple-500": "var(--bs-purple-500)",
      "purple-600": "var(--bs-purple-600)",
      "purple-700": "var(--bs-purple-700)",
      "purple-800": "var(--bs-purple-800)",
      "purple-900": "var(--bs-purple-900)",
      "contrast-purple": "var(--bs-contrast-purple)",
      "contrast-purple-100": "var(--bs-contrast-purple-100)",
      "contrast-purple-200": "var(--bs-contrast-purple-200)",
      "contrast-purple-300": "var(--bs-contrast-purple-300)",
      "contrast-purple-400": "var(--bs-contrast-purple-400)",
      "contrast-purple-500": "var(--bs-contrast-purple-500)",
      "contrast-purple-600": "var(--bs-contrast-purple-600)",
      "contrast-purple-700": "var(--bs-contrast-purple-700)",
      "contrast-purple-800": "var(--bs-contrast-purple-800)",
      "contrast-purple-900": "var(--bs-contrast-purple-900)",
      pink: "var(--bs-pink)",
      "pink-100": "var(--bs-pink-100)",
      "pink-200": "var(--bs-pink-200)",
      "pink-300": "var(--bs-pink-300)",
      "pink-400": "var(--bs-pink-400)",
      "pink-500": "var(--bs-pink-500)",
      "pink-600": "var(--bs-pink-600)",
      "pink-700": "var(--bs-pink-700)",
      "pink-800": "var(--bs-pink-800)",
      "pink-900": "var(--bs-pink-900)",
      "contrast-pink": "var(--bs-contrast-pink)",
      "contrast-pink-100": "var(--bs-contrast-pink-100)",
      "contrast-pink-200": "var(--bs-contrast-pink-200)",
      "contrast-pink-300": "var(--bs-contrast-pink-300)",
      "contrast-pink-400": "var(--bs-contrast-pink-400)",
      "contrast-pink-500": "var(--bs-contrast-pink-500)",
      "contrast-pink-600": "var(--bs-contrast-pink-600)",
      "contrast-pink-700": "var(--bs-contrast-pink-700)",
      "contrast-pink-800": "var(--bs-contrast-pink-800)",
      "contrast-pink-900": "var(--bs-contrast-pink-900)",
      red: "var(--bs-red)",
      "red-100": "var(--bs-red-100)",
      "red-200": "var(--bs-red-200)",
      "red-300": "var(--bs-red-300)",
      "red-400": "var(--bs-red-400)",
      "red-500": "var(--bs-red-500)",
      "red-600": "var(--bs-red-600)",
      "red-700": "var(--bs-red-700)",
      "red-800": "var(--bs-red-800)",
      "red-900": "var(--bs-red-900)",
      "contrast-red": "var(--bs-contrast-red)",
      "contrast-red-100": "var(--bs-contrast-red-100)",
      "contrast-red-200": "var(--bs-contrast-red-200)",
      "contrast-red-300": "var(--bs-contrast-red-300)",
      "contrast-red-400": "var(--bs-contrast-red-400)",
      "contrast-red-500": "var(--bs-contrast-red-500)",
      "contrast-red-600": "var(--bs-contrast-red-600)",
      "contrast-red-700": "var(--bs-contrast-red-700)",
      "contrast-red-800": "var(--bs-contrast-red-800)",
      "contrast-red-900": "var(--bs-contrast-red-900)",
      orange: "var(--bs-orange)",
      "orange-100": "var(--bs-orange-100)",
      "orange-200": "var(--bs-orange-200)",
      "orange-300": "var(--bs-orange-300)",
      "orange-400": "var(--bs-orange-400)",
      "orange-500": "var(--bs-orange-500)",
      "orange-600": "var(--bs-orange-600)",
      "orange-700": "var(--bs-orange-700)",
      "orange-800": "var(--bs-orange-800)",
      "orange-900": "var(--bs-orange-900)",
      "contrast-orange": "var(--bs-contrast-orange)",
      "contrast-orange-100": "var(--bs-contrast-orange-100)",
      "contrast-orange-200": "var(--bs-contrast-orange-200)",
      "contrast-orange-300": "var(--bs-contrast-orange-300)",
      "contrast-orange-400": "var(--bs-contrast-orange-400)",
      "contrast-orange-500": "var(--bs-contrast-orange-500)",
      "contrast-orange-600": "var(--bs-contrast-orange-600)",
      "contrast-orange-700": "var(--bs-contrast-orange-700)",
      "contrast-orange-800": "var(--bs-contrast-orange-800)",
      "contrast-orange-900": "var(--bs-contrast-orange-900)",
      green: "var(--bs-green)",
      "green-100": "var(--bs-green-100)",
      "green-200": "var(--bs-green-200)",
      "green-300": "var(--bs-green-300)",
      "green-400": "var(--bs-green-400)",
      "green-500": "var(--bs-green-500)",
      "green-600": "var(--bs-green-600)",
      "green-700": "var(--bs-green-700)",
      "green-800": "var(--bs-green-800)",
      "green-900": "var(--bs-green-900)",
      "contrast-green": "var(--bs-contrast-green)",
      "contrast-green-100": "var(--bs-contrast-green-100)",
      "contrast-green-200": "var(--bs-contrast-green-200)",
      "contrast-green-300": "var(--bs-contrast-green-300)",
      "contrast-green-400": "var(--bs-contrast-green-400)",
      "contrast-green-500": "var(--bs-contrast-green-500)",
      "contrast-green-600": "var(--bs-contrast-green-600)",
      "contrast-green-700": "var(--bs-contrast-green-700)",
      "contrast-green-800": "var(--bs-contrast-green-800)",
      "contrast-green-900": "var(--bs-contrast-green-900)",
      yellow: "var(--bs-yellow)",
      "yellow-100": "var(--bs-yellow-100)",
      "yellow-200": "var(--bs-yellow-200)",
      "yellow-300": "var(--bs-yellow-300)",
      "yellow-400": "var(--bs-yellow-400)",
      "yellow-500": "var(--bs-yellow-500)",
      "yellow-600": "var(--bs-yellow-600)",
      "yellow-700": "var(--bs-yellow-700)",
      "yellow-800": "var(--bs-yellow-800)",
      "yellow-900": "var(--bs-yellow-900)",
      "contrast-yellow": "var(--bs-contrast-yellow)",
      "contrast-yellow-100": "var(--bs-contrast-yellow-100)",
      "contrast-yellow-200": "var(--bs-contrast-yellow-200)",
      "contrast-yellow-300": "var(--bs-contrast-yellow-300)",
      "contrast-yellow-400": "var(--bs-contrast-yellow-400)",
      "contrast-yellow-500": "var(--bs-contrast-yellow-500)",
      "contrast-yellow-600": "var(--bs-contrast-yellow-600)",
      "contrast-yellow-700": "var(--bs-contrast-yellow-700)",
      "contrast-yellow-800": "var(--bs-contrast-yellow-800)",
      "contrast-yellow-900": "var(--bs-contrast-yellow-900)",
      teal: "var(--bs-teal)",
      "teal-100": "var(--bs-teal-100)",
      "teal-200": "var(--bs-teal-200)",
      "teal-300": "var(--bs-teal-300)",
      "teal-400": "var(--bs-teal-400)",
      "teal-500": "var(--bs-teal-500)",
      "teal-600": "var(--bs-teal-600)",
      "teal-700": "var(--bs-teal-700)",
      "teal-800": "var(--bs-teal-800)",
      "teal-900": "var(--bs-teal-900)",
      "contrast-teal": "var(--bs-contrast-teal)",
      "contrast-teal-100": "var(--bs-contrast-teal-100)",
      "contrast-teal-200": "var(--bs-contrast-teal-200)",
      "contrast-teal-300": "var(--bs-contrast-teal-300)",
      "contrast-teal-400": "var(--bs-contrast-teal-400)",
      "contrast-teal-500": "var(--bs-contrast-teal-500)",
      "contrast-teal-600": "var(--bs-contrast-teal-600)",
      "contrast-teal-700": "var(--bs-contrast-teal-700)",
      "contrast-teal-800": "var(--bs-contrast-teal-800)",
      "contrast-teal-900": "var(--bs-contrast-teal-900)",
      cyan: "var(--bs-cyan)",
      "cyan-100": "var(--bs-cyan-100)",
      "cyan-200": "var(--bs-cyan-200)",
      "cyan-300": "var(--bs-cyan-300)",
      "cyan-400": "var(--bs-cyan-400)",
      "cyan-500": "var(--bs-cyan-500)",
      "cyan-600": "var(--bs-cyan-600)",
      "cyan-700": "var(--bs-cyan-700)",
      "cyan-800": "var(--bs-cyan-800)",
      "cyan-900": "var(--bs-cyan-900)",
      "contrast-cyan": "var(--bs-contrast-cyan)",
      "contrast-cyan-100": "var(--bs-contrast-cyan-100)",
      "contrast-cyan-200": "var(--bs-contrast-cyan-200)",
      "contrast-cyan-300": "var(--bs-contrast-cyan-300)",
      "contrast-cyan-400": "var(--bs-contrast-cyan-400)",
      "contrast-cyan-500": "var(--bs-contrast-cyan-500)",
      "contrast-cyan-600": "var(--bs-contrast-cyan-600)",
      "contrast-cyan-700": "var(--bs-contrast-cyan-700)",
      "contrast-cyan-800": "var(--bs-contrast-cyan-800)",
      "contrast-cyan-900": "var(--bs-contrast-cyan-900)",
      "gray-dark": "var(--bs-gray-dark)",
      gray: "var(--bs-gray)",
      "gray-100": "var(--bs-gray-100)",
      "gray-200": "var(--bs-gray-200)",
      "gray-300": "var(--bs-gray-300)",
      "gray-400": "var(--bs-gray-400)",
      "gray-500": "var(--bs-gray-500)",
      "gray-600": "var(--bs-gray-600)",
      "gray-700": "var(--bs-gray-700)",
      "gray-800": "var(--bs-gray-800)",
      "gray-900": "var(--bs-gray-900)",
      "gray-light": "var(--bs-gray-300)",
      // Theme
      primary: "var(--bs-primary)",
      "primary-text-emphasis": "var(--bs-primary-text-emphasis)",
      "primary-border-subtle": "var(--bs-primary-border-subtle)",
      "primary-bg-subtle": "var(--bs-primary-bg-subtle)",
      "contrast-primary": "var(--bs-contrast-primary)",
      "contrast-primary-subtle": "var(--bs-contrast-primary-subtle)",
      secondary: "var(--bs-secondary)",
      "secondary-text-emphasis": "var(--bs-secondary-text-emphasis)",
      "secondary-border-subtle": "var(--bs-secondary-border-subtle)",
      "secondary-bg-subtle": "var(--bs-secondary-bg-subtle)",
      "contrast-secondary": "var(--bs-contrast-primary)",
      "contrast-secondary-subtle": "var(--bs-contrast-secondary-subtle)",
      success: "var(--bs-success)",
      "success-text-emphasis": "var(--bs-success-text-emphasis)",
      "success-border-subtle": "var(--bs-success-border-subtle)",
      "success-bg-subtle": "var(--bs-success-bg-subtle)",
      "contrast-success": "var(--bs-contrast-success)",
      "contrast-success-subtle": "var(--bs-contrast-success-subtle)",
      info: "var(--bs-info)",
      "info-text-emphasis": "var(--bs-info-text-emphasis)",
      "info-border-subtle": "var(--bs-info-border-subtle)",
      "info-bg-subtle": "var(--bs-info-bg-subtle)",
      "contrast-info": "var(--bs-contrast-info)",
      "contrast-info-subtle": "var(--bs-contrast-info-subtle)",
      warning: "var(--bs-warning)",
      "warning-text-emphasis": "var(--bs-warning-text-emphasis)",
      "warning-border-subtle": "var(--bs-warning-border-subtle)",
      "warning-bg-subtle": "var(--bs-warning-bg-subtle)",
      "contrast-warning": "var(--bs-contrast-warning)",
      "contrast-warning-subtle": "var(--bs-contrast-warning-subtle)",
      danger: "var(--bs-danger)",
      "danger-text-emphasis": "var(--bs-danger-text-emphasis)",
      "danger-border-subtle": "var(--bs-danger-border-subtle)",
      "danger-bg-subtle": "var(--bs-danger-bg-subtle)",
      "contrast-danger": "var(--bs-contrast-danger)",
      "contrast-danger-subtle": "var(--bs-contrast-danger-subtle)",
      //
      light: "var(--bs-light)",
      "light-text-emphasis": "var(--bs-light-text-emphasis)",
      "light-border-subtle": "var(--bs-light-border-subtle)",
      "light-bg-subtle": "var(--bs-light-bg-subtle)",
      "contrast-light": "var(--bs-contrast-light)",
      "contrast-light-subtle": "var(--bs-contrast-light-subtle)",
      dark: "var(--bs-dark)",
      "dark-text-emphasis": "var(--bs-dark-text-emphasis)",
      "dark-border-subtle": "var(--bs-dark-border-subtle)",
      "dark-bg-subtle": "var(--bs-dark-bg-subtle)",
      "contrast-dark": "var(--bs-contrast-dark)",
      "contrast-dark-subtle": "var(--bs-contrast-dark-subtle)",
      //
      "body-color": "var(--bs-body-color)",
      "body-bg": "var(--bs-body-bg)",
      "emphasis-color": "var(--bs-contrast-color)",
      "secondary-color": "var(--bs- secondary - color)",
      "secondary-bg": "var(--bs-secondary-bg)",
      "tertiary-color": "var(--bs-tertiary-color)",
      "tertiary-bg": "var(--bs-tertiary-bg)",
      "heading-color": "var(--bs-heading-color)",
      "link-color": "var(--bs-link-color)",
      "link-hover-color": "var(--bs-link-hover-color)",
      "code-color": "var(--bs-code-color)",
      "highlight-bg": "var(--bs-highlight-bg)",
      "border-color": "var(--bs-border-color)",
      "form-valid-color": "var(--bs-form-valid-color)",
      "form-invalid-color": "var(--bs-form-invalid-color)",
      "form-invalid-border-color": "var(--bs-form-invalid-border-color)",
    },
    fontFamily: {
      sans: "var(--bs-font-sans)",
      serif: "var(--bs-font-sans-serif)",
    },
    borderRadius: {
      DEFAULT: "var(--bs-border-radius)",
      none: "0",
      sm: "var(--bs-border-radius-sm)",
      md: "var(--bs-border-radius)",
      lg: "var(--bs-border-radius-lg)",
      xl: "var(--bs-border-radius-xl)",
      "2xl": "var(--bs-border-radius-xxl)",
    },
    spacing: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "1.5rem",
      5: "3rem",
      6: "4.5rem",
      7: "6rem",
      8: "7.5rem",
      9: "9rem",
      10: "12rem",
    },
  },
  shortcuts: [
    // dynamic shortcuts
    // [/^un-btn-(.*)$/, ([, c]: [any, string]) => `un-bg-${c} un-text-contrast-${c} `],
  ],
};
const modules = {
  icon: {
    module: "@nuxt/icon",
    options: {
      // size: "1em",
      class: "b-icon",
      // mode: 'svg' 2024/7/12 初回レンダリング時に表示されない
    },
  },
  image: {
    module: "@nuxt/image",
    options: {
      quality: 80,
      format: ["webp"],
      screens: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
  },
  vueuse: {
    module: "@vueuse/nuxt",
    options: {
      ssrHandlers: true,
      autoImports: true,
    },
  },
  fonts: {
    module: "@nuxt/fonts",
  },
  sitemap: {
    module: "@nuxtjs/sitemap",
  },
  robots: {
    // 問題が発生する場合はコメントアウトして対応する
    module: "@nuxtjs/robots",
  },
  leaflet: {
    module: "@nuxtjs/leaflet",
  },
  mdc: {
    module: "@nuxtjs/mdc",
  },
  unocss: {
    module: "@unocss/nuxt",
    options: unocssConfig,
  },
  aos: {
    module: "nuxt-aos",
  },
  // siteConfig: {
  //  module: 'nuxt-site-config',
  // },
  // ogImage: { // Deploy でエラー
  //  module: 'nuxt-og-image',
  // },
  // schemaOrg: { // Deploy でエラー
  //  module: 'nuxt-schema-org',
  // },
};

const defaultOptions = {
  scss: true,
  bootstrap: {
    prefix: ["", "B"],
    presets: {
      "button-color": [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link",
        "outline-primary",
        "outline-secondary",
        "outline-success",
        "outline-danger",
        "outline-warning",
        "outline-info",
        "outline-light",
        "outline-dark",
      ],
      "alert-color": [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
      "background-color": [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "primary-subtle",
        "secondary-subtle",
        "success-subtle",
        "danger-subtle",
        "warning-subtle",
        "info-subtle",
        "light",
        "dark",
        "light-subtle",
        "dark-subtle",
        "body-secondary",
        "body-tertiary",
        "body",
        "black",
        "white",
        "transparent",
      ],
      "text-color": [
        "primary",
        "primary-emphasis",
        "secondary",
        "secondary-emphasis",
        "success",
        "success-emphasis",
        "danger",
        "danger-emphasis",
        "warning",
        "warning-emphasis",
        "info",
        "info-emphasis",
        "light",
        "light-emphasis",
        "dark",
        "dark-emphasis",
        "body",
        "body-emphasis",
        "body-secondary",
        "body-tertiary",
        "black",
        "white",
        "black-50",
        "white-50",
      ],
      "border-color": [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "primary-subtle",
        "secondary-subtle",
        "success-subtle",
        "danger-subtle",
        "warning-subtle",
        "info-subtle",
        "light",
        "dark",
        "light-subtle",
        "dark-subtle",
        "black",
        "white",
      ],
      "text-bg-color": [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
      "link-color": [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "body-emphasis",
      ],
    },
  },
  html: {
    prefix: "B",
  },
  icon: {
    prefix: "B",
  },
  extend: {
    prefix: ["", "B"],
  },
  spec: {
    prefix: ["", "B"],
  },
  unocss: {
    prefix: "un",
  },
  image: true,
  fonts: true,
  sitemap: true,
  robots: true,
  shiki: true,
  leaflet: true,
  mdc: true,
  tiptap: true,
  vueuse: {
    prefix: "",
  },
  pwa: true,
  aos: true,
  echarts: true,
  // siteConfig: true,
  ogImage: true,
  schemaOrg: true,
  dynamicRoute: {
    defaults: {
      lang: "en",
    },
  },
  swiper: {
    prefix: "",
  },
  integration: {
    prefix: "",
    protocol: {
      "local-storage": {
        type: "local",
      },
      "session-storage": {
        type: "session",
      },
      state: {
        type: "state",
      },
      api: {
        type: "fetch",
        prefix: "/api/",
        lazy: false,
        // set: false,
        sync: {
          method: "put",
          delay: 500,
          maxWait: 1e3,
        },
      },
      query: {
        type: "query",
      },
      path: {
        type: "path",
      },
      hash: {
        type: "hash",
      },
      params: {
        type: "params",
      },
      route: {
        type: "route",
      },
      "seo-meta": {
        type: "seoMeta",
      },
      helper: {
        type: "helper",
      },
      "app-config": {
        type: "appConfig",
      },
      "dom-attr": {
        type: "domAttr",
      },
      // 'localization': {
      //  type: 'localization',
      // },
    },
    viewState: true,
    actionState: {
      type: ["fetch", "helper", "api-fetch", "api-fetch-sync"],
    },
  },
};

const module = defineNuxtModule({
  meta: {
    name: "use-bootstrap",
    configKey: "usebootstrap",
    compatibility: {
      nuxt: ">=4.3.1",
      bridge: false,
    },
  },

  defaults: defaultOptions,

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // runtimeConfig
    nuxt.options.runtimeConfig.public.usebootstrap = defu(
      nuxt.options.runtimeConfig.public.usebootstrap,
      options,
    );

    if (options.scss) {
      nuxt.options.css ||= [];
      nuxt.options.css.unshift("@avion-block/usebootstrap/scss/usebootstrap");
    }

    // site config
    await installNuxtSiteConfig();

    nuxt.options.modules ||= [];

    forOwn(modules, (value, key) => {
      const opt = get(options, key);
      if (!opt) return;

      const modName = value.module;

      const entry =
        value.options !== undefined ? [modName, value.options] : modName;

      const exists = nuxt.options.modules.some((m) => {
        if (Array.isArray(m)) return m[0] === modName;
        return m === modName;
      });

      if (!exists) nuxt.options.modules.push(entry);
    });

    // components
    [
      "bootstrap",
      "html",
      "icon",
      "extend",
      "integration",
      "spec",
      "swiper",
      "vueuse",
    ].forEach((category) => {
      const components = selectComponents(category);

      forOwn(components, (value, key) => {
        const option = get(options, category);
        if (!option) return;

        const prefixes = castArray(option.prefix);

        prefixes.forEach((prefix) => {
          // alias -> lookup from registry
          if (value.alias) {
            const item = getComponent(value.alias);
            if (item?.path) {
              addComponent({
                name: prefix ? `${prefix}-${key}` : key,
                filePath: resolver.resolve(item.path),
              });
            }
            return;
          }

          // direct path
          if (value.path) {
            if (value.export) {
              addComponent({
                name: prefix ? `${prefix}-${key}` : key,
                filePath: value.path,
                export: value.export,
                mode: value.mode,
              });
            } else {
              addComponent({
                name: prefix ? `${prefix}-${key}` : key,
                filePath: resolver.resolve(value.path),
              });
            }
          }
        });
      });
    });

    // plugins
    ["bootstrap", "static", "vueuse", "shiki"].forEach((category) => {
      const items = selectPlugins(category);

      items.forEach((p) => {
        const opt = get(options, category);
        if (opt && p.path) addPlugin(resolver.resolve(p.path));
      });
    });

    // composables
    addImportsDir(resolver.resolve("runtime/composables/public"));
  },
});

export { module as default };
