import { ref } from 'vue';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useContactForm() {
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const formMessage = ref('');
  const alertType = ref('');

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${API_BASE_URL}/api/contact/`, {
        name: name.value,
        email: email.value,
        message: message.value,
      });

      formMessage.value = 'Your message has been sent successfully!';
      alertType.value = 'alert-success';

      // Clear form fields
      name.value = '';
      email.value = '';
      message.value = '';
    } catch (error) {
      formMessage.value = 'There was an error sending your message. Please try again.';
      alertType.value = 'alert-danger';
    }
  };

  return {
    name,
    email,
    message,
    formMessage,
    alertType,
    submitForm,
  };
}
