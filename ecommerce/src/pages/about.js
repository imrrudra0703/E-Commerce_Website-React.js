import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container">
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="/" class="nav-link font-italic"> <b>Home</b> </a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">Happy Customer Satisfaction</h1>
        <p class="lead text-muted mb-0">We are the best e-commerce service provider.</p>
        <p class="lead text-muted"> <a href="/images/img-2.webp" class="text-muted"> 
    </a>
        </p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><Image src="/images/img-2.webp" width={200} height={200} alt="text" class="img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>

        <h2 class="font-italic text-muted mb-4">We wish you a happy shopping.</h2><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><Image src="/images/img-1.webp" width={200} height={200} alt="a" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><Image src="/images/img-2.webp" height={200} width={200} alt="b" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Shopping esi ghar jesi !</h2>
        <p class="font-italic text-muted mb-4">We provide the best shopping experience.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>

<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 "><b>We have the Best Team Members.</b></h2>
      </div>
    </div>
  </div>
</div>


<footer class="bg-light pb-5">
  <div class="container text-center">
    <p class="font-italic text-muted mb-0">&copy; Copyrights NWG All rights reserved.</p>
  </div>
</footer>
</>
  )
}

export default About