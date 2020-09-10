# css-extend
extend css classes with other classes


## This CSS code

```css
<style>
h3 {
  color: green;
  content: "@extend .upper-case .text-arial";
}

h4 {
  content: "@extend .bg-dark .text-red .text-arial";
}

h5 {
  content: "@extend h4";
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
</style>
```

## Is tranformed to this

```css
<style>
h3 {
  color: green;
  text-transform: uppercase;
  font-family: arial;
}

h4 {
  background-color: darkgrey;
  color: red;
  font-family: arial;
}

h5 {
  color: yellow;
  background-color: darkgrey;
  font-family: arial;
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
</style>
```


## Using this javascript code

```javascript
<script type="text/javascript" src="css_extend.js"></script>

<script type="text/javascript">
applyCssExtend();
</script>
```

