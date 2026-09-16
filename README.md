# Suryansh Tayal — Portfolio

A single-page personal portfolio built with plain HTML, CSS and JavaScript (no framework, no build step).

```
suryansh-tayal-portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── resume.pdf      ← add your resume here (see below)
└── README.md
```

## Before you deploy

1. Add your resume PDF at `assets/resume.pdf` so the **Download Resume** button works.
2. In `index.html`, replace the two project GitHub links (currently pointing at your
   profile) with the actual repository URLs once those projects are pushed to GitHub.
3. Optional: replace the favicon, update copy, or add more projects using the existing
   `.project-card` markup as a template.

## Deploying to GitHub Pages

These are the same steps used to deploy any static project to GitHub Pages.

### 1. Open the project folder

**Windows (Git Bash):**
```bash
cd ~/Desktop
cd suryansh-tayal-portfolio
ls
```

**macOS (Terminal):**
```bash
cd ~/Desktop
cd suryansh-tayal-portfolio
ls
```

### 2. Check Git is installed
```bash
git --version
```

### 3. Configure your Git identity (one-time)
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 4. Initialize the local repository
```bash
git init
git branch -M main
```

### 5. Stage and commit the project
```bash
git add .
git commit -m "Initial portfolio website"
```

### 6. Create an empty repository on GitHub
- Sign in to GitHub.
- Click **+** → **New repository**.
- Name it, e.g. `suryansh-tayal-portfolio`.
- Choose **Public**.
- Do **not** initialize it with a README, `.gitignore`, or license — this project already has one.
- Click **Create repository**.

### 7. Connect the local project to GitHub
```bash
git remote add origin https://github.com/Suryansh-Tayal/suryansh-tayal-portfolio.git
git remote -v
```

### 8. Push to GitHub
```bash
git push -u origin main
```

### 9. Enable GitHub Pages
- In the repository, go to **Settings → Pages**.
- Under **Build and deployment**, set **Source** to **Deploy from a branch**.
- Set **Branch** to `main` and folder to `/(root)`.
- Click **Save**.

### 10. View the live site
```
https://Suryansh-Tayal.github.io/suryansh-tayal-portfolio/
```

## Updating the site later

```bash
git add .
git commit -m "Update website"
git push
```

If you ever edit a file directly on GitHub, pull those changes down first:
```bash
git pull origin main
```
Portfolio website
