<h1 class="bd-title" id="content">Spacing</h1>

<p class="bd-lead">ZomCSS includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>

<h2>How it works</h2>

<p>Assign responsive-friendly <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from <code class="highlighter-rouge">.25rem</code> to <code class="highlighter-rouge">3rem</code>.</p>

<h2>Notation</h2>

<p>Spacing utilities that apply to all breakpoints, from <code class="highlighter-rouge">xs</code> to <code class="highlighter-rouge">xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code class="highlighter-rouge">min-width: 0</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>

<p>The classes are named using the format <code class="highlighter-rouge">{property}{sides}-{size}</code> for <code class="highlighter-rouge">xs</code> and <code class="highlighter-rouge">{property}{sides}-{breakpoint}-{size}</code> for <code class="highlighter-rouge">sm</code>, <code class="highlighter-rouge">md</code>, <code class="highlighter-rouge">lg</code>, and <code class="highlighter-rouge">xl</code>.</p>

<p>Where <em>property</em> is one of:</p>

<ul class="default">
<li><code class="highlighter-rouge">m</code> - for classes that set <code class="highlighter-rouge">margin</code></li>
<li><code class="highlighter-rouge">p</code> - for classes that set <code class="highlighter-rouge">padding</code></li>
</ul>

<p>Where <em>sides</em> is one of:</p>

<ul class="default">
<li><code class="highlighter-rouge">t</code> - for classes that set <code class="highlighter-rouge">margin-top</code> or <code class="highlighter-rouge">padding-top</code></li>
<li><code class="highlighter-rouge">b</code> - for classes that set <code class="highlighter-rouge">margin-bottom</code> or <code class="highlighter-rouge">padding-bottom</code></li>
<li><code class="highlighter-rouge">l</code> - for classes that set <code class="highlighter-rouge">margin-left</code> or <code class="highlighter-rouge">padding-left</code></li>
<li><code class="highlighter-rouge">r</code> - for classes that set <code class="highlighter-rouge">margin-right</code> or <code class="highlighter-rouge">padding-right</code></li>
<li><code class="highlighter-rouge">x</code> - for classes that set both <code class="highlighter-rouge">*-left</code> and <code class="highlighter-rouge">*-right</code></li>
<li><code class="highlighter-rouge">y</code> - for classes that set both <code class="highlighter-rouge">*-top</code> and <code class="highlighter-rouge">*-bottom</code></li>
<li>blank - for classes that set a <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> on all 4 sides of the element</li>
</ul>

<p>Where <em>size</em> is one of:</p>

<ul class="default">
<li><code class="highlighter-rouge">0</code> - for classes that eliminate the <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> by setting it to <code class="highlighter-rouge">0</code></li>
<li><code class="highlighter-rouge">1</code> - (by default) for classes that set the <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code class="highlighter-rouge">$spacer * .25</code></li>
<li><code class="highlighter-rouge">2</code> - (by default) for classes that set the <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code class="highlighter-rouge">$spacer * .5</code></li>
<li><code class="highlighter-rouge">3</code> - (by default) for classes that set the <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code class="highlighter-rouge">$spacer</code></li>
<li><code class="highlighter-rouge">4</code> - (by default) for classes that set the <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code class="highlighter-rouge">$spacer * 1.5</code></li>
<li><code class="highlighter-rouge">5</code> - (by default) for classes that set the <code class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code class="highlighter-rouge">$spacer * 3</code></li>
<li><code class="highlighter-rouge">auto</code> - for classes that set the <code class="highlighter-rouge">margin</code> to auto</li>
</ul>

<p>(You can add more sizes by adding entries to the <code class="highlighter-rouge">$spacers</code> Sass map variable.)</p>

<h2>Examples</h2>

<p>Here are some representative examples of these classes:</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="nc">.mt-0</span> <span class="p">{</span>
  <span class="nl">margin-top</span><span class="p">:</span> <span class="m">0</span> <span class="o">!</span><span class="n">important</span><span class="p">;</span>
<span class="p">}</span>
<br>
<span class="nc">.ml-1</span> <span class="p">{</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="p">(</span><span class="nv">$spacer</span> <span class="o">*</span> <span class="mi">.25</span><span class="p">)</span> <span class="o">!</span><span class="n">important</span><span class="p">;</span>
<span class="p">}</span>
<br>
<span class="nc">.px-2</span> <span class="p">{</span>
  <span class="nl">padding-left</span><span class="p">:</span> <span class="p">(</span><span class="nv">$spacer</span> <span class="o">*</span> <span class="mi">.5</span><span class="p">)</span> <span class="o">!</span><span class="n">important</span><span class="p">;</span>
  <span class="nl">padding-right</span><span class="p">:</span> <span class="p">(</span><span class="nv">$spacer</span> <span class="o">*</span> <span class="mi">.5</span><span class="p">)</span> <span class="o">!</span><span class="n">important</span><span class="p">;</span>
<span class="p">}</span>
<br>
<span class="nc">.p-3</span> <span class="p">{</span>
  <span class="nl">padding</span><span class="p">:</span> <span class="nv">$spacer</span> <span class="o">!</span><span class="n">important</span><span class="p">;</span>
<span class="p">}</span></code></pre></figure>

<h3>Horizontal centering</h3>

<p>Additionally, ZomCSS also includes an <code class="highlighter-rouge">.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has <code class="highlighter-rouge">display: block</code> and a <code class="highlighter-rouge">width</code> set—by setting the horizontal margins to <code class="highlighter-rouge">auto</code>.</p>

<div class="zc-example">
<div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
  Centered element
</div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"mx-auto"</span> <span class="na">style=</span><span class="s">"width: 200px;"</span><span class="nt">&gt;</span>
    Centered element
<span class="nt">&lt;/div&gt;</span></code></pre></figure>
