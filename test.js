const kintone = require('./src/index');

let kintoneAuthWithAPIToken = (new kintone.Auth()).setApiToken('ucAgtsAdA0ZsXE0OLozQLnnFPQJrRzJ2zgA4Ab0A');
let kintoneConnection = new kintone.Connection('hbr0a.kintone.com', kintoneAuthWithAPIToken);

let kintoneRecord = new kintone.Record(kintoneConnection);

let appID = 48;
let recordID = 28;
let getRecord = async () => {
    try {
        let recordResult = await kintoneRecord.getRecord(appID, recordID);
        console.log(recordResult);
    } catch (error) {
        // The promise function always reject with KintoneAPIExeption
        console.log(error.get());
    }
}
getRecord();