import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // use OpenAPI 3
    info: {
      title: 'Template API',
      version: '1.0.0',
      description: 'API to manage Entities',
    },
    servers: [{ url: 'http://localhost:8000/api' }],
    components: {
      schemas: {        
        Entity: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'The unique identifier for an entity',
            },
            name: {
              type: 'string',
              description: 'The name of the entity',
            },
            description: {
              type: 'string',
              description: 'A brief description of the entity',
            },
          },
          required: ['id', 'name'],
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // change this if your route files are in different locations
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
