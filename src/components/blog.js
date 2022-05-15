import image1 from '../img/12.jpg';

const Blog = () => {
    return (
            <div className="container">
                <h1>My Blog</h1>
                <div className="blog-container">
                <div className="blog">
                    <div className="blog-image">
                        <img src={image1}/>
                    </div>
                    <div className="blog-content">
                        <h4>Blog Title</h4>
                        <span>30 Min</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span className="readmore"><a>Read Full</a></span>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-image">
                        <img src={image1}/>
                    </div>
                    <div className="blog-content">
                        <h4>Blog Title</h4>
                        <span>30 Min</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span className="readmore"><a>Read Full</a></span>
                    </div>
                </div>
            </div>
                <button>Read More</button>
            </div>
    )
}
export default Blog;