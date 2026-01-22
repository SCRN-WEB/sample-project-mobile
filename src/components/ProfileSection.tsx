import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Animated, { 
  FadeInDown, 
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate
} from 'react-native-reanimated';

interface ProfileSectionProps {
  name: string;
  bio: string;
  profileImage?: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  name, 
  bio, 
  profileImage 
}) => {
  const { theme } = useTheme();
  const pulse = useSharedValue(0);

  React.useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1, { duration: 2000 }),
      -1,
      true
    );
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => {
    const scale = interpolate(pulse.value, [0, 1], [1, 1.05]);
    return {
      transform: [{ scale }],
    };
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Animated.View 
        entering={FadeInDown.duration(800).delay(100)}
        style={styles.imageContainer}
      >
        <Animated.Image
          source={profileImage 
            ? { uri: profileImage } 
            : require('../../assets/icon.png')
          }
          style={[
            styles.profileImage, 
            { borderColor: theme.accent },
            animatedImageStyle
          ]}
        />
      </Animated.View>
      
      <Animated.View 
        entering={FadeInUp.duration(800).delay(300)}
        style={styles.textContainer}
      >
        <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
        <Text style={[styles.bio, { color: theme.textSecondary }]}>{bio}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: '90%',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
