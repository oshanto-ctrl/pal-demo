<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-prime-green to-deep-sea-green text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">About Prime Automations Limited</h1>
          <p class="text-xl opacity-90">Leading the Future of Industrial Automation</p>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Founded in 2009, Prime Automations Limited has emerged as a leader in the industrial automation sector. 
              With over a decade of experience, we have successfully delivered cutting-edge automation solutions to 
              industries across the globe.
            </p>
            <p class="text-gray-600 mb-4">
              Our journey began with a simple vision: to revolutionize industrial processes through innovative 
              automation technologies. Today, we stand proud as a trusted partner for businesses seeking to 
              enhance efficiency, productivity, and safety.
            </p>
            <p class="text-gray-600">
              From small-scale manufacturing units to large industrial complexes, our solutions have transformed 
              operations, reduced costs, and improved quality standards across various sectors.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="https://picsum.photos/seed/factory/600/400.jpg" alt="Our Factory" class="rounded-lg shadow-xl">
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
            <div class="w-16 h-16 bg-prime-green rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
            <p class="text-gray-600">
              To deliver innovative, reliable, and cost-effective automation solutions that empower businesses 
              to achieve operational excellence, enhance productivity, and maintain competitive advantage in 
              the global marketplace.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-prime-green rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
            <p class="text-gray-600">
              To be the global leader in industrial automation, driving technological innovation and setting 
              new standards for excellence. We envision a future where smart automation solutions create 
              safer, more efficient, and sustainable industrial environments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">The principles that guide our actions and decisions every day.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in coreValues" :key="value.title" 
               class="text-center" data-aos="fade-up" :data-aos-delay="value.delay">
            <div class="w-20 h-20 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :stroke-linecap="round" :stroke-linejoin="round" stroke-width="2" :d="value.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Meet the experienced professionals leading our organization.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in teamMembers" :key="member.name" 
               class="bg-white rounded-lg shadow-lg overflow-hidden card-hover" data-aos="fade-up" :data-aos-delay="member.delay">
            <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover">
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-1">{{ member.name }}</h3>
              <p class="text-prime-green font-medium mb-2">{{ member.position }}</p>
              <p class="text-gray-600 text-sm">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Recognitions and milestones that mark our journey of excellence.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="achievement in achievements" :key="achievement.title" 
               class="bg-gray-50 p-6 rounded-lg shadow-lg" data-aos="fade-up" :data-aos-delay="achievement.delay">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-prime-green rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold">{{ achievement.title }}</h3>
            </div>
            <p class="text-gray-600">{{ achievement.description }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ achievement.year }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-prime-green to-deep-sea-green text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p class="text-xl mb-8 opacity-90">Let's discuss how our automation solutions can help you achieve your goals.</p>
        <router-link to="/contact" class="btn-primary bg-white text-prime-green hover:bg-gray-100">
          Get Started Today
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const coreValues = [
  {
    title: 'Innovation',
    description: 'Continuously pushing boundaries and embracing new technologies.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    delay: 0
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency and ethical business practices.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    delay: 100
  },
  {
    title: 'Excellence',
    description: 'Delivering superior quality in everything we do.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    delay: 200
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve shared success.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    delay: 300
  }
]

const teamMembers = [
  {
    name: 'John Smith',
    position: 'Chief Executive Officer',
    bio: '20+ years in automation industry',
    image: 'https://picsum.photos/seed/ceo2/300/300.jpg',
    delay: 0
  },
  {
    name: 'Sarah Johnson',
    position: 'Chief Technology Officer',
    bio: 'Expert in industrial AI and IoT',
    image: 'https://picsum.photos/seed/cto/300/300.jpg',
    delay: 100
  },
  {
    name: 'Michael Chen',
    position: 'Chief Operations Officer',
    bio: 'Operations and supply chain specialist',
    image: 'https://picsum.photos/seed/coo/300/300.jpg',
    delay: 200
  },
  {
    name: 'Emily Davis',
    position: 'Chief Financial Officer',
    bio: 'Financial strategy and planning expert',
    image: 'https://picsum.photos/seed/cfo/300/300.jpg',
    delay: 300
  }
]

const achievements = [
  {
    title: 'ISO 9001:2015 Certification',
    description: 'Achieved international quality management standard certification.',
    year: '2020'
  },
  {
    title: 'Industry Innovation Award',
    description: 'Recognized for breakthrough automation solutions.',
    year: '2021'
  },
  {
    title: 'Best Workplace Certification',
    description: 'Certified as an excellent workplace by industry standards.',
    year: '2022'
  },
  {
    title: 'Green Technology Award',
    description: 'Awarded for sustainable automation solutions.',
    year: '2023'
  },
  {
    title: 'Global Expansion',
    description: 'Successfully expanded operations to 15 countries.',
    year: '2022'
  },
  {
    title: 'R&D Center Establishment',
    description: 'Opened state-of-the-art research and development facility.',
    year: '2021'
  }
]

onMounted(() => {
  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.refresh()
  }
})
</script>