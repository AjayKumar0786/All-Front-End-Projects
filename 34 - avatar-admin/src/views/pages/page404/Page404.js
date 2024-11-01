import React from 'react'
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import {
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="erro-404">
              <h1>404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-body-secondary">
                The page you are looking for was not found.
              </p>
              <Button variant="primary" onClick={() => navigate("/admin/dashboard")}><FontAwesomeIcon icon={faArrowLeftLong} style={{ marginRight: "10px" }} />Go Back to Dashboard</Button>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
