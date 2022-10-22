let body = document.querySelector('body')
let settings = document.querySelector('.settings-img')
let translateText = document.querySelectorAll('.text')
settings.onclick = function () {
   body.classList.add('active-settings')
}
document.addEventListener('click', (e) => {
   if (e.target.classList.contains('settings-bg')) {
      body.classList.remove('active-settings')
   };
})
let language
let change_language = document.querySelector('.change-language');
change_language.addEventListener('input', func_)

let numbers_gap = document.querySelector('.numbers-gap')
let gap_size = document.querySelector('.gap-size')
numbers_gap.onchange = function() {
   if (this.value == 1) {
      this.style.background = "#0c0"
      gap_size.innerHTML = 10
   } else if (this.value == 2){
      this.style.background = "#cc0"
      gap_size.innerHTML = 100
   } else if (this.value == 3){
      this.style.background = "#c00"
      gap_size.innerHTML = 1000
   }
   func_()
}
function func_() {
   console.log('jjj');
   language = Number(change_language.value)
   let languages = [
      ['Change language:', `Guess a number from 1 to ${gap_size.innerHTML} and I'll try to guess`, 'Ready', 'Click when you are ready and have guessed the number', 'Did you guess the number ', 'less', 'Yes!', 'more', 'You have guessed the ', 'It took me tries: ', 'Again ', 'Set the gap between the numbers'], //en
      ['Поменять язык:', `Загадай число от 1 до ${gap_size.innerHTML}, а я попробую отгадать`, 'Готово', 'Нажмите когда вы будете готовы и загадали число', 'Вы загадали число ', 'меньше', 'Да!', 'больше', 'Вы загадали ', 'Мне потребовалось попыток: ', 'Ещё раз ', 'Установить промежуток между числами'] //ru
   ]
   for (let i = 0; i < translateText.length; i++) {
      document.getElementById('text-' + i).innerHTML = languages[language][i];
   }
}


let block_1 = document.querySelector('.block-1')
let block_2 = document.querySelector('.block-2')
let block_3 = document.querySelector('.block-3')
let ready_btn = document.querySelector('.ready-btn')
ready_btn.onclick = () => {
   block_1.style.display = "none"
   block_2.style.display = "block"
   maxNum = gap_size.innerHTML
}

let guess = document.querySelector('.guess')
let less = document.querySelector('.less')
let correct = document.querySelector('.correct')
let more = document.querySelector('.more')


function randInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

let maxNum = gap_size.innerHTML
let minNum = 1
let attempts = 1

let guessNum = randInt(minNum, maxNum)
guess.innerHTML = guessNum

less.onclick = () => {
   if (maxNum == minNum) return
   attempts++
   maxNum = guessNum - 1
   guessNum = randInt(minNum, maxNum)
   guess.innerHTML = guessNum
   console.log(guessNum);
}
more.onclick = () => {
   if (maxNum <= minNum || guessNum >= maxNum) return
   attempts++
   minNum = guessNum + 1
   guessNum = randInt(minNum, maxNum)
   guess.innerHTML = guessNum
   console.log(guessNum);
}
correct.onclick = () => {
   document.querySelector('.correctNum').innerHTML = guessNum
   document.querySelector('.attempts').innerHTML = attempts
   block_2.style.display = "none"
   block_3.style.display = "block"
}

let again_btn = document.querySelector('.again-block')

again_btn.onclick = () => {
   maxNum = gap_size.innerHTML
   minNum = 1
   attempts = 1
   guessNum = randInt(minNum, maxNum)
   guess.innerHTML = guessNum
   console.log(guessNum);
   block_1.style.display = "block"
   block_2.style.display = "none"
   block_3.style.display = "none"
}