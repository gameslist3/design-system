export const typography = {
  fontFamily: {
    sans: 'var(--font-family)',
    primary: 'var(--font-family)',
    secondary: 'var(--second-family)',
    tertiary: 'var(--third-family)',
    sora: 'var(--font3)',
    montserrat: 'var(--font4)',
    'liberation-sans': 'var(--font5)',
    'liberation-serif': 'var(--font6)',
    'albert-sans': 'var(--font7)',
  },
  fontSize: {
    // Body Scale
    smxx: ['0.5rem', { lineHeight: '1rem' }],       // 8px
    smxl: ['0.625rem', { lineHeight: '1rem' }],     // 10px
    smx: ['0.75rem', { lineHeight: '1.25rem' }],    // 12px
    sm: ['0.875rem', { lineHeight: '1.375rem' }],   // 14px (Line Height 22px)
    md: ['1rem', { lineHeight: '1.5625rem' }],      // 16px (Line Height 25px)
    lg: ['1.125rem', { lineHeight: '1.75rem' }],     // 18px (Line Height 28px)
    
    // Heading Scale
    h6: ['1.125rem', { lineHeight: '1.375rem' }],   // 18px (Line Height 22px)
    h5: ['1.250rem', { lineHeight: '1.625rem' }],   // 20px (Line Height 26px)
    h4: ['1.438rem', { lineHeight: '1.875rem' }],   // 23px (Line Height 30px)
    h3: ['1.625rem', { lineHeight: '2.000rem' }],   // 26px (Line Height 32px)
    h2: ['1.812rem', { lineHeight: '2.250rem' }],   // 29px (Line Height 36px)
    h1: ['2.000rem', { lineHeight: '2.500rem' }],   // 32px (Line Height 40px)
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

