Coses per fer:

- Exercici 3, el qual es necessita tornar a fer els passos anteriors, ja que les funcions de onchange estaven funcionant degut a que era un input number. Ara amb un input text surten problemes. Hi havorens necessitaria: - Gestionar quan canvia el numero amb el input, que seria un onchange - Amb els butons al fer onclick, que incrementes i decrementes el valor del input (que estaria amb value={un useState del seu valor})
  I tot aixo que al canviar el valor de idiomes o pages, que actualitzes degudament el valor del amount. El qual dona problames actualment perque el que estic fent es sumar sempre els valors i hauria de fer hem sembla es subdividir la part de amount de butons boolean i la part de amount de personalitzada. **Hi havorens tenir: - Amount boolean: 500, 300 o 200 - Amount Perosnalized: que es calcula amb la funcio pages x idioms x 30 - Un tercer nou valor que seria useState, que seria el sumatori dels dos anteriors**

- Dividir en components el component pare de presupost (vigilar amb el usestate ja que hi havorens si modularitzo sertes coses haure de pasar dades parent-children)
