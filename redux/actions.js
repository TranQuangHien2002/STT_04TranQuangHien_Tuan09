// actions.js
var signin = (email) => ({ type: "signin", value: email });
var put = (account, job) => ({ type: "put", account: account, job: job });
var remove = (account, jobId) => ({ type: "remove", account: account, jobId: jobId });

export { signin, put, remove };
