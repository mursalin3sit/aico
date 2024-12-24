<template>
  <div class="contact-area ptb-100 position-relative z-1">
    <div class="container">
      <div class="section-title text-center">
        <span class="sub-title d-block fw-medium">CONTACT US</span>
        <h2 class="mb-0 ms-auto me-auto">Get in touch</h2>
      </div>
      <div class="row align-items-lg-end">
        <div class="col-lg-7 col-md-12 order-md-2 order-lg-1">
          <div class="contact-image position-relative">
            <img src="../../assets/img/contact.jpg" alt="contact-image" />
            <div
              class="contact-info"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="box">
                <h3 class="position-relative">Call Us</h3>
                <a
                  href="tel:+006201234567"
                  class="text-decoration-none position-relative d-inline-block"
                >
                  +00 620 123 4567
                </a>
                <a
                  href="tel:+006201234568"
                  class="text-decoration-none position-relative d-inline-block"
                >
                  +00 620 123 4568
                </a>
              </div>
              <div class="box">
                <h3 class="position-relative">Mail Us</h3>
                <a
                  href="mailto:hello@aico.com"
                  class="text-decoration-none position-relative d-inline-block"
                >
                  hello@aico.com
                </a>
              </div>
              <div class="box">
                <h3 class="position-relative">Visit Us</h3>
                <p>2750 Quadra Street Victoria Road, New York, USA</p>
              </div>
              <div class="socials-link">
                <a
                  href="#"
                  target="_blank"
                  class="text-decoration-none d-inline-block fw-medium"
                >
                  Fb
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-decoration-none d-inline-block fw-medium"
                >
                  In
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-decoration-none d-inline-block fw-medium"
                >
                  Li
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-decoration-none d-inline-block fw-medium"
                >
                  Tw
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 order-md-1 order-lg-2">
          <div
            class="contact-form"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Your name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Phone no"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Subject"
                />
              </div>
              <div class="form-group">
                <textarea
                  cols="30"
                  rows="4"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button type="submit" class="default-btn border-0 two">
                Send Message Now
                <i class="flaticon-next"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="shape6 position-absolute z-n1">
      <img src="../../assets/img/shapes/shape6.png" alt="shape6" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
