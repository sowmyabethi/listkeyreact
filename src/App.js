import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rahul',
    role: 'software',
  },

  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rahul',
    role: 'software',
  },

  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rahul',
    role: 'software',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
)
export default App
