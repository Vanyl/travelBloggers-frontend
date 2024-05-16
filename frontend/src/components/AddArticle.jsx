import '../sass/addArticle.sass'
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useForm } from "react-hook-form"

const AddArticle = () => {
    // const [tags, setTags] = useState([]);
    // const [selectedCategories, setSelectedCategories] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState(null);
    // const [selectedFile, setSelectedFile] = useState(null);

    const [countryOptions, setCountryOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [notification, setNotification] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

    //retrieve categories
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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setValue('main_picture', file);
            setSelectedFileName(file.name); // Update the state with the file name
        }
    };


    // const handleFileSelect = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    // //sending to db
    const submitArticle = async (data) => {
        console.log(data);
        // data.preventDefault();
        const formData = new FormData(data.target);
        formData.append('title', getValues('title'));
        formData.append('content', getValues('content'));
        formData.append('country', getValues('country.value'));
        formData.append('continent', getValues('country.continent'));
        // formData.append('categories[]', getValues('categories[]').map(category => category.value).join(','));
        getValues('categories').forEach(category => {
            formData.append('categories[]', category.value);
        });
        console.log(getValues('main_picture.target.files[0]'))
        console.log(getValues('main_picture.files'))
        const file = getValues('main_picture');
        if (file) {
            formData.append('main_picture', file);
        }
        
        try {
            const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/add-article', {
                method: 'POST',
                //body: JSON.stringify(data),
                body: formData,
                // headers: {
                //     'Content-Type': 'application/json',
                // },
            });
            console.log(getValues())
            console.log(getValues('country.value'))
            console.log(getValues('country.continent'))

            if (response.ok) {
                const  newArticle  = await response.json();
                console.log(newArticle);
                setNotification({ type: 'success', message: 'Article submitted successfully' });
                //navigate("/");
            } else {
                const { error } = await response.json();
                setNotification({ type: 'error', message: `Failed to submit article : ${error}` });
            }
        } catch (error) {
            console.error('Error while posting a message :', error);
            setNotification({ type: 'error', message: 'An error occurred. Please try again later.' });
        }
    };


    return (
        <>
        <form className="form-add-article" encType="multipart/form-data" onSubmit={handleSubmit(submitArticle)}>
            <input {...register('title', { required: true, maxLength: 20 })} name='title' placeholder="title" />
            {errors.title && <p>Title is required.</p>}

            <textarea {...register('content', { 
                    required: true, maxLength: {
                    value: 100,
                    message: "Description cannot be longer than 100 characters",
                } })} 
                placeholder="content"
                name='content'
                rows={10}
            />
            {errors.content && <p>Content is required.</p>}

            <Select
                {...register('categories')}
                name='categories[]'
                // name='categories'
                options={categoryOptions}
                onChange={(selected) => {
                    setValue('categories', selected);
                }}
                placeholder="Search for a category"
                isSearchable={true}
                isMulti
            />

            <Select
                {...register('country', { required: true })}
                onChange={(selected) => {
                    setValue('country', selected);
                }}
                name='country'
                options={countryOptions}
                placeholder="Search for a country"
                isSearchable={true}
            />
            {errors.country && <p>Select a country is required.</p>}

            <input 
                type='file'
                name='main_picture'
                {...register('main_picture')}
                onChange={handleFileChange}
             />

            <input className='add-article-button' type="submit" />
        </form>
        </>
    )
}

export default AddArticle