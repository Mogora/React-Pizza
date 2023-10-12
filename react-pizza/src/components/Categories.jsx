import {useState} from "react";

function Categories () {

    const [selectCategory, setSelectCategory] = useState(0);

    const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickSelectCategory = (index) => {
        setSelectCategory(index);
    };

    return (
        <div className="categories">
            <ul>
                {category.map((category, i) => (
                    <li
                        key={i}
                        onClick={() => onClickSelectCategory(i)}
                        className={selectCategory === i ? 'active' : ''}>
                        {category}
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default Categories;