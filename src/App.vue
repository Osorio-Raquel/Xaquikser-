<template>
  <v-app class="bg-black">
    <!-- AppBar -->
    <v-app-bar color="#111111">
      <div class="chip">
        <svg
          class="microchip"
          viewBox="0 0 128 128"
          width="128px"
          height="128px"
          role="img"
          aria-label="A square pops in emitting waves and lines, and sparks run through the lines"
        >
          <symbol id="dot-1">
            <circle r="3" cx="3" cy="38" />
          </symbol>
          <symbol id="dot-2">
            <circle r="3" cx="3" cy="54" />
          </symbol>
          <symbol id="dot-3">
            <circle r="3" cx="3" cy="70" />
          </symbol>
          <symbol id="dot-4">
            <circle r="3" cx="3" cy="3" />
          </symbol>
          <symbol id="dot-5">
            <circle r="3" cx="20" cy="3" />
          </symbol>
          <symbol id="dot-6">
            <circle r="3" cx="3" cy="30" />
          </symbol>
          <symbol id="dot-7">
            <circle r="3" cx="37" cy="3" />
          </symbol>
          <symbol id="dot-8">
            <circle r="3" cx="54" cy="3" />
          </symbol>
          <symbol id="dot-9">
            <circle r="3" cx="71" cy="3" />
          </symbol>
          <symbol id="line-1">
            <polyline points="12 54,12 46,3 46,3 38" stroke-dasharray="42 42" />
          </symbol>
          <symbol id="line-2">
            <polyline points="29 54,3 54" stroke-dasharray="42 42" />
          </symbol>
          <symbol id="line-3">
            <polyline points="12 54,12 62,3 62,3 70" stroke-dasharray="42 42" />
          </symbol>
          <symbol id="line-4">
            <polyline points="28 20,28 12,20 12,20 3" stroke-dasharray="60 60" />
          </symbol>
          <symbol id="line-5">
            <polyline points="37 29,37 20,3 20,3 3" stroke-dasharray="60 60" />
          </symbol>
          <symbol id="line-6">
            <polyline points="15 20,15 30,3 30" stroke-dasharray="60 60" />
          </symbol>
          <symbol id="line-7">
            <polyline points="54 12,37 12,37 3" stroke-dasharray="43 43" />
          </symbol>
          <symbol id="line-8">
            <polyline points="54 29,54 3" stroke-dasharray="43 43" />
          </symbol>
          <symbol id="line-9">
            <polyline points="54 12,71 12,71 3" stroke-dasharray="43 43" />
          </symbol>
          <symbol id="spark-1">
            <polyline points="12 54,12 46,3 46,3 38" stroke-dasharray="15 69" />
          </symbol>
          <symbol id="spark-2">
            <polyline points="29 54,3 54" stroke-dasharray="15 69" />
          </symbol>
          <symbol id="spark-3">
            <polyline points="12 54,12 62,3 62,3 70" stroke-dasharray="15 69" />
          </symbol>
          <symbol id="spark-4">
            <polyline points="28 20,28 12,20 12,20 3" stroke-dasharray="15 105" />
          </symbol>
          <symbol id="spark-5">
            <polyline points="37 29,37 20,3 20,3 3" stroke-dasharray="15 105" />
          </symbol>
          <symbol id="spark-6">
            <polyline points="15 20,15 30,3 30" stroke-dasharray="15 105" />
          </symbol>
          <symbol id="spark-7">
            <polyline points="54 12,37 12,37 3" stroke-dasharray="15 71" />
          </symbol>
          <symbol id="spark-8">
            <polyline points="54 29,54 3" stroke-dasharray="15 71" />
          </symbol>
          <symbol id="spark-9">
            <polyline points="54 12,71 12,71 3" stroke-dasharray="15 71" />
          </symbol>
          <symbol id="wave">
            <rect x="3" y="3" rx="2.5" ry="2.5" width="44" height="44" />
          </symbol>
          <g transform="translate(10,10)">
            <g class="microchip__lines" stroke-linecap="round" stroke-linejoin="round">
              <g>
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--1" href="#line-1" />
                  <use class="microchip__spark microchip__spark--1" href="#spark-1" />
                  <use class="microchip__line microchip__line--2" href="#line-2" />
                  <use class="microchip__spark microchip__spark--2" href="#spark-2" />
                  <use class="microchip__line microchip__line--3" href="#line-3" />
                  <use class="microchip__spark microchip__spark--3" href="#spark-3" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--1" href="#dot-1" />
                  <use class="microchip__dot microchip__dot--2" href="#dot-2" />
                  <use class="microchip__dot microchip__dot--3" href="#dot-3" />
                </g>
              </g>
              <g>
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--4" href="#line-4" />
                  <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                  <use class="microchip__line microchip__line--5" href="#line-5" />
                  <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                  <use class="microchip__line microchip__line--6" href="#line-6" />
                  <use class="microchip__spark microchip__spark--6" href="#spark-6" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                  <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                  <use class="microchip__dot microchip__dot--6" href="#dot-6" />
                </g>
              </g>
              <g>
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--7" href="#line-7" />
                  <use class="microchip__spark microchip__spark--7" href="#spark-7" />
                  <use class="microchip__line microchip__line--8" href="#line-8" />
                  <use class="microchip__spark microchip__spark--8" href="#spark-8" />
                  <use class="microchip__line microchip__line--9" href="#line-9" />
                  <use class="microchip__spark microchip__spark--9" href="#spark-9" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--7" href="#dot-7" />
                  <use class="microchip__dot microchip__dot--8" href="#dot-8" />
                  <use class="microchip__dot microchip__dot--9" href="#dot-9" />
                </g>
              </g>
              <g transform="translate(108,0) scale(-1,1)">
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--4" href="#line-4" />
                  <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                  <use class="microchip__line microchip__line--5" href="#line-5" />
                  <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                  <use class="microchip__line microchip__line--6" href="#line-6" />
                  <use class="microchip__spark microchip__spark--6" href="#spark-6" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                  <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                  <use class="microchip__dot microchip__dot--6" href="#dot-6" />
                </g>
              </g>
              <g transform="translate(108,0) scale(-1,1)">
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--1" href="#line-1" />
                  <use class="microchip__spark microchip__spark--1" href="#spark-1" />
                  <use class="microchip__line microchip__line--2" href="#line-2" />
                  <use class="microchip__spark microchip__spark--2" href="#spark-2" />
                  <use class="microchip__line microchip__line--3" href="#line-3" />
                  <use class="microchip__spark microchip__spark--3" href="#spark-3" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--1" href="#dot-1" />
                  <use class="microchip__dot microchip__dot--2" href="#dot-2" />
                  <use class="microchip__dot microchip__dot--3" href="#dot-3" />
                </g>
              </g>
              <g transform="translate(108,108) scale(-1,-1)">
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--4" href="#line-4" />
                  <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                  <use class="microchip__line microchip__line--5" href="#line-5" />
                  <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                  <use class="microchip__line microchip__line--6" href="#line-6" />
                  <use class="microchip__spark microchip__spark--6" href="#spark-6" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                  <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                  <use class="microchip__dot microchip__dot--6" href="#dot-6" />
                </g>
              </g>
              <g transform="translate(0,108) scale(1,-1)">
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--7" href="#line-7" />
                  <use class="microchip__spark microchip__spark--7" href="#spark-7" />
                  <use class="microchip__line microchip__line--8" href="#line-8" />
                  <use class="microchip__spark microchip__spark--8" href="#spark-8" />
                  <use class="microchip__line microchip__line--9" href="#line-9" />
                  <use class="microchip__spark microchip__spark--9" href="#spark-9" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--7" href="#dot-7" />
                  <use class="microchip__dot microchip__dot--8" href="#dot-8" />
                  <use class="microchip__dot microchip__dot--9" href="#dot-9" />
                </g>
              </g>
              <g transform="translate(0,108) scale(1,-1)">
                <g fill="none" stroke="currentcolor">
                  <use class="microchip__line microchip__line--4" href="#line-4" />
                  <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                  <use class="microchip__line microchip__line--5" href="#line-5" />
                  <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                  <use class="microchip__line microchip__line--6" href="#line-6" />
                  <use class="microchip__spark microchip__spark--6" href="#spark-6" />
                </g>
                <g fill="currentcolor">
                  <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                  <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                  <use class="microchip__dot microchip__dot--6" href="#dot-6" />
                </g>
              </g>
            </g>
            <g transform="translate(29,29)">
              <g class="microchip__center">
                <g fill="none" stroke="currentcolor" stroke-width="6">
                  <use class="microchip__wave microchip__wave--1" href="#wave" />
                  <use class="microchip__wave microchip__wave--2" href="#wave" />
                </g>
                <rect
                  class="microchip__core"
                  fill="currentcolor"
                  rx="5"
                  ry="5"
                  width="50"
                  height="50"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <v-toolbar-title class="font-logo text-xl text-gold">XaquiKserita</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs bg-color="#222222" class="rounded-xl px-2" slider-color="transparent">
        <v-tab
          v-for="t in tabs"
          :key="t.label"
          class="text-gold text-capitalize hover-tab"
          @click="goToRoute(t.path)"
        >
          {{ t.label }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Contenido dinámico por ruta -->
    <v-main class="bg-black text-white">
      <v-container class="mt-10">
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="#111111" class="text-center text-gold font-body">
      <v-col>&copy; 2025 XaquiKserita · Proyecto Análisis de Algoritmos WORKSHOP 2025</v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const tabs = [
  { label: 'Inicio', path: '/' },
  { label: 'Algoritmo', path: '/algoritmo' },
  { label: 'Lugares de interes', path: '/lugares' },
]

function goToRoute(path) {
  router.push(path)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caviar+Dreams&display=swap');

.font-logo {
  font-family: 'Caviar Dreams', sans-serif;
  font-weight: 600;
}

.font-body {
  font-family: 'Caviar Dreams', sans-serif;
}

.hover-tab {
  transition: all 0.3s ease;
}

.hover-tab:hover {
  background-color: #333333 !important;
  border-radius: 60px;
  transform: scale(1.05);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

.text-gold {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: xx-large;
  color: #55ccf0;
  background: linear-gradient(90deg, #496fc2, #ffffff, #55ccf0);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 9s linear infinite;
}

@keyframes shine {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}

.bg-black {
  background-color: #000000 !important;
}
</style>

<style scoped lang="scss">
@use 'sass:list';

// timing functions
$ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
$linear: linear;
$step: steps(1);

// main styles
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--primary9);
  color: var(--primary1);
  display: flex;
  font: 1em/1.5 sans-serif;
  height: 10vh;
  transition:
    background-color var(--trans-dur),
    color var(--trans-dur);
}
.microchip {
  display: block;
  margin: auto;
  width: 4em;
  height: auto;

  &__center,
  &__dot,
  &__line,
  &__lines,
  &__spark,
  &__wave {
    animation: {
      duration: 5s;
      timing-function: $ease-in-out-cubic;
      iteration-count: infinite;
      // duration: 100s;
      // delay: 0s;
      // play-state: paused;
    }
  }
  &__core,
  &__dot {
    fill: var(--primary7);
    transition: fill var(--trans-dur);
  }
  &__center,
  &__wave {
    transform-origin: 25px 25px;
  }
  &__center {
    animation-name: center-scale;
  }

  $dot-origins: (3 38) (3 54) (3 70) (3 3) (20 3) (3 30) (37 3) (54 3) (71 3);
  $lines: 9;
  $sparks: 9;
  $waves: 2;

  &__dot {
    @for $d from 1 through list.length($dot-origins) {
      &--#{$d} {
        $coords: list.nth($dot-origins, $d);
        animation-name: dot-scale#{$d};
        transform-origin: 1px * list.nth($coords, 1) 1px * list.nth($coords, 2);
      }
    }
  }
  &__line,
  &__spark,
  &__wave {
    transition: stroke var(--trans-dur);
  }
  &__line {
    stroke: var(--primary7);

    @for $l from 1 through $lines {
      &--#{$l} {
        animation-name: line-draw#{$l};
      }
    }
  }
  &__lines {
    animation-name: lines-scale;
    transform-origin: 54px 54px;
  }
  &__spark,
  &__wave {
    animation-timing-function: $linear;
    stroke: var(--primary3);
  }
  &__spark {
    @for $s from 1 through $sparks {
      &--#{$s} {
        animation-name: spark#{$s};
      }
    }
  }
  &__wave {
    @for $w from 1 through $waves {
      &--#{$w} {
        animation-name: wave-scale#{$w};
      }
    }
  }
}

/* Animations */
@keyframes center-scale {
  from,
  to {
    transform: scale(0);
  }
  12.5%,
  75% {
    transform: scale(1);
  }
}
@keyframes dot-scale1 {
  from,
  20%,
  81.25%,
  to {
    transform: scale(0);
  }
  32.5%,
  68.75% {
    transform: scale(1);
  }
}
@keyframes dot-scale2 {
  from,
  10.5%,
  87.5%,
  to {
    transform: scale(0);
  }
  23%,
  75% {
    transform: scale(1);
  }
}
@keyframes dot-scale3 {
  from,
  20%,
  81.25%,
  to {
    transform: scale(0);
  }
  32.5%,
  68.75% {
    transform: scale(1);
  }
}
@keyframes dot-scale4 {
  from,
  20%,
  81.25%,
  to {
    transform: scale(0);
  }
  32.5%,
  68.75% {
    transform: scale(1);
  }
}
@keyframes dot-scale5 {
  from,
  11.5%,
  87.5%,
  to {
    transform: scale(0);
  }
  24%,
  75% {
    transform: scale(1);
  }
}
@keyframes dot-scale6 {
  from,
  14.5%,
  85%,
  to {
    transform: scale(0);
  }
  27%,
  72.5% {
    transform: scale(1);
  }
}
@keyframes dot-scale7 {
  from,
  20%,
  81.25%,
  to {
    transform: scale(0);
  }
  32.5%,
  68.75% {
    transform: scale(1);
  }
}
@keyframes dot-scale8 {
  from,
  11%,
  87.5%,
  to {
    transform: scale(0);
  }
  23.5%,
  75% {
    transform: scale(1);
  }
}
@keyframes dot-scale9 {
  from,
  20%,
  81.25%,
  to {
    transform: scale(0);
  }
  32.5%,
  68.75% {
    transform: scale(1);
  }
}
@keyframes line-draw1 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 59;
  }
  25%,
  68.75% {
    stroke-dashoffset: 17;
  }
}
@keyframes line-draw2 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 42;
  }
  25%,
  68.75% {
    stroke-dashoffset: 0;
  }
}
@keyframes line-draw3 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 59;
  }
  25%,
  68.75% {
    stroke-dashoffset: 17;
  }
}
@keyframes line-draw4 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 78;
  }
  25%,
  68.75% {
    stroke-dashoffset: 18;
  }
}
@keyframes line-draw5 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 60;
  }
  25%,
  68.75% {
    stroke-dashoffset: 0;
  }
}
@keyframes line-draw6 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 91;
  }
  25%,
  68.75% {
    stroke-dashoffset: 31;
  }
}
@keyframes line-draw7 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 60;
  }
  25%,
  68.75% {
    stroke-dashoffset: 17;
  }
}
@keyframes line-draw8 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 43;
  }
  25%,
  68.75% {
    stroke-dashoffset: 0;
  }
}
@keyframes line-draw9 {
  from,
  93.75%,
  to {
    stroke-dashoffset: 60;
  }
  25%,
  68.75% {
    stroke-dashoffset: 17;
  }
}
@keyframes lines-scale {
  from {
    opacity: 1;
    transform: scale(0);
  }
  12.5%,
  75% {
    opacity: 1;
    transform: scale(1);
  }
  93.75%,
  to {
    opacity: 0;
    transform: scale(0.5);
  }
}
@keyframes spark1 {
  from,
  27.5% {
    stroke-dashoffset: 59;
  }
  50%,
  52.5% {
    stroke-dashoffset: -25;
  }
  75%,
  to {
    stroke-dashoffset: -109;
  }
}
@keyframes spark2 {
  from,
  27.5% {
    stroke-dashoffset: 42;
  }
  50%,
  52.5% {
    stroke-dashoffset: -42;
  }
  75%,
  to {
    stroke-dashoffset: -126;
  }
}
@keyframes spark3 {
  from,
  27.5% {
    stroke-dashoffset: 59;
  }
  50%,
  52.5% {
    stroke-dashoffset: -25;
  }
  75%,
  to {
    stroke-dashoffset: -109;
  }
}
@keyframes spark4 {
  from,
  27.5% {
    stroke-dashoffset: 78;
  }
  50%,
  52.5% {
    stroke-dashoffset: -42;
  }
  75%,
  to {
    stroke-dashoffset: -162;
  }
}
@keyframes spark5 {
  from,
  27.5% {
    stroke-dashoffset: 60;
  }
  50%,
  52.5% {
    stroke-dashoffset: -60;
  }
  75%,
  to {
    stroke-dashoffset: -180;
  }
}
@keyframes spark6 {
  from,
  27.5% {
    stroke-dashoffset: 91;
  }
  50%,
  52.5% {
    stroke-dashoffset: -29;
  }
  75%,
  to {
    stroke-dashoffset: -149;
  }
}
@keyframes spark7 {
  from,
  27.5% {
    stroke-dashoffset: 60;
  }
  50%,
  52.5% {
    stroke-dashoffset: -26;
  }
  75%,
  to {
    stroke-dashoffset: -112;
  }
}
@keyframes spark8 {
  from,
  27.5% {
    stroke-dashoffset: 43;
  }
  50%,
  52.5% {
    stroke-dashoffset: -43;
  }
  75%,
  to {
    stroke-dashoffset: -129;
  }
}
@keyframes spark9 {
  from,
  27.5% {
    stroke-dashoffset: 60;
  }
  50%,
  52.5% {
    stroke-dashoffset: -26;
  }
  75%,
  to {
    stroke-dashoffset: -112;
  }
}

@mixin wave-start() {
  stroke-width: 6px;
  transform: scale(1);
}
@mixin wave-end() {
  animation-timing-function: $step;
  stroke-width: 0;
  transform: scale(2);
}
@keyframes wave-scale1 {
  from,
  0%,
  25%,
  50%,
  75% {
    @include wave-start();
  }
  10%,
  35%,
  60%,
  85%,
  to {
    @include wave-end();
  }
}
@keyframes wave-scale2 {
  from,
  5%,
  30%,
  55%,
  80% {
    @include wave-start();
  }
  15%,
  40%,
  65%,
  90%,
  to {
    @include wave-end();
  }
}
</style>
