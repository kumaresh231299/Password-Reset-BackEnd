# Password Reset and User Authentication Backend

- This repository contains the backend code for a full-stack project focused on Password Reset and User Authentication.

- The frontend is handled separately. 

- Built using Node.js and Express, the backend integrates with MongoDB for data storage. 

- It provides robust user authentication features, including signup, signin, forgot password, and reset password functionalities. 

- The project utilizes various npm packages for tasks such as password encryption, managing environment variables, and sending emails, ensuring secure and efficient handling of user authentication and password management.


## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB Atlas**: Cloud-based MongoDB service for database storage.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Nodemailer**: For sending reset links via email.
- **bcryptjs**: For hashing passwords.
- **dotenv**: For managing environment variables.
- **cors**: For handling Cross-Origin Resource Sharing.
- **nodemon**: For automatically restarting the server during development.


## API Reference

#### Base url

```
https://password-reset-backend-kkfw.onrender.com
```
- *Description : This is the deployed backend URL for the password reset service.*

#### Register or Signup user

```http
  POST /api/user/register-user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

- *Description : Creates a new user account by hashing the password and storing the user details in the MongoDB database.*

#### Login or Signin user

```http
  POST /api/user/login-user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

- *Description : Authenticates the user by comparing the entered password with the hashed password stored in the database.*

#### Forgot Password

```http
  POST /api/user/forgot-password
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** |

- *Description : Sends a password reset link to the user's email using Nodemailer.*

- *The reset link contains a unique identifier generated using JavaScript's built-in Math.random() function and a timestamp.*

#### Reset Password

```http
  PUT /api/user/reset-password/:id/:token
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `newPassword` | `string` | **Required** |

- *Description : Resets the user's password by updating the password field in the database with the newly hashed password.* 

- *The reset link identifier is validated against the database records.*

## Deployment

Front End Deployed URL

https://password-reset-frontend-sk.netlify.app/