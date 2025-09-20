export interface LanguageData {
  header: {
    navigation: {
      sparen: string;
      investieren: string;
      finanzwissen: string;
      hilfe: string;
    };
    dropdown?: {
      sparen?: {
        festgeld?: {
          title: string;
          description: string;
          link: string;
        };
        nachhaltiges_festgeld?: {
          title: string;
          description: string;
          link: string;
        };
        tagesgeld?: {
          title: string;
          description: string;
          link: string;
        };
        kuendigungsgeld?: {
          title: string;
          description: string;
          link: string;
        };
        zinsportfolio?: {
          title: string;
          description: string;
          link: string;
        };
      };
    };
    buttons: {
      depot: string;
    };
  };
  heroSection: {
    title: string;
    features: string[];
    buttons: {
      register: string;
      compare: string;
    };
    imageAlt: string;
    disclaimer: string;
  };
  trustBadges: {
    badges: Array<{
      image: string;
      alt: string;
      text: string;
    }>;
  };
  tagesgeldPage: {
    hero: {
      badge: string;
      title: string;
      features: string[];
      buttons: {
        compare: string;
        register: string;
      };
      imageAlt: string;
    };
    whyRaisin: {
      title: string;
      subtitle: string;
      features: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}