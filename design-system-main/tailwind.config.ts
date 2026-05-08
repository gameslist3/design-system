import type { Config } from 'tailwindcss';
import { colors } from './src/tokens/colors';
import { typography } from './src/tokens/typography';
import { spacing } from './src/tokens/spacing';
import { radius } from './src/tokens/radius';
import { shadows } from './src/tokens/shadows';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        ...typography.fontFamily,
      },
      fontSize: {
        ...typography.fontSize,
      },
      fontWeight: {
        ...typography.fontWeight,
      },
      spacing: {
        ...spacing,
      },
      borderRadius: {
        ...radius,
      },
      boxShadow: {
        ...shadows,
      },
      // Adding professional transitions
      transitionDuration: {
        'default': '200ms',
        'fast': '100ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
