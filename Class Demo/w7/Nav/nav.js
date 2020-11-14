function change(index) {
    const p = document.getElementById('show');
    console.log('show', p);
    switch (index) {
      case 1:
        p.innerHTML = '<iframe  width=100% height=100% src="./w1/Business Card/intro.html" />';
        break;
      case 2:
        p.innerHTML =
          '<iframe  width=100% height=100% src="./w1/Pokemon/pokemon.html" />';
        break;
      case 3:
        p.innerHTML =
          '<iframe  width=100% height=100% src="./w2/Image Gallery/imgGallery.html" />';
        break;
      case 4:
        p.innerHTML =
          '<iframe  width=100% height=100% src="./w2/Blog/blog.html" />';
        break;
      case 5:
        p.innerHTML =
          '<iframe  width=100% height=100% src="./w3/Div/div.html" />';
        break;
      case 6:
        p.innerHTML =
          '<iframe  width=100% height=100% src="./w3/Div_Tku60/div_tku60.html" />';
        break;
      case 7:
        p.innerHTML =
          '<iframe  width=100% height=100% src="./w6/Microsoft Clone/index.html" />';
        break;
    }
  }