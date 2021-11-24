// aby obsluzyc obietnice wystarczy uzyć strony oczekującego czyli odbierania danych za pomocą then i catch
//

// test("the data is peanut butter", () => {
//   return fetchData().then((data) => {
//     expect(data).toBe("peanut butter");
//   });
// });

// test("the fetch fails with an error", () => {
//   expect.assertions(1);
//   return fetchData().catch((e) => expect(e).toMatch("error"));
// });

// mozesz tez uzyc ustawic await dla promisa
// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
//   });
