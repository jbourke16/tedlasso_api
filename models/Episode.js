import mongoose from 'mongoose';

const Schema = mongoose.Schema

const episodeSchema = new Schema({
    episodeName: {type: String},
    episodeNumber: {type: String},
    description: {type: String},
    imdbRating: {type: String}
});

export default mongoose.model('episodes', episodeSchema);