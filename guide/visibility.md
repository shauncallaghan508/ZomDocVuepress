<h1>Visibility</h1>
<p class="lead">Control the visibility, without modifying the display, of elements with visibility utilities.</p>

<p>Set the <code class="highlighter-rouge">visibility</code> of elements with our visibility utilities. These utility classes do not modify the <code class="highlighter-rouge">display</code> value at all and do not affect layout – <code class="highlighter-rouge">.invisible</code> elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.</p>

<p>Apply <code class="highlighter-rouge">.visible</code> or <code class="highlighter-rouge">.invisible</code> as needed.</p>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"visible"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"invisible"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="c1">// Class</span>
<span class="nc">.visible</span> <span class="p">{</span>
  <span class="nl">visibility</span><span class="p">:</span> <span class="nb">visible</span><span class="p">;</span>
<span class="p">}</span>
<span class="nc">.invisible</span> <span class="p">{</span>
  <span class="nl">visibility</span><span class="p">:</span> <span class="nb">hidden</span><span class="p">;</span>
<span class="p">}</span>
</code></pre></figure>
