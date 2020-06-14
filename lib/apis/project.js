const instance = require('./instance');
const { v4: uuidv4 } = require('uuid');

function getProjects() {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.get('projects', header).then((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    })
}

function getProject(id) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.get(`projects/${id}`, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function createProject(data) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.post('projects', data, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function updateProject(id, data) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.post(`projects/${id}`, data, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function deleteProject(id) {
    return new Promise((resolve, reject) => {
        instance.delete(`projects/${id}`).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}


module.exports.getProjects = getProjects;
module.exports.getProject = getProject;
module.exports.createProject = createProject;
module.exports.updateProject = updateProject
module.exports.deleteProject = deleteProject;