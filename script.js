// Smooth scrolling functions
function scrollToCalculator() {
  document.getElementById('calculator').scrollIntoView({
    behavior: 'smooth',
  });
}

function scrollToAbout() {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth',
  });
}

function scrollToCommunity() {
  document.getElementById('community').scrollIntoView({
    behavior: 'smooth',
  });
}

// Hypotenuse Calculator
function calculateHypotenuse() {
  const sideA = parseFloat(document.getElementById('side-a').value);
  const sideB = parseFloat(document.getElementById('side-b').value);

  // Validate inputs
  if (!sideA || !sideB || sideA <= 0 || sideB <= 0) {
    showError('Please enter valid positive numbers for both sides.');
    return;
  }

  // Calculate hypotenuse using Pythagorean theorem: c = √(a² + b²)
  const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);

  // Calculate angle θ (in radians, then convert to degrees)
  const angleRadians = Math.atan(sideB / sideA);
  const angleDegrees = (angleRadians * 180) / Math.PI;

  // Calculate area: A = (a × b) / 2
  const area = (sideA * sideB) / 2;

  // Display results
  document.getElementById('hypotenuse-result').textContent =
    hypotenuse.toFixed(4);
  document.getElementById('angle-result').textContent =
    angleDegrees.toFixed(2) + '°';
  document.getElementById('area-result').textContent = area.toFixed(4);

  // Add success animation
  showSuccess();

  // Update the visual triangle
  updateTriangleVisual(sideA, sideB, hypotenuse);
}

// Show error message
function showError(message) {
  const results = document.getElementById('results');
  results.innerHTML = `
    <div class="error-message" style="
      background: #FEE2E2;
      color: #DC2626;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid #FCA5A5;
      text-align: center;
      font-weight: 600;
    ">
      ${message}
    </div>
  `;

  // Reset after 3 seconds
  setTimeout(() => {
    resetResults();
  }, 3000);
}

// Show success animation
function showSuccess() {
  const results = document.getElementById('results');
  results.style.animation = 'successPulse 0.5s ease-in-out';

  setTimeout(() => {
    results.style.animation = '';
  }, 500);
}

// Reset results to default state
function resetResults() {
  document.getElementById('results').innerHTML = `
    <div class="result-item">
      <span class="result-label">Hypotenuse (C):</span>
      <span class="result-value" id="hypotenuse-result">-</span>
    </div>
    <div class="result-item">
      <span class="result-label">Angle θ:</span>
      <span class="result-value" id="angle-result">-</span>
    </div>
    <div class="result-item">
      <span class="result-label">Area:</span>
      <span class="result-value" id="area-result">-</span>
    </div>
  `;
}

// Update triangle visual (placeholder for future enhancement)
function updateTriangleVisual(sideA, sideB, hypotenuse) {
  // This could be enhanced to show a dynamic triangle
  console.log(`Triangle updated: A=${sideA}, B=${sideB}, C=${hypotenuse}`);
}

// Add CSS for success animation
const style = document.createElement('style');
style.textContent = `
  @keyframes successPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  
  .error-message {
    animation: shake 0.5s ease-in-out;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

// Add input validation
document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('input[type="number"]');

  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      // Remove any non-numeric characters except decimal point
      this.value = this.value.replace(/[^0-9.]/g, '');

      // Ensure only one decimal point
      const parts = this.value.split('.');
      if (parts.length > 2) {
        this.value = parts[0] + '.' + parts.slice(1).join('');
      }
    });

    // Clear results when user starts typing
    input.addEventListener('keyup', function () {
      if (this.value === '') {
        resetResults();
      }
    });
  });
});

// Add some fun animations for the hippopotenuse image
function addImageInteractions() {
  const image = document.querySelector('.hippopotenuse-image');
  
  if (image) {
    image.addEventListener('click', function () {
      // Add a fun bounce effect
      this.style.animation = 'imageBounce 0.6s ease-in-out';
      setTimeout(() => {
        this.style.animation = 'float 6s ease-in-out infinite';
      }, 600);
    });
  }
}

// Add bounce animation for image
const imageBounceStyle = document.createElement('style');
imageBounceStyle.textContent = `
  @keyframes imageBounce {
    0%, 20%, 50%, 80%, 100% { transform: scale(1); }
    40% { transform: scale(1.1); }
    60% { transform: scale(1.05); }
  }
`;
document.head.appendChild(imageBounceStyle);

// Initialize image interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  addImageInteractions();

  // Add some fun easter eggs
  let clickCount = 0;
  const title = document.querySelector('.title-main');

  if (title) {
    title.addEventListener('click', function () {
      clickCount++;
      if (clickCount === 5) {
        this.textContent = '🦛 HIPPOPOTENUSE 🦛';
        setTimeout(() => {
          this.textContent = 'HIPPOPOTENUSE';
          clickCount = 0;
        }, 2000);
      }
    });
  }
});

// Add parallax effect for the stars
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const stars = document.querySelector('.stars');
  const twinkling = document.querySelector('.twinkling');

  if (stars && twinkling) {
    stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Add smooth reveal animations for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
  // Ctrl/Cmd + K to focus calculator
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('side-a').focus();
  }

  // Enter key in calculator inputs
  if (
    e.key === 'Enter' &&
    (e.target.id === 'side-a' || e.target.id === 'side-b')
  ) {
    calculateHypotenuse();
  }
});

// Add tooltips for better UX
function addTooltips() {
  const calculatorCard = document.querySelector('.calculator-card');
  if (calculatorCard) {
    calculatorCard.setAttribute(
      'title',
      'Try entering 3 and 4 to see the classic 3-4-5 triangle!'
    );
  }
}

document.addEventListener('DOMContentLoaded', addTooltips);
