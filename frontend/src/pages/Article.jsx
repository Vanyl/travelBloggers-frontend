import { useState, useEffect } from "react"
import '../sass/article.sass'
import heroImage from '../assets/images/hero-banner2.jpg'
import ImageComponent from '../components/ImageComponent';

const Article = () => {

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [images, setImages] = useState([]);
    const [isHorizontal, setIsHorizontal] = useState(false);
    const cityInput = 'spain'
    const unplashURL = `https://api.unsplash.com/search/photos?page=1&query=${cityInput}&client_id=QamvDmYlvPU_cPDzXQb_zbyDZmBgNKc8wVZPVQi_16g`
    
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(unplashURL);
                if (response.ok) {
                    const data = await response.json();
                    setImages(data.results.slice(0, 3)); //change later
                } else {
                    console.error('Error fetching images:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
    
        fetchImages();
    }, [cityInput]); // Dependency array ensures the effect runs when cityInput changes
   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, comment);
    };

    const handleImageLoad = (isHorizontal) => {
        setIsHorizontal(isHorizontal);
    };


    return(
        <div className="container">
            <header className="post-hero-header">
                <div className="post-img-header">
                <img src={heroImage} alt="Hero Banner" />
                </div>
                <div className="post-header">
                    <div className="post-tag-header"><a href=""><span>tag</span></a></div>
                    <h1 className="post-title-header">title</h1>
                    <div className="post-user-header post-date-header">
                        <span>by <a className="post-user-url">user </a></span>
                        <span><time className="post-time-header" dateTime="">11 May 2024</time></span>
                    </div>
                </div>
            </header>

            <article>
                <div className="post-description">
                    <p className="post-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum ipsa consectetur aspernatur ea doloribus ut aliquam nesciunt et corporis, numquam accusamus deserunt. Consectetur aspernatur, quo voluptates fugit nobis sit?</p>
                </div>
                <div className="post-img">
                    {images.map((image) => (
                        <ImageComponent
                            key={image.id}
                            src={image.urls.small}
                            alt={image.alt_description}
                            onLoad={handleImageLoad} // Pass the callback to set orientation
                        />
                    ))}
                </div>
            </article>

            <hr/>

            <section className="comment-section">
                <span className="comments-number">0 comments</span>
                <div className="comments-area">
                    <img src="" alt="" className="avatar"/>
                    <div className="comment-content">
                        <span className="comment-user">user</span>
                        <time dateTime="" className="comment-time"></time>
                        <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto at quod sapiente laudantium enim dolore, alias eius quibusdam totam natus sunt aliquam omnis similique magnam. Animi sit dolores beatae.</p>
                    </div>
                </div>
                <div className="comment-respond">
                    <h3 className="comment-title">Leave a comment</h3>
                    <form className="comment-form" action="" onClick={handleSubmit}>
                        <textarea 
                            id="comment" 
                            name="comment" 
                            placeholder="Your comment" 
                            required
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <div className="comment-row">
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="Username" 
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" >Comment!</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Article