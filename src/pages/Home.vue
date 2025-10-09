<template>
  <div class="min-h-screen">
    <!-- Hero Section with Neural Network Background -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref="neuralCanvas" class="absolute inset-0 w-full h-full bg-black"></canvas>
      
      <div class="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span class="gradient-text">Prime Automations</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
          Leading the Future of Industrial Automation
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <router-link to="/contact" class="btn-primary text-lg">
            Get Started
          </router-link>
          <router-link to="/products" class="btn-secondary text-lg border-white text-white hover:bg-white hover:text-gray-900">
            Explore Products
          </router-link>
        </div>
      </div>
    </section>

    <!-- Our Commitment Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Commitment</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">We are dedicated to providing exceptional automation solutions with unwavering commitment to quality and innovation.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div v-for="commitment in commitments" :key="commitment.title" 
               class="bg-white p-6 rounded-lg shadow-lg card-hover" data-aos="fade-up" :data-aos-delay="commitment.delay">
            <div class="w-16 h-16 bg-prime-green rounded-lg flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="commitment.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ commitment.title }}</h3>
            <p class="text-gray-600">{{ commitment.description }}</p>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/about" class="btn-primary mr-4">View More</router-link>
          <router-link to="/contact" class="btn-secondary">Contact Us</router-link>
        </div>
      </div>
    </section>

    <!-- Our Milestones Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Milestones</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Numbers that speak volumes about our journey and success.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(milestone, index) in milestones" :key="milestone.title" 
               class="text-center" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="w-20 h-20 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="milestone.icon"></path>
              </svg>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold gradient-text mb-2">{{ counterStore.counters[milestone.key] }}+</h3>
            <p class="text-gray-600">{{ milestone.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Products Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Discover our comprehensive range of automation solutions designed for various industries.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div v-for="product in products" :key="product.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer" 
               data-aos="fade-up" 
               :data-aos-delay="product.delay"
               @click="$router.push('/products')">
            <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <button class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/contact" class="btn-primary">Request Custom Solutions</router-link>
        </div>
      </div>
    </section>

    <!-- Our Collaborators Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Collaborators</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Trusted partners who believe in our vision and excellence.</p>
        </div>

        <!-- Infinite Carousel -->
        <div class="overflow-hidden mb-12">
          <div class="flex space-x-8 animate-marquee" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
            <div v-for="partner in [...partners, ...partners]" :key="partner.name" 
                 class="flex-shrink-0 w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <img :src="partner.logo" :alt="partner.name" class="max-w-full max-h-full object-contain">
            </div>
          </div>
        </div>

        <!-- CEO Message -->
        <div class="bg-gradient-to-r from-prime-green to-deep-sea-green rounded-lg p-8 text-white" data-aos="fade-up">
          <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <img src="https://picsum.photos/seed/ceo/150/150.jpg" alt="CEO" class="w-32 h-32 rounded-full border-4 border-white">
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl font-bold mb-2">Message from Our CEO</h3>
              <p class="mb-4">"At Prime Automations Limited, we believe in pushing the boundaries of what's possible. Our commitment to innovation and excellence drives us to deliver solutions that transform industries and create lasting value for our partners."</p>
              <p class="font-semibold">- John Smith, CEO</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/contact" class="btn-primary">Join Our Trusted Partner Network</router-link>
        </div>
      </div>
    </section>

    <!-- Our Events Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest events and industry engagements.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="event in events" :key="event.id" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer" 
               data-aos="fade-up" 
               :data-aos-delay="event.delay"
               @click="$router.push('/events')">
            <div class="flex">
              <img :src="event.image" :alt="event.title" class="w-1/2 h-48 object-cover">
              <div class="w-1/2 p-6">
                <h3 class="text-lg font-semibold mb-2">{{ event.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ event.description }}</p>
                <button class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/events" class="btn-primary">View All Events</router-link>
        </div>
      </div>
    </section>

    <!-- Our Blogs Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Blogs</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Insights, trends, and innovations in the automation industry.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="blog in blogs" :key="blog.id" 
               class="bg-gray-50 rounded-lg shadow-lg overflow-hidden card-hover" 
               data-aos="fade-up" 
               :data-aos-delay="blog.delay">
            <div class="flex">
              <img :src="blog.image" :alt="blog.title" class="w-1/2 h-48 object-cover">
              <div class="w-1/2 p-6">
                <h3 class="text-lg font-semibold mb-2">{{ blog.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ blog.description }}</p>
                <button class="text-prime-green font-semibold hover:text-deep-sea-green transition-colors text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link to="/blogs" class="btn-primary">All Blogs</router-link>
        </div>
      </div>
    </section>

    <!-- Contact Us Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Get in touch with us for any inquiries or support.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div v-for="contact in contactInfo" :key="contact.title" 
               class="bg-white p-6 rounded-lg shadow-lg text-center card-hover" 
               data-aos="fade-up" 
               :data-aos-delay="contact.delay">
            <div class="w-16 h-16 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="contact.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ contact.title }}</h3>
            <p class="text-gray-600">{{ contact.info }}</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto" data-aos="fade-up">
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input 
                  v-model="formData.fullName" 
                  type="text" 
                  required 
                  maxlength="100"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  :class="{ 'border-red-500': errors.fullName }"
                >
                <p v-if="errors.fullName" class="text-red-500 text-sm mt-1">{{ errors.fullName }}</p>
              </div>
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  required 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  :class="{ 'border-red-500': errors.email }"
                >
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>
            
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2">Subject *</label>
              <input 
                v-model="formData.subject" 
                type="text" 
                required 
                maxlength="200"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                :class="{ 'border-red-500': errors.subject }"
              >
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>
            
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea 
                v-model="formData.message" 
                required 
                maxlength="1000"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p class="text-gray-500 text-sm mt-1">{{ formData.message.length }}/1000 characters</p>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>
            
            <div class="mb-6">
              <label class="flex items-center">
                <input 
                  v-model="formData.agree" 
                  type="checkbox" 
                  class="mr-2 w-4 h-4 text-prime-green border-gray-300 rounded focus:ring-prime-green"
                >
                <span class="text-gray-700">I agree that submitted data is being collected and stored *</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              class="btn-primary w-full"
              :disabled="!formData.agree || isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Submit Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const neuralCanvas = ref(null)
let animationId = null

// Form data
const formData = reactive({
  fullName: '',
  email: '',
  subject: '',
  message: '',
  agree: false
})

const errors = reactive({})
const isSubmitting = ref(false)

// Commitments data
const commitments = [
  {
    title: 'Certified Quality',
    description: 'ISO certified processes and quality management systems ensure the highest standards.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    delay: 0
  },
  {
    title: 'Expert Installation',
    description: 'Professional installation team with years of experience in automation systems.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    delay: 100
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services for your peace of mind.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    delay: 200
  },
  {
    title: 'Performance Optimized',
    description: 'Systems designed for maximum efficiency and optimal performance in all conditions.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    delay: 300
  },
  {
    title: 'Safety First',
    description: 'Comprehensive safety features and protocols to protect your workforce and assets.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    delay: 400
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable solutions that minimize environmental impact and reduce energy consumption.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    delay: 500
  }
]

// Milestones data
const milestones = [
  {
    title: 'Years of Excellence',
    key: 'years',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Happy Clients',
    key: 'clients',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Trusted Partners',
    key: 'partners',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Premium Products',
    key: 'products',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  }
]

// Products data
const products = [
  {
    id: 1,
    title: 'Industrial PLC Systems',
    description: 'Advanced programmable logic controllers for complex industrial automation.',
    image: 'https://picsum.photos/seed/plc/400/300.jpg',
    delay: 0
  },
  {
    id: 2,
    title: 'SCADA Solutions',
    description: 'Comprehensive supervisory control and data acquisition systems.',
    image: 'https://picsum.photos/seed/scada/400/300.jpg',
    delay: 100
  },
  {
    id: 3,
    title: 'Robotics Integration',
    description: 'Custom robotic solutions for manufacturing and assembly lines.',
    image: 'https://picsum.photos/seed/robotics/400/300.jpg',
    delay: 200
  },
  {
    id: 4,
    title: 'HMI Interfaces',
    description: 'Intuitive human-machine interfaces for seamless operation.',
    image: 'https://picsum.photos/seed/hmi/400/300.jpg',
    delay: 300
  },
  {
    id: 5,
    title: 'Motion Control',
    description: 'Precision motion control systems for high-accuracy applications.',
    image: 'https://picsum.photos/seed/motion/400/300.jpg',
    delay: 400
  },
  {
    id: 6,
    title: 'Safety Systems',
    description: 'Comprehensive safety solutions for industrial environments.',
    image: 'https://picsum.photos/seed/safety/400/300.jpg',
    delay: 500
  },
  {
    id: 7,
    title: 'Network Solutions',
    description: 'Industrial networking infrastructure for reliable communication.',
    image: 'https://picsum.photos/seed/network/400/300.jpg',
    delay: 600
  },
  {
    id: 8,
    title: 'Energy Management',
    description: 'Smart energy management systems for optimized consumption.',
    image: 'https://picsum.photos/seed/energy/400/300.jpg',
    delay: 700
  }
]

// Partners data
const partners = [
  { name: 'Partner 1', logo: 'https://picsum.photos/seed/partner1/120/60.jpg' },
  { name: 'Partner 2', logo: 'https://picsum.photos/seed/partner2/120/60.jpg' },
  { name: 'Partner 3', logo: 'https://picsum.photos/seed/partner3/120/60.jpg' },
  { name: 'Partner 4', logo: 'https://picsum.photos/seed/partner4/120/60.jpg' },
  { name: 'Partner 5', logo: 'https://picsum.photos/seed/partner5/120/60.jpg' },
  { name: 'Partner 6', logo: 'https://picsum.photos/seed/partner6/120/60.jpg' }
]

// Events data
const events = [
  {
    id: 1,
    title: 'Automation Expo 2024',
    description: 'Join us at the biggest automation exhibition of the year.',
    image: 'https://picsum.photos/seed/event1/300/200.jpg',
    delay: 0
  },
  {
    id: 2,
    title: 'Tech Conference',
    description: 'Latest trends in industrial automation technology.',
    image: 'https://picsum.photos/seed/event2/300/200.jpg',
    delay: 100
  },
  {
    id: 3,
    title: 'Workshop Series',
    description: 'Hands-on training for automation professionals.',
    image: 'https://picsum.photos/seed/event3/300/200.jpg',
    delay: 200
  }
]

// Blogs data
const blogs = [
  {
    id: 1,
    title: 'Future of Automation',
    description: 'Exploring the latest trends in industrial automation.',
    image: 'https://picsum.photos/seed/blog1/300/200.jpg',
    delay: 0
  },
  {
    id: 2,
    title: 'AI in Manufacturing',
    description: 'How artificial intelligence is transforming manufacturing.',
    image: 'https://picsum.photos/seed/blog2/300/200.jpg',
    delay: 100
  },
  {
    id: 3,
    title: 'Sustainable Automation',
    description: 'Green solutions for industrial automation.',
    image: 'https://picsum.photos/seed/blog3/300/200.jpg',
    delay: 200
  }
]

// Contact info
const contactInfo = [
  {
    title: 'Our Location',
    info: '123 Automation Street, Tech City, TC 12345',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    delay: 0
  },
  {
    title: 'Phone Number',
    info: '+1 (234) 567-890',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    delay: 100
  },
  {
    title: 'Email Address',
    info: 'info@primeautomations.com',
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    delay: 200
  }
]

// Neural Network Animation
class NeuralNetwork {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.nodes = []
    this.connections = []
    this.mouseX = 0
    this.mouseY = 0
    this.init()
  }

  init() {
    this.resize()
    this.createNodes()
    this.createConnections()
    this.animate()
    
    window.addEventListener('resize', () => this.resize())
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    })
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createNodes() {
    const nodeCount = Math.floor((this.canvas.width * this.canvas.height) / 15000)
    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      })
    }
  }

  createConnections() {
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x
        const dy = this.nodes[i].y - this.nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          this.connections.push({
            node1: this.nodes[i],
            node2: this.nodes[j],
            distance: distance
          })
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
    // Update nodes
    this.nodes.forEach(node => {
      node.x += node.vx
      node.y += node.vy
      
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1
    })
    
    // Draw connections
    this.connections.forEach(connection => {
      const dx = connection.node1.x - connection.node2.x
      const dy = connection.node1.y - connection.node2.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 150) {
        const opacity = 1 - (distance / 150)
        this.ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.5})`
        this.ctx.lineWidth = 1
        this.ctx.beginPath()
        this.ctx.moveTo(connection.node1.x, connection.node1.y)
        this.ctx.lineTo(connection.node2.x, connection.node2.y)
        this.ctx.stroke()
      }
    })
    
    // Draw nodes
    this.nodes.forEach(node => {
      const mouseDistance = Math.sqrt(
        Math.pow(node.x - this.mouseX, 2) + 
        Math.pow(node.y - this.mouseY, 2)
      )
      
      const scale = mouseDistance < 100 ? 1 + (100 - mouseDistance) / 100 : 1
      
      this.ctx.fillStyle = '#10b981'
      this.ctx.beginPath()
      this.ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2)
      this.ctx.fill()
      
      // Glow effect
      this.ctx.shadowColor = '#10b981'
      this.ctx.shadowBlur = 10
      this.ctx.beginPath()
      this.ctx.arc(node.x, node.y, node.radius * scale * 0.5, 0, Math.PI * 2)
      this.ctx.fill()
      this.ctx.shadowBlur = 0
    })
    
    animationId = requestAnimationFrame(() => this.animate())
  }
}

// Carousel control
let carouselPaused = false

const pauseCarousel = () => {
  carouselPaused = true
  document.querySelector('.animate-marquee').style.animationPlayState = 'paused'
}

const resumeCarousel = () => {
  carouselPaused = false
  document.querySelector('.animate-marquee').style.animationPlayState = 'running'
}

// Form validation and submission
const validateForm = () => {
  errors.fullName = formData.fullName.trim().length < 2 ? 'Name must be at least 2 characters' : ''
  errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Please enter a valid email address' : ''
  errors.subject = formData.subject.trim().length < 5 ? 'Subject must be at least 5 characters' : ''
  errors.message = formData.message.trim().length < 10 ? 'Message must be at least 10 characters' : ''
  
  return !errors.fullName && !errors.email && !errors.subject && !errors.message
}

const submitForm = async () => {
  if (!validateForm() || !formData.agree) return
  
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  Object.keys(formData).forEach(key => {
    formData[key] = key === 'agree' ? false : ''
  })
  
  isSubmitting.value = false
}

onMounted(() => {
  // Initialize neural network
  if (neuralCanvas.value) {
    new NeuralNetwork(neuralCanvas.value)
  }
  
  // Start counters when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counterStore.startCounters()
        observer.unobserve(entry.target)
      }
    })
  })
  
  const milestonesSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4')
  if (milestonesSection) {
    observer.observe(milestonesSection)
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 0.6s both;
}
</style>