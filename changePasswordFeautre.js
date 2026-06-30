const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

let currentPassword = "abc123";
const securityQuestion = "What is your favorite movie?";
const securityAnswer = "inception";

async function changePassword() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    try {
        while (true) {
            const oldPassword = await rl.question("Enter old password: ");

            if (oldPassword !== currentPassword) {
                const forgotPassword = await rl.question("Forgot old password? (y/n): ");

                if (forgotPassword.toLowerCase() !== "y") {
                    console.log("Old password is incorrect.");
                    continue;
                }

                console.log(`Security question: ${securityQuestion}`);
                const answer = await rl.question("Your answer: ");

                if (answer.toLowerCase() !== securityAnswer) {
                    console.log("Security answer is incorrect.");
                    continue;
                }
            }

            const newPassword = await rl.question("Enter new password: ");
            const confirmPassword = await rl.question("Confirm new password: ");

            if (newPassword !== confirmPassword) {
                console.log("Passwords do not match.");
                continue;
            }

            currentPassword = newPassword;
            console.log("Password reset successfully.");

            const changeAgain = await rl.question("Change password again? (y/n): ");

            if (changeAgain.toLowerCase() !== "y") {
                break;
            }
        }
    } finally {
        rl.close();
    }
}

changePassword();