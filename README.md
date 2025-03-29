# POS with Inventory Management System

A modern Point of Sale (POS) application with inventory management built with Next.js, Tailwind CSS, and Prisma.

## Features

- **Point of Sale**: Easy-to-use interface for processing sales
- **Inventory Management**: Track product stock levels and manage products
- **Sales History**: View past transactions and sale details
- **Reports & Analytics**: Get insights into your business performance
- **Category Management**: Organize products by categories
- **Stock Alerts**: Get notified when products are running low on stock

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Heroicons
- **State Management**: Zustand
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/pos-app.git
   cd pos-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the database
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run migrations
   npm run prisma:migrate
   
   # Seed the database with sample data
   npm run prisma:seed
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### POS (Point of Sale)
- Browse products, add them to cart
- Adjust quantities as needed
- Complete transaction with cash or card payment

### Inventory Management
- View all products and their stock levels
- Add, edit, or delete products
- Organize products by categories

### Sales History
- View past sales records
- Check detailed information about each sale

### Reports
- Get insights into sales performance
- Monitor low stock products

## License

This project is licensed under the MIT License - see the LICENSE file for details. 