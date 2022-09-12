// let clickBoardInput = document.getElementById('clickBoardInput')

// clickBoardInput.onclick = function () {
//   navigator.clipboard.writeText('Hello,world')
//   successMessage.classList.add('active')
// }
// let button = document.querySelectorAll('.btn')
// button.forEach(function (element) {
//   element.onclick = function (e) {
//     e.preventDefault()
//     let data = this.dataset.key //считываем дата атрибут
//     console.log(data)
//     let temp = document.createElement('textarea')
//     temp.value = data
//     document.body.appendChild(temp)
//     temp.select()
//     document.execCommand('copy')
//     document.body.removeChild(temp)
//     button.forEach(function (e) {
//       e.textContent = 'copy'
//     })
//     this.textContent = 'text copied'

//   }

// })
let arg = arguments[0] ? arguments[0] : 0;
