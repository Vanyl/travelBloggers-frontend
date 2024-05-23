import { useState, useEffect } from "react";
import '../sass/article.sass';
import ImageComponent from '../components/ImageComponent';
import { useParams } from 'react-router-dom';

const Article = ({ userData }) => {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [isHorizontal, setIsHorizontal] = useState(false);

  const { articleId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/show-article/${articleId}`);

        if (response.ok) {
          const data = await response.json();
          setData(data);
          setComments(data.comments); // Assuming comments are directly available in the API response
          console.log("Comments after fetching:", data.comments); // Add this line
        } else {
          console.error('Error fetching article data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [articleId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if user is logged in before submitting comment
    if (!userData) {
      alert('Please log in to submit a comment.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken'); // Assuming you have a mechanism to store the access token

    if (!accessToken) {
      alert('Error: Access token not found. Please log in again.');
      return;
    }

    try {
      const commentData = {
        content: comment,
        // Assuming the API requires username and/or email in the request body
        username: userData.name || username, // Use user data if available, otherwise fallback to entered username
        email: userData.email || email, // Use user data if available, otherwise fallback to entered email
      };

      const commentResponse = await fetch(`https://travel-blogger-46c930280c07.herokuapp.com/api/${articleId}/add-comment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (commentResponse.ok) {
        console.log('Comment submitted successfully!');
        // Clear the comment form after successful submission
        setComment('');
      } else {
        console.error('Error submitting comment:', commentResponse.statusText);
        alert('Error submitting comment. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Error submitting comment. Please try again.');
    }
  };

  const handleImageLoad = (isHorizontal) => {
    setIsHorizontal(isHorizontal);
  };

  const displayDate = () => {
    const createdDate = new Date(data?.article.created_at);
    const day = createdDate.getDate();
    const month = createdDate.getMonth() + 1; // Months are zero-based (0 = January)
    const year = createdDate.getFullYear();

    return `${day}/${month}/${year}`;
  };


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options);
};


  return (
    <div className="container">
      <header className="post-hero-header">
        <div className="post-img-header">
          <img className="main-picture" src={data?.article.image_url} alt="Hero Banner" onLoad={handleImageLoad} />
        </div>
        <div className="post-header">
          <div className="post-tag-header">
            {data && data.article && data.article.categories.map((category, index) => (
              <a href="#" key={index}>
                <span className="post-tag-header">{category.name}</span>
              </a>
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
        <span className="comments-number">{comments.length} comments</span>
        <div className="comments-area">
  {comments.map((comment, index) => (
    <div className="comment" key={index}>
      <div className="comment-content">
        <div className="comment-info">
          <span className="comment-user">{comment.comment.user && comment.comment.user.name}</span>
        </div>
        <div className="comment-date">{formatDate(comment.comment.created_at)}</div>
      </div>
      <p className="comment-text">{comment.comment.content}</p>
    </div>
  ))}
</div>


        <div className="comment-respond">
          <h3 className="comment-title">Leave a comment</h3>

          {userData ? (
            <form className="comment-form" action="" onSubmit={handleSubmit}>
              <textarea
                id="comment"
                name="comment"
                placeholder="Your comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="comment-row">
                <button className="btn-comment" type="submit">Comment!</button>
              </div>
            </form>
          ) : (
            <p className="comment-login-message">
              Please <a href="/authentication">log in</a> to submit a comment.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Article;
