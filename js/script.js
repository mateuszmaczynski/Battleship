$(document).ready(function() {

        var button = $("#newGame"); //using JQuery instant of statement DOM
        var finish = $("#finishGame");

        button.on("click", function () {
            var board = document.querySelector("#boardArea");
            if (document.forms.chooseLevel.level[0].checked === true) {
                var numberRows = 7;
                var numberCols = 7;
            }
            else if (document.forms.chooseLevel.level[1].checked === true) {
                var numberRows = 8;
                var numberCols = 8;
            }
            else if (document.forms.chooseLevel.level[2].checked === true) {
                var numberRows = 10;
                var numberCols = 10;
            }

            for (var i = 0; i < numberRows; i++) {
                var tr = document.createElement("tr");
                board.appendChild(tr);
                for (var j = 0; j < numberCols; j++) {
                    var td = document.createElement("td");
                    board.appendChild(td);
                    td.id = [i] + [j];
                }
            }
            button.css("display", "none");

            cells = document.querySelectorAll("td");
            for (var i = 0; i < cells.length; i++) {
                cells[i].onclick = ShowCellId;
            }

            function ShowCellId(eventObj) {
                var cellId = eventObj.target;
                var id = cellId.id;
                //alert(id);

                for (var k = 0; k < 3; k++) {
                    var ship = ships[k];
                    var index = ship.locations.indexOf(id);
//var index = locations.indexOf(id);
                    if (index >= 0) {
                        alert(ship.locations);
                        alert("trafiłeś statek " + id + " index ma wartość " + index);
                        return true;
                    }
                    else {
                        alert(ship.locations);
                        alert("nie znalazłeś statku, id= " + id + " index ma wartość " + index);
                        return false;

                    }
                }
            }


            finish.on("click", function () {
                button.css("display", "inline");

                while (board.hasChildNodes()) {
                    board.removeChild(board.firstChild);
                }
            });
        })
    }
)
