const baseURL = import.meta.env.PROD
  ? 'https://choir-svilengrad-express-server.onrender.com'
  : 'http://localhost:3000';

export { baseURL };