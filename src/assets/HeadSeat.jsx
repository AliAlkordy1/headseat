import "./Headseat.css"
export default function HeadSeat(){
    return <>
        <div id="container">
            <div>
                <img   src="https://resource.logitech.com/content/dam/gaming/en/products/g433/g433-gallery-black-1.png" alt="sss" className="img"/>
            </div>
            <div className="discripton">
                    <div className="frete-conainer">
                        <span className="free">free shipping</span>

                    </div>
                        <h2 className="dis">Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion</h2>
                        <h3 className="price">100$</h3>
                        <span className="new-price"> 50$ </span>
                        <span className="offer" >this offer is available until 3 April, or as long as stock lasts!</span>
                        <button className="add-button"> Add to cart </button>
                        <div className="rad-container">
                            <span className="rad" ></span>
                            <span  >50+ pcs, in stock </span>
                        </div>

                        <div className="add-container">
                                <button className="add-button-icon "><span className="material-symbols-outlined">favorite</span> Add to cart</button>
                                <button className="add-button-icon"> <span className="material-symbols-outlined">add_box</span> Add to wishlist  </button>

                        </div>
            </div>
    

        </div>
    
    
    
    
    </>
}