Aplicație React cu gestionare de stare folosind Redux Toolkit.

Iată o descriere a fiecărei componente:

1. Reducer și Acțiuni (reducers.js): Ai creat un slice (porțiune) de starea
   aplicației numit 'counter' folosind createSlice din Redux Toolkit. Acest
   slice conține o stare inițială de 0 și două acțiuni: incrementare și
   decrementare. Acțiunile (increment și decrement) sunt exportate și pot fi
   utilizate pentru a actualiza starea counterului.

2. Magazin Redux (store.js): Ai configurat un magazin Redux folosind
   configureStore din Redux Toolkit. Magazinul are un singur reducer,
   counterReducer, care este combinat în obiectul de reduceri al magazinului.

3. Componenta React (App.js): Ai creat o componentă React numită 'App'.
   Componenta este conectată la starea Redux folosind useSelector pentru a
   extrage valoarea counterului din starea magazinului. Componenta dispune de
   două butoane, unul pentru a incrementa counterul și unul pentru a-l
   decrementa. Acțiunile asociate acestor butoane sunt dispecerate folosind
   useDispatch.

4. Indexare și Furnizare (index.js): Ai conectat aplicația React la magazinul
   Redux folosind componenta Provider din react-redux. Ai renderizat componenta
   'App' în elementul cu id-ul 'root' din HTML.

În ansamblu, aceasta este o implementare simplă a unei aplicații React care
utilizează Redux Toolkit pentru gestionarea stării. Componenta 'App' reprezintă
interfața utilizatorului care interacționează cu starea gestionată de Redux.
Acțiunile de incrementare și decrementare sunt gestionate prin reducerul
specificat în magazinul Redux.
