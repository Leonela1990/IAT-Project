define(['questAPI'], function(Quest){
	var API = new Quest();

API.addQuestionsSet('basicDropdown2', {
    type: 'dropdown',
    autoSubmit: false,
    numericValues: true,
    required:true,
    help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	errorMsg: {
		required: "Per favore, rispondi a questa domanda"
	}
});

	
	API.addQuestionsSet('singleChoice', [
     {
        type: 'selectOne',
        autoSubmit: false,
        numericValues: true,
        required: true,
        help: '<%= pagesMeta.number < 100 %>',
    	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	    errorMsg: {
    		required: "Per favore, rispondi a questa domanda"
    	}
		}]);
	
	API.addQuestionsSet('multiChoice', [
     {
        type: 'selectMulti',
        autoSubmit: false,
        numericValues: true,
        required: true,
        help: '<%= pagesMeta.number < 100 %>',
    	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
	    errorMsg: {
    		required: "Per favore, rispondi a questa domanda"
    	}
		}]);
	

    API.addQuestionsSet('basicSelect',
    {
        type: 'selectOne',
        autoSubmit:false,
        numericValues:true,
        style:'multiButtons',
	required : true,
	errorMsg: {
	required: "Per favore, rispondi a questa domanda."
	  	  },
        answers : [
            '1 - Fortemente in disaccordo',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7 - Fortemente d’accordo'
        ]
    });
	
	// ### Questions
	// Create the template

    API.addQuestionsSet('performance',{
        inherit : 'singleChoice',
        name: 'performance',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
        stem: 'Quanto fortemente associ il seguente concetto a Paid Media o a Organic: <b>Performance</b>',
        answers: [
		{text:'Fortemente a Paid Media',value:1},
		{text:'Moderatamente a Paid Media',value:2},
		{text:'Leggermente a Paid Media',value:3},
		{text:'Né a Paid Media né a Organic',value:4},
		{text:'Leggermente a Organic',value:5},
		{text:'Moderatamente a Organic',value:6},
		{text:'Fortemente a Organic',value:7}
        ]
    });

    API.addQuestionsSet('ostacoli',{
        inherit : 'singleChoice',
        name: 'ostacoli',
	required : true,
	errorMsg: {
		required: "Per favore, rispondi a questa domanda."
	  	  },
	help: '<%= pagesMeta.number < 100 %>',
	helpText: 'Puoi cambiare la tua risposta selezionando un’altra opzione. <br/>Per confermare, clicca su "Invia"',
        stem: 'Quanto fortemente associ il seguente concetto a Paid Media o a Organic: <b>Ostacoli</b>',
        answers: [
		{text:'Fortemente a Paid Media',value:1},
		{text:'Moderatamente a Paid Media',value:2},
		{text:'Leggermente a Paid Media',value:3},
		{text:'Né a Paid Media né a Organic',value:4},
		{text:'Leggermente a Organic',value:5},
		{text:'Moderatamente a Organic',value:6},
		{text:'Fortemente a Organic',value:7}
        ]
    });	
	
    API.addQuestionsSet('nazione',{
        inherit : 'singleChoice',
        name: 'nazione',
        stem: '<b>Indica la tua nazionalità</b>',
        answers: [
		{text:'Italiana',value:1},
		{text:'Altro',value:2}
        ]
    });
	
    API.addQuestionsSet('sesso',{
        inherit : 'singleChoice',
        name: 'sesso',
        stem: '<b>Indica il tuo sesso biologico</b>',
        answers: [
		{text:'Maschio',value:1},
		{text:'Femmina',value:2},
		{text:'Altro',value:3}
        ]
    });

    API.addQuestionsSet('genere',{
        inherit : 'singleChoice',
        name: 'genere',
        stem: '<b>Indica il genere con cui ti identifichi</b>',
        answers: [
		{text:'Uomo',value:1},
		{text:'Donna',value:2},
		{text:'Non Binario',value:3},
		{text:'Altro',value:4}
        ]
    });	

	API.addQuestionsSet('eta',{
		inherit: 'basicDropdown2',
		name: 'eta',
		stem: '<b>Indica la tua età</b>',
		answers: [
			{text:'18',value:18},
			{text:'19',value:19},
			{text:'20',value:20},
			{text:'21',value:21},
			{text:'22',value:22},
			{text:'23',value:23},
			{text:'24',value:24},
			{text:'25',value:25},
			{text:'26',value:26},
			{text:'27',value:27},
			{text:'28',value:28},
			{text:'29',value:29},
			{text:'30',value:30},
			{text:'31',value:31},
			{text:'32',value:32},
			{text:'33',value:33},
			{text:'34',value:34},
			{text:'35',value:35},
			{text:'36',value:36},
			{text:'37',value:37},
			{text:'38',value:38},
			{text:'39',value:39},
			{text:'40',value:40},
			{text:'41',value:41},
			{text:'42',value:42},
			{text:'43',value:43},
			{text:'44',value:44},
			{text:'45',value:45},
			{text:'46',value:46},
			{text:'47',value:47},
			{text:'48',value:48},
			{text:'49',value:49},
			{text:'50',value:50},
			{text:'51',value:51},
			{text:'52',value:52},
			{text:'53',value:53},
			{text:'54',value:54},
			{text:'55',value:55},
			{text:'56',value:56},
			{text:'57',value:57},
			{text:'58',value:58},
			{text:'59',value:59},
			{text:'60',value:60},
			{text:'61',value:61},
			{text:'62',value:62},
			{text:'63',value:63},
			{text:'64',value:64},
			{text:'65',value:65},
			{text:'66',value:66},
			{text:'67',value:67},
			{text:'68',value:68},
			{text:'69',value:69},
			{text:'70',value:70},
			{text:'71',value:71},
			{text:'72',value:72},
			{text:'73',value:73},
			{text:'74',value:74},
			{text:'75',value:75},
			{text:'76',value:76},
			{text:'77',value:77},
			{text:'78',value:78},
			{text:'79',value:79},
			{text:'80',value:80},
			{text:'81',value:81},
			{text:'82',value:82},
			{text:'83',value:83},
			{text:'84',value:84},
			{text:'85',value:85},
			{text:'86',value:86},
			{text:'87',value:87},
			{text:'88',value:88},
			{text:'89',value:89},
			{text:'90',value:90},
			{text:'91',value:91},
			{text:'92',value:92},
			{text:'93',value:93},
			{text:'94',value:94},
			{text:'95',value:95},
			{text:'96',value:96},
			{text:'97',value:97},
			{text:'98',value:98},
			{text:'99',value:99}
		]
	});		

	API.addQuestionsSet('regione',{
		inherit: 'basicDropdown2',
		name: 'regione',
		stem: '<b>Regione in cui vivi</b>',
		answers: [
			'Abruzzo',
			'Basilicata',
			'Calabria',
			'Campania',
			'Emilia-Romagna',
			'Friuli Venezia Giulia',
			'Lazio',
			'Liguria',
			'Lombardia',
			'Marche',
			'Molise',
			'Piemonte',
			'Puglia',
			'Sardegna',
			'Sicilia',
			'Toscana',
			'Trentino-Alto Adige',
			'Umbria',
			'Valle d’Aosta',
			'Veneto'
		]
	});	

    API.addQuestionsSet('istruzione',{
        inherit : 'singleChoice',
        name: 'istruzione',
        stem: '<b>Indica il tuo livello di istruzione</b>',
        answers: [
		{text:'Diploma di scuola Elementare',value:1},
		{text:'Diploma di scuola Media',value:2},
		{text:'Diploma di scuola Superiore',value:3},
		{text:'Laurea Triennale',value:4},
		{text:'Laurea Magistrale',value:5},
		{text:'Dottorato di ricerca/Scuola di Specializzazione',value:6},
		{text:'Altri titoli post-laurea',value:7}
        ]
    });	

	    API.addQuestionsSet('occupazione',{
        inherit : 'singleChoice',
        name: 'occupazione',
        stem: '<b>Indica la tua occupazione</b>',
        answers: [
		'Studentessa/Studente',
		'Inoccupata/o',
		'Lavoratrice/ore Part-time',
		'Lavoratrice/ore Full-time',
		'Studentessa/Studente e Lavoratrice/ore Part-time',
		'Studentessa/Studente e Lavoratrice/ore Full-time',
		'Altro'
        ]
    });	
		
	/**
	* Page prototype
	*/

	
API.addPagesSet('basicPage',
{
	v1style:2,
	numbered: false,
	noSubmit: false,
	numericValues:true,
	submitText: "Invia"
});

	API.addSequence([

		{
	        mixer : 'random', 
	        wrapper: true, 
	        data : [
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'performance'}
	            },
	            {
	                inherit:'basicPage', 
	                questions: {inherit:'ostacoli'}							
	            }
	        ]
	    },
	  	    {
		       inherit:'basicPage', 
	               questions: {inherit:'nazione'}							
	            },
	    	    {
		       inherit:'basicPage', 
	               questions: {inherit:'sesso'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'genere'}							
	            },
	    	    {
		       inherit:'basicPage', 
	               questions: {inherit:'eta'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'regione'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'istruzione'}							
	            },
		    {
		       inherit:'basicPage', 
	               questions: {inherit:'occupazione'}							
	            }
	]);


    return API.script;
});
