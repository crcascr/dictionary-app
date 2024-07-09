# Dictionary Web Application

## Description

This web-based dictionary application allows users to look up definitions of English words, offering pronunciation, meanings, synonyms and antonyms.

Developed as part of a technical test, it demonstrates skills in [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Redux](https://redux.js.org/), [TailwindCSS](https://tailwindcss.com/), and responsive design.

## Production Deploy

The deploy of this project is avalible at [Dictionary App](https://dictionary-app-eta-seven.vercel.app/).

## Table of Contents

- [Dictionary Web Application](#dictionary-web-application)
  - [Description](#description)
  - [Production Deploy](#production-deploy)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Main Features](#main-features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project structure](#project-structure)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [Acknowledgements](#acknowledgements)

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Main Features

- Word definition lookup.
- Audio playback for pronunciation.
- Display of meanings, synonyms and antonyms.
- Responsive design and dark mode.
- Recent search history.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

## Installation

1. [Clone the repository](https://github.com/cristianoronaldo/dictionary-web-app)
2. Browse to the project folder
   ```bash
    cd dictionary-app
   ```
3. Install dependencies
   ```bash
   npm install
   ```

## Usage

1. Start the application
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```project-root/
dictionary-app
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ src
│  ├─ app
│  │  ├─ components
│  │  │  ├─ AudioPlayer.tsx
│  │  │  ├─ FontSelector.tsx
│  │  │  ├─ HistoryModal.tsx
│  │  │  ├─ Layout.tsx
│  │  │  ├─ SearchBar.tsx
│  │  │  ├─ SearchHistory.tsx
│  │  │  ├─ ThemeToggle.tsx
│  │  │  └─ WordDefinition.tsx
│  │  ├─ pages
│  │  ├─ store
│  │  │  ├─ dictionarySlice.ts
│  │  │  ├─ fontSlice.ts
│  │  │  ├─ index.ts
│  │  │  └─ themeSlice.ts
│  │  ├─ test
│  │  │  ├─ FontSelector.test.tsx
│  │  │  └─ WordDefinition.test.tsx
│  │  ├─ utils
│  │  │  └─ helpers.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ setupTest.ts
│  ├─ lib
│  │  └─ redux.ts
│  └─ providers
│     └─ ReduxProvider.tsx
├─ jest.config.js
├─ next-env.d.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json
```

- ` app/`: It contains the main components and the application logic.
- ` components/`: It stores all reusable components.
- ` store/`: Contains the Redux configuration and slices.
- ` lib/`:Includes additional configurations and utilities.
- ` public/`:Publicly accessible static files.
- ` providers/`:Contains the Redux Provider component.

## Testing

To run the application tests:

```bash
npm run test
```

This project uses Jest for unit testing and React Testing Library for component testing. The tests cover:

- Functionality of core components
- Redux logic
- Integration with the dictionary API

## Contribution

Although this project was developed as part of an individual technical test, contributions are welcome. If you wish to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements

- [Free Dictionary API](https://dictionaryapi.dev/) for providing the dictionary data.
- [Tailwind CSS](https://tailwindcss.com/) for the layout system used.
- [Redux Toolkit](https://redux-toolkit.js.org) for simplifying state management.
- [Next.js](https://nextjs.org) for the React framework used.
- [TypeScript](https://www.typescriptlang.org) for the language used.
- [Lucide](https://lucide.dev) for the icons used.
