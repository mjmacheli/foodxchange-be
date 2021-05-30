import app from '../../app';
import {agent as request} from 'supertest';
import {expect} from 'chai';

let mocksUserIdTest = '1';

let mockUser = {
    "name": "Mj Macheli",
    "email": "machelimail@gmail.com",
    "password": "pass"
};

it('should POST /users', async () => {
    const res = await request(app).post('/users').send(mockUser);
    expect(res.status).to.equal(400);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    // expect(res.body.id).to.be.an('string');
    mocksUserIdTest = res.body.id;
});

it(`should GET /users/:userId`, async () => {
    const res = await request(app)
        .get(`/users/${mocksUserIdTest}`).send();
    expect(res.status).to.equal(400);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    // expect(res.body.id).to.be.an('string');
    // expect(res.body.name).to.be.equals(mockUser.name);
    // expect(res.body.email).to.be.equals(mockUser.email);
    // expect(res.body.id).to.be.equals(firstUserIdTest);
});