const { createProject, getProject, uProject, dProject } = require("../services/projectService");

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body);
        console.log(">>> check controller result", result);

        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    getAllProject: async (req, res) => {
        let result = await getProject(req.query);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    updateProject: async (req, res) => {
        let result = await uProject(req.body);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    deleteProject: async (req, res) => {
        console.log(">>> check req.body ", req.body);
        let result = await dProject(req.body.id);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
}