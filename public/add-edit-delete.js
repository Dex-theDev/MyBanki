//const { double } = require("webidl-conversions")

const deleteText = document.querySelectorAll('.garbageCan')
//test//


const updateButton = document.querySelector('#updateButton')
const deleteButton = document.querySelector('#deleteButton')
//updateButton.addEventListener('click', updateEntry)
//deleteButton.addEventListener('click', deleteEntry)
const topicButtons = Array.from(document.querySelectorAll('.topicButton'))
const questionView = document.querySelector('.questionView')
const viewByTopic = document.querySelector('.viewByTopic')
const allButton = document.querySelector('.allButton')
//Create an array of all the current trash buttons on the page
Array.from(deleteText).forEach(e => {
    e.addEventListener('click', deleteQuestion)
})

console.log(Array.from(document.querySelectorAll('.questionCard')))

// async function updateEntry(){
//     try{
//         const response = await fetch('updateEntry', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 topic: document.getElementsByName("topic")[0].value,
//                 question: document.getElementsByName("question")[0].value,
//                 answer: document.getElementsByName("answer")[0].value
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch(err){
//         console.log(err)
//     }

// }

// async function deleteEntry(){
//     const input = document.getElementById('deleteInput')
//     console.log(input.value)
//     try{
//         const response = await fetch('deleteEntry', {
//             method: 'delete',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 name: input.value
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch(err){
//         console.error(err)
//     }
// }

async function deleteQuestion(){
   // console.log('button clicked')
    const topic = this.parentNode.childNodes[1].innerText
    const singleQuestion = this.parentNode.childNodes[3].innerText
    const answer = this.parentNode.childNodes[5].innerText
    try {
        const response = await fetch('/deleteQuestion',{
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'topic': topic,
                'question': singleQuestion,
                'answer': answer
            })

        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err){
        console.error(err)
    }
}

topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const arr = Array.from(document.querySelectorAll('.questionCard'))
        const topic = event.target.value
        console.log(topic)
    //   for(i = 0; i<arr.length; i++){
    //     if(arr[i].childNodes[1].innerText !== topic){
    //         console.log(arr[i])
    //     } 
    //   }
    arr.forEach(card => {
        if(card.childNodes[1].innerText !== topic){
            console.log(card)
            card.style.display = "none"
        }
        else if(card.childNodes[1].innerText == topic){
            card.style.display = 'block'
        }
    })
    })
})

allButton.addEventListener('click', () => {
    const arr = Array.from(document.querySelectorAll('.questionCard'))
    arr.forEach(card => {
        card.style.display = 'block'
    })
})





