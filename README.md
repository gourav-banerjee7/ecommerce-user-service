# Ecommerce User Service

This is the User Service microservice for the ecommerce application. It handles user registration, login (OAuth2), profile management, and address book functionalities.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Ecommerce User Service is a microservice designed to manage user-related functionalities such as registration, authentication, profile management, and address book management. It is built with Node.js and Express, utilizing Sequelize ORM for database interactions and JWT for authentication.

## Architecture

The application follows a microservices architecture and integrates with various components to provide a robust and scalable user management solution. Key components include:

- **User Service**: Manages user-related operations including registration, login, profile updates, and address book management.
- **PostgreSQL**: Used as the primary relational database for storing user data.
- **Kafka**: Utilized for event-driven communication between microservices.
- **Elasticsearch, Logstash, Kibana (ELK Stack)**: Employed for logging and monitoring purposes.

The service interacts with the PostgreSQL database for persistent storage and uses Kafka for handling asynchronous communication. The ELK stack is integrated to ensure efficient logging, monitoring, and debugging capabilities.

## Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Docker**: Make sure Docker and Docker Compose are installed for containerization.

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/ecommerce-user-service.git
   cd ecommerce-user-service
   ```

2. **Install Node.js dependencies:**

   ```sh
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   PORT=3000
   DATABASE_URL=postgres://username:password@postgres:5432/userdb
   JWT_SECRET=your_jwt_secret
   KAFKA_HOST=kafka:9093
   POSTGRES_USER=username
   POSTGRES_PASSWORD=password
   POSTGRES_DB=userdb
   ```

## Running the Application

The application can be run using Docker Compose. Follow the steps below to build and start the services:

1. **Build and start the services:**

   ```sh
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers for the user service, PostgreSQL, Kafka, Zookeeper, Elasticsearch, Logstash, and Kibana.

2. **Access the application:**

   The user service will be available at `http://localhost:3000`.

3. **Stopping the services:**

   To stop the services, run:

   ```sh
   docker-compose down
   ```

## API Endpoints

### User Registration

- **URL:** `/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### User Login

- **URL:** `/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### Get User Profile

- **URL:** `/profile`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

### Update User Profile

- **URL:** `/profile`
- **Method:** `PUT`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "name": "John Doe Updated",
    "email": "john.doe.updated@example.com"
  }
  ```

### Add Address

- **URL:** `/address`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "Anystate",
    "country": "Anycountry",
    "postalCode": "12345"
  }
  ```

### Get Addresses

- **URL:** `/address`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with clear descriptions of the changes made.

## License

This project is licensed under the MIT License.