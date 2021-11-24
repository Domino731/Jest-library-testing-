// jezeli chcesz testowac np fetchowanie danych z api to musisz uzyc done().
// Jest poczeka az wywołanie zwrotne done() zostanie wywołane przed końcemtestu. jezeli done() nie zostanie wywołane wtedy test wyrzuci błąd
//

//test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
//});
