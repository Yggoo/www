<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Yggoo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div class="container">
      Random Image: <img :src="data"/>
      <br/>Raw data: {{data}}
      <h1>Unlocking Boundless Potential with Yggoo</h1>
      <p>Experience the power of Yggoo, the revolutionary service that transcends boundaries and unleashes unimaginable
        possibilities.</p>
      <a href="#" class="btn btn-primary">Discover More</a>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h1>Introduction</h1>
          <p>Welcome to today's presentation on Yggoo, the revolutionary service that's set to redefine the way we
            experience the world! Prepare to embark on a journey that will transcend boundaries and unleash unimaginable
            possibilities.</p>
        </div>
        <div class="carousel-item">
          <h1>The Power of Yggoo</h1>
          <p>Yggoo harnesses the power of cutting-edge technology to connect people, ideas, and opportunities like never
            before. It opens the door to a realm of endless exploration and creativity, where the only limit is your
            imagination.</p>
        </div>
        <div class="carousel-item">
          <h1>Seamless Connectivity</h1>
          <p>Yggoo seamlessly bridges the gap between individuals, communities, and resources, enabling a new era of
            collaboration and connection. It empowers users to tap into a vast network of like-minded individuals,
            fostering innovation and driving progress.</p>
        </div>
        <div class="carousel-item">
          <h1>Discover New Frontiers</h1>
          <p>With Yggoo, you'll embark on a transformative journey of discovery. Explore uncharted territories, uncover
            hidden gems, and embrace the unknown, all from the comfort of your fingertips.</p>
        </div>
        <div class="carousel-item">
          <h1>Empowering Creativity</h1>
          <p>Yggoo is a catalyst for creativity, empowering individuals to unlock their full potential. Whether you're an
            artist, entrepreneur, or dreamer, Yggoo provides the tools and inspiration to turn ideas into reality.</p>
        </div>
        <div class="carousel-item">
          <h1>Unleash Your Passion</h1>
          <p>Yggoo ignites the spark within, allowing you to pursue your passions with unwavering dedication. Through
            immersive experiences and tailored recommendations, it fuels your drive and helps you achieve greatness.</p>
        </div>
        <div class="carousel-item">
          <h1>Privacy and Security</h1>
          <p>At Yggoo, we value your privacy and security above all else. Our state-of-the-art encryption ensures that
            your data remains protected, allowing you to explore with peace of mind.</p>
        </div>
        <div class="carousel-item">
          <h1>Embrace the Future</h1>
          <p>Yggoo is a glimpse into the future, where possibilities are endless and innovation knows no bounds. Embrace
            this transformative service and be at the forefront of a new era of connectivity and exploration.</p>
        </div>
        <div class="carousel-item">
          <h1>Join the Yggoo Revolution</h1>
          <p>Are you ready to embark on an extraordinary journey? Join the Yggoo revolution and unlock a world of
            limitless potential today!</p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch(() =>'/api/hello')

</script>

<style lang="css" scoped>  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    color: #333333;
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
    color: #666666;
  }

  .btn {
    font-size: 20px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .btn-primary {
    background-color: #007bff;
    color: #ffffff;
    border: none;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }

  .carousel-item {
    background-color: #f8f8f8;
    padding: 40px;
    text-align: center;
  }

  .carousel-item h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #333333;
  }

  .carousel-item p {
    font-size: 18px;
    margin-bottom: 40px;
    color: #666666;
  }
</style>