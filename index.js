// смотрим, какая инфо в апи
fetch('https://jsonplaceholder.typicode.com/posts')
// преобразов в json
.then((response) => response.json())
// находим и выводим нужный элемент
.then((data) => {
    data.forEach(item => {
        let main = document.querySelector('.main')
        let div = document.createElement('div')
        div.innerHTML = `<h2 class="subtitle">заголовок: ${item.title}</h2><p> статья: ${item.body}</p>`
        main.append(div)
    })
})
// обработка ошибки
.catch((error) =>
    console.log(error)
)