<h1>Utilities for layout</h1>

<p class="lead">For faster mobile-friendly and responsive development, ZomCSS includes dozens of utility classes for showing, hiding, aligning, and spacing content.</p>

<h2>Changing <code class="highlighter-rouge">display</code></h2>

<p>Use our <a href="/guide/display.html">display utilities</a> for responsively toggling common values of the <code class="highlighter-rouge">display</code> property. Mix it with our grid system, content, or components to show or hide them across specific viewports.</p>

<h2>Flexbox options</h2>

<p>ZomCSS is built with flexbox, but not every element’s <code class="highlighter-rouge">display</code> has been changed to <code class="highlighter-rouge">display: flex</code> as this would add many unnecessary overrides and unexpectedly change key browser behaviors.</p>

<p>Should you need to add <code class="highlighter-rouge">display: flex</code> to an element, do so with <code class="highlighter-rouge">.d-flex</code> or one of the responsive variants (e.g., <code class="highlighter-rouge">.d-sm-flex</code>). You’ll need this class or <code class="highlighter-rouge">display</code> value to allow the use of our extra <a href="/guide/flex.html">flexbox utilities</a> for sizing, alignment, spacing, and more.</p>

<h2>Margin and padding</h2>

<p>Use the <code class="highlighter-rouge">margin</code> and <code class="highlighter-rouge">padding</code> <a href="/guide/spacing.html">spacing utilities</a> to control how elements and components are spaced and sized. ZomCSS includes a five-level scale for spacing utilities, based on a <code class="highlighter-rouge">1rem</code> value default <code class="highlighter-rouge">$spacer</code> variable. Choose values for all viewports (e.g., <code class="highlighter-rouge">.mr-3</code> for <code class="highlighter-rouge">margin-right: 1rem</code>), or pick responsive variants to target specific viewports (e.g., <code class="highlighter-rouge">.mr-md-3</code> for <code class="highlighter-rouge">margin-right: 1rem</code> starting at the <code class="highlighter-rouge">md</code> breakpoint).</p>

<h2>Toggle <code class="highlighter-rouge">visibility</code></h2>

<p>When toggling <code class="highlighter-rouge">display</code> isn’t needed, you can toggle the <code class="highlighter-rouge">visibility</code> of an element with our <a href="/guide/visibility.html">visibility utilities</a>. Invisible elements will still affect the layout of the page, but are visually hidden from visitors.</p>
