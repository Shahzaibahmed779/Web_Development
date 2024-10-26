module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'glow-sun': 'glow-sun 3s ease-in-out infinite',       // Sun glow
        'wobble-moon': 'wobble-moon 4s ease-in-out infinite', // Moon wobble
        'float-cloud': 'float-cloud 6s ease-in-out infinite', // Cloud floats up and down
        'spin-expand': 'spin-expand 10s ease-in-out infinite', // Cloud spins, expands, and contracts
        'fade-broken': 'fade-broken 8s ease-in-out infinite', // Broken clouds fade in/out
        'fall-rain': 'fall-rain 1.5s ease-in infinite',       // Raindrops fall with splash
        'flash-lightning': 'flash-lightning 2s infinite ease-in-out', // Lightning flashes with shake
        'twirl-snow': 'twirl-snow 5s ease-in-out infinite',   // Snowflakes twirl while falling
        'fog-roll': 'fog-roll 7s ease-in-out infinite',       // Fog rolls in and out
      },
      keyframes: {
        'glow-sun': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' },
        },
        'wobble-moon': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        'float-cloud': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-expand': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(360deg) scale(1.2)' },
        },
        'fade-broken': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'fall-rain': {
          '0%': { transform: 'translateY(-20px)', opacity: '1' },
          '80%': { transform: 'translateY(60px)', opacity: '0.9' },
          '100%': { transform: 'translateY(80px)', opacity: '0', width: '1px', height: '3px' },
        },
        'flash-lightning': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'twirl-snow': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(100px) rotate(360deg)' },
        },
        'fog-roll': {
          '0%, 100%': { opacity: '0.6', transform: 'translateX(0px)' },
          '50%': { opacity: '0.9', transform: 'translateX(20px)' },
        },
      },
    },
  },
  plugins: [],
};
