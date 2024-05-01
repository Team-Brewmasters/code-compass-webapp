
# Code Compass Project Repository

## Overview

This repository contains a collection of Python scripts and GitHub actions configured to work with AWS Lambda functions for deploying and managing updates to software projects using GitHub and AI tools.

## Contents

- `.github/workflows/lambda_deploy.yaml` - GitHub Actions workflow for deploying Python applications to AWS Lambda.
- `claude_generated_code.py` - Script to interact with GitHub repositories, pulling information about pull requests and changes.
- `github_api_service.py` - Python module for accessing GitHub API to fetch repository file contents excluding specific files or directories.
- `main.py` - Main script that acts as an AWS Lambda handler for processing API requests, integrating GitHub content fetching and OpenAI response generation.
- `open_ai_service.py` - Python module to facilitate interaction with OpenAI's API using environment variables for authentication.
- `requirements.txt` - Python dependencies required for the project to function properly.

## Setup and Deployment

### Prerequisites

- AWS account with permissions to manage Lambda functions.
- GitHub account with access to the repository.
- OpenAI API key for using GPT models.

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

### Configurations

1. Configure your AWS CLI with appropriate credentials:
   ```bash
   aws configure
   ```
2. Set up environment variables for OpenAI API key:
   ```bash
   export OPENAI_API_KEY='your-api-key'
   ```

### Deployment

Using the GitHub Actions workflow defined in `.github/workflows/lambda_deploy.yaml`, push changes to the `main` branch to automatically deploy to AWS Lambda.

## Usage

After deploying the Lambda function, you can send HTTP requests containing `githubURL` and `question` query parameters to your deployed Lambda endpoint to receive processed responses from the OpenAI model based on the content of the specified GitHub repository.

## Contributing

Contributions to the Code Compass project repository are welcome! Please consider the following guidelines:

- Fork the repository and create a new branch for your feature or fix.
- Write clean, commented, and well-structured code.
- Ensure code compatibility with existing components.
- Open a pull request against the `main` branch for review.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
```
Note: Replace `<repository-url>` with the actual URL of your repository.
