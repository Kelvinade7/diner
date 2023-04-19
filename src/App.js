import './Vic.css';
function App() {
  return (
    <div>
      <body>
  <nav class="navbar navbar-expand-lg bg-warning" style={{padding: "12px"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><h2><span style={{color: "red",marginLeft:'10px'}}>Live</span> Diner</h2></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search" style={{marginTop:" 6px;"}}>
          <input class="form-control me-2 bg-warning" id="ball" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn " id="ball" type="submit">Search</button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{padding:'10px'}}>
          <li class="nav-item">
            <a class="nav-link active" id="link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="link" href="#">Menu</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#" id="link">About</a>
          </li>
          <li><a href="#" class="nav-link" id="link">Login</a></li>
        </ul>
       
      </div>
    </div>
  </nav>
<br/>
<div class="card"  id='crip'>
  <div class="card-title">
    <h2>Welcome To <span style={{color:'orangered'}}>Live Dinner Restaurant</span> </h2>
    </div>
    <div class="card-text">
      <p style={{fontWeight:'bolder'}}>Little Story</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nulla deserunt ipsam voluptatum beatae tempora voluptatem 
        ex nihil neque magni maxime error quaerat accusantium animi incidunt odio sint commodi, quas fugiat. Deleniti commodi corrupti assumenda
        <br/> vero eum, quo, nulla quaerat unde natus quas rem, ullam autem eveniet doloribus. Labore voluptate expedita ut voluptatem provident 
        ullam consequatur necessitatibus obcaecati esse voluptatibus quis corporis exercitationem quaerat laudantium possimus molestias, vitae dolores? Ullam!</p>
    </div>
    <div  >
      <img class='card-img' src="https://www.nfcihospitality.com/wp-content/uploads/2020/09/dineinstyle.jpg" alt='..'/>
    </div>
    
  
</div>
<div class='row' id='food' >
  <div class='col-lg-12'>
  <div class='card' id='top'style={{backgroundColor:'black'}}>
    <p class='card-text'>"If you're not the one cooking, stay out of the way and compliment the chef."</p>
    <p style={{fontWeight:'bolder'}}>Micheal Strahan</p>
  </div>
  </div>
</div>
<div class='row' style={{background:'white',padding:'20px',textAlign:'center'}}>
  <div class='col-lg-12' id="pic">
    <button className='butto'>LATEST MENU</button>
  </div>
</div> 
<div style={{backgroundColor:'white'}} className='fo'>
<div class='card' >
  <div class='row'>
    <div class='col-lg-6' style={{backgroundColor:'rgb(230, 86, 20)',color:'white', fontSize:'25px',textAlign:'center'}}>
    <p class='card-text'>Local Delicacies</p>
    </div>
  </div>
  <img  className='oo' src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/09/grilled-chicken.jpg?quality=82&strip=all"/>
  <div class='row' >
    <div class='col-lg-12 card-text' id='he'><p>Food  
          Price:120 Naira Only</p>
    <button class="butto">VIEW ALL</button>
    </div>
   
  </div>
  

</div>


</div > 
<div style={{backgroundColor:'black'}}>
<div  id='ok'>

<div id='new'>
<h3  className='h'>ABOUT US</h3>
  <p style={{color:'white'}}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis dolor impedit veniam, iusto volupta
    te, velit totam voluptatem laborum saepe porro explicabo a recusandae.</p>
    
</div>
<div class='old'>
<h3 className='h'>RESERVATION</h3>
      <center><button style={{backgroundColor:'rgb(230, 86, 20)', color:'white',width:'250px',fontSize:'25px',marginBottom:'10px'}}>MAKE RESERVATION</button></center>

</div><br/>
<div class='bra'>
<h3 className='h'>CONTACTS INFORMATION</h3>
  <p style={{color: "white"}}>ipsum Street,Lorem Tower, Mo,Colombia,508000
  <br/>+01 2000 80 9999<br/>info@admin.com</p>
  <div className='final'>
  <svg id='icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
<svg id='icon' xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
<svg id='icon' xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
<svg id='icon'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
  </div>
 
</div>
<div class='bra' >
<h3 className='h'>OPENING HOURS</h3>
  <p style={{color:'white'}}>Monday:Closed<br/>Tue-Wed:9Am-10pm<br/>Thu-Fri:8Am-9Pm<br/>Sat-Sun:5Pm-10Pm</p>
</div>
<center><p className='o'>All Rights Reserved.<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
</svg> 2018 Live Dinner<br/>
Restaurant Design By:WMA</p></center>
</div>
</div>


</body>
    </div>    
  );
}

export default App;
