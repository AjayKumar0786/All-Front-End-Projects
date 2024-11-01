import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import { RequestPasswordResetApi, ResetPasswordApi } from '../../../utils/services/authServices'
import toast from 'react-hot-toast'
import Loader from '../../../components/loader/Loader'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    otp: '',
    newPassword: '',
  })
  const [formErrors, setFormErrors] = useState({
    email: '',
    otp: '',
    newPassword: '',
  })
  const [loading, setLoading] = useState(false) // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevState) => ({ ...prevState, [name]: value }))
  }

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setFormErrors({ email: '', otp: '', newPassword: '' })

    if (!validateEmail(formValues.email)) {
      setFormErrors((prevState) => ({ ...prevState, email: 'Invalid email address.' }))
      return
    }

    setLoading(true) // Start loading
    try {
      const res = await RequestPasswordResetApi({ email: formValues.email })
      if (res?.success) {
        setEmailSubmitted(true)
        toast.success('Email sent successfully. Please check your inbox.')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false) // Stop loading
    }
  }

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    setFormErrors({ email: '', otp: '', newPassword: '' })

    if (!formValues.otp) {
      setFormErrors((prevState) => ({ ...prevState, otp: 'OTP is required.' }))
      return
    }

    if (!formValues.newPassword) {
      setFormErrors((prevState) => ({ ...prevState, newPassword: 'New password is required.' }))
      return
    }

    setLoading(true) // Start loading
    try {
      const res = await ResetPasswordApi(formValues)
      if (res?.success) {
        navigate('/admin/login')
        toast.success('Password has been reset successfully.')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false) // Stop loading
    }
  }

  return (
    <>
      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={6}>
              <h1 className="text-center">Forgot Password?</h1>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <Form onSubmit={emailSubmitted ? handlePasswordReset : handleEmailSubmit}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={formValues.email}
                          onChange={handleChange}
                          readOnly={emailSubmitted} // Make email field readonly after submission
                        />
                        <p className="error">{formErrors.email}</p>
                      </Form.Group>

                      {emailSubmitted && (
                        <>
                          <Form.Group className="mb-3" controlId="formOtp">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control
                              type="number"
                              name="otp"
                              placeholder="Enter OTP"
                              value={formValues.otp}
                              onChange={handleChange}
                            />
                            <p className="error">{formErrors.otp}</p>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formNewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="newPassword"
                              placeholder="Enter new password"
                              value={formValues.newPassword}
                              onChange={handleChange}
                            />
                            <p className="error">{formErrors.newPassword}</p>
                          </Form.Group>
                        </>
                      )}

                      <div className="form-actions">
                        <Button variant="primary" type="submit" disabled={loading}>
                          {emailSubmitted ? 'Reset Password' : 'Submit'}
                        </Button>
                        {!emailSubmitted && (
                          <Link to="/admin/login" className="main-link">
                            Login Account?
                          </Link>
                        )}
                      </div>
                    </Form>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      {loading && <Loader />} {/* Show loader when loading */}
    </>
  )
}

export default ForgotPassword
