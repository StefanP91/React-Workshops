import { Button, Card } from 'react-bootstrap';
import './ShoeList.css'
const ShowItem = ({ shoe }) => {
    const priceClass = shoe.price > 60 ? 'expensive' : 'affordable';
    return (
        <Card className={`shoe-item ${priceClass}`}>
            <Card.Img className="shoe-img" variant="top" src={shoe.image} alt="shoe" />
            <Card.Body>
                <Card.Title>{shoe.name}</Card.Title>
                <Card.Text>${shoe.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ShowItem