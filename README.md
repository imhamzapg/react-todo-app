# 🚀 Advanced To-Do System

Hi, I'm **Hamza**! I've been into programming before, and after a short break, I decided to return to my hobby and take it more seriously. This project marks my return to building and learning.

Even though I initially named this a "simple" to-do app, trust me—it's not. For this project, I chose to prioritize **logic and functionality** over just CSS UI. While I didn't bypass the design (the app still features a nice, interactive interface), my main goal was mastering state management and complex data flows in React.

## ✨ Key Features

* **Advanced Sorting:** Organize your workflow by Creation Date, Priority (High/Medium/Low), or Alphabetically.
* **Inline Editing:** Edit task titles directly within the list with a smooth UX—no modals or redirects required.
* **Dynamic Filtering:** Toggle between All, Active, and Completed tasks seamlessly.
* **Todo Statistics:** A real-time dashboard showing total tasks and completion progress.
* **Visual Priority System:** Tasks are color-coded (Red/Yellow/Green) based on urgency for instant recognition.
* **Keyboard Shortcuts:** Enhanced productivity with `Enter` to save and `Escape` to cancel edits.
* **Bulk Actions:** "Clear Completed" functionality to keep your workspace tidy.
* **Empty State:** Informative prompts when the list is empty or no search results are found.

## 🛠️ Tech Stack

* **Core:** React (Vite)
* **Language:** JavaScript (ES6+)
* **Styling:** Custom CSS3 (Modular & Responsive)
* **Version Control:** Git & GitHub

## 🏗️ Architecture & Logic

The application follows a **Modular Component Architecture** to ensure scalability and clean code. I focused heavily on "Derived State" to keep the app fast and bug-free:
- `App.jsx` - Centralized State Management & Business Logic.
- `ToDoForm` - Handles complex data entry and validation.
- `ToDoList` & `ToDoItem` - Decoupled components for efficient rendering and local state editing.
- `ToDoControls` - Manages derived state for filters and sorting.
- `ToDoStats` - Pure functional component for data visualization.

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/imhamzapg/react-todo-app.git]
   