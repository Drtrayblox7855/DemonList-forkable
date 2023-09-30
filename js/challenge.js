
const d = {
	"list": [
    {
		"vids": [
        {
					"user": "testname",
					"link": "google.com",
					"percent": 100, // percent must be higher than percentToQualify ^^ 
          "hz": "60Hz" // you dont need this
				},
      ],
      "name": "ERA GOL DE YEPES", // name of level
      "author": "Mr.Pandequeso []", // name of author, if someone created it then someone else verified it then do creator [verifier]
      "id": 6246, // self explanatory
      "percentToQualify": 0, // most should be 75 or 100
      "verificationVid": "https://youtu.be/wrzwdim4P2g", // verification video
      "key": 1 // hard part about this is that when you're adding a level, you gotta do +1 to all the ones below the one you just added
    }
    /*=================================================================================*/
  ],
  "version": [
    1,
    0,
    0
  ]
};

const list = d.list; const version = d.version; 7