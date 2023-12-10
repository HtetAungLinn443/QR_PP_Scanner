<template>
  <div class="container bg-info">
    <div
      class="d-flex align-items-center justify-content-center"
      style="height: 100vh"
    >
      <div style="width: 800px">
        <h1 class="text-center text-light mb-5">Login Page</h1>
        <div class="card">
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
export default {
  name: "loginPage",
};
</script>

<style lang="scss" scoped></style>
