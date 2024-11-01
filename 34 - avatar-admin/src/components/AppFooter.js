import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <p className="mb-0">© 2024 AvatarWalk. All Rights Reserved.</p>
    </CFooter>
  )
}

export default React.memo(AppFooter)
