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
    questionBlock.addEventListener('click', function () {
        let newText = prompt("请输入您要将其更改为的内容：")
        if (newText != null) {
            questionBlock.innerText = newText
            data[i][0] = newText
            document.querySelector('#save').style.display = "block"
        }
    })
    answerBlock.addEventListener('click', function () {
        let newText = prompt("请输入您要将其更改为的内容：")
        if (newText != null) {
            answerBlock.innerText = newText
            data[i][1] = newText
            document.querySelector('#save').style.display = "block"
        }
    })
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
    for (let i = 0; i < arr.length; i++)
        if (!arr[i])
            arr.splice(i--, 1)
}
document.querySelector('#new').addEventListener('click', function () {
    let question = prompt('请输入问题：')
    if (question == null) return
    let answer = prompt('请输入答案：')
    if (answer == null) return

    data.push([question, answer]);
    addCell(question, answer, data.length)
    localStorage.data = JSON.stringify(data);
})
document.querySelector('#save').addEventListener('click', function () {
    removeEmptyElement(data)
    localStorage.data = JSON.stringify(data);
    document.querySelector('#main').style.height = 150 + 52 * data.length + 'px';
    document.querySelector('#save').style.display = 'none'
})
document.querySelector('#run').addEventListener('click', function () {
    alert('Unavailable now')
})
loadList()