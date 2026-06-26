# Org

A team management web app built with **React 18**. Create and organize collaborators across departments, customize team colors, mark favorites and manage your organization visually.

Live demo: [org-hankot91.vercel.app]

## Features

- **Team catalog** — 7 predefined departments (Frontend, DevOps, Data Science, UX, Mobile, Programming, Innovation) each with its own color.
- **Add collaborators** — form to register name, role, photo URL and assign to a team.
- **Add custom teams** — create new departments with a custom color picked from a color picker.
- **Dynamic color theming** — change a team's accent color in real time directly from its card.
- **Like collaborators** — toggle a heart icon per collaborator.
- **Delete collaborators** — remove cards with one click.
- **Auto-generated avatars** — if no photo URL is provided, an avatar with the collaborator's initials and team color is generated automatically.
- **Persistent state** — all data is saved in `localStorage` and survives page refreshes.

## Tech stack

- [React 18](https://react.dev/) (Create React App)
- CSS Modules (one stylesheet per component)
- [react-icons](https://react-icons.github.io/react-icons/) — AiFillHeart, AiOutlineHeart, AiFillCloseCircle
- [uuid](https://www.npmjs.com/package/uuid) — unique IDs for teams and collaborators
- [hex-to-rgba](https://www.npmjs.com/package/hex-to-rgba) — team background color from accent color

## Project structure

```
src/
├── components/
│   ├── button/        # Reusable submit button
│   ├── card/          # Collaborator card (photo, name, role, like, delete)
│   ├── carousel/      # Team section with color picker and card list
│   ├── footer/        # Footer with social links
│   ├── form/          # Add collaborator + add team forms
│   ├── header/        # App header
│   ├── input/         # Reusable text/color input
│   ├── main/          # Root state — teams, workers, localStorage
│   ├── miorg/         # "Mi organización" toggle button
│   └── selectOptions/ # Team dropdown in the form
├── App.js
└── index.js
```

## Running it locally

```bash
git clone https://github.com/Hankot91/org.git
cd org
npm install
npm start
```

Opens at `http://localhost:3000`.

To reset all data and go back to the initial state, open the browser console (F12) and run:
```javascript
localStorage.removeItem('teams')
```
Then reload the page.

## Author

**Camilo Vanegas** ([@Hankot91](https://github.com/Hankot91))  
