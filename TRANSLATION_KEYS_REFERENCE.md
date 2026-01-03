# 🔤 Translation Keys Reference

Quick reference for all available translation keys in the `useI18n` composable.

## 📖 How to Use

```vue
<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <h1>{{ t('hero.title') }}</h1>
</template>
```

---

## 🗂️ Available Translation Keys

### **Navigation (`nav.*`)**
```javascript
t('nav.home')              // "Home" | "Accueil" | "الرئيسية"
t('nav.services')          // "Services" | "Services" | "الخدمات"
t('nav.about')             // "About" | "À Propos" | "من نحن"
t('nav.testimonials')      // "Testimonials" | "Témoignages" | "آراء المرضى"
t('nav.contact')           // "Contact" | "Contact" | "اتصل بنا"
t('nav.booking')           // "Booking" | "Réservation" | "حجز موعد"
t('nav.bookAppointment')   // "Book Appointment" | "Prendre Rendez-vous" | "احجز موعد"
```

### **Hero Section (`hero.*`)**
```javascript
t('hero.welcome')          // "Welcome to" | "Bienvenue à" | "مرحباً بك في"
t('hero.title')            // "Pro Dentist"
t('hero.subtitle')         // "Your" | "Votre Sourire" | "ابتسامتك"
t('hero.perfectSmile')     // "Perfect Smile" | "Parfait" | "المثالية"
t('hero.description')      // Full description text
t('hero.cta')              // "Book Appointment" | "Prendre Rendez-vous" | "احجز موعد"
t('hero.ctaSecondary')     // "Learn More" | "En Savoir Plus" | "اعرف المزيد"
```

### **Services (`services.*`)**
```javascript
t('services.title')                  // "Our Services" | "Nos Services" | "خدماتنا"
t('services.subtitle')               // Section subtitle
t('services.generalCheckup')         // "General Checkup" | "Consultation Générale" | "فحص عام"
t('services.generalCheckupDesc')     // Description text
t('services.teethCleaning')          // "Teeth Cleaning" | "Nettoyage Dentaire" | "تنظيف الأسنان"
t('services.teethCleaningDesc')      // Description text
t('services.teethWhitening')         // "Teeth Whitening" | "Blanchiment Dentaire" | "تبييض الأسنان"
t('services.teethWhiteningDesc')     // Description text
t('services.dentalImplants')         // "Dental Implants" | "Implants Dentaires" | "زراعة الأسنان"
t('services.dentalImplantsDesc')     // Description text
t('services.orthodontics')           // "Orthodontics" | "Orthodontie" | "تقويم الأسنان"
t('services.orthodonticsDesc')       // Description text
t('services.rootCanal')              // "Root Canal" | "Traitement de Canal" | "علاج العصب"
t('services.rootCanalDesc')          // Description text
t('services.learnMore')              // "Learn More" | "En Savoir Plus" | "اعرف المزيد"
```

### **Why Choose Us (`whyChooseUs.*`)**
```javascript
t('whyChooseUs.title')               // "Why Choose Us" | "Pourquoi Nous Choisir" | "لماذا تختارنا"
t('whyChooseUs.subtitle')            // Section subtitle
t('whyChooseUs.experiencedTeam')     // "Experienced Team" | "Équipe Expérimentée" | "فريق ذو خبرة"
t('whyChooseUs.experiencedTeamDesc') // Description
t('whyChooseUs.modernTech')          // "Modern Technology" | "Technologie Moderne" | "تقنية حديثة"
t('whyChooseUs.modernTechDesc')      // Description
t('whyChooseUs.comprehensiveCare')   // "Comprehensive Care" | "Soins Complets" | "رعاية شاملة"
t('whyChooseUs.comprehensiveCareDesc') // Description
t('whyChooseUs.comfortableEnv')      // "Comfortable Environment" | "Environnement Confortable" | "بيئة مريحة"
t('whyChooseUs.comfortableEnvDesc')  // Description
t('whyChooseUs.yearsExperience')     // "Years Experience" | "Années d'Expérience" | "سنوات من الخبرة"
t('whyChooseUs.happyPatients')       // "Happy Patients" | "Patients Satisfaits" | "مريض راضٍ"
t('whyChooseUs.successRate')         // "Success Rate" | "Taux de Réussite" | "معدل النجاح"
t('whyChooseUs.modernEquipment')     // "Modern Equipment" | "Équipement Moderne" | "معدات حديثة"
```

### **Testimonials (`testimonials.*`)**
```javascript
t('testimonials.title')              // "Patient Testimonials" | "Témoignages de Patients" | "آراء المرضى"
t('testimonials.subtitle')           // Section subtitle
t('testimonials.testimonial1')       // First testimonial text
t('testimonials.testimonial2')       // Second testimonial text
t('testimonials.testimonial3')       // Third testimonial text
```

### **Booking System (`booking.*`)**

#### Main Labels
```javascript
t('booking.title')                   // "Book an Appointment" | "Réserver un Rendez-vous" | "احجز موعد"
t('booking.subtitle')                // Section subtitle
t('booking.step1Title')              // "Select Service" | "Sélectionner le Service" | "اختر الخدمة"
t('booking.step2Title')              // "Choose Date & Time" | "Choisir Date et Heure" | "اختر التاريخ والوقت"
t('booking.step3Title')              // "Your Information" | "Vos Informations" | "معلوماتك"
```

#### Form Fields
```javascript
t('booking.selectService')           // "Select a service"
t('booking.selectDate')              // "Select date"
t('booking.selectTime')              // "Select time"
t('booking.availableTimes')          // "Available times"
t('booking.firstName')               // "First Name" | "Prénom" | "الاسم الأول"
t('booking.firstNamePlaceholder')    // "Ahmed"
t('booking.lastName')                // "Last Name" | "Nom" | "اسم العائلة"
t('booking.lastNamePlaceholder')     // "Benali"
t('booking.phone')                   // "Phone" | "Téléphone" | "الهاتف"
t('booking.phonePlaceholder')        // "0555 12 34 56"
t('booking.age')                     // "Age" | "Âge" | "العمر"
t('booking.agePlaceholder')          // "25"
t('booking.email')                   // "Email (Optional)" | "Email (Optionnel)" | "البريد الإلكتروني (اختياري)"
t('booking.emailPlaceholder')        // "ahmed@example.com"
t('booking.newPatient')              // "I am a new patient" | "Je suis un nouveau patient" | "أنا مريض جديد"
t('booking.notes')                   // "Additional Notes (Optional)"
t('booking.notesPlaceholder')        // "Additional information..."
```

#### Buttons
```javascript
t('booking.next')                    // "Next" | "Suivant" | "التالي"
t('booking.back')                    // "Back" | "Retour" | "رجوع"
t('booking.submit')                  // "Confirm Appointment" | "Confirmer le Rendez-vous" | "تأكيد الموعد"
t('booking.submitting')              // "Submitting..." | "Envoi en cours..." | "جاري الإرسال..."
```

#### Success Messages
```javascript
t('booking.successTitle')            // "Appointment Confirmed!" | "Rendez-vous Confirmé !" | "تم تأكيد الموعد!"
t('booking.successMessage')          // "Thank you," | "Merci," | "شكراً،"
t('booking.successDetails')          // Success details text
t('booking.successEmail')            // "We'll send a confirmation to"
t('booking.appointmentDetails')      // "Appointment Details:"
t('booking.service')                 // "Service:"
t('booking.dateTime')                // "Date & Time:"
t('booking.at')                      // "at" | "à" | "في"
t('booking.bookAnother')             // "Book Another Appointment"
```

#### Validation
```javascript
t('booking.required')                // "This field is required"
t('booking.invalidEmail')            // "Invalid email"
t('booking.invalidPhone')            // "Invalid phone number"
```

### **Maps Section (`maps.*`)**
```javascript
t('maps.title')                      // "Find Us" | "Trouvez-Nous" | "اعثر علينا"
t('maps.subtitle')                   // "Visit our modern clinic"
t('maps.address')                    // "Address" | "Adresse" | "العنوان"
t('maps.addressLine')                // "123 Main Street, Algiers, Algeria"
t('maps.phone')                      // "Phone" | "Téléphone" | "الهاتف"
t('maps.phoneLine')                  // "+213 555 12 34 56"
t('maps.hours')                      // "Opening Hours" | "Heures d'Ouverture" | "ساعات العمل"
t('maps.weekdays')                   // "Mon - Fri" | "Lun - Ven" | "الإثنين - الجمعة"
t('maps.weekdayHours')               // "9:00 AM - 6:00 PM" | "9h00 - 18h00" | "9:00 - 18:00"
t('maps.saturday')                   // "Saturday" | "Samedi" | "السبت"
t('maps.saturdayHours')              // "9:00 AM - 2:00 PM" | "9h00 - 14h00" | "9:00 - 14:00"
t('maps.sunday')                     // "Sunday" | "Dimanche" | "الأحد"
t('maps.sundayHours')                // "Closed" | "Fermé" | "مغلق"
t('maps.getDirections')              // "Get Directions" | "Obtenir l'Itinéraire" | "احصل على الاتجاهات"
```

### **Footer (`footer.*`)**
```javascript
t('footer.about')                    // "About" | "À Propos" | "من نحن"
t('footer.aboutText')                // Company description
t('footer.quickLinks')               // "Quick Links" | "Liens Rapides" | "روابط سريعة"
t('footer.services')                 // "Services" | "Services" | "الخدمات"
t('footer.ourServices')              // "Our Services" | "Nos Services" | "خدماتنا"
t('footer.contact')                  // "Contact" | "Contact" | "اتصل بنا"
t('footer.contactUs')                // "Contact Us" | "Nous Contacter" | "اتصل بنا"
t('footer.followUs')                 // "Follow Us" | "Suivez-Nous" | "تابعنا"
t('footer.newsletter')               // "Subscribe to Newsletter"
t('footer.newsletterText')           // "Get the latest news and offers"
t('footer.emailPlaceholder')         // "Your email"
t('footer.subscribe')                // "Subscribe" | "S'abonner" | "اشترك"
t('footer.rights')                   // "All rights reserved."
t('footer.madeWith')                 // "Made with" | "Créé avec" | "صُنع بـ"
t('footer.by')                       // "by" | "par" | "بواسطة"
```

### **Miscellaneous**
```javascript
t('backToTop')                       // "Back to Top" | "Retour en Haut" | "العودة للأعلى"
```

---

## 🎯 **Advanced: Dynamic Content**

### **Using with Services Data:**

```vue
<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { getServices } from '../data/services'

const { currentLanguage } = useI18n()
const services = computed(() => getServices(currentLanguage.value))
</script>

<template>
  <div v-for="service in services" :key="service.id">
    <h3>{{ service.name }}</h3>
    <p>{{ service.description }}</p>
  </div>
</template>
```

---

## 🔍 **Checking Current Language**

```vue
<script setup>
import { useI18n } from '../composables/useI18n'

const { currentLanguage, currentLang, isRTL } = useI18n()
</script>

<template>
  <!-- Current language code: "en", "fr", or "ar" -->
  <div>Current: {{ currentLanguage }}</div>
  
  <!-- Current language object: { code, name, dir, flag } -->
  <div>{{ currentLang.name }}</div> <!-- "English", "Français", or "العربية" -->
  
  <!-- Check if RTL -->
  <div :class="isRTL ? 'text-right' : 'text-left'">
    Content
  </div>
</template>
```

---

## 🌐 **Switching Languages Programmatically**

```vue
<script setup>
import { useI18n } from '../composables/useI18n'

const { setLanguage } = useI18n()

function switchToEnglish() {
  setLanguage('en')
}

function switchToFrench() {
  setLanguage('fr')
}

function switchToArabic() {
  setLanguage('ar')
}
</script>
```

---

*Quick Reference - Pro Dentist i18n System*
