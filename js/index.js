document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (otherLink) {
                var icon = otherLink.querySelector('i.fa-solid');
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            });
            var icon = link.querySelector('i.fa-solid');
            if (icon.classList.contains('fa-book')) {
                icon.classList.remove('fa-book');
                icon.classList.add('fa-book-open');
            } else if (icon.classList.contains('fa-book-open')) {
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            }
        });
    });

    // Bài 1: Sắp xếp 3 số theo thứ tự tăng dần
    document.getElementById('arrange').addEventListener('submit', function (event) {
        event.preventDefault();
        arrangeNum();
    });

    // Bài 2: Viết chương trình chào hỏi
    document.getElementById('greetingForm').addEventListener('submit', function (event) {
        event.preventDefault();
        greeting();
    });

    // Bài 3: Viết chương trình đếm số lẻ số chẵn
    document.getElementById('countNum').addEventListener('submit', function (event) {
        event.preventDefault();
        countNum();
    });

    // Bài 4: Viết chương trình tìm loại tam giác
    document.getElementById('triangleType').addEventListener('submit', function (event) {
        event.preventDefault();
        triangleType();
    });
});


// Bài 1 : Sắp xếp 3 số theo thứ tự tăng dần

function arrangeNum() {

    // B1: Lấy dữ liệu đầu vào
    const b1Num1 = +document.getElementById('b1Num1').value;
    const b1Num2 = +document.getElementById('b1Num2').value;
    const b1Num3 = +document.getElementById('b1Num3').value;
    let result
    // B2: Xử lý bài toán
    if (b1Num1 <= b1Num2 && b1Num1 <= b1Num3) {
        if (b1Num2 <= b1Num3) {
          result = b1Num1 + ", " + b1Num2 + ", " + b1Num3;
        } else {
          result = b1Num1 + ", " + b1Num3 + ", " + b1Num2;
        }
      } else if (b1Num2 <= b1Num1 && b1Num2 <= b1Num3) {
        if (b1Num1 <= b1Num3) {
          result = b1Num2 + ", " + b1Num1 + ", " + b1Num3;
        } else {
          result = b1Num2 + ", " + b1Num3 + ", " + b1Num1;
        }
      } else {
        if (b1Num1 <= b1Num2) {
          result = b1Num3 + ", " + b1Num1 + ", " + b1Num2;
        } else {
          result = b1Num3 + ", " + b1Num2 + ", " + b1Num1;
        }
      }

    // B3: Hiển thị kết quả
    document.getElementById('result').innerText=`👉 ${result}`;

};
// <--------------------------------------------------->


// Bài 2 : Viết chương trình chào hỏi

function greeting() {

    // b1: các dữ liệu đầu vào
    const b2Name = document.getElementById('b2Name').value;
    let result2;

    // b2: xử lí bài toán
    if(b2Name == 'B' || b2Name == 'b')
    {
        result2 = 'Chào Bố'
    }
    else if(b2Name == 'M' || b2Name == 'm')
    {
        result2 = 'Chào Mẹ'
    }
    else if(b2Name == 'A' || b2Name == 'a')
    {
        result2 = 'Chào anh trai'
    }
    else
    {
        result2 = 'Chào em gái'
    }
    // b3 : các dữ liệu đầu ra
    document.getElementById('result2').innerText=`👉 ${result2}`;

};
// <--------------------------------------------------->


// Bài 3 : Viết chương trình đếm số lẻ số chẵn

function countNum() {

    // b1: các dữ liệu đầu vào
    const b2Num1 = +document.getElementById('b2Num1').value;
    const b2Num2 = +document.getElementById('b2Num2').value;
    const b2Num3 = +document.getElementById('b2Num3').value;

    // b2: xử lí bài toán
    let countOdd = 0;
    let countEvenNum = 0 ;
    b2Num1 % 2 === 0 ? countEvenNum++ : countOdd++;
    b2Num2 % 2 === 0 ? countEvenNum++ : countOdd++;
    b2Num3 % 2 === 0 ? countEvenNum++ : countOdd++;
    
    // b3 : các dữ liệu đầu ra
    document.getElementById('result3').innerText=`👉 Tổng số chẵn ${countEvenNum} , tổng số lẻ ${countOdd}`;

};
// // <--------------------------------------------------->


// // Bài 4 : Viết chương trình tìm loại tam giác

function triangleType() {

    // b1: các dữ liệu đầu vào
    const b4Num1 = +document.getElementById('b4Num1').value;
    const b4Num2 = +document.getElementById('b4Num2').value;
    const b4Num3 = +document.getElementById('b4Num3').value;
    let result4;

    // b2: xử lí bài toán
    if (b4Num1 + b4Num2 > b4Num3 && b4Num1 + b4Num3 > b4Num2 && b4Num2 + b4Num3 > b4Num1) {
        if (b4Num1 === b4Num2 && b4Num2 === b4Num3) {
            result4 = 'Đây là tam giác đều';
        } else if (b4Num1 === b4Num2 || b4Num1 === b4Num3 || b4Num2 === b4Num3) {
            result4 = 'Đây là tam giác cân';
        } else if (b4Num1 * b4Num1 + b4Num2 * b4Num2 === b4Num3 * b4Num3 ||
            b4Num1 * b4Num1 + b4Num3 * b4Num3 === b4Num2 * b4Num2 ||
            b4Num2 * b4Num2 + b4Num3 * b4Num3 === b4Num1 * b4Num1) {
                result4 = 'Đây là tam giác vuông';
            } else {
                result4 = 'Đây là tam giác thường';
            }
      } else {
        result4 = 'Đây không phải là tam giác';
    }
    // b3 : các dữ liệu đầu ra

    document.getElementById('result4').innerText=`👉 ${result4}`;

};