'use strict'
{

  // １．animation-showをすべて取得する。
  // ２．ブラウザの上部から各エレメントまでの距離を出す
  // ３．画面の高さを出す
  // ４．２－３＋エレメントの高さの6割を出す
  // ５．４の条件になったときclass属性show をエレメントに追加する

  
  const animationShow = document.querySelectorAll('.animation-show');

  const scrollAnimation = document.addEventListener('scroll', () => {
    for (let i = 0; i < animationShow.length; i++) {
      const animationDistance = animationShow[i].getBoundingClientRect().top + animationShow[i].clientHeight * .5;
      if (window.innerHeight > animationDistance) {
        animationShow[i].classList.add('show');
      }
    }
  });

  //１．oopeとcloseを取得する
  //２．openをクリックしたらopenにhydeクラスをつけて、closeにshowクラスをつける
  //３．closeをクリックしたらcloseのshowクラスを外して、openのhydeクラスを外す

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay')

  open.addEventListener('click', () => {
    open.classList.add('hyde');
    overlay.classList.add('show');
  });

  close.addEventListener('click', () => {
    open.classList.remove('hyde');
    overlay.classList.remove('show');
  });
}



