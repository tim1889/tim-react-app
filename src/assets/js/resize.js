(function () {
  window.onresize = function () {
    resize();
  };

  function resize () {
    // html:25.6px: 39rem 960px
    // html:40px: 39rem 1560px
    const basePc = 39;// rem
    const baseApp = 16;// rem
    const windowW = window.screen.width;
    const documnetW = document.body.clientWidth;
    const html = document.getElementsByTagName('html')[0];
    if (windowW >= 1200) {
      if (documnetW >= 1560) {
        html.style.fontSize = '40px';
        return;
      }
      if (documnetW <= 980) {
        html.style.fontSize = 980 / basePc + 'px';
        return;
      }
      html.style.fontSize = documnetW / basePc + 'px';// 在1560和960之间，除以39的基数，来算font-size
    } else {
      // if (documnetW > 640) {
      //   html.style.fontSize = '40px';
      //   return;
      // }
      html.style.fontSize = (documnetW / baseApp) + 'px';
    }
  }
  resize();

  window.resize = resize;
})();
