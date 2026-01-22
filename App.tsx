import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { ThemeToggle } from './src/components/ThemeToggle';
import { ProfileSection } from './src/components/ProfileSection';
import { SkillsSection } from './src/components/SkillsSection';
import { ContactSection } from './src/components/ContactSection';
import { ProjectsSection } from './src/components/ProjectsSection';
import { portfolioData } from './src/data/portfolioData';

const AppContent: React.FC = () => {
  const { theme, isDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <ThemeToggle />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ProfileSection
          name={portfolioData.profile.name}
          bio={portfolioData.profile.bio}
          profileImage={portfolioData.profile.profileImage}
        />
        <SkillsSection skills={portfolioData.skills} />
        <ContactSection contactInfo={portfolioData.contact} />
        <ProjectsSection projects={portfolioData.projects} />
      </ScrollView>
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
