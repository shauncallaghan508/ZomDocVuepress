<h1 class="bd-title" id="content">Sizing</h1>

  <p class="bd-lead">Easily make an element as wide or as tall (relative to its parent) with our width and height utilities.</p>

  <p>Width and height utilities are generated from the <code class="highlighter-rouge">$sizes</code> Sass map in <code class="highlighter-rouge">_variables.scss</code>. Includes support for <code class="highlighter-rouge">25%</code>, <code class="highlighter-rouge">50%</code>, <code class="highlighter-rouge">75%</code>, <code class="highlighter-rouge">100%</code>, and <code class="highlighter-rouge">auto</code> by default. Modify those values as you need to generate different utilities here.</p>

<div class="zc-example">
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-25 p-3"</span> <span class="na">style=</span><span class="s">"background-color: #eee;"</span><span class="nt">&gt;</span>Width 25%<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-50 p-3"</span> <span class="na">style=</span><span class="s">"background-color: #eee;"</span><span class="nt">&gt;</span>Width 50%<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-75 p-3"</span> <span class="na">style=</span><span class="s">"background-color: #eee;"</span><span class="nt">&gt;</span>Width 75%<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-100 p-3"</span> <span class="na">style=</span><span class="s">"background-color: #eee;"</span><span class="nt">&gt;</span>Width 100%<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-auto p-3"</span> <span class="na">style=</span><span class="s">"background-color: #eee;"</span><span class="nt">&gt;</span>Width auto<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<div class="zc-example">
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
<div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
<div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
<div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
<div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
<div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">style=</span><span class="s">"height: 100px; background-color: rgba(255,0,0,0.1);"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"h-25 d-inline-block"</span> <span class="na">style=</span><span class="s">"width: 120px; background-color: rgba(0,0,255,.1)"</span><span class="nt">&gt;</span>Height 25%<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"h-50 d-inline-block"</span> <span class="na">style=</span><span class="s">"width: 120px; background-color: rgba(0,0,255,.1)"</span><span class="nt">&gt;</span>Height 50%<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"h-75 d-inline-block"</span> <span class="na">style=</span><span class="s">"width: 120px; background-color: rgba(0,0,255,.1)"</span><span class="nt">&gt;</span>Height 75%<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"h-100 d-inline-block"</span> <span class="na">style=</span><span class="s">"width: 120px; background-color: rgba(0,0,255,.1)"</span><span class="nt">&gt;</span>Height 100%<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"h-auto d-inline-block"</span> <span class="na">style=</span><span class="s">"width: 120px; background-color: rgba(0,0,255,.1)"</span><span class="nt">&gt;</span>Height auto<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<p>You can also use <code class="highlighter-rouge">max-width: 100%;</code> and <code class="highlighter-rouge">max-height: 100%;</code> utilities as needed.</p>

<div class="zc-example">
<img class="mw-100" data-src="holder.js/1000px100?text=Max-width%20%3D%20100%25" alt="Max-width = 100% [1000%x100]" style="height: 100px; width: 1000%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22723%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20723%20100%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1665f2362f4%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A36pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1665f2362f4%22%3E%3Crect%20width%3D%22723%22%20height%3D%22100%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22163.40625%22%20y%3D%2266.5%22%3EMax-width%20%3D%20100%25%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;img</span> <span class="na">class=</span><span class="s">"mw-100"</span> <span class="na">src=</span><span class="s">".../1000px100?text=Max-width%20%3D%20100%25"</span> <span class="na">alt=</span><span class="s">"Max-width 100%"</span><span class="nt">&gt;</span></code></pre></figure>

<div class="zc-example">
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
<div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">style=</span><span class="s">"height: 100px; background-color: rgba(255,0,0,0.1);"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"mh-100"</span> <span class="na">style=</span><span class="s">"width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);"</span><span class="nt">&gt;</span>Max-height 100%<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
