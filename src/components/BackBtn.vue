<template>
  <div class="">
    <div class="backBtn" @click="this.$router.go(-1)">
      <i class="fa-solid fa-arrow-left-long"></i>
    </div>
  </div>
</template>
<style scoped>
.backBtn {
  position: absolute;
  left: 10px;
  top: 70px;
  font-size: 25px;
  cursor: pointer;
  padding: 5px;
  text-align: center;
}
</style>
<script>
export default {
  name: "backBtn",
};
</script>
