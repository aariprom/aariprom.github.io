---
layout: default
title: Categories
permalink: /categories/
---

<div class="categories-page">
  <header class="categories-header animate-in" style="--delay: 0">
    <h1 class="categories-title">Categories</h1>
    <p class="categories-description">Posts organized by topic. Click to expand.</p>
  </header>
  
  {% assign categories = site.categories | sort %}
  
  <div class="categories-grid">
    {% for category in categories %}
    <div class="category-section animate-in" style="--delay: {{ forloop.index }}">
      <button class="category-header" onclick="toggleCategory(this)" aria-expanded="false">
        <div class="category-header-left">
          <svg class="category-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
          <h2 class="category-name">{{ category[0] }}</h2>
        </div>
        <span class="category-count">{{ category[1].size }} post{% if category[1].size != 1 %}s{% endif %}</span>
      </button>
      <div class="category-posts collapsed">
        {% for post in category[1] %}
        <a href="{{ post.url | relative_url }}" class="category-post-item">
          <span class="category-post-date">{{ post.date | date: "%Y.%m.%d" }}</span>
          <span class="category-post-title">{{ post.title }}</span>
        </a>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<script>
function toggleCategory(button) {
  const section = button.parentElement;
  const posts = section.querySelector('.category-posts');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  
  button.setAttribute('aria-expanded', !isExpanded);
  posts.classList.toggle('collapsed');
  section.classList.toggle('expanded');
}

// Expand all categories that have few posts by default (optional)
document.addEventListener('DOMContentLoaded', () => {
  // Uncomment below to auto-expand categories with <= 2 posts
  // document.querySelectorAll('.category-section').forEach(section => {
  //   const count = section.querySelectorAll('.category-post-item').length;
  //   if (count <= 2) {
  //     section.querySelector('.category-header').click();
  //   }
  // });
});
</script>
