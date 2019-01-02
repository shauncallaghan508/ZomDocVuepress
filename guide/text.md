<h1 class="bd-title" id="content">Text</h1>

<p class="bd-lead">Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>

<h2>Text alignment</h2>

<p>Easily realign text to components with text alignment classes.</p>

<div class="zc-example">
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-justify"</span><span class="nt">&gt;</span>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.<span class="nt">&lt;/p&gt;</span></code></pre></figure>

<p>For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>

<div class="zc-example">
  <p class="text-left">Left aligned text on all viewport sizes.</p>
  <p class="text-center">Center aligned text on all viewport sizes.</p>
  <p class="text-right">Right aligned text on all viewport sizes.</p>

  <p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
  <p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
  <p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
  <p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-left"</span><span class="nt">&gt;</span>Left aligned text on all viewport sizes.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-center"</span><span class="nt">&gt;</span>Center aligned text on all viewport sizes.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-right"</span><span class="nt">&gt;</span>Right aligned text on all viewport sizes.<span class="nt">&lt;/p&gt;</span>
<br>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-sm-left"</span><span class="nt">&gt;</span>Left aligned text on viewports sized SM (small) or wider.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-md-left"</span><span class="nt">&gt;</span>Left aligned text on viewports sized MD (medium) or wider.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-lg-left"</span><span class="nt">&gt;</span>Left aligned text on viewports sized LG (large) or wider.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xl-left"</span><span class="nt">&gt;</span>Left aligned text on viewports sized XL (extra-large) or wider.<span class="nt">&lt;/p&gt;</span></code></pre></figure>

<h2>Text wrapping and overflow</h2>

<p>Prevent text from wrapping with a <code class="highlighter-rouge">.text-nowrap</code> class.</p>

<div class="zc-example">
<div class="text-nowrap zc-highlight" style="width: 8rem;">
This text should overflow the parent.
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"text-nowrap bd-highlight"</span> <span class="na">style=</span><span class="s">"width: 8rem;"</span><span class="nt">&gt;</span>
This text should overflow the parent.
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<p>For longer content, you can add a <code class="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis. <strong>Requires <code class="highlighter-rouge">display: inline-block</code> or <code class="highlighter-rouge">display: block</code>.</strong></p>

<div class="zc-example">
<!-- Block level -->
<div class="row">
<div class="col-2 text-truncate">
  Praeterea iter est quasdam res quas ex communi.
</div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
Praeterea iter est quasdam res quas ex communi.
</span>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Block level --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-2 text-truncate"</span><span class="nt">&gt;</span>
  Praeterea iter est quasdam res quas ex communi.
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<br>
<span class="c">&lt;!-- Inline level --&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"d-inline-block text-truncate"</span> <span class="na">style=</span><span class="s">"max-width: 150px;"</span><span class="nt">&gt;</span>
  Praeterea iter est quasdam res quas ex communi.
<span class="nt">&lt;/span&gt;</span></code></pre></figure>

<h2>Text transform</h2>

<p>Transform text in components with text capitalization classes.</p>

<div class="zc-example">
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-lowercase"</span><span class="nt">&gt;</span>Lowercased text.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-uppercase"</span><span class="nt">&gt;</span>Uppercased text.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-capitalize"</span><span class="nt">&gt;</span>CapiTaliZed text.<span class="nt">&lt;/p&gt;</span></code></pre></figure>

<p>Note how <code class="highlighter-rouge">text-capitalize</code> only changes the first letter of each word, leaving the case of any other letters unaffected.</p>

<h2>Font weight and italics</h2>

<p>Quickly change the weight (boldness) of text or italicize text.</p>

<div class="zc-example">
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-italic">Italic text.</p>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"font-weight-bold"</span><span class="nt">&gt;</span>Bold text.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"font-weight-normal"</span><span class="nt">&gt;</span>Normal weight text.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"font-weight-light"</span><span class="nt">&gt;</span>Light weight text.<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"font-italic"</span><span class="nt">&gt;</span>Italic text.<span class="nt">&lt;/p&gt;</span></code></pre></figure>