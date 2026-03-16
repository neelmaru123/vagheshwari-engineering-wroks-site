# Google Sheets Contact Form Integration Setup

This guide will help you set up Google Sheets integration for your contact form submissions.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" or any name you prefer
4. Add the following headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Message`
   - F1: `Source`

## Step 2: Get Sheet ID

1. From your Google Sheet URL, copy the Sheet ID
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - Copy the `SHEET_ID` part

## Step 3: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `/google-apps-script/contact-form-handler.gs`
4. Update the `SHEET_ID` constant with your actual Sheet ID
5. Update the `notificationEmail` with your email address
6. Save the project with a name like "Contact Form Handler"

## Step 4: Deploy Web App

1. In Google Apps Script, click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 5: Update React Component

1. In `ContactSection.tsx`, replace `YOUR_SCRIPT_ID` with your actual script ID from the Web App URL
   - Web App URL format: `https://script.google.com/macros/s/SCRIPT_ID/exec`
   - Use the `SCRIPT_ID` part

## Step 6: Test the Integration

1. Fill out and submit the contact form on your website
2. Check your Google Sheet for the new entry
3. Check your email for the notification

## Features Included

✅ **Google Sheets Integration**
- Automatic form submission logging
- Timestamp tracking
- Source identification

✅ **Email Notifications**
- Instant email alerts for new submissions
- Formatted email with all form details

✅ **Google Maps Integration**
- Real factory location in Morbi, Gujarat
- Interactive map with proper coordinates

✅ **Error Handling**
- Graceful error handling for failed submissions
- User-friendly error messages

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Use `mode: 'no-cors'` in the fetch request (already implemented)
2. **Permission Denied**: Ensure the Google Apps Script is deployed with "Anyone" access
3. **Sheet Not Found**: Verify the SHEET_ID is correct and the sheet exists

### Testing Tips:

1. Test the Google Apps Script directly by visiting the Web App URL
2. Check the Google Apps Script execution logs for errors
3. Verify sheet permissions allow the script to write data

## Security Notes

- The Google Apps Script runs with your Google account permissions
- Consider using environment variables for sensitive data in production
- Monitor the Google Sheet for spam submissions and add validation if needed

## Additional Features You Can Add

1. **Spam Protection**: Add reCAPTCHA integration
2. **Data Validation**: Add server-side validation in Google Apps Script
3. **Auto-Response**: Send confirmation emails to form submitters
4. **Analytics**: Track form conversion rates and popular inquiry types