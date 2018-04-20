
(function(){
var a = document.querySelector('#column-left'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if ( Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('width') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; ';
      }
    }
    a.innerHTML = '<div style="'+s+'">'+a.innerHTML+'</div>';
    b = a.children[0];
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
}
})()



//*********//

//Counter
function catalogItemCounter(field){
      
      var fieldCount = function(el) {

        var 
          // Мин. значение
          min = el.data('min') || false,

          // Макс. значение
          max = el.data('max') || false, 

          // Кнопка уменьшения кол-ва
          dec = el.prev('.dec'), 

          // Кнопка увеличения кол-ва
          inc = el.next('.inc');

        function init(el) {
          if(!el.attr('disabled')){
            dec.on('click', decrement);
            inc.on('click', increment);
          }

          // Уменьшим значение
          function decrement() {
            var value = parseInt(el[0].value);
            value--;

            if(!min || value >= min) {
              el[0].value = value;
            }
          };

          // Увеличим значение
          function increment() {
            var value = parseInt(el[0].value);
              
            value++;

            if(!max || value <= max) {
              el[0].value = value++;
            }
          };
          
        }

        el.each(function() {
          init($(this));
        });
      };

      $(field).each(function(){
        fieldCount($(this));
      });
    }
    
catalogItemCounter('.fieldCount');








/**/
// console.log($("#order-container").css("height"));
var innerOrderContainer = document.getElementsByClassName('inner-order-container'),
orderContainer = document.getElementsByClassName('order-container');
function verticalCenter(ArrayOfParentBlock,ArrayOfChildBlock,minusNumber){
  for(var i=0; i<ArrayOfParentBlock.length;i++){
    var blockHeight = getComputedStyle(ArrayOfParentBlock[i]).height;
    ArrayOfChildBlock[i].style.paddingTop = (blockHeight.replace(/[^-0-9]/gim,''))/2-minusNumber + "px";
  } 
}

verticalCenter(orderContainer,innerOrderContainer,22);
var checkboxParent = document.getElementsByClassName("checkbox-parent"),
checkboxChild = document.getElementsByClassName("checkbox-child");
verticalCenter(checkboxParent,checkboxChild,0);
var deliveryPrice = document.getElementsByClassName("delivery-price"),
deliveryPriceContent = document.getElementsByClassName("delivery-price-content");
verticalCenter(deliveryPrice,deliveryPriceContent,10);
 var radio = document.getElementsByClassName("radio"),
 deliveryPriceContent = document.getElementsByClassName("delivery-price-content"),
 variantDeliverItem = document.getElementsByClassName("variant-deliver-item"),
 delivery1 = document.getElementById("delivery-1"),
 delivery2 = document.getElementById("delivery-2"),
 delivery3 = document.getElementById("delivery-3"),
 delivery4 = document.getElementById("delivery-4"),
 label =document.getElementsByClassName('myLabel');
 
 blok1 = document.getElementById("firstAddressVersion");
 blok2 = document.getElementById("secondAddressVersion");
 blok3 = document.getElementById("thirdAddressVersion");
 
 function changeColorElementPrice(radioButtonArray, index, blocks,variantDeliverItem,label) {
  radioButtonArray[index].onclick = function () {
    blocks[index].style.background = "#347ab7";
    variantDeliverItem[index].style.borderColor = "#347ab7";
    label[index].style.color = "#347ab7";
    for(var i=0; i<blocks.length;i++)
    {
      if (i!=index) {
        blocks[i].style.background = "inherit";
        variantDeliverItem[i].style.borderColor = "#d6d7d8";
        label[i].style.color = "inherit";
      }


      switch (index) {
        case 0:
        blok1.style.display = "none";
        blok3.style.display = "block";
        blok2.style.display = "none";
        break;
        case 1:
        blok1.style.display = "none";
        blok2.style.display = "block";
        blok3.style.display = "none";
        break;
        case 2:
        blok1.style.display = "none";
        blok2.style.display = "block";
        blok3.style.display = "none";
        break;
      }
    

    }
    
   }  
 }
 for(var i=0; i<radio.length;i++){
  changeColorElementPrice(radio,i,deliveryPriceContent,variantDeliverItem,label);   
 }

// changeColorElementPrice(radio,1,deliveryPriceContent,variantDeliverItem,label);
// changeColorElementPrice(radio,2,deliveryPriceContent,variantDeliverItem,label);
// changeColorElementPrice(radio,3,deliveryPriceContent,variantDeliverItem,label);
// changeColorElementPrice(radio,4,deliveryPriceContent,variantDeliverItem,label);
var wrapNoAvailableItem = document.getElementsByClassName("wrap-noAvailable-item"),
firstDelivery = document.getElementById("firstDelivery"),
secondDelivery = document.getElementById("secondDelivery"),
thirdDelivery = document.getElementById("thirdDelivery"),
fourthDelivery = document.getElementById("fourthDelivery"),
counterWayOfDelivery = -1;

function noAvailableDelivery(wayOfDelivery){
  counterWayOfDelivery++;
  var classList = wayOfDelivery.className.split(/\s+/);
  for (var i = 0; i < classList.length; i++) {
    if (classList[i] == "off") {
      radio[counterWayOfDelivery].setAttribute("disabled","disabled");
      
      wrapNoAvailableItem[counterWayOfDelivery].style.visibility="visible";
      // variantDeliverItem[counterWayOfDelivery].style.opacity = "0.5";
    }
  } 
}
noAvailableDelivery(firstDelivery);
noAvailableDelivery(secondDelivery);
noAvailableDelivery(thirdDelivery);
noAvailableDelivery(fourthDelivery);




var variantWayOfPay = document.getElementsByClassName("variant-way-of-pay");
var radioWayOfPay = document.getElementsByClassName("radioWayOfPay");
var labelWayOfPay = document.getElementsByClassName("labelWayOfPay");
function changeColorElementWayOfPay(radioButtonArray, index, blocks,label) {
  radioButtonArray[index].onclick = function () {
    blocks[index].style.borderColor = "#347ab7";
    label[index].style.color = "#347ab7";
    for(var i=0; i<blocks.length;i++)
    {
      if (i!=index) {
        blocks[i].style.borderColor = "#d6d7d8";
        label[i].style.color = "inherit";
      }
    }
   }  
 }
 
for (var i = 0; i < radioWayOfPay.length; i++) {
  changeColorElementWayOfPay(radioWayOfPay,i,variantWayOfPay,labelWayOfPay);
}
var firstWayOfPay = document.getElementById("firstWayOfPay"),
secondWayOfPay = document.getElementById("secondWayOfPay"),
thirdWayOfPay = document.getElementById("thirdWayOfPay"),
fourthWayOfPay = document.getElementById("fourthWayOfPayWrap"),
fifthWayOfPay = document.getElementById("fifthWayOfPay"),
sixthWayOfPay = document.getElementById("sixthWayOfPay"),
seventhWayOfPay = document.getElementById("seventhWayOfPay");
var counterPayOfDelivery=-1;
var wrapNoAvailableItemPay = document.getElementsByClassName("wrap-noAvailable-item-pay");

function noAvailablePay(wayOfPay){
  counterPayOfDelivery++;
  var classList = wayOfPay.className.split(/\s+/);
  for (var i = 0; i < classList.length; i++) {
    if (classList[i] == "offPay") {
      radioWayOfPay[counterPayOfDelivery].setAttribute("disabled","disabled");
      wrapNoAvailableItemPay[counterPayOfDelivery].style.visibility="visible";

    }
  } 
}
noAvailablePay(firstWayOfPay);
noAvailablePay(secondWayOfPay);
noAvailablePay(thirdWayOfPay);
noAvailablePay(fourthWayOfPay);
noAvailablePay(fifthWayOfPay);
noAvailablePay(sixthWayOfPay);
noAvailablePay(seventhWayOfPay);
var sale = document.getElementsByClassName("sale");
function showSale(sale) {
  for(var j=0; j<sale.length;j++){
    var classList = sale[j].className.split(/\s+/);
    
    for(var i=0; i<classList.length;i++){
      if (classList[i] == "saleOn") {
        
        sale[j].style.visibility = "visible";
      }
    }
      
  
  
}}
showSale(sale);
var radioRegister = document.getElementsByClassName("register-wrap");
var radioRegister1 = document.getElementsByClassName("label-r");

blok11 = document.getElementById("login");
blok22 = document.getElementById("register1");
console.log(radioRegister);
function radioRegisterColor(radioRegister,index) {
  radioRegister[index].onclick = function () {
    radioRegister[index].style.borderColor = "#347ab7";
    radioRegister1[index].style.color = "#347ab7";
    for (var i = 0; i < radioRegister.length; i++) {
      if (i!=index) {
        radioRegister[i].style.borderColor = "#d6d7d8";
        radioRegister1[i].style.color = "#39393a";
      }
      switch (index) {
        case 0:
        blok11.style.display = "none";
        blok22.style.display = "block";
        break;
        case 1:
        blok11.style.display = "block";
        blok22.style.display = "none";
        break;
        case 2:
        blok11.style.display = "block";
        blok22.style.display = "none";
        break;
      }
    }
  }
}
for(var i=0;i<radioRegister.length;i++){
  radioRegisterColor(radioRegister,i);
}

