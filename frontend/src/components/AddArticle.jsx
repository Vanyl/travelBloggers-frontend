import '../sass/addArticle.sass'
import { useState, useEffect } from 'react';
import Select from 'react-select';

const AddArticle = () => {
    const [tags, setTags] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryOptions, setCountryOptions] = useState([]);
    const [activityOptions, setActivityOptions] = useState([
        { value: 'tips', label: 'tips' },
        { value: 'family', label: 'family' },
        { value: 'sport', label: 'sport' },
        { value: 'culture', label: 'culture' },
    ]);
    // enctype= multipart/form-data //pour les images

    const activityTags = [
        { id: 1, name: 'tips', value: 'tips', label: 'tips' },
        { id: 2, name: 'family', value: 'family', label: 'family' },
        { id: 3, name: 'sport', value: 'sport', label: 'sport' },
        { id: 4, name: 'culture', value: 'culture', label: 'culture'},
    ]
    
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

    // const handleSearch = (event) => {
    //     const countryName = event.target.value;
    //     setSearchInput(countryName)
    //     if (countryName.length > 0) {
    //         fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setSearchResults(data.map(country => country.name.common));
    //             })
    //             .catch(error => {
    //                 console.error('There has been a problem with your fetch operation:', error);
    //             });
    //     } else {
    //         setSearchResults([]);
    //     }
    // };

    const handleCategoryChange = (selected) => {
        setSelectedActivities(selected);
        if (selected && !tags.includes(selected.value)) {
            setTags([...tags, selected.value]);
        }
    };

    //handle selection from country dropdown
    const handleCountrySelect = (selected) => {
        setSelectedCountry(selected);
        if (!tags.includes(selected.value)) {
            setTags([...tags, selected.value, selected.continent]);
        }
    };

    //sending to db
    const submitArticle = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(event)
        console.log(data)

            // Add tags to the form data
        tags.forEach((tag, index) => {
            formData.append(`tags[${index}]`, tag);
        });

            // Log the contents of formData
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // // Example POST request to send form data to the server
        // const response = await fetch('/api/articles', {
        //     method: 'POST',
        //     body: formData,
        // });

        // if (response.ok) {
        //     console.log('Article submitted successfully');
        //     // Handle successful submission here
        // } else {
        //     console.error('Failed to submit article');
        //     // Handle errors here
        // }
    };


    return (
        <>
            <form
                className="form-add-article"
                encType="multipart/form-data"
                onSubmit={submitArticle}
            >
                <input type="text" name="title" placeholder="title" required />
                <textarea type="text" name="content" placeholder="content" required />
                <Select
                    id={selectedActivities}
                    name="activity"
                    value={selectedActivities}
                    options={activityOptions}
                    onChange={handleCategoryChange}
                    placeholder="Search for a category activity"
                    isSearchable={true}
                />

                <Select
                    id={selectedCountry}
                    name="country"
                    value={selectedCountry}
                    onChange={handleCountrySelect}
                    options={countryOptions}
                    placeholder="Search for a country"
                    isSearchable={true}
                />
                {/* <input type="file" id="myFile" name="main_picture" /> */}
                <button type='submit'>Post article</button>
            </form>

            <div className="tags-container">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </>
    )
}

export default AddArticle