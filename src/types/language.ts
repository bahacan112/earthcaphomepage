export interface LanguageData {
  header: {
    navigation: {
      sparen: string;
      investieren: string;
      finanzwissen: string;
      hilfe: string;
    };
    buttons: {
      anmelden: string;
      registrieren: string;
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