// Convert Javascript date to PostgreSQL TIMESTAMP YYYY-MM-DD HH:MI:SS:MS
const datenow = new Date();

function pgFormatDate(date) {
    function zeroPad(d) {
        return ('0' + d).slice(-2);
    }
    
    const parsed = new Date(date);
    
    return parsed.getUTCFullYear() +'-'+ zeroPad(parsed.getUTCMonth() + 1) +'-'+ zeroPad(parsed.getUTCDay()) +' '+
        zeroPad(parsed.getUTCHours()) +':'+ zeroPad(parsed.getUTCMinutes()) +':'+ zeroPad(parsed.getUTCSeconds()) +'.'+
        parsed.getMilliseconds();
}

console.log(pgFormatDate(datenow));
