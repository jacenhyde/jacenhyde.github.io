---
layout: default
title: Home
---

<!-- 💬 Intro text -->
<div class="text-start px-3">
  <p>Here is the 2nd most boring Static Screen you'll ever see.</p>
  <p>We have Exploits, Malware, Cookies and failed C2 Frameworks.</p>
  <p>Stay a while,</p>
</div>

<!-- 📜 Show recent posts -->
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p class="post-meta">
        {{ post.date | date: "%b %-d, %Y" }}
      </p>
    </li>
  {% endfor %}
</ul>
