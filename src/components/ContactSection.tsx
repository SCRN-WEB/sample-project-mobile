import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  FadeInLeft,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

interface ContactInfo {
  email: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const ContactItem: React.FC<{
  icon: string;
  label: string;
  value: string;
  onPress: () => void;
  index: number;
  theme: any;
}> = ({ icon, label, value, onPress, index, theme }) => {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    scale.value = withSpring(1, { damping: 10, stiffness: 100 });
    opacity.value = withSpring(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <AnimatedTouchable
      style={[
        styles.contactItem,
        { 
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
        animatedStyle
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={icon as any} size={24} color={theme.accent} />
      <View style={styles.contactTextContainer}>
        <Text style={[styles.contactLabel, { color: theme.textSecondary }]}>
          {label}
        </Text>
        <Text style={[styles.contactValue, { color: theme.text }]}>
          {value}
        </Text>
      </View>
    </AnimatedTouchable>
  );
};

export const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const { theme } = useTheme();

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contactInfo.email}`);
  };

  const handleSocialPress = (url: string) => {
    Linking.openURL(url);
  };

  const socialIcons: { [key: string]: string } = {
    github: 'logo-github',
    linkedin: 'logo-linkedin',
    twitter: 'logo-twitter',
    portfolio: 'globe-outline',
  };

  return (
    <Animated.View 
      entering={FadeInLeft.duration(600).delay(200)}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>Contact</Text>
      
      <ContactItem
        icon="mail-outline"
        label="Email"
        value={contactInfo.email}
        onPress={handleEmailPress}
        index={0}
        theme={theme}
      />

      {contactInfo.socialLinks && Object.entries(contactInfo.socialLinks).map(
        ([platform, url], index) => (
          <ContactItem
            key={platform}
            icon={socialIcons[platform] || 'link-outline'}
            label={platform.charAt(0).toUpperCase() + platform.slice(1)}
            value={url}
            onPress={() => handleSocialPress(url)}
            index={index + 1}
            theme={theme}
          />
        )
      )}
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  contactTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '600',
  },
});
