## Totalne podstawy
* 1. zaimportuj funckję którą chcesz poddać testowaniu
* 2. zainicjalizuj test przy pomocy `test()`
* 3. do pierwszego parametru wstaw opis dotyczący tego co robi test
* 4. drugi argument fo funckja która zostanie wywołana w celu sprawdzenia 
* 5. uzyj `expact` i wstaw do niej funckję którą chcesz przestować
* 6. wywołaj metodę `toBe()` i wstaw do niej oczekiwany wynik funckji

`
// 1 parament -> okresla co robi test
// 2 parament -> funckja dla testu

 // expect - funckja ktora zostaje poddana testowaniu
// toBe - oczekiwany rezultat
test('Testing sum function', () => {
   
expect(sum(1,2)).toBe(2)
});
`

## Te same wartosci
`const data = [1,2,3,45]`
jezeli przetestujesz  funkcję `cloneArray(data)` i w `toBe(data)` dodasz wyczekiwany rezultat jako  tez data, to wyrzuci błąd. Dlaczego?
te tablice owszem mają te same wartości ale ich referencje w pamięci są już inne. Jezeli chcesz porównać wartości musisz zamiast `toBe(data)` dać metodę `toEqual(data)`.
## porównywanie wartosci boolean, null, undefined
mozesz uzyc następujących wartosci
* `.toBeNull()`
* `.toBeDefined()`
* `.toBeUndefined()`
* `.not.toBeUndefined()`
* `.toBeTruthy()`
* `.not.toBeTruthy()`
* `.toBeFalsy()`
* `not.toBeFalsy()`
## Liczbby
* `toBeGreaterThan()`
* `  toBeGreaterThanOrEqual()`
* `  toBeLessThan()`
 * `toBeLessThanOrEqual(`
 * `toBeCloseTo()`
 * ` toBe()`;
 * ` toEqual()`;

 `toBe()` === `toEqual()` znaczy to samo dla liczb
 `toBeCloseTo()` -> dla zaokrąglen liczb

 ## Ciągi znaków
 * `.toMatch()` - sprawdza czy znak zawiera się w string
 * `.notToMatch()` - sprawdza czy znak nie zawiera się w string

 ## tablice 
 * `.toContain()` - sprawdza czy konkretna wartosc znajduje się w tablicy

## Sprawdzanie czy funkcja wyrzuci błąd
* `toThrow()`
* `toThrow(error)`
* `toThrow(<tekst errora>)` - sprawdza pod kątem konkretnej wiadomosci


## Calbacks
patrz w plik `callbacks.test.js`

## Promisy
Aby obsluzyc obietnice wystarczy uzyć strony oczekującego czyli odbierania danych za pomocą then i catch. patrz w plik `promise.test.js`


