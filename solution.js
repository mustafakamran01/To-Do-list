const button = document.querySelector('#submit')

button.addEventListener('click', (e) => {
    const task = document.querySelector('#task').value
    const category = (document.querySelector('#category').value).toLowerCase()
    const urgentUL = document.querySelector('#urgent')
    const notUrgentUL = document.querySelector('#notUrgent')

    if (category === "urgent") {
        let myLi = document.createElement('li')
        myLi.appendChild(document.createTextNode(task))
        urgentUL.appendChild(myLi)
    }

    if (category === "noturgent") {
        let myLi = document.createElement('li')
        myLi.appendChild(document.createTextNode(task))
        notUrgentUL.appendChild(myLi)
    }
})
