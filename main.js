let form = document.querySelector('.form')
let input = document.querySelector('.input')
let submit = document.querySelector('.submit')
let tasks = document.querySelector('.tasks')
let name = 'sasa'

form.onsubmit = () => {
    let task = document.createElement('li')
    task.innerHTML = input.value
    tasks.append(task)
    input.value = ''
    return false
}