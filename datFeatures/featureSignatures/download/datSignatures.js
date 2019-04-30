function writePostandSignature(archive, postSubmission){
	var archive = archive;
	
	postSubmission.addEventListener("submit", function(e) {
  		e.preventDefault(); 
	  		var formRecieved = e.target,
			imageReader = new FileReader(),
			formSignatureImage = ((formRecieved.getElementsByTagName("img").length > 0) ? formRecieved.getElementsByTagName
			("img")[0].src : "not available" );

  		console.log("form recieved: ", formSignatureImage)

	var postContent = {
  		"signature" : formSignatureImage,
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