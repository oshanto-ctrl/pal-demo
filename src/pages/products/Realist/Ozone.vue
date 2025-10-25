<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ subcategoryData.name }}</h1>
            <p class="text-xl opacity-90">{{ subcategoryData.description }}</p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img :src="subcategoryData.image" :alt="subcategoryData.name" class="rounded-lg shadow-xl max-w-full h-auto">
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
        Back to Realist
      </button>
    </div>

    <!-- Products Grid -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Products in {{ subcategoryData.name }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, key) in subcategoryData.products" 
            :key="key"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="p-6">
              <img :src="product.images[0]" :alt="product.name" class="w-full h-48 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              
              <!-- Key Features -->
              <div class="mb-4">
                <h4 class="font-medium text-gray-700 mb-2">Key Features:</h4>
                <ul class="space-y-1">
                  <li v-for="(feature, index) in product.features.slice(0, 3)" :key="index" class="flex items-start text-sm text-gray-600">
                    <svg class="w-4 h-4 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ feature }}
                  </li>
                  <li v-if="product.features.length > 3" class="text-sm text-gray-500">+{{ product.features.length - 3 }} more features</li>
                </ul>
              </div>
              
              <button 
                @click="showProductDetails(product)"
                class="w-full bg-prime-green hover:bg-deep-sea-green text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Details Modal -->
    <div v-if="selectedProduct" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click.self="closeProductDetails">
      <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-start mb-6">
            <h2 class="text-2xl font-bold">{{ selectedProduct.name }}</h2>
            <button @click="closeProductDetails" class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Product Images -->
            <div>
              <img :src="currentImage" :alt="selectedProduct.name" class="w-full h-auto rounded-lg mb-4">
              <div class="grid grid-cols-3 gap-2">
                <div 
                  v-for="(image, index) in selectedProduct.images" 
                  :key="index"
                  @click="currentImage = image"
                  class="cursor-pointer"
                >
                  <img :src="image" :alt="`${selectedProduct.name} ${index + 1}`" class="w-full h-20 object-cover rounded-lg border-2 transition-colors duration-300" 
                       :class="currentImage === image ? 'border-prime-green' : 'border-transparent'">
                </div>
              </div>
            </div>
            
            <!-- Product Details -->
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ selectedProduct.title }}</h3>
              <p class="text-gray-700 mb-6">{{ selectedProduct.description }}</p>
              
              <!-- Key Features -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3">Key Features</h4>
                <ul class="space-y-2">
                  <li v-for="(feature, index) in selectedProduct.features" :key="index" class="flex items-start">
                    <svg class="w-5 h-5 text-prime-green mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Specifications -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold mb-3">Specifications</h4>
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="(value, key) in selectedProduct.specifications" :key="key" class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-sm text-gray-500">{{ key }}</p>
                    <p class="font-medium">{{ value }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3">
                <button class="bg-prime-green hover:bg-deep-sea-green text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Request Quote
                </button>
                <button class="border-2 border-prime-green text-prime-green hover:bg-prime-green hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import productsData from '@/assets/data/products.json'

const subcategoryData = ref(productsData.realist.subcategories.ozone)
const selectedProduct = ref(null)
const currentImage = ref('')

const showProductDetails = (product) => {
  selectedProduct.value = product
  currentImage.value = product.images[0]
}

const closeProductDetails = () => {
  selectedProduct.value = null
}
</script>