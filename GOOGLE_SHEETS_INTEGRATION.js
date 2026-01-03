/**
 * GOOGLE SHEETS WEBHOOK INTEGRATION
 *
 * This file contains the Google Apps Script code needed to receive
 * booking data from the Pro Dentist website and store it in a Google Sheet.
 *
 * SETUP INSTRUCTIONS:
 * ===================
 *
 * 1. Create a new Google Sheet with the following column headers in row 1:
 *    A: Timestamp | B: First Name | C: Last Name | D: Phone | E: Age |
 *    F: Email | G: Service | H: Date | I: Time | J: New Patient | K: Notes |
 *    L: Session Token | M: Form Duration (sec) | N: User Language
 *
 * 2. In your Google Sheet, go to: Extensions → Apps Script
 *
 * 3. Delete any existing code and paste the doPost function below
 *
 * 4. Save the project (File → Save or Cmd/Ctrl + S)
 *
 * 5. Deploy the script:
 *    - Click "Deploy" → "New deployment"
 *    - Click the gear icon next to "Select type"
 *    - Choose "Web app"
 *    - Configure:
 *      * Description: "Pro Dentist Booking Webhook"
 *      * Execute as: "Me"
 *      * Who has access: "Anyone" (required for external POST requests)
 *    - Click "Deploy"
 *    - Authorize the app (you may see a security warning - click Advanced → Go to [project name])
 *    - Copy the "Web app URL" that appears
 *
 * 6. Update your Vue component:
 *    - Open src/components/BookingSystem.vue
 *    - Find line ~270: const GOOGLE_SHEETS_WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE'
 *    - Paste your web app URL
 *    - Uncomment the fetch() API call (lines 273-281)
 *
 * 7. Test the integration:
 *    - Submit a test booking through your website
 *    - Check your Google Sheet for the new entry
 *    - Check browser console for any errors
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Append a new row with the booking data
    sheet.appendRow([
      data.timestamp,      // When the booking was made
      data.firstName,      // Patient first name
      data.lastName,       // Patient last name
      data.phone,          // Phone number
      data.age,            // Patient age
      data.email,          // Email address (may be "Not provided")
      data.service,        // Selected service (always in French)
      data.date,           // Appointment date
      data.time,           // Appointment time
      data.isNewPatient,   // "Yes" or "No"
      data.notes,          // Additional notes from patient
      data.sessionToken,   // Unique session ID for tracking
      data.formDuration,   // Time taken to fill form (helps detect bots)
      data.userLanguage    // User's selected language (EN, FR, or AR)
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Booking saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error and return error response
    Logger.log('Error processing booking: ' + error.toString());

    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * OPTIONAL: Add automatic email notifications
 *
 * Uncomment this function and modify the doPost function to send
 * confirmation emails to patients and/or practice staff.
 */

/*
function sendConfirmationEmail(data) {
  const practiceEmail = 'your-practice@example.com'; // CHANGE THIS
  const patientEmail = data.email;

  // Email to patient
  const patientSubject = 'Appointment Confirmation - Pro Dentist';
  const patientBody = `
    Dear ${data.firstName} ${data.lastName},

    Thank you for booking an appointment with Pro Dentist!

    APPOINTMENT DETAILS:
    - Service: ${data.service}
    - Date: ${data.date}
    - Time: ${data.time}

    We look forward to seeing you!

    If you need to reschedule, please call us at (555) 123-4567.

    Best regards,
    Pro Dentist Team
  `;

  // Email to practice
  const practiceSubject = 'New Appointment Booking';
  const practiceBody = `
    New appointment booked:

    Name: ${data.firstName} ${data.lastName}
    Phone: ${data.phone}
    Age: ${data.age}
    Email: ${data.email}
    Service: ${data.service}
    Date: ${data.date}
    Time: ${data.time}
    New Patient: ${data.isNewPatient}
    Notes: ${data.notes}
  `;

  try {
    MailApp.sendEmail(patientEmail, patientSubject, patientBody);
    MailApp.sendEmail(practiceEmail, practiceSubject, practiceBody);
  } catch (error) {
    Logger.log('Error sending emails: ' + error.toString());
  }
}

// Then in doPost, after sheet.appendRow(), add:
// sendConfirmationEmail(data);
*/

/**
 * TROUBLESHOOTING:
 * ================
 *
 * Issue: "Access denied" error
 * Solution: Make sure the web app is deployed with "Who has access: Anyone"
 *
 * Issue: No data appearing in sheet
 * Solution: Check the Apps Script execution log (View → Executions)
 *
 * Issue: CORS errors in browser
 * Solution: Use mode: 'no-cors' in the fetch request (already set in BookingSystem.vue)
 *
 * Issue: Need to update the script
 * Solution: Make changes, save, then Deploy → Manage deployments → Edit → Version: New version
 */
