import ShowItem from "./ShoeItem"
import ListOfShoes from "./ListOfShoes"
import './ShoeList.css'


const ShoeList = () => {
    const shoes = ListOfShoes.shoes;

    return (
        
        <>
            <div className="shoe-list">
                {ListOfShoes.map(shoe => ( 
                    <ShowItem key={shoe.id} shoe={shoe} />
                    ))}
            </div>
        </>
    )
}

export default ShoeList