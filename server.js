const express = require('express');
const path = require('path');
const app = express();

// Render uses port 10000 by default for web services
const PORT = process.env.PORT || 10000;

// Serve the index.html file when someone visits your main site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// MOCK PIPELINE ENDPOINT: This replicates your eKigai validation step!
app.get('/trigger-validation', (req, res) => {
    console.log("▶️ API Request Received: Starting validation scripts...");

    // We simulate a heavy 3-second background process here
    setTimeout(() => {
        console.log("✅ Validation successfully completed!");
        res.json({
            status: "success",
            creditsDeducted: 5,
            validatedData: {
                campaignStatus: "Active",
                targetAudience: "Verified",
                timestamp: new Date().toISOString()
            }
        });
    }, 3000); 
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Real-world app server running on port ${PORT}`);
});