const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Linkup Group Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Student Management",

      "Auth.form.welcome.title": "Welcom to Linkup Group",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};