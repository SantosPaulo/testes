const {gitDescribe, gitDescribeSync} = require('git-describe');
 
// Target working directory
const gitInfo = gitDescribeSync();

console.log( gitInfo );
