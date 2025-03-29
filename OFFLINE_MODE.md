# POS App Offline Mode

This document explains how to use the POS application in offline mode with local storage.

## Overview

The POS application has been adapted to work in offline mode, storing all data locally on the device using Capacitor's Preferences API. This allows you to:

1. Use the app without an internet connection
2. Store product data locally
3. Process sales without a server
4. Sync data when reconnected (future enhancement)

## Offline Features

### Products
- Products are stored locally on the device
- Default sample products are loaded if no products exist
- You can add, edit, and delete products while offline

### Sales
- Process sales transactions offline
- All sales data is stored locally
- Stock is updated locally after each sale

### User Authentication
- Basic authentication works offline
- User credentials are stored locally

## Getting Started with Offline Mode

1. **First-time setup**:
   - When you first run the app, it will attempt to connect to the server
   - If the server is unavailable, it will automatically switch to offline mode
   - Sample products will be loaded automatically

2. **Network Status Indicator**:
   - Check the top right corner of the app
   - "Online" (green) means connected to server
   - "Offline Mode" (orange) means using local storage

## Building for Offline Use

To build the app for offline use:

```bash
# Install dependencies
npm install

# Build the app
npm run build

# Sync Capacitor project
npm run cap:sync

# Add Android platform (if not already added)
npm run cap:android

# Open in Android Studio
npm run cap:open
```

## Future Enhancements

- Data synchronization when connectivity is restored
- Conflict resolution for offline changes
- Multi-device sync capability

## Troubleshooting

If you experience issues with offline mode:

1. **App not loading saved data**:
   - Try clearing app cache in Android settings
   - Restart the app

2. **App crashes in offline mode**:
   - Check if you have at least 50MB of free space on your device
   - Ensure you're using the latest version of the app 