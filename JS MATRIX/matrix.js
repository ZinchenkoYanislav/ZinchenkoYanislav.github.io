let mytab = document.querySelector('#mytab');
let table = document.querySelector('#table');
let tbody = document.querySelector('#tbody');
let btnGenerate = document.querySelector('#btnGenerate');

btnGenerate.addEventListener('click', function(){
    let colsInput = document.querySelector('#colsInput').value;
    let rowsInput = document.querySelector('#rowsInput').value;
    createTable(tbody, colsInput, rowsInput);
    

})

function randomInteger(min, max) {
   
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }


function createTable(parents, cols, rows) {
    for(let i=0; i < rows; i++){
        let tr = document.createElement('tr');
        if (i == 0){
            counter = -1;
        }
        
       
        for(let j=0; j < cols; j++){
            let td = document.createElement('td');
            tr.appendChild(td);
            
            counter++

            if(i === 0 && j === 0){
                td.innerHTML = '#'
            }
            else if(i === 0 && j > i && j != cols - 1){
                td.innerHTML = counter
                
            }
            else if(i === 0 && j === cols - 1){
                td.innerHTML = 'сумма'       
            }

            else if (i > j && j === 0 && i !=rows - 1){
                td.innerHTML = counter/cols
            }

            else if(j === 0 && i === rows - 1){
                td.innerHTML = 'среднее'       
            }

            else  if(i > 0 && j > 0 && i < rows - 1 && j < cols - 1)  {
                td.innerHTML = randomInteger(100, 999)
            }

            else if (i > 0 && j === cols -1 && i != rows - 1){
                td.innerHTML = 'Вывод суммы'
            }
            else if (j > 0 && i === rows - 1 && j != cols - 1 ){
                td.innerHTML = 'Вывод среднее значение'
            }
            
        }

        parents.appendChild(tr)
        
    }
    console.log(parents)
}   


// let tbody = document.querySelector('#tbody');
// let arr1 = [ [10, 2, 3], [4, 5, 6], [7, 8, 9,] ];
// fill_Tbody (tbody, arr1);
// console.log(tbody)

// function fill_Tbody(table, arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');

//         for(let j = 0; j < arr[i].length; j++){
//             let td = document.createElement('td');
//             td.innerHTML = arr[i][j];
//             tr.appendChild(td);
//         }

//         table.appendChild(tr)
//     }
// }

// const ArrTbody = Array.from(tbody);

// for (let i = 0; i < tbody.length; i++){
//     tbody[i].addEventListener('click', function(){
//         let input = document.createElement('input');
//         input.value = this.innerHTML; 
//         this.appendChild(input);
//     })
// }


// const table = document.getElementById("mytab");
//     const colGroup1 = document.getElementsByClassName('colGroup1');
//     const colGroup2 = document.getElementsByClassName('colGroup2');
//     const colGroup3 = document.getElementsByClassName('colGroup3');
//     const avarageGroup_1 = document.getElementById('avarageGroup1');
//     const avarageGroup_2 = document.getElementById('avarageGroup2');
//     const avarageGroup_3 = document.getElementById('avarageGroup3');
//     const rowGroup1 = document.getElementsByClassName('rowGroup1');
//     const rowGroup2 = document.getElementsByClassName('rowGroup2');
//     const rowGroup3 = document.getElementsByClassName('rowGroup3');
//     const rowGroup4 = document.getElementsByClassName('rowGroup4');
//     const sum1 = document.getElementById('sum1');
//     const sum2 = document.getElementById('sum2');
//     const sum3 = document.getElementById('sum3');
//     const sum4 = document.getElementById('sum4');
//     const rowGroup1_none = document.getElementsByClassName('rowGroup1_none');
//     const rowGroup2_none = document.getElementsByClassName('rowGroup2_none');
//     const rowGroup3_none = document.getElementsByClassName('rowGroup3_none');
//     const rowGroup4_none = document.getElementsByClassName('rowGroup4_none');
    
    
//     const rowGroup1Arr = Array.from(rowGroup1);
//     const rowGroup2Arr = Array.from(rowGroup2);
//     const rowGroup3Arr = Array.from(rowGroup3);
//     const rowGroup4Arr = Array.from(rowGroup4);

//     const colGroup1Arr = Array.from(colGroup1);
//     const colGroup2Arr = Array.from(colGroup2);
//     const colGroup3Arr = Array.from(colGroup3);
//     function sum (arr) {
//       return arr.reduce((acc, el) => {
//         acc += Number(el.innerText)
//         return acc
//       }, 0)  
//     }

//     function avarage(arr) {
//         return arr.reduce((acc, el) => {
//             acc += Number(el.innerText/colGroup1Arr.length)
            
//             return acc
//         }, 0)
//     }

//     let avarage_colGroup1 = avarage(colGroup1Arr)
//     avarageGroup_1.innerText = avarage_colGroup1;

//     let avarage_colGroup2 = avarage(colGroup2Arr)
//     avarageGroup_2.innerText = avarage_colGroup2;

//     let avarage_colGroup3 = avarage(colGroup3Arr)
//     avarageGroup_3.innerText = avarage_colGroup3;



//     let sum_rowGroup1 = sum(rowGroup1Arr);
//     sum1.innerText = sum_rowGroup1;

//     let sum_rowGroup2 = sum(rowGroup2Arr);
//     sum2.innerText = sum_rowGroup2;

//     let sum_rowGroup3 = sum(rowGroup3Arr);
//     sum3.innerText = sum_rowGroup3;

//     let sum_rowGroup4 = sum(rowGroup4Arr);
//     sum4.innerText = sum_rowGroup4;
//     console.log(sum_rowGroup1);

    


//     // наведение на среднии значения
//     avarageGroup_1.addEventListener('mouseover', function(){
//         for (let i = 0; i < colGroup1.length; i++){
//             colGroup1[i].style.backgroundColor = '#c3e6cb'
//         }
//     })
//     avarageGroup_1.addEventListener('mouseout', function(){
//         for ( let i = 0; i < colGroup1.length; i++){
//             colGroup1[i].style.backgroundColor = ''
//         }
//     })
    
//     avarageGroup_2.addEventListener('mouseover', function(){
//         for (let i = 0; i < colGroup2.length; i++){
//             colGroup2[i].style.backgroundColor = '#c3e6cb'
//         }
//     })
//     avarageGroup_2.addEventListener('mouseout', function(){
//         for (let i = 0; i < colGroup2.length; i++){
//             colGroup2[i].style.backgroundColor = ''
//         }
//     })

//     avarageGroup_3.addEventListener('mouseover', function(){
//         for (let i = 0; i < colGroup3.length; i++){
//             colGroup3[i].style.backgroundColor = '#c3e6cb'
//         }
//     })
//     avarageGroup_3.addEventListener('mouseout', function(){
//         for (let i = 0; i < colGroup3.length; i++){
//             colGroup3[i].style.backgroundColor = ''
//         }
//     })

//     // наведения на сумму

//     sum1.addEventListener('mouseover', function(){
//         for (let i = 0; i < rowGroup1.length; i++){
//             rowGroup1[i].style.backgroundColor = '#c3e6cb'
//             rowGroup1_none[i].style.display = 'block'
//         }
//     })
//     sum1.addEventListener('mouseout', function(){
//         for (let i = 0; i < rowGroup1.length; i++){
//             rowGroup1[i].style.backgroundColor = ''
//             rowGroup1_none[i].style.display = 'none'
//         }
//     })

//     sum2.addEventListener('mouseover', function(){
//         for (let i = 0; i < rowGroup2.length; i++){
//             rowGroup2[i].style.backgroundColor = '#c3e6cb'
//             rowGroup2_none[i].style.display = 'block'
//         }
//     })
//     sum2.addEventListener('mouseout', function(){
//         for (let i = 0; i < rowGroup2.length; i++){
//             rowGroup2[i].style.backgroundColor = ''
//             rowGroup2_none[i].style.display = 'none'
//         }
//     })

//     sum3.addEventListener('mouseover', function(){
//         for (let i = 0; i < rowGroup3.length; i++){
//             rowGroup3[i].style.backgroundColor = '#c3e6cb'
//             rowGroup3_none[i].style.display = 'block'
//         }
//     })
//     sum3.addEventListener('mouseout', function(){
//         for (let i = 0; i < rowGroup3.length; i++){
//             rowGroup3[i].style.backgroundColor = ''
//             rowGroup3_none[i].style.display = 'none'
//         }
//     })

//     sum4.addEventListener('mouseover', function(){
//         for (let i = 0; i < rowGroup4.length; i++){
//             rowGroup4[i].style.backgroundColor = '#c3e6cb'
//             rowGroup4_none[i].style.display = 'block'
//         }
//     })
//     sum4.addEventListener('mouseout', function(){
//         for (let i = 0; i < rowGroup4.length; i++){
//             rowGroup4[i].style.backgroundColor = ''
//             rowGroup4_none[i].style.display = 'none'
//         }
//     })
