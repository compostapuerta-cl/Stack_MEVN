<template>
    

    <div class="container">
        <navbar class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">MEVN Stack</a>
        </navbar>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <input type="text" placeholder="Insert a Task" class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" cols="30" rows="10" placeholder="Insert a Description"></textarea>
                                </div>
                                <button class="btn btn primary btn-block">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
    export default {
        data() {
            return {
                task: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            addTask() {
                console.log(this.task)
            }
        }
    }


</script>
