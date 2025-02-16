<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">鹦鹉世界</router-link>
        <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links" :class="{ 'active': isMenuOpen }">
          <router-link to="/" @click="isMenuOpen = false">首页</router-link>
          <router-link to="/about" @click="isMenuOpen = false">关于</router-link>
          <router-link to="/care" @click="isMenuOpen = false">饲养指南</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 jk的鹦鹉世界. 版权所有</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: $background-color;
  color: $text-color;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-md;
  
  @media (max-width: $breakpoint-sm) {
    padding: 0 $spacing-lg;
  }
}

.navbar {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: $spacing-md 0;
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: $primary-color;
    text-decoration: none;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    
    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: $primary-color;
      transition: all 0.3s ease;
    }
  }
  
  @media (max-width: $breakpoint-md) {
    .menu-toggle {
      display: flex;
    }
    
    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      padding: $spacing-md;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: none;
      flex-direction: column;
      gap: $spacing-md;
      
      &.active {
        display: flex;
      }
      
      a {
        margin: 0;
        padding: $spacing-sm 0;
      }
    }
  }
  
  .nav-links {
    a {
      color: $text-color;
      text-decoration: none;
      margin-left: $spacing-lg;
      
      &:hover {
        color: $primary-color;
      }
      
      &.router-link-active {
        color: $primary-color;
      }
    }
  }
}

.footer {
  background: darken($background-color, 5%);
  padding: $spacing-lg 0;
  text-align: center;
  margin-top: auto;
}
</style> 