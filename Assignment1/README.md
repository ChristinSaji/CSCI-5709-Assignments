# Assignment 1

- _Date Created_: 05 Jun 2024
- _Last Modification Date_: 05 Jun 2024
- _Deployed Application URL_: <https://christin-saji-assignment-1.netlify.app>
- _Git URL_: <https://git.cs.dal.ca/saji/csci-5709-assignments>

## Authors

- [Christin Saji](christin.saji@dal.ca) - _(Owner)_

## Getting Started

To have a local copy of this assignment up and running on your local machine, you will first need to install the following software / libraries / plug-ins.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installing

A step-by-step series of instructions to get a development environment running:

1. **Install Node.js and npm**

   - Download and install Node.js from [Node.js](https://nodejs.org/).
   - npm is included with Node.js.

2. **Clone the Repository**

   - Open a terminal/command prompt.
   - Run the following command to clone the repository:
     ```bash
     git clone https://git.cs.dal.ca/saji/csci-5709-assignments.git
     ```

3. **Navigate to the Project Directory**

   - Change the directory to the project folder:
     ```bash
     cd csci-5709-assignments/Assignment1/user-profile-management
     ```

4. **Install Dependencies**

   - Install the necessary dependencies using npm:
     ```bash
     npm install
     ```

5. **Start the Development Server**

   - Start the Vite development server:
     ```bash
     npm run dev
     ```
   - The app should open in your default web browser at `http://localhost:5173`.

## Deployment

To deploy the React app to Netlify, follow these steps:

1. **Build the React App**

   - Run the build command:
     ```bash
     npm run build
     ```

2. **Deploy to Netlify**

   - Login to your Netlify account.
   - Drag and drop the `dist` folder (created after running the build command) to the Netlify dashboard.
   - Netlify will provide a URL for your deployed app.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - For development and build
- [Netlify](https://www.netlify.com/) - For deployment
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Dependency Management
- [TailwindCSS](https://tailwindcss.com/) - CSS framework for styling
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - For toast notifications

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### File Name

_Lines 13 - 28_

```
const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = "Username is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!contactNumber) newErrors.contactNumber = "Contact number is required.";
    if (!address) newErrors.address = "Address is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

```

The code above was created by adapting the code in [Understanding Forms in React](https://twelve.hashnode.dev/understanding-forms-in-react) as shown below:

```
const validateForm = () => {
    const newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required';
    }

    setErrors(newErrors);

    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

```

- <!---How---> The code in [Understanding Forms in React](https://twelve.hashnode.dev/understanding-forms-in-react) was implemented by adding specific validation rules for username, email, contact number, and address.
- <!---Why---> [Understanding Forms in React](https://twelve.hashnode.dev/understanding-forms-in-react)'s Code was used because it provided a robust example of form validation in JavaScript.
- <!---How---> [Understanding Forms in React](https://twelve.hashnode.dev/understanding-forms-in-react)'s Code was modified by adding custom validation rules and error messages.

## Acknowledgments

- Hat tip to [TailwindCSS](https://tailwindcss.com/docs/guides/vite) documentation for CSS framework usage.
- Image from [Openverse](https://openverse.org/image/98c1642b-9f86-49bc-b28c-fdb35adcba7b?q=professionals) used in the frontend for default profile image.
