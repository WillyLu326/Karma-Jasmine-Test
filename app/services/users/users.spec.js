describe('User Factory', function() {
	var Users;

	// The array of users our factory will provide us
	var userList = [
	    {
	      id: '1',
	      name: 'Jane',
	      role: 'Designer',
	      location: 'New York',
	      twitter: 'gijane'
	    },
	    {
	      id: '2',
	      name: 'Bob',
	      role: 'Developer',
	      location: 'New York',
	      twitter: 'billybob'
	    },
	    {
	      id: '3',
	      name: 'Jim',
	      role: 'Developer',
	      location: 'Chicago',
	      twitter: 'jimbo'
	    },
	    {
	      id: '4',
	      name: 'Bill',
	      role: 'Designer',
	      location: 'LA',
	      twitter: 'dabill'
	    }
	];

	var singleUser = {
      	id: '2',
      	name: 'Bob',
      	role: 'Developer',
      	location: 'New York',
      	twitter: 'billybob'
	};

	// before test load our api.user module
	beforeEach(angular.mock.module('api.users'));

	// before each test we inject Users Factory (_Users_) to our local Users variable
	beforeEach(inject(function(_Users_) {
		Users = _Users_;
	}));

	// A simple test to verify the Users factory exists
	it('should exist', function() {
		expect(Users).toBeDefined();
	});

	describe('.all()', function() {
		it('should exist', function() {
			expect(Users.all).toBeDefined();
		});

		it('should return a hard-code list of users', function() {
			expect(Users.all()).toEqual(userList);
		});
	});

	describe('.findById()', function() {
		it('should exist', function() {
			expect(Users.findById).toBeDefined();
		});

		it('should return single user', function() {
			expect(Users.findById('2')).toEqual(singleUser);
		});

		it('should return undefined if the user cannot be found', function() {
			expect(Users.findById('ABC')).not.toBeDefined();
		});		
	});






});
