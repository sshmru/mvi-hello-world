


/*  MODEL */

var model = function(intent){
	
	var store = {
		data: 0
	};
	
	var model = intent.map(function(action){
		return {
			data: action.data + store.data
		};
	});
	
	model.sub(function(state){
		store.data += 1;
	});
	
	return model ;
	
};




/* VIEW */

var view = function(model){
	
	var view = model.map(function(state){
		return '<button>' + state.data + '</button>';
	});
	
	return view;
	
};




/* INTENT */

var intent = function(user){
	
	var actions = {
		'click': function(e){
			return {
				data: e.target.innerHTML
			};
		},
		'DOMContentLoaded': function(e){
			return {
				data: '>> '
			};
		}
	};
	
	var intent = user.map(function(event){
		return actions[event.type](event);
	});
	
	return intent;
	
};




/* MAIN */


var user = Sob.fromDOMEvent(window, 'click');
var loaded = Sob.fromDOMEvent(document, 'DOMContentLoaded');

var events = user.merge(loaded);

view(model(intent(events))).sub(
	function(view){
		document.body.innerHTML =  view;
	}
);
