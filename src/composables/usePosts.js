import { ref, computed, onMounted } from "vue";
import axios from "axios";
import moment from "moment";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const posts = ref([]);
const isLoading = ref(false);
const error = ref(null);

export function usePosts() {
  const currentPage = ref(1);
  const postsPerPage = 6;

  const processedPosts = computed(() => {
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
    return processedPosts.value.slice(startIndex, startIndex + postsPerPage);
  });
  const totalPages = computed(() => {
    return Math.ceil(processedPosts.value.length / postsPerPage);
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
  const fetchPosts = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${API_BASE_URL}/blog/post/`);
      posts.value = response.data;
    } catch (err) {
      error.value = "Error fetching posts: " + err.message;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchPosts);

  return {
    posts,
    paginatedPosts,
    totalPages,
    currentPage,
    setCurrentPage,
    nextPage,
    previousPage,
    getFirstParagraph,
    isLoading,
    error,
  };
}
