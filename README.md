Coses per fer:
- Toca gestionar el guardat i la retoma de les dades del localstorage. En teoria el guardat al local storage ja esta fet, lo que toca ara es eam bel usefeect (que es corre al principi, ja que no te dependencies), gestionar la obtencio de aquests valors i ficarlos com a useState de valors inicials. Mirar:
  - Que després funciona correctament el guardat i la presa
  - Que amb la retoma dels valors, es calculen els computs totals? Ja que per calcularlos han de correr altres funcions, per lo que podria ficar un if o correr aquelles funcions dintre del useffect --> pero la funcio encara no esta definida. Per lo que cal mirar be com funciona.

- Dividir en components el component pare de presupost (vigilar amb el usestate ja que hi havorens si modularitzo sertes coses haure de pasar dades parent-children)
