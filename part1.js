// part1.js
const encryptedToken = "NzU5MzQwOTA2MTpBQUhFUENUQ0x0dnhhQVdjRXltNzlnTDh1ZUhSQjd0dkRYZw=="; 
const encryptedChatID = "NjAxNTIxNTY3NA=="; 
const TOKEN = atob(encryptedToken);
const CHAT_ID = atob(encryptedChatID);

console.log('TOKEN:', TOKEN); 
console.log('CHAT_ID:', CHAT_ID); 

console.log('Part 1 loaded: Token and Chat ID decrypted.');