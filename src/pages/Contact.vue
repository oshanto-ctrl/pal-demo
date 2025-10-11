<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p class="text-xl opacity-90">Get in Touch with Our Expert Team</p>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">We're here to help you with all your automation needs. Reach out to us through any of the following channels.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="contact in contactInfo" :key="contact.title" 
               class="text-center" data-aos="fade-up" :data-aos-delay="contact.delay">
            <div class="w-20 h-20 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="contact.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ contact.title }}</h3>
            <p class="text-gray-600">{{ contact.info }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
            <p class="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
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
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    v-model="formData.phone" 
                    type="tel" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  >
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Company</label>
                  <input 
                    v-model="formData.company" 
                    type="text" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                  >
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
                <label class="block text-gray-700 font-semibold mb-2">Service Interest</label>
                <select 
                  v-model="formData.service" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-green"
                >
                  <option value="">Select a service</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
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
              
              <div class="mb-6">
                <label class="flex items-center">
                  <input 
                    v-model="formData.newsletter" 
                    type="checkbox" 
                    class="mr-2 w-4 h-4 text-prime-green border-gray-300 rounded focus:ring-prime-green"
                  >
                  <span class="text-gray-700">I would like to receive newsletter and updates</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                class="btn-primary w-full"
                :disabled="!formData.agree || isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Office Locations</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Visit us at any of our global offices or connect with our local teams.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="office in offices" :key="office.city" 
               class="bg-gray-50 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" :data-aos-delay="office.delay">
            <img :src="office.image" :alt="office.city" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4">{{ office.city }} Office</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-prime-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-600">{{ office.address }}</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-prime-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a :href="`tel:${office.phone}`" class="text-gray-600 hover:text-prime-green transition-colors">
                    {{ office.phone }}
                  </a>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-prime-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a :href="`mailto:${office.email}`" class="text-gray-600 hover:text-prime-green transition-colors">
                    {{ office.email }}
                  </a>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                  <strong>Hours:</strong> {{ office.hours }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services and solutions.</p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="faq in faqs" :key="faq.question" 
               class="bg-white rounded-lg shadow-md" data-aos="fade-up" :data-aos-delay="faq.delay">
            <button 
              @click="toggleFAQ(faq.id)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold">{{ faq.question }}</span>
              <svg 
                class="w-5 h-5 text-prime-green transform transition-transform"
                :class="{ 'rotate-180': faq.open }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-show="faq.open" class="px-6 pb-4">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Find Us on the Map</h2>
          <p class="text-gray-600">Our headquarters and major office locations around the world.</p>
        </div>
        
        <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center" data-aos="fade-up">
          <div class="text-center">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            <p class="text-gray-500">Interactive Map</p>
            <p class="text-gray-400 text-sm">Map integration would be implemented here</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-xl mb-8 opacity-90">Let's discuss how we can help transform your business with our automation solutions.</p>
        <button class="btn-primary bg-white text-prime-green hover:bg-gray-100">
          Schedule a Consultation
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

const formData = reactive({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  service: '',
  agree: false,
  newsletter: false
})

const errors = reactive({})
const isSubmitting = ref(false)

const contactInfo = [
  {
    title: 'Headquarters',
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

const services = [
  'Industrial Automation',
  'PLC Systems',
  'SCADA Solutions',
  'Robotics Integration',
  'Custom Software Development',
  'Consulting Services',
  'Maintenance & Support',
  'Training & Education'
]

const offices = [
  {
    city: 'New York',
    address: '123 Automation Street, Tech City, TC 12345',
    phone: '+1 (234) 567-890',
    email: 'ny@primeautomations.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    image: 'https://picsum.photos/seed/newyork/400/300.jpg',
    delay: 0
  },
  {
    city: 'London',
    address: '456 Innovation Lane, London, UK',
    phone: '+44 20 7946 0958',
    email: 'london@primeautomations.com',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    image: 'https://picsum.photos/seed/london/400/300.jpg',
    delay: 100
  },
  {
    city: 'Tokyo',
    address: '789 Tech Park, Tokyo, Japan',
    phone: '+81 3-1234-5678',
    email: 'tokyo@primeautomations.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    image: 'https://picsum.photos/seed/tokyo/400/300.jpg',
    delay: 200
  }
]

const faqs = [
  {
    id: 1,
    question: 'What types of automation solutions do you offer?',
    answer: 'We offer a comprehensive range of automation solutions including PLC systems, SCADA platforms, industrial robotics, motion control systems, safety systems, and custom software development.',
    open: false,
    delay: 0
  },
  {
    id: 2,
    question: 'How long does a typical automation project take?',
    answer: 'Project timelines vary depending on complexity and scope. Simple projects may take 2-3 months, while complex enterprise solutions can take 6-12 months or more.',
    open: false,
    delay: 100
  },
  {
    id: 3,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages including 24/7 technical support, regular system updates, preventive maintenance, and emergency response services.',
    open: false,
    delay: 200
  },
  {
    id: 4,
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including manufacturing, automotive, food and beverage, pharmaceuticals, energy, logistics, and many more.',
    open: false,
    delay: 300
  },
  {
    id: 5,
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Simply contact us through our website, email, or phone. We\'ll schedule an initial consultation to understand your needs and provide a customized solution proposal.',
    open: false,
    delay: 400
  }
]

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
    formData[key] = key === 'agree' || key === 'newsletter' ? false : ''
  })
  
  isSubmitting.value = false
}

const toggleFAQ = (id) => {
  const faq = faqs.find(f => f.id === id)
  if (faq) {
    faq.open = !faq.open
  }
}

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})
</script>