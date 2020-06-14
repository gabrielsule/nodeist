# nodeist

### Install
```bash
npm i nodeist
```

### Use
```javascript
const nodeist = require('nodeist');
```

### Token
[Todoist personal API token](https://nodeist.com/Users/viewPrefs?page=integrations)

### Config
```javscript
url: 'https://api.nodeist.com/rest/v1/',
token: 'token'
```

### Projects

#### create
```json
const data = {
    "name": "Dummy Project"
};
```
```javascript
let run = nodeist.project.createProject(data);
```

#### get
```javascript
let run = nodeist.project.getProjects();
let run = nodeist.project.getProject(id);
```

#### update
```json
const data = {
    "name": "Dummy Project"
};
```
```javascript
let run = nodeist.project.updateProject(id, data);
```

#### delete
```javascript
let run = nodeist.project.deleteProject(id);
```


### Task

#### create
```json
const data = {
    "content": "Appointment with GDS",
    "due_string": "tomorrow at 13:21",
    "due_lang": "es",
    "priority": 4
};
```
```javascript
let run nodeist.task.createTask(data);
```

#### get
```javascript
let run = nodeist.task.getTasks();
let run nodeist.task.getTask(id);
```

#### update
```json
const data = {
    "due_string": "2020-06-15 16:32",
};
```
```javascript
let run nodeist.task.updateTask(id, data);
```

#### close
```javascript
let run nodeist.task.closeTask(id);
```

#### reopen
```javascript
let run nodeist.task.reopenTask(id);
```

#### delete
```javascript
let run nodeist.task.deleteTask(id);
```


### Labels (premium only)

#### create
```json
const data = {
    "name": "Dummy Label"
};
```
```javascript
let run = nodeist.label.createLabel(data);
```

#### get
```javascript
let run = nodeist.label.getLabels();
let run = nodeist.label.getLabel(id);
```

#### update
```json
const data = {
    "name": "Dummy Label"
};
```
```javascript
let run = nodeist.label.updateLabel(id, data);
```

#### delete
```javascript
let run = nodeist.label.deleteLabel(id);
```

### Run cross all examples
```javascript
run.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
```
### Licence
[MIT](https://github.com/gabrielsule/nodeist/blob/master/LICENSE)
