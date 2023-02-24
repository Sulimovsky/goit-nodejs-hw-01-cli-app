# goit-nodejs-hw-01-cli-app

### 1. We get and display the entire contact list in the form of a table (Console.table)

### Examples

```gitbash
node index.js --action list

node index.js -a list
```

![Use action](https://github.com/Sulimovsky/goit-nodejs-hw-01-cli-app/blob/main/img/1.png)

### 2. We get contact by id

### Examples

```gitbash
node index.js --action get --id 5

node index.js -a get -i 5
```

![Use action](https://github.com/Sulimovsky/goit-nodejs-hw-01-cli-app/blob/main/img/2.png)

### 3. We add a contact

### Examples

```gitbash
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22
```

![Use action](https://github.com/Sulimovsky/goit-nodejs-hw-01-cli-app/blob/main/img/3.png)

### 4. We remove a contact

### Examples

```gitbash
node index.js --action remove --id 3

node index.js -a remove -i 3
```

![Use action](https://github.com/Sulimovsky/goit-nodejs-hw-01-cli-app/blob/main/img/4.png)
