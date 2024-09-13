<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const posts = ref([]);

const currentPage = ref(1);
const postsPerPage = 6; // Number of posts per page

const processed_posts = computed(() => {
  return posts.value.map((post) => ({
    ...post,
    year: moment(post.publish).format("YYYY"),
    month: moment(post.publish).format("MM"),
    day: moment(post.publish).format("DD"),
    publish: moment(post.publish).format("MMMM D, YYYY [at] h:mm:ss a"),
  }));
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  return processed_posts.value.slice(startIndex, startIndex + postsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(processed_posts.value.length / postsPerPage);
});

const setCurrentPage = (page) => {
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const getFirstParagraph = (body) => {
  const paragraphs = body.split("\n");
  return paragraphs.length > 0 ? paragraphs[0] : body;
};

onMounted(() => {
  axios
    .get("http://localhost:8000/blog/post/")
    .then((response) => {
      posts.value = response.data;
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 mt-3">
      <h1
        class="mb-4 text-center"
        style="font-family: &quot;Georgia&quot;, serif"
      >
        Blogs
      </h1>

      <!-- Blog Posts List -->
      <ul class="list-unstyled mt-4">
        <li v-for="(post, index) in paginatedPosts" :key="index" class="mb-4">
          <h2
            class="text-success mb-2"
            style="font-family: &quot;Arial&quot;, sans-serif"
          >
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
          <p
            class="text-muted mb-1"
            style="font-family: &quot;Arial&quot;, sans-serif"
          >
            Published on {{ post.publish }}
          </p>
          <p class="mb-2" style="font-family: &quot;Verdana&quot;, sans-serif">
            {{ getFirstParagraph(post.body) }}...
          </p>
          <p
            class="text-dark"
            style="font-family: &quot;Arial&quot;, sans-serif"
          >
            By {{ post.author_username }}
          </p>
          <hr class="my-4" />
        </li>
      </ul>

      <!-- Pagination -->
      <nav aria-label="Page navigation example" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="previousPage"
              >Previous</a
            >
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
/* Add some styling for better presentation */
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
