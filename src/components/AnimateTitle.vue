<template>
  <div>
    <div class="text-container" style="height: 10vh">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "animateTitle",
};
</script>

<style scoped>
.text-container {
  position: relative;
  text-align: center;
  font-weight: 900;
  background-image: url("../../public/img/bg.webp");
  background-clip: text;
  background-repeat: repeat;
  font-size: 40px;
  color: transparent;
  width: 100%;
  animation: moveBackground 10s linear infinite;
}
@keyframes moveBackground {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 100%;
  }
}
@media (max-width: 768px) {
  .text-container {
    animation: moveBackground 3s linear infinite !important;
    font-size: 30px;
    margin-top: 40px;
  }
}
@media (max-width: 335px) {
  .text-container {
    font-size: 25px;
  }
}
</style>
