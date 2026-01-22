import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Animated, { 
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDelay
} from 'react-native-reanimated';

interface SkillsSectionProps {
  skills: string[];
}

const SkillChip: React.FC<{ skill: string; index: number; theme: any }> = ({ 
  skill, 
  index,
  theme 
}) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    scale.value = withDelay(
      index * 100,
      withSpring(1, { damping: 10, stiffness: 100 })
    );
    opacity.value = withDelay(index * 100, withSpring(1));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        styles.chip,
        { 
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
        animatedStyle
      ]}
    >
      <Text style={[styles.chipText, { color: theme.text }]}>{skill}</Text>
    </Animated.View>
  );
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { theme } = useTheme();

  return (
    <Animated.View 
      entering={FadeInRight.duration(600).delay(200)}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>Skills</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.skillsContainer}
      >
        {skills.map((skill, index) => (
          <SkillChip 
            key={skill} 
            skill={skill} 
            index={index}
            theme={theme}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  skillsContainer: {
    paddingRight: 20,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
