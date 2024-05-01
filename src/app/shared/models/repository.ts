interface RepositoryBaseDetails {
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

export function getIconMap() {
  return {
    "awslambda":"/assets/icons/amazonwebservices.svg",
    "angular":"/assets/icons/angular.svg",
    "angularmaterial":"/assets/icons/angularmaterial.svg",
    "azure":"/assets/icons/azure.svg",
    "bitbucket":"/assets/icons/bitbucket.svg",
    "confluence":"/assets/icons/confluence.svg",
    "css":"/assets/icons/css.svg",
    "cucumber":"/assets/icons/cucumber.svg",
    "docker":"/assets/icons/docker.svg",
    "awsdynamodb":"/assets/icons/dynamodb.svg",
    "firebase":"/assets/icons/firebase.svg",
    "flutter":"/assets/icons/flutter.svg",
    "git":"/assets/icons/git.svg",
    "github":"/assets/icons/github.svg",
    "githubactions":"/assets/icons/githubactions.svg",
    "googlecloud":"/assets/icons/googlecloud.svg",
    "html":"/assets/icons/html.svg",
    "jasmine":"/assets/icons/jasmine.svg",
    "java":"/assets/icons/java.svg",
    "javascript":"/assets/icons/javascript.svg",
    "jenkins":"/assets/icons/jenkins.svg",
    "jest":"/assets/icons/jest.svg",
    "json":"/assets/icons/json.svg",
    "junit":"/assets/icons/junit.svg",
    "kibana":"/assets/icons/kibana.svg",
    "kotlin":"/assets/icons/kotlin.svg",
    "kubernetes":"/assets/icons/kubernetes.svg",
    "mongodb":"/assets/icons/mongodb.svg",
    "mysql":"/assets/icons/mysql.svg",
    "npm":"/assets/icons/npm.svg",
    "okta":"/assets/icons/openapi.svg",
    "opentelemetry":"/assets/icons/opentelemetry.svg",
    "oracle":"/assets/icons/oracle.svg",
    "php":"/assets/icons/php.svg",
    "postgresql":"/assets/icons/postgresql.svg",
    "postman":"/assets/icons/postman.svg",
    "pytest":"/assets/icons/pytest.svg",
    "python":"/assets/icons/python.svg",
    "raspberrypi":"/assets/icons/raspberrypi.svg",
    "react":"/assets/icons/react.svg",
    "redhat":"/assets/icons/redhat.svg",
    "ruby":"/assets/icons/ruby.svg",
    "rust":"/assets/icons/rust.svg",
    "rxjs":"/assets/icons/rxjs.svg",
    "scss":"/assets/icons/sass.svg",
    "sonarqube":"/assets/icons/sonarqube.svg",
    "spring":"/assets/icons/spring.svg",
    "sqldeveloper":"/assets/icons/sqldeveloper.svg",
    "swagger":"/assets/icons/swagger.svg",
    "swift":"/assets/icons/swift.svg",
    "typescript":"/assets/icons/typescript.svg",
    "vercel":"/assets/icons/vercel.svg",
  }
}