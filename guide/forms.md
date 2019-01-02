<h1>Forms</h1>

<p class="lead">Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>

<h2>Overview</h2>

<p>Use ZomCSS's classes to control displays for a more consistent rendering across browsers and devices.</p>

<p>Be sure to use an appropriate <code class="highlighter-rouge">type</code> attribute on all inputs (e.g., <code class="highlighter-rouge">email</code> for email address or <code class="highlighter-rouge">number</code> for numerical information) to take advantage of newer input controls like email verification, number selection, and more.</p>

<p>Here’s a quick example to demonstrate ZomCSS's form styles. Keep reading for documentation on required classes, form layout, and more.</p>

<div class="zc-example">
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleInputEmail1"</span><span class="nt">&gt;</span>Email address<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"exampleInputEmail1"</span> <span class="na">aria-describedby=</span><span class="s">"emailHelp"</span> <span class="na">placeholder=</span><span class="s">"Enter email"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;small</span> <span class="na">id=</span><span class="s">"emailHelp"</span> <span class="na">class=</span><span class="s">"form-text text-muted"</span><span class="nt">&gt;</span>We'll never share your email with anyone else.<span class="nt">&lt;/small&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleInputPassword1"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"exampleInputPassword1"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group form-check"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">id=</span><span class="s">"exampleCheck1"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"exampleCheck1"</span><span class="nt">&gt;</span>Check me out<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h2>Form controls</h2>

<p>Textual form controls—like <code class="highlighter-rouge">&lt;input&gt;</code>s, <code class="highlighter-rouge">&lt;select&gt;</code>s, and <code class="highlighter-rouge">&lt;textarea&gt;</code>s—are styled with the <code class="highlighter-rouge">.form-control</code> class. Included are styles for general appearance, focus state, sizing, and more.</p>

<p>Be sure to explore our <a href="#custom-forms">custom forms</a> to further style <code class="highlighter-rouge">&lt;select&gt;</code>s.</p>

<div class="zc-example">
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple="" class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleFormControlInput1"</span><span class="nt">&gt;</span>Email address<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"exampleFormControlInput1"</span> <span class="na">placeholder=</span><span class="s">"name@example.com"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleFormControlSelect1"</span><span class="nt">&gt;</span>Example select<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;select</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"exampleFormControlSelect1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;option&gt;</span>1<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>2<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>3<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>4<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>5<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleFormControlSelect2"</span><span class="nt">&gt;</span>Example multiple select<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;select</span> <span class="na">multiple</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"exampleFormControlSelect2"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;option&gt;</span>1<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>2<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>3<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>4<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;option&gt;</span>5<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;/select&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleFormControlTextarea1"</span><span class="nt">&gt;</span>Example textarea<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;textarea</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"exampleFormControlTextarea1"</span> <span class="na">rows=</span><span class="s">"3"</span><span class="nt">&gt;&lt;/textarea&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<!-- <p>For file inputs, swap the <code class="highlighter-rouge">.form-control</code> for <code class="highlighter-rouge">.form-control-file</code>.</p>

<div class="zc-example">
<form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"exampleFormControlFile1"</span><span class="nt">&gt;</span>Example file input<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"file"</span> <span class="na">class=</span><span class="s">"form-control-file"</span> <span class="na">id=</span><span class="s">"exampleFormControlFile1"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure> -->

<!-- <h3>Sizing</h3>

<p>Set heights using classes like <code class="highlighter-rouge">.form-control-lg</code> and <code class="highlighter-rouge">.form-control-sm</code>.</p>

<div class="zc-example">
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
<input class="form-control" type="text" placeholder="Default input">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-control form-control-lg"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">".form-control-lg"</span><span class="nt">&gt;</span>
<span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Default input"</span><span class="nt">&gt;</span>
<span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-control form-control-sm"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">".form-control-sm"</span><span class="nt">&gt;</span></code></pre></figure>

<div class="zc-example">
<select class="form-control form-control-lg">
  <option>Large select</option>
</select>
<select class="form-control">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm">
  <option>Small select</option>
</select>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;select</span> <span class="na">class=</span><span class="s">"form-control form-control-lg"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;option&gt;</span>Large select<span class="nt">&lt;/option&gt;</span>
<span class="nt">&lt;/select&gt;</span>
<span class="nt">&lt;select</span> <span class="na">class=</span><span class="s">"form-control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;option&gt;</span>Default select<span class="nt">&lt;/option&gt;</span>
<span class="nt">&lt;/select&gt;</span>
<span class="nt">&lt;select</span> <span class="na">class=</span><span class="s">"form-control form-control-sm"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;option&gt;</span>Small select<span class="nt">&lt;/option&gt;</span>
<span class="nt">&lt;/select&gt;</span></code></pre></figure> -->

<h3>Readonly</h3>

<p>Add the <code class="highlighter-rouge">readonly</code> boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.</p>

<div class="zc-example">
<input class="form-control" type="text" placeholder="Readonly input here…" readonly="">
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Readonly input here…"</span> <span class="na">readonly</span><span class="nt">&gt;</span></code></pre></figure>

<h3>Readonly plain text</h3>

<p>If you want to have <code class="highlighter-rouge">&lt;input readonly&gt;</code> elements in your form styled as plain text, use the <code class="highlighter-rouge">.form-control-plaintext</code> class to remove the default form field styling and preserve the correct margin and padding.</p>

<div class="zc-example">
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"staticEmail"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">readonly</span> <span class="na">class=</span><span class="s">"form-control-plaintext"</span> <span class="na">id=</span><span class="s">"staticEmail"</span> <span class="na">value=</span><span class="s">"email@example.com"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputPassword"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputPassword"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<div class="zc-example">
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly="" class="form-control-plaintext" id="staticEmail2" value="email@example.com" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form</span> <span class="na">class=</span><span class="s">"form-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group mb-2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"staticEmail2"</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">readonly</span> <span class="na">class=</span><span class="s">"form-control-plaintext"</span> <span class="na">id=</span><span class="s">"staticEmail2"</span> <span class="na">value=</span><span class="s">"email@example.com"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group mx-sm-3 mb-2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputPassword2"</span> <span class="na">class=</span><span class="s">"sr-only"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputPassword2"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary mb-2"</span><span class="nt">&gt;</span>Confirm identity<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h2>Range Inputs</h2>

<p>Set horizontally scrollable range inputs using <code class="highlighter-rouge">.form-control-range</code>.</p>

<div class="zc-example">
<form>
  <div class="form-group">
    <label for="formControlRange">Example Range input</label>
    <input type="range" class="form-control-range" id="formControlRange">
  </div>
</form>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"formControlRange"</span><span class="nt">&gt;</span>Example Range input<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"range"</span> <span class="na">class=</span><span class="s">"form-control-range"</span> <span class="na">id=</span><span class="s">"formControlRange"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>


<h2>Checkboxes and radios</h2>

<p>Default checkboxes and radios are improved upon with the help of <code class="highlighter-rouge">.form-check</code>, <strong>a single class for both input types that improves the layout and behavior of their HTML elements</strong>. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</p>

<p>Disabled checkboxes and radios are supported, but to provide a <code class="highlighter-rouge">not-allowed</code> cursor on hover of the parent <code class="highlighter-rouge">&lt;label&gt;</code>, you’ll need to add the <code class="highlighter-rouge">disabled</code> attribute to the <code class="highlighter-rouge">.form-check-input</code>. The disabled attribute will apply a lighter color to help indicate the input’s state.</p>

<p>Checkboxes and radios use are built to support HTML-based form validation and provide concise, accessible labels. As such, our <code class="highlighter-rouge">&lt;input&gt;</code>s and <code class="highlighter-rouge">&lt;label&gt;</code>s are sibling elements as opposed to an <code class="highlighter-rouge">&lt;input&gt;</code> within a <code class="highlighter-rouge">&lt;label&gt;</code>. This is slightly more verbose as you must specify <code class="highlighter-rouge">id</code> and <code class="highlighter-rouge">for</code> attributes to relate the <code class="highlighter-rouge">&lt;input&gt;</code> and <code class="highlighter-rouge">&lt;label&gt;</code>.</p>

<h3>Default (stacked)</h3>

<p>By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <code class="highlighter-rouge">.form-check</code>.</p>

<div class="zc-example">
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1">Default checkbox</label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled=""><label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>
    </div>
</div>

<figure class="zc-highlight">
    <pre><code class="language-html" data-lang="html">
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">value=</span><span class="s">""</span> <span class="na">id=</span><span class="s">"defaultCheck1"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"defaultCheck1"</span><span class="nt">&gt;</span>
    Default checkbox
    <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">value=</span><span class="s">""</span> <span class="na">id=</span><span class="s">"defaultCheck2"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"defaultCheck2"</span><span class="nt">&gt;</span>
    Disabled checkbox
    <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<div class="zc-example">
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="">
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"exampleRadios"</span> <span class="na">id=</span><span class="s">"exampleRadios1"</span> <span class="na">value=</span><span class="s">"option1"</span> <span class="na">checked</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"exampleRadios1"</span><span class="nt">&gt;</span>
    Default radio
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"exampleRadios"</span> <span class="na">id=</span><span class="s">"exampleRadios2"</span> <span class="na">value=</span><span class="s">"option2"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"exampleRadios2"</span><span class="nt">&gt;</span>
    Second default radio
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"exampleRadios"</span> <span class="na">id=</span><span class="s">"exampleRadios3"</span> <span class="na">value=</span><span class="s">"option3"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"exampleRadios3"</span><span class="nt">&gt;</span>
    Disabled radio
  <span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<h3>Inline</h3>

<p>Group checkboxes or radios on the same horizontal row by adding <code class="highlighter-rouge">.form-check-inline</code> to any <code class="highlighter-rouge">.form-check</code>.</p>

<div class="zc-example">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check form-check-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"inlineCheckbox1"</span> <span class="na">value=</span><span class="s">"option1"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineCheckbox1"</span><span class="nt">&gt;</span>1<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check form-check-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"inlineCheckbox2"</span> <span class="na">value=</span><span class="s">"option2"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineCheckbox2"</span><span class="nt">&gt;</span>2<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check form-check-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"inlineCheckbox3"</span> <span class="na">value=</span><span class="s">"option3"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineCheckbox3"</span><span class="nt">&gt;</span>3 (disabled)<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<div class="zc-example">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check form-check-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"inlineRadioOptions"</span> <span class="na">id=</span><span class="s">"inlineRadio1"</span> <span class="na">value=</span><span class="s">"option1"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineRadio1"</span><span class="nt">&gt;</span>1<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check form-check-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"inlineRadioOptions"</span> <span class="na">id=</span><span class="s">"inlineRadio2"</span> <span class="na">value=</span><span class="s">"option2"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineRadio2"</span><span class="nt">&gt;</span>2<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check form-check-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"inlineRadioOptions"</span> <span class="na">id=</span><span class="s">"inlineRadio3"</span> <span class="na">value=</span><span class="s">"option3"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineRadio3"</span><span class="nt">&gt;</span>3 (disabled)<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<h3>Without labels</h3>

<p>Add <code class="highlighter-rouge">.position-static</code> to inputs within <code class="highlighter-rouge">.form-check</code> that don’t have any label text. Remember to still provide some form of label for assistive technologies (for instance, using <code class="highlighter-rouge">aria-label</code>).</p>

<div class="zc-example">
<div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
</div>
<div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
</div>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input position-static"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"blankCheckbox"</span> <span class="na">value=</span><span class="s">"option1"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>
<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input position-static"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"blankRadio"</span> <span class="na">id=</span><span class="s">"blankRadio1"</span> <span class="na">value=</span><span class="s">"option1"</span> <span class="na">aria-label=</span><span class="s">"..."</span><span class="nt">&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre></figure>

<h2>Layout</h2>

<p>Since ZomCSS applies <code class="highlighter-rouge">display: block</code> and <code class="highlighter-rouge">width: 100%</code> to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.</p>

<h3>Form groups</h3>

<p>The <code class="highlighter-rouge">.form-group</code> class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies <code class="highlighter-rouge">margin-bottom</code>, but it picks up additional styles in <code class="highlighter-rouge">.form-inline</code> as needed. Use it with <code class="highlighter-rouge">&lt;fieldset&gt;</code>s, <code class="highlighter-rouge">&lt;div&gt;</code>s, or nearly any other element.</p>

<div class="zc-example">
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"formGroupExampleInput"</span><span class="nt">&gt;</span>Example label<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"formGroupExampleInput"</span> <span class="na">placeholder=</span><span class="s">"Example input"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"formGroupExampleInput2"</span><span class="nt">&gt;</span>Another label<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"formGroupExampleInput2"</span> <span class="na">placeholder=</span><span class="s">"Another input"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h3>Form grid</h3>

<p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

<div class="zc-example">
<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"First name"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"Last name"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h4>Form row</h4>

<p>You may also swap <code class="highlighter-rouge">.row</code> for <code class="highlighter-rouge">.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>

<div class="zc-example">
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"First name"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"Last name"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<p>More complex layouts can also be created with the grid system.</p>

<div class="zc-example">
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected="">Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group col-md-6"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputEmail4"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputEmail4"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group col-md-6"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputPassword4"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputPassword4"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputAddress"</span><span class="nt">&gt;</span>Address<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputAddress"</span> <span class="na">placeholder=</span><span class="s">"1234 Main St"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputAddress2"</span><span class="nt">&gt;</span>Address 2<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputAddress2"</span> <span class="na">placeholder=</span><span class="s">"Apartment, studio, or floor"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group col-md-6"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputCity"</span><span class="nt">&gt;</span>City<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputCity"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group col-md-4"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputState"</span><span class="nt">&gt;</span>State<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;select</span> <span class="na">id=</span><span class="s">"inputState"</span> <span class="na">class=</span><span class="s">"form-control"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;option</span> <span class="na">selected</span><span class="nt">&gt;</span>Choose...<span class="nt">&lt;/option&gt;</span>
        <span class="nt">&lt;option&gt;</span>...<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;/select&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group col-md-2"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputZip"</span><span class="nt">&gt;</span>Zip<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputZip"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"gridCheck"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"gridCheck"</span><span class="nt">&gt;</span>
        Check me out
      <span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Sign in<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h4>Horizontal form</h4>

<p>Create horizontal forms with the grid by adding the <code class="highlighter-rouge">.row</code> class to form groups and using the <code class="highlighter-rouge">.col-*-*</code> classes to specify the width of your labels and controls. Be sure to add <code class="highlighter-rouge">.col-form-label</code> to your <code class="highlighter-rouge">&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.</p>

<p>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the <code class="highlighter-rouge">padding-top</code> on our stacked radio inputs label to better align the text baseline.</p>

<div class="zc-example">
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="">
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="">
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputEmail3"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputEmail3"</span> <span class="na">placeholder=</span><span class="s">"Email"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputPassword3"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inputPassword3"</span> <span class="na">placeholder=</span><span class="s">"Password"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;fieldset</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;legend</span> <span class="na">class=</span><span class="s">"col-form-label col-sm-2 pt-0"</span><span class="nt">&gt;</span>Radios<span class="nt">&lt;/legend&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"gridRadios"</span> <span class="na">id=</span><span class="s">"gridRadios1"</span> <span class="na">value=</span><span class="s">"option1"</span> <span class="na">checked</span><span class="nt">&gt;</span>
          <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"gridRadios1"</span><span class="nt">&gt;</span>
            First radio
          <span class="nt">&lt;/label&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"gridRadios"</span> <span class="na">id=</span><span class="s">"gridRadios2"</span> <span class="na">value=</span><span class="s">"option2"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"gridRadios2"</span><span class="nt">&gt;</span>
            Second radio
          <span class="nt">&lt;/label&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check disabled"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"radio"</span> <span class="na">name=</span><span class="s">"gridRadios"</span> <span class="na">id=</span><span class="s">"gridRadios3"</span> <span class="na">value=</span><span class="s">"option3"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
          <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"gridRadios3"</span><span class="nt">&gt;</span>
            Third disabled radio
          <span class="nt">&lt;/label&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/fieldset&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-2"</span><span class="nt">&gt;</span>Checkbox<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"gridCheck1"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"gridCheck1"</span><span class="nt">&gt;</span>
          Example checkbox
        <span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Sign in<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<!-- <h5>Horizontal form label sizing</h5>

<p>Be sure to use <code class="highlighter-rouge">.col-form-label-sm</code> or <code class="highlighter-rouge">.col-form-label-lg</code> to your <code class="highlighter-rouge">&lt;label&gt;</code>s or <code class="highlighter-rouge">&lt;legend&gt;</code>s to correctly follow the size of <code class="highlighter-rouge">.form-control-lg</code> and <code class="highlighter-rouge">.form-control-sm</code>.</p>

<div class="zc-example">
<form>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"colFormLabelSm"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label col-form-label-sm"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control form-control-sm"</span> <span class="na">id=</span><span class="s">"colFormLabelSm"</span> <span class="na">placeholder=</span><span class="s">"col-form-label-sm"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"colFormLabel"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"colFormLabel"</span> <span class="na">placeholder=</span><span class="s">"col-form-label"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"colFormLabelLg"</span> <span class="na">class=</span><span class="s">"col-sm-2 col-form-label col-form-label-lg"</span><span class="nt">&gt;</span>Email<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-10"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"email"</span> <span class="na">class=</span><span class="s">"form-control form-control-lg"</span> <span class="na">id=</span><span class="s">"colFormLabelLg"</span> <span class="na">placeholder=</span><span class="s">"col-form-label-lg"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure> -->

<h4>Column sizing</h4>

<p>As shown in the previous examples, our grid system allows you to place any number of <code class="highlighter-rouge">.col</code>s within a <code class="highlighter-rouge">.row</code> or <code class="highlighter-rouge">.form-row</code>. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining <code class="highlighter-rouge">.col</code>s equally split the rest, with specific column classes like <code class="highlighter-rouge">.col-7</code>.</p>

<div class="zc-example">
<form>
  <div class="form-row">
    <div class="col-7">
      <input type="text" class="form-control" placeholder="City">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Zip">
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-7"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"City"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"State"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"Zip"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h4>Auto-sizing</h4>

<p>The example below uses a flexbox utility to vertically center the contents and changes <code class="highlighter-rouge">.col</code> to <code class="highlighter-rouge">.col-auto</code> so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.</p>

<div class="zc-example">
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
</div>
<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row align-items-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormInput"</span><span class="nt">&gt;</span>Name<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control mb-2"</span> <span class="na">id=</span><span class="s">"inlineFormInput"</span> <span class="na">placeholder=</span><span class="s">"Jane Doe"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormInputGroup"</span><span class="nt">&gt;</span>Username<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group mb-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group-prepend"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group-text"</span><span class="nt">&gt;</span>@<span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inlineFormInputGroup"</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check mb-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"autoSizingCheck"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"autoSizingCheck"</span><span class="nt">&gt;</span>
          Remember me
        <span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary mb-2"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<p>You can then remix that once again with size-specific column classes.</p>

<div class="zc-example">
<form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputName">Name</label>
      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
    </div>
    <div class="col-sm-3 my-1">
      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
      </div>
    </div>
    <div class="col-auto my-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row align-items-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-3 my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormInputName"</span><span class="nt">&gt;</span>Name<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inlineFormInputName"</span> <span class="na">placeholder=</span><span class="s">"Jane Doe"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-sm-3 my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormInputGroupUsername"</span><span class="nt">&gt;</span>Username<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group-prepend"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group-text"</span><span class="nt">&gt;</span>@<span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;/div&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inlineFormInputGroupUsername"</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"autoSizingCheck2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"autoSizingCheck2"</span><span class="nt">&gt;</span>
          Remember me
        <span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<p>And of course custom form controls are supported.</p>

<div class="zc-example">
<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-auto my-1">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
        <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
      </div>
    </div>
    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-row align-items-center"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"mr-sm-2 sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormCustomSelect"</span><span class="nt">&gt;</span>Preference<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;select</span> <span class="na">class=</span><span class="s">"custom-select mr-sm-2"</span> <span class="na">id=</span><span class="s">"inlineFormCustomSelect"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;option</span> <span class="na">selected</span><span class="nt">&gt;</span>Choose...<span class="nt">&lt;/option&gt;</span>
        <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"1"</span><span class="nt">&gt;</span>One<span class="nt">&lt;/option&gt;</span>
        <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"2"</span><span class="nt">&gt;</span>Two<span class="nt">&lt;/option&gt;</span>
        <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"3"</span><span class="nt">&gt;</span>Three<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;/select&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"custom-control custom-checkbox mr-sm-2"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">class=</span><span class="s">"custom-control-input"</span> <span class="na">id=</span><span class="s">"customControlAutosizing"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"custom-control-label"</span> <span class="na">for=</span><span class="s">"customControlAutosizing"</span><span class="nt">&gt;</span>Remember my preference<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"col-auto my-1"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h3>Inline forms</h3>

<p>Use the <code class="highlighter-rouge">.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.</p>

<ul>
  <li>Controls are <code class="highlighter-rouge">display: flex</code>, collapsing any HTML white space and allowing you to provide alignment control with <a href="/guide/spacing.html">spacing</a> and <a href="/guide/flex.html">flexbox</a> utilities.</li>
  <li>Controls and input groups receive <code class="highlighter-rouge">width: auto</code> to override the ZomCSS default <code class="highlighter-rouge">width: 100%</code>.</li>
  <li>Controls <strong>only appear inline in viewports that are at least 576px wide</strong> to account for narrow viewports on mobile devices.</li>
</ul>

<p>You may need to manually address the width and alignment of individual form controls with <a href="/guide/spacing.html">spacing utilities</a> (as shown below). Lastly, be sure to always include a <code class="highlighter-rouge">&lt;label&gt;</code> with each form control, even if you need to hide it from non-screenreader visitors with <code class="highlighter-rouge">.sr-only</code>.</p>

<div class="zc-example">
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">
  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
  </div>
  <div class="form-check mb-2 mr-sm-2">
    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
      Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form</span> <span class="na">class=</span><span class="s">"form-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormInputName2"</span><span class="nt">&gt;</span>Name<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control mb-2 mr-sm-2"</span> <span class="na">id=</span><span class="s">"inlineFormInputName2"</span> <span class="na">placeholder=</span><span class="s">"Jane Doe"</span><span class="nt">&gt;</span>
<br>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"sr-only"</span> <span class="na">for=</span><span class="s">"inlineFormInputGroupUsername2"</span><span class="nt">&gt;</span>Username<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group mb-2 mr-sm-2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group-prepend"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"input-group-text"</span><span class="nt">&gt;</span>@<span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"inlineFormInputGroupUsername2"</span> <span class="na">placeholder=</span><span class="s">"Username"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<br>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check mb-2 mr-sm-2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"inlineFormCheck"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"inlineFormCheck"</span><span class="nt">&gt;</span>
      Remember me
    <span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<br>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary mb-2"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<p>Custom form controls and selects are also supported.</p>

<div class="zc-example">
<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected="">Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
  </div>
  <button type="submit" class="btn btn-primary my-1">Submit</button>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form</span> <span class="na">class=</span><span class="s">"form-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"my-1 mr-2"</span> <span class="na">for=</span><span class="s">"inlineFormCustomSelectPref"</span><span class="nt">&gt;</span>Preference<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;select</span> <span class="na">class=</span><span class="s">"custom-select my-1 mr-sm-2"</span> <span class="na">id=</span><span class="s">"inlineFormCustomSelectPref"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;option</span> <span class="na">selected</span><span class="nt">&gt;</span>Choose...<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"1"</span><span class="nt">&gt;</span>One<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"2"</span><span class="nt">&gt;</span>Two<span class="nt">&lt;/option&gt;</span>
    <span class="nt">&lt;option</span> <span class="na">value=</span><span class="s">"3"</span><span class="nt">&gt;</span>Three<span class="nt">&lt;/option&gt;</span>
  <span class="nt">&lt;/select&gt;</span>
<br>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"custom-control custom-checkbox my-1 mr-sm-2"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">class=</span><span class="s">"custom-control-input"</span> <span class="na">id=</span><span class="s">"customControlInline"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"custom-control-label"</span> <span class="na">for=</span><span class="s">"customControlInline"</span><span class="nt">&gt;</span>Remember my preference<span class="nt">&lt;/label&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<br>
  <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary my-1"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<div class="zc-callout zc-callout-warning">
<h5 id="alternatives-to-hidden-labels">Alternatives to hidden labels</h5>
<p>Assistive technologies such as screen readers will have trouble with your forms if you don’t include a label for every input. For these inline forms, you can hide the labels using the <code class="highlighter-rouge">.sr-only</code> class. There are further alternative methods of providing a label for assistive technologies, such as the <code class="highlighter-rouge">aria-label</code>, <code class="highlighter-rouge">aria-labelledby</code> or <code class="highlighter-rouge">title</code> attribute. If none of these are present, assistive technologies may resort to using the <code class="highlighter-rouge">placeholder</code> attribute, if present, but note that use of <code class="highlighter-rouge">placeholder</code> as a replacement for other labelling methods is not advised.</p>
</div>

<h2>Help text</h2>

<p>Block-level help text in forms can be created using <code class="highlighter-rouge">.form-text</code> (previously known as <code class="highlighter-rouge">.help-block</code> in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like <code class="highlighter-rouge">.text-muted</code>.</p>

<div class="zc-callout zc-callout-warning">
<h5>Associating help text with form controls</h5>

<p>Help text should be explicitly associated with the form control it relates to using the <code class="highlighter-rouge">aria-describedby</code> attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.</p>
</div>

<p>Help text below inputs can be styled with <code class="highlighter-rouge">.form-text</code>. This class includes <code class="highlighter-rouge">display: block</code> and adds some top margin for easy spacing from the inputs above.</p>

<div class="zc-example">
<label for="inputPassword5">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputPassword5"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
<span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">id=</span><span class="s">"inputPassword5"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">aria-describedby=</span><span class="s">"passwordHelpBlock"</span><span class="nt">&gt;</span>
<span class="nt">&lt;small</span> <span class="na">id=</span><span class="s">"passwordHelpBlock"</span> <span class="na">class=</span><span class="s">"form-text text-muted"</span><span class="nt">&gt;</span>
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
<span class="nt">&lt;/small&gt;</span></code></pre></figure>

<p>Inline text can use any typical inline HTML element (be it a <code class="highlighter-rouge">&lt;small&gt;</code>, <code class="highlighter-rouge">&lt;span&gt;</code>, or something else) with nothing more than a utility class.</p>

<div class="zc-example">
<form class="form-inline">
  <div class="form-group">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form</span> <span class="na">class=</span><span class="s">"form-inline"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"inputPassword6"</span><span class="nt">&gt;</span>Password<span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"password"</span> <span class="na">id=</span><span class="s">"inputPassword6"</span> <span class="na">class=</span><span class="s">"form-control mx-sm-3"</span> <span class="na">aria-describedby=</span><span class="s">"passwordHelpInline"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;small</span> <span class="na">id=</span><span class="s">"passwordHelpInline"</span> <span class="na">class=</span><span class="s">"text-muted"</span><span class="nt">&gt;</span>
      Must be 8-20 characters long.
    <span class="nt">&lt;/small&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<h2>Disabled forms</h2>

<p>Add the <code class="highlighter-rouge">disabled</code> boolean attribute on an input to prevent user interactions and make it appear lighter.</p>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">id=</span><span class="s">"disabledInput"</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">placeholder=</span><span class="s">"Disabled input here..."</span> <span class="na">disabled</span><span class="nt">&gt;</span></code></pre></figure>

<p>Add the <code class="highlighter-rouge">disabled</code> attribute to a <code class="highlighter-rouge">&lt;fieldset&gt;</code> to disable all the controls within.</p>

<div class="zc-example">
<form>
  <fieldset disabled="">
    <div class="form-group">
      <label for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
      <label class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
</div>

<figure class="zc-highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;form&gt;</span>
  <span class="nt">&lt;fieldset</span> <span class="na">disabled</span><span class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"disabledTextInput"</span><span class="nt">&gt;</span>Disabled input<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">type=</span><span class="s">"text"</span> <span class="na">id=</span><span class="s">"disabledTextInput"</span> <span class="na">class=</span><span class="s">"form-control"</span> <span class="na">placeholder=</span><span class="s">"Disabled input"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-group"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">for=</span><span class="s">"disabledSelect"</span><span class="nt">&gt;</span>Disabled select menu<span class="nt">&lt;/label&gt;</span>
      <span class="nt">&lt;select</span> <span class="na">id=</span><span class="s">"disabledSelect"</span> <span class="na">class=</span><span class="s">"form-control"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;option&gt;</span>Disabled select<span class="nt">&lt;/option&gt;</span>
      <span class="nt">&lt;/select&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"form-check"</span><span class="nt">&gt;</span>
      <span class="nt">&lt;input</span> <span class="na">class=</span><span class="s">"form-check-input"</span> <span class="na">type=</span><span class="s">"checkbox"</span> <span class="na">id=</span><span class="s">"disabledFieldsetCheck"</span> <span class="na">disabled</span><span class="nt">&gt;</span>
      <span class="nt">&lt;label</span> <span class="na">class=</span><span class="s">"form-check-label"</span> <span class="na">for=</span><span class="s">"disabledFieldsetCheck"</span><span class="nt">&gt;</span>
        Can't check this
      <span class="nt">&lt;/label&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;button</span> <span class="na">type=</span><span class="s">"submit"</span> <span class="na">class=</span><span class="s">"btn btn-primary"</span><span class="nt">&gt;</span>Submit<span class="nt">&lt;/button&gt;</span>
  <span class="nt">&lt;/fieldset&gt;</span>
<span class="nt">&lt;/form&gt;</span></code></pre></figure>

<div class="zc-callout zc-callout-warning">
<h5>Caveat with anchors</h5>

<p>By default, browsers will treat all native form controls (<code class="highlighter-rouge">&lt;input&gt;</code>, <code class="highlighter-rouge">&lt;select&gt;</code> and <code class="highlighter-rouge">&lt;button&gt;</code> elements) inside a <code class="highlighter-rouge">&lt;fieldset disabled&gt;</code> as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes <code class="highlighter-rouge">&lt;a ... class="btn btn-*"&gt;</code> elements, these will only be given a style of <code class="highlighter-rouge">pointer-events: none</code>. As noted in the section about <a href="/guide/buttons.html">disabled state for buttons</a> (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn’t fully supported in Internet Explorer 10, and won’t prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.</p>
</div>

<div class="zc-callout zc-callout-danger">
<h4 id="cross-browser-compatibility">Cross-browser compatibility</h4>

<p>While ZomCSS will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the <code class="highlighter-rouge">disabled</code> attribute on a <code class="highlighter-rouge">&lt;fieldset&gt;</code>. Use custom JavaScript to disable the fieldset in these browsers.</p>
</div>
