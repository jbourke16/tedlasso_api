import mongoose from 'mongoose';

const Schema = mongoose.Schema

const episodeSchema = new Schema({
    'episode-title': {type: String},
    'episode-number': {type: String},
    'description': {type: String},
    'imdb-rating': {type: String}
});

export default mongoose.model('episodes', episodeSchema);