<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <p class="text-center text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      <!-- Form -->
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your Email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <!-- Subject 1 -->
          <div>
            <label for="subject1" class="block text-gray-600 font-medium">Subject</label>
            <input
              type="text"
              id="subject1"
              v-model="subject1"
              placeholder="Provide context"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <!-- Subject 2 -->
          <div>
            <label for="subject2" class="block text-gray-600 font-medium">Subject</label>
            <select
              id="subject2"
              v-model="subject2"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            >
              <option disabled value="">Select Subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>
        </div>

        <!-- Message -->
        <div class="mt-6">
          <label for="message" class="block text-gray-600 font-medium">Message</label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            placeholder="Write your question here"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="mt-6 text-center">
          <button
            type="submit"
            class="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject1: '',
      subject2: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.name, this.email, this.subject1, this.subject2, this.message);
    }
  }
};
</script>

<!-- Importing Tailwind CSS in your project -->
<style scoped>
</style>
