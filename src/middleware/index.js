// Example middleware for logging requests
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url} - ${ip}`);
  next();
};

// Example middleware for authentication (to be implemented)
const authenticateToken = (req, res, next) => {
  // This is a placeholder for JWT token authentication
  // Uncomment and implement when authentication is needed
  
  /*
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
  */
  
  next(); // For now, just continue without authentication
};

// Example middleware for validating request data
const validateProductData = (req, res, next) => {
  const { name, price, category } = req.body;
  
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Product name is required and must be a string' });
  }
  
  if (!price || isNaN(price) || price <= 0) {
    return res.status(400).json({ message: 'Valid product price is required' });
  }
  
  if (!category || typeof category !== 'string') {
    return res.status(400).json({ message: 'Product category is required and must be a string' });
  }
  
  next();
};

module.exports = {
  requestLogger,
  authenticateToken,
  validateProductData
};