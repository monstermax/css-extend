# css-extend
extend css classes with other classes


## This CSS code

<pre>
&lt;style&gt;
h3 {
  color: green;
  <b>content: "@extend .upper-case .text-arial";</b>
}

h4 {
  <b>content: "@extend .bg-dark .text-red .text-arial";</b>
}

h5 {
  <b>content: "@extend h4";</b>
  color: yellow;
}


.text-arial {
  font-family: arial;
}

.upper-case {
  text-transform: uppercase;
}

.text-red {
  color: red;
}

.bg-dark {
  background-color: darkgrey;
}
&lt;/style&gt;
</pre>


## Is tranformed to 

<pre>
&lt;style&gt;
h3 {
  color: green;
  <b>text-transform: uppercase;</b>
  <b>font-family: arial;</b>
}

h4 {
  <b>background-color: darkgrey;</b>
  <b>color: red;</b>
  <b>font-family: arial;</b>
}

h5 {
  <b>color: yellow;</b>
  <b>background-color: darkgrey;</b>
  <b>font-family: arial;</b>
}


.text-arial {
  font-family: arial;
}

.upper-case {
  text-transform: uppercase;
}

.text-red {
  color: red;
}

.bg-dark {
  background-color: darkgrey;
}
&lt;/style&gt;
</pre>


## Using this javascript code

```javascript
<pre code="javascript">
&lt;script type="text/javascript" src="css_extend.js"&gt;&lt;/script&gt;

&lt;script type="text/javascript"&gt;
applyCssExtend();
&lt;/script&gt;
</pre>
```