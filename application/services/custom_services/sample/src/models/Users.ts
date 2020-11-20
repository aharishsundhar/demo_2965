
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
   name: String,
   email: String,
   age: String,
   dob: Date
})

const UsersModel = mongoose.model('Users', UsersSchema, 'Users');
export default UsersModel;
