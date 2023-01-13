export interface ILanguage {
  navBar: {
    home: string;
    about: string;
    skills: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  home: {
    data: {
      home_subtitle: string;
      home_description: string;
      hello_button: string;
    };
    scrollDown: string;
  };
  about: {
    title: string;
    subtitle: string;
    about_data: {
      about_description: string;
      download: string;
      box: {
        exp_title: string;
        exp_subtitle: string;
        completed_title: string;
        completed_subtitle: string;
        support_title: string;
        support_subtitle: string;
      };
    };
  };
  skills: {
    title: string;
    subtitle: string;
    frontend_title: string;
    backend_title: string;
    levels: {
      basic: string;
      intermediate: string;
      advanced: string;
    };
  };
}
