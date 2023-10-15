import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";
import {useEffect, useState} from "react";

function Home () {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://1224693e0130cf17.mokky.dev/items')
            .then((res) => res.json())
            .then((arrItems) => {
                setItems(arrItems);
                setIsLoading(false);
            });
    }, []);


    return (
        <div>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map(() => <Skeleton/>)
                        : items.map((obj) => (
                            <Index
                                key={obj.id}
                                title={obj.title}
                                price={obj.price}
                                imgUrl={obj.imageUrl}
                                sizes={obj.sizes}
                                types={obj.types}/>
                        ))
                }
            </div>
            )
        </div>
    )
}

export default Home;