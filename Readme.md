# Healthcare Appointment Booking System

A scalable healthcare appointment booking system with microservices architecture, built using Node.js (TypeScript), PostgreSQL, Prisma, and various other tools and technologies.

## Technologies Used

- **Backend:** Node.js, TypeScript, Express, PostgreSQL, Prisma
- **Microservices:** Appointment Service, Doctor Service, User Service
- **Authentication:** JWT, Keycloak
- **Database:** PostgreSQL, Prisma ORM
- **Logging & Monitoring:** ELK Stack (Elasticsearch, Logstash, Kibana)
- **API Documentation:** Swagger/OpenAPI
- **Caching:** Redis (if added later)
- **API Gateway:** Nginx
- **CI/CD:** GitHub Actions
- **Testing:** Jest
- **ORM:** Prisma
- **Deployment:** Docker, Docker Compose

## Features

- **User Authentication:** Sign up, login, and JWT-based authentication.
- **Doctor Profile Management:** CRUD operations to create, update, and manage doctor profiles.
- **Appointment Booking:** Users can book, view, and cancel appointments with doctors.
- **Real-time Notifications:** Notifications to users on appointment updates.
- **API Documentation:** Full API documentation with Swagger.
- **Centralized Logging:** ELK Stack for logging and monitoring.
- **CI/CD:** Automated testing and deployment with GitHub Actions.

## Project Structure

```
/src
  /appointments         # Appointment Service
  /doctors              # Doctor Service
  /users                # User Service
  /auth                 # Authentication & Authorization
  /config               # Database, server, and environment configurations
  /middleware           # Middleware for logging, authentication, etc.
  /routes               # Routes for each service
  /services             # Business logic for each service
  /validators           # Zod validation schemas
  /docs                 # Swagger/OpenAPI documentation
  /utils                # Utility functions (e.g., logger)
  /tests                # Unit and integration tests
  /docker               # Docker-related configurations
  /ci-cd                # CI/CD configurations (GitHub Actions)
  .env                  # Environment variables
  .gitignore            # Gitignore file
  README.md             # Project documentation
```

## Setup and Installation

### Prerequisites

Before starting, make sure you have the following installed:

- **Node.js (v14 or above)**
- **PostgreSQL** (or a running instance of PostgreSQL)
- **Docker & Docker Compose** (for local testing)
- **Git** (for cloning the repository)

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-repo/healthcare-booking.git
cd healthcare-booking
```

### Install Dependencies

Install all the required dependencies:

```bash
npm install
```

### Set up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
DATABASE_URL=postgresql://username:password@localhost:5432/healthcare_db
JWT_SECRET=your-jwt-secret
REDIS_URL=your-redis-url (optional)
```

### Run the Project Locally

1. **Start the application** using `npm run start:dev` for development mode.

   ```bash
   npm run start:dev
   ```

   This will start the server on `http://localhost:5000` (or configured port).

2. **Access Swagger Documentation:**
   - Once the app is running, you can access the API documentation at [http://localhost:5000/api-docs](http://localhost:5000/api-docs).

### Docker Setup

To run the project in Docker, follow these steps:

1. **Build and start services:**

   ```bash
   docker-compose up --build
   ```

   This will start PostgreSQL, ELK stack, and the application services.

2. **Access the ELK stack** at the following URLs:
   - Elasticsearch: `http://localhost:9200`
   - Kibana: `http://localhost:5601`

### CI/CD

This project is set up with **GitHub Actions** for automated CI/CD. The workflow is defined in `.github/workflows/ci-cd.yml`. Push your changes to the `main` branch to trigger the pipeline.

### Tests

We are using **Jest** for unit and integration tests. To run tests:

```bash
npm run test
```

### API Documentation

All API routes and details are documented using **Swagger/OpenAPI**. The full API documentation can be accessed at the following URL once the server is running:

- [API Documentation](http://localhost:5000/api-docs)

## ELK Stack (Logging)

To integrate centralized logging using the **ELK Stack** (Elasticsearch, Logstash, Kibana):

1. **Logstash Configuration:** We use Logstash to collect and forward logs to Elasticsearch.
2. **Elasticsearch:** Stores and indexes logs.
3. **Kibana:** Provides a web interface for visualizing and searching logs.

You can view logs in **Kibana** at `http://localhost:5601`.

---

## Microservices

### **1. Appointment Service**

- **Create Appointment:** Allows users to book an appointment with a doctor.
- **View Appointments:** Users can view their booked appointments.
- **Cancel Appointment:** Users can cancel their appointments.

### **2. Doctor Service**

- **Create Doctor Profile:** Admins can add new doctor profiles.
- **Update Doctor Profile:** Admins can update doctor details.
- **Delete Doctor Profile:** Admins can remove doctor profiles.

### **3. User Service**

- **User Authentication:** JWT-based authentication for secure login and signup.
- **Profile Management:** Users can update their profiles.

---

## Development Best Practices

- **Separation of Concerns:** Each service has its own responsibility and operates independently.
- **Error Handling:** Global error handler for uniform error responses.
- **Validation:** Using **Zod** for input validation across services.
- **Logging:** Centralized logging with the **ELK Stack**.
- **API Documentation:** Automated API documentation using **Swagger/OpenAPI**.
- **CI/CD:** Continuous integration and deployment with **GitHub Actions**.
- **Testing:** Unit and integration tests using **Jest**.

---

## Contribution

Feel free to fork the repository, create a new branch, and submit a pull request with improvements, fixes, or new features.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

---

This `README.md` document is now structured to provide all the essential information for setting up, running, and contributing to the Healthcare Appointment Booking System project. It includes sections on project structure, technologies used, setup instructions, microservices, and best practices for development.
