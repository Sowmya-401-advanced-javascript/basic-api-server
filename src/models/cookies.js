class CookiesModel {
    constructor(){
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if(id) {
            // to get one food
            return this.db.find(record => record.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        obj.id = ++this.id;
        this.id.push(obj);
        return obj;
    }

    update(id, obj) {
        if(!id) {return null}
    
        // Todo
        return obj;
    }

    delete(id) {
        if(!id) {return null}
    
        // Todo
        return null;
    }
}

module.exports = CookiesModel;