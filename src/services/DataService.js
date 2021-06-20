class DataService {
    constructor() {
        this.currentPage = 1;
        this.size = 200;
        this.data = [
            {
                id: 1,
                fullName: "Joshua Scheck",
                email: "scheck.joshua@gmail.com",
                mobile: '425-435-9858',
                city: 'Woodinville',
                gender: 'male',
                hireDate: '2021-06-16',
            },
            {
                id: 2,
                fullName: "Another Person",
                email: "someone@gmail.com",
                mobile: '425-435-9858',
                city: 'Jacksonville',
                gender: 'female',
                hireDate: '2020-11-01',
              },
          ];
    }

    getCount() {
        return this.size
    }
    
    getAll() {
        return this.data
    };

    get(id) {
        let recordIdx = this.data.findIndex(record => record.id === id);

        if (recordIdx !== -1) {
            return this.data[recordIdx];
        } else {
            return null;
        } 
    };

    post(newRecord) {
        console.log("post");
        console.log(this.data);
        console.log(newRecord);
        this.data = this.data.concat([newRecord]);
    };

    put(newRecord) {
        let recordIdx = this.data.findIndex(record => record.id === newRecord.id);

        if (recordIdx !== -1) {
            this.data[recordIdx] = newRecord;
            return true;
        } else {
            return false;
        }
    };

    remove(id) {
        let recordIdx = this.data.findIndex(record => record.id === id);

        if (recordIdx !== -1) {
            delete this.data[recordIdx];
            return true;
        } else {
            return false;
        }
    }
};

export default DataService;