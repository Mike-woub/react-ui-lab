# 🚀 React UI Lab

A personal lab of beginner-to-intermediate React components built with **Vite** for fast development and modern tooling. This project showcases interactive UI elements and core React concepts like state, props, conditional rendering, and effects.

## 🧩 Featured Components

### 🔍 Hidden Search Bar
A sleek search input that reveals itself on interaction.

- Toggle visibility with a button
- Controlled input using `useState`
- Smooth transitions with CSS
- Ideal for minimalist UIs

### 🍽️ Meals (`Meals.jsx`)
Displays a list of meals fetched from an API or mock data.

- Uses `useEffect` for data fetching
- Maps over meal objects to render cards
- Includes loading and error states
- Responsive layout with Flexbox

### 💬 Testimonials
A carousel-style component for showcasing user feedback.

- Dynamic rendering from an array of testimonials
- Optional auto-slide or manual navigation
- Styled with Flexbox and transitions

### 📂 Accordion
Expandable sections for FAQs or grouped content.

- Toggle open/close with `useState`
- Conditional rendering for content
- Clean layout with icons and transitions

### 🎨 Toggle Background Color
Simple theme switcher for light/dark or custom backgrounds.

- Uses `useState` to track theme
- Applies dynamic class or inline styles
- Can be extended to support multiple themes

## ⚙️ Tech Stack

- React 18+ (Hooks, JSX, functional components)
- Vite for fast refresh and build optimization
- CSS Modules or Tailwind CSS
- ESLint + Prettier for code quality

### 📝 Form Validation Component

A responsive form with real-time validation logic for user registration. Built using React hooks and styled with dynamic border colors based on input validity.

**Features**
- Controlled inputs for username, email, password, and confirm password
- Real-time validation with error messages
- Dynamic border color feedback (green for valid, red for invalid)
- Prevents submission unless all fields are valid
- Easily extendable for backend integration or advanced validation

**Validation Rules**
- Username must be at least 4 characters
- Email must include an `@` symbol
- Password must be at least 8 characters
- Confirm Password must match Password

**Tech Stack**
- React (`useState`)
- CSS for styling and visual feedback
- Vite for fast refresh and build optimization

**Component File**


## 📦 Getting Started

```bash
git clone https://github.com/Mike-woub/react-ui-lab.git
cd react-ui-lab
npm install
npm run dev

