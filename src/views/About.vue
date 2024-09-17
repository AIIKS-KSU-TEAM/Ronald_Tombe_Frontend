<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <!-- Hero Section with Bootstrap Carousel -->
  <section class="hero-section position-relative">
  <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3"></button>
    </div>

    <!-- Carousel slides -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/bg.jpg" class="d-block w-100 img-fluid" alt="First Slide" style="max-height: 500px; object-fit: cover;">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/bg1.jpg" class="d-block w-100 img-fluid" alt="Second Slide" style="max-height: 500px; object-fit: cover;">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/bg6.jpg" class="d-block w-100 img-fluid" alt="Third Slide" style="max-height: 500px; object-fit: cover;">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/bg8.jpg" class="d-block w-100 img-fluid" alt="Fourth Slide" style="max-height: 500px; object-fit: cover;">
      </div>
    </div>

    <!-- Carousel controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>

  <section class="container my-5">
    <div class="row mb-5 align-items-center">
      <div class="col-md-5 text-center">
        <img
          src="@/assets/ron.png"
          alt="Dr. Ronald Keng'ara Tombe"
          class="img-fluid rounded shadow-sm mb-4"
        />
      </div>
      <div class="col-md-7">
  <h2 class="mb-4">About Dr. Tombe</h2>
  <p class="mb-3">
    Dr. Ronald Keng'ara Tombe is a leading expert in computing sciences and artificial intelligence, with a strong focus on sustainable agriculture and community empowerment.
  </p>
  <div class="mb-3">
    <div class="d-flex align-items-start mb-2">
      <i class="bi bi-person-circle text-primary me-2 fs-4"></i>
      <span>
        Lecturer in the <a href="https://kisiiuniversity.ac.ke/dpt/department-of-computing-science/team" target="_blank" class="text-decoration-none">Department of Computing Sciences at Kisii University</a>.
      </span>
    </div>
    <div class="d-flex align-items-start mb-2">
      <i class="bi bi-file-earmark-person text-success me-2 fs-4"></i>
      <span>
        Research Fellow (2022-2024) at <a href="https://scholar.google.com/citations?user=SpAdUDYAAAAJ&hl=en" target="_blank" class="text-decoration-none">Future Africa, University of Pretoria</a>.
      </span>
    </div>
    <div class="d-flex align-items-start mb-2">
      <i class="bi bi-briefcase text-warning me-2 fs-4"></i>
      <span>
        Director of Programs at the <a href="https://aiiks.org/" target="_blank" class="text-decoration-none">AIIKS Kisii University chapter</a>.
      </span>
    </div>
    <div class="d-flex align-items-start mb-2">
      <i class="bi bi-lightbulb text-primary me-2 fs-4"></i>
      <span>
        Co-founder of the <a href="http://aiaa-kenya.org/" target="_blank" class="text-decoration-none">Artificial Intelligence Alliance in Agriculture (AIAA)</a>, focusing on innovative tech solutions for agricultural communities.
      </span>
    </div>
    <div class="d-flex align-items-start mb-2">
      <i class="bi bi-person-check text-success me-2 fs-4"></i>
      <span>
        Vice-president of UKZN's International Student Association (ISA).
      </span>
    </div>
  </div>
</div>

    </div>

    <div class="row mb-5 align-items-center">
      <div class="col-md-6">
        <h2 class="mb-4">Research and AI Innovations</h2>
        <p class="mb-4">
          Dr. Tombe's project with the
          <strong>Future Africa Research Leader Fellowship (FAR-LeaF)</strong>
          focuses on "Inclusive Agricultural Transformation: Innovations and
          Scaling of Digital Systems for Enhancing Productivity, Knowledge
          Preservation, and Incomes of Indigenous Communities."
        </p>
        <div class="mb-3">
          <div class="d-flex align-items-start mb-3">
            <i class="bi bi-bar-chart-line-fill text-primary me-3 fs-4"></i>
            <div>
              <h5 class="mb-1">Enhanced Productivity</h5>
              <p class="mb-0">
                Utilizing AI and machine learning to boost agricultural
                productivity among small-scale farmers.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start mb-3">
            <i class="bi bi-shield-lock-fill text-success me-3 fs-4"></i>
            <div>
              <h5 class="mb-1">Knowledge Preservation</h5>
              <p class="mb-0">
                Preserving indigenous knowledge and integrating it with modern
                AI technologies for sustainable practices.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start mb-3">
            <i class="bi bi-graph-up-arrow text-warning me-3 fs-4"></i>
            <div>
              <h5 class="mb-1">Economic Empowerment</h5>
              <p class="mb-0">
                Improving economic outcomes for farmers by scaling innovative
                digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <img
          src="@/assets/bg3.jpg"
          alt="Research and AI Innovations"
          class="img-fluid rounded shadow-sm"
        />
      </div>
    </div>


    <div class="row mb-5 p-4 bg-light rounded shadow-sm">
      <div class="col-md-4 text-center">
        <i class="bi bi-tree text-success display-4 mb-3"></i>
      </div>
      <div class="col-md-8">
        <h2 class="mb-3 text-primary">
          Sustainability and Economic Empowerment
        </h2>
        <p class="lead">
          Dr. Tombe advocates for the use of AI to democratize agricultural
          access, enhancing the economic potential of marginalized communities,
          especially women and youth in agriculture. His commitment to
          sustainability is a core aspect of his role at AIIKS, driving
          impactful change in agricultural practices.
        </p>
      </div>
    </div>
    <div class="row mb-5 p-4 bg-white rounded shadow-sm">
      <div class="col-md-7">
        <h2 class="content-title mb-4 text-dark">
          Current Endeavors and Future Goals
        </h2>
        <ul class="timeline">
          <li class="timeline-item mb-4">
            <div class="timeline-icon bg-primary text-white">
              <i class="bi bi-people"></i>
            </div>
            <div class="timeline-content">
              <h5 class="mb-2 text-primary">Mentorship and Research</h5>
              <p class="text-muted">
                As a lecturer in the Department of Computer Science at Kisii
                University, Dr. Tombe mentors research teams in AI, software
                engineering, big data analytics, and machine learning.
              </p>
            </div>
          </li>
          <li class="timeline-item mb-4">
            <div class="timeline-icon bg-success text-white">
              <i class="bi bi-graph-up"></i>
            </div>
            <div class="timeline-content">
              <h5 class="mb-2 text-primary">Leveraging AI for Agriculture</h5>
              <p class="text-muted">
                His aim is to utilize AI for sustainable agricultural practices
                that foster economic growth and environmental stewardship,
                especially focusing on small-scale farmers.
              </p>
            </div>
          </li>
          <li class="timeline-item mb-4">
            <div class="timeline-icon bg-info text-white">
              <i class="bi bi-globe"></i>
            </div>
            <div class="timeline-content">
              <h5 class="mb-2 text-primary">Global Outreach and Collaboration</h5>
              <p class="text-muted">
                Dr. Tombe is dedicated to expanding his impact through global
                partnerships, bringing innovative AI solutions to agriculture
                worldwide, with a focus on empowering underserved communities.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-5 d-flex justify-content-center align-items-center">
        <img
          src="@/assets/dev.jpg"
          alt="Future Goals"
          class="img-fluid rounded shadow"
        />
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.hero-section {
  height: 70vh;
  width: 99vw;
  overflow: hidden;
}
@media (max-width: 767.98px) {
  .hero-section {
    height: 40vh;
    overflow: hidden;
  }

  .hero-section .carousel-item img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
}

.carousel-item img {
  height: 70vh;
  width: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

h1 {
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

p.lead {
  font-size: 1.5rem;
}
.timeline {
  list-style: none;
  padding: 0;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e9ecef;
}

.timeline-item {
  position: relative;
  padding-left: 60px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #0d6efd;
}

.timeline-icon {
  position: absolute;
  left: -32px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
</style>
