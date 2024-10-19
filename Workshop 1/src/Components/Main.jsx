import { useState } from "react"
import { Container } from "react-bootstrap"
import ShoeList from "./ShoeList"
import FilterItems from "./FilterItems"
import './ShoeList.css'



const Main = () => {

    const [expensiveItems, setExpensiveItems] = useState(false)
    const [affordableItems, setAffordableItems] = useState(false)
    const [allItems, setAllItems] = useState(false)


    const ListExpensiveItems = () => {

        document.querySelectorAll('.expensive').forEach((element) => {
            element.classList.remove('hidden');  
          });
      
          document.querySelectorAll('.affordable').forEach((element) => {
            element.classList.add('hidden');  
          });
      
          setExpensiveItemsVisible(true);

    }
    const ListAffordableItems = () => {

        document.querySelectorAll('.affordable').forEach((element) => {
            element.classList.remove('hidden');
        });

        document.querySelectorAll('.expensive').forEach((element) => {
            element.classList.add('hidden');
        });

        setAffordableItems(true)
    }

    const ListAllItems = () => {

        document.querySelectorAll('.expensive').forEach((element) => {
            element.classList.remove('hidden');
        });

        document.querySelectorAll('.affordable').forEach((element) => {
            element.classList.remove('hidden');
        });

        setAllItems(true)
    }
    return (
        <>
            <Container className="mb-5">
                <FilterItems expensiveItems={ListExpensiveItems} affordableItems={ListAffordableItems} allItems={ListAllItems}/>
                <ShoeList />
            </Container>
        </>
    )
}

export default Main