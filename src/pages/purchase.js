import "./purchase.css"

const coffee_pic = new URL("../assets/coffee.jpeg", import.meta.url)

const Purchase = () => {
    return(
        <div className="date">
            <img src={coffee_pic}/>  
            <div className="text_1">
                <h1 > This book will purchasable in 2023 </h1>
            </div>
        </div>
    )
}

export default Purchase;