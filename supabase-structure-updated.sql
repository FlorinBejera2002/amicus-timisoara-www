-- AMiCUS Timișoara Database Structure - Enhanced Version
-- Updated schema with comprehensive features for admin dashboard and improved functionality

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS member_activities CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS system_settings CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS donations CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;
DROP TABLE IF EXISTS project_volunteers CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS prayer_interactions CASCADE;
DROP TABLE IF EXISTS prayer_requests CASCADE;
DROP TABLE IF EXISTS event_registrations CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 1. Enhanced Users/Members table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10),
    address TEXT,
    emergency_contact VARCHAR(255),
    emergency_phone VARCHAR(20),
    
    -- Academic info
    university VARCHAR(255),
    faculty VARCHAR(255),
    study_year INTEGER,
    department VARCHAR(100),
    student_id VARCHAR(50),
    
    -- Spiritual info
    baptized BOOLEAN DEFAULT false,
    baptism_date DATE,
    church_name VARCHAR(255),
    
    -- Membership info
    is_member BOOLEAN DEFAULT false,
    is_leader BOOLEAN DEFAULT false,
    leadership_role VARCHAR(100),
    member_since DATE,
    how_did_you_hear VARCHAR(255),
    interests TEXT[],
    skills TEXT[],
    availability TEXT,
    
    -- System fields
    is_active BOOLEAN DEFAULT true,
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    profile_image_url VARCHAR(500),
    bio TEXT,
    social_links JSONB,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enhanced Events table
CREATE TABLE events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    long_description TEXT,
    
    -- Event details
    event_type VARCHAR(50) DEFAULT 'general', -- conference, workshop, prayer, social, retreat, etc.
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE,
    location VARCHAR(255),
    address TEXT,
    
    -- Registration info
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    registration_deadline TIMESTAMP WITH TIME ZONE,
    price DECIMAL(10,2) DEFAULT 0,
    requires_approval BOOLEAN DEFAULT false,
    
    -- Media and organization
    image_url VARCHAR(500),
    gallery_urls TEXT[],
    organizer_id UUID REFERENCES users(id),
    
    -- Status and visibility
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true,
    
    -- Additional info
    agenda JSONB,
    speakers JSONB,
    sponsors JSONB,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Event registrations table
CREATE TABLE event_registrations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    -- Registration details
    registration_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'registered', -- registered, approved, attended, cancelled
    payment_status VARCHAR(20) DEFAULT 'pending', -- pending, paid, refunded
    
    -- Additional info
    notes TEXT,
    dietary_requirements TEXT,
    special_needs TEXT,
    
    UNIQUE(event_id, user_id)
);

-- 4. Enhanced Prayer requests table
CREATE TABLE prayer_requests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    
    -- Author info
    author_name VARCHAR(255),
    author_email VARCHAR(255),
    author_id UUID REFERENCES users(id) ON DELETE SET NULL,
    is_anonymous BOOLEAN DEFAULT false,
    
    -- Categorization
    category VARCHAR(50) DEFAULT 'general', -- health, family, studies, spiritual, financial, etc.
    urgency_level VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent
    
    -- Status and approval
    is_approved BOOLEAN DEFAULT false,
    is_answered BOOLEAN DEFAULT false,
    answered_testimony TEXT,
    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    
    -- Interaction tracking
    prayer_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Prayer interactions table
CREATE TABLE prayer_interactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    prayer_request_id UUID REFERENCES prayer_requests(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    user_ip VARCHAR(45), -- for anonymous users
    prayed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(prayer_request_id, COALESCE(user_id::text, user_ip))
);

-- 6. Projects table
CREATE TABLE projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    long_description TEXT,
    
    -- Project details
    project_type VARCHAR(50) DEFAULT 'social', -- social, medical, educational, spiritual, fundraising
    status VARCHAR(20) DEFAULT 'planning', -- planning, active, completed, paused, cancelled
    priority VARCHAR(20) DEFAULT 'medium', -- low, medium, high
    
    -- Financial info
    budget DECIMAL(10,2),
    funds_raised DECIMAL(10,2) DEFAULT 0,
    funding_goal DECIMAL(10,2),
    
    -- Impact metrics
    target_beneficiaries INTEGER,
    actual_beneficiaries INTEGER DEFAULT 0,
    impact_metrics JSONB,
    
    -- Timeline
    start_date DATE,
    end_date DATE,
    
    -- Organization
    project_manager_id UUID REFERENCES users(id),
    location VARCHAR(255),
    partners TEXT[],
    
    -- Media
    image_url VARCHAR(500),
    gallery_urls TEXT[],
    
    -- Visibility
    is_featured BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Project volunteers table
CREATE TABLE project_volunteers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    role VARCHAR(100),
    hours_contributed INTEGER DEFAULT 0,
    skills_used TEXT[],
    
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'active', -- active, inactive, completed
    
    UNIQUE(project_id, user_id)
);

-- 8. Enhanced Posts/Blog table
CREATE TABLE posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    
    -- Author info
    author_id UUID REFERENCES users(id),
    author_name VARCHAR(255),
    
    -- Categorization
    category VARCHAR(50) DEFAULT 'news', -- news, testimony, teaching, announcement, event_report
    tags TEXT[],
    
    -- Media
    image_url VARCHAR(500),
    gallery_urls TEXT[],
    
    -- Status and visibility
    is_published BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    
    -- Engagement
    view_count INTEGER DEFAULT 0,
    like_count INTEGER DEFAULT 0,
    
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Contact messages table
CREATE TABLE contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    
    -- Categorization
    message_type VARCHAR(50) DEFAULT 'general', -- general, prayer, partnership, complaint, suggestion
    priority VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent
    
    -- Status
    is_read BOOLEAN DEFAULT false,
    is_resolved BOOLEAN DEFAULT false,
    
    -- Assignment and response
    assigned_to UUID REFERENCES users(id),
    response TEXT,
    replied_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Donations table
CREATE TABLE donations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    -- Donor info
    donor_name VARCHAR(255),
    donor_email VARCHAR(255),
    donor_phone VARCHAR(20),
    is_anonymous BOOLEAN DEFAULT false,
    
    -- Donation details
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'RON',
    donation_type VARCHAR(50) DEFAULT 'general', -- general, project, event, tithe
    
    -- Target allocation
    project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
    event_id UUID REFERENCES events(id) ON DELETE SET NULL,
    
    -- Payment info
    payment_method VARCHAR(50), -- card, bank_transfer, cash, paypal
    payment_status VARCHAR(20) DEFAULT 'pending', -- pending, completed, failed, refunded
    transaction_id VARCHAR(255),
    
    -- Recurring donations
    is_recurring BOOLEAN DEFAULT false,
    recurring_frequency VARCHAR(20), -- monthly, quarterly, yearly
    next_payment_date DATE,
    
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Attendance tracking table
CREATE TABLE attendance (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    
    check_in_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    check_out_time TIMESTAMP WITH TIME ZONE,
    
    attendance_type VARCHAR(20) DEFAULT 'present', -- present, late, absent, excused
    notes TEXT,
    
    UNIQUE(user_id, event_id)
);

-- 12. Member activities log
CREATE TABLE member_activities (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    activity_type VARCHAR(50) NOT NULL, -- login, registration, prayer_request, donation, etc.
    activity_description TEXT,
    
    -- Context
    related_id UUID, -- ID of related entity (event, prayer, etc.)
    related_type VARCHAR(50), -- event, prayer_request, project, etc.
    
    -- Technical info
    metadata JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 13. System settings table
CREATE TABLE system_settings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type VARCHAR(20) DEFAULT 'string', -- string, number, boolean, json
    
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    category VARCHAR(50) DEFAULT 'general', -- general, email, payment, security, etc.
    
    updated_by UUID REFERENCES users(id),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 14. Notifications table
CREATE TABLE notifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    recipient_id UUID REFERENCES users(id) ON DELETE CASCADE,
    
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    notification_type VARCHAR(50) DEFAULT 'info', -- info, warning, success, error, reminder
    
    -- Status
    is_read BOOLEAN DEFAULT false,
    is_sent BOOLEAN DEFAULT false,
    
    -- Action
    action_url VARCHAR(500),
    action_label VARCHAR(100),
    
    -- Scheduling
    send_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create comprehensive indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_active ON users(is_active);
CREATE INDEX idx_users_member ON users(is_member);
CREATE INDEX idx_users_department ON users(department);
CREATE INDEX idx_users_last_activity ON users(last_activity);

CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_events_type ON events(event_type);
CREATE INDEX idx_events_featured ON events(is_featured);
CREATE INDEX idx_events_active ON events(is_active);
CREATE INDEX idx_events_slug ON events(slug);

CREATE INDEX idx_prayer_requests_approved ON prayer_requests(is_approved);
CREATE INDEX idx_prayer_requests_category ON prayer_requests(category);
CREATE INDEX idx_prayer_requests_created ON prayer_requests(created_at DESC);
CREATE INDEX idx_prayer_requests_urgency ON prayer_requests(urgency_level);

CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_type ON projects(project_type);
CREATE INDEX idx_projects_featured ON projects(is_featured);
CREATE INDEX idx_projects_slug ON projects(slug);

CREATE INDEX idx_posts_published ON posts(is_published, published_at DESC);
CREATE INDEX idx_posts_category ON posts(category);
CREATE INDEX idx_posts_featured ON posts(is_featured);
CREATE INDEX idx_posts_slug ON posts(slug);

CREATE INDEX idx_contact_messages_read ON contact_messages(is_read);
CREATE INDEX idx_contact_messages_resolved ON contact_messages(is_resolved);
CREATE INDEX idx_contact_messages_type ON contact_messages(message_type);

CREATE INDEX idx_donations_status ON donations(payment_status);
CREATE INDEX idx_donations_type ON donations(donation_type);
CREATE INDEX idx_donations_created ON donations(created_at DESC);

CREATE INDEX idx_member_activities_user ON member_activities(user_id);
CREATE INDEX idx_member_activities_type ON member_activities(activity_type);
CREATE INDEX idx_member_activities_created ON member_activities(created_at DESC);

CREATE INDEX idx_notifications_recipient ON notifications(recipient_id, is_read);
CREATE INDEX idx_notifications_type ON notifications(notification_type);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_prayer_requests_updated_at BEFORE UPDATE ON prayer_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_system_settings_updated_at BEFORE UPDATE ON system_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update user last activity
CREATE OR REPLACE FUNCTION update_user_last_activity()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE users SET last_activity = NOW() WHERE id = NEW.user_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_activity_on_event_registration 
    AFTER INSERT ON event_registrations 
    FOR EACH ROW EXECUTE FUNCTION update_user_last_activity();

CREATE TRIGGER update_user_activity_on_prayer_interaction 
    AFTER INSERT ON prayer_interactions 
    FOR EACH ROW EXECUTE FUNCTION update_user_last_activity();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Public can read approved prayer requests" ON prayer_requests FOR SELECT USING (is_approved = true);
CREATE POLICY "Public can read active events" ON events FOR SELECT USING (is_active = true AND is_public = true);
CREATE POLICY "Public can read active projects" ON projects FOR SELECT USING (is_public = true);
CREATE POLICY "Public can read published posts" ON posts FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read public system settings" ON system_settings FOR SELECT USING (is_public = true);

-- Public insert policies
CREATE POLICY "Anyone can insert prayer requests" ON prayer_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert prayer interactions" ON prayer_interactions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can register as user" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can make donations" ON donations FOR INSERT WITH CHECK (true);

-- User-specific policies
CREATE POLICY "Users can read their own data" ON users FOR SELECT USING (auth.uid()::text = id::text);
CREATE POLICY "Users can update their own data" ON users FOR UPDATE USING (auth.uid()::text = id::text);
CREATE POLICY "Users can read their registrations" ON event_registrations FOR SELECT USING (auth.uid()::text = user_id::text);
CREATE POLICY "Users can read their notifications" ON notifications FOR SELECT USING (auth.uid()::text = recipient_id::text);
CREATE POLICY "Users can update their notifications" ON notifications FOR UPDATE USING (auth.uid()::text = recipient_id::text);

-- Insert default system settings
INSERT INTO system_settings (setting_key, setting_value, setting_type, description, is_public, category) VALUES
('site_name', 'AMiCUS Timișoara', 'string', 'Website name', true, 'general'),
('site_description', 'Asociația Medicilor Creștini - Filiala Timișoara', 'string', 'Website description', true, 'general'),
('contact_email', 'contact@amicus-timisoara.ro', 'string', 'Main contact email', true, 'contact'),
('contact_phone', '+40 123 456 789', 'string', 'Main contact phone', true, 'contact'),
('contact_address', 'Timișoara, România', 'string', 'Physical address', true, 'contact'),
('max_prayer_requests_per_day', '5', 'number', 'Maximum prayer requests per IP per day', false, 'security'),
('auto_approve_prayers', 'false', 'boolean', 'Auto-approve prayer requests', false, 'moderation'),
('event_registration_enabled', 'true', 'boolean', 'Enable event registrations', true, 'features'),
('donations_enabled', 'true', 'boolean', 'Enable donations', true, 'features'),
('maintenance_mode', 'false', 'boolean', 'Enable maintenance mode', false, 'system'),
('max_file_upload_size', '10', 'number', 'Maximum file upload size in MB', false, 'system'),
('social_facebook', 'https://facebook.com/amicus.timisoara', 'string', 'Facebook page URL', true, 'social'),
('social_instagram', 'https://instagram.com/amicus.timisoara', 'string', 'Instagram page URL', true, 'social'),
('social_youtube', 'https://youtube.com/@amicus.timisoara', 'string', 'YouTube channel URL', true, 'social');

-- Sample data for development
INSERT INTO events (title, slug, description, event_type, event_date, location, max_participants, is_featured, is_public) VALUES
('Conferința Anuală AMiCUS 2024', 'conferinta-anuala-2024', 'Conferința anuală cu speakeri din domeniul medical și spiritual', 'conference', '2024-04-15 10:00:00+03', 'Universitatea de Medicină Timișoara', 300, true, true),
('Seară de Rugăciune', 'seara-rugaciune-martie', 'Seară de rugăciune și închinare pentru studenți', 'prayer', '2024-03-20 19:00:00+02', 'Sala de conferințe AMiCUS', 50, false, true),
('Workshop: Echilibru Spiritual în Medicină', 'workshop-echilibru-spiritual', 'Workshop despre integrarea credinței în practica medicală', 'workshop', '2024-03-25 14:00:00+02', 'Campus UMF', 30, true, true);

INSERT INTO projects (title, slug, description, project_type, status, budget, funding_goal, start_date, is_featured, is_public) VALUES
('Clinica Mobilă', 'clinica-mobila', 'Servicii medicale gratuite în comunitățile defavorizate', 'medical', 'active', 50000.00, 50000.00, '2024-01-01', true, true),
('Burse pentru Studenți', 'burse-studenti', 'Program de burse pentru studenții cu situație financiară precară', 'educational', 'active', 25000.00, 25000.00, '2024-02-01', true, true),
('Centrul de Consiliere', 'centrul-consiliere', 'Servicii de consiliere psihologică și spirituală', 'social', 'planning', 30000.00, 30000.00, '2024-06-01', false, true);

INSERT INTO posts (title, slug, content, excerpt, author_name, category, is_published, is_featured, published_at) VALUES
('Bun venit în comunitatea AMiCUS!', 'bun-venit-amicus', 'Suntem bucuroși să vă primim în familia noastră...', 'Descoperiți ce înseamnă să fii parte din AMiCUS Timișoara', 'Echipa AMiCUS', 'news', true, true, NOW()),
('Mărturie: Cum m-a schimbat AMiCUS', 'marturie-amicus', 'Povestea unui student despre transformarea sa...', 'O mărturie inspirațională despre impactul comunității', 'Maria Popescu', 'testimony', true, false, NOW() - INTERVAL '1 week'),
('Raport: Conferința de Toamnă 2023', 'raport-conferinta-toamna-2023', 'Un rezumat al evenimentelor și impactului conferinței...', 'Peste 200 de participanți la conferința de toamnă', 'Alexandru Ionescu', 'event_report', true, false, NOW() - INTERVAL '2 weeks');
