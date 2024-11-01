import './UserDetails.css'
import { Alert } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserById } from '../../../utils/services/userServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader/Loader'

const UserDetails = () => {
  const [user, setUser] = useState([])
  const { userId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true)
        const response = await fetchUserById(userId)
        setLoading(false)
        if (response?.success) {
          setUser(response.data)
        }
      } catch (error) {
        console.error(`Error getting user details: ${error}.`)
      }
    }
    getUser()
  }, [])

  return (
    <>
      <div className="user-details">{/* <p>{user?.email}</p> */}</div>
      {user.length !== 0 ? (
        <>
          <h1>{user.userName}</h1>
          <div className="user-details box">
            <dl className="d-flex flex-wrap justify-content-between">
              <dt>Username</dt>
              <dd>{user.userName}</dd>
              <dt>Email</dt>
              <dd>{user.email}</dd>
             
              {/* <dd className="is-avatar">
                {user.isAvatarApproved ? (
                  <FontAwesomeIcon icon={faCircleCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimesCircle} /> // or any cross icon you prefer
                )}
              </dd> */}
            </dl>
          </div>
        </>
      ) : (
        <Alert variant="warning">No Users Found!</Alert>
      )}

      {loading && <Loader />}
    </>
  )
}

export default UserDetails
