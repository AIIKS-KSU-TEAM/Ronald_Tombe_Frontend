<script setup>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- Hero Section Start -->
  <Navbar />
  <div
    class="container mx-auto px-3 px-md-5 overflow-x-hidden lg:overflow-x-visible my-5"
  >
    <section class="row align-items-center py-5">
      <!-- Text Section: Appears first on small screens -->
      <div
        class="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start mb-4 mb-lg-0"
      >
        <h1 class="display-4 fw-bold mb-3">Dr. Ronald Keng'ara Tombe</h1>
        <p class="lead text-secondary mb-4">
          A visionary leader in Artificial Intelligence and Sustainable
          Agriculture. Dr. Tombe's journey blends academic excellence with
          impactful community work, aiming to revolutionize agriculture through
          AI.
        </p>
        <div
          class="d-flex flex-row flex-sm-row justify-content-center justify-content-lg-start mt-4 gap-2"
        >
          <a
            href="#about-section"
            class="btn btn-primary flex-grow-1"
            style="border-radius: 20px; min-width: 130px"
            >About Me</a
          >
          <a
            href="@/assets/Dr.Tombe_CV.PDF"
            download="Dr.Tombe_CV.doc"
            class="btn btn-outline-secondary flex-grow-1"
            style="border-radius: 20px; min-width: 130px"
            >Download CV</a
          >
        </div>
      </div>
      <!-- Image Section: Appears second on small screens -->
      <div
        class="col-12 col-lg-6 order-1 order-lg-2 position-relative mb-4 mb-lg-0"
      >
        <img
          class="img-fluid rounded"
          src="@/assets/ron.png"
          alt="Ronald Tombe Image"
        />
      </div>
    </section>

    <!-- Know Me More Section Start -->
    <section class="text-center mt-5">
      <div class="mb-4">
        <h3 class="fw-bold">Know Me More</h3>
        <hr class="w-25 mx-auto" />
      </div>
      <p class="lead text-secondary mx-auto" style="max-width: 70%">
        Get to know more about Dr. Ronald Keng'ara Tombe, a distinguished leader
        in Artificial Intelligence and Sustainable Agriculture, whose mission is
        to blend technological innovation with environmental responsibility.
      </p>
    </section>
    <!-- Know Me More Section End -->

    <!-- Tab Section Start -->
    <section id="about-section" class="mt-5">
      <ul
        class="nav nav-tabs justify-content-center border-0"
        id="drTombeTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active custom-tab"
            id="about-tab"
            data-bs-toggle="tab"
            data-bs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="true"
          >
            About Dr. Tombe
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link custom-tab"
            id="awards-tab"
            data-bs-toggle="tab"
            data-bs-target="#awards"
            type="button"
            role="tab"
            aria-controls="awards"
            aria-selected="false"
          >
            Awards and Events
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link custom-tab"
            id="goals-tab"
            data-bs-toggle="tab"
            data-bs-target="#goals"
            type="button"
            role="tab"
            aria-controls="goals"
            aria-selected="false"
          >
            Current Endeavors and Future Goals
          </button>
        </li>
      </ul>
      <div class="tab-content p-4" id="drTombeTabContent">
        <div
          class="tab-pane fade show active"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div class="row align-items-center">
            <div class="col-md-6 lead text-secondary">
              <p>
                Dr. Ronald Keng'ara Tombe, a renowned Computer Science PhD
                graduate from the University of KwaZulu-Natal, South Africa,
                combines his artificial intelligence (AI) expertise with a deep
                commitment to sustainable agriculture and economic empowerment.
                His roles extend beyond academia, as evidenced by his positions
                as Vice-president of UKZN's International Student Association
                (ISA), co-founder of AI AA NGO, and currently the Program
                Coordinator at the Africa Institute of Indigenous Knowledge
                Systems (AIIKS), Kisii University chapter. More about AIIKS can
                be found at their website:
                <a
                  href="https://aiiks.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >https://aiiks.org/</a
                >
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/bg3.jpg"
                alt="About Dr. Tombe"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="awards"
          role="tabpanel"
          aria-labelledby="awards-tab"
        >
          <div class="row align-items-center">
            <div class="col-md-6 lead text-secondary">
              <ul>
                <li>
                  Won a grant from the Carnegie Corporation of New York through
                  the Future Africa of the University of Pretoria, as a Research
                  Fellow
                </li>
                <li>
                  Tuition-paid Scholarship for PhD studies by the University of
                  KwaZulu-Natal, South Africa.
                </li>
                <li>Big Data and AI by Ronald Tombe. #DevfestKisii 2023</li>
                <li>
                  Ronald Tombe: "The future of Agriculture lies in the use of
                  Artificial Intelligence"
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/bg.jpg"
                alt="Awards and Events"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="goals"
          role="tabpanel"
          aria-labelledby="goals-tab"
        >
          <div class="row align-items-center">
            <div class="col-md-6 lead text-secondary">
              <p>
                As a lecturer in the Department of Computer Science at Kisii
                University, Kenya, Dr. Tombe continues to mentor research teams
                in AI, software engineering, big data analytics, and machine
                learning. His overarching aim is to harness AI for sustainable
                agricultural practices that foster economic growth and
                environmental stewardship.
              </p>
              <a
                href="/about"
                class="btn btn-outline-secondary w-50 w-lg-25 mb-3"
                style="border-radius: 20px"
                >Read More</a
              >
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/bg2.jpg"
                alt="Current Endeavors and Future Goals"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Tab Section End -->
  </div>

  <footer class="mt-3">
    <Footer />
  </footer>
  <!-- Hero Section End -->
</template>

<style scoped>
section {
  border-radius: 10px;
}

.nav-tabs .nav-item .custom-tab {
  font-size: 1.2rem;
  text-align: center;
  text-decoration: underline;
  margin-right: 1rem;
}

.nav-tabs .nav-item .nav-link {
  border: none;
}

.tab-content {
  border: none;
}

img {
  max-width: 100%;
}

hr {
  border: 1px solid #000;
}

.lead {
  font-size: 1.1rem;
  font-family: "Open Sans", Arial, sans-serif;
}
</style>
