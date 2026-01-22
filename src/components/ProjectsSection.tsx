import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ProjectCard: React.FC<{ 
  project: Project; 
  index: number;
  theme: any;
}> = ({ project, index, theme }) => {
  const scale = useSharedValue(0.9);
  const opacity = useSharedValue(0);
  const pressed = useSharedValue(false);

  React.useEffect(() => {
    scale.value = withSpring(1, { 
      damping: 12, 
      stiffness: 100 
    });
    opacity.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const scaleValue = pressed.value ? 0.98 : scale.value;
    return {
      transform: [{ scale: scaleValue }],
      opacity: opacity.value,
    };
  });

  const handlePress = () => {
    pressed.value = true;
    setTimeout(() => {
      pressed.value = false;
    }, 150);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(600).delay(index * 100)}
      style={[styles.cardContainer, animatedStyle]}
    >
      <AnimatedTouchable
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          }
        ]}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <View style={styles.cardHeader}>
          <Text style={[styles.projectTitle, { color: theme.text }]}>
            {project.title}
          </Text>
        </View>
        
        <Text style={[styles.projectDescription, { color: theme.textSecondary }]}>
          {project.description}
        </Text>

        <View style={styles.technologiesContainer}>
          {project.technologies.map((tech, techIndex) => (
            <View
              key={techIndex}
              style={[
                styles.techTag,
                { backgroundColor: theme.accent + '30' }
              ]}
            >
              <Text style={[styles.techText, { color: theme.accent }]}>
                {tech}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.cardFooter}>
          {project.githubUrl && (
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => handleLinkPress(project.githubUrl!)}
            >
              <Ionicons name="logo-github" size={20} color={theme.accent} style={{ marginRight: 5 }} />
              <Text style={[styles.linkText, { color: theme.accent }]}>
                GitHub
              </Text>
            </TouchableOpacity>
          )}
          {project.demoUrl && (
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => handleLinkPress(project.demoUrl!)}
            >
              <Ionicons name="open-outline" size={20} color={theme.accent} style={{ marginRight: 5 }} />
              <Text style={[styles.linkText, { color: theme.accent }]}>
                Demo
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </AnimatedTouchable>
    </Animated.View>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ProjectCard project={item} index={index} theme={theme} />
        )}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
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
  listContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  techTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardFooter: {
    flexDirection: 'row',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
