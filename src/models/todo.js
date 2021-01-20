class TodoModel {

    constructor(){
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if(id) {
            // to get one animal
            console.log(typeof parseInt(id));
            return this.db.find(record => record.id === parseInt(id));
        } else {
            return this.db;
        }
    }

    create(obj) {
        obj.id = ++this.id;
        this.db.push(obj);
        return obj;
    }

    update(newId, todoObj) {
        if(!newId) {return null}
        console.log("what is the update?");
        todoObj.id = newId;

        // find this obj in the database
        let todoObjInDatabase = this.db.find(record => record.id === newId);
        todoObjInDatabase.id = newId;
    
        return todoObj;
    }
        

    delete(id) {
        if(!id) {return null}
        this.db = this.db.filter(function deleteDbItems(record) {
            return parseInt(record.id) !== parseInt(id);
        });
        return null;
    }
}

module.exports = TodoModel;