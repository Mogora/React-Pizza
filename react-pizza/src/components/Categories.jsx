import {useState} from "react";

function Categories () {

    const [currentCategory, setCurrentCategory] = useState(0);

    const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickCurrentCategory = (index) => {
        setCurrentCategory(index);
    };

    return (
        <div className="categories">
            <ul>
                {category.map((category, i) => (
                    <li onClick={() => onClickCurrentCategory(i)}
                        className={currentCategory === i ? 'active' : ''}>
                        {category}
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default Categories;