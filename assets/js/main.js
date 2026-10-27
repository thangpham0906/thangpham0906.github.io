// Main JavaScript: Navigation & Theme Management
// Vanilla JS, zero dependencies, accessible

(function () {
  'use strict';

  var THEME_KEY = 'portfolio-theme';

  function getPreferredTheme() {
    var savedTheme = null;
    try {
      savedTheme = localStorage.getItem(THEME_KEY);
    } catch (e) {
      // LocalStorage access may be restricted
    }
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // Silently catch localStorage restrictions
    }
  }

  function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Setup DOM event handlers once loaded
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Theme Toggle Button
    var themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function () {
        toggleTheme();
      });
    }

    // 2. Mobile Navigation Drawer
    var mobileToggle = document.getElementById('mobile-nav-toggle');
    var mobileDrawer = document.getElementById('mobile-nav-drawer');

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', function () {
        var isOpen = mobileDrawer.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close mobile drawer when clicking a link inside it
      var drawerLinks = mobileDrawer.querySelectorAll('a');
      drawerLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          mobileDrawer.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // 3. Project Filter Tabs
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectItems = document.querySelectorAll('.project-item-wrapper');

    if (filterBtns.length > 0 && projectItems.length > 0) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetFilter = btn.getAttribute('data-filter');

          // Update active button state
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');

          // Show / hide project items
          projectItems.forEach(function (item) {
            var category = item.getAttribute('data-category');
            if (targetFilter === 'all' || category === targetFilter) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // 4. One-Click Copy Email to Clipboard
    var copyBtn = document.getElementById('copy-email-btn');
    var copyText = document.getElementById('copy-email-text');

    if (copyBtn && copyText) {
      copyBtn.addEventListener('click', function () {
        var email = copyBtn.getAttribute('data-email') || 'thangpham0906@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(function () {
            var originalText = copyText.textContent;
            copyText.textContent = 'Copied to clipboard! ✓';
            setTimeout(function () {
              copyText.textContent = originalText;
            }, 2000);
          }).catch(function () {
            window.location.href = 'mailto:' + email;
          });
        } else {
          window.location.href = 'mailto:' + email;
        }
      });
    }

    // 5. System Color Scheme Listener
    if (window.matchMedia) {
      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      var handleSystemThemeChange = function (event) {
        // TODO(human): Implement the system theme change policy.
        // Decide how the app should respond when the user's OS changes between dark and light modes.
        // Should it only change if the user has NOT saved an explicit preference in localStorage?
        // Or should it sync immediately? Write 3-6 lines to check the condition and call setTheme() or update the DOM.
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleSystemThemeChange);
      }
    }
  });
})();
