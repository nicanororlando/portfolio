export interface ILanguage {
  navBar: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    services: string;
    travel: string;
    contact: string;
  };
  home: {
    data: {
      hello: string;
      home_subtitle: string;
      home_subtitle_frontend: string;
      home_subtitle_backend: string;
      home_subtitle_fullstack: string;
      home_description: string;
      hello_button: string;
    };
    scrollDown: string;
  };
  about: {
    section_title: string;
    section_subtitle: string;
    about_data: {
      about_description_1: string;
      about_description_2: string;
      about_description_3: string;
      age: string;
      age_number: string;
      work: string;
      work_status: string;
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
      initial: string;
      basic: string;
      intermediate: string;
      advanced: string;
      professional: string;
    };
    titles: {
      frontend_chart: string;
      backend_chart: string;
      db_chart: string;
    };
    labels_back: {
      language: string;
      framework: string;
      testing: string;
    };
  };
  projects: {
    section_title: string;
    section_subtitle: string;
    frontend_title: string;
    backend_title: string;
    btn_visit: string;
    btn_close: string;
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
  portfolio: {
    section_title: string;
    section_subtitle: string;
    education: {
      first: {
        title: string;
        subtitle: string;
        date: string;
      };
      second: {
        title: string;
        subtitle: string;
        date: string;
      };
      third: {
        title: string;
        subtitle: string;
        date: string;
      };
    };
    experience: {
      first: {
        title: string;
        subtitle: string;
        date: string;
      };
      second: {
        title: string;
        subtitle: string;
        date: string;
      };
      third: {
        title: string;
        subtitle: string;
        date: string;
      };
    };
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
      project_placeholder: string;
      button: string;
      form_msg: {
        API_Error: string;
        fields_error: string;
        success: string;
      };
    };
  };
}
