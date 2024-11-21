import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import moment from "moment";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useBlogPost() {
  const post = ref(null);
  const comments = ref([]);
  const comment = ref({
    name: "",
    email: "",
    content: "",
    post: null,
  });
  const isLoading = ref(true);
  const errorMessage = ref(null);

  const route = useRoute();

  const fetchPost = async () => {
    const { year, month, day, slug } = route.params;
    isLoading.value = true;

    try {
      const response = await axios.get(
        `${API_BASE_URL}/blog/post/${year}/${month}/${day}/${slug}/`,
      );
      post.value = response.data;

      post.value.publish = moment(post.value.publish).format(
        "MMMM D, YYYY [at] h:mm:ss a",
      );
      fetchComments();
    } catch (error) {
      errorMessage.value = "Error fetching post";
      console.error("Error fetching post:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchComments = async () => {
    if (!post.value) return;

    try {
      const response = await axios.get(
        `${API_BASE_URL}/blog/post/${post.value.id}/comments/`,
      );
      comments.value = response.data;
    } catch (error) {
      errorMessage.value = "Error fetching comments";
      console.error("Error fetching comments:", error);
    }
  };

  const submitComment = async () => {
    if (!post.value) return;

    try {
      comment.value.post = post.value.id;
      await axios.post(
        `${API_BASE_URL}/blog/post/${post.value.id}/comments/`,
        comment.value,
      );

      comment.value.name = "";
      comment.value.email = "";
      comment.value.content = "";

      fetchComments();
    } catch (error) {
      errorMessage.value = "Error submitting comment";
      console.error("Error submitting comment:", error);
    }
  };

  onMounted(() => {
    fetchPost();
  });

  return {
    post,
    comments,
    comment,
    isLoading,
    errorMessage,
    submitComment,
  };
}
