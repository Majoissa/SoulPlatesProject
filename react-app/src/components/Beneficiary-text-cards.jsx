import React from 'react';
import './Beneficiary-text-cards.css';

function  TextCards() {
    return (

      <div classNameName='main-text-box' style={{backgroundColor: ' #F7F5D2', paddingTop:'10px', paddingBottom:'10px'}}>

 <div className="row row-cols-1 row-cols-md-3 g-4"
 
 style={{ marginTop:'30px', marginRight:'15px', marginLeft: '15px', marginBottom:'50px' }}
 
 >
 
  <div className="col">
   
    <div className="card h-100 border-0 card-with-transition">
     
      <img src="https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="" />
        
        <div className="card-body"
         style={{backgroundColor: ' #F7F5D2'}}
        >
        <h5 className="card-title" style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}} >Provide Food</h5>
        <p className="card-text" style={{fontSize:'1rem', color:'#3A3A45' , textAlign:'left', fontWeight:'bold'}}  > Our dedicated team works tirelessly to provide essential nourishment to those who need it most. We offer hot meals, food packages, and support systems to individuals and families facing the harsh reality of food insecurity. Through our initiatives, we are not just filling empty stomachs but also filling hearts with hope, because we understand that a meal can be the first step towards a better tomorrow. </p>
      
      </div>

    </div>
  </div>


  <div className="col">
   
    <div className="card h-100 border-0 card-with-transition" >
     
      <img src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="" />
      
      <div className="card-body"
        style={{backgroundColor: ' #F7F5D2'}}
      >
        <h5 className="card-title" style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}}  >Support Education</h5>
         <p className="card-text" style={{fontSize:'1rem', color:'#3A3A45' , textAlign:'left' , fontWeight:'bold'}} >We are committed to providing quality education and educational resources to underprivileged individuals and communities. Our goal is to empower those in need with the knowledge and skills that can transform their lives. Through scholarships, mentorship programs, access to educational materials, and the establishment of learning centers, we aim to create opportunities for a brighter future. </p>
      
      </div>
      
   
    </div>
  
  </div>
  
  
  <div className="col">
    
    <div className="card h-100 border-0 card-with-transition">
      
      <img src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=800" className="card-img-top" alt="" />
      
       <div className="card-body"
        style={{backgroundColor: ' #F7F5D2'}}
       >
        <h5 className="card-title"  style={{fontSize:'1.8rem', paddingTop:'2px', textAlign:'center', color:'#3A3A45'}} >Give a Home to homeless</h5>
         <p className="card-text"  style={{fontSize:'1rem', color:'#3A3A45', textAlign:'left' , fontWeight:'bold'}}  >We are dedicated to offering a helping hand to those experiencing homelessness or struggling to find a secure place to live. Our mission is to provide not just a roof over one's head, but a place of comfort, dignity, and warmth. Through our shelter programs, transitional housing, and outreach initiatives, we aim to be a beacon of hope for individuals and families in their most vulnerable moments.</p>
      
          </div>
      
        </div>
      </div>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4"
 
 style={{ marginTop:'30px', marginRight:'15px', marginLeft: '15px', marginBottom:'50px' }}
 >
<div className="col">
  <div className="card h-100 border-0 card-with-transition">
    <img
      src="https://media.cnn.com/api/v1/images/stellar/prod/111128070140-child-charity.jpg?q=w_2121,h_1414,x_0,y_0,c_fill"
      className="card-img-top"
      alt="Providing clothes"
    />
    <div className="card-body" style={{ backgroundColor: "#F7F5D2" }}>
      <h5 className="card-title" style={{ fontSize: "1.8rem", paddingTop: '2px', textAlign: 'center', color: '#3A3A45' }}>
        Providing Clothes
      </h5>
      <p className="card-text" style={{ fontSize: '1rem', color: '#3A3A45', textAlign: 'left', fontWeight: 'bold' }}>
        Our organization is dedicated to providing clothing and essentials to those in need. We believe that everyone deserves to have warm, clean clothes and access to basic necessities. Through our efforts, we aim to bring comfort and dignity to individuals and families experiencing hardship.
      </p>
    </div>
  </div>
</div>

<div className="col">
    <div className="card h-100 border-0 card-with-transition">
        <img src="https://bryanu.edu/wp-content/uploads/2020/11/shutterstock_53366704-862x575.jpg" className="card-img-top" alt="Medical suport" />
        <div className="card-body" style={{backgroundColor: "#F7F5D2"}}>
            <h5 className="card-title" style={{fontSize: '1.8rem', paddingtop: '2px', textAlign: 'center', color: '#3A3A45'}}>Medical Support</h5>
            <p className="card-text" style={{fontSize: '1rem', color: '#3A3A45', textAlign: 'left',fontWeight: 'bold'}}>Our dedicated medical team is here to provide essential healthcare services to those who require medical assistance. We offer medical care, consultations, and support to individuals and families facing health challenges. Through our initiatives, we strive to promote well-being and offer a helping hand in times of need.</p>
        </div>
    </div>
</div>
<div className="col">
    <div className="card h-100 border-0 card-with-transition">
        <img src="https://www.cvls.org/wp-content/uploads/2019/10/get-legal-help.jpg" className="card-img-top" alt="Legal advisor help" />
        <div className="card-body" style={{backgroundColor: "#F7F5D2"}}>
            <h5 className="card-title" style={{fontSize: '1.8rem', paddingTop: '2px', textAlign: 'center', color: '#3A3A45'}}>Legal Advisor Help</h5>
            <p className="card-text" style={{fontSize: '1rem',color: '#3A3A45', textAlign: 'left', fontWeight: "bold"}}>Our team of legal advisors is committed to providing guidance and support to those in need of legal assistance. We offer legal advice, consultations, and assistance to individuals and families facing legal challenges. Through our initiatives, we aim to ensure that everyone has access to justice and their rights are protected.</p>
        </div>
    </div>
</div>
</div>


  </div>

  

    )
}

export default TextCards;