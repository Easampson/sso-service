import React from 'react';
import { Meteor } from 'meteor/meteor';


const Home = () => ({

    userCreate() {
        const email = $('#email').val();
        const passwd = $('#passwd').val();
        const passwd2 = $('#passwd2').val();
        const user = {email: email, password: passwd};

        if (passwd == passwd2) {
            Accounts.createUser(user, function (err) {
                if (!err) {
                    FlowRouter.go('/sign');
                } else {
                    console.log(err);
                }
            });
        } else {
            alert("Passwords do not match");
        }

    },


    render(){
        return(
            <div id="newUser" className="panel">
                <div className="form-group">
                    <label form="formGroupExampleInput">Email</label>
                    <input type="text" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label form="formGroupExampleInput2">Password</label>
                    <input type="password" className="form-control" id="passwd"/>
                </div>
                <div className="form-group">
                    <label form="formGroupExampleInput2">Confirm Password</label>
                    <input type="password" className="form-control" id="passwd2"/>
                </div>
                <br/>
                <div className="btn btn-lg btn-primary-outline btn-center" onClick={this.userCreate.bind(this)}>Create</div>
            </div>
        );
    }
});
export default Home;