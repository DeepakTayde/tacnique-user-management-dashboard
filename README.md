# Tacnique User Management Dashboard

A user management dashboard built with **React** and **Tailwind CSS**. This dashboard allows you to view, search, filter, add, and edit users, with data integration via API.

---

## 🚀 Project Overview

- **User Table:** View users with columns for ID, first name, last name, email, and department(Which is company.name).
- **Search & Filter:** Search users and filter by first name, last name, email, or department.
- **Add/Edit User:** Add new users or edit existing ones via a modal form.
- **API Integration:** Fetch and post user data using Axios.
- **Responsive UI:** Built with Tailwind CSS for a modern, responsive design.

---

## 🛠️ Setup Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/DeepakTayde/tacnique-user-management-dashboard.git
   cd tacnique-user-management-dashboard
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Environment variables**
   - Create a `.env` file in the root (if you want to override the default API endpoint).
   - Example:
     ```
     REACT_APP_USER_API_ENDPOINT=https://jsonplaceholder.typicode.com/users
     ```

4. **Start the development server**
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```sh
   npm run build
   ```

---

## 🧑‍💻 Usage

- **View Users:** Users are listed in a table with sorting and pagination.
- **Search/Filter:** Use the search bar and filter panel to find users.
- **Add User:** Click the "Add User" button to open the modal and submit the form.
- **Edit User:** Click the "Edit" button in the table to open the modal with pre-filled data.
- **Delete User:** (If implemented) Click the "Delete" button to remove a user.

---

## ⚙️ .env Variables

| Variable                      | Description                        | Default Value                                      |
|-------------------------------|------------------------------------|----------------------------------------------------|
| REACT_APP_USER_API_ENDPOINT   | API endpoint for user data         | https://jsonplaceholder.typicode.com/users         |

**Note:** If `.env` is not set, the default endpoint in `src/services/api.js` will be used.

---

## 📦 Folder Structure

```
src/
  components/
    HeaderComponent.jsx
    UserFormModal.jsx
    UserTableView.jsx
    FilterPopup.jsx
    SearchBar.jsx
  pages/
    UserPage.jsx
  services/
    api.js
  App.js
  index.js
  index.css
```

---

## 📝 Scripts

- `npm start` — Run the app in development mode.
- `npm run build` — Build the app for production.
- `npm test` — Run tests (if implemented).

---

## 📄 License

This project is for educational/demo purposes.

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (for demo API)
