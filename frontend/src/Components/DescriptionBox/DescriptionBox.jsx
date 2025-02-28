import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or services
             over the internet. It serves as a virtual maketplace where businesses and individuals showcase their products,
             interact with customers, and conducts transactions without the need for a
             physical presence.E-commerce websites have gained immense popularity due 
             to their convinient accessibility, and the global reach they offer</p>
             <p>E-commerce websites typically display products or services along with detailed
                description,images,prices and any available variations(e.g. sizes,colors). Each product usually has its own dedicated page with
                relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox