import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";
import {useContext, useEffect, useState} from "react";
import Pagination from "../components/Pagination";
import {MyContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCategory, setCurrentPage} from "../redux/slices/filterSlice";

function Home () {
    const dispatch = useDispatch();
    const currentCategory = useSelector(state => state.filter.currentCategory);
    const currentSort = useSelector(state => state.filter.sort.sortProperty);
    const currentPage = useSelector(state => state.filter.currentPage)
    const {searchValue} = useContext(MyContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = (id) => {
        dispatch(setCurrentCategory(id));
    };

    const onChangePage = (number) => {
        dispatch((setCurrentPage(number)))
    }

    useEffect(() => {

        setIsLoading(true)

        const sortBy = currentSort.replace('-', '');
        const order = currentSort.includes('-' ? 'asc' : 'desc');
        const category = currentCategory > 0 ? `category=${currentCategory}` : '';

        fetch(`https://64fde9e8596493f7af7ec2a3.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy+${sortBy}&order+${order}`)
            .then((res) => res.json())
            .then((arrItems) => {
                setItems(arrItems);
                setIsLoading(false);
            });
        window.scroll(0,0);
    }, [currentCategory, currentSort, currentPage, searchValue]);

    const pizzas = items.filter((obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase()))
        {
            return true;
        }
        return false;
    }).map((obj) => <Index
        id={obj.id}
        title={obj.title}
        price={obj.price}
        imgUrl={obj.imageUrl}
        sizes={obj.sizes}
        types={obj.types}/>
    );

    const skeleton = [...new Array(6)].map(() => <Skeleton/>);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={currentCategory} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeleton : pizzas
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}

export default Home;