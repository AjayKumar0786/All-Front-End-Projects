import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../../utils/validation/FormValidation'
import toast from 'react-hot-toast'
import { CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import { setLocalStorage } from '../../../utils/LocalStorageUtils'
import LoginApi from '../../../utils/services/authServices'
import Loader from '../../../components/loader/Loader'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false) // Add loading state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateLogin),
  })

  const handleLogin = async (data) => {
    setLoading(true) // Start loading
    const payload = {
      email: data?.email,
      password: data?.password,
    }

    try {
      const response = await LoginApi(payload) // Assuming LoginApi sends JSON payload

      if (response?.isSuccess) {
        setLocalStorage('token', response?.token)
        toast.success(response?.message)
        navigate('/admin/dashboard')
      } 
    } catch (error) {
      toast.error(error?.message || 'An error occurred')
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
              <h1 className="text-center">AvatarWalk</h1>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <Form onSubmit={handleSubmit(handleLogin)}>
                      <Form.Group className="mb-3" controlId="formLoginUsername">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          {...register('email')}
                        />
                        <p className="error">{errors.email?.message}</p>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          {...register('password')}
                        />
                        <p className="error">{errors.password?.message}</p>
                      </Form.Group>
                      <div className="form-actions">
                        <Button variant="primary" type="submit" disabled={loading}>
                          {loading ? 'Logging in...' : 'Submit'}
                        </Button>
                        <Link to="/admin/forgot-password" className="main-link">
                          Forgot Password?
                        </Link>
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

export default Login
