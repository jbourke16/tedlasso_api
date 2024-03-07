import Character from "../models/Character.js";

export const getCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getCharacter = async (req, res) => {
    try {
        const { id } = req.params
        const character = await Character.findById(id);

        if (character) {
            return res.json(character);
        }
        res.status(404).json({ message: "Character not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const createCharacter = async (req, res) => {
    try {
        const character = new Characters(req.body);
        await character.save();

        res.status(201).json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params
        const character = await Character.findByIdAndUpdate(id, req.body);

        res.status(201).json(character);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params
        const character = await Character.findByIdAndDelete(id);

        res.send(character)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getCharacterByName = async (req, res) => {
    try {
        const { character } = req.params
        const characterName = await Character.findOne({character: character});

        if (character) {
            return res.json(characterName);
        }
        res.status(404).json({ message: "Character not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getActorByName = async (req, res) => {
    try {
        const { actorName } = req.params
        const character = await Character.findOne({actorName: actorName});

        if (character) {
            return res.json(character);
        }
        res.status(404).json({ message: "Actor not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const updateCharacterByName = async (req, res) => {
    try {
        const { character } = req.params
        const characterName = await Character.findOneAndUpdate({character: character}, req.body);

        res.status(201).json(characterName);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteCharacterByName = async (req, res) => {
    try {
        const { character } = req.params
        const characterName = await Character.findOneAndDelete({character: character});

        if (characterName) {
            return res.status(200).send("Character deleted.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

