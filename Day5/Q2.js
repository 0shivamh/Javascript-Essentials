class User{
      constructor(name,age,email){
          this.name=name;
          this.age=age;
          this.email=email;
          this.coins=0;
          this.Course=[];
      }
      login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.Coins++;
        console.log(`${this.name} has ${this.Coins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}


let user1 = new User('Rishika',18,'r@gmail.com')
let user2 = new User('Rahul',19,'rahul@gmai.com')
let mod = new Moderator('Karan',19,'karan@gmail.com','Moderator');

let admin = new Admin('Shivam',19,'shivam@cwipedia.in');


let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

admin.addCourse(user1,'Blockchain');
admin.addCourse(user1,'AI');