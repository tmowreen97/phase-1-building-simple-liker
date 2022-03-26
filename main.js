// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//HIDE ERROR MSG
function hideModal(){
  document.querySelector('#modal').className = 'hidden'
}
hideModal()

//LIKING AND UNLIKING
let buttons = document.getElementsByClassName('like-glyph')
document.addEventListener('DOMContentLoaded', () => {
  for (let button of buttons) {
    button.innerHTML=`${EMPTY_HEART}`
  }
  for (let button of buttons) {
    button.addEventListener('click', () => {
      mimicServerCall()
      .then(() => {
        if (button.innerHTML=== `${EMPTY_HEART}`) {
          button.innerHTML= `${FULL_HEART}`
          button.className = 'activated-heart'
        }
        else if (button.innerHTML === `${FULL_HEART}`) {
          button.innerHTML=`${EMPTY_HEART}`
          button.className = ' '
        }
      })
      .catch(()=>{
        const errorMsg = document.getElementById('modal')
        console.log(errorMsg)
        errorMsg.className = 'error'
        setTimeout(()=>{
          const errorMsg = document.getElementById('modal')
          console.log(errorMsg)
          errorMsg.className = 'hidden'}, 3000)
      })
     })
    }
  })

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
