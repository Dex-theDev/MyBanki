const startButton = document.querySelector('.startButton')
const stopButton = document.querySelector('.stopButton')
const cardSpace = document.querySelector('.cardSpace','.animate__animated', '.animate__bounceIn' )
const cardSpaceAnimation = document.querySelector('.animate__animated','.animate__bounceIn')
const topic = document.querySelector('.topic')
const question = document.querySelector('.question')
const viewAnswer = document.querySelector('.viewAnswerButton')
const answer = document.querySelector('.answer')
const nextButton = document.querySelector('.nextButton')
const backButton = document.querySelector('.backButton')

startButton.addEventListener('click', getQuestions)

//on page load, hide flashcard
cardSpace.style.display = 'none'
nextButton.style.display = 'none'
backButton.style.display = 'none'

stopButton.addEventListener('click', () => {
    cardSpace.style.display = 'none'
    nextButton.style.display = 'none'
    backButton.style.display = 'none'
})

async function getQuestions(){
    try {
        const response = await fetch('api/questions')
        const data = await response.json()
        let counter = 0
        cardSpace.style.display = 'block'
        nextButton.style.display = 'flex'
        backButton.style.display = 'flex'
        topic.innerHTML = data[counter].topic
        question.innerHTML = data[counter].question.replace('>', ' >').replace('<', '< ')
        viewAnswer.addEventListener('click', () =>{
            viewAnswer.style.display = 'none'
            answer.innerHTML = data[counter].answer.replace('>', ' >').replace('<', '< ')
        })
        nextButton.addEventListener('click', () => {
        cardSpace.classList.remove('animate__animated', 'animate__bounceIn')
        setTimeout(() => {
            cardSpace.classList.add('animate__animated', 'animate__bounceIn')
        }, 10)
            answer.style.display = 'none'
            viewAnswer.style.display = 'block'
            counter++
            if(!data[counter]){
                counter = 0
            }
            topic.innerHTML = data[counter].topic
            question.innerHTML = data[counter].question

            viewAnswer.addEventListener('click', () =>{
                viewAnswer.style.display = 'none'
                answer.style.display = 'block'
                answer.innerHTML = data[counter].answer
            })

        })
        backButton.addEventListener('click', ()=> {
            cardSpace.classList.remove('animate__animated', 'animate__bounceIn')
        setTimeout(() => {
            cardSpace.classList.add('animate__animated', 'animate__bounceIn')
        }, 10)
            answer.style.display = 'none'
            viewAnswer.style.display = 'block'
            counter--
            if(!data[counter]){
                counter = data.length-1
            }
            topic.innerHTML = data[counter].topic
            question.innerHTML = data[counter].question
            viewAnswer.addEventListener('click', () =>{
                viewAnswer.style.display = 'none'
                answer.style.display = 'block'
                answer.innerHTML = data[counter].answer
            })

        })

    }catch(err){
        console.log(err)
    }
}