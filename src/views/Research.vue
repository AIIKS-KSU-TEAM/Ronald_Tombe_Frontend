<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <header>
    <Navbar />
  </header>
  <div class="container mx-auto px-4 my-5">
    <!-- Hero Section -->
    <section class="text-center py-5">
      <h1 class="display-4 fw-bold text-primary mb-4">
        Research Workshops
      </h1>
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

    <!-- Research Sections -->
    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="fw-bold text-secondary mb-3">Society 5.0-inspired digitalization framework 
            for resilient and sustainable agriculture</h2>
          <p class="lead text-secondary">
            Enterprise architectures provide a structured framework for designing and managing 
            complex organisational systems. In the context of agricultural food chains, 
            integrating artificial intelligence (AI) can enhance the capabilities of complex 
            adaptive systems in Agriculture (CASA)... 
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
            AI for Complex Adaptive Systems in Agric-Food Chains: Enterprise Architecture Perspectives
          </h2>
          <p class="lead text-secondary">
            Enterprise architectures provide a structured framework for designing and managing complex 
            organisational systems. In the context of agricultural food chains, integrating artificial 
            intelligence (AI) can enhance the capabilities of complex adaptive systems in Agriculture (CASA)....
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
</style>
