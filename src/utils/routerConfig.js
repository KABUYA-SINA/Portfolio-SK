const basename =

  // ========================
  // BASE PATH CONFIGURATION
  // ========================
  process.env.NODE_ENV === 'production'
    ? '/Portfolio-SK'
    : '/';

export default basename;