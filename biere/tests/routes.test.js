const request = require('supertest')
const app = require('../app')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/brewery/add')
      .send({
     
        Name: "bibine5",
        Description: "bibine3 le re re retour",
        Logo: "vive la superbibine",
        Year: 2015
       
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})
