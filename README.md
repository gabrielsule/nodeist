# Todoist Node

### Install
```bash
npm i nodeist
```

### Config
```javscript
url: 'https://api.todoist.com/rest/v1/',
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
let run = todoist.project.createProject(data);
```

#### get
```javascript
let run = todoist.project.getProjects();
let run = todoist.project.getProject(id);
```

#### update
```json
const data = {
    "name": "Dummy Project"
};
```
```javascript
let run = todoist.project.updateProject(id, data);
```

#### delete
```javascript
let run = todoist.project.deleteProject(id);
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
let run todoist.task.createTask(data);
```

#### get
```javascript
let run = todoist.task.getTasks();
let run todoist.task.getTask(id);
```

#### update
```json
const data = {
    "due_string": "2020-06-15 16:32",
};
```
```javascript
let run todoist.task.updateTask(id, data);
```

#### close
```javascript
let run todoist.task.closeTask(id);
```

#### reopen
```javascript
let run todoist.task.reopenTask(id);
```

#### delete
```javascript
let run todoist.task.deleteTask(id);
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
