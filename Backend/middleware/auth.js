import jwt from "jsonwebtoken";

// Middleware to verify admin JWT token
const auth = (req,res,next)=>{
    const token = req.headers.authorization; // Get token from request header

    try {
        // Verify token using the secret key
        jwt.verify(token,process.env.JWT_SECRET)
        // If valid, continue to the next middleware or route
        next();
    } catch (error) {
        // If token is invalid, send error response
        res.json({success:false, message : "Invalid Token"})
    }
}

export default auth; // Export middleware