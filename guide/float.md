<h1 class="bd-title" id="content">Float</h1>

<p class="bd-lead">Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>

<h2>Overview</h2>

<p>These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS <code class="highlighter-rouge">float</code> property</a>. <code class="highlighter-rouge">!important</code> is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no affect on flex items.</p>

<h2>Classes</h2>

<p>Toggle a float with a class:</p>

<div class="zc-example">
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-left"</span><span class="nt">&gt;</span>Float left on all viewport sizes<span class="nt">&lt;/div&gt;&lt;br&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-right"</span><span class="nt">&gt;</span>Float right on all viewport sizes<span class="nt">&lt;/div&gt;&lt;br&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-none"</span><span class="nt">&gt;</span>Don't float on all viewport sizes<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<h2>Mixins</h2>

<p>Or by Sass mixin:</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="nc">.element</span> <span class="p">{</span>
  <span class="k">@include</span> <span class="nd">float-left</span><span class="p">;</span>
<span class="p">}</span>
<span class="nc">.another-element</span> <span class="p">{</span>
  <span class="k">@include</span> <span class="nd">float-right</span><span class="p">;</span>
<span class="p">}</span>
<span class="nc">.one-more</span> <span class="p">{</span>
  <span class="k">@include</span> <span class="nd">float-none</span><span class="p">;</span>
<span class="p">}</span></code></pre></figure>

<h2>Responsive</h2>

<p>Responsive variations also exist for each <code class="highlighter-rouge">float</code> value.</p>

<div class="zc-example">
<div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-sm-left"</span><span class="nt">&gt;</span>Float left on viewports sized SM (small) or wider<span class="nt">&lt;/div&gt;&lt;br&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-md-left"</span><span class="nt">&gt;</span>Float left on viewports sized MD (medium) or wider<span class="nt">&lt;/div&gt;&lt;br&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-lg-left"</span><span class="nt">&gt;</span>Float left on viewports sized LG (large) or wider<span class="nt">&lt;/div&gt;&lt;br&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"float-xl-left"</span><span class="nt">&gt;</span>Float left on viewports sized XL (extra-large) or wider<span class="nt">&lt;/div&gt;&lt;br&gt;</span></code></pre></figure>

<p>Here are all the support classes:</p>

<ul class="default">
<li><code class="highlighter-rouge">.float-left</code></li>
<li><code class="highlighter-rouge">.float-right</code></li>
<li><code class="highlighter-rouge">.float-none</code></li>
<li><code class="highlighter-rouge">.float-sm-left</code></li>
<li><code class="highlighter-rouge">.float-sm-right</code></li>
<li><code class="highlighter-rouge">.float-sm-none</code></li>
<li><code class="highlighter-rouge">.float-md-left</code></li>
<li><code class="highlighter-rouge">.float-md-right</code></li>
<li><code class="highlighter-rouge">.float-md-none</code></li>
<li><code class="highlighter-rouge">.float-lg-left</code></li>
<li><code class="highlighter-rouge">.float-lg-right</code></li>
<li><code class="highlighter-rouge">.float-lg-none</code></li>
<li><code class="highlighter-rouge">.float-xl-left</code></li>
<li><code class="highlighter-rouge">.float-xl-right</code></li>
<li><code class="highlighter-rouge">.float-xl-none</code></li>
</ul>
