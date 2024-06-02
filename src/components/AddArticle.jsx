import '../sass/addArticle.sass'
import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const AddArticle = ({accessToken}) => {
    const { register, handleSubmit, setValue, getValues, watch, formState: { errors } } = useForm();

    const [countryOptions, setCountryOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [notification, setNotification] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const [file, setFile] = useState(null);

    const mainPictureRef = useRef(null);
    const imagesRef = useRef([]);

    const navigate = useNavigate();

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
        console.log('file : ' + file)
        if (file) {
            setValue('main_picture', file);
            setSelectedFileName(file.name);
        }
    };

    // //sending to db
    const submitArticle = async (data) => {
        console.log("data : " + data);
        const formData = new FormData(data.target);
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('country', data.country.value);
        formData.append('continent', getValues('country.continent'));
        getValues('categories').forEach(category => {
            formData.append('categories[]', category.value);
        });

        formData.append('main_picture', data.main_picture[0]);

        for (let i = 0; i < data.images.length; i++) {
            formData.append(`images[${i}]`, data.images[i]);
        }

        console.log('before try : ' + formData)

        try {
            const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/add-article', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(getValues())
            console.log(formData)
            const result = await response.json();

            if (response.ok) {
                console.log(result.message)
                navigate("/my-account");
                window.location.reload();
            } else {
                alert('Error uploading article: ' + result.message);
            }
        } catch (error) {
            console.error('Error while posting a message :', error);
            alert('Error uploading article');
        }
    };


    return (
        <>
            <form className="form-add-article" encType="multipart/form-data" onSubmit={handleSubmit(submitArticle)}>
                <h1>Add article</h1>
                <input {...register('title', { required: true, maxLength: 30 })} name='title' placeholder="title" />
                {errors.title && <p>Title is required.</p>}

                <textarea {...register('content', {
                    required: true, maxLength: {
                        value: 5000,
                        message: "Description cannot be longer than 5000 characters",
                    }
                })}
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
                //onChange={handleFileChange}
                />
                </div>
                <input className='form-add-article-button' type="submit" />
            </form>
        </>
    )
}

export default AddArticle