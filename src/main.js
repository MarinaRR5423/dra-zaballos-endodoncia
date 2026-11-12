import './style.css'
import './redesign.css'

const navToggle = document.querySelector('#nav-toggle')
const mainNav = document.querySelector('#main-nav')

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open')
  navToggle.setAttribute('aria-expanded', String(isOpen))
})

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open')
    navToggle.setAttribute('aria-expanded', 'false')
  })
})

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el))

document.querySelector('#year').textContent = new Date().getFullYear()
