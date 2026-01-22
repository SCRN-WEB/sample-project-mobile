# Expo Snack Setup Guide

## Quick Setup Steps

### 1. Update package.json in Snack
Copy the contents of `package.json.snack` to your Snack's `package.json` tab.

### 2. File Structure in Snack
Create the following folder structure in Snack:
```
App.tsx (root)
src/
  ├── components/
  │   ├── ContactSection.tsx
  │   ├── ProfileSection.tsx
  │   ├── ProjectsSection.tsx
  │   ├── SkillsSection.tsx
  │   └── ThemeToggle.tsx
  ├── data/
  │   └── portfolioData.ts
  └── theme/
      ├── colors.ts
      └── ThemeContext.tsx
```

### 3. Assets
- Upload `assets/icon.png` to Snack's Assets section
- The image path in `ProfileSection.tsx` uses `require('../../assets/icon.png')` which should work if you upload the icon

### 4. Babel Config (Optional)
Snack usually handles this automatically, but if needed, add `babel.config.js`:
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

## Important Notes:

✅ **What Works:**
- All TypeScript files
- React Native Reanimated animations
- Expo Vector Icons
- Theme system
- All components

⚠️ **Limitations:**
- `react-native-web` is not needed (Snack doesn't use it)
- Some devDependencies are not needed
- Make sure to upload assets to Snack's asset manager

## Step-by-Step:

1. Go to https://snack.expo.dev
2. Click "New Snack" or create a new project
3. In the `package.json` tab, paste the contents from `package.json.snack`
4. Copy `App.tsx` to the root
5. Create `src/` folder and copy all files from your local `src/` folder
6. Upload `assets/icon.png` to the Assets section
7. Save and run!

## Alternative: Use Snack's Import Feature

You can also:
1. Export your project as a zip
2. Use Snack's import feature (if available)
3. Or manually copy files as described above
