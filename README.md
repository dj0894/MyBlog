libraries used

npm install --save-dev @babel/core @babel/node @babel/preset-env
npm install express
npx babel-node src/server.js
npm install --save body-parser
npm install --save-dev nodemon

with out nodemon  run using below command
 npx babel-node src/server.js
for reruning command 
npx nodemon --exec babel-node src/server.js
npm install --save mongodb //allow us to modify our db inside express server code

To call backend from front end used inbuilt fetch Api
