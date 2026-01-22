import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const ThemeToggle: React.FC = () => {
  const { isDark, setThemeMode, theme } = useTheme();
  const toggleProgress = useSharedValue(isDark ? 1 : 0);

  React.useEffect(() => {
    toggleProgress.value = withSpring(isDark ? 1 : 0, {
      damping: 15,
      stiffness: 150,
    });
  }, [isDark]);

  const toggleTheme = () => {
    setThemeMode(isDark ? 'light' : 'dark');
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.accent,
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    const rotate = toggleProgress.value * 180;
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <AnimatedTouchable
      style={[styles.container, animatedStyle]}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      <Animated.View style={iconStyle}>
        <Ionicons 
          name={isDark ? 'moon' : 'sunny'} 
          size={24} 
          color={theme.text} 
        />
      </Animated.View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
