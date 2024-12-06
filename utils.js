function randomNumber() {
    return Math.floor(Math.random() * 100) + 1
};
const greeting = () => "Welcome";

// CommonJs Modules (old code)
module.exports = {
    randomNumber,
    greeting,
};