import contact_thumbnail from "../assets/project_thumbnail/contact.png";
import calculator_thumbnail from "../assets/project_thumbnail/calculator.png";
import form_thumbnail from "../assets/project_thumbnail/form.png";
import expense_tracker_thumbnail from "../assets/project_thumbnail/expense-tracker.png";
import note_app_thumbnail from "../assets/project_thumbnail/note-app.png";
import to_do_list_thumbnail from "../assets/project_thumbnail/to-do-list.png";

export const projectsData = [
    {
        id: 1,
        title: "Contact Manager",
        thumbnail: contact_thumbnail,
        description: "A responsive Contact Manager web app that allows users to add, edit, delete, and search contacts.",
        details: "The Contact Manager is a single-page application (SPA) built with React.js that helps users manage their personal or professional contact list. It supports CRUD operations — users can add new contacts, edit existing ones, delete entries, and search in real time. The app uses React state management and form validation to ensure smooth data entry. This project showcases component-based architecture, input handling, dynamic rendering, and responsive design.",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        sourceCode: "https://github.com/PrathameshMirashi/contact-manager",
        liveSite: "https://contact-manager-mu-wheat.vercel.app/"
    },
    {
        id: 2,
        title: "Task Manager App",
        thumbnail: note_app_thumbnail,
        description: "A lightweight and responsive Note App built with React, allowing users to create, update, and delete notes with a clean, intuitive UI and smooth user experience.",
        details: "The Note App is a fully functional single-page application (SPA) developed using React.js. It allows users to create, edit, and delete personal notes. Designed with a focus on simplicity, responsiveness, and local performance, it uses React Hooks for state management and stores data in localStorage for persistent note-saving across sessions.",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        sourceCode: "https://github.com/PrathameshMirashi/note-app",
        liveSite: "https://note-app-xi-olive.vercel.app/"
    },
    {
        id: 3,
        title: "Calculator",
        thumbnail: calculator_thumbnail,
        description: "A clean and responsive calculator application built with React, supporting basic arithmetic operations with a user-friendly interface and real-time input handling.",
        details: "The Calculator App is a functional and responsive application developed using React.js. It performs basic arithmetic operations — addition, subtraction, multiplication, and division — and provides an interactive UI that mimics a physical calculator.",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        sourceCode: "https://github.com/PrathameshMirashi/calculator",
        liveSite: "https://calculator-two-zeta-16.vercel.app/"
    },
    {
        id: 4,
        title: "To Do List",
        thumbnail: to_do_list_thumbnail,
        description: "A dynamic and user-friendly To-Do List application built with React, allowing users to add, complete, and delete tasks with persistent data using localStorage.",
        details: "The To-Do List App is a responsive task management tool developed using React.js. It enables users to add, mark as complete, and delete tasks efficiently. Tasks are stored in the browser using localStorage, ensuring persistence even after refreshing or closing the browser.",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        sourceCode: "https://github.com/PrathameshMirashi/To-Do-List",
        liveSite: "https://to-do-list-kappa-one-79.vercel.app/"
    },
    {
        id: 5,
        title: "Expense Tracker",
        thumbnail: expense_tracker_thumbnail,
        description: "A real-time Expense Tracker built with React that helps users manage income and expenses, track spending habits, and maintain budget awareness with clean data visualization.",
        details: "The Expense Tracker App is a responsive single-page application built using React.js, designed to help users monitor their income and expenses. It allows users to add, categorize, and delete transactions while dynamically calculating their balance, total income, and total expenses.",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        sourceCode: "https://github.com/PrathameshMirashi/expense-tracker",
        liveSite: "https://expense-tracker-zeta-lac.vercel.app/"
    },
    {
        id: 6,
        title: "Profile Form",
        thumbnail: form_thumbnail,
        description: "A responsive profile form built with React, allowing users to input and update personal details with real-time validation and clean UI feedback.",
        details: "The Profile Form App is a component-driven application built in React.js, designed to collect user information like name, email, phone, address, and other personal data. It features controlled form inputs, inline error messages, and validation logic to ensure clean data collection.",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        sourceCode: "https://github.com/PrathameshMirashi/profile-form",
        liveSite: "https://profile-form-nine.vercel.app/"
    },
]
