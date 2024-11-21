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
          A lecturer in the Department of Computing Sciences at Kisii
          University, a Research Fellow at Future Africa, University of
          Pretoria, the Director of programs at AIIKS Kisii University chapter,
          and the Co-founder of the Artificial Intelligence Alliance in
          Agriculture
        </p>
        <div
          class="d-flex flex-row flex-sm-row justify-content-center justify-content-lg-start mt-4 gap-2"
        >
          <a
            href="/about"
            class="btn btn-primary flex-grow-1"
            style="border-radius: 20px; min-width: 130px"
            >Profile</a
          >
          <a
            href="https://scholar.google.com/citations?user=SpAdUDYAAAAJ&hl=en"
            class="btn btn-outline-secondary flex-grow-1"
            style="border-radius: 20px; min-width: 130px"
            >Research</a
          >
        </div>
      </div>
      <div
        class="col-12 col-lg-6 order-1 order-lg-2 position-relative mb-4 mb-lg-0"
      >
        <img
          class="img-fluid rounded"
          src="@/assets/images/hero1.png"
          alt="Ronald Tombe Image"
        />
      </div>
    </section>

    <section class="mt-5">
      <div class="mb-4">
        <h3 class="fw-bold text-center">Qualifications</h3>
        <hr class="w-25 mx-auto" />
      </div>
      <p class="lead text-secondary mx-auto" style="max-width: 95%">
        Dr. Ronald Tombe holds a Postdoctoral Fellowship from the University of
        Pretoria, a Doctor of Philosophy in Computer Science from the University
        of KwaZulu-Natal, a Master of Science in Software Engineering from Jomo
        Kenyatta University of Agriculture and Technology, and a Bachelor of
        Science in Information Technology from the same institution.
      </p>
    </section>

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
            Workshops and Summits
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
            Research Publication
          </button>
        </li>
      </ul>
      <div class="tab-content p-3" id="drTombeTabContent">
        <div
          class="tab-pane fade show active"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div class="row align-items-center">
            <div class="col-md-6 lead text-secondary">
              <p>
                Dr. Ronald Keng'ara Tombe is a lecturer in the
                <a
                  href="https://kisiiuniversity.ac.ke/dpt/department-of-computing-science/team"
                  target="_blank"
                  class="text-decoration-none"
                  >Department of Computing Sciences at Kisii University
                </a>
                since 2015. He is a Research Fellow (2022-2024) at
                <a
                  href="https://www.futureafrica.science/ronald"
                  target="_blank"
                  class="text-decoration-none"
                  >Future Africa, University of Pretoria</a
                >, Director of Programs at the
                <a
                  href="https://aiiks.org/"
                  target="_blank"
                  class="text-decoration-none"
                  >AIIKS, Kisii University chapter</a
                >
                and the Chairperson of the Kenyan NGO,
                <a
                  href="http://aiaa-kenya.org/"
                  target="_blank"
                  class="text-decoration-none"
                  >Artificial Intelligence Alliance in Agriculture (AIAA)</a
                >. His research covers artificial intelligence, computer vision,
                machine learning, and human-centered interaction, focusing on
                software solutions that enhance agricultural extension services
                in climate action and resilience.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/images/about.jpg"
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
                  <a
                    href="https://youtu.be/EQu5euwif70?si=JqNEq76V1e4AIXfO"
                    target="_blank"
                  >
                    International Colloquium on Indigenous Languages (Feb 20-21,
                    2024, Sheraton Hotel, Dar es Salaam, Tanzania)
                  </a>
                  – Focus: Integrating digital and artistic youth skills to
                  promote indigenous multilingualism for sustainable futures.
                  Jointly hosted by
                  <a
                    href="https://aiiks.org/"
                    target="_blank"
                    class="text-decoration-none"
                    >AIIKS</a
                  >
                  and the
                  <a href="https://www.sabdf.org.za/partners/africa-forum/"
                    >(Africa Forum).</a
                  >
                </li>
                <li>
                  <a
                    href="https://deeplearningindaba.com/2024/workshops/"
                    target="_blank"
                  >
                    Deep Learning Indaba 2024 (Sep 1-6th, 2024, Dakar, Senegal)
                  </a>
                  – The annual meeting of the African AI community aimed at
                  strengthening AI across the continent on the following themes:
                  <ul>
                    <li>
                      Robot Learning for Africa Workshop – Empowering African
                      voices in AI through data, models, and innovation.
                    </li>
                    <li>
                      Uniting for a Climate-Resilient Africa – Promoting climate
                      data and knowledge exchange for resilience.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="col-md-6">
              <img
                src="@/assets/images/bg.jpg"
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
                Dr. Ronald Keng'ara Tombe is a distinguished researcher in
                computer vision, artificial intelligence, and software
                engineering, with a focus on sustainable agriculture and
                digitalization. His notable works include:
              </p>
              <ul>
                <li>
                  <a
                    href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SpAdUDYAAAAJ&citation_for_view=SpAdUDYAAAAJ:0EnyYjriUFMC"
                    target="_blank"
                    class="text-decoration-none"
                  >
                    "Agricultural social networks: An agricultural value
                    chain-based digitalization framework for an inclusive
                    digital economy"
                  </a>
                  Sustainable agriculture is the backbone of food security
                  systems and a driver of human well-being in global economic
                  development (Sustainable Development Goal SDG 3)...
                </li>
                <li>
                  <a
                    href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=SpAdUDYAAAAJ&citation_for_view=SpAdUDYAAAAJ:_FxGoFyzp5QC"
                    target="_blank"
                    class="text-decoration-none"
                  >
                    "Adaptive deep co-occurrence feature learning based on
                    classifier-fusion for remote sensing scene classification"
                  </a>
                  Remote sensing scene classification has numerous applications
                  on land cover land use...
                </li>
              </ul>
              <a
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=SpAdUDYAAAAJ"
                class="btn btn-outline-secondary w-50 w-lg-25 mb-3"
                style="border-radius: 20px"
                >Read More</a
              >
            </div>

            <div class="col-md-6">
              <img
                src="@/assets/images/bg7.jpg"
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
