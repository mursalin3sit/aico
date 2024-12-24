<template>
  <div class="checkout-area ptb-100">
    <div class="container">
      <form>
        <div class="row" data-cues="slideInUp">
          <div class="col-lg-8 col-md-12">
            <div class="billing-details-box">
              <h3>Billing Details</h3>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control rounded-0 shadow-none"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control rounded-0 shadow-none"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group">
                <select class="form-select shadow-none rounded-0">
                  <option selected>Country/Region</option>
                  <option value="1">United States of America</option>
                  <option value="2">Russia</option>
                  <option value="3">England</option>
                  <option value="3">China</option>
                  <option value="3">Turkey</option>
                </select>
              </div>
              <div class="form-group">
                <textarea
                  cols="30"
                  rows="5"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Street/Address"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Town/City"
                />
              </div>
              <div class="form-group">
                <select class="form-select shadow-none rounded-0">
                  <option selected>State</option>
                  <option value="1">Utah</option>
                  <option value="2">Florida</option>
                  <option value="3">Nebraska</option>
                  <option value="3">Washington</option>
                  <option value="3">Wisconsin</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Zip Code"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Phone No"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div class="additional-info-box">
              <h3>Additional Information</h3>
              <div class="form-group">
                <textarea
                  cols="30"
                  rows="5"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Order notes (Optional)"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="your-orders-box">
              <h3>Your Orders</h3>
              <ul class="ps-0 list-unstyled">
                <li class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img
                      src="../../assets/img/products/product1.jpg"
                      alt="product-image"
                    />
                    <div>
                      <h4>Bot Illustration</h4>
                      <span class="d-block">x 1</span>
                    </div>
                  </div>
                  <span class="d-block">$5.00</span>
                </li>
                <li class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img
                      src="../../assets/img/products/product2.jpg"
                      alt="product-image"
                    />
                    <div>
                      <h4>Cute Baby Bot</h4>
                      <span class="d-block">x 2</span>
                    </div>
                  </div>
                  <span class="d-block">$10.00</span>
                </li>
                <li class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img
                      src="../../assets/img/products/product3.jpg"
                      alt="product-image"
                    />
                    <div>
                      <h4>Futuristic Bot</h4>
                      <span class="d-block">x 1</span>
                    </div>
                  </div>
                  <span class="d-block">$5.00</span>
                </li>
              </ul>
              <div
                class="sub-total d-flex align-items-center justify-content-between"
              >
                <span class="d-block">Subtotal</span>
                <span class="d-block">$20.00</span>
              </div>
            </div>
            <div class="payment-method-box">
              <h3>Select Payment Method</h3>
              <ul class="ps-0 mb-0 list-unstyled">
                <li>
                  <input
                    type="radio"
                    id="direct-bank-transfer"
                    name="radio-group"
                    checked
                  />
                  <label for="direct-bank-transfer">Credit/Debit Card</label>
                  <div class="d-flex align-items-center">
                    <img
                      src="../../assets/img/payment-method/mastercard.jpg"
                      alt="mastercard"
                    />
                    <img
                      src="../../assets/img/payment-method/visa.jpg"
                      alt="visa"
                    />
                    <img
                      src="../../assets/img/payment-method/american-express.jpg"
                      alt="american-express"
                    />
                  </div>
                </li>
                <li>
                  <input type="radio" id="check-payments" name="radio-group" />
                  <label for="check-payments">Pay with PayPal</label>
                </li>
                <li>
                  <input type="radio" id="paypal" name="radio-group" />
                  <label for="paypal">Cash on Delivery</label>
                </li>
              </ul>
              <div class="bottom">
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our
                  <router-link to="/privacy-policy">privacy policy</router-link
                  >.
                </p>
                <button type="submit" class="default-btn two border-0">
                  Place Order Now
                  <i class="flaticon-next"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutContent",
};
</script>
