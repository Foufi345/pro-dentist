# 🦷 Pro Dentist - Premium Dental Website Template

A modern, high-end dental practice website template built with **Vue.js (Composition API)** and **Tailwind CSS**. Featuring a warm earth-tone design aesthetic and a complete 3-step appointment booking system.

![Pro Dentist Template](src/assets/logo.png)

## ✨ Features

### 🎨 Design
- **Modern Earth Tones Color Palette**: Warm beige backgrounds, dark taupe text, and muted gold accents
- **Premium Typography**: Inter and DM Sans fonts for a sophisticated look
- **Responsive Design**: Fully mobile-optimized with Tailwind's responsive utilities
- **Smooth Animations**: Micro-interactions and hover effects for enhanced UX
- **Minimalist Logo**: AI-generated professional dental branding

### 📱 Sections
1. **Sticky Navigation**: Smooth scroll to sections with mobile hamburger menu
2. **Hero Section**: Eye-catching headline with CTA and trust badges
3. **Services Grid**: 6 dental services with icons, descriptions, and pricing
4. **Why Choose Us**: Feature highlights with statistics
5. **Testimonials**: Patient reviews with 5-star ratings
6. **Booking System**: Multi-step appointment form (core feature)
7. **Footer**: Contact info, social links, and office hours

### ⚙️ Core Feature: Booking System
A sophisticated 3-step appointment booking flow:

**Step 1: Service Selection**
- Radio button cards for service types
- Visual selection feedback
- Services: Checkup, Cleaning, Whitening, Consultation

**Step 2: Date & Time**
- Date picker with minimum next-day validation
- Time slot dropdown
- Visual available slots display

**Step 3: Patient Information**
- Full name, phone, email inputs
- Checkboxes for new patient and insurance status
- Optional notes textarea
- Form validation

**Success State**
- Confirmation message with patient details
- Option to book another appointment

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server
The website will be available at `http://localhost:5173/`

## 🔧 Configuration

### Google Sheets Integration

The booking system is set up to send data to a Google Sheets webhook. To enable this:

1. **Create a Google Sheet** for storing appointments
2. **Set up Apps Script**:
   - Go to Extensions → Apps Script
   - Create a `doPost` function to receive booking data
   - Deploy as web app
3. **Update the webhook URL**:
   - Open `src/components/BookingSystem.vue`
   - Find line ~270: `const GOOGLE_SHEETS_WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE'`
   - Replace with your actual webhook URL
   - Uncomment the fetch API call (lines 273-281)

### Example Apps Script Code

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.email,
    data.service,
    data.date,
    data.time,
    data.isNewPatient,
    data.hasInsurance,
    data.notes
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'warm-beige': '#fafaf9',
  'stone-earth': '#f5f5f4',
  'muted-gold': '#78716c',
  'dark-taupe': '#44403c',
  'bronze': '#57534e',
}
```

### Services
Modify the services array in `src/components/ServicesGrid.vue`:

```javascript
const services = ref([
  {
    id: 1,
    title: 'Your Service',
    description: 'Service description',
    price: '99',
    icon: `<svg>...</svg>`
  }
])
```

### Testimonials
Update patient reviews in `src/components/TestimonialsSection.vue`

### Contact Information
Edit footer details in `src/components/FooterSection.vue`

## 📁 Project Structure

```
pro-dentist/
├── src/
│   ├── assets/
│   │   ├── logo-pro-dentist.png           # AI-generated logo
│   │   └── main.css           # Tailwind + custom styles
│   ├── components/
│   │   ├── NavigationBar.vue  # Sticky header
│   │   ├── HeroSection.vue    # Main hero
│   │   ├── ServicesGrid.vue   # Services cards
│   │   ├── WhyChooseUs.vue    # Features section
│   │   ├── TestimonialsSection.vue
│   │   ├── BookingSystem.vue  # ⭐ Core feature
│   │   └── FooterSection.vue
│   ├── App.vue                # Main component
│   └── main.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Technology Stack

- **Framework**: Vue.js 3 (Composition API)
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Inter, DM Sans)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Best Practices

- Semantic HTML5 elements
- Proper heading hierarchy
- Meta descriptions ready
- Unique IDs for all interactive elements
- Optimized performance

## 📝 License

This is a template for commercial and personal use.

## 🤝 Support

For issues or questions:
- Check the booking system integration guide above
- Review component documentation in each `.vue` file
- Ensure Tailwind CSS v3 is installed (not v4)

## 🌟 Key Features Summary

✅ Premium minimalist design  
✅ Warm, calming color palette  
✅ Fully responsive layout  
✅ 3-step booking system  
✅ Google Sheets integration ready  
✅ Component-based architecture  
✅ Easy customization  
✅ Production-ready code  

---

**Built with ❤️ By Miss Yahiaoui for modern dental practices**
