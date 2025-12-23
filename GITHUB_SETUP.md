# Step-by-Step Guide: Publishing City Mobile Website on GitHub

## Prerequisites
- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer (download from https://git-scm.com)

---

## Step 1: Create a New Repository on GitHub

1. **Log in to GitHub** (https://github.com)
2. Click the **"+" icon** in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `citymobile` (or any name you like)
   - **Description**: "City Mobile Phone Repair Website" (optional)
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize this repository with a README"
5. Click **"Create repository"**

---

## Step 2: Open Terminal/Command Prompt

### On Mac:
- Press `Cmd + Space`, type "Terminal", and press Enter

### On Windows:
- Press `Win + R`, type "cmd", and press Enter
- Or search for "Command Prompt" in the Start menu

---

## Step 3: Navigate to Your Project Folder

Type this command (replace with your actual path if different):

```bash
cd /Users/muhammad-zain/Desktop/citymobile
```

Press Enter.

---

## Step 4: Initialize Git Repository

Run these commands one by one:

```bash
git init
```

This initializes a Git repository in your folder.

---

## Step 5: Add All Your Files

```bash
git add .
```

This adds all your files (index.html, styles.css, script.js, etc.) to Git.

---

## Step 6: Create Your First Commit

```bash
git commit -m "Initial commit - City Mobile website"
```

This saves your files with a message.

---

## Step 7: Connect to GitHub Repository

After creating the repository on GitHub, you'll see a page with setup instructions. Look for the section that says **"…or push an existing repository from the command line"**

Copy the commands that look like this (your URL will be different):

```bash
git remote add origin https://github.com/YOUR_USERNAME/citymobile.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

For example, if your username is "johnsmith", it would be:
```bash
git remote add origin https://github.com/johnsmith/citymobile.git
git branch -M main
git push -u origin main
```

Run these three commands one by one.

**Note**: You'll be asked to log in to GitHub. Use your GitHub username and a Personal Access Token (not your password). See Step 8 if you need to create one.

---

## Step 8: Create Personal Access Token (If Needed)

If Git asks for authentication:

1. Go to GitHub.com → Click your profile picture (top right)
2. Click **"Settings"**
3. Scroll down and click **"Developer settings"** (left sidebar)
4. Click **"Personal access tokens"** → **"Tokens (classic)"**
5. Click **"Generate new token"** → **"Generate new token (classic)"**
6. Give it a name like "Website Upload"
7. Select expiration (choose how long it should last)
8. Check the box **"repo"** (this gives access to repositories)
9. Scroll down and click **"Generate token"**
10. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
11. When Git asks for password, paste this token instead

---

## Step 9: Enable GitHub Pages

1. Go back to your repository on GitHub
2. Click on **"Settings"** (top menu of your repository)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

---

## Step 10: Your Website is Live! 🎉

GitHub will give you a URL like:
```
https://YOUR_USERNAME.github.io/citymobile/
```

**It may take 1-2 minutes for the site to go live.** You'll see a green checkmark when it's ready.

---

## Step 11: Update Your WhatsApp Number

**IMPORTANT**: Before sharing your website, update your WhatsApp number:

1. Open `script.js` in your project folder
2. Find line 52 that says:
   ```javascript
   const whatsappNumber = '1234567890';
   ```
3. Replace `'1234567890'` with your actual WhatsApp number
   - Format: Country code + number (no + or 0)
   - Example: UK number 07123456789 → `447123456789`
   - Example: US number (555) 123-4567 → `15551234567`
4. Save the file
5. Run these commands to update GitHub:
   ```bash
   git add script.js
   git commit -m "Update WhatsApp number"
   git push
   ```

---

## Updating Your Website Later

Whenever you make changes to your website:

1. Make your changes to the files
2. Open Terminal/Command Prompt
3. Navigate to your project folder:
   ```bash
   cd /Users/muhammad-zain/Desktop/citymobile
   ```
4. Run these commands:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```

Your website will update automatically in 1-2 minutes!

---

## Troubleshooting

### "Repository not found" error
- Make sure you typed the repository URL correctly
- Check that the repository exists on GitHub
- Verify your username is correct

### "Permission denied" error
- Make sure you're using a Personal Access Token (not password)
- Check that the token has "repo" permissions

### Website shows 404 error
- Wait 2-3 minutes after enabling GitHub Pages
- Check that you selected "main" branch and "/ (root)" folder
- Make sure your `index.html` file is in the root folder

### Changes not showing up
- Wait 1-2 minutes for GitHub to update
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check that you ran `git push` successfully

---

## Need Help?

- GitHub Docs: https://docs.github.com/en/pages
- Git Basics: https://git-scm.com/doc

Good luck! 🚀

