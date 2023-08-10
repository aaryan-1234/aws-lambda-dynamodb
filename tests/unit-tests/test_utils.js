//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = require("chai");
const axios  = require("axios");

chai.use(chaiHttp);

describe("Candidates info", () => {
  it("POST request", async () => {
    try {
      const api_url =
        "https://8i4itml36k.execute-api.us-east-1.amazonaws.com/dev/candidates";

      console.log(api_url);

      const response = await axios.post(api_url, {
        fullname: "Kio",
        email: "kio@gmail.com",
        experience: 78,
      });
      console.log("response-->",response);

      expect(response.status).to.equal(200);
      //expect(response.data).to.includes()
    } catch (error) {
      throw error;
    }
  });
});


describe("GET Data request",function(done){
    it("should validate the response of API", async() => {
      try {
        const api_url =
        "https://8i4itml36k.execute-api.us-east-1.amazonaws.com/dev/candidates";

  
        console.log(api_url);
  
        const response = await axios.get(api_url);
  
        expect(response.status).to.equal(200);
      } catch (error) {
        throw error;
      }
    });
  });