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
    section_subtitle: string;
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
    section_title: string;
    section_subtitle: string;
    frontend_title: string;
    backend_title: string;
    levels: {
      basic: string;
      intermediate: string;
      advanced: string;
    };
  };
  services: {
    section_title: string;
    section_subtitle: string;
    view_more: string;
    service_1: {
      services_title_1: string;
      services_title_2: string;
      modal: {
        title: string;
        description: string;
        grid_title: string;
        ul: {
          p1: string;
          p2: string;
          p3: string;
        };
      };
    };
    service_2: {
      services_title_1: string;
      services_title_2: string;
      modal: {
        title: string;
        description: string;
        grid_title: string;
        ul: {
          p1: string;
          p2: string;
          p3: string;
        };
      };
    };
    service_3: {
      services_title_1: string;
      services_title_2: string;
      modal: {
        title: string;
        description: string;
        grid_title: string;
        ul: {
          p1: string;
          p2: string;
          p3: string;
        };
      };
    };
  };
  qualifications: {
    section_title: string;
    section_subtitle: string;
  };
  contact: {
    section_title: string;
    section_subtitle: string;
    h3_title: string;
    mail: string;
    wpp: string;
    instagram: string;
    card_1: {
      title: string;
      data: string;
      write_me: string;
    };
    card_2: {
      title: string;
      data: string;
      write_me: string;
    };
    card_3: {
      title: string;
      data: string;
      write_me: string;
    };
    h3_title_form: string;
    form: {
      name: string;
      name_placeholder: string;
      mail: string;
      mail_placeholder: string;
      project: string;
      project_placehoder: string;
    };
  };
}