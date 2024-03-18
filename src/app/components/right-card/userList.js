import User from "./user.js";

class UserList {
    localStorageItemKey = 'react-lab-2';
    constructor() {
        this.users = this.tryToLoadUsersFromLocalStorage(this.localStorageItemKey);
    }
    getIndexOfUser(user) {
        return this.users.findIndex(u => u.name === user.name);
    }
    addUser(user) {
        const index = this.getIndexOfUser(user);

        if(index === -1) {
            this.users.push(user);
        } else {
            this.users[index].money += user.money;
            this.users[index].comment = user.comment;
        }

        this.saveUsersToLocalStorage(this.localStorageItemKey)
    }
    tryToLoadUsersFromLocalStorage(key){
        const storedUsers = localStorage.getItem(key);
        return storedUsers ? JSON.parse(storedUsers).map(u => new User(u.name, u.comment, u.money)) : [];
    }
    saveUsersToLocalStorage(key) {
        localStorage.setItem(key, JSON.stringify(this.users));
    }
    printAllUsersInformation(){
        console.clear();
        this.users.forEach(user => {
            user.printUserInformation();
        })
    }
}
export default UserList;