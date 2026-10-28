# AIIDL Technologies — Website Design Challenge

## 1. Project Overview

This project is a responsive, multi-page website developed as part of the AIIDL Technologies Private Limited frontend/UI/UX website design challenge.

The website presents digital services through a clean interface, modern visual design, interactive elements, and a user-friendly contact form. The main objective is to create a professional online experience that is easy to navigate on desktop and mobile devices.

## 2. Pages and Features

### Home Page
- Hero section with a headline and primary call-to-action button.
- Three service summary cards.
- Two sample projects clearly labelled as concept projects.
- Closing call-to-action section.
- Shared navigation bar and footer.

### Service Detail Page
- Overview of custom software development.
- Information about the intended audience and their needs.
- List of service deliverables.
- Three-step development process.
- Three interactive FAQs.
- Call-to-action linking to the contact page.

### Contact Page
- Name field.
- Email address field.
- Project message field.
- Required-field validation.
- Whitespace validation for name and message.
- Email format validation.
- Individual error messages for each field.
- Entered values are retained when validation errors occur.
- Success message after valid form submission.

**Form limitation:** This is a frontend-only demonstration. No message is sent or stored. After successful validation, the form displays the required message: "Demo only - no message was sent."

## 3. Technology Stack

- **React:** Building reusable UI components.
- **Vite:** Development server and production build.
- **JavaScript:** Application logic and form validation.
- **React Router:** Navigation between pages.
- **Tailwind CSS:** Responsive styling and layout.
- **Lucide React:** Icons.

## 4. Installation and Setup

### Prerequisites
- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## 5. Design Decisions

- Used a clean and modern visual style to keep the interface professional.
- Used indigo accents to establish a consistent visual identity.
- Applied clear typography, spacing, and visual hierarchy to improve readability.
- Used reusable React components for consistent navigation, footer, service cards, and call-to-action sections.
- Designed responsive layouts for desktop and mobile screens.
- Used clear buttons and calls to action to guide users through the website.
- Labelled sample projects as concept projects rather than presenting them as real client work.
- Displayed field-specific validation messages to help users correct form errors.

## 6. Accessibility Considerations

- Used labels associated with form fields.
- Included visible keyboard focus styles for interactive elements.
- Displayed validation errors near their corresponding fields.
- Used appropriate ARIA attributes for form validation and status messages.
- Included keyboard interaction support for the FAQ section.

## 7. AI Disclosure

AI assistance was used during parts of the planning, implementation, and documentation process. The generated suggestions and code were reviewed and adapted for this project.
Tools Used - Chatgpt, claude


## 8. Screenshots

### Home Page — Desktop View

![Home Page Desktop Screenshot](../screenshots/home-desktop.png)

### Home Page — Mobile View

![Home Page Mobile Screenshot](../screenshots/home-mobile.png)

## 9.Time Spent

Approximately 3 hours.

## 9.Incomplete Items

- Contact form backend integration is not included.
- The contact form does not send or store messages.


## 10. Project Limitations

- The contact form performs client-side validation only.
- No backend integration is included for contact submissions.
- The sample projects are illustrative concept projects.
- No messages are sent or stored by the contact form.

## 11. Conclusion

This project demonstrates a responsive multi-page website with reusable React components, service information, interactive FAQs, and client-side contact form validation. It focuses on visual clarity, usability, responsive design, and a straightforward user experience.
