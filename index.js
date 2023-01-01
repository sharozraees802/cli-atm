import inquirer from "inquirer";
import gradient from 'gradient-string';
import figlet from "figlet";
const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\ ATM CLI  !\n`), { interpolation: 'hsv' }) + '\n');
};
WelcomeScreen();
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const currentBalance = Math.floor(Math.random() * 10000000);
    console.log("🚀 ~ file: index.ts:66 ~ currentBalance", currentBalance);
    const EnterAmount = answers.amount;
    if (currentBalance >= EnterAmount) {
        const remianAmount = currentBalance - EnterAmount;
        console.log("🚀 ~ file: index.ts:70 ~ Your remmaining balance is", remianAmount);
    }
    else {
        console.log("🚀 ~ file: index.ts:72 ~ Insuficient Balance");
    }
}
