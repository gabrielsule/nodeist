const instance = require('./instance');
const { v4: uuidv4 } = require('uuid');

function getLabels() {
    return new Promise((resolve, reject) => {
        instance.get('labels').then((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    })
}

function getLabel(id) {
    return new Promise((resolve, reject) => {
        instance.get(`labels/${id}`).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function createLabel(data) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.post('labels', data, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function updateLabel(id, data) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.post(`labels/${id}`, data, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}

function deleteLabel(id) {
    const header = {
        'headers': {
            'x-request-id': uuidv4()
        }
    };

    return new Promise((resolve, reject) => {
        instance.delete(`labels/${id}`, header).then((res) => {
            resolve(res.data);
        }, (err) => {
            reject(err.response.data);
        });
    })
}


module.exports.getLabels = getLabels;
module.exports.getLabel = getLabel;
module.exports.createLabel = createLabel;
module.exports.updateLabel = updateLabel
module.exports.deleteLabel = deleteLabel;