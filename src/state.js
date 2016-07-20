// note: Modernizr is built directly into the /public/build directory
// 		 and included in the <head> of the html

//TODO: test to see if the history API
import {createHistory} from 'history';
var History;
if (!Modernizr.history){
	History = createHistory();
}

function updateState(state,update){
	if (Modernizr.history){
		history.pushState(state, state.title, stateToUrl(state));
	} else {
		History.pushState(state, state.title, stateToUrl(state));
	}
	update();
}

function stateToUrl(state){
	if (state.query.length){
		return [state.route, state.query].join('?');
	} else {
		return state.route;
	}
}

function urlToState(url){
	// make the title title case
	var title = url.split('/')[0];
	if (title.length){
		title = title[0].toUpperCase() + title.substring(1);
	}

	// extract the route and the query string
	var pieces = url.split('?');
	var route = pieces[0];
	var query_string = pieces.slice(1).join('');

	return {
		title: title,
		route: route,
		query: query_string
	};
}

export function setInitialState(){
	var currentUrl = window.location.pathname;
	var currentState = urlToState(currentUrl);
	if (Modernizr.history){
		// check that a state doesn't already exist
		if (!history.state){
			history.replaceState(currentState, currentState.title, currentUrl);
		}
	} else {
		console.log(Modernizr.history)
		if (!History.state){
			History.replaceState(currentState, currentState.title, currentUrl);
		}
	}
}