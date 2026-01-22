// Color palette definitions
export const lightColors = {
  // Sand-Ivory palette for light mode
  primary: '#F5F1E8',      // Light sand/ivory
  secondary: '#E8E0D4',    // Medium sand
  background: '#FDFCF9',   // Very light ivory
  surface: '#FFFFFF',      // Pure white
  text: '#3A3A3A',         // Dark grey text
  textSecondary: '#6B6B6B', // Medium grey text
  accent: '#D4C4B0',       // Warm sand accent
  border: '#E0D8CC',       // Light border
  card: '#FAF8F3',         // Card background
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const darkColors = {
  // Cool Greys palette for dark mode
  primary: '#2C2C2C',      // Dark grey
  secondary: '#3A3A3A',    // Medium dark grey
  background: '#1E1E1E',   // Very dark grey
  surface: '#252525',      // Dark surface
  text: '#E8E8E8',         // Light grey text
  textSecondary: '#B0B0B0', // Medium light grey text
  accent: '#4A4A4A',       // Cool grey accent
  border: '#353535',       // Dark border
  card: '#2A2A2A',         // Card background
  shadow: 'rgba(0, 0, 0, 0.3)',
};

export type ColorScheme = typeof lightColors;
