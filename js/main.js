const { createApp } = Vue

createApp(
    {
        data() {
            return {
                newTask: '',
                error: false,
                tasklist: [
                    {
                        text: 'task 1',
                        done: false
                    },
                    {
                        text: 'task 2',
                        done: true
                    }
                ]
            }
        },
        methods: {
            removeTask(index) {
                console.log(index);
                this.tasklist.splice(index, 1);
            },
            addTask() {
                if (this.newTask.length >= 5) {

                    const newTask = {
                        text: this.newTask,
                        done: false
                    };
                    this.tasklist.unshift(newTask);
                    this.newTask = "";
                    this.error = false
                }
                else {
                    this.error = true;

                }
                this.tasklist.push(this.newTask);
                this.newTask = '';
            },
            checklength() {
                if (this.newTask.length >= 5) {

                    this.error = false;
                }
                else {
                    this.error = true;

                }

            },
            done(index) {
                this.tasklist[index].done = !this.tasklist[index].done
            }
        }

    }

).mount('#app')