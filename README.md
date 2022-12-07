# CSV-GENERATOR

## DESCRIPTION:

Tool for generating csv files for auto-feeds


# Installation:
 required software: 
 - Git(https://git-scm.com/downloads), 
 - Nodejs(https://nodejs.org/en/)

Clone project to your local machine: 
```
git clone https://vadim_palkin@bitbucket.org/peak-iii/csv-generator.git
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

If you want to specify row amount to file you need to add ROW_AMOUT variable before execution line:
```
ROW_AMOUT=10 npm run generate:olympia-feed
```
