class TodoModel {

    constructor(){
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if(id) {
            // to get one animal
            // console.log(typeof parseInt(id));
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

    // function changeDesc( value, desc ) {
    //     for (var i in projects) {
    //       if (projects[i].value == value) {
    //          projects[i].desc = desc;
    //          break; //Stop this loop, we found it!
    //       }
    //     }
    //  }

    update(newId, todoObj) {
        console.log("I am here");
        console.log("todoObj", todoObj);
        for(let i = 0; i < this.db.length; i++) {
            console.log("I went through the for loop");
            if(this.db[i].id == newId){
                console.log("db[i]", this.db[i]);
                this.db[i].complete = todoObj.complete;
                console.log("DB[i]", this.db[i]);
                return this.db[i];
            }
        }

        // if(!newId) {return null}
        // todoObj.id = newId;
        // console.log("DB", this.db);
        // console.log("NewID", newId);
        // // find this obj in the database
        // let todoObjInDatabase = this.db.find(record => {
        //     console.log("Record.id", record.id);
        //     return record.id == newId});

        // console.log("What is the todoObj", todoObjInDatabase);
        // // todoObjInDatabase.id = newId;
    
        // return todoObj;
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