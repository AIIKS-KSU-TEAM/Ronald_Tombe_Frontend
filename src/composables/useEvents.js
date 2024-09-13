import { ref, onMounted } from "vue";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useEvents() {
  const recentHighlights = ref([]);
  const upcomingEvents = ref([]);
  const isLoading = ref(false);
  const errorMessage = ref(null);

  const fetchEvents = async () => {
    isLoading.value = true;
    errorMessage.value = null;
    try {

      const response = await axios.get(`${API_BASE_URL}/api/events/`);
      const events = response.data;
      const currentDate = new Date();

      events.forEach((event) => {
        const eventDate = new Date(event.date);
        if (eventDate < currentDate) {
          recentHighlights.value.push(event);
        } else {
          upcomingEvents.value.push(event);
        }
      });
    } catch (error) {
      errorMessage.value = "Failed to fetch events";
      console.error("Error fetching events:", error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchEvents();
  });

  return {
    recentHighlights,
    upcomingEvents,
    isLoading,
    errorMessage,
  };
}
