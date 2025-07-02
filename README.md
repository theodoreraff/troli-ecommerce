# 🛍️ Troli – The Ultimate Playground for Test Automation Engineers

**Troli** is a beautifully crafted mock e-commerce platform built with one goal in mind: to put your test automation skills to the ultimate challenge. From smooth cart interactions to complex checkout edge cases, Troli replicates real-world conditions and offers QA engineers a reliable, customizable playground to automate, experiment, and grow.

---

## 🚀 Why Troli?

In the world of e-commerce, every click counts.

Troli simulates mission-critical user journeys found in real shops—so you can validate, stress test, and automate like a pro. Whether you're practicing end-to-end testing, exploring edge cases, or building a portfolio that speaks for itself—Troli is your launchpad.

---

## 🔑 Features Built for QA Excellence

- 🖥️ **Realistic UI**  
  Inspired by Shopify—clean cards, smooth transitions, and a responsive layout.

- 🧪 **Data-test-friendly**  
  Every critical element includes `data-testid` attributes for precise automation.

- 🛒 **Functional Cart**  
  Add, remove, update quantity—test all states, even the weird ones.

- 🧮 **Edge Cases Ready**  
  Try 0 quantity, large numbers, or remove items mid-checkout—no problem.

- 💳 **Full Checkout Flow**  
  Includes form validation, mock payment steps, and real-time feedback.

- 🧠 **Zustand-powered logic**  
  Simple, performant, and testable state management.

---

## 🛠️ Tech Stack

- ⚛️ React + Vite
- 🧑‍💻 TypeScript
- 🧠 Zustand
- 🎨 Tailwind CSS
- 🧱 shadcn/ui (modern, accessible UI components)
- ⏱️ Artificial delays to simulate real-world network conditions

---

## 🧪 Built to Be Broken (and Tested)

Troli isn’t just pretty—it’s made to be **pushed to the limits**. Ideal for practicing:

- ✅ Functional testing
- 🔁 State testing (cart logic, totals, boundaries)
- 🎯 End-to-end flows (homepage → product → cart → checkout)
- 🔄 Concurrency (rapid clicks, quantity spam)
- 🚦 Performance testing (Lighthouse / k6 optional)

---

## 🧩 Project Structure

```bash
src/
├── components/   # UI building blocks
├── pages/        # Home, Product, Cart, Checkout
├── store/        # Zustand logic
├── utils/        # Helpers & formatters
├── data/         # Mock product data
└── styles/       # Tailwind and custom CSS

▶️ Try It Locally

Clone the repository:

git clone https://github.com/your-username/troli.git
cd troli
npm install
npm run dev
```
---
Then open your browser and visit: http://localhost:5173
🔬 Sample Tests You Can Try

    ✅ Add items to cart, increase quantity, remove → verify totals

    🚫 Add 0 quantity, click checkout → expect validation error

    ⚡ Spam the "+" button rapidly → test state consistency

    🔄 Remove an item during checkout → observe UI behavior

    🎭 Use Playwright/Selenium to test navigation, inputs, and UX feedback

💬 Why I Built This

    "I wanted a visually rich, real-world inspired app to practice advanced testing techniques. Troli helps me push automation tools to their limits, and lets me showcase real QA thinking."

🖼️ Screenshots

Coming soon!
📜 License

This project is licensed under the MIT License – see the LICENSE file for details.
Free to use, fork, and improve.
📇 Credits

Made with ❤️ by @theodores
Built for testers, by a tester.
