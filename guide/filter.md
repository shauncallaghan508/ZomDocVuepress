<h2>Filter Navigation</h2>

<p>This navigation bar is used to filter out results with the <code class="highlighter-rouge">filter-item</code> class.  It will fade in/out filtered items.</p>

<p>Both the filter and container for filtered items need to be contained in a parent containing element.</p>

<p>Each option requires the <code class="highlighter-rouge">filter--option</code> class, and the first 'all' option should have the <code class="highlighter-rouge">active</code> class. Additionally, each option link requires a <code class="highlighter-rouge">data-filter</code>.</p>

<p>Each item to be filtered requires the <code class="highlighter-rouge">filter-item</code> class, and it's <code class="highlighter-rouge">data-filter</code>.</code></p>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;section</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"nav--filter"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;li&gt;</span>
            <span class="nt">&lt;a</span> <span class="na">data-filter=</span><span class="s">"all"</span> <span class="na">class=</span><span class="s">"filter--option active"</span><span class="nt">&gt;</span>All<span class="nt">&lt;/a&gt;</span>
        <span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;li&gt;</span>
            <span class="nt">&lt;a</span> <span class="na">data-filter=</span><span class="s">"room"</span> <span class="na">class=</span><span class="s">"filter--option"</span><span class="nt">&gt;</span>Rooms<span class="nt">&lt;/a&gt;</span>
        <span class="nt">&lt;/li&gt;</span>
    <span class="nt">&lt;/ul&gt;</span>
    <span class="nt">&lt;section</span> <span class="na">class=</span><span class="s">"gallery"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"filter-item"</span> <span class="na">data-filter=</span><span class="s">"{{catname}}"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;img</span> <span class="na">src=</span><span class="s">"photo-url_small"</span> <span class="na">alt=</span><span class="s">"photo-name"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/section&gt;</span>
<span class="nt">&lt;/section&gt;</span></code></pre></figure>