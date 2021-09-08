new Vue({
    el:"#app",
    data(){
        return {
            toDoText: "",
            toDoList : [],
            counter : 0,
            isEmptyText : true
        }
    },
    methods : {
        isEmpty(){
            this.isEmptyText = (this.toDoText == "")? true : false;
        },
        getText(event){
            this.toDoText = event.target.value;
        },
        appendCard(){
            if(!this.isEmptyText){
                this.toDoList.push({id : this.counter, text : this.toDoText});
                this.toDoText = "";
                this.isEmptyText = true;
                this.counter++
            } 
            else null;
        },
        deleteCard(index){
            this.$delete(this.toDoList, index);
        }
    }
})