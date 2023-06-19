import './App.css'
import box from './images/illustration-box-desktop.svg'
import icon from './images/icon-arrow-down.svg'
import imgMobile from './images/illustration-woman-online-mobile.svg'
import imgDesktop from './images/illustration-woman-online-desktop.svg'

function App() {

const data = [
  {
    question: "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "How do I reset my password?",
    answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. \
    A reset link will be emailed to you.'
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes! Send us a message and we’ll process your request no questions asked."
  },
  {
    question: "Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
]

const body = data.map((ques, key) => {
  return (
    <div className="body" key={key}>
      <p className="question">{ques.question} <span className="icon"><img src={icon} alt="icon" /></span></p>
      <p className="answer">{ques.answer}</p>
    </div>
  )
})

  return (
    <>
      <div className="App">
        <div className="image">
          <img src={imgMobile} alt="#" />
        </div>
        <div className="faq">
          <h1 className="title">
            FAQ
          </h1>
          {body}
        </div>
      </div>
      <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/lexzee">Lexzee</a>.
    </div>
    </>
  )
}

export default App
