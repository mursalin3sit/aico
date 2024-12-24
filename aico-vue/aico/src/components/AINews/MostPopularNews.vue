<template>
  <div class="most-popular-area ptb-80">
    <div class="container">
      <div class="most-popular-inner d-none d-lg-block">
        <div class="row align-items-end">
          <div class="col-lg-4 col-md-4">
            <span class="title d-none d-lg-block position-relative fw-bold">
              <i class="flaticon-lightning"></i> Top News
            </span>
          </div>
          <div class="col-lg-8 col-md-8">
            <h2 class="mb-0">Most Popular</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-12">
          <span
            class="trending-title mt-0 d-lg-none d-block position-relative fw-bold"
          >
            <i class="flaticon-lightning"></i> Top News
          </span>
          <div
            class="top-news-posts"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="box">
              <h3>
                <router-link to="/blog-details" class="text-decoration-none">
                  LangChain 101: Build your own GPT-Powered applications
                </router-link>
              </h3>
              <ul
                class="meta mb-0 ps-0 list-unstyled d-flex align-items-center"
              >
                <li>
                  <div class="author d-flex align-items-center">
                    <img
                      src="../../assets/img/users/user4.jpg"
                      alt="user-image"
                    />
                    <router-link
                      to="/blog-grid"
                      class="text-decoration-none fw-semibold"
                    >
                      John_Anderson
                    </router-link>
                  </div>
                </li>
                <li>September 27, 2024</li>
              </ul>
            </div>
            <div class="box">
              <h3>
                <router-link to="/blog-details" class="text-decoration-none">
                  10 Websites to Get Amazing Data for Data Science
                </router-link>
              </h3>
              <ul
                class="meta mb-0 ps-0 list-unstyled d-flex align-items-center"
              >
                <li>
                  <div class="author d-flex align-items-center">
                    <img
                      src="../../assets/img/users/user6.jpg"
                      alt="user-image"
                    />
                    <router-link
                      to="/blog-grid"
                      class="text-decoration-none fw-semibold"
                    >
                      James_Andy
                    </router-link>
                  </div>
                </li>
                <li>September 28, 2024</li>
              </ul>
            </div>
            <div class="box">
              <h3>
                <router-link to="/blog-details" class="text-decoration-none">
                  4 Ways to Generate Passive Income Using ChatGPT
                </router-link>
              </h3>
              <ul
                class="meta mb-0 ps-0 list-unstyled d-flex align-items-center"
              >
                <li>
                  <div class="author d-flex align-items-center">
                    <img
                      src="../../assets/img/users/user4.jpg"
                      alt="user-image"
                    />
                    <router-link
                      to="/blog-grid"
                      class="text-decoration-none fw-semibold"
                    >
                      John_Anderson
                    </router-link>
                  </div>
                </li>
                <li>September 29, 2024</li>
              </ul>
            </div>
          </div>
          <div
            class="popular-tags-box"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h3>Popular Tags</h3>
            <div class="tags">
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                Artificial Intelligence
              </router-link>
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                Networking
              </router-link>
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                ChatGPT
              </router-link>
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                Image Generator
              </router-link>
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                AI Chatbot
              </router-link>
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                Web
              </router-link>
              <router-link
                to="/blog-grid"
                class="text-decoration-none d-inline-block"
              >
                Technology
              </router-link>
            </div>
          </div>
          <div
            class="ai-saas-news-box"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h3 class="title">AI SaaS News</h3>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <router-link
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="../../assets/img/ai-saas-news/news1.jpg"
                      alt="post-image"
                    />
                  </router-link>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <router-link
                        to="/blog-details"
                        class="text-decoration-none"
                      >
                        Reseach on AI helps to introduce new saas
                      </router-link>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="../../assets/img/users/user4.jpg"
                            alt="user-image"
                          />
                          by
                          <router-link
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            John_Smith
                          </router-link>
                        </div>
                      </li>
                      <li>September 24, 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <router-link
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="../../assets/img/ai-saas-news/news2.jpg"
                      alt="post-image"
                    />
                  </router-link>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <router-link
                        to="/blog-details"
                        class="text-decoration-none"
                      >
                        Uses of AI is increasing in video editing
                      </router-link>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="../../assets/img/users/user2.jpg"
                            alt="user-image"
                          />
                          by
                          <router-link
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            Alina_Smith
                          </router-link>
                        </div>
                      </li>
                      <li>September 25, 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <router-link
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="../../assets/img/ai-saas-news/news3.jpg"
                      alt="post-image"
                    />
                  </router-link>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <router-link
                        to="/blog-details"
                        class="text-decoration-none"
                      >
                        5 Free chatbot saas for detecting ChatGPT
                      </router-link>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="../../assets/img/users/user3.jpg"
                            alt="user-image"
                          />
                          by
                          <router-link
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            David_John
                          </router-link>
                        </div>
                      </li>
                      <li>September 26, 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <router-link
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="../../assets/img/ai-saas-news/news4.jpg"
                      alt="post-image"
                    />
                  </router-link>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <router-link
                        to="/blog-details"
                        class="text-decoration-none"
                      >
                        3 Popular AI image generator are published
                      </router-link>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="../../assets/img/users/user1.jpg"
                            alt="user-image"
                          />
                          by
                          <router-link
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            ChatBot
                          </router-link>
                        </div>
                      </li>
                      <li>September 27, 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-12">
          <div class="most-popular-tabs">
            <BTabs>
              <BTab title="Trending" active>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular2.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            A list of artificial intelligence tools you can use
                            today — for personal use (1/3)
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user6.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Jane_Ronan
                              </router-link>
                            </div>
                          </li>
                          <li>September 25, 2024</li>
                          <li>2 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular1.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            I want to learn Artificial Intelligence and Machine
                            Learning. Where can I start?
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user4.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                John_Anderson
                              </router-link>
                            </div>
                          </li>
                          <li>September 24, 2024</li>
                          <li>3 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  class="atar-ads d-block text-decoration-none text-center"
                  target="_blank"
                >
                  <img
                    src="../../assets/img/most-popular/atar-ads.jpg"
                    alt="ads-image"
                  />
                </a>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular3.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Effective as a collective: researchers investigate
                            the swarming behavior of microrobots
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user2.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Alina_Smith
                              </router-link>
                            </div>
                          </li>
                          <li>September 26, 2024</li>
                          <li>4 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular4.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Machine Learning (ML) vs. Artificial Intelligence
                            (AI) — The most crucial differences
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user3.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                James_Andy
                              </router-link>
                            </div>
                          </li>
                          <li>September 27, 2024</li>
                          <li>5 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BTab>
              <BTab title="Popular">
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular3.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Effective as a collective: researchers investigate
                            the swarming behavior of microrobots
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user2.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Alina_Smith
                              </router-link>
                            </div>
                          </li>
                          <li>September 26, 2024</li>
                          <li>4 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular1.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            I want to learn Artificial Intelligence and Machine
                            Learning. Where can I start?
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user4.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                John_Anderson
                              </router-link>
                            </div>
                          </li>
                          <li>September 24, 2024</li>
                          <li>3 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular2.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            A list of artificial intelligence tools you can use
                            today — for personal use (1/3)
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user6.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Jane_Ronan
                              </router-link>
                            </div>
                          </li>
                          <li>September 25, 2024</li>
                          <li>2 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  class="atar-ads d-block text-decoration-none text-center"
                  target="_blank"
                >
                  <img
                    src="../../assets/img/most-popular/atar-ads.jpg"
                    alt="ads-image"
                  />
                </a>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular4.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Machine Learning (ML) vs. Artificial Intelligence
                            (AI) — The most crucial differences
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user3.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                James_Andy
                              </router-link>
                            </div>
                          </li>
                          <li>September 27, 2024</li>
                          <li>5 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BTab>
              <BTab title="Recent">
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular4.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Machine Learning (ML) vs. Artificial Intelligence
                            (AI) — The most crucial differences
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user3.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                James_Andy
                              </router-link>
                            </div>
                          </li>
                          <li>September 27, 2024</li>
                          <li>5 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular1.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            I want to learn Artificial Intelligence and Machine
                            Learning. Where can I start?
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user4.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                John_Anderson
                              </router-link>
                            </div>
                          </li>
                          <li>September 24, 2024</li>
                          <li>3 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular2.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            A list of artificial intelligence tools you can use
                            today — for personal use (1/3)
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user6.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Jane_Ronan
                              </router-link>
                            </div>
                          </li>
                          <li>September 25, 2024</li>
                          <li>2 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  class="atar-ads d-block text-decoration-none text-center"
                  target="_blank"
                >
                  <img
                    src="../../assets/img/most-popular/atar-ads.jpg"
                    alt="ads-image"
                  />
                </a>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular3.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Effective as a collective: researchers investigate
                            the swarming behavior of microrobots
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user2.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Alina_Smith
                              </router-link>
                            </div>
                          </li>
                          <li>September 26, 2024</li>
                          <li>4 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BTab>
              <BTab title="Featured">
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular1.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            I want to learn Artificial Intelligence and Machine
                            Learning. Where can I start?
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user4.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                John_Anderson
                              </router-link>
                            </div>
                          </li>
                          <li>September 24, 2024</li>
                          <li>3 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular3.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category popular">Popular</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Effective as a collective: researchers investigate
                            the swarming behavior of microrobots
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user2.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Alina_Smith
                              </router-link>
                            </div>
                          </li>
                          <li>September 26, 2024</li>
                          <li>4 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular2.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            A list of artificial intelligence tools you can use
                            today — for personal use (1/3)
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user6.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                Jane_Ronan
                              </router-link>
                            </div>
                          </li>
                          <li>September 25, 2024</li>
                          <li>2 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  class="atar-ads d-block text-decoration-none text-center"
                  target="_blank"
                >
                  <img
                    src="../../assets/img/most-popular/atar-ads.jpg"
                    alt="ads-image"
                  />
                </a>
                <div class="single-most-popular-post">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                      <div class="image position-relative">
                        <router-link
                          to="/blog-details"
                          class="d-block text-decoration-none"
                        >
                          <img
                            src="../../assets/img/most-popular/most-popular4.jpg"
                            alt="most-popular-image"
                          />
                        </router-link>
                        <span class="category">Featured</span>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="content">
                        <h3>
                          <router-link
                            to="/blog-details"
                            class="text-decoration-none"
                          >
                            Machine Learning (ML) vs. Artificial Intelligence
                            (AI) — The most crucial differences
                          </router-link>
                        </h3>
                        <ul
                          class="meta ps-0 list-unstyled d-flex align-items-center"
                        >
                          <li>
                            <div class="author d-flex align-items-center">
                              <img
                                src="../../assets/img/users/user3.jpg"
                                alt="user-image"
                              />
                              by
                              <router-link
                                to="/blog-grid"
                                class="text-decoration-none fw-semibold"
                              >
                                James_Andy
                              </router-link>
                            </div>
                          </li>
                          <li>September 27, 2024</li>
                          <li>5 mins read</li>
                        </ul>
                        <p>
                          The Most Complete List of Best AI Cheat Sheets — Over
                          the past few months, I have been collecting AI...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BTab>
            </BTabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BTabs, BTab } from "bootstrap-vue-next";

export default defineComponent({
  name: "MostPopularNews",
  components: {
    BTabs,
    BTab,
  },
});
</script>
