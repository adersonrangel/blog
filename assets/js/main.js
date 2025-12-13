// ============================================
// NOMOD JEKYLL THEME - JavaScript
// ============================================

(function() {
  'use strict';

  // ============================================
  // Theme Toggle
  // ============================================
  const themeToggles = document.querySelectorAll('[data-theme-toggle]');
  const html = document.documentElement;
  
  // Get saved theme or system preference
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Set theme
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle icons
    document.querySelectorAll('.icon-sun, .theme-label-dark').forEach(el => {
      el.style.display = theme === 'dark' ? 'none' : 'block';
    });
    document.querySelectorAll('.icon-moon, .theme-label-light').forEach(el => {
      el.style.display = theme === 'dark' ? 'block' : 'none';
    });
  }
  
  // Initialize theme
  setTheme(getPreferredTheme());
  
  // Toggle theme on click
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  });

  // ============================================
  // Search Modal
  // ============================================
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchOpenBtns = document.querySelectorAll('[data-search-open]');
  const searchCloseBtns = document.querySelectorAll('[data-search-close]');
  const heroSearch = document.getElementById('hero-search');
  
  function openSearch() {
    searchModal.classList.add('is-open');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  }
  
  function closeSearch() {
    searchModal.classList.remove('is-open');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
  }
  
  searchOpenBtns.forEach(btn => {
    btn.addEventListener('click', openSearch);
  });
  
  searchCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeSearch);
  });
  
  // Hero search opens modal
  if (heroSearch) {
    heroSearch.addEventListener('focus', () => {
      openSearch();
      heroSearch.blur();
    });
  }
  
  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('is-open')) {
      closeSearch();
    }
  });
  
  // Close on backdrop click
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      closeSearch();
    }
  });
  
  // Search functionality
  if (searchInput && window.searchData) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      const results = window.searchData.filter(post => {
        return post.title.toLowerCase().includes(query) ||
               post.excerpt.toLowerCase().includes(query) ||
               (post.category && post.category.toLowerCase().includes(query));
      });
      
      if (results.length === 0) {
        searchResults.innerHTML = '<p class="text-center text-secondary" style="padding: 2rem;">No results found</p>';
        return;
      }
      
      searchResults.innerHTML = results.map(post => `
        <a href="${post.url}" class="search-result-item">
          <h4>${post.title}</h4>
          <p>${post.excerpt}</p>
        </a>
      `).join('');
    });
  }

  // ============================================
  // Mobile Menu
  // ============================================
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenBtns = document.querySelectorAll('[data-menu-open]');
  const menuCloseBtns = document.querySelectorAll('[data-menu-close]');
  
  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  menuOpenBtns.forEach(btn => {
    btn.addEventListener('click', openMenu);
  });
  
  menuCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });

  // ============================================
  // Back to Top
  // ============================================
  const backToTop = document.querySelectorAll('[data-back-to-top]');
  
  backToTop.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  function reveal() {
    revealElements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('revealed');
      }
    });
  }
  
  // Initial check
  reveal();
  
  // Throttled scroll handler
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        reveal();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ============================================
  // Header Scroll Effect
  // ============================================
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ============================================
  // Load More Posts (if implemented)
  // ============================================
  const loadMoreBtn = document.getElementById('load-more');
  const postsGrid = document.getElementById('posts-grid');
  
  if (loadMoreBtn && postsGrid) {
    let currentPage = 1;
    const postsPerPage = 6;
    
    loadMoreBtn.addEventListener('click', () => {
      // This would typically make an AJAX request
      // For a static site, you might paginate differently
      // or use JavaScript to show/hide pre-rendered posts
      loadMoreBtn.textContent = 'Loading...';
      
      setTimeout(() => {
        loadMoreBtn.textContent = 'No more posts';
        loadMoreBtn.disabled = true;
      }, 500);
    });
  }

  // ============================================
  // Keyboard Navigation
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Open search with Cmd/Ctrl + K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

})();
