import { useForm } from "react-hook-form"
import { useState, useEffect, useRef } from "react";
import Select from 'react-select';
import '../sass/editArticle.sass'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Import useParams hook


const EditArticle = ({ accessToken }) => {
    const { register, handleSubmit, setValue, getValues, watch, formState: { errors } } = useForm();
    const [countryOptions, setCountryOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const mainPictureRef = useRef(null);
    const navigate = useNavigate();

    //const articleId = 1;
    const { articleId } = useParams()

    //retrieve article values
    useEffect(() => {
        fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-article/${articleId}`)
            .then(response => response.json())
            .then(data => {
                const article = data.article;
                setValue('title', article.title);
                setValue('content', article.content);
                setValue('country', { value: article.country, label: article.country });
                setValue('categories', article.categories.map(cat => ({ value: cat.id, label: cat.name })));
            })
            .catch(error => {
                console.error('Error fetching article data:', error);
            });
    }, [articleId, setValue]);

    // Retrieve categories
    useEffect(() => {
        fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/all-categories')
            .then(response => response.json())
            .then(data => {
                const categoryOptions = data.categories.map(category => ({
                    value: category.id,
                    label: category.name
                }));
                setCategoryOptions(categoryOptions);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    // Retrieve countries
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryOptions = data.map(country => ({
                    value: country.name.common,
                    label: country.name.common,
                    continent: country.continents[0]
                }));
                setCountryOptions(countryOptions);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    const editArticle = async (data) => {
        const formData = new FormData();
        let isFileChanged = false

        if (data.main_picture && data.main_picture[0]) {
            formData.append('main_picture', data.main_picture[0]);
            isFileChanged = true;
        }

        if (data.images) {
            for (let i = 0; i < data.images.length; i++) {
                formData.append(`images[${i}]`, data.images[i]);
            }
            isFileChanged = true;
        }

        if (isFileChanged) {
            formData.append('title', data.title);
            formData.append('content', data.content);

            if (data.country && data.country.value) {
                formData.append('country', data.country.value);
                formData.append('continent', data.country.continent);
            }

            if (data.categories) {
                data.categories.forEach(category => {
                    formData.append('categories[]', category.value);
                });
            }

        } else {
            var jsonPayload = {
                title: data.title,
                content: data.content,
                country: data.country.value,
                continent: data.country.continent,
                categories: data.categories.map(category => category.value)
            };
        }

        console.log('before try : ' + formData)

        

        formData.append('_method', 'PATCH');

        // Debug: Log the FormData entries
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const response = await fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/${articleId}/update-article`, {
                method: 'POST', // Use POST for FormData with '_method' field
                body: isFileChanged ? formData : JSON.stringify(jsonPayload), // Attach the FormData object
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    ...(isFileChanged ? {} : { 'Content-Type': 'application/json' })
                }
            });
            const result = await response.json();

            if (response.ok) {
                console.log(result.message)
                navigate("/my-account");
                window.location.reload();
            } else {
                alert('Error uploading article: ' + result.message);
            }
        } catch (error) {
            console.error('Error while posting a message:', error);
            alert('Error uploading article');
        }
    };

    return (
        <form className="form-edit-article" encType="multipart/form-data" onSubmit={handleSubmit(editArticle)}>
            <h1>Edit my article</h1>
            <input {...register('title')} 
            name='title' 
            placeholder="title" 
            defaultValue={watch('title')}
            />

            <textarea {...register('content')}
                placeholder="content"
                name='content'
                rows={10}
                defaultValue={watch('content')}
            />

            <Select
                name='categories'
                options={categoryOptions}
                onChange={(selected) => {
                    setValue('categories', selected);
                }}
                placeholder="Search for a category"
                isSearchable={true}
                isMulti
                value={watch('categories')}
            />

            <Select
                name='country'
                options={countryOptions}
                onChange={(selected) => {
                    setValue('country', selected);
                }}
                placeholder="Search for a country"
                isSearchable={true}
                value={watch('country')}
            />

            <div>
                <label>Main Picture: </label>
                <input
                    type='file'
                    name='main_picture'
                    ref={mainPictureRef}
                    {...register('main_picture')}
                />
            </div>

            <div>
                <label>Images: </label>
                <input
                    type='file'
                    name='images[]'
                    multiple
                    {...register('images')}
                />
            </div>
            <button className='form-edit-article-button' type="submit">Edit article</button>
        </form>
    )
}

export default EditArticle;
