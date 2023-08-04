import Breadcrumb from '@/components/layout/Breadcrumb'
import Head from 'next/head'
import React from 'react'

function Buy() {
  return (
    <>
    <Head>
        <title>Buy</title>
    </Head>
    <Breadcrumb title={"Buy"}/>

<form>
<div class="row g-4">
    <div class="col-md-5 col-lg-4 order-md-last">
      
    </div>
    <div class="col-md-7 col-md-8">
      <h4 class="mb-3">Billing address</h4>

        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder=""  required/>
            
          </div>
          <div class="col-sm-6">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder=""  required/>
            
          </div>
          <div class="col-12">
          <label for="mobile">Mobile</label>
          <div class="input-group">
            <input type="number" class="form-control" id="mobile" placeholder="+91"   required/> 
            
          </div>
        </div>
        <div class="col-12">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
        
        </div>
        <div class="mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" placeholder="1234 Main St"  required/>
         
        </div>
        <div class="col-12">
          <label for="landmark">Landmark</label>
          <input type="text" class="form-control" id="landmark" placeholder="Apartment or suite"/>
          
        </div>

        <div class="col-md-5">
            <label for="country">Country</label>
            <select class="form-select" id="india"  required>
              <option value="">Choose...</option>
              <option value="india">India</option>
            </select>
            
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="form-select" id="state"  required>
              <option value="">Choose...</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="uttarpradesh">Uttar Pradesh</option>
            </select>
           
          </div>
          <div class="col-md-3">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder=""  required/>
            
          </div>
      </div>



      <div class="card p-2">
        <div class="input-group">
        <button type='submit' className="w-100 btn btn-primary btn-lg"><a href="/thank-you" class="nav-link font-italic">Submit</a></button>
        </div>
      </div>




        <hr class="mb-4"/>
        
        <h4 class="mb-3">Payment</h4>

        <div class="my-3">
    
          <div class="form-check">
            <input id="cod" name="paymentMethod" type="radio"  class="form-check-input" checked="true" required/>
            <label class="form-check-label" for="cod">Cash on Delivery</label>
          </div>
        </div>
        <hr class="my-4"/>

    </div>
</div>
</form>
    </>
  )
}

export default Buy