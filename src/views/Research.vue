<script setup>
import { ref } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

// Create a reactive variable to control the popup visibility
const showPopup = ref(false);

// Function to close the popup
const closePopup = () => {
  showPopup.value = false;
};

// Function to open the popup
const openPopup = () => {
  showPopup.value = true;
};
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="container mx-auto px-4 my-5">
    <!-- Hero Section -->
    <section class="text-center py-5">
      <h1 class="display-4 fw-bold text-primary mb-4">Research Workshops</h1>
      <p class="lead text-muted mb-4">
        Discover my research journey as a research fellow at Future Africa,
        University of Pretoria and beyond.
      </p>
      <a
        href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=SpAdUDYAAAAJ"
        class="btn btn-outline-primary mb-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore My Research
      </a>
    </section>

    <!-- Popup Section -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-container">
        <img
          src="@/assets/images/conference1.jpg"
          alt="Conference Image"
          class="popup-image"
        />
        <button @click="closePopup" class="btn-close">X</button>
      </div>
    </div>
    
    <!-- New Research Section (Localising Justice in Africa’s Just Transition) -->
    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="fw-bold text-secondary mb-3">
            Localising Justice in Africa’s Just Transition - Environmental Humanities Seminar
          </h2>
          <p class="lead text-secondary">
            The Centre for the Advancement of Scholarship at the University of Pretoria invites you to a seminar titled “Localising Justice in Africa’s Just Transition” as part of the Engaging Environmental Publics Seminar Series. 
            This seminar will reflect on the role of local communities in Africa’s Just Transition plans, featuring Dr. Ronald Tombe and Dr. Tamuka Chekero.
          </p>
          <p class="lead text-secondary">
            Date: Thursday, 28 November 2024 <br />
            Time: 11:00 to 13:00 <br />
            Old College House Lounge, Hatfield Campus, University of Pretoria <br />
          </p>
          <a
        href="#"
        class="btn btn-primary mb-3"
        @click.prevent="openPopup" 
      >
        View More
      </a>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/images/conference.jpg"
            alt="Localising Justice in Africa’s Just Transition Seminar"
            class="img-fluid rounded shadow-sm"
            style="object-fit: cover; height: 100%; width: 100%;"
          />
        </div>
      </div>
    </section>

    <!-- Research Sections -->
    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="fw-bold text-secondary mb-3">
            Society 5.0-inspired digitalization framework for resilient and
            sustainable agriculture
          </h2>
          <p class="lead text-secondary">
            Enterprise architectures provide a structured framework for
            designing and managing complex organisational systems. In the
            context of agricultural food chains, integrating artificial
            intelligence (AI) can enhance the capabilities of complex adaptive
            systems in Agriculture (CASA)...
          </p>
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SpAdUDYAAAAJ&citation_for_view=SpAdUDYAAAAJ:8k81kl-MbHgC"
            class="btn btn-primary mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Work
          </a>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/images/dl.jpg"
            alt="Rutgers Research"
            class="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </section>
    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="fw-bold text-secondary mb-3">
            AI for Complex Adaptive Systems in Agric-Food Chains: Enterprise
            Architecture Perspectives
          </h2>
          <p class="lead text-secondary">
            Enterprise architectures provide a structured framework for
            designing and managing complex organisational systems. In the
            context of agricultural food chains, integrating artificial
            intelligence (AI) can enhance the capabilities of complex adaptive
            systems in Agriculture (CASA)....
          </p>
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SpAdUDYAAAAJ&citation_for_view=SpAdUDYAAAAJ:8k81kl-MbHgC"
            class="btn btn-primary mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore My Research
          </a>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/images/bg4.jpg"
            alt="University of Pretoria Research"
            class="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </section>

    <div class="text-center">
      <a
        href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=SpAdUDYAAAAJ"
        class="btn btn-outline-primary mb-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        See More
      </a>
    </div>

    <!-- Quote Section -->
    <section class="text-center py-5">
      <blockquote class="blockquote">
        <p class="mb-0">
          "Some men see things as they are and ask why, I see things that never
          were and ask why not."
        </p>
        <br />
        <footer class="blockquote-footer">George Bernard Shaw</footer>
      </blockquote>
    </section>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.hero-section {
  position: relative;
}

.carousel-item {
  position: relative;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.container {
  max-width: 1200px;
}

h1,
h2 {
  font-family: "Open Sans", Arial, sans-serif;
}

.btn-primary {
  border-radius: 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Hero Section */
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* Quote Section */
blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  font-style: italic;
  color: #6c757d;
}

/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-container {
  position: relative;
  background: white;
  padding: 20px;
  margin-top: 20%;
  margin-bottom: 20%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.popup-image {
  max-width: 100%;
  max-height: 80vh; /* Keeps the image within a reasonable size */
  object-fit: contain;
}

.btn-close {
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 24px;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
