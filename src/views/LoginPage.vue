<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="height: 93vh"
  >
    <div class="">
      <div style="min-width: 500px">
        <AnimateTitle>Login Page</AnimateTitle>
        <div class="card mx-3" style="text-align: center">
          <div class="card-body">
            <form>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form1Example1" class="form-control" />
                <label class="form-label" for="form1Example1"
                  >Email address</label
                >
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  class="form-control"
                />
                <label class="form-label" for="form1Example2">Password</label>
              </div>

              <!-- Submit button -->
              <button
                data-mdb-ripple-init
                type="submit"
                class="btn btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimateTitle from "@/components/AnimateTitle.vue";
export default {
  name: "loginPage",
  components: { AnimateTitle },
};
</script>

<style lang="scss" scoped></style>
