# Kashika Sharda - Portfolio Website

A modern, responsive portfolio website showcasing Kashika Sharda's expertise as a Solution Engineer and Data Scientist. Built with HTML5, CSS3, and JavaScript, featuring innovative design and smooth animations.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth scroll animations, skill bar progress, and hover effects
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Accessibility**: WCAG compliant design elements

## 🎨 Design Highlights

- Beautiful gradient color scheme (`#667eea` to `#764ba2`)
- Interactive skill bars with animation on scroll
- Floating profile card with hover effects
- Timeline-based experience section
- Project showcase with impact metrics
- Contact form with validation
- Smooth scrolling navigation

## 📱 Sections

1. **Hero Section**: Introduction with career update (joining Moveworks)
2. **About**: Professional summary with key statistics
3. **Experience**: Timeline showcasing current role at FICO and upcoming position at Moveworks
4. **Projects**: Featured projects with technologies and impact
5. **Skills**: Technical expertise across multiple categories
6. **Awards**: Recognition and achievements
7. **Contact**: Multiple contact methods and contact form

## 🚀 Setup for GitHub Pages

### Step 1: Repository Setup

Repository: **https://github.com/kashikasharda/KashikaSharda_AboutMe**

### Step 2: Upload Files

**Option A: Using the Deploy Script**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Option B: Manual Git Commands**
```bash
git init
git add .
git commit -m "Initial portfolio website setup"
git branch -M main
git remote add origin https://github.com/kashikasharda/KashikaSharda_AboutMe.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to **https://github.com/kashikasharda/KashikaSharda_AboutMe/settings/pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

### Step 4: Custom Domain Setup

1. The `CNAME` file is already included with `kashika.dharaik.in`
2. In GitHub Pages settings, add custom domain: **kashika.dharaik.in**
3. In your domain registrar's DNS settings, add:
   
   **CNAME Record:**
   ```
   Type: CNAME
   Name: www
   Value: kashikasharda.github.io
   ```
   
   **OR A Records:**
   ```
   Type: A
   Name: @
   Values: 
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   ```

4. Wait for DNS propagation (usually 24-48 hours)

## 📁 File Structure

```
KashikaSharda_AboutMe/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Documentation
├── CNAME              # Custom domain configuration
└── deploy.sh          # Deployment script
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox/Grid, animations, and gradients
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons for visual enhancement
- **Google Fonts**: Inter font family for modern typography

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Colors
The main color scheme uses CSS custom properties:
- Primary: `#667eea` to `#764ba2` (gradient)
- Success: `#10b981`
- Warning: `#f59e0b`
- Text: `#333333`
- Background: `#ffffff`

### Content Updates
1. **Personal Information**: Update contact details in the contact section
2. **Projects**: Add/modify projects in the projects section
3. **Experience**: Update work experience in the timeline
4. **Skills**: Modify skill levels and add new technologies

## 🚀 Performance Features

- Intersection Observer for scroll animations
- Lazy loading implementation
- Optimized CSS and JavaScript
- Minimal external dependencies

## 📈 SEO Optimization

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Fast loading performance
- Mobile-first responsive design

## 🎯 Career Highlight

**Upcoming Role**: Kashika is joining **Moveworks** as a Software Engineer in July 2024, marking an exciting new chapter in her career journey from FICO where she has been a Solution Engineer since 2018.

## 🌐 Live Website

Once deployed, the website will be available at: **https://kashika.dharaik.in**

## 📧 Contact

- **Email**: kashikasharda@gmail.com
- **LinkedIn**: [linkedin.com/in/kashika-sharda](https://linkedin.com/in/kashika-sharda)
- **GitHub**: [github.com/kashikasharda](https://github.com/kashikasharda)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for Kashika Sharda's professional portfolio** 