var data = [[]];

document.addEventListener('DOMContentLoaded', function() {
    let ul = document.querySelector('.list');
  
    $("#add").on('click', function () {
        let li = document.createElement('li');
        var sel = document.createElement("Select");

        var option1 = document.createElement("option")
        var option4 = document.createElement("option")
        var option5 = document.createElement("option")
        var option6 = document.createElement("option")
        var option7 = document.createElement("option")
        var option8 = document.createElement("option")
        var option9 = document.createElement("option")
        var option10 = document.createElement("option")
        var option11 = document.createElement("option")
        var option12 = document.createElement("option")
        var option13 = document.createElement("option")

        option1.text = "1-3"
        option4.text = "4"
        option5.text = "5"
        option6.text = "6"
        option7.text = "7"
        option8.text = "8"
        option9.text = "9"
        option10.text = "10"
        option11.text = "11"
        option12.text = "12"
        option13.text = "13"

        sel.add(option1)
        sel.add(option4)
        sel.add(option5)
        sel.add(option6)
        sel.add(option7)
        sel.add(option8)
        sel.add(option9)
        sel.add(option10)
        sel.add(option11)
        sel.add(option12)
        sel.add(option13)

        li.appendChild(sel);

        var startFrame = document.createElement("input");
        startFrame.setAttribute("id", "startFrame");
        startFrame.type = "number";
        startFrame.value = 0

        li.appendChild(startFrame);

        var finishFrame = document.createElement("input");
        finishFrame.setAttribute("id", "finishFrame");
        finishFrame.type = "number";
        finishFrame.value = 0

        li.appendChild(finishFrame);



        let button = document.createElement('button'); // create ne button elemnt
        button.textContent = 'delete';
        button.addEventListener('click', function () {
            ul.removeChild(li);
        });
        li.appendChild(button);
        ul.appendChild(li);
    });
    // try to delte list element from unorderd list
})

function changeListener(){
    var all_episode = $("select").toArray().map(x => $(x).val());
    var all_start_frame = $("[id=startFrame]").toArray().map(x => $(x).val());
    var all_finish_frame = $("[id=finishFrame]").toArray().map(x => $(x).val());
    // // console.log("episode: " + all_episode);
    // // console.log("start frame: " + all_start_frame);
    // // console.log("finish frame: " + all_finish_frame);

    data.length = 0;
    for(i = 0; i < all_episode.length; i++){
        data.push([all_episode[i], all_start_frame[i], all_finish_frame[i]])
    }
    console.log(data)
    // for(i = 0; i < all_episode.length; i++){
    //     data.push(all_episode[i], all_start_frame[i], all_finish_frame[i]])
    // }
    // for(i = 0; i < all_episode.length; i++){
    //     data[i].push(all_start_frame[i])
    // }

    //data = [[7, 30120, 30168], [4, 184, 240]]

}


// $("#list").change(function(){
//     var all_episode = $("select").toArray().map(x => $(x).val());
//     var all_start_frame = $("[id=startFrame]").toArray().map(x => $(x).val());
//     var all_finish_frame = $("[id=finishFrame]").toArray().map(x => $(x).val());
//     // console.log("episode: " + all_episode);
//     // console.log("start frame: " + all_start_frame);
//     // console.log("finish frame: " + all_finish_frame);

//     for(i = 0; i < all_episode.length; i++){
//         data[i] = [all_episode[i], all_start_frame[i], all_finish_frame[i]]
//     }
// })

function test(){
    changeListener()
    fetch('http://127.0.0.1:5000/SendClips', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        var num = Math.random();
        $("#gif").attr("src","../output.gif?v="+num);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

$("#finish_btn").on("click", test);


function remove(){
    $('#gif').removeAttr('src')
}
$("#remove_btn").on("click", remove);