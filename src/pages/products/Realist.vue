<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ productData.name }}</h1>
            <p class="text-xl opacity-90">{{ productData.description }}</p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img :src="productData.image" :alt="productData.name" class="rounded-lg shadow-xl max-w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Back Button -->
    <div class="container mx-auto px-4 py-6">
      <button 
        @click="$router.go(-1)" 
        class="flex items-center text-prime-green hover:text-deep-sea-green transition-colors duration-300"
      >
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Products
      </button>
    </div>

    <!-- Subcategories Grid -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Product Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link 
            v-for="(subcategory, key) in productData.subcategories" 
            :key="key"
            :to="`/products/realist/${key}`"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="p-6">
              <div class="w-16 h-16 bg-prime-green/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:bg-prime-green/20">
                <svg class="w-8 h-8 text-prime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ subcategory.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ subcategory.description }}</p>
              <div class="text-prime-green font-medium text-sm flex items-center">
                Explore Products
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import productsData from '@/assets/data/products.json'

const productData = ref(productsData.realist)
</script>