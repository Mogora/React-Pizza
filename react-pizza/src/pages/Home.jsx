import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";
import {useEffect, useState} from "react";

function Home () {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentCategory, setCurrentCategory] = useState(0);
    const [currentSort, setCurrentSort] = useState({
        name: 'Популярности',
        sortProperty: 'rating',
    });

    useEffect(() => {

        setIsLoading(true)

        const sortBy = currentSort.sortProperty?.replace('-', '');
        const order = currentSort.sortProperty?.includes('-' ? 'asc' : 'desc');
        const category = currentCategory > 0 ? `category=${currentCategory}` : '';

        fetch(`https://64fde9e8596493f7af7ec2a3.mockapi.io/items?${category}&sortBy+${sortBy}&order+${order}`)
            .then((res) => res.json())
            .then((arrItems) => {
                setItems(arrItems);
                setIsLoading(false);
            });
        window.scroll(0,0);
    }, [currentCategory, currentSort]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={currentCategory} onChangeCategory={(id) => setCurrentCategory(id)}/>
                <Sort value={currentSort} onChangeSort={(id) => setCurrentSort(id)}/>
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
        </div>
    )
}

export default Home;