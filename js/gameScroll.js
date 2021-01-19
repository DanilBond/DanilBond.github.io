let gImages = document.getElementsByClassName('GIMG');
let gTitles = document.getElementsByClassName('GTITLE');
let gDesc = document.getElementsByClassName('GDESC');
let gButtons = document.getElementsByClassName('GBUTTON');
let scrollIndex = 0;

let imagesData = [
 './img/gameA4.webp',
 './img/gameTREX.webp',
 './img/gameZHW.webp',
 './img/gamePAR.webp',
 './img/gameA4RUN.webp'
];
let titlesData = [
    'А4 убеги от зомби',
    'Dino 3d run',
    'Зомби: Hot Wave',
    'Paralello',
    'А4 Убеги от зоны!'
   ];

let descData = [
    'А4 решил записать опасное видео что бы на него подписалось много человек! Помогу ему записать видео и собрать лайки при этом не дай ему умереть!!!',
    'Всеми любимый динозаврик из браузера Chrome теперь в 3д. Насладись игрой пересекая бесконечную, но красивую пустыню. Не украл у хауди хо, а адаптировал ☝',
    'В этой невероятно атмосферной игре, ты должен будешь выжить среди кучи страшных и опасных зомби. Твоя задача спасать беззащитных людей, находить разные припасы. Гляди в оба!',
    'Готов погрузится в мир в котором у тебя нет времени стоять на месте? Отлично! Самое время испытать реакцию и показать что ты лучший!',
    'Догони популярность и собери много подписчиков и лайков!'
   ];

   let urlData = [
    'https://play.google.com/store/apps/details?id=com.SosGames.A4',
    'https://play.google.com/store/apps/details?id=com.SosGamesCompany.Trexrunner',
    'https://play.google.com/store/apps/details?id=com.SosGames.SUS',
    'https://play.google.com/store/apps/details?id=com.SosGames.Paralello',
    'https://play.google.com/store/apps/details?id=com.SosGames.RunGuy'
   ];

function leftArrow(){
    if(scrollIndex >= 1){
    scrollIndex--;
    }
    Scroll(scrollIndex);
    console.log(scrollIndex);
}
function rightArrow(){
    if(scrollIndex < 2){
   scrollIndex++;
    }
   Scroll(scrollIndex);
   console.log(scrollIndex);
}
function Scroll(Id){
switch(Id){
    case 0:
        gImages[0].src = imagesData[0];
        gImages[1].src = imagesData[1];
        gImages[2].src = imagesData[2];

        gTitles[0].innerHTML = titlesData[0];
        gTitles[1].innerHTML = titlesData[1];
        gTitles[2].innerHTML = titlesData[2];
        
        gDesc[0].innerHTML = descData[0];
        gDesc[1].innerHTML = descData[1];
        gDesc[2].innerHTML = descData[2];

        gButtons[0].href = urlData[0];
        gButtons[1].href = urlData[1];
        gButtons[2].href = urlData[2];
    break;
    case 1:
        gImages[0].src = imagesData[3];
        gImages[1].src = imagesData[0];
        gImages[2].src = imagesData[1];

        gTitles[0].innerHTML = titlesData[3];
        gTitles[1].innerHTML = titlesData[0];
        gTitles[2].innerHTML = titlesData[1];

        gDesc[0].innerHTML = descData[3];
        gDesc[1].innerHTML = descData[0];
        gDesc[2].innerHTML = descData[1];

        gButtons[0].href = urlData[3];
        gButtons[1].href = urlData[0];
        gButtons[2].href = urlData[1];
    break;
    case 2:
        gImages[0].src = imagesData[4];
        gImages[1].src = imagesData[3];
        gImages[2].src = imagesData[0];

        gTitles[0].innerHTML = titlesData[4];
        gTitles[1].innerHTML = titlesData[3];
        gTitles[2].innerHTML = titlesData[0];
        
        gDesc[0].innerHTML = descData[4];
        gDesc[1].innerHTML = descData[3];
        gDesc[2].innerHTML = descData[0];

        gButtons[0].href = urlData[4];
        gButtons[1].href = urlData[3];
        gButtons[2].href = urlData[0];
    break;
}
}
