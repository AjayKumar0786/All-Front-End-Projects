import './Loader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loader = () => {
  return (
    <div className="loader text-center">
      <FontAwesomeIcon icon={faSpinner} spinPulse />
    </div>
  )
}

export default Loader
