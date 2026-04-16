define(['managerAPI'], function(Manager){

    var API = new Manager();

    API.setName('mgr');
    API.addSettings('skip',true);

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        consent: [{
            type: 'quest', 
            name: 'consent', 
            scriptUrl: 'consent.js', 
            header: 'Consent', 
            title: 'Consenso Informato', 
            buttonText: 'Invia' 
        }],    

        iat_instructions: [{
            inherit: 'instructions',
            name: 'iat_instructions',
            templateUrl: 'iat_instructions.jst',
            title: 'Istruzioni',
            buttonText: 'Continua',
            piTemplate: true
        }],
        
        iat: [{
            type: 'time',
            name: 'iat',
            scriptUrl: 'iat.js'
        }],

        socio_demografica: [{
            type: 'quest',
            name: 'socio_demografica',
            scriptUrl: 'socio_demografica.js',
            title: 'Questionario',
            header: 'Questionario'
        }],
        
        ringraziamento: [{
            type: 'quest',
            name: 'ringraziamento',
            scriptUrl: 'ringraziamento.js',
            last: true
        }],    

        redirect: [{ 
            type:'redirect',
            name:'redirect', 
            url: 'https://www.google.com' 
        }]
    });

    API.addSequence([
        {inherit: 'consent'},
        {
            mixer: 'branch',
            conditions: [
                function(){ return piGlobal.consent.questions.userconsent.response === true;} 
            ],
            data: [
                {inherit: 'iat_instructions'},
                {inherit: 'iat'},
                {inherit: 'socio_demografica'},
                {inherit: 'ringraziamento'}
            ],
            elseData: [
                {inherit: 'redirect'}
            ]
        }
    ]);

    return API.script;
});
