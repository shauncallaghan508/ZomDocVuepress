<main class="bd-content" role="main">
<section class="grid">

<div class="zc-example-row">
  <div class="zc-example">
    <div class="container">
      <div class="row">
        <div class="col-sm">
        One of three columns
        </div>
        <div class="col-sm">
        One of three columns
        </div>
        <div class="col-sm">
        One of three columns
        </div>
      </div>
    </div>
  </div>

  <figure class="zc-highlight">
    <pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm"</span><span class="nt">&gt;</span>
        One of three columns
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm"</span><span class="nt">&gt;</span>
        One of three columns
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm"</span><span class="nt">&gt;</span>
        One of three columns
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span></code></pre>
  </figure>

</div>

<p>The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <code class="highlighter-rouge">.container</code>.</p>

<p>Breaking it down, here’s how it works:</p>

<ul class="default">
  <li>Containers provide a means to center and horizontally pad your site’s contents. Use <code class="highlighter-rouge">.container</code> for a responsive pixel width or <code class="highlighter-rouge">.container-fluid</code> for <code class="highlighter-rouge">width: 100%</code> across all viewport and device sizes.</li>
  <li>Rows are wrappers for columns. Each column has horizontal <code class="highlighter-rouge">padding</code> (called a gutter) for controlling the space between them. This <code class="highlighter-rouge">padding</code> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.</li>
  <li>In a grid layout, content must be placed within columns and only columns may be immediate children of rows.</li>
  <li>Thanks to flexbox, grid columns without a specified <code class="highlighter-rouge">width</code> will automatically layout as equal width columns. For example, four instances of <code class="highlighter-rouge">.col-sm</code> will each automatically be 25% wide from the small breakpoint and up. See the <a href="#auto-layout-columns">auto-layout columns</a> section for more examples.</li>
  <li>Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <code class="highlighter-rouge">.col-4</code>.</li>
  <li>Column <code class="highlighter-rouge">width</code>s are set in percentages, so they’re always fluid and sized relative to their parent element.</li>
  <li>Columns have horizontal <code class="highlighter-rouge">padding</code> to create the gutters between individual columns, however, you can remove the <code class="highlighter-rouge">margin</code> from rows and <code class="highlighter-rouge">padding</code> from columns with <code class="highlighter-rouge">.no-gutters</code> on the <code class="highlighter-rouge">.row</code>.</li>
  <li>To make the grid responsive, there are five grid breakpoints, one for each <a href="/docs/4.1/layout/overview/#responsive-breakpoints">responsive breakpoint</a>: all breakpoints (extra small), small, medium, large, and extra large.</li>
  <li>Grid breakpoints are based on minimum width media queries, meaning <strong>they apply to that one breakpoint and all those above it</strong> (e.g., <code class="highlighter-rouge">.col-sm-4</code> applies to small, medium, large, and extra large devices, but not the first <code class="highlighter-rouge">xs</code> breakpoint).</li>
  <li>You can use predefined grid classes (like <code class="highlighter-rouge">.col-4</code>) or <a href="#sass-mixins">Sass mixins</a> for more semantic markup.</li>
</ul>

<p>Be aware of the limitations and <a href="https://github.com/philipwalton/flexbugs">bugs around flexbox</a>, like the <a href="https://github.com/philipwalton/flexbugs#flexbug-9">inability to use some HTML elements as flex containers</a>.</p>

<h2 id="grid-options"><div>Grid options<a class="anchorjs-link " href="#grid-options" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>While we use <code class="highlighter-rouge">em</code>s or <code class="highlighter-rouge">rem</code>s for defining most sizes, <code class="highlighter-rouge">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the <a href="https://drafts.csswg.org/mediaqueries-3/#units">font size</a>.</p>

<p>See how aspects of the grid system work across multiple devices with a handy table.</p>

<table class="table table-bordered table-striped">
<thead>
	<tr>
		<th></th>
		<th class="text-center">
			Extra small<br>
			<small>&lt;576px</small>
		</th>
		<th class="text-center">
			Small<br>
			<small>≥576px</small>
		</th>
		<th class="text-center">
			Medium<br>
			<small>≥768px</small>
		</th>
		<th class="text-center">
			Large<br>
			<small>≥992px</small>
		</th>
		<th class="text-center">
			Extra large<br>
			<small>≥1200px</small>
		</th>
	</tr>
</thead>
<tbody>
	<tr>
		<th class="text-nowrap" scope="row">Max container width</th>
		<td>None (auto)</td>
		<td>540px</td>
		<td>720px</td>
		<td>960px</td>
		<td>1310px</td>
	</tr>
	<tr>
		<th class="text-nowrap" scope="row">Class prefix</th>
		<td><code>.col-</code></td>
		<td><code>.col-sm-</code></td>
		<td><code>.col-md-</code></td>
		<td><code>.col-lg-</code></td>
		<td><code>.col-xl-</code></td>
	</tr>
	<tr>
		<th class="text-nowrap" scope="row"># of columns</th>
		<td colspan="5">12</td>
	</tr>
	<tr>
		<th class="text-nowrap" scope="row">Gutter width</th>
		<td colspan="5">30px (15px on each side of a column)</td>
	</tr>
	<tr>
		<th class="text-nowrap" scope="row">Nestable</th>
		<td colspan="5">Yes</td>
	</tr>
	<tr>
		<th class="text-nowrap" scope="row">Column ordering</th>
		<td colspan="5">Yes</td>
	</tr>
</tbody>
</table>

<h2 id="auto-layout-columns"><div>Auto-layout columns<a class="anchorjs-link " href="#auto-layout-columns" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code class="highlighter-rouge">.col-sm-6</code>.</p>

<h3 id="equal-width"><div>Equal-width<a class="anchorjs-link " href="#equal-width" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>For example, here are two grid layouts that apply to every device and viewport, from <code class="highlighter-rouge">xs</code> to <code class="highlighter-rouge">xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>

<div class="zc-example-row">

<div class="zc-example">
  <div class="container">
    <div class="row">
      <div class="col">
        1 of 2
      </div>
      <div class="col">
        2 of 2
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col">
        2 of 3
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      1 of 2
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      2 of 2
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      1 of 3
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      2 of 3
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      3 of 3
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<p>Equal-width columns can be broken into multiple lines, but there was a <a href="https://github.com/philipwalton/flexbugs#flexbug-11">Safari flexbox bug</a> that prevented this from working without an explicit <code class="highlighter-rouge">flex-basis</code> or <code class="highlighter-rouge">border</code>. There are workarounds for older browser versions, but they shouldn’t be necessary if you’re up-to-date.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="container">
<div class="row">
	<div class="col">Column</div>
	<div class="col">Column</div>
	<div class="w-100"></div>
	<div class="col">Column</div>
	<div class="col">Column</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>Column<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>Column<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-100"</span><span class="nt">&gt;&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>Column<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>Column<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="setting-one-column-width"><div>Setting one column width<a class="anchorjs-link " href="#setting-one-column-width" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="container">
<div class="row">
	<div class="col">
		1 of 3
	</div>
	<div class="col-6">
		2 of 3 (wider)
	</div>
	<div class="col">
		3 of 3
	</div>
</div>
<div class="row">
	<div class="col">
		1 of 3
	</div>
	<div class="col-5">
		2 of 3 (wider)
	</div>
	<div class="col">
		3 of 3
	</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      1 of 3
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6"</span><span class="nt">&gt;</span>
      2 of 3 (wider)
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      3 of 3
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      1 of 3
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-5"</span><span class="nt">&gt;</span>
      2 of 3 (wider)
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      3 of 3
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="variable-width-content"><div>Variable width content<a class="anchorjs-link " href="#variable-width-content" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Use <code class="highlighter-rouge">col-{breakpoint}-auto</code> classes to size columns based on the natural width of their content.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="container">
<div class="row justify-content-md-center">
	<div class="col col-lg-2">
		1 of 3
	</div>
	<div class="col-md-auto">
		Variable width content
	</div>
	<div class="col col-lg-2">
		3 of 3
	</div>
</div>
<div class="row">
	<div class="col">
		1 of 3
	</div>
	<div class="col-md-auto">
		Variable width content
	</div>
	<div class="col col-lg-2">
		3 of 3
	</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row justify-content-md-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col col-lg-2"</span><span class="nt">&gt;</span>
      1 of 3
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-auto"</span><span class="nt">&gt;</span>
      Variable width content
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col col-lg-2"</span><span class="nt">&gt;</span>
      3 of 3
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      1 of 3
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-auto"</span><span class="nt">&gt;</span>
      Variable width content
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col col-lg-2"</span><span class="nt">&gt;</span>
      3 of 3
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="equal-width-multi-row"><div>Equal-width multi-row<a class="anchorjs-link " href="#equal-width-multi-row" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Create equal-width columns that span multiple rows by inserting a <code class="highlighter-rouge">.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code class="highlighter-rouge">.w-100</code> with some <a href="/docs/4.1/utilities/display/">responsive display utilities</a>.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col">col</div>
<div class="col">col</div>
<div class="w-100"></div>
<div class="col">col</div>
<div class="col">col</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-100"</span><span class="nt">&gt;&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h2 id="responsive-classes"><div>Responsive classes<a class="anchorjs-link " href="#responsive-classes" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>Our grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>

<h3 id="all-breakpoints"><div>All breakpoints<a class="anchorjs-link " href="#all-breakpoints" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>For grids that are the same from the smallest of devices to the largest, use the <code class="highlighter-rouge">.col</code> and <code class="highlighter-rouge">.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code class="highlighter-rouge">.col</code>.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col">col</div>
<div class="col">col</div>
<div class="col">col</div>
<div class="col">col</div>
</div>
<div class="row">
<div class="col-8">col-8</div>
<div class="col-4">col-4</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>col<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-8"</span><span class="nt">&gt;</span>col-8<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>col-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="stacked-to-horizontal"><div>Stacked to horizontal<a class="anchorjs-link " href="#stacked-to-horizontal" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Using a single set of <code class="highlighter-rouge">.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code class="highlighter-rouge">sm</code>).</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-sm-8">col-sm-8</div>
<div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
<div class="col-sm">col-sm</div>
<div class="col-sm">col-sm</div>
<div class="col-sm">col-sm</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-4"</span><span class="nt">&gt;</span>col-sm-4<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-8"</span><span class="nt">&gt;</span>col-sm-8<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm"</span><span class="nt">&gt;</span>col-sm<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm"</span><span class="nt">&gt;</span>col-sm<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm"</span><span class="nt">&gt;</span>col-sm<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="mix-and-match"><div>Mix and match<a class="anchorjs-link " href="#mix-and-match" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>

<div class="zc-example-row">

<div class="zc-example">
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
<div class="col-12 col-md-8">.col-12 .col-md-8</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
<div class="col-6">.col-6</div>
<div class="col-6">.col-6</div>
</div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Stack the columns on mobile by making one full-width and the other half-width --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-12 col-md-8"</span><span class="nt">&gt;</span>.col-12 .col-md-8<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-md-4"</span><span class="nt">&gt;</span>.col-6 .col-md-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<br>
<span class="c">&lt;!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-md-4"</span><span class="nt">&gt;</span>.col-6 .col-md-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-md-4"</span><span class="nt">&gt;</span>.col-6 .col-md-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-md-4"</span><span class="nt">&gt;</span>.col-6 .col-md-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<br>
<span class="c">&lt;!-- Columns are always 50% wide, on mobile and desktop --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6"</span><span class="nt">&gt;</span>.col-6<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6"</span><span class="nt">&gt;</span>.col-6<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h2 id="alignment"><div>Alignment<a class="anchorjs-link " href="#alignment" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>

<h3 id="vertical-alignment"><div>Vertical alignment<a class="anchorjs-link " href="#vertical-alignment" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<div class="zc-example-row zc-example-row-flex-cols">

<div class="zc-example">
<div class="container">
<div class="row align-items-start">
	<div class="col">
		One of three columns
	</div>
	<div class="col">
		One of three columns
	</div>
	<div class="col">
		One of three columns
	</div>
</div>
<div class="row align-items-center">
	<div class="col">
		One of three columns
	</div>
	<div class="col">
		One of three columns
	</div>
	<div class="col">
		One of three columns
	</div>
</div>
<div class="row align-items-end">
	<div class="col">
		One of three columns
	</div>
	<div class="col">
		One of three columns
	</div>
	<div class="col">
		One of three columns
	</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row align-items-start"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row align-items-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row align-items-end"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<div class="zc-example-row zc-example-row-flex-cols">

<div class="zc-example">
<div class="container">
<div class="row">
	<div class="col align-self-start">
		One of three columns
	</div>
	<div class="col align-self-center">
		One of three columns
	</div>
	<div class="col align-self-end">
		One of three columns
	</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col align-self-start"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col align-self-center"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col align-self-end"</span><span class="nt">&gt;</span>
      One of three columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="horizontal-alignment"><div>Horizontal alignment<a class="anchorjs-link " href="#horizontal-alignment" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<div class="zc-example-row">

<div class="zc-example">
<div class="container">
<div class="row justify-content-start">
	<div class="col-4">
		One of two columns
	</div>
	<div class="col-4">
		One of two columns
	</div>
</div>
<div class="row justify-content-center">
	<div class="col-4">
		One of two columns
	</div>
	<div class="col-4">
		One of two columns
	</div>
</div>
<div class="row justify-content-end">
	<div class="col-4">
		One of two columns
	</div>
	<div class="col-4">
		One of two columns
	</div>
</div>
<div class="row justify-content-around">
	<div class="col-4">
		One of two columns
	</div>
	<div class="col-4">
		One of two columns
	</div>
</div>
<div class="row justify-content-between">
	<div class="col-4">
		One of two columns
	</div>
	<div class="col-4">
		One of two columns
	</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row justify-content-start"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row justify-content-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row justify-content-end"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row justify-content-around"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row justify-content-between"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>
      One of two columns
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="no-gutters"><div>No gutters<a class="anchorjs-link " href="#no-gutters" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>The gutters between columns in our predefined grid classes can be removed with <code class="highlighter-rouge">.no-gutters</code>. This removes the negative <code class="highlighter-rouge">margin</code>s from <code class="highlighter-rouge">.row</code> and the horizontal <code class="highlighter-rouge">padding</code> from all immediate children columns.</p>

<p>Here’s the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">attribute selector</a>. While this generates a more specific selector, column padding can still be further customized with <a href="/docs/4.1/utilities/spacing/">spacing utilities</a>.</p>

<p><strong>Need an edge-to-edge design?</strong> Drop the parent <code class="highlighter-rouge">.container</code> or <code class="highlighter-rouge">.container-fluid</code>.</p>

<figure class="zc-highlight"><pre><code class="language-sass" data-lang="sass"><span class="nc">.no-gutters</span> <span class="err">{</span>
  <span class="nl">margin-right</span><span class="p">:</span> <span class="m">0</span><span class="err">;</span>
  <span class="nl">margin-left</span><span class="p">:</span> <span class="m">0</span><span class="err">;</span>
<br>
<span class="o">&gt;</span> <span class="nc">.col</span><span class="o">,</span>
<span class="o">&gt;</span> <span class="o">[</span><span class="nt">class</span><span class="o">*=</span><span class="s2">"col-"</span><span class="o">]</span> <span class="err">{</span>
<span class="nl">padding-right</span><span class="p">:</span> <span class="m">0</span><span class="err">;</span>
<span class="nl">padding-left</span><span class="p">:</span> <span class="m">0</span><span class="err">;</span>
<span class="err">}</span>
<span class="err">}</span></code></pre></figure>

<p>In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row no-gutters">
<div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
<div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row no-gutters"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-12 col-sm-6 col-md-8"</span><span class="nt">&gt;</span>.col-12 .col-sm-6 .col-md-8<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-md-4"</span><span class="nt">&gt;</span>.col-6 .col-md-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="column-wrapping"><div>Column wrapping<a class="anchorjs-link " href="#column-wrapping" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-9">.col-9</div>
<div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
<div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-9"</span><span class="nt">&gt;</span>.col-9<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4"</span><span class="nt">&gt;</span>.col-4<span class="nt">&lt;br&gt;</span>Since 9 + 4 = 13 <span class="ni">&amp;gt;</span> 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6"</span><span class="nt">&gt;</span>.col-6<span class="nt">&lt;br&gt;</span>Subsequent columns continue along the new line.<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="column-breaks"><div>Column breaks<a class="anchorjs-link " href="#column-breaks" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Breaking columns to a new line in flexbox requires a small hack: add an element with <code class="highlighter-rouge">width: 100%</code> wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <code class="highlighter-rouge">.row</code>s, but not every implementation method can account for this.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
<div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

<!-- Force next columns to break to new line -->
<div class="w-100"></div>

<div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
<div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-3"</span><span class="nt">&gt;</span>.col-6 .col-sm-3<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-3"</span><span class="nt">&gt;</span>.col-6 .col-sm-3<span class="nt">&lt;/div&gt;</span>
<br>
<span class="c">&lt;!-- Force next columns to break to new line --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-100"</span><span class="nt">&gt;&lt;/div&gt;</span>
<br>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-3"</span><span class="nt">&gt;</span>.col-6 .col-sm-3<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-3"</span><span class="nt">&gt;</span>.col-6 .col-sm-3<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<p>You may also apply this break at specific breakpoints with our <a href="/docs/4.1/utilities/display/">responsive display utilities</a>.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
<div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

<!-- Force next columns to break to new line at md breakpoint and up -->
<div class="w-100 d-none d-md-block"></div>

<div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
<div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-4"</span><span class="nt">&gt;</span>.col-6 .col-sm-4<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-4"</span><span class="nt">&gt;</span>.col-6 .col-sm-4<span class="nt">&lt;/div&gt;</span>
<br>
<span class="c">&lt;!-- Force next columns to break to new line at md breakpoint and up --&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"w-100 d-none d-md-block"</span><span class="nt">&gt;&lt;/div&gt;</span>
<br>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-4"</span><span class="nt">&gt;</span>.col-6 .col-sm-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-6 col-sm-4"</span><span class="nt">&gt;</span>.col-6 .col-sm-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h2 id="reordering"><div>Reordering<a class="anchorjs-link " href="#reordering" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<h3 id="order-classes"><div>Order classes<a class="anchorjs-link " href="#order-classes" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Use <code class="highlighter-rouge">.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code class="highlighter-rouge">order</code> by breakpoint (e.g., <code class="highlighter-rouge">.order-1.order-md-2</code>). Includes support for <code class="highlighter-rouge">1</code> through <code class="highlighter-rouge">12</code> across all five grid tiers.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="container">
<div class="row">
  <div class="col">
    First, but unordered
  </div>
  <div class="col order-12">
    Second, but last
  </div>
  <div class="col order-1">
    Third, but first
  </div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      First, but unordered
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col order-12"</span><span class="nt">&gt;</span>
      Second, but last
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col order-1"</span><span class="nt">&gt;</span>
      Third, but first
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<p>There are also responsive <code class="highlighter-rouge">.order-first</code> and <code class="highlighter-rouge">.order-last</code> classes that change the <code class="highlighter-rouge">order</code> of an element by applying <code class="highlighter-rouge">order: -1</code> and <code class="highlighter-rouge">order: 13</code> (<code class="highlighter-rouge">order: $columns + 1</code>), respectively. These classes can also be intermixed with the numbered <code class="highlighter-rouge">.order-*</code> classes as needed.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="container">
<div class="row">
	<div class="col order-last">
		First, but last
	</div>
	<div class="col">
		Second, but unordered
	</div>
	<div class="col order-first">
		Third, but first
	</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"container"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col order-last"</span><span class="nt">&gt;</span>
      First, but last
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      Second, but unordered
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col order-first"</span><span class="nt">&gt;</span>
      Third, but first
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h3 id="offsetting-columns"><div>Offsetting columns<a class="anchorjs-link " href="#offsetting-columns" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>You can offset grid columns in two ways: our responsive <code class="highlighter-rouge">.offset-</code> grid classes and our <a href="/docs/4.1/utilities/spacing/">margin utilities</a>. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>

<h4 id="offset-classes"><div>Offset classes<a class="anchorjs-link " href="#offset-classes" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h4>

<p>Move columns to the right using <code class="highlighter-rouge">.offset-md-*</code> classes. These classes increase the left margin of a column by <code class="highlighter-rouge">*</code> columns. For example, <code class="highlighter-rouge">.offset-md-4</code> moves <code class="highlighter-rouge">.col-md-4</code> over four columns.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-md-4">.col-md-4</div>
<div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
<div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
<div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
<div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-4"</span><span class="nt">&gt;</span>.col-md-4<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-4 offset-md-4"</span><span class="nt">&gt;</span>.col-md-4 .offset-md-4<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-3 offset-md-3"</span><span class="nt">&gt;</span>.col-md-3 .offset-md-3<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-3 offset-md-3"</span><span class="nt">&gt;</span>.col-md-3 .offset-md-3<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-6 offset-md-3"</span><span class="nt">&gt;</span>.col-md-6 .offset-md-3<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<p>In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in <a href="/docs/4.1/examples/grid/">the grid example</a>.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
</div>

<div class="row">
<div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
<div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-5 col-md-6"</span><span class="nt">&gt;</span>.col-sm-5 .col-md-6<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-5 offset-sm-2 col-md-6 offset-md-0"</span><span class="nt">&gt;</span>.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<br>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-6 col-md-5 col-lg-6"</span><span class="nt">&gt;</span>.col-sm-6 .col-md-5 .col-lg-6<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"</span><span class="nt">&gt;</span>.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h4 id="margin-utilities"><div>Margin utilities<a class="anchorjs-link " href="#margin-utilities" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h4>

<p>With the move to flexbox in v4, you can use margin utilities like <code class="highlighter-rouge">.mr-auto</code> to force sibling columns away from one another.</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-md-4">.col-md-4</div>
<div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
</div>
<div class="row">
<div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
<div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
</div>
<div class="row">
<div class="col-auto mr-auto">.col-auto .mr-auto</div>
<div class="col-auto">.col-auto</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-4"</span><span class="nt">&gt;</span>.col-md-4<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-4 ml-auto"</span><span class="nt">&gt;</span>.col-md-4 .ml-auto<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-3 ml-md-auto"</span><span class="nt">&gt;</span>.col-md-3 .ml-md-auto<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-md-3 ml-md-auto"</span><span class="nt">&gt;</span>.col-md-3 .ml-md-auto<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto mr-auto"</span><span class="nt">&gt;</span>.col-auto .mr-auto<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto"</span><span class="nt">&gt;</span>.col-auto<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h2 id="nesting"><div>Nesting<a class="anchorjs-link " href="#nesting" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>To nest your content with the default grid, add a new <code class="highlighter-rouge">.row</code> and set of <code class="highlighter-rouge">.col-sm-*</code> columns within an existing <code class="highlighter-rouge">.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>

<div class="zc-example-row">

<div class="zc-example">
<div class="row">
<div class="col-sm-9">
  Level 1: .col-sm-9
  <div class="row">
    <div class="col-8 col-sm-6">
      Level 2: .col-8 .col-sm-6
    </div>
    <div class="col-4 col-sm-6">
      Level 2: .col-4 .col-sm-6
    </div>
  </div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-9"</span><span class="nt">&gt;</span>
  Level 1: .col-sm-9
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-8 col-sm-6"</span><span class="nt">&gt;</span>
      Level 2: .col-8 .col-sm-6
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-4 col-sm-6"</span><span class="nt">&gt;</span>
      Level 2: .col-4 .col-sm-6
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

</div>

<h2 id="sass-mixins"><div>Sass mixins<a class="anchorjs-link " href="#sass-mixins" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>When using the source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.</p>

<h3 id="variables"><div>Variables<a class="anchorjs-link " href="#variables" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="nv">$grid-columns</span><span class="p">:</span>      <span class="m">12</span><span class="p">;</span>
<span class="nv">$grid-gutter-width</span><span class="p">:</span> <span class="m">30px</span><span class="p">;</span>
<br>
<span class="nv">\$grid-breakpoints</span><span class="p">:</span> <span class="p">(</span>
<span class="o">//</span> <span class="n">Extra</span> <span class="n">small</span> <span class="n">screen</span> <span class="o">/</span> <span class="n">phone</span>
<span class="n">xs</span><span class="o">:</span> <span class="m">0</span><span class="o">,</span>
<span class="o">//</span> <span class="n">Small</span> <span class="n">screen</span> <span class="o">/</span> <span class="n">phone</span>
<span class="n">sm</span><span class="o">:</span> <span class="m">576px</span><span class="o">,</span>
<span class="o">//</span> <span class="n">Medium</span> <span class="n">screen</span> <span class="o">/</span> <span class="n">tablet</span>
<span class="n">md</span><span class="o">:</span> <span class="m">768px</span><span class="o">,</span>
<span class="o">//</span> <span class="n">Large</span> <span class="n">screen</span> <span class="o">/</span> <span class="n">desktop</span>
<span class="n">lg</span><span class="o">:</span> <span class="m">992px</span><span class="o">,</span>
<span class="o">//</span> <span class="n">Extra</span> <span class="nb">large</span> <span class="n">screen</span> <span class="o">/</span> <span class="n">wide</span> <span class="n">desktop</span>
<span class="n">xl</span><span class="o">:</span> <span class="m">1200px</span>
<span class="p">);</span>
<br>
<span class="nv">\$container-max-widths</span><span class="p">:</span> <span class="p">(</span>
<span class="n">sm</span><span class="o">:</span> <span class="m">540px</span><span class="o">,</span>
<span class="n">md</span><span class="o">:</span> <span class="m">720px</span><span class="o">,</span>
<span class="n">lg</span><span class="o">:</span> <span class="m">960px</span><span class="o">,</span>
<span class="n">xl</span><span class="o">:</span> <span class="m">1140px</span>
<span class="p">);</span></code></pre></figure>

<h3 id="mixins"><div>Mixins<a class="anchorjs-link " href="#mixins" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="c1">// Creates a wrapper for a series of columns</span>
<span class="k">@include</span> <span class="nd">make-row</span><span class="p">();</span>
<br>
<span class="c1">// Make the element grid-ready (applying everything but the width)</span>
<span class="k">@include</span> <span class="nd">make-col-ready</span><span class="p">();</span>
<span class="k">@include</span> <span class="nd">make-col</span><span class="p">(</span><span class="nv">$size</span><span class="o">,</span> <span class="nv">$columns</span><span class="o">:</span> <span class="nv">\$grid-columns</span><span class="p">);</span>
<br>
<span class="c1">// Get fancy by offsetting, or changing the sort order</span>
<span class="k">@include</span> <span class="nd">make-col-offset</span><span class="p">(</span><span class="nv">$size</span><span class="o">,</span> <span class="nv">$columns</span><span class="o">:</span> <span class="nv">\$grid-columns</span><span class="p">);</span></code></pre></figure>

<h3 id="example-usage"><div>Example usage<a class="anchorjs-link " href="#example-usage" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="nc">.example-container</span> <span class="p">{</span>
  <span class="nl">width</span><span class="p">:</span> <span class="m">800px</span><span class="p">;</span>
  <span class="k">@include</span> <span class="nd">make-container</span><span class="p">();</span>
<span class="p">}</span>
<br>
<span class="nc">.example-row</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-row</span><span class="p">();</span>
<span class="p">}</span>
<br>
<span class="nc">.example-content-main</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-col-ready</span><span class="p">();</span>
<br>
<span class="k">@include</span> <span class="nd">media-breakpoint-up</span><span class="p">(</span><span class="n">sm</span><span class="p">)</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-col</span><span class="p">(</span><span class="m">6</span><span class="p">);</span>
<span class="p">}</span>
<span class="k">@include</span> <span class="nd">media-breakpoint-up</span><span class="p">(</span><span class="n">lg</span><span class="p">)</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-col</span><span class="p">(</span><span class="m">8</span><span class="p">);</span>
<span class="p">}</span>
<span class="p">}</span>
<br>
<span class="nc">.example-content-secondary</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-col-ready</span><span class="p">();</span>
<br>
<span class="k">@include</span> <span class="nd">media-breakpoint-up</span><span class="p">(</span><span class="n">sm</span><span class="p">)</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-col</span><span class="p">(</span><span class="m">6</span><span class="p">);</span>
<span class="p">}</span>
<span class="k">@include</span> <span class="nd">media-breakpoint-up</span><span class="p">(</span><span class="n">lg</span><span class="p">)</span> <span class="p">{</span>
<span class="k">@include</span> <span class="nd">make-col</span><span class="p">(</span><span class="m">4</span><span class="p">);</span>
<span class="p">}</span>
<span class="p">}</span></code></pre></figure>

<div class="zc-example">
<div class="example-container">
<div class="example-row">
  <div class="example-content-main">Main content</div>
  <div class="example-content-secondary">Secondary content</div>
</div>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"example-container"</span><span class="nt">&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"example-row"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"example-content-main"</span><span class="nt">&gt;</span>Main content<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"example-content-secondary"</span><span class="nt">&gt;</span>Secondary content<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<h2 id="customizing-the-grid"><div>Customizing the grid<a class="anchorjs-link " href="#customizing-the-grid" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h2>

<p>Using our built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.</p>

<h3 id="columns-and-gutters"><div>Columns and gutters<a class="anchorjs-link " href="#columns-and-gutters" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>The number of grid columns can be modified via Sass variables. <code class="highlighter-rouge">$grid-columns</code> is used to generate the widths (in percent) of each individual column while <code class="highlighter-rouge">$grid-gutter-width</code> sets the width for the column gutters.</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="nv">$grid-columns</span><span class="p">:</span> <span class="m">12</span> <span class="o">!</span><span class="nb">default</span><span class="p">;</span>
<span class="nv">$grid-gutter-width</span><span class="p">:</span> <span class="m">30px</span> <span class="o">!</span><span class="nb">default</span><span class="p">;</span></code></pre></figure>

<h3 id="grid-tiers"><div>Grid tiers<a class="anchorjs-link " href="#grid-tiers" aria-label="Anchor" data-anchorjs-icon="#" style="padding-left: 0.375em;"></a></div></h3>

<p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the <code class="highlighter-rouge">$grid-breakpoints</code> and <code class="highlighter-rouge">$container-max-widths</code> to something like this:</p>

<figure class="zc-highlight"><pre><code class="language-scss" data-lang="scss"><span class="nv">$grid-breakpoints</span><span class="p">:</span> <span class="p">(</span>
  <span class="n">xs</span><span class="o">:</span> <span class="m">0</span><span class="o">,</span>
  <span class="n">sm</span><span class="o">:</span> <span class="m">480px</span><span class="o">,</span>
  <span class="n">md</span><span class="o">:</span> <span class="m">768px</span><span class="o">,</span>
  <span class="n">lg</span><span class="o">:</span> <span class="m">1024px</span>
<span class="p">);</span>
<br>
<span class="nv">\$container-max-widths</span><span class="p">:</span> <span class="p">(</span>
<span class="n">sm</span><span class="o">:</span> <span class="m">420px</span><span class="o">,</span>
<span class="n">md</span><span class="o">:</span> <span class="m">720px</span><span class="o">,</span>
<span class="n">lg</span><span class="o">:</span> <span class="m">960px</span>
<span class="p">);</span></code></pre></figure>

<p>When making any changes to the Sass variables or maps, you’ll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in <code class="highlighter-rouge">px</code> (not <code class="highlighter-rouge">rem</code>, <code class="highlighter-rouge">em</code>, or <code class="highlighter-rouge">%</code>).</p>

</section>

</main>
</div>
</body>
