#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the quiz questions and their correct answers
const questions = [
    {
        question: 'Q.1\nWhat is the result of the following expression?\n\n ` 5 > 3  &&  5 < 10 ` ?',
        choices: ['10', 'Error', 'False', 'True'],
        correctAnswer: 'True'
    },
    {
        question: 'Q.2\nIn TypeScript, the `else` statement must always follow an `if` statement.\n\n',
        choices: ['True', 'False'],
        correctAnswer: 'True'
    },
    {
        question: 'Q.3\nWhich Operator is TypeScript is use for strict equality comparison?\n\n',
        choices: ['!=', '=', '==', '==='],
        correctAnswer: '==='
    },
    {
        question: 'Q.4\nWhich of the following are TypeScript `Comparison Operators` ?\n\n',
        choices: ['>', '<=', '>=', 'All of above'],
        correctAnswer: 'All of above'
    },
    {
        question: 'Q.5\nOutput of Following TypeScript code?\n\n let x: number = 5; \n let result: string = (x > 3) ? "Greater" : "Smaller"; \n console.log(result)\n\n',
        choices: ['True', 'False', '"Greater"', '"Smaller"'],
        correctAnswer: '"Greater"'
    },
    {
        question: 'Q.6\nWhat of the following are Not-Valid TypeScript control flow(Loops) statement?\n\n',
        choices: ['until', 'for', 'while', 'Do-While'],
        correctAnswer: 'until'
    },
    {
        question: 'Q.7\nwhat will be the output of the following TypeScript code?\n\n let result = 0; \n function increment() { result++ ; } \n increment(); \n increment(); \n console.log(result); \n\n',
        choices: ['1', 'Error', '2', '3'],
        correctAnswer: '2'
    },
    {
        question: 'Q.8\nHow many times the loop will run?\n\n for(var i = 0; i < 3, i++) { console.log(i); } \n\n',
        choices: ['1', '2', '3', '4'],
        correctAnswer: '3'
    },
    {
        question: 'Q.9\nHow do you a variable that can hold multiple types in TypeScript? \n\n',
        choices: ['let var: (string, number);', 'let var: string | number;', 'let var: {string, number};', 'let var: string, number;'],
        correctAnswer: 'let var: string | number;'
    },
    {
        question: 'Q.10\nWhat does the ++ operator do?\n\n',
        choices: ['increments value by 1', 'increments value by 2', 'increments value by 3', 'increments value by 0'],
        correctAnswer: 'increments value by 1'
    },
    {
        question: 'Q.11\nWhat will be the output of the following TypeScript code?\n\n enum directions {\n  East = 2,\n  West,\n  North,\n  South,\n} \n\n console.log(directions.West);\n\n',
        choices: ['0', '1', '2', '3'],
        correctAnswer: '3'
    },
    {
        question: 'Q.12\nWhat will be the output of the following TypeScript code?\n\n enum directions {\n  East = "East",\n  West = "West",\n  North = "North",\n  South = "South",\n} \n\n console.log(directions.South);\n\n',
        choices: ['0', '4', '3', '"South"'],
        correctAnswer: '"South"'
    },
    {
        question: 'Q.13\nWhat will be the output of the following TypeScript code?\n\n let x = 10 \n b-= 5 \n console.log(x);\n\n',
        choices: ['10', '15', '5', '0'],
        correctAnswer: '5'
    },
    {
        question: 'Q.14\nWhat will be the output of the following TypeScript code?\n\n let a = true; \n let b = !a; \n console.log(a);\n\n',
        choices: ['true', 'false', 'null', 'error'],
        correctAnswer: 'true'
    },
    {
        question: 'Q.15\nWhat will be the output of the following TypeScript code?\n\n let x: unknown = "hello"; \n console.log((x as string).length);\n\n',
        choices: ['true', 'false', '5', 'error'],
        correctAnswer: '5'
    },
    {
        question: 'Q.16\nCan an Interface extend another Interface in TypeScript?\n\n',
        choices: ['true', 'false', 'Only with classes', 'Only with functions'],
        correctAnswer: 'true'
    },
    {
        question: 'Q.16\nWhat is Type Alias in TypeScript?\n\n',
        choices: ['Allow defining types with custom name', 'Creating a boolean type', 'Access the classes', 'Access the functions'],
        correctAnswer: 'Allow defining types with custom name'
    },
    {
        question: 'Q.16\nWhat is the output of the following code in TypeScript?\n\n let car = {model: string, year:number} = { \n  model= "Corolla",\n  year= 2019\n}\n console.log(car);\n\n',
        choices: ['Corolla , 2019', '{Corolla , 2019}', '{model: Corolla, year: 2019}', '{Corolla , 2019}'],
        correctAnswer: '{model: Corolla, year: 2019}'
    },
];
// Asks the quiz questions to the user and evaluates their responses.
async function askQuestions() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    console.log(chalk.bold("\t HAMZA - Exams Preparation (MCQs) Part 2\n"));
    // Loop through each question in the questions array
    for (const q of questions) {
        // Prompt the user with the current question and choices
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'response',
                message: q.question,
                choices: q.choices
            }
        ]);
        // Check if the user's answer matches the correct answer
        if (answer.response === q.correctAnswer) {
            console.log(chalk.green.bold(`✔ Correct Answer\n`));
            correctAnswers++; // Increment the score for a correct answer
        }
        else {
            console.log(`${chalk.bold.redBright("✘ Wrong!")} \nThe correct answer is "${chalk.bold.green(q.correctAnswer)}".\n`);
            wrongAnswers++;
        }
    }
    // Display the user's final score
    console.log("-".repeat(31));
    console.log(chalk.bold.blue(`\tFinal Score:`));
    console.log("-".repeat(31));
    console.log(chalk.bold(`${chalk.green(`Correct Answers: ${correctAnswers}`)}\n${chalk.red(`Wrong Answers: ${wrongAnswers}`)}\n${chalk.yellowBright(`Total Questions: ${questions.length}`)}`));
    console.log("-".repeat(31));
}
// Start the quiz
askQuestions();
