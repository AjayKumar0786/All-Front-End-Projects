import './ExperienceDetails.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchExperienceById } from '../../../utils/services/experienceServices'
import { Row, Col, Alert } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader/Loader'
const ExperienceDetails = () => {
  const [experience, setExperience] = useState([])
  const { experienceId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true)
        const response = await fetchExperienceById(experienceId)
        setLoading(false)
        if (response?.success) {
          console.log(response.data)
          setExperience(response.data)
        }
      } catch (error) {
        console.error(`Error getting user details: ${error}.`)
      }
    }
    getUser()
  }, [])

  return (
    <>
      {loading && <Loader />}
      {experience.length == 0 ? (
        <Alert variant="warning">No Experience Found!</Alert>
      ) : (
        <div className="experience-details">
          <Row>
            <Col md={4}>
              <div className="e-d-image">
                <img src={experience.images[0]} alt="" />
              </div>
            </Col>
            <Col md={8}>
              <div className="e-d-text">
                <h1 className="mb-4">{experience?.name}</h1>
                <Table hover>
                  <tbody>
                    <tr>
                      <th>Experience Name</th>
                      <td>{experience.ExperienceName}</td>
                    </tr>
                    <tr>
                      <th>Amounts per minute</th>
                      <td>{experience.AmountsperMinute}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>{experience.country}</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{experience.State}</td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>{experience.city}</td>
                    </tr>
                    <tr>
                      <th>Bookings</th>
                      <td>{experience.Booking}</td>
                    </tr>
                    <tr>
                      <th>Likes</th>
                      <td>{experience.likes}</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="rating">
                  <h5>Rating</h5>
                  <div className="rating-stars d-flex flex-wrap">
                    <FontAwesomeIcon icon={faStar} />
                    {experience.rating[0]}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {/* <div className="experience-details">
        <h1>{experience?.name}</h1>
        <p>{experience?.createdBy}</p>
        <p>{experience?.totalBookings}</p>
        <p>{experience?.price}</p>
      </div> */}
    </>
  )
}

export default ExperienceDetails
