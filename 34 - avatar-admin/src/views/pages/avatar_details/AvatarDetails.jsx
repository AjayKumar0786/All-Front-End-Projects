import { useEffect, useState } from 'react'
import './AvatarDetails.css'
import { useParams } from 'react-router-dom'
import { fetchAvatarById } from '../../../utils/services/avatarServices'
import { Alert } from 'react-bootstrap'
import Loader from '../../../components/loader/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const AvatarDetails = () => {
  const [avatar, setAvatar] = useState([])
  const { avatarId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAvatar = async () => {
      try {
        setLoading(true)
        const response = await fetchAvatarById(avatarId)
        setLoading(false)
        if (response?.success) {
          setAvatar(response.data)
        }
      } catch (error) {
        console.error(`Error getting user details: ${error}.`)
      }
    }
    getAvatar()
  }, [])

  return (
    <>
      <div className="user-details">{/* <p>{user?.email}</p> */}</div>
      {avatar.length !== 0 ? (
        <>
          <h1>{avatar.userName}</h1>
          <div className="user-details box">
            <dl className="d-flex flex-wrap justify-content-between">
              <dt>Username</dt>
              <dd>{avatar.userId.userName}</dd>
              <dt>Email</dt>
              <dd>{avatar.userId.email}</dd>
              <dt>Avatar</dt>

              <dd className="is-avatar">
                {avatar.userId.isAvatarApproved ? (
                  <FontAwesomeIcon icon={faCircleCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimesCircle} /> // or any cross icon you prefer
                )}
              </dd>
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

export default AvatarDetails
