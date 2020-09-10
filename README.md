# css-extend
extend css classes with other classes


## This CSS code

```css
<style>
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
</style>
```

## Is tranformed to this

```css
<style>
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
</style>
```


## Using this javascript code

```javascript
<script type="text/javascript" src="css_extend.js"></script>

<script type="text/javascript">
applyCssExtend();
</script>
```