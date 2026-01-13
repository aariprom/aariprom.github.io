---
layout: default
title: Archive
permalink: /archive/
---

<div class="archive-page">
  <header class="archive-header animate-in" style="--delay: 0">
    <h1 class="archive-title">Archive</h1>
    <p class="archive-description">All posts, chronologically.</p>
  </header>
  
  <div class="archive-list">
    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="archive-item animate-in" style="--delay: {{ forloop.index }}">
      <span class="archive-item-date">{{ post.date | date: "%Y.%m.%d" }}</span>
      <span class="archive-item-title">{{ post.title }}</span>
    </a>
    {% endfor %}
  </div>
</div>
