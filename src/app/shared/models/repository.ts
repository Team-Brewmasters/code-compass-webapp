interface Repository {
    name: string;
    description: string;
    technology_stack: {
      languages: string[];
      frameworks: string[];
      databases: string[];
      tools: string[];
    };
    overview: {
      architecture: {
        high_level_components: {
          name: string;
          description: string;
        }[];
        data_flow: string;
      };
    };
  }

  interface Cards {
    repository: {
      name: string;
      description: string;
      technology_stack: {
        languages: string[];
        frameworks: string[];
        databases: string[];
        tools: string[];
      };
      overview: {
        architecture: {
          high_level_components: {
            name: string;
            description: string;
          }[];
          data_flow: string;
        };
      };
    };
  }
  