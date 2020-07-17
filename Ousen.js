let data = localStorage.data ? JSON.parse(localStorage.data) : new Array();
let list = document.querySelector("#list")
function loadList() {
    for (let i = 0; i < data.length; i++) {
        if (data[i])
            addCell(data[i][0], data[i][1], i)
    }
}
function addCell(question, answer, i) {
    let questionBlock = document.createElement('div')
    let answerBlock = document.createElement('div')
    let remove = document.createElement('div')
    questionBlock.innerText = question
    answerBlock.innerText = answer
    remove.innerText = 'X'
    questionBlock.setAttribute('class', 'cell question')
    answerBlock.setAttribute('class', 'cell answer')
    remove.setAttribute('class', 'cell remove')
    list.appendChild(questionBlock);
    list.appendChild(answerBlock);
    list.appendChild(remove);
    remove.addEventListener('click', function () {
        list.removeChild(questionBlock)
        list.removeChild(answerBlock)
        list.removeChild(remove)
        data[i] = null
        document.querySelector('#save').style.display = "block"
    })
    document.querySelector('#main').style.height = 150 + 52 * data.length + 'px';
}
function removeEmptyElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i])
            arr.splice(i--, 1);
    }
}
document.querySelector('#new').addEventListener('click', function () {
    let question = prompt('请输入问题：')
    if (question == null) return
    let answer = prompt('请输入答案：')
    if (answer == null) return

    addCell(question, answer, data.length)
    data.push([question, answer]);
    localStorage.data = JSON.stringify(data);
})
document.querySelector('#save').addEventListener('click', function () {
    removeEmptyElement(data)
    localStorage.data = JSON.stringify(data);
    document.querySelector('#save').style.display = 'none'
})
document.querySelector('#run').addEventListener('click', function () {
    alert('Unavailable now')
})
loadList()