import { Dropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const FilterItems = ({ expensiveItems, affordableItems, allItems }) => {
    


    return (
        <Dropdown className="mt-5">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Filter Price
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={expensiveItems}>Expensive</Dropdown.Item>
                <Dropdown.Item href="#" onClick={affordableItems}>Affordable</Dropdown.Item>
                <Dropdown.Item href="#" onClick={allItems}>All Items</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FilterItems