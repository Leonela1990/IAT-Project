define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
    noSubmit: true, 
    v1style: 2,
    header: 'Consenso',
    decline: false,
    autoFocus: true
  });

  /**
   * Question prototypes
   */
  API.addQuestionsSet('basicSelect',{
    type: 'selectOne',
    autoSubmit: true, // 
    maxWidth: '60%'
  });

  API.addSequence([
    {
      inherit: 'basicPage',
      questions: [
        {
          type: 'info',
          
          stem: `
            <article>
              <h1>Consenso Informato alla Partecipazione alla Ricerca</h1>
              <h2>Scopo della ricerca</h2>
              <p>La presente indagine ha l'obiettivo di analizzare i processi decisionali e le associazioni cognitive nel contesto del Digital Marketing.</p>
              <h2>Procedura</h2>
              <p>La partecipazione prevede il completamento di un compito di associazione rapida al computer. La durata complessiva è di circa 10-15 minuti.</p>
              <h2>Trattamento dei dati</h2>
              <p>Il progetto rispetta la normativa vigente:</p>
              <ul>
                <li>Dati trattati in forma anonima e aggregata.</li>
                <li>Uso esclusivo per finalità di analisi statistica e ricerca professionale.</li>
              </ul>
              <p><strong>Dichiarazione:</strong> Procedendo, esprimo il consenso alla partecipazione.</p>
            </article>
          `
        },
        {
          inherit: 'basicSelect',
          name: 'userconsent',
          description: 'Clicca sulla tua scelta per proseguire:',
          answers: [
            {text: 'Accetto di partecipare alla ricerca', value: true},
            {text: 'Non accetto di partecipare alla ricerca', value: false}
          ]
        }
      ]
    }
  ]);

  return API.script;
});
