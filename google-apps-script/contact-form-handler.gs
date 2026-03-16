/**
 * Google Apps Script for handling form submissions to Google Sheets
 * 
 * Setup Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a Google Sheet with headers: Timestamp, Name, Email, Phone, Message, Source
 * 5. Update the SHEET_ID below with your Google Sheet ID
 * 6. Deploy as a web app with execute permissions set to "Anyone"
 * 7. Copy the web app URL and replace YOUR_SCRIPT_ID in ContactSection.tsx
 */

// Replace with your Google Sheet ID
const SHEET_ID = '1TZa5Q1PlinfTFm3nPWCp5GB1LIsFuG1vVzL0FjObJFs';
const SHEET_NAME = 'Contact_Form_Submissions';

function doPost(e) {
  try {
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      newSheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Name', 'Email', 'Phone', 'Message', 'Source']
      ]);
      newSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp),
      data.name,
      data.email,
      data.phone,
      data.message,
      data.source
    ];
    
    // Append the data to the sheet
    const targetSheet = sheet || SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    targetSheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    targetSheet.autoResizeColumns(1, 6);
    
    // Send email notification (optional)
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to process form submission'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  try {
    // Replace with your notification email
    const notificationEmail = 'vagheshwari.engineering@gmail.com';
    
    const subject = `New Contact Form Submission from ${data.name}`;
    const body = `
      New contact form submission received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Message: ${data.message}
      
      Submitted at: ${new Date(data.timestamp).toLocaleString('en-IN')}
      Source: ${data.source}
    `;
    
    MailApp.sendEmail(notificationEmail, subject, body);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Function to handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Contact form API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}