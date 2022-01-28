import * as history from "history";
const browserHistory = history.createBrowserHistory();

browserHistory.listen((location) => {
    const {pathname} = location;
console.log('pathname',pathname)
})

export {
    browserHistory,
}

