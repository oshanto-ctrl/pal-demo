import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counters: {
      years: 0,
      clients: 0,
      partners: 0,
      products: 0
    }
  }),
  actions: {
    animateCounter(target, key, duration = 2000) {
      const start = 0
      const increment = target / (duration / 16)
      let current = start
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          this.counters[key] = target
          clearInterval(timer)
        } else {
          this.counters[key] = Math.floor(current)
        }
      }, 16)
    },
    
    startCounters() {
      this.animateCounter(15, 'years')
      this.animateCounter(500, 'clients')
      this.animateCounter(100, 'partners')
      this.animateCounter(50, 'products')
    }
  }
})