const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {

    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        const { github_username, techs, longitude, latitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);

        if (!dev) {
            const { name = login, avatar_url, bio } = apiRes.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }




        return res.json(dev);
    },

    async update(req, res) {
        const devs = await Dev.findOneAndUpdate(req.params.github_username, req.body, { new: true });
        return res.json(devs);
    },

   async destroy(req, res) {
        await Dev.findByIdAndRemove(req.params.id);
        return res.send();
    },

    async show(req, res) {
        const devs = await Dev.findById(req.params.id);
        return res.json(show);
    },
};

/*index, show, store, update, destroy*/