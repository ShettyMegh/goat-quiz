import './loading.scss'
import logo from '../../assets/images/logos/logo.png'

const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center
       loader__container">
      <div className="loader-logo">
        <img src={logo} alt="Loading" width="40px" />
      </div>
      <h5 className='my-2'>Loading...</h5>
    </div>
  )
}

export default Loading;