/**
 * BOT & SPAM PROTECTION - SECURITY DOCUMENTATION
 * ==============================================
 * 
 * This document explains the multi-layer security system implemented
 * to protect the booking form from bots, spam, and malicious submissions.
 */

// ================================================================
// SECURITY LAYERS
// ================================================================

/**
 * 1. HONEYPOT FIELD
 * -----------------
 * A hidden "website" field that is invisible to real users but visible to bots.
 * 
 * How it works:
 * - Field is hidden using CSS (absolute + opacity-0 + pointer-events-none)
 * - aria-hidden="true" hides it from screen readers
 * - tabindex="-1" prevents keyboard navigation
 * - autocomplete="off" prevents browsers from filling it
 * 
 * Detection:
 * - If the field contains ANY value, the submission is blocked
 * - Bots typically auto-fill all form fields, including hidden ones
 * 
 * Code location: BookingSystem.vue line ~31
 */

/**
 * 2. TIME-BASED VALIDATION
 * -------------------------
 * Tracks how long users take to fill out the form.
 * 
 * How it works:
 * - Start time is recorded when the form component mounts
 * - On submission, we calculate: timeTaken = currentTime - startTime
 * - Minimum required time: 5 seconds (can be adjusted)
 * 
 * Why 5 seconds?
 * - Real users need time to read and fill 3 steps
 * - Bots typically submit instantly or within 1-2 seconds
 * - 5 seconds is a reasonable minimum for legitimate users
 * 
 * Detection:
 * - If form is submitted in less than 5 seconds → BLOCKED
 * 
 * Code location: BookingSystem.vue validateAgainstBots() function
 */

/**
 * 3. RATE LIMITING
 * ----------------
 * Prevents multiple submissions from the same browser session.
 * 
 * How it works:
 * - Tracks timestamp of last successful submission
 * - Blocks new submissions within 60 seconds of previous one
 * 
 * Why 60 seconds?
 * - Prevents spam attacks from same user/bot
 * - Legitimate users rarely need to book twice in quick succession
 * - If genuine mistake, user waits 1 minute and resubmits
 * 
 * Detection:
 * - If submission within 60 seconds of last one → USER NOTIFIED & BLOCKED
 * 
 * Note: This is browser-based (localStorage could be added for persistence)
 * Code location: BookingSystem.vue validateAgainstBots() function
 */

/**
 * 4. PATTERN DETECTION
 * --------------------
 * Analyzes input content for spam/bot patterns.
 * 
 * Patterns detected:
 * 
 * a) URL Detection:
 *    - Regex: /(http|www|https)|\.com|\.net|\.org/i
 *    - Blocks if name fields contain URLs
 *    - Example blocked: "Visit www.spam.com" in firstName
 * 
 * b) Excessive Numbers:
 *    - Regex: /\d{5,}/
 *    - Blocks 5+ consecutive numbers in names
 *    - Example blocked: "Ahmed12345678"
 *    - Allows: "Ahmed2" (legitimate variant)
 * 
 * c) Repeated Characters:
 *    - Regex: /([a-z])\1{4,}/i
 *    - Blocks names with same character 5+ times
 *    - Example blocked: "Ahhhhhmed", "aaaaaaa"
 *    - Allows: "Bassssam" (3 repeated s's is ok)
 * 
 * Detection:
 * - If ANY pattern matches → SILENTLY BLOCKED
 * 
 * Code location: BookingSystem.vue validateAgainstBots() function
 */

/**
 * 5. SESSION TOKEN
 * ----------------
 * Unique identifier for each form session.
 * 
 * How it works:
 * - Random token generated when form loads: Math.random() + timestamp
 * - Token sent with submission data
 * - Stored in Google Sheets for tracking and analysis
 * 
 * Benefits:
 * - Track which submissions came from same session
 * - Identify patterns in bot attacks
 * - Useful for debugging and analytics
 * 
 * Code location: 
 * - Generation: BookingSystem.vue generateSessionToken()
 * - Storage: Sent in bookingData object
 */

// ================================================================
// BLOCKING STRATEGY
// ================================================================

/**
 * When bot/spam is detected:
 * 
 * 1. SILENT BLOCKING (for most cases)
 *    - Console warning logged (visible to developer only)
 *    - Simulate submission delay (1.5 seconds)
 *    - No error shown to user
 *    - Makes it harder for botters to detect protection
 * 
 * 2. USER NOTIFICATION (only for rate limiting)
 *    - Clear message: "Please wait a moment before submitting"
 *    - Helps legitimate users who might click twice
 * 
 * 3. NO SUBMISSION TO BACKEND
 *    - Blocked requests never reach Google Sheets
 *    - Prevents database pollution
 *    - Saves quota and API calls
 */

// ================================================================
// GOOGLE SHEETS TRACKING
// ================================================================

/**
 * Security data stored in Google Sheets:
 * 
 * Column L: Session Token
 * - Unique ID for each form session
 * - Format: randomstring + timestamp
 * - Example: "k7m9n2p41735849200z8"
 * 
 * Column M: Form Duration (seconds)
 * - Time taken to complete form
 * - Calculated: (submissionTime - formStartTime) / 1000
 * - Normal range: 20-300 seconds
 * - Bot range: Often < 5 seconds
 * 
 * How to use:
 * - Sort by duration to find suspicious fast submissions
 * - Look for duplicate session tokens (reload attacks)
 * - Cross-reference suspicious patterns
 */

// ================================================================
// MONITORING & ANALYSIS
// ================================================================

/**
 * Console Warnings to Watch For:
 * 
 * 🤖 Bot detected: Honeypot field filled
 * → Bot auto-filled hidden field
 * 
 * 🤖 Bot detected: Form submitted too quickly
 * → Submitted in less than 5 seconds
 * 
 * 🤖 Spam detected: Too many submissions
 * → Multiple submissions within 60 seconds
 * 
 * 🤖 Spam detected: URLs in name fields
 * → Name contains website links
 * 
 * 🤖 Spam detected: Excessive numbers in name
 * → Name contains 5+ consecutive digits
 * 
 * 🤖 Spam detected: Repeated characters
 * → Name has same character 5+ times
 */

// ================================================================
// CUSTOMIZATION OPTIONS
// ================================================================

/**
 * Adjustable Security Parameters:
 * 
 * Minimum Time (currently 5 seconds):
 * - Location: BookingSystem.vue line ~318
 * - Change: if (timeTaken < 5000) to if (timeTaken < YOUR_VALUE)
 * - Recommended: 3000-10000ms (3-10 seconds)
 * 
 * Rate Limit Window (currently 60 seconds):
 * - Location: BookingSystem.vue line ~325
 * - Change: timeSinceLastSubmission < 60000 to < YOUR_VALUE
 * - Recommended: 30000-120000ms (30 seconds - 2 minutes)
 * 
 * Repeated Characters (currently 5):
 * - Location: BookingSystem.vue line ~346
 * - Change: /([a-z])\1{4,}/i to /([a-z])\1{YOUR_VALUE,}/i
 * - Recommended: 3-6 characters
 * 
 * Excessive Numbers (currently 5):
 * - Location: BookingSystem.vue line ~333
 * - Change: /\d{5,}/ to /\d{YOUR_VALUE,}/
 * - Recommended: 4-8 digits
 */

// ================================================================
// ADVANCED: ADDITIONAL SECURITY MEASURES
// ================================================================

/**
 * If you need even stronger protection, consider:
 * 
 * 1. Google reCAPTCHA v3
 *    - Invisible CAPTCHA with risk scoring
 *    - Requires Google API keys
 *    - Implementation: https://www.google.com/recaptcha/
 * 
 * 2. IP-based Rate Limiting
 *    - Requires backend server
 *    - Track submissions per IP address
 *    - Block IPs with excessive requests
 * 
 * 3. Email Verification
 *    - Send confirmation email before accepting booking
 *    - Requires email to be mandatory (not current design)
 * 
 * 4. Phone Verification (SMS)
 *    - Send verification code to phone
 *    - Requires SMS service (Twilio, etc.)
 *    - Higher friction for users
 * 
 * 5. Browser Fingerprinting
 *    - Track unique browser characteristics
 *    - More complex but effective
 *    - Libraries: FingerprintJS
 */

// ================================================================
// TESTING THE SECURITY
// ================================================================

/**
 * How to test if protection is working:
 * 
 * TEST 1: Honeypot
 * 1. Open browser DevTools
 * 2. In console: document.querySelector('input[name="website"]').value = 'test'
 * 3. Submit form
 * 4. Check console for: "🤖 Bot detected: Honeypot field filled"
 * 
 * TEST 2: Speed Check
 * 1. Load the form
 * 2. Immediately fill and submit within 3 seconds
 * 3. Check console for: "🤖 Bot detected: Form submitted too quickly"
 * 
 * TEST 3: Rate Limiting
 * 1. Submit a valid booking
 * 2. Immediately submit another one
 * 3. Should see alert: "Please wait a moment before submitting"
 * 
 * TEST 4: Pattern Detection
 * 1. Enter "Visit www.test.com" in firstName
 * 2. Submit form
 * 3. Check console for: "🤖 Spam detected: URLs in name fields"
 */

// ================================================================
// MAINTENANCE & UPDATES
// ================================================================

/**
 * Regular Maintenance Tasks:
 * 
 * Weekly:
 * - Review Google Sheets for unusual patterns
 * - Check form duration column (too many < 10 seconds?)
 * - Look for duplicate session tokens
 * 
 * Monthly:
 * - Analyze blocked submission logs
 * - Adjust time thresholds if needed
 * - Update regex patterns if new spam emerges
 * 
 * When spam increases:
 * - Tighten minimum time requirement
 * - Add more pattern detections
 * - Consider implementing reCAPTCHA
 */

// ================================================================
// TROUBLESHOOTING
// ================================================================

/**
 * Issue: Legitimate users being blocked
 * Solution: 
 * - Check formDuration in Google Sheets
 * - If many users are 5-10 seconds, lower minimum time to 3 seconds
 * - Review pattern detection - may be too strict
 * 
 * Issue: Still receiving spam
 * Solution:
 * - Check console logs - which validation is failing?
 * - Bots bypassing honeypot? Add more hidden fields
 * - Bots taking time? Implement reCAPTCHA
 * 
 * Issue: Rate limiting too aggressive
 * Solution:
 * - Increase time window from 60 to 90-120 seconds
 * - Consider using localStorage for persistent tracking
 * 
 * Issue: False positives on names
 * Solution:
 * - Algerian names with repeated letters? Adjust regex
 * - Names with numbers? Allow 1-2 digits
 * - Review blocked submissions to find patterns
 */

export default {
      minimumTime: 5000,
      rateLimitWindow: 60000,
      repeatedCharLimit: 5,
      excessiveNumberLimit: 5
}
