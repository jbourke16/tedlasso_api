import mongoose from 'mongoose';

const Schema = mongoose.Schema

const episodeSchema = new Schema({
    episode: {type: String},
    episodenumber: {type: String},
    description: {type: String},
    imdbrating: {type: String}
});

export default mongoose.model('episodes', episodeSchema);