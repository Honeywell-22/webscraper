const express = require("express");
const cors = require("cors");

const { scrapeWebsite } = require("./scrapers/websiteScraper");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/scrape", async (req, res) => {
    try {

        console.log("BODY:", req.body);

        const { website } = req.body;

        console.log("WEBSITE:", website);

        const data = await scrapeWebsite(website);

        console.log("RESULT:", data);

        res.json(data);

    } catch (error) {

        console.log("ERROR:", error);

        res.status(500).json({
            error: "Scraping failed"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
