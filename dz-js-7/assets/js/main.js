let playList = [
   {
      author: "LED ZEPPELIN",
      song:"STAIRWAY TO HEAVEN"
   },
   {
      author: "QUEEN",
      song:"BOHEMIAN RHAPSODY"
   },
   {
      author: "LYNYRD SKYNYRD",
      song:"FREE BIRD"
   },
   {
      author: "DEEP PURPLE",
      song:"SMOKE ON THE WATER"
   },
   {
      author: "JIMI HENDRIX",
      song:"ALL ALONG THE WATCHTOWER"
   },
   {
      author: "AC/DC",
      song:"BACK IN BLACK"
   },
   {
      author: "QUEEN",
      song:"WE WILL ROCK YOU"
   },
   {
      author: "METALLICA",
      song:"ENTER SANDMAN"
   }
];
function showPlayList() {
   let htmlElemant = document.createElement('ul');
   for (let item of playList) {
      let childElement = document.createElement('li');
      let authorElement = document.createElement('b');
      authorElement.innerText = `${item.author}: `;
      childElement.append(authorElement);
      childElement.append(item.song);
      childElement.classList.add('mb-2');
      htmlElemant.append(childElement);
   }
   document.getElementById('playList').append(htmlElemant);
};
showPlayList();
function showModalWindow() {
   let modalWindowHtmlElement = document.createElement('div');
   modalWindowHtmlElement.id = 'my-window';
   modalWindowHtmlElement.classList.add('text-center');
   modalWindowHtmlElement.classList.add('align-middle');
   modalWindowHtmlElement.style.position = 'fixed';
   modalWindowHtmlElement.style.top = '50%';
   modalWindowHtmlElement.style.left = '50%';
   modalWindowHtmlElement.style.borderRadius = '10px';
   modalWindowHtmlElement.style.padding = '15px 20px';
   modalWindowHtmlElement.style.backgroundColor = '#fff';
   modalWindowHtmlElement.style.zIndex = '1000';
   modalWindowHtmlElement.style.width = '50vw';
   modalWindowHtmlElement.style.translate = '-50% -50%';

   let overLay = document.createElement('div');
   overLay.id = 'overlay';
   overLay.style.position = 'fixed';
   overLay.style.zIndex = '999';
   overLay.style.width = '100vw';
   overLay.style.height = '100vh';
   overLay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';

   let closeBtn = document.createElement('button');
   closeBtn.id = 'closeBtn';
   closeBtn.classList.add('btn');
   closeBtn.classList.add('btn-danger');
   closeBtn.innerText = 'Закрити';
   closeBtn.onclick = closeWindow;
   modalWindowHtmlElement.append(closeBtn);

   let textElement = document.createElement('p');
   textElement.innerText = ' На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. ';
   modalWindowHtmlElement.prepend(textElement);


   document.body.prepend(modalWindowHtmlElement);

   modalWindowHtmlElement.before(overLay);
   function closeWindow() {
      document.getElementById('my-window').remove();
      document.getElementById('overlay').remove();
   };
}
function changeTraficLight() {
   const traficLights = document.getElementById('traficLight');
   const activeLight = traficLights.getElementsByClassName('active')[0];
   activeLight.classList.remove('active');
   nextActiveLight = activeLight.nextElementSibling;
   (nextActiveLight !== null) ? nextActiveLight.classList.add('active') : traficLights.firstElementChild.classList.add('active');
}