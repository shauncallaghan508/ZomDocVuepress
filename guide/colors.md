<h1 class="zc-title" id="content">Colors</h1>

<p class="zc-lead">Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>


<h2 id="color">Color</h2>

  <div class="zc-example">
    <p class="text-primary">.text-primary</p>
    <p class="text-secondary">.text-secondary</p>
    <p class="text-body">.text-body</p>
    <p class="text-danger">.text-danger</p>
    <p class="text-success">.text-success</p>
    <p class="text-muted">.text-muted</p>
    <p class="text-white bg-dark">.text-white</p>
  </div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-primary"</span><span class="nt">&gt;</span>.text-primary<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-secondary"</span><span class="nt">&gt;</span>.text-secondary<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-body"</span><span class="nt">&gt;</span>.text-body<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-danger"</span><span class="nt">&gt;</span>.text-danger<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-success"</span><span class="nt">&gt;</span>.text-success<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>.text-muted<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-white bg-dark"</span><span class="nt">&gt;</span>.text-white<span class="nt">&lt;/p&gt;</span>
</code></pre></figure>

  <p>Contextual text classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code class="highlighter-rouge">.text-white</code> and <code class="highlighter-rouge">.text-muted</code> class has no additional link styling beyond underline.</strong></p>

  <div class="zc-example">

  <p><a href="#" class="text-primary">Primary link</a></p>
  <p><a href="#" class="text-secondary">Secondary link</a></p>
  <p><a href="#" class="text-success">Success link</a></p>
  <p><a href="#" class="text-danger">Danger link</a></p>
  <p><a href="#" class="text-muted">Muted link</a></p>
  <p><a href="#" class="text-white bg-dark">White link</a></p>
  </div>
  <figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"text-primary"</span><span class="nt">&gt;</span>Primary link<span class="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"text-secondary"</span><span class="nt">&gt;</span>Secondary link<span class="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"text-success"</span><span class="nt">&gt;</span>Success link<span class="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"text-danger"</span><span class="nt">&gt;</span>Danger link<span class="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>Muted link<span class="nt">&lt;/a&gt;&lt;/p&gt;</span>
<span class="nt">&lt;p&gt;&lt;a</span> <span class="na">href=</span><span class="s">"#"</span> <span class="na">class=</span><span class="s">"text-white bg-dark"</span><span class="nt">&gt;</span>White link<span class="nt">&lt;/a&gt;&lt;/p&gt;</span></code></pre></figure>

  <h2 id="background-color"><div>Background color<a class="anchorjs-link " href="#background-color" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

  <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code class="highlighter-rouge">color</code></strong>, so in some cases you’ll want to use <code class="highlighter-rouge">.text-*</code> utilities.</p>

  <div class="zc-example">

  <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
  <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
  <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
  </div>
  <figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-primary text-white"</span><span class="nt">&gt;</span>.bg-primary<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-secondary text-white"</span><span class="nt">&gt;</span>.bg-secondary<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-success text-white"</span><span class="nt">&gt;</span>.bg-success<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-danger text-white"</span><span class="nt">&gt;</span>.bg-danger<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-warning text-dark"</span><span class="nt">&gt;</span>.bg-warning<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-info text-white"</span><span class="nt">&gt;</span>.bg-info<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-light text-dark"</span><span class="nt">&gt;</span>.bg-light<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-dark text-white"</span><span class="nt">&gt;</span>.bg-dark<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-white text-dark"</span><span class="nt">&gt;</span>.bg-white<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-3 mb-2 bg-transparent text-dark"</span><span class="nt">&gt;</span>.bg-transparent<span class="nt">&lt;/div&gt;</span></code></pre></figure>

  <div class="zc-callout zc-callout-info">
  <h4 id="dealing-with-specificity">Dealing with specificity</h4>

  <p>Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element’s content in a <code class="highlighter-rouge">&lt;div&gt;</code> with the class.</p>
  </div>

  <div class="zc-callout zc-callout-warning">
  <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>

  <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code class="highlighter-rouge">.sr-only</code> class.</p>
  </div>
