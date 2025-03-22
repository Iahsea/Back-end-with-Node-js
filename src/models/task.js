const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});

const projectSchema = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    description: String,
});

const taskScheam = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: String,
        status: String,
        startDate: String,
        endDate: String,
        userInfor: userSchema,
        projectInfo: projectSchema
    },
    {
        timestamps: true, // createdAT, UpdatedAt
    }
)

// Override all methods
taskScheam.plugin(mongoose_delete, { overrideMethods: 'all' });
const Task = mongoose.model('Task', taskScheam);

module.exports = Task;
