/*
var a = 'Toi la hoc sinh thay Ba';
console.log(a.trim());
var anArray = [];
var anArray2 = ['hhh'];
if(anArray.length < 3){
    anArray.shift();
}else if(anArray.length > 2){
    anArray.pop(anArray.length-1);
    anArray.pop(anArray.length-2);
}
anArray = anArray.concat(anArray2);
console.log(anArray);
*/

// OBJECT
/*
var myInfo = {
    age : 18,
    name : 'Lyvy',
    born : 'HaTinh',
};
var myKey = 'name';

console.log(myInfo[myKey]);
*/

/*
let birthday = new Date('December 17, 1995 03:24:00');
var date = new Date();
*/

/*
var Course = {
    name : 'Javascript',
    coin: 250
}

if(Course.coin >= 250){
    console.log(`${Course.coin} Coin`)
}else{
    console.log('Free');
}

var result ;
result = (Course.coin >= 250) ? `${Course.coin} Coin` : 'Free';
console.log(result);
*/


/*
var n = 1000;
for(var i = 1; i<= n; i++ ){
    console.log(i);
}
*/

/*
    vong for luon chay dau tien nen la no se vo thang vao mang va vao thuoc tinh length nen la viet ben ngoai de
    tang cai performent cho code toi uu hon
var myLove = [
    'love',
    'jsp',
    'php'
]
var arrLove = myLove.length;
for (var i = 0; i < arrLove; i++){
    console.log(myLove[i]);
}
*/

/*
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for(var i = 0 ; i< 5; i++){
    console.log(i);
}
*/

/*
var i = 11;
do {
    console.log(i);
    i++;
}while(i < 10)
*/

// do-while
/*
var i = 0;
var isSuccess = false;
do{
    i++;
    console.log('Nap the lan: ' +i);

    if(false){
        isSuccess = true;
    }
}while(i<=3 && !isSuccess);
*/

/*
var i = 0
var isCorrect = 'abcd' // mật khẩu đúng là abcd
var result = false
do {
    i++;
    var inputPassword = prompt('Nhập mật khẩu')
    if (isCorrect == inputPassword) {
        result = true;
        console.log("Đăng nhập thành công")
    }
    else if (i == 4) { console.log("Tài khoản bị khoá") } 
    else { console.log("Đăng nhập thất bại lần thứ " + i) }
} while (!result && i <= 3)*/

// Break and Continue;
/*
for(var i = 0; i< 10; i++)
{
    if(i % 2 !== 0){
        continue;
    }else {
        console.log(i);
    }
}
*/

// Nested Loop;
/*
var myArray = [
    [2,4],
    [3,5],
    [4,6]
];

for(var i = 0; i< myArray.length; i++){
    for(var j = 0; j< myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
*/

/*
for(var i = 100; i >= 0; i -= 5){
    console.log(i);
}
*/

// LOOP FOREACH duyet qua vi tri va item phan tu

// var Course = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML,CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJs',
//         coin: 500
//     },
//     {
//         id: 7,
//         name: 'Ruby',
//         coin: 10
//     },
// ];

// Course.forEach(element => {
//     console.log(element);
// });

// Course.forEach(function (couse, index){
//     console.log(index, couse);
// });


// var isFree = Course.every(function (couse, index){
//    return couse.coin === 0;
// });

// console.log(isFree);

// find
// var couse = Course.find(function (couse, index){
//    return couse.name === 'PHP';
// });

// console.log(couse);

// Filter
// var couse = Course.filter(function (couse, index){
//    return couse.name === 'Ruby';
// });

// console.log(couse);

// var formValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value:  'Hà Nội' },];
//     // ...
// var numbers = [1, 1,3];
// var couse = numbers.every(function (couse, index){
//     return (couse > 0) ;
// })
// console.log(couse);

/*
var couses = [
    { name: 'Javascript', vnd: 1000000 },
    { name: 'PHP', vnd: 990000 },
    { name: 'HTML, CSS', vnd: 0 }
    // ...
]

var couse = couses.some(function (couse, index){
    return (couse.vnd === 0) ;
});
console.log(couse);

var fish = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    },
    // ...
];

function findAMonsterByAttack(monsters) {
    var result = monsters.find(function(monster) {
        return monster.attack === 150;
    })
    return result === undefined ? null : result;
}


/*
var couses = [
    {
        id: 1,
        name: 'javascript',
        coin : 100
    },
    {
        id: 2,
        name: 'html, css',
        coin : 100
    }
];

var newCouse = couses.map(function(couse, index, originArray){
    // console.log(couse);
    // return couse;
    return{
        id: couse.id,
        name: `Khoa hoc: ${couse.name}`,
        coin: couse.coin,
        coinText : `Gia: ${couse.coin}`,
        index: index,
        originArray: originArray,
    };
});
*/





// console.log(newCouse);
// mang moi no se lay bat cu gia tri ra ma function tra ve
// originArray : mang goc luc chua change

// var cars = ['BMW', 'Mercedes', 'Vinfast'];
// var newCar = cars.map(function(car, index){
//     return `<li>${car}</li>`;
// });
// console.log(newCar.join(','));
// gia tri khoi tao
// acculator : bien luu tru
// current : gtri hien tai
/*
METHOD REDUCE
var i = 0;
function coinHandler(acculator, currentValue, currentIndex, originArray){
    i++;
    var total = currentValue.coin + acculator;
    Bien tich tru cua lan chay thu nhat se duoc cong don cho lan chay sau
     vd lan 1 bien tich tru = 100(total: bien tich tru + currentValue) lan 2 gtri bien tich tru se = 100
    console.table({
        'Luot chay:' : i, 
        'Bien tich tru:' :acculator,
        'gia khoa hoc:' : currentValue.coin,
        'tich tru duoc:' :total,
    })
    return total;
}
luu tru 1 gtri xuyen suot tu lan chay dau tien
luot 1 bien tich tru = iniitalValue = 0
var newCouse1 = couses.reduce(coinHandler, 0);
initialValue
console.log(newCouse1);
*/

/*
var newCouse2 = couses.reduce(function(acculator, currentValue){
    return acculator + currentValue.coin;
}, 0);
console.log(newCouse2);
*/


/*
var numbers = [1, 2, 0, 6];
var numbers1 = [[{}, 1, [], 2, 'hi', 0, 6]];

var newNumber = numbers.reduce(function(acculator, currentValue){
    return acculator + currentValue;
});
console.log(newNumber);

var b = numbers1.filter(function(value){
    if((!(value.isNaN()) || typeof value === 'number')){
        return value;
    }
});
console.log(b1);
*/

/*
var inputs = [ 
    {
     name: 'Giày', 
     amount: 100 
    }, 
    { name: 'Áo phao', 
        amount: 110 },
    { name: 'Smart phone',
    amount: 400 },
];

var newInputs = inputs.reduce(function(acculator, currentValue){
    return acculator + currentValue.amount;
}, 0);
*/


// console.log(newInputs);

/*
var input = [1, 2, function() {}, NaN];

var inputArray = input.filter(function(value) {
    return Number(value);
});

var newInputs = inputArray.reduce(function(tong, value) {
    return tong + value;
})
console.log(newInputs);
*/

//  METHOD REDUCE LAM PHANG mang

/*
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = depthArray.reduce(function(flatOutput, flatItem){
    return flatOutput.concat(flatItem);
}, []);

console.log(flatArray);
*/

/*
var topics = [
    {
        topic : 'front-end',
        courses: 
        [
            {
                id : 1,
                title : 'HTML, CSS'
            }, 
            {
                id : 2,
                title : 'Javascript'
            }
        ]
    }, 
    {
        topic : 'back-end',
        courses: 
        [
            {
                id : 1,
                title : 'PHP'
            }, 
            {
                id : 2,
                title : 'NodeJS'
            }
        ]
    }
];
// dung reduce de nhan ve 1 course va dung map de render ra html hien thi nguoi dung
var flatTopics = topics.reduce(function (flatOutput, topicItem) {
    // lan dau tien mang rong
    return flatOutput.concat(topicItem.courses);
}, []);
// console.log(flatTopics);

var htmlTopics = flatTopics.map(function(item){
    return `   
        <div>
            <h2>${item.title}</h2>
            <p>${item.id}<p>
        </div>
    `;
});
console.log(htmlTopics.join(''));


var course = [
    { name: 'Javascript', coin: 1000 },
    { name: 'PHP', coin: 1200 },
    { name: 'Dart', coin: 1400 }
]

var newCourse = course.reduce(function (CourseOutput, itemCourse){
    return CourseOutput+itemCourse.coin;
}, 0);
console.log(newCourse);
*/

// METHOD REDUCE 2 TU DINH NGHIA
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.reduce = function(callback, result){
    let index = 0;
    if(arguments.length < 2){
        // k truyen initialValue (= result)
        index = 1;
        result = this[0];
    }
    for (; index < this.length; index++) {
        result = callback(result, this[index], index, this);
    }
    return result;
};

var newNumber = numbers.reduce(function (total , number, index, array) {
    console.log(total, number, index, array);
    return total + number;
}, 10);

console.log(newNumber);
*/

/*
var random = Math.floor(Math.random() *5);

if(random < 50) {
    // console.log('Dap thanh cong');
}

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]

console.log(bonus[random]);
*/

// CALL BACK

/*
function myFunction (param) {
    param('Hoc Lap Trinh');
}

function myCallBack(value) {
    console.log('Gia tri:' + value);
}

myFunction(myCallBack);
*/

//FOR EACH FUNCTION
/*
Array.prototype.forEach2 = function (callback) {

    for (var i = 0; i < this.length; i++) {
        results = callback(this[i], i);
    }
}

var formValues = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]
var result = {};


formValues.forEach2(function(form, stt){
    var value1 = form.field;
    var value2 = form.value;
    result[value1] = value2; 
    console.log(form)
})  
console.log(result) ;


 //FIND FUNCTION

Array.prototype.find2 = function(callback) {
    for (var i = 0; i < this.length; i++) {
        objFind = callback(this[i], i)
        if (objFind) {
            objResult = this[i];
            break;
        } else {
            objResult = undefined;
        }
    }
    return objResult;
    
}

//  let numbers = [1,2,  3, 4, 5];

  var result = numbers.find2(function(number) {
      return number === 4;
  })

//   console.log(result)


  // FILTER FUNCTION
  Array.prototype.filter2 = function(callback) {
    var objResult = [];
    for (var i = 0; i < this.length; i++) {
        objFind = callback(this[i], i)
        if (objFind) {
            objResult.push(this[i])
        } else {
            objResult = objResult;
        }
    }
    return objResult;
    
}

//  let numbers = [1,2,4,  3, 4, 5, 4];

  var result = numbers.filter2(function(number) {
      return number === 4;
  })

//   console.log(result)

  // SOME FUNCTION

  Array.prototype.some2 = function(callback) {
    var objResult;
    for (var i = 0; i < this.length; i++) {
        objFind = callback(this[i], i)
        if (objFind) {
            objResult = objFind;
            break;
        } else {
            objResult = objFind;
        }
    }
    return objResult;
    
}

//  let numbers = [1,2,  3, 4, 5];

  var result = numbers.some2(function(number, i) {
      console.log(i, number);
      return number === 4;
  })

//   console.log(result)

  //EVERY2 FUNCTION

  Array.prototype.every2 = function(callback) {
    var objResult;
    for (var i = 0; i < this.length; i++) {
        objFind = callback(this[i], i)
        if (!objFind) {
            objResult = objFind;
            break;
        } else {
            objResult = objFind;
        }
    }
    return objResult;
    
}

//  let numbers = [4,4,  3, 4, 5];

  var result = numbers.every2(function(number, i) {
      console.log(i, number);
      return number === 4;
  })

//   console.log(result)

*/

// CALL BACK 

/*
var couses = [
    'javascript',
    'php',
    'nodeJS'
];

// call back dinh nghia function map2 call back
Array.prototype.map2 = function(callback) {
    var i = 0;
    var outputArray = [];
    var arrayLength = this.length;
    for(i; i< arrayLength; i++) {
        // loc qua call nguoc lai callback
        var result = callback(this[i], i);
        // moi lan callback se day vao outputArray
        outputArray.push(result);
    }
    return outputArray;
}

var htmls = couses.map2(function(couse, index) {
    // return h2 thi result nhan dc
    return `<h2>${couse}</h2>`;
});
// htmls nhan lai ket qua da return outputArray ben tren

console.log(htmls.join(''));
*/
// console.log(Array.prototype)

// My FOREACH()
/*
var couses = [
    'php',
    'javascript',
    'nodejs'
];

Array.prototype.forEach2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

couses.forEach2(function(couse,index,Array) {
    console.log(couse,index,Array);
});
*/

// FILTER METHOD

// Array.prototype.filter2 = function(callback) {
//     let newArr = [];
//     for(let index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this);
//             if(result){
//                 newArr.push(this[index]);
//             }
//         }
//     }
//     return newArr;
// };

// var newCouse = couses.filter2(function(couse) {
//     // console.log(couse, index,Array);
//     return couse.coin > 700;
// });

// console.log(newCouse);


// var couses = [
//     {
//         name: 'Javascript', 
//         coin: 680,
//         isFinish = true
//     }, 
//     {
//         name: 'PHP', 
//         coin: 860,
//         isFinish = false
//     }, 
//     {
//         name: 'Ruby', 
//         coin: 980,
//         isFinish = true
//     }
// ];

// Array.prototype.map2 = function(callback) {
//     let outPut = false;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             // neu ma function tra ve 1 gia tri true
//             if(callback(this[index], index , this)){
//                 outPut = true;
//                 break;
//             }
//         }
//     }
//     return outPut;
// }

// var result = couses.some(function(couse, index){
//     console.log(couse);
// });



// SOME METHOD
/*
    Array.prototype.some2 = function(callback){

    var output = false ;
      for ( var index in this) {
          if(this.hasOwnProperty(index)){
              if(callback(this[index], index, this)){
                  output = true;
                  break;
              }
              
          }
      }
  
      return output;
    }
   
  
  
    var products = [ { name: 'hat',
                      id : 1,
                      cost: 50}, 
                      { name: 'pant',
                      id : 2,
                      cost: 20}, 
                      {name: 'shoe',
                      id : 1,
                      cost: 100} ]
  
  
    var output = products.some2(function(product, index){
             return product.cost >  100 ;
    });
    console.log(output);
   
*/

// SOME METHOD
/*
var courses = [
    {
        name: 'Javascript',
        coin: 650,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 820,
        isFinish: false
    },
    {
        name: 'C#',
        coin:1000,
        isFinish:false
    }
];

Array.prototype.some2 = function(callback) {
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            if(callback(this[i],i,this)) {
                return true;
            }
        }
    }
    return false;
}

var someCourses = courses.some(function(courses,index,array) {
    return courses.isFinish;
})

console.log(someCourses);*/

/*

var courses = [
    {
        name: 'Javascript',
        coin: 650,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 820,
        isFinish: false
    },
    {
        name: 'C#',
        coin:1000,
        isFinish:false
    }
];

*/

/*
Array.prototype.every2 = function(callback) {
    var output = false;
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            
            if(callback(this[i],i,this)) {
                // return true;
                output = true;
                break;
            }

            var result = callback(this[i], i , this);
            // neu 1 lan ket qua sai
            if(!result) {
                output = false;
                break;
            }
        }
    }
    return false;
    return output;
}
*/


// var someCourses = courses.every2(function(course) {
//     return course.isFinish && course.coin > 500;
// })

// console.log(someCourses);


// var headingNode = document.getElementById('heading_node');
// console.log(headingNode);
// console.log({
//     element: headingNode
// })

// return html collection same array but dont have reduce, map... methods
// var className = document.getElementsByClassName('heading');
// console.log(className);

// var tagName = document.getElementsByTagName('h3')[0];
// console.log(tagName);

// var query = document.querySelector('.box .heading1');
// console.log(query);

// var queryAll = document.querySelectorAll('.box .heading1');
// console.log(queryAll);

// HTML Selection dung vs the a, form, images...

// var boxNode = document.querySelector('.box');
// console.log(boxNode.querySelectorAll('.heading1'));


// var headingElement = document.querySelectorAll('h1');

// for(var i = 0 ; i < headingElement.length; i++){
//     headingElement[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }

/*
// Vi du ve Dom event Form
var inputValue;

var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function(e){
    // console.log(e.target.value);
    inputValue = e.target.value;
    console.log(inputValue);
}

var inputValue1;

var inputElement1 = document.querySelector('input[type="checkbox"]');
inputElement1.onchange = function(e){
    inputValue1 = e.target.checked;
    console.log(inputValue1);
}

var inputValue2;

var inputElement2 = document.querySelector('select');
inputElement2.onchange = function(e){
    inputValue2 = e.target.value;
    console.log(inputValue2);
}


var hElement = document.links;

for (var i = 0; i< hElement.length; i++) {
    hElement[i].onclick = function(e){
        if(!e.target.href.startsWith('http://f8.edu.vn')){
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');
// ngan chan hang vi an chuot vao the con cua ul la bi bien mat(hanh vi noi bot)
ulElement.onmousedown = function(e){
    e.preventDefault();
}
ulElement.onclick = function(e){
    console.log(e.target);
}
document.querySelector('div').onclick = function(){
    console.log('DIV');
}
document.querySelector('button[type="button"]').onclick = function(e){
    e.stopPropagation();
    console.log('click Me');
}
*/

// LISTENER EVENT
/*
var btn = document.getElementById('btn');
function viec1(){
    console.log('viec 1');
}
function viec2(){
    console.log('viec 2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

setTimeout(function(){
    btn.removeEventListener('click', viec1);
    btn.removeEventListener('click', viec2);
}, 3000);

// PROMISE
// 3 trang thai
// pending : chua gui 
// fullfilled : da gui thanh cong
// rejected : that bai
 var promise = new Promise(
     // excutor tra ve 1 function
    function(resolve, reject) {
    // login 
    // thanh cong goi toi resolve
    // that bai goi toi reject
    // neu k tra ve 1 trong 2 gay ra memory leak -> lang phi bo nho
    resolve();
 });

 promise
        .then(function(){
            console.log('Thanh cong');
        })
        .catch(function(){
          console.log('Thai bai');  
        })
        .finally(function(){
            // khi 1 trong 2 tra ve thi done
            console.log('Done')
        })
// promise luon luon phai co then va catch

var promise1 = new Promise(
    // excutor tra ve 1 function
   function(resolve, reject) {
   // login 
   // thanh cong goi toi resolve
   // that bai goi toi reject
   // neu k tra ve 1 trong 2 gay ra memory leak -> lang phi bo nho
   resolve();
});

// Khi return 1 new Promise thi function ke tiep phai doi cai Promise xu ly xong
// do co tinh chat chuoi nen Promise có the noi nhau va sinh ra nhieu then khac nhau
promise1
       .then(function(){
           return new Promise(function(resolve){
                setTimeout(function(){
                    resolve([1,2,3]);
                }, 3000);
           })
       })
       .then(function(data){
        console.log(data);
       })
       .catch(function(){
         console.log('Thai bai');  
       })
       .finally(function(){
           // khi 1 trong 2 tra ve thi done
           console.log('Done')
       })
*/
// dung Promise xu ly bai toan log ra cv1->4 lien tuc cu sau 1 khoang thoi gian 
// ma khong xai ham setInterval

/*
function sleep (ms){
    return new Promise(function(resolve){
        // mac dinh cho no luon thanh cong
        setTimeout(resolve, ms);
    })
}
sleep(1000)
    .then(function(){
        console.log('1');
        return sleep(1000);
    })
    .then(function(){
        console.log('2');
        return sleep(1000);
    })
    .then(function(){
        console.log('3');
        return sleep(1000);
    })
    .then(function(){
        console.log('4');
        return sleep(1000);
    })
*/
// .Khi bat ky mot .then nao trả ve mot Promise mà reject thi
// .then tiep theo k chay ma run vao Catch(bat loi)

/*
function sleep1 (ms){
    return new Promise(function(resolve){
        // mac dinh cho no luon thanh cong
        setTimeout(resolve, ms);
    })
}
sleep1(1000)
    .then(function(){
        console.log('1');
        return sleep(1000);
    })
    .then(function(){
       return new Promise(function(resolve, reject){
           reject('co loi');
       })
    })
    .then(function(){
        console.log('3');
        return sleep(1000);
    })
    .then(function(){
        console.log('4');
        return sleep(1000);
    })
    .catch(function(err){
        console.log(err);
    })

    */
// PROMISE ALL
/*
var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        }, 2000);
});

var promise3 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2]);
        }, 5000);
});

Promise.all([promise2, promise3])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
})*/

// PROMISE EXAMPLE

/*
var users = [
    {
        id : 1,
        name : 'Kien Dam',
    },
    {
        id : 2,
        name : 'Son Dang',
    },
    {
        id : 3,
        name : 'Hung Dam',
    }
];

var comments = [
    {
        id : 1,
        user_Id : 1,
        content : 'Anh Son chua ra video :('
    },
    {
        id : 2,
        user_Id : 2,
        content : 'Vua ra xong em oiw'
    },
    {
        id : 3,
        user_Id : 3,
        content : 'Em vao xem nhe'
    }
];

// fake API de lay giu lieu 
function getComments() {
    // lay dl qua api la hanh dong bat dong bo nen phai sd Promise
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    });
}
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var results = users.filter(function(user){
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(results);
        }, 2000);
    });
}
getComments()
    .then(function(comments) {
        // console.log(comments);
        var userIds = comments.map(function(comment) {
            return comment.user_Id;
        })
        // console.log(userIds);
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            });
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_Id;
            });
            html+= `${user.name}: ${comment.content}`;
        });
        commentBlock.innerHTML = html;
    });

*/

// PROMISE EXAMPLE

var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
    // ....
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :)'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oiw'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on Anh!'
    }
];

// Fake API get comments
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var results = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(() => {
            resolve(results);
        }, 2000);
    });
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        // console.log(userIds);
        // list id lay dc
        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                };
            });
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;

    });
// Promise.all([getUsers(), getComments()])
//     .then(function (data) {
//         console.log(data);
//         let users = data[0]
//         let comments = data[1]
//         let html = ''
//         let commentBlock = document.querySelector('#comment-block')
//         comments.forEach(function (comment) {
//             user = users.find(function (user) {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${user.name}: ${comment.content}</li>`
//         })
//         commentBlock.innerHTML = html
//     })

    // USING FETCH
    var postApi = 'https://jsonplaceholder.typicode.com/posts';

    // stream
    fetch(postApi)
            .then(function (reponse) {
                // Json.parse cai reponse tra ve JSON -> Javascript types
                return reponse.json();
            })
            .then(function (posts) {
               var htmls = posts.map(function (post) {
                   return `
                    <li>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </li>
                   `;
               });

               var html = htmls.join('');
               document.getElementById('list-fetch').innerHTML = html;
            })
            .catch(function (err) {
                console.log('error');
            })

