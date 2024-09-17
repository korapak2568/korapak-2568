const fs = require('fs');
const path = require('path');

// Path to the existing robots.txt and correct file
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
const correctRobotsPath = path.join(__dirname, '..', 'public', 'robots_correct.txt');

// Delete the existing robots.txt file
fs.rm(robotsPath, {force: true}, (err) => {
    if (err && err.code !== 'ENOENT') {
        console.error('Error deleting robots.txt:', err);
    } else {
        console.log('Deleted old robots.txt or it didn\'t exist.');

        // Copy robots_correct.txt to robots.txt
        fs.copyFile(correctRobotsPath, robotsPath, (err) => {
            if (err) {
                console.error('Error copying robots_correct.txt to robots.txt:', err);
            } else {
                console.log('robots.txt updated successfully from robots_correct.txt.');
            }
        });
    }
});
