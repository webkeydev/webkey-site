<template>
  <header id="app-header" class="header" :class="{ 'header-scrolled': isScrolled, 'header-transparent': transparent && !isScrolled, 'header-light': theme === 'light' && !isScrolled }">
    <div class="header-wrapper">
      <div class="header-container">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img :src="transparent && theme === 'light' && !isScrolled ? '/webkey-logo-dark.svg' : '/logo.svg'" alt="Webkey" class="logo-image" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <ul class="nav-menu">
            <li><router-link to="/pricing">Pricing</router-link></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/business">Business</a></li>
            <li><a href="/server">Server</a></li>
            <li><a href="/editions">Editions</a></li>
            <li class="has-submenu" @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
              <router-link to="/partners">Partners</router-link>
              <ul class="submenu" v-show="showSubmenu">
                <li><router-link to="/sign-our-apk">Sign our APK</router-link></li>
                <li><router-link to="/already-using-webkey">Already using Webkey</router-link></li>
              </ul>
            </li>
            <li><router-link to="/about-us">About us</router-link></li>
            <li>
              <a href="https://dashboard.webkeyapp.com/registration" class="btn-try-free">Try Free</a>
            </li>
            <li>
              <a href="https://dashboard.webkeyapp.com/">Log In</a>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <nav class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
      <ul class="mobile-menu">
        <li><router-link to="/pricing" @click="mobileMenuOpen = false">Pricing</router-link></li>
        <li><a href="/features" @click="mobileMenuOpen = false">Features</a></li>
        <li><a href="/business" @click="mobileMenuOpen = false">Business</a></li>
        <li><a href="/server" @click="mobileMenuOpen = false">Server</a></li>
        <li><a href="/editions" @click="mobileMenuOpen = false">Editions</a></li>
        <li>
          <router-link to="/partners" @click="toggleMobileSubmenu">
            Partners
            <span class="submenu-toggle">{{ mobileSubmenuOpen ? '-' : '+' }}</span>
          </router-link>
          <ul class="mobile-submenu" v-show="mobileSubmenuOpen">
            <li><router-link to="/sign-our-apk" @click="mobileMenuOpen = false">Sign our APK</router-link></li>
            <li><router-link to="/already-using-webkey" @click="mobileMenuOpen = false">Already using Webkey</router-link></li>
          </ul>
        </li>
        <li><router-link to="/about-us" @click="mobileMenuOpen = false">About us</router-link></li>
        <li>
          <a href="https://dashboard.webkeyapp.com/registration" class="btn-try-free">Try Free</a>
        </li>
        <li>
          <a href="https://dashboard.webkeyapp.com/">Log In</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'dark', // 'dark' or 'light'
    validator: (value) => ['dark', 'light'].includes(value)
  }
})

const isScrolled = ref(false)
const showSubmenu = ref(false)
const mobileMenuOpen = ref(false)
const mobileSubmenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileSubmenu = (e) => {
  e.preventDefault()
  mobileSubmenuOpen.value = !mobileSubmenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #000000;
  transition: all 0.3s ease;
  box-shadow: none;
}

.header-transparent {
  background: transparent;
}

.header-scrolled {
  background: #000000;
  box-shadow: none;
}

.header-wrapper {
  width: 100%;
  padding: 0;
}

.header-container {
  max-width: 100%;
  margin: 0;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.header-scrolled .header-container {
  height: 60px;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.logo-image {
  height: 40px;
  width: 94px;
  transition: all 0.3s ease;
}

.header-scrolled .logo-image {
  height: 40px;
  width: 94px;
}

.desktop-nav {
  display: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  align-items: center;
  font-family: 'DecimaMonoPro', monospace;
}

.nav-menu li {
  position: relative;
}

.nav-menu a,
.nav-menu a:visited {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: color 0.3s ease;
  display: block;
  padding: 8px 0;
  letter-spacing: 2px;
  text-transform: none;
}

.header-light .nav-menu a,
.header-light .nav-menu a:visited {
  color: #20242e;
}

.header-transparent.header-light .nav-menu a,
.header-transparent.header-light .nav-menu a:visited {
  color: #20242e;
}

.nav-menu a:hover {
  color: #145cff;
}

.nav-menu a.router-link-active,
.nav-menu a.router-link-exact-active {
  color: #145cff;
}

.has-submenu {
  position: relative;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #1a1a1a;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  min-width: 220px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-top: 0;
}

.submenu li {
  padding: 0;
}

.submenu a {
  padding: 12px 20px;
  display: block;
  font-size: 14px;
  color: #ffffff;
}

.submenu a:hover {
  background: #2a2a2a;
  color: #145cff;
}

.submenu a.router-link-active,
.submenu a.router-link-exact-active {
  color: #145cff;
  background: #2a2a2a;
}

.btn-try-free {
  background: #145cff !important;
  color: white !important;
  padding: 12px 28px !important;
  border-radius: 3px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'DecimaMonoPro', monospace;
}

.btn-try-free:hover {
  background: #000000 !important;
  transform: none;
  box-shadow: none;
}

.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.header-light .mobile-menu-btn span {
  background: #20242e;
}

.header-transparent.header-light .mobile-menu-btn span {
  background: #20242e;
}

.mobile-nav {
  display: block;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: #0a0a0a;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.mobile-nav-open {
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.mobile-menu {
  list-style: none;
  padding: 20px;
  margin: 0;
  font-family: 'DecimaMonoPro', monospace;
}

.mobile-menu li {
  border-bottom: 1px solid #2a2a2a;
}

.mobile-menu li:last-child {
  border-bottom: none;
}

.mobile-menu > li > a,
.mobile-menu > li > a:visited {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

.mobile-menu > li > a.router-link-active,
.mobile-menu > li > a.router-link-exact-active {
  color: #145cff;
}

.submenu-toggle {
  font-size: 20px;
  color: #145cff;
}

.mobile-submenu {
  list-style: none;
  padding: 0 0 10px 20px;
  margin: 0;
}

.mobile-submenu li {
  border-bottom: none;
}

.mobile-submenu a {
  padding: 10px 0;
  font-size: 15px;
  color: #cccccc;
}

.mobile-submenu a.router-link-active,
.mobile-submenu a.router-link-exact-active {
  color: #145cff;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 20px;
  }
}

@media (min-width: 1280px) {
  .desktop-nav {
    display: block;
  }

  .mobile-menu-btn {
    display: none;
  }

  .mobile-nav {
    display: none;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .nav-menu {
    gap: 20px;
  }

  .nav-menu a {
    font-size: 13px;
  }

  .btn-try-free {
    padding: 10px 20px !important;
    font-size: 12px !important;
  }
}
</style>
