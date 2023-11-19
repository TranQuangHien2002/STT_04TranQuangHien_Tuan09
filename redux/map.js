// map.js
import { signin, put, remove } from "./actions";

var mapStateToProps = (state) => ({ account: state });

var mapDispatchToProps = (dispatch) => ({
  signin: (email) => dispatch(signin(email)),
  put: (account, job) => dispatch(put(account, job)),
  remove: (account, jobId) => dispatch(remove(account, jobId)),
});

export { mapDispatchToProps, mapStateToProps };
