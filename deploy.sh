#!/bin/bash

# Kashika Sharda Portfolio - Deployment Script
# This script helps deploy the portfolio website to GitHub Pages

echo "🚀 Kashika Sharda Portfolio Deployment Script"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (default: 'Update portfolio website'): " commit_message
commit_message=${commit_message:-"Update portfolio website"}
git commit -m "$commit_message"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Setting up GitHub remote..."
    read -p "Enter your GitHub username: " github_username
    read -p "Enter repository name (default: 'kashika.dharaik.in'): " repo_name
    repo_name=${repo_name:-"kashika.dharaik.in"}
    
    git remote add origin "https://github.com/$github_username/$repo_name.git"
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Deployment completed!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Enable GitHub Pages from main branch"
echo "4. Your site will be available at: https://yourusername.github.io/repositoryname"
echo "5. For custom domain (kashika.dharaik.in), configure DNS settings as mentioned in README.md"
echo ""
echo "🎉 Kashika's portfolio website is ready to go live!" 