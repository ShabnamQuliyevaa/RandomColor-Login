$(function () {

    $('button').click(function () {

        let name = document.querySelector('#name');
        let adSoyad = document.querySelector('.adSoyad');
        let firsLetter = document.querySelector('.firstLetter');
        let count = 0;
        let word = (name.value).split(" ");

        for (let i = 0; i < word.length; i++) {
            if (word[i] != "") {
                count++;
            }
        }

        if (name.value == "" || count > 2 || count < 2) {
            alert("Please enter Name and Surname")
        }  else {

            $('.form').css('display', 'none');
            $('.result').css('display', 'flex');

            let symbols = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color = color + symbols[Math.floor(Math.random() * 16)];
            }

            $('.circle').css('background-color', `${color}`);

            function getFirstLetters(str) {
                const firstLetters = str
                    .split(' ')
                    .map(word => word[0])
                    .join('');

                return firstLetters;
            }

            adSoyad.innerHTML = (name.value).toUpperCase();
            let letter = getFirstLetters(name.value);

            firsLetter.innerHTML = letter.toUpperCase();
        }





    });
















});