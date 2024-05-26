'use strict';

const { hashPassword } = require('../helper/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [
      {
        username:'kanankiri',
        email:'kanankiri@mail.com',
        password:hashPassword('12345'),
        name:'UD. Kanan Kiri',
        createdAt: new Date(),
        updatedAt:new Date()
      }
     ]
     await queryInterface.bulkInsert('Users',data,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',null,{})
  }
};
