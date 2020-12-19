 import './calender.css'
 var dt = new Date();
        function renderDate() {
            dt.setDate(1);
            var day = dt.getDay();
            var today = new Date();
            var endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();

            var prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0
            ).getDate();
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
            document.getElementById("month").innerHTML = months[dt.getMonth()];
            document.getElementById("date_str").innerHTML =  dt.getFullYear();
            var cells = "";
            for (var x = day; x > 0; x--) {
                cells += "<div className='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
            console.log(day);
            for (var i = 1; i <= endDate; i++)
             {  
                if(i==7 && dt.getMonth() == 9)
                cells += "<div className='whd'>" + i + "</div>";
                else if(i==10 && dt.getMonth() == 9)
                cells += "<div className='mbd'>" + i + "</div>";
                else if(i==13 && dt.getMonth() == 9)
                cells += "<div className='ird'>" + i + "</div>";
                else if(i==16 && dt.getMonth() == 9)
                cells += "<div className='wfd'>" + i + "</div>";
                else if(i==17 && dt.getMonth() == 9)
                cells += "<div className='pd'>" + i + "</div>";
                else if(i==21 && dt.getMonth() == 9)
                cells += "<div className='nwd'>" + i + "</div>";
                else if(i==27 && dt.getMonth() == 9)
                
                cells += "<div className='whda'>" + i + "</div>";


                else if(i==8 && dt.getMonth() == 10)
                cells += "<div className='pol'>" + i + "</div>";
                else if(i==9 && dt.getMonth() ==10)
                cells += "<div className='rec'>" + i + "</div>";
                else if(i==18 && dt.getMonth() == 10)
                cells += "<div className='gis'>" + i + "</div>";
                else if(i==21 && dt.getMonth() == 10)
                cells += "<div className='fish'>" + i + "</div>";
                else if(i==5 && dt.getMonth() == 11)
                cells += "<div className='soil'>" + i + "</div>";
                else if(i==11 && dt.getMonth() == 11)
                cells += "<div className='mnt'>" + i + "</div>";
                else if(i==18 && dt.getMonth() == 11)
                cells += "<div className='imd'>" + i + "</div>";
                else if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div className='x'>" + i + "</div>";
                else
                    cells += "<div className='x'>" + i + "</div>";
            }
            document.getElementsByclassNameName("days")[0].innerHTML = cells;

        }

        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }
    
