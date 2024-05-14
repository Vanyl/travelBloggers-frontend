import '../sass/addArticle.sass'
import { useState } from 'react';

const AddArticle = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = [
        { category: 'europe' },
        { category: 'america'}
    ]
    
    const handleCategoryChange = (event) => {
      const { options } = event.target;
      const selected = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selected.push(options[i].value);
        }
      }
      setSelectedCategories(selected);
    };
    

    return (
        <>
        <form action="" className="form-add-article">
            <input type="text" placeholder="title"/>
            <input type="textarea" placeholder="content"/>
            <label htmlFor="categories">Choose one or more related categories*</label>
            <select
                name="categories"
                id="categories"
                multiple
                className="py-1 text-xl lg:text-base text-gray-dark rounded-lg mt-3"
                value={selectedCategories}
                onChange={handleCategoryChange}
            >
                {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
                ))}
            </select>
            <input type="file" id="myFile" name="main_picture"/>
            <button type='submit'>Post article</button>
        </form>
        </>
    )
}

export default AddArticle