import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CAMPUS FORA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button>
        <button className="btn btn-danger" type="submit">Profile/Login</button>
      </form>
    </div>
  </div>
</nav>

<div id="carousel" class="carousel carousel-dark slide pointer-event">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item" data-bs-interval="10000">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="white"></rect></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>TOP ANSWERS</h5>
        <p>From the students, For the students</p>
      </div>
    </div>
    <div class="carousel-item active" data-bs-interval="20">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#59da0e"></rect></svg>
      <div class="carousel-caption d-none d-md-block" >
        <h5 align="left">TITLE</h5>
        <h5 align="left">CONTENT</h5>
      </div>
    </div>
  
      </div>

</div>



<div id="carouselExampleDark" class="carousel carousel-dark slide pointer-event">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="" aria-label="Slide 1" fdprocessedid="580a9"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" fdprocessedid="hhe2q8" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" fdprocessedid="tjmt8" class=""></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item" data-bs-interval="10000">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="red"></rect></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>TOP ANSWERS</h5>
        <p>From the students, For the students</p>
      </div>
    </div>
    <div class="carousel-item active" data-bs-interval="20">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="red"></rect></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>ANSWER #1</h5>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="red"></rect></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>ANSWER #2</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" fdprocessedid="t0xdlw">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" fdprocessedid="0rjs7o">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="list-group" id="questions">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h1 class="mb-1">RELATED QUESTIONS</h1>
    </div>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Question #1</h5>
      <small class="text-body-secondary">2 days ago</small>
    </div>
    <p class="mb-1">blah blah blah blah</p>
    <small class="text-body-secondary">some more blah blah blah blah</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Question #2</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">blah blah blah blah</p>
    <small class="text-body-secondary">some more blah blah blah blah</small>
  </a>
</div>

<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
  <a class="navbar-brand" href="#">Comments</a>
  <ul class="nav nav-pills">

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Rank by</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Upvotes</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Time created</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Relevancy</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h6 id="scrollspyHeading1">First comment</h6>
  <h6 id="scrollspyHeading2">Second comment</h6>
  <h6 id="scrollspyHeading3">Third comment</h6>
</div>
    </>

  );
}

export default App;
