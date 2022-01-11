import jwt from 'jsonwebtoken';


// user wants to like a post
// he clicks the like button i.e request to => auth middlewae (NEXT) => like controller.....

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.lenght < 500;

    let decodedData;

    if(token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
}

export default auth;
