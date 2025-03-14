#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import { exec } from 'child_process';
import fs from 'fs';

const program = new Command();

const templates = [
  {
    name: 'Hono REST API Starter Template (TS)',
    value: 'https://github.com/denisetiya/hono-jwt-template.git',
  },
  {
    name: 'Encore TS Starter Template (TS)',
    value: 'https://github.com/denisetiya/encore-ts-auth.git',
  },
  {
    name: 'Express.js Starter Template (TS)',
    value: 'https://github.com/denisetiya/typeExpress-jwt-template.git',
  },
  {
    name: 'Express Rest + eslint + prettier (TS)',
    value: 'https://github.com/denisetiya/TL-rest-express.git',
  },
  {
    name: 'NestJS Starter Template (TS)',
    value: 'https://github.com/denisetiya/nest-jwt-template.git',
  },
  {
    name: 'Django REST Starter',
    value: 'https://github.com/denisetiya/django-rest-template.git',
  },
];

program
  .version('1.0.0')
  .description('RestForge CLI for generating templates');

program
  .command('init')
  .description('Initialize a new project from a template')
  .action(() => {
    const askProjectDetails = () => {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'template',
            message: 'Choose a template:',
            choices: templates,
          },
          {
            type: 'input',
            name: 'projectName',
            message: 'Enter your project name:',
            validate: (input) => {
              if (input.trim() === '') {
                return 'Project name cannot be empty!';
              }
              if (fs.existsSync(input)) {
                return `Folder "${input}" already exists! Please choose another name.`;
              }
              return true;
            },
          },
        ])
        .then((answers) => {
          const { template, projectName } = answers;

          console.log(`\n🚀 Cloning ${template} into ${projectName}...\n`);

          // Clone template menggunakan git
          exec(`git clone ${template} ${projectName}`, (error, stdout, stderr) => {
            if (error) {
              console.error(`❌ Error: ${error.message}`);
              return;
            }
            if (stderr) {
              console.error(`⚠️ Stderr: ${stderr}`);
              console.log(`\n✅ Successfully cloned template into ${projectName}!`);
              console.log(`\n📂 Navigate to your project:\n`);
              console.log(`cd ${projectName}`);
              console.log(`\n🛠️ Install dependencies:\n`);
              console.log(`npm install`);
              console.log(`\n🚀 Start developing!\n`);
              return;
            }

            console.log(`\n✅ Successfully cloned template into ${projectName}!`);
            console.log(`\n📂 Navigate to your project:\n`);
            console.log(`cd ${projectName}`);
            console.log(`\n🛠️ Install dependencies:\n`);
            console.log(`npm install`);
            console.log(`\n🚀 Start developing!\n`);
          });
        });
    };

    askProjectDetails();
  });

program.parse(process.argv);
