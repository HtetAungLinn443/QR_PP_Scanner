<template>
  <div class="container">
    <h1 class="text-center mt-4 animate__animated animate__backInUp">
      Profile Update
    </h1>
    <div class="mt-5 card animate__animated animate__backInUp">
      <div class="card-header"></div>
      <form @submit.prevent="sendForm()">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-group">
                <label class="form-label" for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="">
                <label class="form-label" for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="Enter Username"
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="">
                <label class="form-label" for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="">
                <label for="image" class="form-label">Image</label>
                <button
                  class="btn btn-outline-secondary btn-block"
                  id="image"
                  @click="imageChoose"
                >
                  Choose Image
                </button>
                <input
                  type="file"
                  id="imageFile"
                  accept="image/*"
                  class="d-none"
                  ref="imageFileRef"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <input type="submit" value="Submit" class="btn btn-block btn-info" />
        </div>
      </form>
    </div>
    <BackBtn />
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";
export default {
  name: "UpdateProfile",
  components: {
    BackBtn,
  },
  data() {
    return {};
  },
  methods: {
    imageChoose() {
      const imageFile = document.getElementById("imageFile");
      imageFile.click();
    },
    sendForm() {
      //   console.log(data);
    },
  },
};
</script>

<style scoped>
.card {
  backdrop-filter: blur(10px) !important;
}
</style>
