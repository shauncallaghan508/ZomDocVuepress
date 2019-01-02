<h1>Images</h1>
<p class="zc-lead">Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.</p>

<h2>Responsive images</h2>

<p>Images in Bootstrap are made responsive with <code class="highlighter-rouge">.img-fluid</code>. <code class="highlighter-rouge">max-width: 100%;</code> and <code class="highlighter-rouge">height: auto;</code> are applied to the image so that it scales with the parent element.</p>

<div class="zc-example">
  <img data-src="holder.js/100px250" class="img-fluid" alt="100%x250" style="height: 250px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22728%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20728%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cda2d11c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A36pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cda2d11c%22%3E%3Crect%20width%3D%22728%22%20height%3D%22250%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22271.9140625%22%20y%3D%22141.5%22%3E728x250%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"img-fluid"</span> <span class="na">alt=</span><span class="s">"Responsive image"</span><span class="nt">&gt;</span></code></pre></figure>

<div class="zc-callout zc-callout-warning">
<h5 id="svg-images-and-ie-10">SVG images and IE 10</h5>

<p>In Internet Explorer 10, SVG images with <code class="highlighter-rouge">.img-fluid</code> are disproportionately sized. To fix this, add <code class="highlighter-rouge">width: 100% \9;</code> where necessary. This fix improperly sizes other image formats, so Bootstrap doesn’t apply it automatically.</p>
</div>

<h2>Image thumbnails</h2>

<p>In addition to our <a href="/docs/4.1/utilities/borders/">border-radius utilities</a>, you can use <code class="highlighter-rouge">.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>

<div class="zc-example zc-example-images">
  <img data-src="holder.js/200x200" class="img-thumbnail" alt="200x200" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cda2d123%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cda2d123%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 200px; height: 200px;">
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">alt=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"img-thumbnail"</span><span class="nt">&gt;</span></code></pre></figure>

<h2>Aligning images</h2>

<p>Align images with the <a href="/docs/4.1/utilities/float">helper float classes</a> or <a href="/docs/4.1/utilities/text/#text-alignment">text alignment classes</a>. <code class="highlighter-rouge">block</code>-level images can be centered using <a href="/docs/4.1/utilities/spacing/#horizontal-centering">the <code class="highlighter-rouge">.mx-auto</code> margin utility class</a>.</p>

<div class="zc-example zc-example-images">
  <img data-src="holder.js/200x200" class="rounded float-left" alt="200x200" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cda2d126%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cda2d126%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 200px; height: 200px;">
  <img data-src="holder.js/200x200" class="rounded float-right" alt="200x200" style="width: 200px; height: 200px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cda2d127%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cda2d127%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"rounded float-left"</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span>
<span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"rounded float-right"</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span></code></pre></figure>

<div class="zc-example zc-example-images">
  <img data-src="holder.js/200x200" class="rounded mx-auto d-block" alt="200x200" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cda2d12a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cda2d12a%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 200px; height: 200px;">
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"rounded mx-auto d-block"</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span></code></pre></figure>

<div class="zc-example zc-example-images">
  <div class="text-center">
    <img data-src="holder.js/200x200" class="rounded" alt="200x200" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167cda2d12d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167cda2d12d%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 200px; height: 200px;">
  </div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"text-center"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"rounded"</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<h2>Picture</h2>

<p>If you are using the <code class="highlighter-rouge">&lt;picture&gt;</code> element to specify multiple <code class="highlighter-rouge">&lt;source&gt;</code> elements for a specific <code class="highlighter-rouge">&lt;img&gt;</code>, make sure to add the <code class="highlighter-rouge">.img-*</code> classes to the <code class="highlighter-rouge">&lt;img&gt;</code> and not to the <code class="highlighter-rouge">&lt;picture&gt;</code> tag.</p>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html">​<span class="nt">&lt;picture&gt;</span>
  <span class="nt">&lt;source</span> <span class="na">srcset=</span><span class="s">"..."</span> <span class="na">type=</span><span class="s">"image/svg+xml"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"..."</span> <span class="na">class=</span><span class="s">"img-fluid img-thumbnail"</span> <span class="na">alt=</span><span class="s">"..."</span><span class="nt">&gt;</span>
<span class="nt">&lt;/picture&gt;</span></code></pre></figure>