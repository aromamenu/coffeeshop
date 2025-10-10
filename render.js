// render.js
import { MENU } from './menu.js';

const menuGrid = document.getElementById('menuGrid');
const tabs = document.querySelectorAll('.tab');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchBtn = document.getElementById('searchBtn'); // optional mobile button

let activeTab = null;

// Price template
const priceTemplate = (val = '', isDessert = false) => 
  `<span class="price-pill">${val ? (isDessert ? '$' : '') + val : '—'}</span>`;

// Create menu card
function createMenuCard(item, isFullWidth = false) {
  const card = document.createElement('div');
  card.className = `
    menu-item-card p-4 border border-[color:rgba(107,79,58,0.12)]
    rounded-2xl flex flex-col gap-3 ${isFullWidth ? 'w-full' : ''}
  `;

  if (activeTab === 'desserts') {
    // Desserts: Arabic + English + price with $
    card.innerHTML = `
      <div class="item-name font-semibold text-lg">${item.name_ar}</div>
      <div class="text-sm text-[color:rgba(81,60,45,0.7)]">${item.name_en}</div>
      <div class="text-[color:rgba(81,60,45,0.6)] text-sm break-words">${priceTemplate(item.price, true)}</div>
    `;
  } else {
    // Other tabs: include image if available
    const imgHTML = item.img
      ? `<div class="img-container rounded-xl overflow-hidden h-48 sm:h-56">
           <img class="img-cover w-full h-full object-cover" src="${item.img}" alt="${item.ar || item.en}" 
                onerror="this.src='https://via.placeholder.com/500x500?text=No+Image';">
         </div>`
      : '';

    card.innerHTML = `
      ${imgHTML}
      <div class="item-name font-semibold text-lg">${item.ar || item.name}</div>
      ${item.en ? `<div class="text-sm text-[color:rgba(81,60,45,0.7)] text-center">${item.en}</div>` : ''}
      ${priceTemplate(item.price)}
    `;
  }

  menuGrid.appendChild(card);
}

// Render menu
export function renderMenu() {
  menuGrid.innerHTML = '';
  const query = (searchInput?.value || '').trim().toLowerCase();
  let items = [];

  if (query) {
    const allItems = Object.values(MENU).flatMap(tab => tab);
    items = allItems.filter(it =>
      (it.en || it.name || '').toLowerCase().includes(query) ||
      (it.ar || '').toLowerCase().includes(query)
    );
  } else if (activeTab) {
    items = MENU[activeTab] || [];
  } else return;

  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'text-center text-[color:rgba(81,60,45,0.7)] py-6 col-span-full';
    empty.textContent = query ? 'No results found.' : 'No items.';
    menuGrid.appendChild(empty);
    return;
  }

  // Desserts section
  if (activeTab === 'desserts') {
    items.forEach(category => {
      const title = document.createElement('div');
      title.className = 'text-2xl sm:text-3xl font-bold my-4 col-span-full flex flex-col items-center';

      if (category.img) {
        const catImg = document.createElement('img');
        catImg.src = category.img;
        catImg.alt = category.category_en;
        catImg.className = 'w-64 h-64 object-cover rounded-xl mb-2';
        title.appendChild(catImg);
      }

      const catText = document.createElement('div');
      catText.textContent = category.category_ar + ' / ' + category.category_en;
      title.appendChild(catText);

      menuGrid.appendChild(title);

      // Render dessert items without images
      category.items.forEach(item => createMenuCard(item, true));
    });

    // Scroll to first dessert category
    const firstCategory = menuGrid.querySelector('div.text-2xl');
    if (firstCategory) firstCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return;
  }

  // Other tabs: cold drinks grouped by category
  if (activeTab === 'cold') {
    const categories = [...new Set(items.map(i => i.category))];
    categories.forEach(cat => {
      const title = document.createElement('div');
      title.className = 'text-2xl sm:text-3xl font-bold my-4 col-span-full';
      title.textContent = cat;
      menuGrid.appendChild(title);

      const catItems = items.filter(i => i.category === cat);
      catItems.forEach(item => createMenuCard(item));
    });
  } else {
    items.forEach(item => createMenuCard(item));
  }

  if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !query);

  // Scroll to top of menuGrid for non-desserts
  if (activeTab !== 'desserts' && menuGrid.firstChild) {
    menuGrid.firstChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Render tabs
export function renderTabs() {
  tabs.forEach(btn => {
    const isActive = btn.dataset.tab === activeTab;
    btn.classList.toggle('tab-active', isActive);
    btn.classList.toggle('tab-inactive', !isActive);
  });
}

// Initialize tabs and search
export function initTabs() {
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = activeTab === btn.dataset.tab ? null : btn.dataset.tab;
      renderTabs();
      renderMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === 'Go') renderMenu();
    });
  }

  if (searchBtn) searchBtn.addEventListener('click', renderMenu);

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      renderMenu();
    });
  }
}

// Optional slider
const track = document.getElementById('sliderTrack');
if (track) {
  const slides = track.children;
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
}
