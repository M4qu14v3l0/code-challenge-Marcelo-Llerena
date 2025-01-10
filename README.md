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

## 📝 Task Manager Application

The Task Manager Application is a powerful tool designed to help you efficiently manage your tasks and stay organized. With an intuitive interface and robust functionality, this application streamlines task management for individuals.

Key Features:

1. Add Tasks: Create new tasks with relevant details to stay on top of your to-do list.
2. Edit Tasks: Modify existing tasks to keep them updated as priorities change.
3. Delete Tasks: Remove tasks that are no longer needed to maintain a clean and organized workspace.
4. Assign Tasks: Delegate tasks to specific team members or users, ensuring clear responsibilities.
5. Filter Tasks: Easily filter tasks by status, priority, assigned user, or any other criteria to focus on what matters most.

## 🍵About Stack

- React: Its component-based architecture and hooks make it perfect for building dynamic, modular UIs like task editing and filtering. Plus, it’s popular and reliable.
- Apollo Client: Seamless GraphQL integration with powerful caching ensures efficient data fetching and a fast, responsive UI.
- React Hook Form: Lightweight, performant, and easy to use for managing forms like task creation and editing, with built-in validation and minimal re-renders.

## 👨‍💻Techonoglies used

- React
- Apollo Client
- React-hook-form
- Codegen
- Radix UI
- Dnd Kit
