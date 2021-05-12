# object-fit-polyfill

**Markup**
```
<div class="container">
  <img src="image.jpg" />
  <h2>Text</h2>
</div>
```

**Style**
```
.container {
  position: relative;
  width: 100%;
  height: 30em;
}
.container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.container h2 {
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
```
