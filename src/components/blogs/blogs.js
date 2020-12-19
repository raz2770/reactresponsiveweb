import React, { Component } from 'react';
import "./blogs.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import axios from 'axios';

export default class Blogs extends Component {

    state = {
        title:'',
        author:'',
        desig:'',
        des1:'',
        des2:'',
        posts:[]
    }

    componentDidMount = () => {
        this.getBlogPost();
    }

    getBlogPost = () => {
        axios.get('http://localhost:5000/blogs')
        .then( (res) => {
            const data = res.data;
            this.setState({ posts:data });
            alert('Data has been succesfully received');
        })
        .catch( () =>{
            alert('Error retreiving Data')
        })
    }

    displayBlogPost = (posts) => {

        if(!posts.length) return null;

       return posts.map((post,index) => (
           
            
            <div className="blog-1">
                <div className="blog-1-date">
                    <p>July 7,2020,19000hrs</p>
                    <i class="far fa-calendar-alt"></i>
                </div>
                <div className="blog-1-topic">
                    <p>{post.blog_title}</p>
                </div>
                <div className="blog-1-author">
                By {post.blog_author}
                </div>
                <div className="blog-1-designation">
                {posts.blog_desig}
                </div>
                <div className="blog-1-cont-1 blog-text">
               {post.blog_des1}
                </div>
                <div className="blog-1-cont-2 blog-text">
              {post.blog_des2}
                </div>

                <div className="ruler"></div>
            </div>
        
        

        
        ));
    };

    render() {
        return (
            <div>
                <div className="blog-cont">
                    <div className="blog-wall">
                        <img src="./blog6.webp"></img>
                    </div>

                    <div className="row blog-post">
                            <div className="col-md-8 blog-write">
                                {this.displayBlogPost(this.state.posts)}
                            </div>
                        
                    
                        <div className="col-md-4 blog-bars">
                            <a href="/create-blog">Create your own blog</a>
                            <form>
                                <input type="text" placeholder="Search The Blog"></input>
                            </form>

                            <div className="blog-box-recent-post blog-box">
                                <div className="blog-box-heading blog-mg">
                                    Recent Posts
                                </div>
                                <div className="blog-box-posts blog-mg">
                                    <a>Making Sense of 'Climate Sensitivity'</a>
                                    <a>Sea Level 101, Part Two: All Sea Level is ‘Local'</a>
                                    <a>Making Sense of 'Climate Sensitivity'</a>
                                    <a>Sea Level 101, Part Two: All Sea Level is ‘Local'</a>
                                </div>
                            </div>
                            <div className="blog-box-most-commented blog-box">
                                <div className="blog-box-heading blog-mg">
                                    Most Commented
                                </div>
                                <div className="blog-box-posts blog-mg">
                                    <a>Making Sense of 'Climate Sensitivity'</a>
                                    <a>Sea Level 101, Part Two: All Sea Level is ‘Local'</a>
                                    <a>Making Sense of 'Climate Sensitivity'</a>
                                    <a>Sea Level 101, Part Two: All Sea Level is ‘Local'</a>
                                </div>
                            </div>
                            <div className="blog-box-most-liked blog-box">
                                <div className="blog-box-heading blog-mg">
                                    Most Liked
                                </div>
                                <div className="blog-box-posts blog-mg">
                                    <a>Making Sense of 'Climate Sensitivity'</a>
                                    <a>Sea Level 101, Part Two: All Sea Level is ‘Local'</a>
                                    <a>Making Sense of 'Climate Sensitivity'</a>
                                    <a>Sea Level 101, Part Two: All Sea Level is ‘Local'</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
