import db from '../db/connection.js';
import Character from '../models/Character.js';
import Episode from '../models/Episode.js';
import Quote from '../models/Quote.js';
import characterData from '../db/characters.json' assert { type: "json" };
import episodeData from '../db/episodes.json' assert { type: "json" };
import quoteData from '../db/quotes.json' assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase();
    await Character.create(characterData);
    await Episode.create(episodeData);
    await Quote.create(quoteData);

    console.log("Characters, Episodes, and Quotes created.");

    await db.close();
}

insertData();