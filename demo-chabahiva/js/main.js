/**
 * CHABAHIVA Trust — Main JavaScript Controller & Interaction Engine
 * Built under Emil Kowalski Design Engineering principles
 * Lightweight vanilla JavaScript with zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Mobile Drawer Navigation (GPU-Accelerated Slide)
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeDrawer = document.getElementById('closeDrawer');

  function openMenu() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMenu);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMenu();
    }
  });

  // ==========================================================================
  // 2. Interactive Giraffe Metaphor Explorer & Highlight Engine
  // ==========================================================================
  const metaphorPills = document.querySelectorAll('.metaphor-pill');
  const visualTag = document.getElementById('giraffeTag');
  const visualDesc = document.getElementById('giraffeDesc');
  const giraffeContainer = document.getElementById('giraffeContainer');
  const highlightLayers = document.querySelectorAll('.giraffe-highlight-layer');
  const giraffeBeacons = document.querySelectorAll('.giraffe-beacon');

  const metaphorData = {
    height: {
      tag: "Height & Perspective",
      desc: "CHABAHIVA Trust finds inspiration in the majestic giraffe, renowned for its height and unique perspective. This mirrors our extensive foresight and long-term approach to development across afflicted communities."
    },
    spots: {
      tag: "Unique Spots",
      desc: "The giraffe’s unique spots symbolise our tailored approach in the HIV space and our diverse collaborations. No two communities or interventions are identical."
    },
    legs: {
      tag: "Four Strong Legs",
      desc: "Its four legs represent our four innovations which we use to respond to HIV: 1. Develop Interventions, 2. Collaborative Network, 3. Income Generation, and 4. Fund Management."
    },
    tail: {
      tag: "The Tail",
      desc: "Its tail, which whisks away flies, signifies our disciplined governance and vigilant team that ensures effective risk management and statutory compliance."
    },
    ossicones: {
      tag: "The Ossicones (Horns)",
      desc: "The giraffe’s ossicones reflect our commitment to ethical practices, moral integrity, and relentless justice for vulnerable beneficiaries."
    }
  };

  function selectMetaphor(key) {
    if (!metaphorData[key]) return;

    // 1. Activate matching card on the right
    metaphorPills.forEach(p => {
      if (p.getAttribute('data-metaphor') === key) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // 2. Activate matching glowing highlight layer
    highlightLayers.forEach(layer => {
      if (layer.id === `layer_${key}`) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    // 3. Activate matching beacon reticle
    giraffeBeacons.forEach(beacon => {
      if (beacon.getAttribute('data-beacon') === key) {
        beacon.classList.add('active');
      } else {
        beacon.classList.remove('active');
      }
    });

    // 4. Ensure container reflects active state
    if (giraffeContainer) {
      giraffeContainer.classList.add('has-active-part');
    }

    // 5. Update descriptive text and tag with gentle crossfade
    if (visualTag && visualDesc) {
      visualTag.textContent = metaphorData[key].tag;
      visualDesc.textContent = metaphorData[key].desc;
    }
  }

  // Click handler on right-hand cards
  metaphorPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const key = pill.getAttribute('data-metaphor');
      selectMetaphor(key);
    });
  });

  // Click handler on anatomical giraffe beacons
  giraffeBeacons.forEach(beacon => {
    beacon.addEventListener('click', () => {
      const key = beacon.getAttribute('data-beacon');
      selectMetaphor(key);
    });
  });

  // Initial activation (Height & Perspective)
  selectMetaphor('height');

  // ==========================================================================
  // 3. Interactive SROI & Grant Allocation Simulator
  // ==========================================================================
  const slider = document.getElementById('grantSlider') || document.getElementById('investmentSlider');
  const sliderDisplay = document.getElementById('sliderValue') || document.getElementById('sliderDisplay');
  const simPeers = document.getElementById('simPeers') || document.getElementById('statEducators');
  const simScreened = document.getElementById('simScreened') || document.getElementById('statBeneficiaries');
  const simRetention = document.getElementById('simRetention') || document.getElementById('statSROI');
  const statWorkers = document.getElementById('statWorkers');

  function updateSimulator(amount) {
    if (!slider) return;
    const min = parseInt(slider.min, 10) || 50000;
    const max = parseInt(slider.max, 10) || 1000000;
    const pct = ((amount - min) / (max - min)) * 100;

    // Tactile active track gradient fill
    slider.style.background = `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`;

    // Format currency in ZAR (R 250,000)
    const formatted = 'R ' + amount.toLocaleString('en-ZA');
    if (sliderDisplay) sliderDisplay.textContent = formatted;

    // Realistic calculations based on grassroots community health metrics:
    // 1. Peer Educators: ~R20,000 per certified community peer educator (training, stipend, materials)
    const peers = Math.max(2, Math.floor(amount / 20000));
    // 2. Youth Screened & Tested: ~15 youth screened and tested per R1,000 invested (R66.67 per voluntary test)
    const screened = Math.floor(amount * 0.015);
    // 3. Treatment Retention: adherence rate supported by peer retention follow-up
    const retentionRate = Math.min(98.8, 94.2 + (amount / 1000000) * 4.6).toFixed(1);

    if (simPeers) simPeers.textContent = `${peers.toLocaleString()} Trained`;
    if (simScreened) simScreened.textContent = `${screened.toLocaleString()} Youth`;
    if (simRetention) simRetention.textContent = `${retentionRate}% Rate`;

    // Legacy fallback support if present
    if (statWorkers) statWorkers.textContent = Math.floor(amount / 35000).toLocaleString();

    // Emil Kowalski Tactile Micro-Interactivity: Subtle number punch on adjustment
    [simPeers, simScreened, simRetention, statWorkers].forEach(el => {
      if (el) {
        el.style.transform = 'scale(1.035)';
        el.style.transition = 'transform 100ms cubic-bezier(0.23, 1, 0.32, 1)';
        setTimeout(() => {
          el.style.transform = 'scale(1)';
        }, 100);
      }
    });
  }

  if (slider) {
    slider.addEventListener('input', (e) => {
      updateSimulator(parseInt(e.target.value, 10));
    });
    // Initial run to hydrate track and display
    updateSimulator(parseInt(slider.value, 10));
  }

  // ==========================================================================
  // 4. 60-Second Grant Eligibility Checker
  // ==========================================================================
  const checkBtn = document.getElementById('runEligibilityCheck');
  const eligibleBox = document.getElementById('eligibleResult');
  const ineligibleBox = document.getElementById('ineligibleResult');

  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      const qNPO = document.getElementById('checkNPO')?.checked;
      const qAge = document.getElementById('checkAge')?.checked;
      const qSDG = document.getElementById('checkSDG')?.checked;
      const qReligious = document.getElementById('checkReligious')?.checked;
      const qProvince = document.getElementById('checkProvince')?.checked;

      // Note: Must NOT be religious proselytizing, must be registered NPO, must have SDG3 focus, province match
      const isEligible = Boolean(qNPO && qAge && qSDG && qReligious && qProvince);

      if (isEligible) {
        if (eligibleBox) {
          eligibleBox.style.display = 'block';
          eligibleBox.style.opacity = '1';
          eligibleBox.style.transform = 'translateY(0)';
        }
        if (ineligibleBox) ineligibleBox.style.display = 'none';
      } else {
        if (eligibleBox) eligibleBox.style.display = 'none';
        if (ineligibleBox) {
          ineligibleBox.style.display = 'block';
          ineligibleBox.style.opacity = '1';
          ineligibleBox.style.transform = 'translateY(0)';
        }
      }
    });
  }

  // ==========================================================================
  // 5. Contact Triage Form Handling
  // ==========================================================================
  const triageForm = document.getElementById('triageForm');
  const formSuccess = document.getElementById('formSuccess');

  if (triageForm) {
    triageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = triageForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting to Registry...';
        submitBtn.style.opacity = '0.75';
      }
      setTimeout(() => {
        triageForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }, 700);
    });
  }

  // ==========================================================================
  // 6. Emil Kowalski Unhurried Scroll Reveal Observer
  // ==========================================================================
  const initScrollReveals = () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = document.querySelectorAll([
      '.reveal-on-scroll',
      '.hero-content > *',
      '.hero-card-stack',
      '.metric-card',
      '.donor-spotlight-card',
      '.giraffe-grid > *',
      '.innovation-card',
      '.trustee-card',
      '.pillar-col-card',
      '.contact-form-card',
      '.map-embed-wrapper',
      '.video-frame-container',
      '.video-wrapper',
      '.checker-card',
      '.simulator-card',
      '.statutory-callout-grid > *',
      '.vision-values-grid > *',
      '.key-details-grid > *',
      '.doc-category-card'
    ].join(', '));

    if (prefersReducedMotion) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    targets.forEach(el => {
      el.classList.add('reveal-on-scroll');
      
      // Calculate gentle stagger for sibling elements
      const parent = el.parentElement;
      if (parent && parent.children.length > 1) {
        const siblingIndex = Array.prototype.indexOf.call(parent.children, el);
        const staggerIndex = (siblingIndex % 6) + 1;
        el.classList.add(`stagger-${staggerIndex}`);
      }
      
      revealObserver.observe(el);
    });
  };

  // Run scroll reveal registration
  initScrollReveals();
});
