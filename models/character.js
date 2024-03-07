import mongoose from 'mongoose';

const Schema = mongoose.Schema

const characterSchema = new Schema({
    character: {type: String},
    aliases: [{type: String}],
    actorName: {type: String},
    occupation: [{type: String}],
    position: [{type: String}],
    number: [{type: String}],
    affiliations: [{type: String}],
    height: {type: String},
    gender: {type: String},
    birthplace: {type: String},
    image: {type: String}
});

export default mongoose.model('characters', characterSchema);