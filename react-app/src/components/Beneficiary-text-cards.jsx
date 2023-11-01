import React from 'react';
import './Beneficiary-text-cards.css';

function  TextCards() {

    window.addEventListener('scroll', reveal) ;

    function reveal (){

        var reveals = document.querySelectorAll('.reveal');

        for (var i =0; i < reveals.length; i ++) {

          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if(revealtop < windowheight - revealpoint) {

            reveals[i].classList.add('active');
          }

          else {
 
            reveals[i].classList.remove('active');

          }
        }
      
    }
  
    return (




      <div className='main-text-box' style={{backgroundColor: '  white ', paddingBottom:'50px', paddingLeft:'250px', paddingRight:'80px'}}>

     {/* FIRST COLUM */}

      <div className="row row-cols-1 row-cols-md-2 g-4"
 
      style={{ marginTop:'30px', marginRight:'15px', marginLeft: '15px', marginBottom:'50px' }}
 
 >
 
  <div className="col" >
   
    <div className="card h-100 border-0 card-with-transition reveal"  style={{ maxWidth: '350px', height:'250px'}}>
     
      <img src="https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="" />
        
        <div className="card-body"
         style={{backgroundColor: '  #F4F3EE '}}
        >
        <h5 className="card-title" style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}} >Provide Food</h5>
        <p className="card-text" style={{fontSize:'1rem', color:'#3A3A45' , textAlign:'left', fontWeight:'bold'}}  > Our dedicated team works tirelessly to provide essential nourishment to those who need it most. We offer hot meals, food packages, and support systems to individuals and families facing the harsh reality of food insecurity. </p>
      
      </div>

    </div>
  </div>


  <div className="col">
   
    <div className="card h-100 border-0 card-with-transition  reveal" style={{ maxWidth: '350px', height:'250px' }} >
     
      <img src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="" />
      
      <div className="card-body"
        style={{backgroundColor: '  #F4F3EE '}}
      >
        <h5 className="card-title" style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}}  >Support Education</h5>
         <p className="card-text" style={{fontSize:'1rem', color:'#3A3A45' , textAlign:'left' , fontWeight:'bold'}} >We are committed to providing quality education and educational resources to underprivileged individuals and communities. Our goal is to empower those in need with the knowledge and skills that can transform their lives.  </p><br></br>
      
      </div>
      
   
    </div>
  
  </div>
  
    </div>

    {/* SECOD COLUM */}

    <div className="row row-cols-1 row-cols-md-2 g-4"
 
     style={{ marginTop:'30px', marginRight:'15px', marginLeft: '15px', marginBottom:'50px' }}
 >



     <div className="col">

         <div className="card h-100 border-0 card-with-transition  reveal"  style={{ maxWidth: '350px', height:'250px' }}>
       
       <img
      src="https://media.cnn.com/api/v1/images/stellar/prod/111128070140-child-charity.jpg?q=w_2121,h_1414,x_0,y_0,c_fill"
      className="card-img-top"
      alt="Providing clothes"
      />
   
    <div className="card-body" style={{ backgroundColor: " #F4F3EE " }}>
      <h5 className="card-title" style={{ fontSize: "1.8rem", paddingTop: '2px', textAlign: 'center', color: '#3A3A45' }}>
        Providing Clothes
      </h5>
     
      <p className="card-text" style={{ fontSize: '1rem', color: '#3A3A45', textAlign: 'left', fontWeight: 'bold' }}>
        Our organization is dedicated to providing clothing and essentials to those in need. We believe that everyone deserves to have warm, clean clothes and access to basic necessities. 
      </p>
    </div>
  </div>
</div>




    <div className="col">
      
       <div className="card h-100 border-0 card-with-transition  reveal"  style={{ maxWidth: '350px', height:'250px' }}>
       
        <img src="https://bryanu.edu/wp-content/uploads/2020/11/shutterstock_53366704-862x575.jpg" className="card-img-top" alt="Medical suport" />
        
        <div className="card-body" style={{backgroundColor: "#F4F3EE "}}>
            <h5 className="card-title" style={{fontSize: '1.8rem', paddingtop: '2px', textAlign: 'center', color: '#3A3A45'}}>Medical Support</h5>
            <p className="card-text" style={{fontSize: '1rem', color: '#3A3A45', textAlign: 'left',fontWeight: 'bold'}}>Our dedicated medical team is here to provide essential healthcare services to those who require medical assistance. We offer medical care, consultations, and support to individuals and families.</p>
        </div>
    </div>
</div>



</div>

     {/* THIRD COLUM */}

     <div className="row row-cols-1 row-cols-md-2 g-4"
 
     style={{ marginTop:'30px', marginRight:'15px', marginLeft: '15px', marginBottom:'50px' }}
 >


<div className="col">
    <div className="card h-100 border-0 card-with-transition  reveal"  style={{ maxWidth: '350px', height:'250px' }}>
        <img src="https://www.cvls.org/wp-content/uploads/2019/10/get-legal-help.jpg" className="card-img-top" alt="Legal advisor help" />
        <div className="card-body" style={{backgroundColor: " #F4F3EE "}}>
            <h5 className="card-title" style={{fontSize: '1.8rem', paddingTop: '2px', textAlign: 'center', color: '#3A3A45'}}>Legal Advisor Help</h5>
            <p className="card-text" style={{fontSize: '1rem',color: '#3A3A45', textAlign: 'left', fontWeight: "bold"}}>Our team of legal advisors is committed to providing guidance and support to those in need of legal assistance. We offer legal advice, consultations and legal assisstance.</p>
        </div>
    </div>
</div>

       
<div className="col">
    
    <div className="card h-100 border-0 card-with-transition  reveal"  style={{ maxWidth: '350px', height:'250px' }}>
      
      <img src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="" />
      
       <div className="card-body"
        style={{backgroundColor: ' #F4F3EE '}}
       >
        <h5 className="card-title"  style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}} >Provide Shelter</h5>
         <p className="card-text"  style={{fontSize:'1rem', color:'#3A3A45', textAlign:'left' , fontWeight:'bold'}}  >We are dedicated to offering a helping hand to those experiencing homelessness or struggling to find a secure place to live. Our mission is to provide a place of comfortad dignity. </p>
      
          </div>
      
        </div>
      </div>

    
     </div>

     </div>

  

    )
}

export default TextCards;
