// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { field, text, writer } from '@nozbe/watermelondb/decorators'
import database from '..';



export default class User extends Model {
    static table = 'users'


    @text('name') name;
    @text('username') username;
    @text('email') email;
    @text('mobile') mobile;
    @field('address') address;
    @field('country') country;
    @field('state') state;
    @text('password') password;


    // function creating account

    // @writer  async addUser(userData) {
    //     const { username, email, mobile, addres, country, state, password } = userData

    //     try {
    //         const newUser = await this.collections.create(user => {
    //             user.username = username;
    //             user.email = email;
    //             user.mobile = mobile;
    //             user.address = addres;
    //             user.country = country;
    //             user.state = state;
    //             user.password = password
    //         })
    //         return newUser
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

}
