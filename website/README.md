# TD Streamline Website

A modern, responsive website for **TD Streamline** - TD Bank's AI-powered banking solution prototype.

## 📁 Project Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # Main stylesheet with TD green color scheme
├── chatbot.css     # Chatbot widget styles
├── chatbot.js      # AI chatbot logic and responses
├── script.js       # Main JavaScript interactions
└── README.md       # This file
```

## 🎨 Design Features

### Color Scheme (TD Green)
- **Primary Green**: `#00A86B` - TD's signature green
- **Dark Green**: `#007C52` - For hover states
- **Light Green**: `#26C485` - Accents
- **Lighter Green**: `#E8F5F0` - Backgrounds

### Sections

1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching intro with animated graphics
3. **Features** - Key benefits of TD Streamline
4. **Smart Loans** - Loan information with interactive calculator
5. **AI Personalization** - Explains the personalization module with statistics
6. **How It Works** - 4-step process visualization
7. **Call-to-Action** - Final push to get started
8. **Footer** - Links and company info
9. **AI Chatbot** - Interactive corner chatbot for customer support

## 🤖 Chatbot Features

The AI chatbot provides instant answers about:
- Personal loans ($1,000-$25,000)
- Loan eligibility and pre-qualification
- Interest rates and terms
- Application process
- Personalized recommendations
- Security and privacy
- Micro-business loans
- General banking questions

**Chatbot Interactions:**
- Click the green chat bubble in the bottom-right corner
- Type your question and hit Enter or click Send
- Close the chat with the X button
- Natural language processing for various question formats

## 📱 Interactive Elements

### Loan Calculator
- Interactive range slider to calculate monthly payments
- Real-time updates based on loan amount
- Shows estimated payment range for 12-month terms

### Responsive Design
- Mobile-optimized layouts
- Tablet and desktop versions
- Touch-friendly buttons and inputs
- Smooth animations and transitions

### Smooth Interactions
- Navigation scroll anchors
- Animated card elements on scroll
- Hover effects on interactive elements
- Notification system for user actions

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in a web browser
2. Navigate through sections using the menu or scroll
3. Click buttons to explore features
4. Use the chatbot for questions (bottom-right corner)

### Local Development
```bash
# No build process needed - it's pure HTML, CSS, and JavaScript!
# Just open index.html in your browser or use a local server:

python -m http.server 8000
# Then visit http://localhost:8000
```

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Features Explained

### TD Streamline System
The website explains TD's AI system that:
- **Automates loan processing** for $1,000-$25,000 personal and micro-business loans
- **Analyzes credit profiles** using AI for instant pre-qualification
- **Personalizes recommendations** based on spending patterns and financial goals
- **Flags high-risk applications** for manual advisor review
- **Dynamically adjusts rates** for different risk profiles
- **Maximizes approvals** while managing defaults

### Key Statistics
- Pre-qualification: **Minutes** (not days)
- Customer uptake on recommendations: **15-20%**
- Interest rate range: **Prime to Prime + 5%**
- Loan amounts: **$1,000 - $25,000**

## 🔧 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --td-green: #00A86B;
    --text-dark: #1A1A1A;
    /* ... more variables */
}
```

### Chatbot Responses
Edit the `responses` object in `chatbot.js` to add new questions or modify answers.

### Loan Calculator
Adjust the slider range and formula in `script.js`:
```javascript
<input type="range" min="1000" max="25000" value="5000" class="slider">
```

## 📞 Support

The website includes multiple contact points:
- Live chatbot support 24/7
- Phone: 1-800-TD-STREAMLINE
- Email: support@tdstreamline.ca
- In-branch consultations

## 🔒 Security Notes

For a production website, you should:
- Implement HTTPS/SSL encryption
- Add proper form validation and backend processing
- Implement CSRF protection
- Set up secure API endpoints for loan applications
- Add user authentication for account management
- Comply with financial regulations and privacy laws

## 📈 Future Enhancements

Potential additions:
- User account login/dashboard
- Real loan application backend
- Integration with TD's banking systems
- Advanced AI recommendation engine
- Mobile app version
- Multi-language support
- Accessibility improvements (WCAG AA compliance)

## 📄 License

This is a prototype website for educational purposes. TD Streamline is a fictional concept for demonstration.

---

**Created**: February 2026
**Version**: 1.0
**Status**: Prototype
