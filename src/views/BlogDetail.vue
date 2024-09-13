<script setup>
import { useBlogPost } from "@/composables/useBlogPost";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

// Use the composable to handle post and comments logic
const { post, comments, comment, isLoading, errorMessage, submitComment } = useBlogPost();
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <div class="mx-4 mt-5">
      <div class="row">
        <!-- Blog Post -->
        <div class="col-md-11 mx-auto">
          <div v-if="isLoading">
            <p>Loading...</p>
          </div>
          <div v-if="errorMessage">
            <p>{{ errorMessage }}</p>
          </div>
          <div v-if="post" class="mt-2">
            <h1>{{ post.title }}</h1>
            <p class="date">
              By {{ post.author_username }}<br />
              {{ post.publish }}
            </p>
            <p v-html="post.body" class="fs-5 lh-base text-secondary"></p>
          </div>

          <!-- Comment Form -->
          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title">Leave a Comment</h3>
              <form @submit.prevent="submitComment">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="comment.name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="comment.email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="content">Comment</label>
                  <textarea
                    class="form-control"
                    id="content"
                    rows="3"
                    v-model="comment.content"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-outline-secondary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <!-- Display Comments -->
          <div class="card mt-4" v-if="comments.length > 0">
            <div class="card-body">
              <h3 class="card-title">Comments ({{ comments.length }})</h3>
              <ul class="list-unstyled">
                <li v-for="(comment, index) in comments" :key="index">
                  <p>
                    <strong>{{ comment.name }}</strong> - {{ comment.email }}
                  </p>
                  <p>{{ comment.content }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div v-else>
            <p>No comments yet.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-5">
      <Footer />
    </footer>
  </div>
</template>
