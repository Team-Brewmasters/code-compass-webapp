import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LambdaService {
    private readonly summaryUrl = 'https://gdplis53rtnhbo3v5mtcsxgpua0xuver.lambda-url.us-east-1.on.aws/';
    private readonly askQuestionUrl = 'https://24lhekjptn2hjbrjukt6f4xqge0hrctk.lambda-url.us-east-1.on.aws/ ';
    private readonly fileGenerationUrl = 'https://tpimx374dlhzfsohjivqwsyuoy0yigdz.lambda-url.us-east-1.on.aws/';
    private readonly prSummaryUrl = 'https://3k77poexhjhtz74yzcfv7roezq0madng.lambda-url.us-east-1.on.aws/';
    private readonly recentReposUrl = 'https://abc7clav5s7ruwkgilwvdyqnam0cnqef.lambda-url.us-east-1.on.aws/';
    constructor(private http: HttpClient) { }

    callRecentReposLambda(): Observable<any> {
        return this.http.get<any>(this.recentReposUrl);
    }

    callSummaryLambda(githubUrl: string): Observable<any> {
        return this.http.get<any>(`${this.summaryUrl}?githubURL=${githubUrl}`);

        // return of("{\n  \"repository\": {\n    \"name\": \"CodeCompassWebapp\",\n    \"description\": \"A web application for visualizing and analyzing GitHub repository data.\",\n    \"technology_stack\": {\n      \"languages\": [\"TypeScript\", \"HTML\", \"SCSS\"],\n      \"frameworks\": [\"Angular\"],\n      \"databases\": [],\n      \"tools\": [\"npm\", \"particles.js\", \"FontAwesome\"]\n    },\n    \"total_files\": 24,\n    \"total_lines_of_code\": 650\n  },\n  \"overview\": {\n    \"architecture\": {\n      \"high_level_components\": [\n        {\n          \"name\": \"AppComponent\",\n          \"description\": \"Main application component handling user interactions and displaying repository data.\"\n        },\n        {\n          \"name\": \"LambdaService\",\n          \"description\": \"Service for communicating with AWS Lambda to retrieve repository data.\"\n        },\n        {\n          \"name\": \"ParticlesComponent\",\n          \"description\": \"Implements animated particles background using particles.js.\"\n        },\n        {\n          \"name\": \"ResponseDisplayComponent\",\n          \"description\": \"Displays the repository data fetched from GitHub.\"\n        }\n      ],\n      \"data_flow\": \"User inputs GitHub URL -> AppComponent calls LambdaService -> data returned and displayed by ResponseDisplayComponent with animation by ParticlesComponent.\"\n    },\n    \"performance\": {\n      \"issues\": []\n    },\n    \"security\": {\n      \"vulnerabilities\": [\n        {\n          \"description\": \"Use of external CDN may lead to potential malicious code insertion or abrupt service discontinuity if CDN is compromised\",\n          \"severity\": \"Medium\",\n          \"fix_recommendations\": [\n            \"Host all third-party libraries locally to reduce reliance on external CDN\",\n            \"Implement Subresource Integrity (SRI) checks for CDN resources\"\n          ]\n        }\n      ]\n    }\n  },\n  \"code_analysis\": {\n    \"functions\": [\n      {\n        \"name\": \"onSubmit\",\n        \"description\": \"Handles the submit action triggered by the user to fetch repository data\",\n        \"parameters\": [],\n        \"returns\": {\n          \"type\": \"void\",\n          \"description\": \"No return, triggers state change and HTTP request\"\n        }\n      }\n    ],\n    \"classes\": [\n      {\n        \"name\": \"AppComponent\",\n        \"methods\": [\n          {\n            \"name\": \"onSubmit\",\n            \"description\": \"Triggered by user action, it changes state and requests repository data for display\",\n            \"visibility\": \"public\"\n          }\n        ]\n      },\n      {\n        \"name\": \"LambdaService\",\n        \"methods\": [\n          {\n            \"name\": \"callSummaryLambda\",\n            \"description\": \"Makes HTTP GET request to fetch repository data from AWS Lambda service\",\n            \"visibility\": \"public\"\n          }\n        ]\n      },\n      {\n        \"name\": \"ParticlesComponent\",\n        \"methods\": [\n          {\n            \"name\": \"ngOnInit\",\n            \"description\": \"Initializes particles.js library on component initialization\",\n            \"visibility\": \"public\"\n          }\n        ]\n      },\n      {\n        \"name\": \"ResponseDisplayComponent\",\n        \"methods\": []\n      }\n    ],\n    \"files\": [\n      {\n        \"path\": \"/src/app/app.component.ts\",\n        \"size\": 1200,\n        \"summary\": \"Defines the AppComponent that handles the main user interface and interactions.\"\n      },\n      {\n        \"path\": \"/src/app/services/lambda.service.ts\",\n        \"size\": 800,\n        \"summary\": \"Service to handle all HTTP communications with AWS Lambda functions.\"\n      },\n      {\n        \"path\": \"/src/app/particles/particles.component.ts\",\n        \"size\": 550,\n        \"summary\": \"Component for adding a particle effect using particles.js.\"\n      }\n    ]\n  },\n  \"documentation\": {\n    \"readme\": \"Comprehensive overview README document explaining the project setup, build, and contribution guidelines.\",\n    \"code_comments\": 0.8,\n    \"api_docs\": [\n      {\n        \"endpoint\": \"AppComponent.onSubmit\",\n        \"method\": \"POST\",\n        \"description\": \"Submit the GitHub repository URL to backend for processing.\"\n      }\n    ]\n  },\n  \"suggestedQuestions\": [\n    \"What is the primary function of the LambdaService?\",\n    \"How to configure the ParticlesComponent for different visual effects?\",\n    \"What are the security practices implemented to ensure safe use of external resources?\"\n  ]\n}").pipe(delay(2000) // Add a delay of 2000 milliseconds (2 seconds)
        // );
    }

    callAskQuestionLambda(githubUrl: string, question: string): Observable<any> {
        return this.http.get<any>(`${this.askQuestionUrl}?githubURL=${githubUrl}&question=${question}`);




    }

    callFileGenerationLambda(githubUrl: string, fileType: string): Observable<any> {
        return this.http.get<any>(`${this.fileGenerationUrl}?githubURL=${githubUrl}&fileType=${fileType}`);
    }

    callPRSummaryLambda(githubUrl: string): Observable<any> {
        return this.http.get<any>(`${this.prSummaryUrl}?githubURL=${githubUrl}`);

        // return of({
        //     decision: "Approved",
        //     reasoning: "The codebase is well-structured and follows best practices. The code quality is high, and the architecture is scalable and maintainable. The security vulnerabilities are minimal, and the performance is optimal. The documentation is comprehensive, and the codebase is well-commented. The API documentation is clear and concise. The suggested questions are relevant and insightful. The repository is well-maintained and actively developed. The pull request is approved.",
        //     diffUrl: "github.com",
        //     branch: "main"

        // })
    }
}
