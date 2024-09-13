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

      <!-- Loading and Error Handling -->
      <div v-if="isLoading">Loading...</div>
      <div v-if="error" class="text-danger">{{ error }}</div>

      <!-- Blog Posts List -->
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

      <!-- Pagination -->
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
      </nav>
    </div>

    <!-- Footer -->
    <footer class="mt-5">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
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
