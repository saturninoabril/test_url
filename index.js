const superagent = require('superagent');

const report = require('./all_report.json');

async function main() {
    const data = {
        report,
        branch: 'test_branch',
        build: 1,
    };

    try {
        const response = await superagent.post(process.env.URL).send(data);

        if (response.body) {
            console.log(`Successfully sent.`);
        }
        return response;
    } catch (er) {
        console.log(`Something went wrong while sending.`, er);
        return false;
    }
}

main();
