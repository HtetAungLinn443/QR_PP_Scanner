<template>
  <div class="container" style="width: 100%">
    <AnimateTitle>Update Profile</AnimateTitle>
    <BaseCard class="card animate__animated animate__backInUp">
      <div class="card-header" v-if="profile">
        <div class="d-flex justify-content-center">
          <img
            class="img-thumbnail"
            style="width: 300px; height: 300px; object-fit: cover"
            :src="selectedImage"
            :alt="selectedImage"
            title="Profile"
          />
        </div>
      </div>

      <form @submit.prevent="submit()">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-group">
                <label for="username">Username</label>
                <InputGroup
                  id="username"
                  placeholder="Enter Your Name"
                  v-model="formData.username"
                ></InputGroup>
                <small class="text-danger" v-if="usernameError">{{
                  usernameError
                }}</small>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-group">
                <label for="email">Email</label>
                <InputGroup
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  v-model="formData.email"
                ></InputGroup>
                <small class="text-danger" v-if="emailError">{{
                  emailError
                }}</small>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div>
                <label for="image">Image</label>
                <BaseButton
                  class-name="btn-outline-secondary btn-block"
                  id="image"
                  button-name="Choose Image"
                  @click="imageChoose"
                ></BaseButton>
                <input
                  type="file"
                  id="imageFile"
                  class="d-none"
                  accept="image/*"
                  @change="imageInsert"
                  ref="imageFileRef"
                />
                <small class="text-danger" v-if="imageError">{{
                  imageError
                }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <BaseButton
            :disabled="invalid"
            class-name="btn-block btn-info"
            type="submit"
          ></BaseButton>
        </div>
      </form>
    </BaseCard>
    <BackBtn />
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";
import InputGroup from "@/components/InputGroup.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import AnimateTitle from "@/components/AnimateTitle.vue";

export default {
  name: "UpdateProfile",
  components: {
    BackBtn,
    InputGroup,
    BaseButton,
    BaseCard,
    AnimateTitle,
  },
  data() {
    return {
      invalid: false,
      profile: false,
      selectedImage: undefined,
      formData: {
        username: "",
        email: "",
        file: null,
      },
      usernameError: "",
      emailError: "",
      imageError: "",
    };
  },
  methods: {
    imageChoose() {
      const imageFile = document.getElementById("imageFile");
      imageFile.click();
    },
    imageInsert() {
      const imageFile = this.$refs.imageFileRef;
      const selectedFile = imageFile.files[0];
      if (selectedFile) {
        const validImageTypes = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/gif",
          "image/web",
        ];
        const validExtensions = ["jpg", "jpeg", "png", "gif"];

        if (
          !validImageTypes.includes(selectedFile.type) ||
          !validExtensions.includes(
            selectedFile.name.split(".").pop().toLowerCase()
          )
        ) {
          this.imageError =
            "Please choose a file with a valid image extension.";
        } else {
          this.imageError = "";
          this.profile = true;
          this.selectedImage = URL.createObjectURL(selectedFile);
          this.formData.file = selectedFile;
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
    submit() {
      this.usernameError = this.validateField(
        this.formData.username,
        "Username",
        3
      );
      this.emailError = this.validateField(
        this.formData.email,
        "Email",
        3,
        true
      );
      if (!this.usernameError && !this.emailError && !this.imageError) {
        // Validation passed, you can proceed with your form submission logic.
        console.log(this.formData);
      }
    },
  },
};
</script>

<style scoped></style>
