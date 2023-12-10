<template>
  <nav class="navbar sticky-top bg-dark text-light" style="height: 60px">
    <div class="d-flex justify-space-between container">
      <router-link to="/profile" style="background: none" @click="closeDrawer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcoK-dlbjL7C1eAPifV1gUs2n6ukUugyM-J5wFbSEptPEn7GCoJXnFXMDlp9SdP-JcIQ&usqp=CAU"
          alt="Profile"
          class="profileImg"
        />
      </router-link>
      <div class="menu">
        <button class="menuBtn" @click="toggleMenu">
          <i
            :class="{
              'fa-solid fa-bars': !isMenuOpen,
              'fa-solid fa-xmark': isMenuOpen,
            }"
          ></i>
        </button>
        <div
          class="menuList d-flex flex-column justify-content-between"
          :class="{ menuListOpen: isMenuOpen }"
        >
          <div class="d-flex flex-column">
            <router-link @click="toggleMenu" to="/">
              <i class="fa fa-home me-2"></i>
              Home
            </router-link>
            <router-link @click="toggleMenu" to="/account">
              <i class="fa fa-user me-2"></i>
              Account
            </router-link>
            <router-link @click="toggleMenu" to="/contact">
              <i class="fa fa-message me-2"></i>
              Contact
            </router-link>
            <router-link @click="toggleMenu" to="/about">
              <i class="fa fa-info me-3"></i>
              About
            </router-link>
            <router-link @click="toggleMenu" to="/logout">
              <i class="fa-solid fa-right-from-bracket me-2"></i>
              Logout
            </router-link>
          </div>
          <div class="text-center">
            <span style="font-size: 11px; font-style: italic"
              >&#169; 2024 Power By Htet Aung Linn.</span
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu(event) {
      if (this.isMenuOpen && !this.$el.contains(event.target)) {
        this.isMenuOpen = false;
      }
    },
    closeDrawer() {
      this.isMenuOpen = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeMenu);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenu);
  },
};
</script>

<style scoped>
html,
body {
  overflow-x: hidden !important;
}
nav {
  box-shadow: 0 5px 10px #000000b2;
  opacity: 0.9;
}
.profileImg {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  padding: 4px;
}
.menuBtn {
  background: none;
  outline: none;
  border: none;
  color: #ffffff;
  font-size: 25px;
  transition: color 0.3s ease;
}
.menuList {
  position: fixed;
  top: 60px;
  right: -100%;
  background-color: #565656;
  width: 45%;
  transition: right 0.3s ease;
  bottom: 0;
}
.menuListOpen {
  right: 0;
}
.menuList ul {
  list-style-type: none;
}

.menuList a {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  padding-left: 20px;
  transition: 0.3s;
  border-bottom: 1px solid #383838;
}
.menuList a:hover {
  background-color: #898989;
  color: #000;
  cursor: pointer;
}
.router-link-active {
  background-color: #898989;
  color: #000 !important;
}
</style>
