# Quick Start for Expo Snack

## Files Ready to Copy

All your files are already Snack-compatible! Just follow these steps:

### Step 1: Copy package.json
In Snack, go to the `package.json` tab and paste this:

```json
{
  "name": "eguia-ross-simon-mobile-portfolio",
  "version": "1.0.0",
  "main": "App.tsx",
  "dependencies": {
    "expo": "~54.0.32",
    "expo-status-bar": "~3.0.9",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-native-reanimated": "~3.16.1",
    "@expo/vector-icons": "^15.0.3"
  }
}
```

### Step 2: Copy Files
Copy these files from your project to Snack (maintain folder structure):

**Root:**
- `App.tsx`

**src/components/:**
- `ContactSection.tsx`
- `ProfileSection.tsx`
- `ProjectsSection.tsx`
- `SkillsSection.tsx`
- `ThemeToggle.tsx`

**src/data/:**
- `portfolioData.ts`

**src/theme/:**
- `colors.ts`
- `ThemeContext.tsx`

### Step 3: Upload Assets
1. In Snack, go to the Assets section
2. Upload `assets/icon.png`
3. The image path `require('../../assets/icon.png')` will work automatically

### Step 4: Optional - Add babel.config.js
If needed, add this in Snack:
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

## That's It!
Your project should work in Snack. The local project remains unchanged and will continue to work for local development.
