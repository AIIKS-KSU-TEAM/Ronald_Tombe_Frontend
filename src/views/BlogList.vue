<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { usePosts } from "@/composables/usePosts";

const {
  paginatedPosts,
  currentPage,
  totalPages,
  setCurrentPage,
  nextPage,
  previousPage,
  getFirstParagraph,
  isLoading,
  error,
} = usePosts();
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 mt-3">
      <h1 class="mb-4 text-center" style="font-family: Georgia, serif">
        Blogs
      </h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 blog">
    <div class="col mx-auto">
        <div class="card">
            <img src="@/assets/images/card11.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Product development | Agricultural digital extension advisory services</h4>
                <p class="card-text text-muted">Design and develop AI digital apps for the provision of digital extension advisory services and technologies linking farmers...</p>
                <p style="font-family: 'Courier New', Courier, monospace; color: #555;">July 22</p>
                <a href="https://www.scienceblog.africa/post/product-development-agricultural-digital-extension-advisory-services" class="btn p-1 rounded-pill">
                    Read More <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div class="col mx-auto">
        <div class="card">
            <img src="@/assets/images/card2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">The crucial role of the mentor</h4>
                <p class="card-text text-muted">Dr Ronald Tombe of the FAR-LeaF program has had a special relationship with his mentor during the FAR-LeaF fellowship, Prof. Hanlie Smuts of the University of Pretoria. He says...</p>
                <p style="font-family: 'Courier New', Courier, monospace; color: #555;">March 29</p>
                <a href="https://www.scienceblog.africa/post/q-a-ronald-the-crucial-role-of-the-mentor" class="btn p-1 rounded-pill">
                    Read More <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div class="col mx-auto">
        <div class="card" >
            <img src="@/assets/images/card33.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Technology could herald a journey to justice for farmers</h4>
                <p class="card-text text-muted">Dr Ronald Tombe's <a href="https://www.linkedin.com/feed/hashtag/?keywords=farleaf&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7135192741273047041"> #farleaf</a> research is featured in the award-winning University of Pretoria’s (UP) http://RE.SEARCH magazine...</p>
                <p style="font-family: 'Courier New', Courier, monospace; color: #555;">Nov 28, 2023</p>
                <a href="https://www.scienceblog.africa/post/technology-could-herald-a-journey-to-justice-for-farmers" class="btn p-1 rounded-pill">
                    Read More <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="col mx-auto">
        <div class="card">
            <img src="@/assets/images/card44.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Hope gleams in the form of digital transformation</h4>
                <p class="card-text text-muted">Ronald Tombe's research project will arm them with digital tools, i.e. easier-to-use software solutions, to enhance their productivity and strengthen Africa's food system amid climate unpredictabilities...</p>
                <p style="font-family: 'Courier New', Courier, monospace; color: #555;">July 22</p>
                <a href="https://www.scienceblog.africa/post/hope-gleams-in-the-form-of-digital-transformation" class="btn p-1 rounded-pill">
                    Read More <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div class="col mx-auto">
        <div class="card">
            <img src="@/assets/images/card55.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Research | Society 5.0-Inspired Digitalization Framework for Resilient and Sustainable Agriculture</h4>
                <p class="card-text text-muted">This research paper proposes a digitalization framework based on Society 5.0 principles for promoting resilient and sustainable...</p>
                <p style="font-family: 'Courier New', Courier, monospace; color: #555;">July 22</p>
                <a href="https://www.scienceblog.africa/post/research-society-5-0-inspired-digitalization-framework-for-resilient-and-sustainable-agriculture" class="btn p-1 rounded-pill">
                    Read More <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div class="col mx-auto">
        <div class="card" >
            <img src="@/assets/images/card66.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Research| Agricultural Social Networks: An Agricultural Value Chain-Based Digitalization Framework for an Inclusive Digital Economy</h4>
                <p class="card-text text-muted">Sustainable agriculture...</p>
                <p style="font-family: 'Courier New', Courier, monospace; color: #555;">July 22</p>
                <a href="https://www.scienceblog.africa/post/agricultural-social-networks-an-agricultural-value-chain-based-digitalization-framework-for-an-incl" class="btn p-1 rounded-pill">
                    Read More <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="text-center mt-4">
<a
    href="https://www.scienceblog.africa/blog/categories/dr-ronald-tombe"
    class="btn btn-outline-secondary mt-4"
    target="_blank"
    rel="noopener noreferrer"
  >
    More Blogs>>
  </a><hr class="my-5" /></div>
<section>
  <h4 class="mb-4 text-center" style="font-family: Georgia, serif">
    INCLUSIVE AGRICULTURAL TRANSFORMATION
      </h4>
  <div class="mb-4 p-4">
  <div class="row g-4">
    <div class="col-md-5">
      <video class="img-fluid rounded" controls style="width: 100%; height: auto;">
        <source src="@/assets/videos/INCLUSIVE AGRICULTURAL TRANSFORMATION.mp4" type="video/mp4">
        Your browser does not support the video tag. Visit this link<a href="https://www.youtube.com/watch?v=jVnYNfA6oP8&t=8s">INCLUSIVE AGRICULTURAL TRANSFORMATION
        </a>
      </video>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <p class="card-text mb-3" style="font-size: 1.125rem; line-height: 1.6;">
          Innovations and Scaling of Digital Systems for Enhancing Productivity, Knowledge Preservation, and Incomes of Indigenous Communities
        </p>
        <p class="card-text text-muted" style="font-family: 'Arial', sans-serif; font-size: 1rem;">
          <small>Dr. Ronald Tombe</small>
        </p>
        <a href="https://www.scienceblog.africa/fellows/dr-ronald-tombe">
         <img src="@/assets/images/farleaf.png" style="height: 60px;" alt="Far-Leaf" ></a>
      </div>
    </div>
  </div>
</div>
</section>



     <!-- code to pull blogs from the backend 

      <div v-if="isLoading">Loading...</div>
      <div v-if="error" class="text-danger">{{ error }}</div>

      <ul v-else class="list-unstyled mt-4">
        <li v-for="(post, index) in paginatedPosts" :key="index" class="mb-4">
          <h2 class="text-success mb-2" style="font-family: Arial, sans-serif">
            <router-link
              :to="{
                name: 'PostDetail',
                params: {
                  year: post.year,
                  month: post.month,
                  day: post.day,
                  slug: post.slug,
                },
              }"
              class="text-decoration-none"
            >
              {{ post.title }}
            </router-link>
          </h2>
          <p class="text-muted mb-1" style="font-family: Arial, sans-serif">
            Published on {{ post.publish }}
          </p>
          <p class="mb-2" style="font-family: Verdana, sans-serif">
            {{ getFirstParagraph(post.body) }}...
          </p>
          <p class="text-dark" style="font-family: Arial, sans-serif">
            By {{ post.author_username }}
          </p>
          <hr class="my-4" />
        </li>
      </ul>

      <nav aria-label="Page navigation example" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="previousPage">
              Previous
            </a>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: page === currentPage }"
          >
            <a class="page-link" href="#" @click.prevent="setCurrentPage(page)">
              {{ page }}
            </a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: currentPage === totalPages }"
          >
            <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
          </li>
        </ul>
      </nav> -->
    </div>

    <!-- Footer -->
    <footer class="mt-5">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.blog .card {
  min-height: 500px;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 1.75rem;
}

p {
  font-size: 1rem;
}
</style>
