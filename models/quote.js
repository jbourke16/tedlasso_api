import mongoose from 'mongoose';

const Schema = mongoose.Schema

const quoteSchema = new Schema({
    quote: {type: String},
    character: {type: String}
});

export default mongoose.model('quotes', quoteSchema);