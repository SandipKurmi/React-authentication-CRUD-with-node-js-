import Service from './Service';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
class UserService extends Service {
  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);

  }

  //signup
  async signup(item) {
    try {
      const hash = await bcrypt.hashSync(item.password, 10);
      item.password = hash;
      const token = jwt.sign({ name: item.name, email: item.email }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
      const data = await this.model.create(item);
      return {
        error: false,
        statusCode: 202,
        token: token,
        data: data,
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 501,
        message: 'Error in Signup'
        , errors: err.errors,
      };
    }
  }

  //login
  async login(item) {
    try {
      let user = await this.model.findOne({ "email": item.email })
      if (user) {
        let results = await bcrypt.compareSync(item.password, user.password);
        if (results) {
          const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
          return {
            error: false,
            token: token,
            statusCode: 200,
            data: user
          };
        } else {
          return {
            error: true,
            statusCode: 401,
            error: 'wrong Email Or Password1'
          };
        }
      } else {
        return {
          error: true,
          statusCode: 401,
          error: 'wrong Email Or Password2'
        };
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        statusCode: 500,
        message: 'server error'
      };
    }
  }

}

export default UserService;
