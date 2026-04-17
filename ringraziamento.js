define(['questAPI'], function(Quest){
    var API = new Quest();

    /**
    * Page prototype
    */
    API.addPagesSet('basicPage',{
        noSubmit: true, 
        v1style: 2,
        header: 'Hai completato lo studio. Grazie per la tua partecipazione!',
        decline: false,
        autoFocus: true 
    });

    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {
                    type: 'info',
                    stem: 'I tuoi dati sono stati salvati correttamente. Puoi chiudere la finestra.'
                }
            ]
        }
    ]);

    return API.script;
});
