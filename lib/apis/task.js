const instance = require('./instance');
const { v4: uuidv4 } = require('uuid');

function getTasks() {
    return new Promise((resolve, reject) => {
        instance.get('tasks').then((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    })
}

function getTask(id) {
    return new Promise((resolve, reject) => {
        instance.get(`tasks/${id}`).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function createTask(data) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.post('tasks', data, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function updateTask(id, data) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.post(`tasks/${id}`, data, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function closeTask(id) {
    return new Promise((resolve, reject) => {
        instance.post(`tasks/${id}/close`).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function reopenTask(id) {
    return new Promise((resolve, reject) => {
        instance.post(`tasks/${id}/reopen`).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function deleteTask(id) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.delete(`tasks/${id}`, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}


module.exports.getTasks = getTasks;
module.exports.getTask = getTask;
module.exports.createTask = createTask;
module.exports.updateTask = updateTask
module.exports.closeTask = closeTask;
module.exports.reopenTask = reopenTask;
module.exports.deleteTask = deleteTask;