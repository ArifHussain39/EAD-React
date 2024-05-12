import React from 'react'
import Headers from './Header'

function Home() {
    return (
        <>
            <Headers />
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" height={100} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Camera
                    </span>
                    <span>
                        . Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                        onClick={() => {
                            addToCartHandler({ price: 1000, name: 'Camera' })
                        }}
                    >
                        Add To Cart
                    </button>
                </div>

            </div>
        </>
    )
}

export default Home;