const socket = io()

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated!', count)
// })
// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })

socket.on('welcome', () => {
    console.log("welcome to hell, bitch!")
})

socket.on('newText', (newText) => {
    console.log(newText)
})

document.querySelector('#submit').addEventListener('click', () => {
    let clientTxt = document.querySelector('#clientTxt').value
    socket.emit('clientTxt', clientTxt, (profanityWarning) => {
        if (profanityWarning){
            return console.log(profanityWarning)
        }
    })
})