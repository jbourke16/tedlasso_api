import Quote from "../models/Quote.js";

export const getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getQuote = async (req, res) => {
    try {
        const { id } = req.params
        const quote = await Quote.findById(id);

        if (quote) {
            return res.json(quote);
        }
        res.status(404).json({ message: "Quote not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const createQuote = async (req, res) => {
    try {
        const quote = new Quote(req.body);
        await quote.save();

        res.status(201).json(quote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const updateQuote = async (req, res) => {
    try {
        const { id } = req.params
        const quote = await Quote.findByIdAndUpdate(id, req.body);

        res.status(201).json(quote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteQuote = async (req, res) => {
    try {
        const { id } = req.params
        const quote = await Quote.findByIdAndDelete(id);

        if (quote) {
            return res.status(200).send("Quote deleted.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getQuoteByQuote = async (req, res) => {
    try {
        const { quote } = req.params
        const quoteByChar = await Quote.findOne({quote: quote});

        if (quoteByChar) {
            return res.json(quoteByChar);
        }
        res.status(404).json({ message: "Quote not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getQuoteByCharacter = async (req, res) => {
    try {
        const { characterName } = req.params
        const quotes = await Quote.find({characterName: characterName});

        if (quotes) {
            return res.json(quotes);
        }
        res.status(404).json({ message: "Quote not found." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

