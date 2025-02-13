class GenericStorage<T>{
    genArr:T[]=[];

    add(item:T):void{
        this.genArr.push(item);
    }
    remove(item:T):void{
        this.genArr = this.genArr.filter(i => i !== item);
        console.log(this.genArr);   
    }
    getAll():T[]{
        return this.genArr;
    }
}

const gs1=new GenericStorage<number>();
gs1.add(1);
gs1.add(2);
gs1.add(3);
gs1.add(4);
gs1.add(5);
console.log(gs1.getAll());
gs1.remove(2);


const gs2=new GenericStorage<string>();
gs2.add("AbC");
gs2.add("DEF");
gs2.add("GHI");
gs2.add("PQR");
gs2.add("XYZ");
console.log(gs2.getAll());
gs2.remove("GHI");