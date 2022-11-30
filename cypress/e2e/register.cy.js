
const baseUrl = 'http://pretest-qa.dcidev.id/api/v1/'
const dataUser = {
  phone: 'Monkey D sasos',
  password: 'one piece',
  country: 'Indo',
  latlong: 'ljasd',
  device_token: 'ljasd',
  device_type: 1
};

describe('Register User', () => {
  it('User Successfully Registered', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}register`,
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Accept" : "application/json"
      },
      body: dataUser
    })
    .then(response => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.any.keys('data')
    })
  })
})

describe('Remove User', () => {
  it('Success Remove User', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}register/remove`,
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Accept" : "application/json"
      },
      body: dataUser
    })
    .then(response => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.any.keys('data')
    })
  })
})