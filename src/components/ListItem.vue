<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ todo.text }}</td>
        <td>
            <span @click="changeStatus" class = "status" :class="getStatusClass">{{ todo.status }}</span>
        </td>
        <td><button @click="removeTask">Remove</button></td>
    </tr>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['todo', 'index'],
    data() {
        return {
            status: ""
        }
    },

    methods: {
        removeTask() {
            this.$emit('remove')
        },
        changeStatus() {
            this.$emit('change-status', this.todo)
        }
    },

    computed: {
        getStatusClass() {
            return `status-${this.todo.status}`
        }
    }

}
</script>

<style scoped>
.status{
    cursor: pointer
}

.status-to-do {
    color: red;
}

.status-doing {
    color: orange;
}

.status-review {
    color: blue
}

.status-done {
    color:green
}
</style>