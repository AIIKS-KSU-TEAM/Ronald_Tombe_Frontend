<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <header>
    <Navbar />
  </header>
  <div class="container mx-auto px-5 my-5">
    <!-- Hero Section -->
    <section class="text-center py-5">
      <h1 class="display-4 fw-bold text-primary mb-4">
        Research Contributions
      </h1>
      <p class="lead text-muted mb-4">
        Discover my research journey and current projects as a lecturer at Kisii
        University and beyond.
      </p>
    </section>

    <!-- Research Sections -->
    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="fw-bold text-secondary mb-3">
            Research @ University of Pretoria
          </h2>
          <p class="lead text-secondary">
            As a Research Fellow in Inclusive Agricultural Transformation at the
            University of Pretoria, I conduct transdisciplinary research on
            ICT4D in the digitalization of the Agricultural value chain. My work
            focuses on innovations and scaling of digital systems to enhance
            productivity, knowledge preservation, and incomes of indigenous
            communities.
          </p>
          <a
            href="https://www.futureafrica.science/ronald"
            class="btn btn-primary mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore My Research
          </a>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/bg4.jpg"
            alt="University of Pretoria Research"
            class="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </section>

    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="fw-bold text-secondary mb-3">Research @ Rutgers</h2>
          <p class="lead text-secondary">
            From 2009 to 2015, my research at Rutgers focused on evaluating
            Reinforcement Learning algorithms and the challenges associated with
            using pre-collected/batch data. My work also spans various aspects
            of data science, contributing to advancements in the field.
          </p>
          <a
            href="https://www.rutgers.edu/research"
            class="btn btn-primary mb-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Work
          </a>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="@/assets/research.jpg"
            alt="Rutgers Research"
            class="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </section>

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
</style>
