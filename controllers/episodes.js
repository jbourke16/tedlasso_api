import Episode from "../models/Episode.js";

export const getEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.find();
        res.json(episodes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getEpisode = async (req, res) => {
    try {
        const { id } = req.params
        const episode = await Episode.findById(id);

        if (episode) {
            return res.json(episode);
        }
        res.status(404).json({ message: "Episode not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const createEpisode = async (req, res) => {
    try {
        const episode = new Episode(req.body);
        await episode.save();

        res.status(201).json(episode);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const updateEpisode = async (req, res) => {
    try {
        const { id } = req.params
        const episode = await Episode.findByIdAndUpdate(id, req.body);

        res.status(201).json(episode);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteEpisode = async (req, res) => {
    try {
        const { id } = req.params
        const episode = await Episode.findByIdAndDelete(id);

        if (deleted) {
            return res.status(200).send("Episode deleted.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getEpisodeByTitle = async (req, res) => {
    try {
        const { episodeName } = req.params
        const episode = await Episode.findOne({episodeName: episodeName});

        if (episode) {
            return res.json(episode);
        }
        res.status(404).json({ message: "Episode not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
