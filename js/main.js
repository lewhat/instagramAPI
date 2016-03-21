function instaSearch(){

    var search = document.getElementById ('search').value
    document.getElementById('results').innerHTML = ""



$.ajax({

    url: "https://api.instagram.com/v1/tags/" + search + "/media/recent?access_token=2251922525.1677ed0.9d54c659a099431c88dc50c07e0f0370",
     jsonp: "callback",
     dataType: "jsonp",
    success: function (data) {

        for(i=0; i<data.data.length; i++) {
            // var jdata = data.data[i]

            // document.getElementById('results').innerHTML +="<div class='row bookrap'><h2>" + jdata.tags + "</h2>" + "<h3>" + jdata.type + "</h3>" + "<h4>" + jdata.username + "</h4><a target='_blank' href='" +jdata.caption+ "'><button class='btn btn-primary'>Learn More</button></a></div>" + "<div> <img src='"+jdata.images.thumbnail.url + "'></div></div>"

            var newA = document.createElement('a')
                newA.setAttribute('href', data.data[i].link)
                newA.setAttribute('target', "_blank")

                var newDiv = document.createElement('div')
                newDiv.className = "col-xs-3 pad animated rotateIn"

                var newImg = document.createElement('img')
                newImg.setAttribute('src', data.data[i].images.thumbnail.url)
                newDiv.appendChild(newImg)

                var newLike = document.createElement('h5')
                var likes = document.createTextNode('likes: ' + data.data[i].likes.count)
                newLike.appendChild(likes)
                newDiv.appendChild(newLike)

                var creator = document.createElement('h5')
                var createdBy = document.createTextNode('From: ' + data.data[i].caption.from.username)
                creator.appendChild(createdBy)
                newDiv.appendChild(creator)
                newA.appendChild(newDiv)

                document.getElementById('results').appendChild(newA)


        }

    },
    type: 'GET'



});
}


document.getElementById('button').addEventListener('click', instaSearch, false)