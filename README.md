# AMiCUS Timișoara - Modern Website

A modern, responsive website for AMiCUS Timișoara - built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern Design**: Clean, responsive design with red, white, and black color scheme
- **Dashboard**: CRUD operations for member management
- **Loading Animations**: Smooth page transitions and loading states
- **Mobile Responsive**: Optimized for all device sizes
- **Real-time Data**: Live updates with Supabase backend

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (converted from SCSS)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL)
- **Notifications**: Sonner

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amicus-timisoara-www
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Install missing dependencies**
   ```bash
   npm install react-router-dom react-i18next i18next framer-motion
   npm install --save-dev @types/react-router-dom
   ```

## 🗄️ Database Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Run the SQL commands** from `supabase-structure.sql` in your Supabase SQL editor:
   - Creates tables: `users`, `prayer_requests`, `prayer_interactions`, `events`, `event_registrations`
   - Sets up Row Level Security (RLS) policies
   - Creates indexes for performance
   - Adds automatic timestamp triggers

3. **Update Supabase credentials** in the following files:
   - `src/form/Form.tsx`
   - `src/table/Table.tsx`
   - `src/table/modal/Modal.tsx`
   - `src/components/PrayerWall.tsx`
   - `src/pages/DashboardPage.tsx`

   Replace with your Supabase URL and anon key:
   ```typescript
   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'
   ```

## 🚀 Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

## 📱 Pages & Features

### 🏠 Homepage (`/`)
- Hero section with call-to-action buttons
- Features showcase
- Statistics section
- Modern animations

### 📝 Registration Form (`/form`)
- Member registration with validation
- Student-specific fields (university, faculty, etc.)
- Department selection
- Supabase integration

### 🙏 Prayer Wall (`/prayer-wall`)
- Submit prayer requests (anonymous or named)
- View and pray for others' requests
- Real-time prayer count updates
- Moderation system ready

### 📊 Dashboard (`/dashboard`)
- Member management with CRUD operations
- Statistics overview
- Search and filter functionality
- Payment tracking

### 📋 Table View (`/table`)
- Detailed member table view
- Responsive columns
- Edit member information
- Payment updates

## 🎨 Design System

### Colors
- **Primary Red**: `#DC2626`
- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Gray Scale**: Various shades for backgrounds and text

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 400 (normal), 600 (semibold), 700 (bold)

## 🌍 Internationalization

The website supports Romanian and English languages. Language can be switched using the toggle in the navigation bar.

**Translation files**: `src/i18n/index.ts`

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🔧 Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy** to your preferred hosting platform (Vercel, Netlify, etc.)

## 📊 Database Schema

### Users Table
- Personal information (name, email, phone, address)
- Church membership status
- Student information (university, faculty, year)
- Department preference
- Payment tracking

### Prayer Requests Table
- Title and content
- Author information (optional/anonymous)
- Approval status for moderation
- Prayer count tracking

### Prayer Interactions Table
- Tracks who prayed for what (by IP for anonymous users)
- Prevents duplicate prayers from same user

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Address**: Str. Piața Alexandru Mocioni 7, Timișoara
- **Meeting Time**: Thursday 8:00 PM
- **Email**: contact@amicus-timisoara.ro

## 📄 License

This project is licensed under the MIT License.

---

**AMiCUS Timișoara** - Building a community of young Christians dedicated to spiritual and professional development.