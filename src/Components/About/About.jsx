import React from 'react'
import Service from '../../Assets/Service.jpg'
import Transperancy from '../../Assets/Transperancy.jpg'
import Quality from '../../Assets/Quality.jpg'
export default function About() {
  return (
   <>
     <div id="About">
        <h1 className='category-caption about-adjust'>About Us</h1>
        <div className="underline"></div>
        <div className="container w-100 about">
            <div className="col-14">
              <div className="card-body c-b">
                <img src={Service} className='Service-img' alt="" />
                <p className="card-text c-t">
                <strong>  <div className="tiny-head">Quick Kart - Services</div> <br/> is a web application which has the ability to serve a millions of people.  corrupti quod illum fugit sunt. Sed facilis totam harum consectetur,  vel error in. Necessitatibus earum voluptatum vel quas sint facere,   officia tempora obcaecati? Earum, quam neque magni facilis, quisquam iusto, rem at eos quas aliquid non deleniti nemo perspiciatis ipsam doloremque laudantium corporis. Perspiciatis, quisquam? Molestias in fuga fugit dolores! Perferendis sit, alias officiis dicta eligendi dolore maxime fugiat autem atque facilis possimus unde provident asperiores commodi temporibus error! Saepe. </strong>
                </p>
              </div>
              <div className="card-body c-b">
                <p className="card-text c-t">
                <strong> <div className="tiny-head">Quick Kart - Transperancy</div> <br/> is a web application which has the ability to serve a millions of people.  corrupti quod illum fugit sunt. Sed facilis totam harum consectetur,  vel error in. Necessitatibus earum voluptatum vel quas sint facere,   officia tempora obcaecati? Earum, quam neque magni facilis, quisquam iusto, rem at eos quas aliquid non deleniti nemo perspiciatis ipsam doloremque laudantium corporis. Perspiciatis, quisquam? Molestias in fuga fugit dolores! Perferendis sit, alias officiis dicta eligendi dolore maxime fugiat autem atque facilis possimus unde provident asperiores commodi temporibus error! Saepe. </strong>
                </p>
                <img src={Transperancy} className='Service-img' alt="" />
              </div>
              <div className="card-body c-b">
                <img src={Quality} className='Service-img' alt="" />
                <p className="card-text c-t">
                <strong>  <div className="tiny-head">Quick Kart - Quality</div> <br/> is a web application which has the ability to serve a millions of people.  corrupti quod illum fugit sunt. Sed facilis totam harum consectetur,  vel error in. Necessitatibus earum voluptatum vel quas sint facere,   officia tempora obcaecati? Earum, quam neque magni facilis, quisquam iusto, rem at eos quas aliquid non deleniti nemo perspiciatis ipsam doloremque laudantium corporis. Perspiciatis, quisquam? Molestias in fuga fugit dolores! Perferendis sit, alias officiis dicta eligendi dolore maxime fugiat autem atque facilis possimus unde provident asperiores commodi temporibus error! Saepe. </strong>
                </p>
              </div>
                <div className="card md-3" style={{ width: '109%' }}/>
            </div>
        </div>
     </div>
   </>
  )
}
