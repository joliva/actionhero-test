exports.users = function(api, next){

	api.users = {
	  // constants
	  usersHash: "users",

	  // methods
	  add: function(userName, password, next){},
	  list: function(next){},
	  authenticate: function(userName, password, next){},
	  delete: function(userName, password, next){},
	}

	api.users._start = function(api, next){
		next();
	};

	api.users._stop =  function(api, next){
		next();
	};

	next();
}
