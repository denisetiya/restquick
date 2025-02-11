# RestQuick

![RestQuick Logo](https://drive.google.com/uc?id=1ZZl7WjGGqaCIgXUUdGa6fKffVIELD9Ox)

**RestQuick** is a CLI tool to quickly generate REST API starter templates for various frameworks, including **Node.js** and **Django**. It simplifies project scaffolding, allowing developers to start building APIs without wasting time setting up the base structure and include jwt authentication.

## ✨ Features
- **Multiple Frameworks Supported**:
  - Hono REST API (TypeScript)
  - Encore TS (TypeScript)
  - Express.js (TypeScript)
  - NestJS (TypeScript)
  - Django REST Framework
- **Interactive Command-Line Interface** using [Inquirer.js](https://www.npmjs.com/package/inquirer).
- **Project Name Validation**: Prevents overwriting existing directories.
- **Scaffold Projects Quickly** with pre-configured setups.

## 🚀 Installation

```bash
npm install -g restquick
```

This will make `restquick` available globally on your system.

## 🛠️ Usage

### Initialize a New Project
Run the following command to start generating a project:

```bash
restquick init
```


## instanly generate using npx / pnpx

```bash
npx restquick init 
```

```bash
pnpx restquick init
```

Follow the prompts to:
1. Select your desired template.
2. Enter the name of your project.

### Example Workflow
1. **Prompt 1**: Choose a Template  
    ![Choose Template](https://drive.google.com/uc?id=1v_bWxvUpRIxUVaazpwxrZEHokwhpv1E8)


2. **Prompt 2**: Enter Project Name  
   If a folder with the entered name already exists, the CLI will prompt you to re-enter the name.

3. **Output**:
   - The selected template is cloned into the specified directory.
   - Instructions for installing dependencies and starting development are displayed.


### Commands
#### `init`
Initialize a new project from a predefined template.

```bash
 npx restquick init
```

#### Options
- No options are currently available. The CLI is fully interactive.

## 🌐 Templates Available
| **Framework**         | **Language** | **Repository**                                             |
|------------------------|--------------|-----------------------------------------------------------|
| Hono REST API          | TypeScript   | [hono-jwt-template](https://github.com/denisetiya/hono-jwt-template) |
| Encore TS              | TypeScript   | [encore-ts-auth](https://github.com/denisetiya/encore-ts-auth)       |
| Express.js             | TypeScript   | [typeExpress-jwt-template](https://github.com/denisetiya/typeExpress-jwt-template) |
| NestJS                 | TypeScript   | [nest-jwt-template](https://github.com/denisetiya/nest-jwt-template) |
| Django REST Framework  | Python       | [django-rest-template](https://github.com/denisetiya/django-rest-template) |

## 📂 Project Structure (Example)
When you clone a template, the directory structure looks like this (e.g., Express.js template):

```
project-name/
├── src/
│   ├── module/
        ├──auth/
            ├──controller.ts
            ├──service.ts
│   ├── utils/
    ├── types/
    ├── middlewares/
    ├── routers.ts
    └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## ⚙️ Requirements
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## 🔗 Links
- **GitHub Repository**: [RestQuick](https://github.com/denisetiya/restquick)
- **Templates Source**:
  - [Hono Template](https://github.com/denisetiya/hono-jwt-template)
  - [Encore Template](https://github.com/denisetiya/encore-ts-auth)
  - [Express.js Template](https://github.com/denisetiya/typeExpress-jwt-template)
  - [NestJS Template](https://github.com/denisetiya/nest-jwt-template)
  - [Django REST Template](https://github.com/denisetiya/django-rest-template)

## 👨‍💻 Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## 🛡️ License
This project is licensed under the [MIT License](LICENSE).

## 💬 Feedback
If you encounter any issues or have suggestions, please [open an issue](https://github.com/denisetiya/restquick/issues) or contact me at **denisetiya009@gmail.com**.

---

Made with ❤️ by [Deni Setiya](https://github.com/denisetiya).
