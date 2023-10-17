function Categories ({value, onChangeCategory}) {

    const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {category.map((category, i) => (
                    <li
                        key={i}
                        onClick={() => onChangeCategory(i)}
                        className={value === i ? 'active' : ''}>
                        {category}
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default Categories;