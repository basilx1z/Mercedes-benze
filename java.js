 
            

    
    var showorder=function () {
        //input
        var userorder = prompt ('What do you prefer nissan or BM?');
        var orderimage='';
        var numberofimages;
        //processing
        while (userorder !== 'Mercedes' && userorder !== 'BM') {
            userorder = ('What is the most expensive Mercedes or Nissan');
            }
            numberofimages = prompt('how many times do you want to see?');
            for (let ctr =0;ctr < numberofimages; ctr++) {
                if (userorder === 'BM') {
                    orderimage +='<img class="style" src="img/bmw.jpg">';
                } else if (userorder === 'TOYOTA'){
                    orderimage=orderimage + '<img class="style" src="img/m.jpg">';
            }
        }
        //output
        return orderimage;
     };