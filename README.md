# DevConnect - Developer Blog Dashboard

A beautiful, cloud-themed developer blog platform built with React, TypeScript, and Tailwind CSS.

![DevConnect Screenshot](https://via.placeholder.com/800x400/2196f3/ffffff?text=DevConnect+Dashboard)

## 🚀 Features

- **Cloud-Themed Design**: Beautiful gradients, glass morphism effects, and floating animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Blog System**: Featured posts, individual articles, and rich content layouts
- **Author Profiles**: Expert developer profiles with specialties and stats
- **Category Organization**: Technology topics with organized post previews
- **Search Functionality**: Real-time search across all content
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🛠️ Technologies

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd devconnect

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🐳 Docker Deployment

### Using Docker

```bash
# Build the Docker image
docker build -t devconnect .

# Run the container
docker run -p 8080:80 devconnect

# Open http://localhost:8080 in your browser
```

### Using Docker Compose

```bash
# Build and run with docker-compose
docker-compose up --build

# Run in detached mode
docker-compose up -d --build
```

### Production Docker Setup

```bash
# Build production image
docker build -t devconnect:latest .

# Run with custom port and name
docker run -d \
  --name devconnect-app \
  -p 80:80 \
  --restart unless-stopped \
  devconnect:latest

# Check container status
docker ps

# View logs
docker logs devconnect-app
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Main navigation
│   ├── HeroSection.tsx # Landing hero section
│   └── BlogCard.tsx    # Blog post cards
├── pages/              # Route components
│   ├── Index.tsx       # Home page
│   ├── BlogPost.tsx    # Individual blog post
│   ├── Authors.tsx     # Authors listing
│   └── Categories.tsx  # Categories page
├── data/               # Static data and types
│   └── blogData.ts     # Blog posts and authors
├── types/              # TypeScript type definitions
│   └── blog.ts         # Blog-related types
└── assets/             # Images and static assets
```

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Cloud-inspired blues (#2196f3 primary)
- **Typography**: System font stack for optimal readability
- **Spacing**: 8px grid system for consistency
- **Effects**: Glass morphism, backdrop blur, floating animations
- **Responsive**: Mobile-first design approach

## ✨ Development with Lovable

This project was created using [Lovable](https://lovable.dev), an AI-powered web development platform.

### Edit with Lovable

1. Visit the [Lovable Project](https://lovable.dev/projects/fdde00e8-c5d5-4124-8e48-781777c62264)
2. Start prompting to make changes
3. Changes automatically sync to this repository

### GitHub Integration

- **Bidirectional Sync**: Changes in Lovable push to GitHub, and GitHub changes sync to Lovable
- **Real-time Updates**: No manual pulls or pushes required
- **Version Control**: Built-in version history and rollback features

## 🚀 Deployment Options

### Lovable Hosting

Simply open [Lovable](https://lovable.dev/projects/fdde00e8-c5d5-4124-8e48-781777c62264) and click **Share → Publish**.

### Custom Domain

Navigate to **Project > Settings > Domains** and click **Connect Domain**.

[Learn more about custom domains](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

### Self-Hosting

The built application is a standard static web app that can be deployed to:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import project and deploy with zero configuration
- **AWS S3**: Upload built files to S3 bucket with CloudFront
- **Docker**: Use the provided Dockerfile for containerized deployment
- **Traditional Hosting**: Upload `dist/` folder to any web server

## 🐳 Docker Configuration

### Multi-stage Build

The Dockerfile uses a multi-stage build process:

1. **Builder Stage**: Installs dependencies and builds the application
2. **Production Stage**: Serves the built app with optimized nginx configuration

### Nginx Features

- **Gzip Compression**: Reduces file sizes for faster loading
- **Static Asset Caching**: Long-term caching for images, CSS, and JS
- **Security Headers**: XSS protection, content type nosniff, frame options
- **Health Check**: `/health` endpoint for monitoring
- **SPA Routing**: Proper handling of client-side routes

### Environment Variables

For production deployments, you can set environment variables:

```bash
# Example environment variables
docker run -d \
  -p 80:80 \
  -e NODE_ENV=production \
  -e VITE_API_URL=https://api.yoursite.com \
  devconnect:latest
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Documentation**: [Lovable Docs](https://docs.lovable.dev/)
- **Community**: [Lovable Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **Issues**: Create an issue in this repository

---

Built with ❤️ using [Lovable](https://lovable.dev)
