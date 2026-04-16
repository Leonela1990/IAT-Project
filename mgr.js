define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	//const queryString = window.location.search;
    //const urlParams = new URLSearchParams(queryString);
    //const pt = urlParams.get('pt');

	var API    = new Manager();
	//const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
	init_data_pipe(API, 'efCj328MzgpQ', {file_type:'csv'});	

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
		buttonText: 'Invia' }],	    

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
            name: 'biat',
            scriptUrl: 'BIAT.js'
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
        }],
		
		//This task waits until the data are sent to the server.
        uploading: uploading_task({header: 'Solo un momento...', body:'Si prega di attendere il salvataggio dei dati.'})
    });

    API.addSequence([
         
        
        {inherit: 'consent'},
        {
            mixer: 'branch',// if participants choose "I decline", they are taken to a transition page telling them they are being redirected
            conditions: [
                function(){ return piGlobal.consent.questions.userconsent.response === true;} // if the question name or response options were changed in consent.js, adapt this too 
            ],
            data: [
                    {
                        inherit: 'iat_instructions'
                    }
            ],
            elseData: [// if participants does not agree to participate, they are redirected.
                {
                    inherit: 'redirect'
                }
            ]
    },
    {
        inherit: 'iat'
    },
    {
        inherit: 'questionari'
    },
            
	{inherit: 'uploading'},
        {inherit: 'debriefing'}
    ]);

    return API.script;
});
