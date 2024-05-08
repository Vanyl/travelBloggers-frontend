import heroBanner2 from '../assets/images/hero-banner2.jpg';
import '../sass/posts.sass'

const Posts = () => {
    return (
        <div className="post-container">
            <img className="post-img" src={heroBanner2} alt="post" />
            <div className='info-container'>
                <div className='avatar'>
                    <img className='avatar-img' alt="avatar" />
                </div>
                <p className='user'>user</p> 
                <p className='date'>date</p>
            </div>
            <p className='title'>titre</p>
            <p className='tag'>tag country</p>
        </div>
    );
};

export default Posts;
