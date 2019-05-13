function writePostandSignature(archive, postSubmission){
	var archive = archive;

	postSubmission.addEventListener("submit", function(e) {
	  	e.preventDefault(); 
	  	var formRecieved = e.target,
	  			formTitle = formRecieved.elements["Title"].value.toString(),
	  			formContents = formRecieved.elements["Content"].value.toString(),
	  			timestamp = new Date().getTime(),
	  			imageReader = new FileReader();

		var formSignatureImage = ((formRecieved.getElementsByTagName("img").length > 0) ? formRecieved.getElementsByTagName("img")[0].src : "not available" );
	  	
	  	console.log("form recieved: ", formSignatureImage)

	  	var postContent = {
	  		"title" : formTitle,
	  		"timestamp" : timestamp,
	  		"content" : formContents,
	  		"signature" : formSignatureImage;
	  	}

	  	async function postFile(archive, postContent){
	  		await archive.writeFile('/posts/post-' + postContent.timestamp +'.json', JSON.stringify(postContent));
	  	}

	  	postFile(archive, postContent)
	  	.then(function(event){
	  		console.log("post is posted!")
	  	})
	  	.catch(function(error){
	  		console.log("error\n", error)
  		})
	});
}