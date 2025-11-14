---
layout: default
title: "random yapping"
---

# Welcome

test test test

Last update: 20251115

## Blog Posts

{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p><small>{{ post.date | date: "%Y-%m-%d" }}</small></p>
  {% if post.categories.size > 0 %}
    <p><small>Categories: {{ post.categories | join: ", " }}</small></p>
  {% endif %}
{% endfor %}
