# Headphones Website

A responsive website for a headphones company built with HTML and CSS.

## Project Description

This project is a fully responsive website designed for a headphones company. The website is built using only HTML and CSS, with no external libraries or JavaScript frameworks. It features a modern design that adapts seamlessly across different devices.

## Features

- **Fully Responsive Design**: Mobile-first approach with responsive breakpoints
- **Clean HTML/CSS**: No external CSS frameworks or JavaScript
- **Optimized Layout**: Content centered with maximum width constraints
- **Interactive Elements**: Hover and active states for better user experience

## Technical Specifications

### Responsive Design
- **Mobile Breakpoint**: Switches to mobile version at **480px or less**
- **Content Width**: Maximum width of **1000px**, centered on the page

### Styling Details

#### Links
- **Hover/Active State**: `#FF6565`
- Applied to navigation links and interactive text elements

#### Buttons
- **Hover/Active State**: `opacity: 0.9`
- Smooth transitions for better user experience

## Browser Compatibility

The website is compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Project Structure

```
headphones/
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── images/             # Image assets
└── README.md           # Project documentation
```

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd headphones
   ```

2. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## Development

### CSS Architecture

The CSS follows a structured approach:
- Mobile-first responsive design
- Media queries for larger screens
- Consistent spacing and typography
- Reusable component classes

### Media Query Breakpoint

```css
/* Mobile styles (default) */

/* Desktop styles */
@media (min-width: 481px) {
  /* Styles for screens larger than 480px */
}
```

## Design Guidelines

- **Maximum Content Width**: 1000px
- **Centering**: `margin: 0 auto;`
- **Link Hover Color**: #FF6565
- **Button Hover Opacity**: 0.9
- **Mobile Breakpoint**: 480px

## Author

ALX Web Development Project

## License

This project is part of the ALX Software Engineering program.
