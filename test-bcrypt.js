// test-bcrypt.js
const bcrypt = require('bcryptjs');

const plainPassword = '123456';
const hash = '$2b$10$AI5RQ4QoQU0sOdNNOflkGuuybIk54CwNO4x2rpE4O2oEVTFlqGoea';

const match = bcrypt.compareSync(plainPassword, hash);

console.log('✅ Compare Result:', match);
