<template>
  <div class="portfolio-area bg-2d0e34 ptb-100">
    <div class="container">
      <div class="section-title text-center">
        <span class="sub-title d-block fw-medium">PORTFOLIO</span>
        <h2 class="mb-0 ms-auto me-auto">
          We create the most realistic images than ever
        </h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row portfolio-items">
        <div
          class="col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio1.jpg"
              alt="portfolio-image"
            />
          </div>
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio2.jpg"
              alt="portfolio-image"
            />
          </div>
        </div>
        <div
          class="col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio3.jpg"
              alt="portfolio-image"
            />
          </div>
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio4.jpg"
              alt="portfolio-image"
            />
          </div>
        </div>
        <div
          class="col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio5.jpg"
              alt="portfolio-image"
            />
          </div>
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio6.jpg"
              alt="portfolio-image"
            />
          </div>
        </div>
        <div
          class="col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio7.jpg"
              alt="portfolio-image"
            />
          </div>
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio8.jpg"
              alt="portfolio-image"
            />
          </div>
        </div>
        <div
          class="col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio9.jpg"
              alt="portfolio-image"
            />
          </div>
          <div class="single-portfolio-item text-center">
            <img
              src="../../assets/img/portfolio/portfolio10.jpg"
              alt="portfolio-image"
            />
          </div>
          <div class="explore-more-btn text-end">
            <router-link
              to="/portfolio"
              class="d-inline-block fw-medium position-relative text-decoration-none"
            >
              Explore More
              <i class="flaticon-next"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioContent",
};
</script>
