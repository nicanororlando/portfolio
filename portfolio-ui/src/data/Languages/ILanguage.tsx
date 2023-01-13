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
    section_title: string;
    section_subTitle: string;
    about_data: {
      about_description: string;
      download: string;
      experience: string;
      years: string;
      completed: string;
      proyects_amount: string;
    };
  };
}
