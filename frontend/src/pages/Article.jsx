import { useState, useEffect } from "react"
import '../sass/article.sass'
import heroImage from '../assets/images/hero-banner2.jpg'
import ImageComponent from '../components/ImageComponent';
import { useParams } from 'react-router-dom';
import SubFooter from "../components/SubFooter";

const Article = ({ userData }) => {

    const [data, setData] = useState(null);
    const [images, setImages] = useState([]);

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [isHorizontal, setIsHorizontal] = useState(false);

    const { articleId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('coucou')
                const response = await fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-article/${articleId}`);

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setData(data);
                    setImages(data.article.images.slice(0, 3)); // Assuming the API provides image URLs directly
                } else {
                    console.error('Error fetching article data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching article data:', error);
            }
        };

        fetchData(); // Call the fetchData function

    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, comment);
    };

    const handleImageLoad = (isHorizontal) => {
        setIsHorizontal(isHorizontal);
    };

    const displayDate = () => {
        const createdDate = new Date(data?.article.created_at);
        const day = createdDate.getDate();
        const month = createdDate.getMonth() + 1; // Months are zero-based (0 = January)
        const year = createdDate.getFullYear();

        const date = `${day}/${month}/${year}`;
        return date
    }




    return (
        <>
            <div className="container">
                <header className="post-hero-header">
                    <div className="post-img-header">
                        {/* <img src={heroImage} alt="Hero Banner" /> */}
                        <img className="main-picture" src={data?.article.image_url} alt="Hero Banner" onLoad={handleImageLoad} />
                    </div>
                    <div className="post-header">
                        <div className="post-tag-header">
                            {data && data.article && data.article.categories.map((category, index) => (
                                <a href="#" key={index}><span className="post-tag-header">{category.name}</span></a>
                            ))}
                            <a href="#"><span className="post-tag-header">{data?.article.continent}</span></a>
                            <a href="#"><span className="post-tag-header">{data?.article.country}</span></a>
                        </div>
                        <h1 className="post-title-header">{data?.article.title}</h1>
                        <div className="post-user-header post-date-header">
                            <span>by <a href="#" className="post-user-url"><span>{data?.author.name}</span></a></span>
                            <span><time className="post-time-header" dateTime="">{displayDate()}</time></span>
                        </div>
                    </div>
                </header>

                <article>
                    <div className="post-description">
                        <p className="post-paragraph">{data?.article.content}</p>
                    </div>
                    <div className="post-img-container">
                        {data?.article.images.map((image, index) => (
                            <ImageComponent
                                key={index}
                                src={image.image_url}
                                alt="alt"
                                onLoad={handleImageLoad} // Pass the callback to set orientation
                            />
                        ))}
                    </div>
                </article>

                <hr />

                <section className="comment-section">
                    <span className="comments-number">0 comments</span>
                    <div className="comments-area">
                        <img src="" alt="" className="avatar" />
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
                                <button className="btn-comment" type="submit" >Comment!</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <SubFooter />
        </>
    )
}

export default Article