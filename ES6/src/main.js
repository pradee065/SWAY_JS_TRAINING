let test = "hello";
class user{
	constructor(username, email, password){
		this.username = username;
this.email = email;
      this.password = password;
    }

register(){
console.log(this.username + ' is a registered guy ')
}

}

let bob = new user('bob', 'bobemail', '12345');
bob.register();
