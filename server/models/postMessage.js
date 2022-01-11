import mongoose from 'mongoose';


//DATABASE Schema for storing the data
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Stor the data in a variable
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
