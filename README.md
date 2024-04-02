# React To-Do Application

- This is a simple To-Do application built with ReactJS and Redux.

## Setup Instructions

1. Clone the repository:

- git clone <repository_url>

2. Install dependencies:

- cd <project_directory>
- npm install

## Running the Application

To run the application locally, use the following command:

npm run dev

## How to Use

- Add tasks by entering text in the input field and clicking "Add".
- Click the checkbox to mark a task as completed.
- Click the pencil icon to edit a task.
- Click the trash icon to delete a task.

## Folder Structure

├── src
│ ├── components
| | ├── TodoApp.jsx
│ │ ├── TaskInput.jsx
│ │ └── TaskList.jsx
│ ├── Redux
| | ├── Store
| | |  ├──appStore.js
│ │ ├── todoSlice
| | |  ├── todoSlice.js
│ |
|



## Logic and Approach

### Redux State Management

- The application's state is managed using Redux, with a single slice (`todoSlice.js`) handling all actions and reducers related to tasks.
- Initial tasks are fetched from localStorage on application load, and subsequent changes are synced with localStorage to maintain persistence between sessions.

### React Components

- The application consists of three main components: `TodoApp`, `TaskInput`, and `TaskList`.
- `TodoApp` component serves as the main entry point for the application, rendering `TaskInput` and `TaskList`.
- `TaskInput` component handles the input field for adding tasks and dispatches actions to add new tasks to the Redux store.
- `TaskList` component displays the list of tasks, allows users to mark tasks as completed, edit task text, and delete tasks. It also dispatches corresponding actions to update the Redux store.

### Styling

- Basic styling is implemented using Tailwind CSS utility classes for layout and design.
- Components are styled to provide a clean and intuitive user interface.



