const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Sample data (copied from app/lib/sampleData.ts)
const sampleProducts = [
  {
    id: 'sample-1',
    name: 'Smartphone X',
    description: 'Latest model with 256GB storage',
    price: 45000,
    stock: 15,
    barcode: '9780201379624'
  },
  {
    id: 'sample-2',
    name: 'Wireless Earbuds',
    description: 'Noise cancelling with long battery life',
    price: 3500,
    stock: 25,
    barcode: '9780201379625'
  },
  {
    id: 'sample-3',
    name: 'Smartwatch Pro',
    description: 'Fitness tracking and notifications',
    price: 8000,
    stock: 10,
    barcode: '9780201379626'
  },
  {
    id: 'sample-4',
    name: 'Laptop Ultra',
    description: '16GB RAM, 512GB SSD, i7 Processor',
    price: 65000,
    stock: 8,
    barcode: '9780201379627'
  },
  {
    id: 'sample-5',
    name: 'Bluetooth Speaker',
    description: 'Waterproof with 24hr battery',
    price: 4500,
    stock: 20,
    barcode: '9780201379628'
  }
];

const sampleUsers = [
  {
    id: 'sample-user-1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'password123',
    role: 'ADMIN'
  }
];

// Function to create static data files
function createStaticData() {
  const dataDir = path.join(__dirname, 'public', 'data');
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Create static product data
  fs.writeFileSync(
    path.join(dataDir, 'products.json'), 
    JSON.stringify(sampleProducts, null, 2)
  );
  
  console.log('✅ Created static product data');
  
  // Create empty sales data
  fs.writeFileSync(
    path.join(dataDir, 'sales.json'), 
    JSON.stringify([], null, 2)
  );
  
  console.log('✅ Created static sales data');
  
  // Create user data
  fs.writeFileSync(
    path.join(dataDir, 'users.json'), 
    JSON.stringify(sampleUsers, null, 2)
  );
  
  console.log('✅ Created static user data');
}

// Main function
async function main() {
  try {
    console.log('🔧 Preparing static build for Capacitor...');
    
    // Create static data
    createStaticData();
    
    // Build the Next.js app
    console.log('🏗️ Building Next.js app...');
    execSync('next build', { stdio: 'inherit' });
    
    console.log('✅ Build completed');
    console.log('');
    console.log('Next steps:');
    console.log('1. Run: npm run cap:sync');
    console.log('2. Run: npm run cap:open');
    console.log('3. Build and run the app in Android Studio');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

main(); 