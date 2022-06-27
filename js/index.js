$(function(){

    $('.intro-slider').slick({
        arrows: false,
        dots: true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".menu, .intro__column").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});











/* основные идеи
1 - разделить город по районам. Выбрать район.
2 - составить рейтинг инфраструктуры. Поставить балл за:
- магазы
- поликлиники
- ресторан*бар 
- исторический центр

3 экологиеческий рейтингю Поставить балл.
4 транспортная доступность

*/

// function alertValues(elemmentParameter) {
//     console.log(elemmentParameter.value);
//     console.log(elemmentParameter.className);
// }

// function getEl(id) {
//     console.log('ccccc');
//    let el =  document.getElementById(id);
//    return el;
// }

// let act1Id = 'Choose 1act';
// let act1El = getElementById(id);
// alert(act1El);

// let act2Id = 'Choose 2act';
// let act2El = getElementById(id);
// alert(act2El);

// let act3Id = 'Choose 3act';
// let act3El = getElementById(id);
// alert(act3El);




// let act2 = 'Choose 2act';
// let act3 = 'Choose 3act';
// logValue(act1)
// logValue(act2)
// logValue(act3)

// let value = getValue(act1);
// alert(value)


// let locationStep = document.getElementById('location');

// let trasport = document.getElementById('trasport');
// alert(trasport.value);

// let avatarCul = document.getElementById('avatar-wrapper');
// alert(avatarCul.innerHTML)

// let avatar = document.getElementById('avatar');
// alert(avatar.alt);


// helloMessageElAct2.className='2act default-input error-input';

// alert(locationStep.innerHTML)

// avatar.title = 'IT IS SAIN-P NEWS'
// locationStep.value = 'BZH';
// trasport.value = 'I have no interests';

// avatarCul.innerHTML =  'z<ul><'




// let helloMessageElAct1 = document.getElementById('Choose 1act');
// alertValues(helloMessageElAct1);

// let helloMessageElAct2 = document.getElementById('Choose 2act');
// alertValues(helloMessageElAct2);

// let helloMessageElAct3 = document.getElementById('Choose 3act');
// alertValues(helloMessageElAct3);


//второй заход
// function act1Log() {
// let id = 'Choose 1act';
// let el = document.getElementById(id);
// console.log(el.value);
// }

// function act2Log(){
// let id = 'Choose 2act';
// let el = document.getElementById(id);
// console.log(el.value);
// }

// function act3Log() {
// let id = 'Choose 3act';
// let el = document.getElementById(id);
// console.log(el.value);
// }



// function actLog(id) {
//     let el = document.getElementById(id);
//     console.log(el.value);
// }

// function getValue(id) {
//     let el = document.getElementById(id);
//     return el.value;
// }

// let act1Id = 'Choose 1act';
// let act2Id = 'Choose 2act';
// let act3Id = 'Choose 3act';

// actLog(act1Id);
// actLog(act2Id);
// actLog(act3Id); 
// let value = getValue(act1Id);
// alert(value)


// greeting();
// function greeting() {
//     alert('Hi, you should choose the location to see some INFO about it.');
// }

// letYourPrice()
// function letYourPrice(){
//     let money = +prompt('How much for appartment?', 'may be 25_000');
//     if (money <= 25_000 ) {
//         alert('for this money BZH and North-Namyv are great choises');
//     }
//     if (money >= 25_000 && money <= 30_000) {
//         alert('for this money Moskovsky is best choise');
//     }
//     if (money >= 30_000) {
//         alert('for this money Central is best choises');
//     }
// }

// chooseLocation();
// function chooseLocation() {
//     let answer = prompt('So go ahead!', 'Moskovsky, North-Namyv, Central, BZH');

//     if (answer == 'Moskovsky') {
//         talkMoskovsky();
//     }

//     if (answer == 'North-Namyv') {
//         talkNorthNamyv();
//     }

//     if (answer == 'Central') {
//         talkCentral();
//     }

//     if (answer == 'BZH') {
//         talkCentral();
//     }
// }


// function talkMoskovsky() {

//     let MSK = {
//         infrastructure: 8,
//         transport: 8,
//         ecology: 8,
//     }

//     let solution = (MSK.infrastructure + MSK.transport + MSK.ecology) / 3;
//      let resul = `great choise ${solution.toFixed(2)} from 10 balls:
//     infrastructure,
//     transport,
//     ecology,`;
//     alert(resul);
// }

// function talkNorthNamyv() {
//     let NN = {
//         infrastructure: 7,
//         transport: 6,
//         ecology: 8,
//     }
//     let solution = (NN.infrastructure + NN.transport + NN.ecology) / 3;
//     let resul = `great choise ${solution.toFixed(2)} from 10 balls:
//     infrastructure,
//     transport,
//     ecology,`;
    
//     alert(resul);
// }

// function talkCentral() {
//     let Central = {
//        infrastructure: 9,
//        transport: 8,
//        ecology: 6,
//     }
//     let solution = (Central.infrastructure + Central.transport + Central.ecology)/3;
//     let resul = `great choise ${solution.toFixed(2)} from 10 balls:
//     infrastructure,
//     transport,
//     ecology,`;
    
//     alert(resul);
// }

// function talkBZH() {
//     let BZH = {
//        infrastructure: 7,
//        transport: 5,
//        ecology: 7,
//     }
//     let solution = (BZH.infrastructure + BZH.transport + BZH.ecology)/3;
//     let resul = `great choise ${solution.toFixed(2)} from 10 balls:
//     infrastructure,
//     transport,
//     ecology,`;
    
//     alert(resul);
// }

