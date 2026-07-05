# SRIRAM FRUITS - Logo Design

## 🎨 Logo Concept

The logo combines traditional agricultural heritage with modern premium branding, creating a sophisticated identity for Sriram Fruits.

## Logo Components

### 1. **Icon Design - Pomegranate Crown**
- **Shape**: Circular pomegranate with crown/leaf at top
- **Symbolism**: 
  - Circle represents wholeness and quality
  - Crown/leaf represents premium status and natural origin
  - Seeds pattern inside represents the actual fruit
- **Colors**:
  - Outer gradient: Deep pomegranate red (#65000a → #8c0d17)
  - Seeds: Ruby red (#b80837, #dc2d4d) with varied opacity
  - Crown: Leafy green (#06361e) with highlight (#8ebd9c)
  - Glow effect: Subtle primary red with blur

### 2. **Typography**
- **"SRIRAM"**: 
  - Font: Source Serif 4 (serif for heritage/tradition)
  - Size: 24px
  - Weight: Bold (700)
  - Color: Primary red (#65000a)
  - Effect: Animated underline on hover (gradient from primary to secondary)
  
- **"FRUITS"**:
  - Font: Work Sans (sans-serif for modernity)
  - Size: 11px
  - Weight: Bold (700)
  - Letter spacing: 0.2em (wide tracking for premium feel)
  - Color: Tertiary green (#06361e)
  - Decoration: Dot separators on both sides

### 3. **Interactive Features**
- **Hover Effects**:
  - Icon: Subtle rotation-pulse animation (rotates 180° and scales slightly)
  - Text: Gradient underline slides in from left to right
  - Glow: Increases opacity on hover

## Variations

### Full Logo (Navigation & Footer)
- Icon: 48x48px
- Text: Two-line layout
- Spacing: 12px gap between icon and text
- Use: Desktop navigation, footer, large displays

### Compact Logo
- Icon: 40x40px
- Text: Smaller, more compact
- Use: Mobile navigation, favicons, small spaces

## Design Philosophy

1. **Heritage Meets Modern**: Serif + Sans-serif combination
2. **Premium Feel**: Gradient effects, subtle animations, wide letter spacing
3. **Natural Connection**: Green crown, seed pattern, organic shapes
4. **Brand Colors**: Deep reds (pomegranate), green (agriculture), clean surfaces

## Color Meanings
- **Primary Red (#65000a)**: Authority, quality, pomegranate ripeness
- **Secondary Pink (#b80837)**: Energy, freshness, vitality
- **Tertiary Green (#06361e)**: Nature, growth, sustainability
- **Gradients**: Depth, premium quality, natural variation

## Implementation Details

### Component Structure
```tsx
<Logo />          // Full logo for navigation
<LogoCompact />   // Compact version for mobile
```

### CSS Features
- SVG gradients for smooth color transitions
- Drop shadows for depth
- Blur effects for glow
- Keyframe animations for interactivity

### Accessibility
- High contrast between text and background
- Clear icon shapes
- Readable at all sizes
- No reliance on color alone for meaning

## Usage Guidelines

### DO:
✅ Use on light backgrounds (surface, white)
✅ Maintain minimum clear space of 8px around logo
✅ Keep aspect ratio intact
✅ Use provided color values exactly

### DON'T:
❌ Stretch or distort the logo
❌ Change the color scheme
❌ Remove the crown/leaf element
❌ Use on busy backgrounds without container
❌ Make smaller than 32px height

## File Locations
- Logo component: `/src/components/Logo.tsx`
- Animations: `/src/app/globals.css`
- Usage: Navigation, Footer, future marketing materials
