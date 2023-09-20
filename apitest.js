module.exports = {
    todoSchema: function (){
        const todoSchema = {
            type: 'object',
            properties: {
                todos: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number'},
                            todo: { type: 'string'},
                            userId: { type: 'number'},
                            completed: { type: 'boolean'},
                            isDeleted: {type: 'boolean'},
                            deletedOn: {type: 'string'},
                        },
                        required: ['id','todo']
                    }
                    
                }
            }
        }
        return todoSchema;
    },

}