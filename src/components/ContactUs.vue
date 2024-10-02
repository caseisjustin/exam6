<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <p class="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        
        <form @submit.prevent="submitForm">
          <!-- Name -->
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              placeholder="Enter your name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
  
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              placeholder="Enter your email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
  
          <!-- Subject -->
          <div class="mb-4">
            <label for="subject" class="block text-gray-700 font-medium">Subject</label>
            <select 
              id="subject" 
              v-model="subject" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option disabled value="">Select Subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>
  
          <!-- Message -->
          <div class="mb-6">
            <label for="message" class="block text-gray-700 font-medium">Message</label>
            <textarea 
              id="message" 
              v-model="message" 
              rows="4"
              placeholder="Write your question here"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="text-center">
            <button 
              type="submit" 
              class="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
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
        subject: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Logic for handling form submission
        console.log('Form submitted:', this.name, this.email, this.subject, this.message);
      }
    }
  };
  </script>
  
  <!-- Importing Tailwind CSS in your project -->
  <style scoped>
  </style>
  