# FordFix OBS 3.0

A mobile-first diagnostic companion app for 1987–1997 Ford OBS (Old Body Style) trucks, specifically optimized for the 1994 F-250 7.5L / 460 V8.

## Features

- **Quick Diagnostics**: Step-by-step repair workflows for:
  - Starting / No Start
  - Ignition / Spark
  - Fuel System
  - Fuse / Relay Tests

- **Vehicle Search**: Find repair info by year, engine, or system type
- **Repair Notes**: Save your test results locally on your phone
- **Offline Support**: Works without internet once loaded

## How to Access on Your Phone

### Option 1: Direct Link (Fastest)
1. Open your phone's browser (Chrome, Safari, Firefox, Edge)
2. Go to: `https://github.com/dunn202226-crypto/FordFix0bs`
3. Click the green **Code** button → **GitHub Pages** (if enabled)
   - Or navigate to the raw files at: `https://raw.githubusercontent.com/dunn202226-crypto/FordFix0bs/main/index.html`

### Option 2: Add to Home Screen (PWA Install)
1. Open the app link in your phone's browser
2. **iOS (Safari)**:
   - Tap the Share button (square with arrow)
   - Tap "Add to Home Screen"
   - Name it "FordFix OBS"
   - Tap "Add"

3. **Android (Chrome)**:
   - Tap the menu (⋮)
   - Tap "Install app" or "Add to Home Screen"
   - Tap "Install"

4. The app will now appear on your home screen as a full-screen app

### Option 3: Local File
1. Clone or download the repo
2. Open `index.html` in your phone's file manager or browser
3. Bookmark for quick access

## How to Use

1. **Select a Workflow**: Choose a diagnostic category (Starting, Spark, Fuel, or Relay)
2. **Run Tests**: Follow step-by-step instructions and mark each as PASS / FAIL / SKIP
3. **Search**: Use the search box to find info on your truck year, engine, or system
4. **Save Notes**: Write your findings in the Repair Notes section—they auto-save to your phone
5. **Offline**: Works without internet after first load

## Local Storage

- Repair notes are saved in your browser's local storage
- No data is sent to any server
- Notes persist across app sessions

## Files

- `index.html` - Main page structure
- `styles.css` - Mobile-responsive design
- `app.js` - Diagnostic workflows & note saving
- `manifest.json` - PWA (Progressive Web App) configuration
- `favicon.svg` - App icon
- `sw.js` - Service worker for offline support

## Requirements

- Modern browser (Chrome, Safari, Firefox, Edge)
- No installation or app store needed
- Works on phone, tablet, or desktop

---

Built for Ford OBS truck enthusiasts and DIY mechanics.
