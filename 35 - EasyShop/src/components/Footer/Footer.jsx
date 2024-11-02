import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
 <section>
    <div className="container">
        <div className="row">
      
              <div className="col-lg-12">
              <div className="text-center">
                    <p className='footer_logo text-center mt-lg-3 mt-0'>
                       <a href="/"> <img src="./img/EASYSHOP-footer.webp" alt="" className='img-fluid w-25'/></a>
                        </p>
                 
                </div>
                <div className='text-center'>
                    <ul className='d-flex  justify-content-center list-unstyled footer_links'>
                        <li><a href="" className='text-decoration-none text-dark'> Company</a></li>
                        <li><a href="" className='text-decoration-none text-dark'>Products</a></li>
                        <li><a href="" className='text-decoration-none text-dark'>Offices</a></li>
                        <li><a href="" className='text-decoration-none text-dark'>About</a></li>
                        <li><a href="" className='text-decoration-none text-dark'>Contact</a></li>
                    </ul>
                </div>

                <div className='text-center'>
                    <ul className='d-flex  justify-content-center list-unstyled footer_social_link'>
                        <li><a href="javascript:void" className='text-decoration-none text-dark'><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="javascript:void" className='text-decoration-none text-dark'><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="javascript:void" className='text-decoration-none text-dark'><i class="fa-brands fa-whatsapp"></i></a></li>
                        <li><a href="javascript:void" className='text-decoration-none text-dark'><i class="fa-brands fa-pinterest-p"></i></a></li>
                        <li><a href="javascript:void" className='text-decoration-none text-dark'><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
              </div>
      
                <div className="copywrite text-center">
                    <hr/>
                    <p>Copyright @ 2023 -ALl Right Reserved </p>
                </div>
            </div>
       
    </div>
 </section>
  )
}

export default Footer
