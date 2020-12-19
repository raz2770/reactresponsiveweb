import React, {Component} from 'react';
import './create-blog.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class CreateBlog extends Component {

    constructor(props) {
        super(props);

        this.onChangeblogtitle = this.onChangeblogtitle.bind(this);
        this.onChangeblogauthor = this.onChangeblogauthor.bind(this);
        this.onChangeblogdesig = this.onChangeblogdesig.bind(this);
        this.onChangeblogimgdes = this.onChangeblogimgdes.bind(this);
        this.onChangeblogdes1 = this.onChangeblogdes1.bind(this);
        this.onChangeblogdes2 = this.onChangeblogdes2.bind(this);
        this.onChangeblogimg = this.onChangeblogimg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            blog_title: '',
            blog_author: '',
            blog_time: '',
            blog_des1:'',
            blog_des2:'',
            blog_img:null,
            blog_img_des:'',
            blog_desig:''
        }
    }

    onChangeblogtitle(e) {
        this.setState({
            blog_title: e.target.value
        });
    }

    onChangeblogauthor(e) {
        this.setState({
            blog_author: e.target.value
        });
    }

    onChangeblogdesig(e) {
        this.setState({
            blog_desig: e.target.value
        });
    }

    onChangeblogimgdes(e) {
        this.setState({
            blog_img_des: e.target.value
        });
    }

    onChangeblogdes1(e) {
        this.setState({
            blog_des1: e.target.value
        });
    }

    onChangeblogdes2(e) {
        this.setState({
            blog_des2: e.target.value
        });
    }

    onChangeblogimg(e) {
        this.setState({
            blog_img:e.target.files[0]
        })
    }

   

  

    onSubmit(e) {
        
        e.preventDefault();
        const newBlog = {
            blog_title : this.state.blog_title,
            blog_author : this.state.blog_author,
            blog_desig : this.state.blog_desig,
            blog_des1 : this.state.blog_des1,
            blog_des2 : this.state.blog_des2,
        }



        axios.post('http://localhost:5000/blogs/create-blog', newBlog)
            .then(res => console.log(res));

        this.setState({

            blog_title: '',
            blog_author: '',
            blog_time: '',
            blog_des1:'',
            blog_des2:'',
            blog_desig:''
           
        })
    }

    render() {
        return (
        <div className="crt-blog-cont">
                <div className="blog-background">   
                <div className="create-blog-form">
                <form onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_title}
                                onChange={this.onChangeblogtitle}
                                />
                    </div>

                    <div className="form-group">
                        <label>Author </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_author}
                                onChange={this.onChangeblogauthor}
                                />
                    </div>
                  
                    <div className="form-group">
                        <label>Designation </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_desig}
                                onChange={this.onChangeblogdesig}
                                />
                    </div>

                  
                    <div className="form-group desp1">
                        <label>Description1 </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_des1}
                                onChange={this.onChangeblogdes1}
                                />
                    </div>

                    <div className="form-group desp2">
                        <label>Description2 </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_des2}
                                onChange={this.onChangeblogdes2}
                                />
                    </div>
                  
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
                </div>
                </div>
        </div>
        )
    }
}