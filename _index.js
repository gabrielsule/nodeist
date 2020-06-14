const nodeist = require('./lib/index');

const data = {
    "name": "work"
};

let run = nodeist.label.createLabel(data);

run.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

