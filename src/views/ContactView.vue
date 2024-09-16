<script setup>
import { ref } from "vue";
import { useEvents } from "@/composables/useEvents";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

// Use the composable to handle events fetching
const { recentHighlights, upcomingEvents, isLoading, errorMessage } = useEvents();

const name = ref("");
const email = ref("");
const message = ref("");
const formMessage = ref("");
const alertType = ref("");

const submitForm = async (event) => {
  event.preventDefault();

  try {
    await axios.post("http://127.0.0.1:8000/api/contact/", {
      name: name.value,
      email: email.value,
      message: message.value,
    });

    formMessage.value = "Your message has been sent successfully!";
    alertType.value = "alert-success";

    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    formMessage.value =
      "There was an error sending your message. Please try again.";
    alertType.value = "alert-danger";
  }
};
</script>

<template>
  <Navbar />
  <div class="contact">
    <div class="container py-4">
      <div class="row">
        <!-- Contact Form -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h2 class="h2 text-md-start mb-4">Contact Me</h2>
          <hr class="bg-warning w-25 mx-0 mx-md-0" />
          <p class="lead">
            Want to learn more about my work or discuss a potential partnership?
            Reach out to me, and let's build a better future together.
          </p>
          <form @submit="submitForm">
            <div v-if="formMessage" :class="['alert', alertType]" role="alert">
              {{ formMessage }}
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control border-secondary shadow-sm"
                id="name"
                v-model="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control border-secondary shadow-sm"
                id="email"
                v-model="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control border-secondary shadow-sm"
                id="message"
                v-model="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-secondary w-100">
              Send Message
            </button>
          </form>
        </div>

        <!-- Map and Events Section -->
        <div class="col-md-6">
          <h2 class="h2 mb-4">Location</h2>
          <hr class="bg-warning w-25 mx-0 mx-md-0" />
          <div class="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8217088203!2d34.781737376012316!3d-0.6923034873102553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3f6840164ff1%3A0x8040e0d2e546b570!2sKisii%20University%20Main%20Campus!5e0!3m2!1sen!2ske!4v1723017296428!5m2!1sen!2ske"
              class="embed-responsive-item"
              width="100%"
              height="300"
              style="border-radius: 5px"
              allowfullscreen=""
              loading="lazy"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <footer class="mt-2">
      <Footer />
    </footer>
  </div>
</template>
