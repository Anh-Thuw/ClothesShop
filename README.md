# ClothesShop - Node.js E-commerce Application

A modern e-commerce application for an online clothes shop built with Node.js and Express.js.

*Technologies: Node.js, Express.js, MySQL, Railway.app*

## 🚀 Features

- RESTful API architecture
- Express.js web framework
- Environment configuration with dotenv
- CORS enabled
- Static file serving
- Error handling middleware
- Health check endpoint

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (version 14.0.0 or higher)
- npm (Node Package Manager)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Anh-Thuw/ClothesShop.git
cd ClothesShop
```

2. Install dependencies:
```bash
npm install
```

3. Create and configure your environment file:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration settings.

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for automatic reloading during development.

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ClothesShop/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/         # Data models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   └── config/         # Configuration files
├── public/             # Static files
├── app.js              # Express app setup
├── server.js           # Server entry point
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## 🛣️ API Endpoints

### Health Check
- `GET /health` - Check server status

### Main Endpoints (To be implemented)
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=3000
# Add database and other service configurations as needed
```

## 📝 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload
- `npm test` - Run tests (to be implemented)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- Node.js community for the amazing ecosystem
