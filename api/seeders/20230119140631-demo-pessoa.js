'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [
        {
          nome:"Ana Souza",
          ativo:true,
          email:"ana@gmail.com",
          role:"estudante",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome:"João Paulo",
          ativo:true,
          email:"paulo@gmail.com",
          role:"estudante",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome:"Belial Trevoso",
          ativo:true,
          email:"capeta@gmal.com",
          role:"estudante",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome:"Liza Matos",
          ativo:true,
          email:"ana@gmal.com",
          role:"Professor",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome:"Cristovão Pereira",
          ativo:true,
          email:"ana@gmal.com",
          role:"Docente",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
        
      ], {});
  
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
