const request = require('supertest');
const app = require('../src/index');  // Import API

describe('📌 API Tests', () => {
    it('✅ GET /api/members should return 200 and an array', async () => {
        const res = await request(app).get('/api/members');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('✅ POST /api/members should add a member', async () => {
        const res = await request(app).post('/api/members').send({
            member_id: 1001,
            name: 'John Doe',
            email: 'john.doe@example.com',
            join_date: '2024-01-01'
        });
        expect(res.status).toBe(201);
        expect(res.body.message).toBe('Member added successfully');
    });
});
