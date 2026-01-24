import { ref, computed } from 'vue'

// Supported languages
const LANGUAGES = {
      en: {
            code: 'en',
            name: 'English',
            dir: 'ltr',
            flag: '🇬🇧'
      },
      fr: {
            code: 'fr',
            name: 'Français',
            dir: 'ltr',
            flag: '🇫🇷'
      },
      ar: {
            code: 'ar',
            name: 'العربية',
            dir: 'rtl',
            flag: '🇩🇿'
      }
}

// Current language state (reactive and persistent) - Default to English
const currentLanguage = ref(localStorage.getItem('preferredLanguage') || 'en')

// Translations
const translations = {
      en: {
            // Navigation
            nav: {
                  home: 'Home',
                  services: 'Services',
                  about: 'About',
                  testimonials: 'Testimonials',
                  contact: 'Contact',
                  booking: 'Booking',
                  bookAppointment: 'Book Appointment'
            },

            // Hero Section
            hero: {
                  welcome: 'Welcome to',
                  title: 'Pro Dentist',
                  subtitle: 'Your',
                  perfectSmile: 'Perfect Smile',
                  description: 'Premium dental care for you and your family. Our team of experts is committed to providing the best service in a comfortable and modern environment.',
                  cta: 'Book Appointment',
                  ctaSecondary: 'Learn More'
            },

            // Services
            services: {
                  title: 'Our Services',
                  subtitle: 'Comprehensive dental care tailored to your needs',
                  generalCheckup: 'General Checkup',
                  generalCheckupDesc: 'Routine examinations and preventive consultations to maintain your oral health.',
                  teethCleaning: 'Teeth Cleaning',
                  teethCleaningDesc: 'Professional cleaning and scaling for healthy, sparkling teeth.',
                  teethWhitening: 'Teeth Whitening',
                  teethWhiteningDesc: 'Safe and effective whitening treatments for a brighter smile.',
                  dentalImplants: 'Dental Implants',
                  dentalImplantsDesc: 'Permanent solutions to replace missing teeth with natural-looking results.',
                  orthodontics: 'Orthodontics',
                  orthodonticsDesc: 'Braces and aligners to correct alignment and improve your smile.',
                  rootCanal: 'Root Canal',
                  rootCanalDesc: 'Endodontic care to save infected teeth and relieve pain.',
                  learnMore: 'Learn More'
            },

            // Why Choose Us
            whyChooseUs: {
                  title: 'Why Choose Us',
                  subtitle: 'Excellence in dental care, one smile at a time',
                  experiencedTeam: 'Experienced Team',
                  experiencedTeamDesc: 'Our highly qualified dentists provide expert care with precision and attention.',
                  modernTech: 'Modern Technology',
                  modernTechDesc: 'State-of-the-art equipment for accurate diagnostics and comfortable treatments.',
                  comprehensiveCare: 'Comprehensive Care',
                  comprehensiveCareDesc: 'From prevention to cosmetics, we cover all your dental needs.',
                  comfortableEnv: 'Comfortable Environment',
                  comfortableEnvDesc: 'A modern and welcoming clinic where your comfort is our priority.',
                  yearsExperience: 'Years Experience',
                  happyPatients: 'Happy Patients',
                  successRate: 'Success Rate',
                  modernEquipment: 'Modern Equipment'
            },

            // Testimonials
            testimonials: {
                  title: 'Patient Testimonials',
                  subtitle: 'What our satisfied patients say',
                  testimonial1: 'Exceptional service! The team was professional and my smile has never looked better.',
                  testimonial2: 'Best dental experience I\'ve ever had. Friendly staff and very comfortable environment.',
                  testimonial3: 'Highly recommended! They transformed my smile and my confidence.'
            },

            // Booking System
            booking: {
                  title: 'Book an Appointment',
                  subtitle: 'Schedule your visit in three simple steps',
                  step1Title: 'Select Service',
                  step2Title: 'Choose Date & Time',
                  step3Title: 'Your Information',

                  // Services
                  selectService: 'Select a service',

                  // Date & Time
                  selectDate: 'Select date',
                  selectTime: 'Select time',
                  availableTimes: 'Available times',

                  // Personal Info
                  firstName: 'First Name',
                  firstNamePlaceholder: 'Ahmed',
                  lastName: 'Last Name',
                  lastNamePlaceholder: 'Benali',
                  phone: 'Phone',
                  phonePlaceholder: '0555 12 34 56',
                  age: 'Age',
                  agePlaceholder: '25',
                  email: 'Email (Optional)',
                  emailPlaceholder: 'ahmed@example.com',
                  newPatient: 'I am a new patient',
                  notes: 'Additional Notes (Optional)',
                  notesPlaceholder: 'Additional information...',

                  // Buttons
                  next: 'Next',
                  back: 'Back',
                  submit: 'Confirm Appointment',
                  submitting: 'Submitting...',

                  // Success Message
                  successTitle: 'Appointment Confirmed!',
                  successMessage: 'Thank you,',
                  successDetails: 'Your appointment has been booked successfully. We look forward to seeing you!',
                  successEmail: 'We\'ll send a confirmation to',
                  appointmentDetails: 'Appointment Details:',
                  service: 'Service:',
                  dateTime: 'Date & Time:',
                  at: 'at',
                  bookAnother: 'Book Another Appointment',

                  // Validation
                  required: 'This field is required',
                  invalidEmail: 'Invalid email',
                  invalidPhone: 'Invalid phone number',
                  words: 'words'
            },

            // Maps Section
            maps: {
                  title: 'Find Us',
                  subtitle: 'Visit our modern clinic',
                  address: 'Address',
                  addressLine: '123 Main Street, Algiers, Algeria',
                  phone: 'Phone',
                  phoneLine: '+213 555 12 34 56',
                  hours: 'Opening Hours',
                  weekdays: 'Mon - Fri',
                  weekdayHours: '9:00 AM - 6:00 PM',
                  saturday: 'Saturday',
                  saturdayHours: '9:00 AM - 2:00 PM',
                  sunday: 'Sunday',
                  sundayHours: 'Closed',
                  getDirections: 'Get Directions'
            },

            // Footer
            footer: {
                  about: 'About',
                  aboutText: 'Pro Dentist offers exceptional dental care with the latest technology and a dedicated team of professionals.',
                  quickLinks: 'Quick Links',
                  services: 'Services',
                  ourServices: 'Our Services',
                  contact: 'Contact',
                  contactUs: 'Contact Us',
                  followUs: 'Follow Us',
                  newsletter: 'Subscribe to Newsletter',
                  newsletterText: 'Get the latest news and offers',
                  emailPlaceholder: 'Your email',
                  subscribe: 'Subscribe',
                  rights: 'All rights reserved.',
                  madeWith: 'Made with',
                  by: 'by'
            },

            // Back to Top
            backToTop: 'Back to Top'
      },

      fr: {
            // Navigation
            nav: {
                  home: 'Accueil',
                  services: 'Services',
                  about: 'À Propos',
                  testimonials: 'Témoignages',
                  contact: 'Contact',
                  booking: 'Réservation',
                  bookAppointment: 'Prendre Rendez-vous'
            },

            // Hero Section
            hero: {
                  welcome: 'Bienvenue à',
                  title: 'Pro Dentist',
                  subtitle: 'Votre Sourire',
                  perfectSmile: 'Parfait',
                  description: 'Des soins dentaires de qualité supérieure pour vous et votre famille. Notre équipe d\'experts s\'engage à vous offrir le meilleur service dans un environnement confortable et moderne.',
                  cta: 'Prendre Rendez-vous',
                  ctaSecondary: 'En Savoir Plus'
            },

            // Services
            services: {
                  title: 'Nos Services',
                  subtitle: 'Des soins dentaires complets adaptés à vos besoins',
                  generalCheckup: 'Consultation Générale',
                  generalCheckupDesc: 'Examens de routine et consultations préventives pour maintenir votre santé bucco-dentaire.',
                  teethCleaning: 'Nettoyage Dentaire',
                  teethCleaningDesc: 'Nettoyage professionnel et détartrage pour des dents saines et éclatantes.',
                  teethWhitening: 'Blanchiment Dentaire',
                  teethWhiteningDesc: 'Des traitements de blanchiment sûrs et efficaces pour un sourire plus éclatant.',
                  dentalImplants: 'Implants Dentaires',
                  dentalImplantsDesc: 'Solutions permanentes pour remplacer les dents manquantes avec des résultats naturels.',
                  orthodontics: 'Orthodontie',
                  orthodonticsDesc: 'Appareils dentaires et aligneurs pour corriger l\'alignement et améliorer votre sourire.',
                  rootCanal: 'Traitement de Canal',
                  rootCanalDesc: 'Soins endodontiques pour sauver les dents infectées et soulager la douleur.',
                  learnMore: 'En Savoir Plus'
            },

            // Why Choose Us
            whyChooseUs: {
                  title: 'Pourquoi Nous Choisir',
                  subtitle: 'L\'excellence en soins dentaires, un sourire à la fois',
                  experiencedTeam: 'Équipe Expérimentée',
                  experiencedTeamDesc: 'Nos dentistes hautement qualifiés offrent des soins experts avec précision et attention.',
                  modernTech: 'Technologie Moderne',
                  modernTechDesc: 'Équipements de pointe pour des diagnostics précis et des traitements confortables.',
                  comprehensiveCare: 'Soins Complets',
                  comprehensiveCareDesc: 'De la prévention à la cosmétique, nous couvrons tous vos besoins dentaires.',
                  comfortableEnv: 'Environnement Confortable',
                  comfortableEnvDesc: 'Un cabinet moderne et accueillant où votre confort est notre priorité.',
                  yearsExperience: 'Années d\'Expérience',
                  happyPatients: 'Patients Satisfaits',
                  successRate: 'Taux de Réussite',
                  modernEquipment: 'Équipement Moderne'
            },

            // Testimonials
            testimonials: {
                  title: 'Témoignages de Patients',
                  subtitle: 'Ce que disent nos patients satisfaits',
                  testimonial1: 'Service exceptionnel ! L\'équipe était professionnelle et mon sourire n\'a jamais été aussi beau.',
                  testimonial2: 'Meilleure expérience dentaire que j\'ai jamais eue. Personnel amical et environnement très confortable.',
                  testimonial3: 'Hautement recommandé ! Ils ont transformé mon sourire et ma confiance en moi.'
            },

            // Booking System
            booking: {
                  title: 'Réserver un Rendez-vous',
                  subtitle: 'Planifiez votre visite en trois étapes simples',
                  step1Title: 'Sélectionner le Service',
                  step2Title: 'Choisir Date et Heure',
                  step3Title: 'Vos Informations',

                  // Services
                  selectService: 'Sélectionnez un service',

                  // Date & Time
                  selectDate: 'Sélectionnez la date',
                  selectTime: 'Sélectionnez l\'heure',
                  availableTimes: 'Heures disponibles',

                  // Personal Info
                  firstName: 'Prénom',
                  firstNamePlaceholder: 'Ahmed',
                  lastName: 'Nom',
                  lastNamePlaceholder: 'Benali',
                  phone: 'Téléphone',
                  phonePlaceholder: '0555 12 34 56',
                  age: 'Âge',
                  agePlaceholder: '25',
                  email: 'Email (Optionnel)',
                  emailPlaceholder: 'ahmed@example.com',
                  newPatient: 'Je suis un nouveau patient',
                  notes: 'Notes Additionnelles (Optionnel)',
                  notesPlaceholder: 'Informations supplémentaires...',

                  // Buttons
                  next: 'Suivant',
                  back: 'Retour',
                  submit: 'Confirmer le Rendez-vous',
                  submitting: 'Envoi en cours...',

                  // Success Message
                  successTitle: 'Rendez-vous Confirmé !',
                  successMessage: 'Merci,',
                  successDetails: 'Votre rendez-vous a été réservé avec succès. Nous avons hâte de vous voir !',
                  successEmail: 'Nous enverrons une confirmation à',
                  appointmentDetails: 'Détails du rendez-vous :',
                  service: 'Service :',
                  dateTime: 'Date & Heure :',
                  at: 'à',
                  bookAnother: 'Réserver un Autre Rendez-vous',

                  // Validation
                  required: 'Ce champ est requis',
                  invalidEmail: 'Email invalide',
                  invalidPhone: 'Numéro de téléphone invalide',
                  words: 'mots'
            },

            // Maps Section
            maps: {
                  title: 'Trouvez-Nous',
                  subtitle: 'Visitez notre cabinet moderne',
                  address: 'Adresse',
                  addressLine: '123 Rue Principale, Alger, Algérie',
                  phone: 'Téléphone',
                  phoneLine: '+213 555 12 34 56',
                  hours: 'Heures d\'Ouverture',
                  weekdays: 'Lun - Ven',
                  weekdayHours: '9h00 - 18h00',
                  saturday: 'Samedi',
                  saturdayHours: '9h00 - 14h00',
                  sunday: 'Dimanche',
                  sundayHours: 'Fermé',
                  getDirections: 'Obtenir l\'Itinéraire'
            },

            // Footer
            footer: {
                  about: 'À Propos',
                  aboutText: 'Pro Dentist offre des soins dentaires exceptionnels avec les dernières technologies et une équipe dévouée de professionnels.',
                  quickLinks: 'Liens Rapides',
                  services: 'Services',
                  ourServices: 'Nos Services',
                  contact: 'Contact',
                  contactUs: 'Nous Contacter',
                  followUs: 'Suivez-Nous',
                  newsletter: 'S\'abonner à la Newsletter',
                  newsletterText: 'Recevez les dernières nouvelles et offres',
                  emailPlaceholder: 'Votre email',
                  subscribe: 'S\'abonner',
                  rights: 'Tous droits réservés.',
                  madeWith: 'Créé avec',
                  by: 'par'
            },

            // Back to Top
            backToTop: 'Retour en Haut'
      },

      ar: {
            // Navigation
            nav: {
                  home: 'الرئيسية',
                  services: 'الخدمات',
                  about: 'من نحن',
                  testimonials: 'آراء المرضى',
                  contact: 'اتصل بنا',
                  booking: 'حجز موعد',
                  bookAppointment: 'احجز موعد'
            },

            // Hero Section
            hero: {
                  welcome: 'مرحباً بك في',
                  title: 'برو دنتست',
                  subtitle: 'ابتسامتك',
                  perfectSmile: 'المثالية',
                  description: 'رعاية أسنان عالية الجودة لك ولعائلتك. فريقنا من الخبراء ملتزم بتقديم أفضل خدمة في بيئة مريحة وحديثة.',
                  cta: 'احجز موعد',
                  ctaSecondary: 'اعرف المزيد'
            },

            // Services
            services: {
                  title: 'خدماتنا',
                  subtitle: 'رعاية شاملة للأسنان مصممة لتلبية احتياجاتك',
                  generalCheckup: 'فحص عام',
                  generalCheckupDesc: 'فحوصات روتينية واستشارات وقائية للحفاظ على صحة فمك.',
                  teethCleaning: 'تنظيف الأسنان',
                  teethCleaningDesc: 'تنظيف احترافي وإزالة الجير للحصول على أسنان صحية ولامعة.',
                  teethWhitening: 'تبييض الأسنان',
                  teethWhiteningDesc: 'علاجات تبييض آمنة وفعالة للحصول على ابتسامة أكثر إشراقاً.',
                  dentalImplants: 'زراعة الأسنان',
                  dentalImplantsDesc: 'حلول دائمة لاستبدال الأسنان المفقودة بنتائج طبيعية.',
                  orthodontics: 'تقويم الأسنان',
                  orthodonticsDesc: 'أجهزة تقويم وقوالب شفافة لتصحيح المحاذاة وتحسين ابتسامتك.',
                  rootCanal: 'علاج العصب',
                  rootCanalDesc: 'رعاية اللب لإنقاذ الأسنان المصابة وتخفيف الألم.',
                  learnMore: 'اعرف المزيد'
            },

            // Why Choose Us
            whyChooseUs: {
                  title: 'لماذا تختارنا',
                  subtitle: 'التميز في رعاية الأسنان، ابتسامة واحدة في كل مرة',
                  experiencedTeam: 'فريق ذو خبرة',
                  experiencedTeamDesc: 'أطباء الأسنان المؤهلون لدينا يقدمون رعاية متخصصة بدقة واهتمام.',
                  modernTech: 'تقنية حديثة',
                  modernTechDesc: 'معدات متطورة لتشخيص دقيق وعلاجات مريحة.',
                  comprehensiveCare: 'رعاية شاملة',
                  comprehensiveCareDesc: 'من الوقاية إلى التجميل، نغطي جميع احتياجات أسنانك.',
                  comfortableEnv: 'بيئة مريحة',
                  comfortableEnvDesc: 'عيادة حديثة ومرحبة حيث راحتك هي أولويتنا.',
                  yearsExperience: 'سنوات من الخبرة',
                  happyPatients: 'مريض راضٍ',
                  successRate: 'معدل النجاح',
                  modernEquipment: 'معدات حديثة'
            },

            // Testimonials
            testimonials: {
                  title: 'آراء المرضى',
                  subtitle: 'ما يقوله مرضانا السعداء',
                  testimonial1: 'خدمة استثنائية! كان الفريق محترفاً ولم تكن ابتسامتي أفضل من أي وقت مضى.',
                  testimonial2: 'أفضل تجربة أسنان مررت بها على الإطلاق. موظفون ودودون وبيئة مريحة للغاية.',
                  testimonial3: 'موصى به بشدة! لقد حولوا ابتسامتي وثقتي بنفسي.'
            },

            // Booking System
            booking: {
                  title: 'احجز موعد',
                  subtitle: 'حدد موعد زيارتك في ثلاث خطوات بسيطة',
                  step1Title: 'اختر الخدمة',
                  step2Title: 'اختر التاريخ والوقت',
                  step3Title: 'معلوماتك',

                  // Services
                  selectService: 'اختر خدمة',

                  // Date & Time
                  selectDate: 'اختر التاريخ',
                  selectTime: 'اختر الوقت',
                  availableTimes: 'الأوقات المتاحة',

                  // Personal Info
                  firstName: 'الاسم الأول',
                  firstNamePlaceholder: 'أحمد',
                  lastName: 'اسم العائلة',
                  lastNamePlaceholder: 'بن علي',
                  phone: 'الهاتف',
                  phonePlaceholder: '0555 12 34 56',
                  age: 'العمر',
                  agePlaceholder: '25',
                  email: 'البريد الإلكتروني (اختياري)',
                  emailPlaceholder: 'ahmed@example.com',
                  newPatient: 'أنا مريض جديد',
                  notes: 'ملاحظات إضافية (اختياري)',
                  notesPlaceholder: 'معلومات إضافية...',

                  // Buttons
                  next: 'التالي',
                  back: 'رجوع',
                  submit: 'تأكيد الموعد',
                  submitting: 'جاري الإرسال...',

                  // Success Message
                  successTitle: 'تم تأكيد الموعد!',
                  successMessage: 'شكراً،',
                  successDetails: 'تم حجز موعدك بنجاح. نحن متحمسون لرؤيتك!',
                  successEmail: 'سنرسل تأكيداً إلى',
                  appointmentDetails: 'تفاصيل الموعد:',
                  service: 'الخدمة:',
                  dateTime: 'التاريخ والوقت:',
                  at: 'في',
                  bookAnother: 'احجز موعد آخر',

                  // Validation
                  required: 'هذا الحقل مطلوب',
                  invalidEmail: 'البريد الإلكتروني غير صالح',
                  invalidPhone: 'رقم الهاتف غير صالح',
                  words: 'كلمات'
            },

            // Maps Section
            maps: {
                  title: 'اعثر علينا',
                  subtitle: 'قم بزيارة عيادتنا الحديثة',
                  address: 'العنوان',
                  addressLine: '123 الشارع الرئيسي، الجزائر العاصمة، الجزائر',
                  phone: 'الهاتف',
                  phoneLine: '+213 555 12 34 56',
                  hours: 'ساعات العمل',
                  weekdays: 'الإثنين - الجمعة',
                  weekdayHours: '9:00 - 18:00',
                  saturday: 'السبت',
                  saturdayHours: '9:00 - 14:00',
                  sunday: 'الأحد',
                  sundayHours: 'مغلق',
                  getDirections: 'احصل على الاتجاهات'
            },

            // Footer
            footer: {
                  about: 'من نحن',
                  aboutText: 'برو دنتست يقدم رعاية أسنان استثنائية مع أحدث التقنيات وفريق متفانٍ من المحترفين.',
                  quickLinks: 'روابط سريعة',
                  services: 'الخدمات',
                  ourServices: 'خدماتنا',
                  contact: 'اتصل بنا',
                  contactUs: 'اتصل بنا',
                  followUs: 'تابعنا',
                  newsletter: 'اشترك في النشرة الإخبارية',
                  newsletterText: 'احصل على آخر الأخبار والعروض',
                  emailPlaceholder: 'بريدك الإلكتروني',
                  subscribe: 'اشترك',
                  rights: 'جميع الحقوق محفوظة.',
                  madeWith: 'صُنع بـ',
                  by: 'بواسطة'
            },

            // Back to Top
            backToTop: 'العودة للأعلى'
      }
}

// Composable
export function useI18n() {
      const t = (key: string): string => {
            const keys = key.split('.')
            let value: unknown = translations[currentLanguage.value as keyof typeof translations]

            for (const k of keys) {
                  if (value && typeof value === 'object') {
                        value = (value as Record<string, unknown>)[k]
                  } else {
                        return key // Return key if translation not found
                  }
            }

            return (value as string) || key
      }

      const setLanguage = (lang: string): void => {
            if (LANGUAGES[lang as keyof typeof LANGUAGES]) {
                  currentLanguage.value = lang
                  localStorage.setItem('preferredLanguage', lang)

                  // Update document direction and lang attribute
                  document.documentElement.dir = LANGUAGES[lang as keyof typeof LANGUAGES].dir
                  document.documentElement.lang = lang
            }
      }

      const currentLang = computed(() => LANGUAGES[currentLanguage.value as keyof typeof LANGUAGES])
      const availableLanguages = computed(() => Object.values(LANGUAGES))
      const isRTL = computed(() => currentLang.value.dir === 'rtl')

      // Initialize on first load
      if (typeof document !== 'undefined') {
            document.documentElement.dir = LANGUAGES[currentLanguage.value as keyof typeof LANGUAGES].dir
            document.documentElement.lang = currentLanguage.value
      }

      return {
            t,
            setLanguage,
            currentLanguage: computed(() => currentLanguage.value),
            currentLang,
            availableLanguages,
            isRTL
      }
}
