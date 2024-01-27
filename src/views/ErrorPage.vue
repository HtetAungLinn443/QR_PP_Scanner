<template>
  <div
    class="d-flex justify-content-center align-items-center error_page"
    style="height: 100vh"
  >
    <div class="text-center">
      <h1 class="text-danger">404 Error</h1>
      <p>Page Not Found</p>
      <button @click="this.$router.go(-1)" class="btn btn-outline-dark">
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.error_page h1 {
  font-size: 100px;
  transform: skewY(-5deg);
}
.error_page p {
  font-size: 50px;
}
@media (max-width: 420px) {
  .error_page h1 {
    font-size: 50px;
  }
  .error_page p {
    font-size: 25px;
  }
}
</style>
