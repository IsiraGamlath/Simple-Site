# Simple Site

A small **Next.js practice project** deployed to **AWS ECS Fargate** with an automated CI/CD pipeline using GitHub Actions, Docker, Amazon ECR, and an Application Load Balancer.

🌐 **Live Demo:** `http://simple-site-alb-1765520549.eu-north-1.elb.amazonaws.com/`

---

## 🚀 Tech Stack

* Next.js
* React
* Node.js
* Docker
* GitHub Actions
* Amazon ECR
* Amazon ECS Fargate
* Application Load Balancer
* AWS IAM
* AWS Security Groups

---

## 🏗️ Architecture

```text
GitHub
   │
   ▼
GitHub Actions
   │
   ├── Install dependencies
   ├── Lint
   ├── Build
   └── Build Docker image
          │
          ▼
     Amazon ECR
          │
          ▼
     ECS Fargate
          │
          ▼
Application Load Balancer
          │
          ▼
     Live Application
```

---

## ⚙️ CI/CD Pipeline

Every push to the `main` branch triggers the GitHub Actions workflow.

The pipeline:

1. Checks out the source code
2. Sets up Node.js
3. Installs dependencies
4. Runs linting
5. Builds the Next.js application
6. Builds the Docker image
7. Authenticates with AWS using GitHub OIDC
8. Pushes the Docker image to Amazon ECR
9. Creates a new ECS task definition revision
10. Updates the ECS service
11. Waits for the ECS service to become stable

This allows code changes to be deployed to AWS automatically without manually updating the ECS service.

---

## ☁️ AWS Infrastructure

The application runs using:

* **Amazon ECS Fargate** — runs the container without managing servers
* **Amazon ECR** — stores Docker images
* **Application Load Balancer** — exposes the application publicly
* **Target Group** — routes traffic to the ECS task
* **Security Groups** — control network access
* **AWS IAM** — manages deployment permissions
* **GitHub OIDC** — allows GitHub Actions to authenticate with AWS without storing long-lived AWS access keys

---

## 🔄 Deployment Flow

```text
git push origin main
        ↓
GitHub Actions
        ↓
Lint & Build
        ↓
Docker Build
        ↓
Push image to ECR
        ↓
Create ECS task definition revision
        ↓
Update ECS service
        ↓
ALB health check
        ↓
New container running
```

---

## 🛠️ Challenges & Troubleshooting

During the deployment, I worked through several real configuration issues, including:

* ECS `AccessDeniedException` errors
* Missing `ecs:UpdateService` permissions
* Missing `ecs:DescribeTaskDefinition` and `ecs:DescribeServices` permissions
* `iam:PassRole` permission issues
* Application Load Balancer connectivity problems
* Security group configuration
* ECS task health checks
* Ensuring the latest Docker image was deployed
* Understanding ECS rolling deployments and service stability

These issues helped me better understand how AWS IAM, networking, containers, and ECS deployments work together.

---

## 💻 Getting Started

Clone the repository:

```bash
git clone GITHUB_REPOSITORY_URL
cd simple-site
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📸 Screenshots

### Live Application

<img width="1900" height="982" alt="Screenshot 2026-08-11 233223" src="https://github.com/user-attachments/assets/2873e2e7-c650-4db5-bab5-dfe100c2884d" />

### GitHub Actions

<img width="1882" height="1017" alt="Screenshot 2026-08-11 233434" src="https://github.com/user-attachments/assets/fde941a7-2a35-4ece-a5c3-eae926fe6cf2" />

### AWS ECS

<img width="1541" height="863" alt="Screenshot 2026-08-11 233809" src="https://github.com/user-attachments/assets/5ce3d604-5688-404d-a637-1f8e84e3edc1" />




---

## 📌 Project Purpose

This project was created as a **hands-on practice exercise** to learn and understand containerized application deployment, CI/CD automation, AWS ECS, Docker, IAM, and cloud networking.

---

## 📄 License

This project is for learning and portfolio purposes.
