<div align="center">

# Task Manager

<img src="/public//images//ravn-logo-bg-black.svg" alt="Imagen de ejemplo" width="200" backgroundColor='black'>
</div>

## 🛠️ Project Setup

Follow these steps to clone the repository, install dependencies, and configure the required environment variables.

### 1. Clone the repository

Run the following command in your terminal to clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Navigate to the project directory

Go to the project's folder:

```bash
cd your-repo-name
```

### 3. Install dependencies

This project uses yarn as the package manager. If you don't have yarn installed, follow the [official Yarn installation guide](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

Install the dependencies by running:

```bash
yarn install
```

### 4. Configure environment variables

- Locate the .env.example file in the root directory.
- Rename it to .env
- Open the .env file and replace the placeholder values with your own environment variables.

Here is an example of how the .env.example file looks:

```
VITE_TASK_MANAGER_API_URL=YOUR_API_URL
VITE_TASK_MANAGER_API_KEY=YOUR_API_KEY
```

### 5. Generate hooks with `codegen`

Before starting the application, you need to generate the hooks to fetch data. Run the following command:

```bash
yarn run codegen
```

### 6. Start the development server

Run the following command to start the development server:

```bash
yarn dev
```

## 🐛 Troubleshooting

If you encounter any issues during the setup, please check:

- Ensure all required dependencies are installed.
- Verify that your .env file contains the correct environment variables.

Feel free to report any issues or bugs in the Issues section.
