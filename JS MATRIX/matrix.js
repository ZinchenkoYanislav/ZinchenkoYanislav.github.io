const table = document.getElementById("mytab");
    const colGroup1 = document.getElementsByClassName('colGroup1');
    const colGroup2 = document.getElementsByClassName('colGroup2');
    const colGroup3 = document.getElementsByClassName('colGroup3');
    const avarageGroup_1 = document.getElementById('avarageGroup1');
    const avarageGroup_2 = document.getElementById('avarageGroup2');
    const avarageGroup_3 = document.getElementById('avarageGroup3');
    const rowGroup1 = document.getElementsByClassName('rowGroup1');
    const rowGroup2 = document.getElementsByClassName('rowGroup2');
    const rowGroup3 = document.getElementsByClassName('rowGroup3');
    const rowGroup4 = document.getElementsByClassName('rowGroup4');
    const sum1 = document.getElementById('sum1');
    const sum2 = document.getElementById('sum2');
    const sum3 = document.getElementById('sum3');
    const sum4 = document.getElementById('sum4');
    const rowGroup1_none = document.getElementsByClassName('rowGroup1_none');
    const rowGroup2_none = document.getElementsByClassName('rowGroup2_none');
    const rowGroup3_none = document.getElementsByClassName('rowGroup3_none');
    const rowGroup4_none = document.getElementsByClassName('rowGroup4_none');
    
    
    const rowGroup1Arr = Array.from(rowGroup1);
    const rowGroup2Arr = Array.from(rowGroup2);
    const rowGroup3Arr = Array.from(rowGroup3);
    const rowGroup4Arr = Array.from(rowGroup4);

    const colGroup1Arr = Array.from(colGroup1);
    const colGroup2Arr = Array.from(colGroup2);
    const colGroup3Arr = Array.from(colGroup3);
    function sum (arr) {
      return arr.reduce((acc, el) => {
        acc += Number(el.innerText)
        return acc
      }, 0)  
    }

    function avarage(arr) {
        return arr.reduce((acc, el) => {
            acc += Number(el.innerText/colGroup1Arr.length)
            
            return acc
        }, 0)
    }

    let avarage_colGroup1 = avarage(colGroup1Arr)
    avarageGroup_1.innerText = avarage_colGroup1;

    let avarage_colGroup2 = avarage(colGroup2Arr)
    avarageGroup_2.innerText = avarage_colGroup2;

    let avarage_colGroup3 = avarage(colGroup3Arr)
    avarageGroup_3.innerText = avarage_colGroup3;



    let sum_rowGroup1 = sum(rowGroup1Arr);
    sum1.innerText = sum_rowGroup1;

    let sum_rowGroup2 = sum(rowGroup2Arr);
    sum2.innerText = sum_rowGroup2;

    let sum_rowGroup3 = sum(rowGroup3Arr);
    sum3.innerText = sum_rowGroup3;

    let sum_rowGroup4 = sum(rowGroup4Arr);
    sum4.innerText = sum_rowGroup4;
    console.log(sum_rowGroup1);

    


    // наведение на среднии значения
    avarageGroup_1.addEventListener('mouseover', function(){
        for (let i = 0; i < colGroup1.length; i++){
            colGroup1[i].style.backgroundColor = '#c3e6cb'
        }
    })
    avarageGroup_1.addEventListener('mouseout', function(){
        for ( let i = 0; i < colGroup1.length; i++){
            colGroup1[i].style.backgroundColor = ''
        }
    })
    
    avarageGroup_2.addEventListener('mouseover', function(){
        for (let i = 0; i < colGroup2.length; i++){
            colGroup2[i].style.backgroundColor = '#c3e6cb'
        }
    })
    avarageGroup_2.addEventListener('mouseout', function(){
        for (let i = 0; i < colGroup2.length; i++){
            colGroup2[i].style.backgroundColor = ''
        }
    })

    avarageGroup_3.addEventListener('mouseover', function(){
        for (let i = 0; i < colGroup3.length; i++){
            colGroup3[i].style.backgroundColor = '#c3e6cb'
        }
    })
    avarageGroup_3.addEventListener('mouseout', function(){
        for (let i = 0; i < colGroup3.length; i++){
            colGroup3[i].style.backgroundColor = ''
        }
    })

    // наведения на сумму

    sum1.addEventListener('mouseover', function(){
        for (let i = 0; i < rowGroup1.length; i++){
            rowGroup1[i].style.backgroundColor = '#c3e6cb'
            rowGroup1_none[i].style.display = 'block'
        }
    })
    sum1.addEventListener('mouseout', function(){
        for (let i = 0; i < rowGroup1.length; i++){
            rowGroup1[i].style.backgroundColor = ''
            rowGroup1_none[i].style.display = 'none'
        }
    })

    sum2.addEventListener('mouseover', function(){
        for (let i = 0; i < rowGroup2.length; i++){
            rowGroup2[i].style.backgroundColor = '#c3e6cb'
            rowGroup2_none[i].style.display = 'block'
        }
    })
    sum2.addEventListener('mouseout', function(){
        for (let i = 0; i < rowGroup2.length; i++){
            rowGroup2[i].style.backgroundColor = ''
            rowGroup2_none[i].style.display = 'none'
        }
    })

    sum3.addEventListener('mouseover', function(){
        for (let i = 0; i < rowGroup3.length; i++){
            rowGroup3[i].style.backgroundColor = '#c3e6cb'
            rowGroup3_none[i].style.display = 'block'
        }
    })
    sum3.addEventListener('mouseout', function(){
        for (let i = 0; i < rowGroup3.length; i++){
            rowGroup3[i].style.backgroundColor = ''
            rowGroup3_none[i].style.display = 'none'
        }
    })

    sum4.addEventListener('mouseover', function(){
        for (let i = 0; i < rowGroup4.length; i++){
            rowGroup4[i].style.backgroundColor = '#c3e6cb'
            rowGroup4_none[i].style.display = 'block'
        }
    })
    sum4.addEventListener('mouseout', function(){
        for (let i = 0; i < rowGroup4.length; i++){
            rowGroup4[i].style.backgroundColor = ''
            rowGroup4_none[i].style.display = 'none'
        }
    })
