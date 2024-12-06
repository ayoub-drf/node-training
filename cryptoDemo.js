import crypto from "crypto";

const hash = crypto.createHash("sha512");
let pass = "password123";
const hashedPassword = hash.update(pass)

const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

console.log(key)