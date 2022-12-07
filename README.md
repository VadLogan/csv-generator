# CSV-GENERATOR

## DESCRIPTION:

Tool for generating csv files for auto-feeds


# Installation:
 required software: 
 - Git(https://git-scm.com/downloads), 
 - Nodejs(https://nodejs.org/en/)

Clone project to your local machine: 
```
git clone https://github.com/VadLogan/csv-generator.git
```

Type on terminal:
 ```
cd csv-generator && npm install 
 ```   

# Usage:

### Brandt tenant:
  ```
npm run generate:brandt-feed
  ```

### Olympia tenant:
 ```
npm run generate:olympia-feed
 ```

If you want to specify row amount to file you need to add ROWS_AMOUT variable before execution line:
```
ROWS_AMOUT=10 npm run generate:olympia-feed
```
