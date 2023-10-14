import React from 'react';
import './Beneficiary-text-cards.css';

function  TextCards() {
    return (

      <div className='main-text-box' style={{backgroundColor: ' #F7F5D2', paddingTop:'10px', paddingBottom:'10px'}}>

 <div class="row row-cols-1 row-cols-md-3 g-4"
 
 style={{ marginTop:'30px', marginRight:'15px', marginLeft: '15px', marginBottom:'50px' }}
 
 >
 
  <div class="col">
   
    <div class="card h-100 border-0 card-with-transition">
     
      <img src="https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="" />
        
        <div class="card-body"
         style={{backgroundColor: ' #F7F5D2'}}
        >
        <h5 class="card-title" style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}} >Provide Food</h5>
        <p class="card-text" style={{fontSize:'1rem', color:'#3A3A45' , textAlign:'left', fontWeight:'bold'}}  > Our dedicated team works tirelessly to provide essential nourishment to those who need it most. We offer hot meals, food packages, and support systems to individuals and families facing the harsh reality of food insecurity. Through our initiatives, we are not just filling empty stomachs but also filling hearts with hope, because we understand that a meal can be the first step towards a better tomorrow. </p>
      
      </div>

    </div>
  </div>


  <div class="col">
   
    <div class="card h-100 border-0 card-with-transition" >
     
      <img src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="" />
      
      <div class="card-body"
        style={{backgroundColor: ' #F7F5D2'}}
      >
        <h5 class="card-title" style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}}  >Support Education</h5>
         <p class="card-text" style={{fontSize:'1rem', color:'#3A3A45' , textAlign:'left' , fontWeight:'bold'}} >We are committed to providing quality education and educational resources to underprivileged individuals and communities. Our goal is to empower those in need with the knowledge and skills that can transform their lives. Through scholarships, mentorship programs, access to educational materials, and the establishment of learning centers, we aim to create opportunities for a brighter future. </p>
      
      </div>
      
   
    </div>
  
  </div>
  
  
  <div class="col">
    
    <div class="card h-100 border-0 card-with-transition">
      
      <img src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="" />
      
       <div class="card-body"
        style={{backgroundColor: ' #F7F5D2'}}
       >
        <h5 class="card-title"  style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}} >Give a Home to homeless</h5>
         <p class="card-text"  style={{fontSize:'1rem', color:'#3A3A45', textAlign:'left' , fontWeight:'bold'}}  >We are dedicated to offering a helping hand to those experiencing homelessness or struggling to find a secure place to live. Our mission is to provide not just a roof over one's head, but a place of comfort, dignity, and warmth. Through our shelter programs, transitional housing, and outreach initiatives, we aim to be a beacon of hope for individuals and families in their most vulnerable moments.</p>
      
          </div>
      
        </div>
      </div>
    </div>
  </div>
  

    )
}

export default TextCards;