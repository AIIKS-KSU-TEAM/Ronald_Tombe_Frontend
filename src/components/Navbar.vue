<script setup>
import { ref } from "vue";
const isNavbarCollapsed = ref(true);
</script>

<template>
  <!-- Main Navbar -->
  <nav
    class="navbar navbar-expand-md navbar-light"
    style="background-color: #f8f9fa"
  >
    <div class="container" style="max-width: 95%">
      <a class="navbar-brand me-auto" href="/home">
        <!-- Contact link positioned on the far left -->
        <img
          src="@/assets/images/logo1.png"
          class="img-fluid rounded"
          alt="Ronald Tombe"
        />
      </a>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        @click="isNavbarCollapsed = !isNavbarCollapsed"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="['collapse', 'navbar-collapse', { show: !isNavbarCollapsed }]"
        id="navbarNav"
      >
        <ul class="navbar-nav mx-auto">
          <!-- Centered Navbar Links -->
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/research">Research</a>
          </li>
        </ul>
        <!-- Button with responsive widths -->
        <div
          class="d-flex flex-column flex-md-row align-items-center justify-content-md-end gap-2 mt-3"
        >
          <a
            href="/contact"
            class="btn btn-primary w-500 w-lg-50"
            style="border-radius: 20px"
            >Contact Me</a
          >
        </div>
      </div>
    </div>
  </nav>

  <!-- Sub Navbar -->
  <nav class="subnavbar">
    <ul class="navbar-nav subnavbar-items">
      <li class="nav-item">
        <a class="nav-link" href="https://x.com/i/flow/login?redirect_after_login=%2Fronaldtombe" target="_blank">
          <i class="bi bi-twitter"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/ronald-tombe-9576385b/" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  padding-left: 10px;
}
img {
  height: 60px;
}
.navbar-nav .nav-link {
  color: #000;
  font-weight: 500;
  transition:
    color 0.3s ease-in-out,
    border-bottom 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

.btn-primary {
  border-radius: 20px;
}
.subnavbar {
  width: 40px;
  height: 50vh;
  position: fixed;
  top: 0;
  left: 5px;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
}

.subnavbar-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subnavbar .nav-link {
  padding: 15px 0;
  text-align: center;
}

.subnavbar .nav-link i.bi-facebook {
  color: #3b5998;
}

.subnavbar .nav-link i.bi-twitter {
  color: #1ba5fa;
}

.subnavbar .nav-link i.bi-instagram {
  color: #e1306c;
}

.subnavbar .nav-link i.bi-linkedin {
  color: #0077b5;
}

.subnavbar .nav-link i:hover {
  filter: brightness(1.2);
}
</style>
