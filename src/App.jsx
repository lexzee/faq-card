import './App.css'
import box from './images/illustration-box-desktop.svg'
import icon from './images/icon-arrow-down.svg'
import imgMobile from './images/illustration-woman-online-mobile.svg'
import imgDesktop from './images/illustration-woman-online-desktop.svg'
import { useEffect, useState } from 'react'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isActive, setisActive] = useState(-1)
  const handleClick = (index) => {
    setisActive(index === isActive? -1 : index)
  }
  useEffect(() => {
    const handleView = () => {
      setIsMobile(window.innerWidth < 780);
    };
    handleView();

    window.addEventListener("resize", handleView);
    return () => {
      window.removeEventListener("resize", handleView);
    }
  }, [])

  const data = [
  {
    id: 1,
    question: "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. \
    A reset link will be emailed to you.'
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer: "Yes! Send us a message and we’ll process your request no questions asked."
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
]


const body = data.map((ques, key) => {
  return (
    <div className="body" key={key} id={ques.id}>
      <p className={`question ${key==isActive && "bold"}`} onClick={() => handleClick(key)}>{ques.question} <span className="icon"><img src={icon} alt="icon" className={`${key==isActive ? 'up': 'down'}`} /></span></p>
      {key === isActive && <p className="answer">{ques.answer}</p>}
    </div>
  )
})

  return (
    <>
      <div className="App">
        {!isMobile && <img src={box} className='box' />}
        <div className="image">
          <img src={isMobile? imgMobile : imgDesktop} className="img" alt="#" />
        </div>
        <div className="faq">
          <h1 className="title">
            FAQ
          </h1>
          {body}
        </div>
      </div>
      <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/lexzee">Lexzee</a>.
    </div>
    </>
  )
}

export default App
