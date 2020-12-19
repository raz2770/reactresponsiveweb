import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './complaint.css';
import axios from 'axios';


export default class Complaint extends Component {
  
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
      First_Name: '',
      Last_Name: '',
      Mail: '',
      Phone: '',
      Message: ''
    }
  }
  
  onChangeFirstName(event) {
    this.setState({
      First_Name: event.target.value
    });
  }

  onChangeLastName(event) {
    this.setState({
      Last_Name: event.target.value
    });
  }

  onChangeMail(event) {
    this.setState({
      Mail: event.target.value
    });
  }

  onChangePhone(event) {
    this.setState({
      Phone: event.target.value
    });
  }

  onChangeMessage(event) {
    this.setState({
      Message: event.target.value
    });
  }
  
  onSubmit(event) {
    event.preventDefault();

    console.log(`Form submitted: `);
    console.log(`First Name: ${this.state.First_Name}`);
    console.log(`Last Name: ${this.state.Last_Name}`);
    console.log(`Mail: ${this.state.Mail}`);
    console.log(`Phone: ${this.state.Phone}`);
    console.log(`Message: ${this.state.Message}`);

    const newData = {
      First_Name: this.state.First_Name,
      Last_Name: this.state.Last_Name,
      Mail: this.state.Mail,
      Phone: this.state.Phone,
      Message: this.state.Message
    }

    axios.post('http://localhost:4000/data', newData) 
      .then(res => console.log(res.data));

    this.setState({
      First_Name: '',
      Last_Name: '',
      Mail: '',
      Phone: '',
      Message: ''
    })
  }


  render() {
    return (
    <div>
        <div className="row comp-rw">
            <div className="col-md-8 offset-md-2 complaint-box">
            <div className="signin-form col-6">
              <form action="connect.php" method="post" onSubmit = {this.onSubmit}>

                <div className="form-group">
                  <div className ="icon-name">
                    <input type="text" className="form-control" name="First_Name" placeholder="First Name" autocomplete="off" required value = {this.state.First_Name} onChange = {this.onChangeFirstName}></input>
                    <input type="text" className="form-control" name="Last_Name" placeholder="Last Name" autocomplete="off" required value = {this.state.Last_Name} onChange = {this.onChangeLastName}></input>
                  </div>
                </div>

                <div className="form-group">
                    <div className="icon-name">
                      <input type="text" className="form-control" name="Mail" placeholder="E-Mail" autocomplete="off" required value = {this.state.Mail} onChange = {this.onChangeMail}></input>
                      <input type="text" className="form-control" name="Phone" placeholder="phone" autocomplete="off" required value = {this.state.Phone} onChange = {this.onChangePhone}></input>
                    </div>
                </div>

                <div className="form-group">
                    <div className="icon">
                      <input type="text" className="form-control" name="Message" placeholder="Type Your Message Here" autocomplete="off" required value = {this.state.Message} onChange = {this.onChangeMessage}></input>
                    </div>
                </div>


                <div class="form-group">
                    <button type="submit" className="btn btn-outline-success btn-lg btn-block" name="sign_in">Submit</button>
                </div>
              </form>
            </div>

            <div className="col-md-6 contact">
              <div className="contact-header ct">
                Join Us With 
              </div>
              <div className="contact-icon ct">
                  <span><i class="fa fa-github icon-social" aria-hidden="true"></i></span>
                  <span><i class="fa fa-youtube icon-social" aria-hidden="true"></i></span>
                  <span><i class="fa fa-facebook-square icon-social" aria-hidden="true"></i></span>
                  <span><i class="fa fa-instagram icon-social" aria-hidden="true"></i></span>
              </div>

              <div className="space">
                
              </div>
            </div>
              </div>
        </div>   
     </div>  
    )
  }
}