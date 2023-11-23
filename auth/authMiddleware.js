import jwt from'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ error: 'Access denied. Token is required' });
    }
  
    try {
      const decoded = jwt.verify(token, 'secret-key');
      console.log('Decoded Token:', decoded); // Token içeriğini logla
      req.user = decoded;
      console.log(req.user)
      next();
    } catch (error) {
      console.error('Token Verification Error:', error.message); // Hata mesajını logla
      res.status(401).json({ error: 'Invalid token' });
    }
  };
export default authMiddleware;
