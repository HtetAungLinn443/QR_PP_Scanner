<template>
  <div class="col-md-6 offset-md-3 col-10 offset-1">
    <div class="">
      <div>
        <AnimateTitle class="mt-3">Login Page</AnimateTitle>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="submit()">
              <div class="form-group mb-4">
                <label class="form-label" for="email">Email address</label>
                <input
                  type="text"
                  id="email"
                  v-model="email"
                  placeholder="user@gmail.com"
                  class="form-control"
                  :class="{ 'is-invalid': emailError }"
                />
                <small class="text-danger" v-if="emailError">{{
                  emailError
                }}</small>
              </div>
              <div class="form-group mb-4">
                <label class="form-label" for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="password"
                  class="form-control"
                  :class="{ 'is-invalid': passwordError }"
                />
                <small class="text-danger" v-if="passwordError">{{
                  passwordError
                }}</small>
              </div>
              <button
                data-mdb-ripple-init
                type="submit"
                class="btn btn-primary btn-block"
              >
                Sign in
              </button>
              <a href="#">Forget Password</a>
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
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  mounted() {
    localStorage.removeItem("authToken");
  },
  methods: {
    submit() {
      this.emailError = this.validateField(this.email, "Email", 3, true);
      this.passwordError = this.validateField(this.password, "Password", 3);
      if (!this.emailError && !this.passwordError) {
        if (this.email === "user@gmail.com" && this.password === "password") {
          // Successful login
          const authToken = "your_generated_token";
          localStorage.setItem("authToken", authToken);
          this.$router.push("/home");
        } else {
          this.showErrorToast();
        }
      }
    },
    validateField(value, fieldName, minLength, isEmail) {
      if (value === "") {
        return `${fieldName} field is required.`;
      } else if (value.length <= minLength) {
        return `${fieldName} must be greater than ${minLength}.`;
      } else if (isEmail && !/\S+@\S+\.\S+/.test(value)) {
        return "Invalid email address.";
      } else {
        return "";
      }
    },
    showErrorToast() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "error",
        title: "Invalid login credentials",
      });
    },
  },
};
</script>

<style scoped>
.is-invalid {
  margin-bottom: 0;
}
</style>
